export const theme = {
  extend: {
    keyframes: {
      flicker: {
        "0%, 100%": { opacity: "1" },
        "10%": { opacity: "0.1" },
        "20%": { opacity: "1" },
        "30%": { opacity: "0.1" },
        "40%": { opacity: "1" },
        "70%": { opacity: "0.9" },
      },
    },
    animation: {
      flicker: "flicker 0.3s ease-in-out",
    },
  },
};
export const plugins = [];
