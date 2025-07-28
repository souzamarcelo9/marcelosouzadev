/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    // Remove o tratamento padrão de arquivos SVG pelo Webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Usa @svgr/webpack para transformá-los em componentes React
    });
    return config;
  },
}

export default nextConfig
