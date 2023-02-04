module.exports = {
  siteUrl: "https://happyspidres.pl",
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};
