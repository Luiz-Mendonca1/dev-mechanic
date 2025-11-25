import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: { // Adiciona a configuração de imagens
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com', // O domínio que o Next.js está reclamando
        port: '',
        pathname: '/**', // Permite qualquer caminho de imagem nesse domínio
      },
    ],
  },
};

export default nextConfig;