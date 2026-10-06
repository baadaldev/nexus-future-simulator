import type { NextConfig } from "next";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split("/")[1] : "nexus-future-simulator";

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? `/${repo}` : undefined,
  assetPrefix: isGithubActions ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
