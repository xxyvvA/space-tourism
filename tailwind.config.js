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
        destinationMobile: 'url("/img/destination/background-destination-mobile.jpg")',
        destinationTablet: 'url("/img/destination/background-destination-tablet.jpg")',
        destinationDesk: 'url("/img/destination/background-destination-desktop.jpg")',
        crewMobile: 'url("/img/crew/background-crew-mobile.jpg")',
        crewTablet: 'url("/img/crew/background-crew-tablet.jpg")',
        crewDesk: 'url("/img/crew/background-crew-desktop.jpg")',
      },
    },
  },
  plugins: [],
};
