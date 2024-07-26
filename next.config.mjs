/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kjkoqlpycqdrbnzqfblx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/car-images/**",
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  reactStrictMode: true,
  // output: "export",
};

export default nextConfig;
