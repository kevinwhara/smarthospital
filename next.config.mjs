/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "localhost:3000"
            }
        ]
    }
};



export default nextConfig;
