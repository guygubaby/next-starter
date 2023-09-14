const AutoImport = require('unplugin-auto-import/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins = [
      ...config.plugins,
      AutoImport({
        imports: ['react'],
        dts: './typings/auto-imports.d.ts',
      }),
    ]
    return config
  },
}

module.exports = nextConfig
