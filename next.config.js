module.exports = {
  options: {
    sourcemaps: "development", // possible values can be production, development, or none
  },
  swcMinify: true,

  // async redirects() {
  //   return [
  //     {
  //       source: "/((?!(?:underconstruction)$).*$)",
  //       destination: "/underconstruction",
  //       permanent: false,
  //     },
  //   ];
  // },
<<<<<<< HEAD
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/underconstruction",
  //       permanent: true,
  //     },
  //     {
  //       source: "/gallery",
  //       destination: "/underconstruction",
  //       permanent: true,
  //     },
  //     {
  //       source: "/gameboard",
  //       destination: "/underconstruction",
  //       permanent: true,
  //     },
  //   ];
  // },
=======
  async redirects() {
    return [
      {
        source: "/",
        destination: "/underconstruction",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/underconstruction",
        permanent: true,
      },
      {
        source: "/gameboard",
        destination: "/underconstruction",
        permanent: true,
      },
    ];
  },
>>>>>>> d0b16ffdd53004cb4d763d6aba07a3ccf871d12a
};
