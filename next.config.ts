/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  compiler: {
    styledComponents: false, 
    devIndicators: false
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/screen',
        permanent: true, 
      },
    ];
  },
};

module.exports = nextConfig;