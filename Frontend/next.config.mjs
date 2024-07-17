/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },

      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/null",
        destination: "/",
        permanent: true,
      },
      {
        source: "/new-launches",
        destination: "/new-launches/new-launches",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
