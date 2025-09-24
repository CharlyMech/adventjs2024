import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		formats: ["image/webp"], // solo servir WebP
		qualities: [60, 75, 80], // valores que uses en <Image quality={...}>
		deviceSizes: [360, 640, 768, 1024, 1280, 1536],
		imageSizes: [256, 384, 512, 640, 768],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
