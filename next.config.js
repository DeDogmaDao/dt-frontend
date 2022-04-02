module.exports = {
  options: {
    sourcemaps: "development", // possible values can be production, development, or none
  },
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/((?!(?:underconstruction)$).*$)",
        destination: "/underconstruction",
        permanent: false,
      },
    ];
  },
};
