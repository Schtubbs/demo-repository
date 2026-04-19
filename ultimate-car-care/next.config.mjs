/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/demo-repository/ultimate-car-care",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
