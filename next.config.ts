import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "variables" as *;`, // <- chèn biến vào mọi file SCSS
  }
};

export default nextConfig;
