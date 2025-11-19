/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", 'www.svgbackgrounds.com', // For the background pattern
      'undraw.co',             // For the main hero image
      'images.unsplash.com',   // Optional: For future use
      'source.unsplash.com'  ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
