/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.cdninstagram.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
