// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}",
    // "./public/index.html",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    // Add any other files or directories that include your Tailwind classes
  ],
  theme: {
    colors: {
       Mariner: "#236BD3",
Amethyst: "#A252D0",
Firefly: "#091F29",
black: "#000000",
VividTangerine: "#FF8A8A",
transparent: 'transparent',
current: 'currentColor',
white: '#ffffff',
purple: '#3f3cbb',
midnight: '#121063',
corn:'#E1C300',
shark:'#212122',
    },
    keyframes: {
              slide: {
                '0%': {
                  transform: 'translateX(0%)',
      
                },
      
                '100%': {
                  transform: 'translateX(-100%)',
      
                }
              }
            },
            animation: {
              infiniteScroll: "slide 5s linear infinite"
            }
  },
  plugins: [
    // ... other plugins
    require('@tailwindcss/aspect-ratio'),
  ],

  
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/*/.{js,ts,jsx,tsx,mdx}',
//     './src/components/*/.{js,ts,jsx,tsx,mdx}',
//     './src/app/*/.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//       },
//       colors: {
//         Mariner: "#236BD3",
//         Amethyst: "#A252D0",
//         Firefly: "#091F29",
//         black: "#000000",
//         VividTangerine: "#FF8A8A",
//         transparent: 'transparent',
//         current: 'currentColor',
//         white: '#ffffff',
//         purple: '#3f3cbb',
//         midnight: '#121063',
//         corn:'#E1C300',
//         shark:'#212122',
//       },
//       keyframes: {
//         slide: {
//           '0%': {
//             transform: 'translateX(0%)',

//           },

//           '100%': {
//             transform: 'translateX(-100%)',

//           }
//         }
//       },
//       animation: {
//         infiniteScroll: "slide 5s linear infinite"
//       }

//     },
//   },
//   plugins: [],
// }
