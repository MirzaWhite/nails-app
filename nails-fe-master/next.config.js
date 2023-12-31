module.exports = {
  webpack: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    domains: [
      "sgp1.digitaloceanspaces.com",
      "cls-cdn-wip.sgp1.digitaloceanspaces.com",
      "cdn.classmateshop.co.in",
      "cls-cdn-wip.sgp1.cdn.digitaloceanspaces.com",
      "sgp1.digitaloceanspaces.com/cls-cdn-wip/media/creator/profile_picture/1_profile_image",
      "cdn.deepsense.space",
      "sgp1.digitaloceanspaces.com",
      "cls-cdn-wip.sgp1.digitaloceanspaces.com",
      "cdn.classmateshop.co.in",
      "cls-cdn-wip.sgp1.cdn.digitaloceanspaces.com",
      "sgp1.digitaloceanspaces.com/cls-cdn-wip/media/creator/profile_picture/1_profile_image",
      "cdn.deepsense.space",
      'sgp1.digitaloceanspaces.com',
      'deepsense.sgp1.cdn.digitaloceanspaces.com',
      'cls-cdn-wip.sgp1.cdn.digitaloceanspaces.com',
      'sgp1.digitaloceanspaces.com/cls-cdn-wip/media/creator/profile_picture/1_profile_image',
      "deepsense.sgp1.cdn.digitaloceanspaces.com"
    ]
  },
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
}