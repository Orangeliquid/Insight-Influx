/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#0047bb",
      "primary-content": "#c7dcff",
      "secondary": "#002ff8",
      "secondary-content": "#c9ddff",
      "accent": "#0000ff",
      "accent-content": "#c6dbff",
      "neutral": "#0a0408",
      "neutral-content": "#c7c4c6",
      "base-100": "#282a1f",
      "base-200": "#212319",
      "base-300": "#1b1c14",
      "base-content": "#cfd0cd",
      "info": "#00c6ff",
      "info-content": "#000e16",
      "success": "#00c497",
      "success-content": "#000e08",
      "warning": "#ffa100",
      "warning-content": "#160900",
      "error": "#ff0451",
      "error-content": "#160002",
      "pink": "#ff66cc",
      "orange": "#ff9900", 
      "indigo": "#4b0082", 
      "teal": "#008080",   
      "gray": "#808080",
      "white": "#cfdef2",    
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
