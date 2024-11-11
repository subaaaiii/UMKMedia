/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        whiteSmoke500: "#F4F4F4",
        whiteSmoke550: "#F0F0F0;",
        whiteSmoke600: "#DEDEDE",
        whiteSmoke700: "#ADADAD",
        whiteSmoke800: "#868686",
        black50: "#E7E7E7",
        black100: "#B5B5B5",
        black400: "#3F4041",
        black500: "#0F1011",
        indigoDye500: "#12517C",
        greenWhatsapp: "#32D951",
        linkedinColor: "#0066C8",
        greyIcon: "#686464",
      },
      fontFamily: {
        heebo: "Heebo",
      },
      dropShadow: {
        customSm: "2px 2px 12px 0px rgba(1, 1, 1, 0.10)",
      },
      boxShadow: {
        customSm: "2px 2px 12px 0px rgba(1, 1, 1, 0.10)",
      },
      backgroundImage: {
        aboutSection: "url('./assets/images/Rectangle_104.png')",
        serviceSection: "url('./assets/images/wave_accent.png')",
        komunitySection: "url('./assets/images/wave_accent_bawah.png')",
        pilarSection1: "url('./assets/pilar/Background1.png')",
        pilarSection2: "url('./assets/pilar/Background2.png')",
        pilarSection3: "url('./assets/pilar/Background3.png')"
      },
      aspectRatio: {
        "9/16": "9 / 16",
        "5/2": "5 / 2",
        "2/1": "2 / 1",
        "3/1": "3 / 1",
      },
    },
  },
  plugins: [require("daisyui")],
};
