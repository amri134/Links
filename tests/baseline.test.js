const assert = require("node:assert/strict");
const { once } = require("node:events");
const { spawn } = require("node:child_process");
const test = require("node:test");


const PORT = 31337;
const BASE_URL = `http://127.0.0.1:${PORT}`;

let server;


async function waitForServer() {
    const deadline = Date.now() + 10_000;

    while (Date.now() < deadline) {
        try {
            const response = await fetch(`${BASE_URL}/`);

            if (response.ok) {
                return;
            }
        }
        catch (error) {
            // Server belum siap menerima koneksi.
        }

        await new Promise(resolve => setTimeout(resolve, 100));
    }

    throw new Error("Server lokal tidak siap dalam 10 detik.");
}


test.before(async () => {
    server = spawn(process.execPath, ["src/server.js"], {
        cwd: process.cwd(),
        env: {
            ...process.env,
            PORT: String(PORT)
        },
        stdio: "ignore"
    });

    await waitForServer();
});


test.after(async () => {
    if (!server || server.exitCode !== null) {
        return;
    }

    server.kill();
    await once(server, "exit");
});


test("halaman utama menjaga metadata dan landmark SEO", async () => {
    const response = await fetch(`${BASE_URL}/`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type"), /text\/html/);
    assert.match(html, /<html lang="id">/);
    assert.match(html, /<title>Hajijin Amri \| Personal Links<\/title>/);
    assert.match(html, /name="description"/);
    assert.match(html, /rel="canonical"[\s\S]*?https:\/\/links\.hajijinamri\.me\//);
    assert.match(html, /property="og:title"/);
    assert.match(html, /name="twitter:card"/);
    assert.match(html, /<main class="page-wrapper">/);
    assert.match(html, /<h1[\s\S]*?>[\s\S]*?Hajijin Amri/);
});


test("aset inti dan file crawler tetap dapat diakses", async () => {
    for (const path of [
        "/css/base.css",
        "/js/app.js",
        "/js/theme-init.js",
        "/data/site.json",
        "/assets/images/foto-192.webp",
        "/assets/images/foto-192.png",
        "/assets/icons/icon-512.png",
        "/assets/icons/yt.svg",
        "/robots.txt",
        "/sitemap.xml",
        "/manifest.webmanifest"
    ]) {
        const response = await fetch(`${BASE_URL}${path}`);
        assert.equal(response.status, 200, `${path} harus tersedia`);
    }
});


test("header cache dan keamanan diterapkan dengan aman", async () => {
    const [html, stylesheet, data] = await Promise.all([
        fetch(`${BASE_URL}/`),
        fetch(`${BASE_URL}/css/base.css`),
        fetch(`${BASE_URL}/data/site.json`)
    ]);

    assert.equal(html.headers.get("cache-control"), "no-cache");
    assert.equal(stylesheet.headers.get("cache-control"), "public, max-age=86400");
    assert.equal(data.headers.get("cache-control"), "public, max-age=3600");
    const csp =
        html.headers.get(
            "content-security-policy"
        );

    assert.match(csp, /default-src 'self'/);
    assert.match(csp, /https:\/\/static\.cloudflareinsights\.com/);
    assert.doesNotMatch(csp, /script-src[^;]*unsafe-inline/);
    assert.match(csp, /require-trusted-types-for 'script'/);
    assert.equal(html.headers.get("x-content-type-options"), "nosniff");
    assert.equal(html.headers.get("x-frame-options"), "SAMEORIGIN");
    assert.equal(html.headers.get("cross-origin-opener-policy"), "same-origin");
    assert.equal(
        html.headers.get("strict-transport-security"),
        "max-age=31536000; includeSubDomains"
    );
    assert.equal(
        html.headers.get("referrer-policy"),
        "strict-origin-when-cross-origin"
    );
});


test("robots dan sitemap memakai domain kanonik", async () => {
    const [robots, sitemap] = await Promise.all([
        fetch(`${BASE_URL}/robots.txt`).then(response => response.text()),
        fetch(`${BASE_URL}/sitemap.xml`).then(response => response.text())
    ]);

    assert.match(robots, /https:\/\/links\.hajijinamri\.me\/sitemap\.xml/);
    assert.match(sitemap, /https:\/\/links\.hajijinamri\.me\//);
});


test("halaman yang tidak ada memberi respons 404", async () => {
    const response = await fetch(`${BASE_URL}/halaman-tidak-ada`);

    assert.equal(response.status, 404);
});
