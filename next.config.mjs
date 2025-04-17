import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "images.prismic.io" }, { hostname: "theirstack.com"}, { hostname: "img.youtube.com"}]
  }

};

export default withMDX(config);
