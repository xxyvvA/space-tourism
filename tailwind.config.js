module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    colors: {
      bg: "#0B0D17",
      grey: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      bellefair: "Bellefair",
      barlow: "Barlow Condensed",
      regBar: "Barlow",
    },
    extend: {
      backgroundImage: {
        homeMobile: 'url("/img/home/background-home-mobile.jpg")',
        homeTablet: 'url("/img/home/background-home-tablet.jpg")',
        homeDesk: 'url("/img/home/background-home-desktop.jpg")',
      },
    },
  },
  plugins: [],
};
