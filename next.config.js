/** @type {import('next').NextConfig} */  
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-energisa-header",
            value: `${Math.random()}`,
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          }
        ],
      }
    ]
  }
}
