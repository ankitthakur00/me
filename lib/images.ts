import nextConfig from "@/next.config.mjs";

export const getImagePath = (imgPath: string): string => {
    return `${nextConfig.basePath}/${imgPath}`;
  };