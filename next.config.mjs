/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com", // ✅ permite los avatares externos
        port: "",
        pathname: "/api/**",
      },
    ],
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false,
    }
    return config
  },
}

export default nextConfig
