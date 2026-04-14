/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
