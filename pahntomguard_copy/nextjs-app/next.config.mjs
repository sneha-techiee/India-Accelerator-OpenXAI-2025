/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable WebSocket support for real-time monitoring
  experimental: {
    serverComponentsExternalPackages: ['ws'],
  },
  // Basic security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

export default nextConfig;