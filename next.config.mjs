/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fonts.gstatic.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
