module.exports = {
  options: {
    sourcemaps: "development", // possible values can be production, development, or none
  },
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  async redirects() {
    return [
      {
        source: "/gameboard",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/auction",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/gallery",
        destination: "/404",
        permanent: false,
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //     {
  //       source: "/gallery",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //     {
  //       source: "/gameboard",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //     {
  //       source: "/roadmap",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //     {
  //       source: "/team",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //     {
  //       source: "/faq",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //   ];
  // },
};
