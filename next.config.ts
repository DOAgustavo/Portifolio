/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Ativa o suporte ao styled-components
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/screen',
        permanent: true, // Use true para redirecionamento permanente (301)
      },
    ];
  },
};

module.exports = nextConfig;