/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors:{
      white:"#ffffff",
      "gray-light": "#F6F6F6",
      transparent: "transparent",
      current: "currentColor",
      blue:{
        DEFAULT:"#0C2340"
      },
      green: {
        DEFAULT: "#367D00",
        80: "#449F00",
        70: "#5AD200",
        60: "#B9FF84",
        50: "#E6FFD4",
      },
      red: {
        DEFAULT: "#B80000",
        80: "#E50000",
        70: "#FF4444",
        60: "#FFA5A5",
        50: "#FFDCDC",
      },
      grad: {
        1: "#FFC400",
        2: "#E88E35",
        3: "#DC6F5F",
        4: "#CC559A",
        5: "#AD65D1",
      },
      gray: {
        DEFAULT: "#3D3D3D",
        "light": "#D4D4D4",
        40: "#7B746F",
        20: "#F1F5F9",

      },
    }
  },
  plugins: [],
}

