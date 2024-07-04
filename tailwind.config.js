
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
	"./node_modules/flowbite/**/*.js",
	
  ],
	theme: {
		extend: 
    {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        black: '#030016', 
        skyblue: '#1cb9de', 
        grey: '#B7B7B7', 

		
			  },
			textColor: {
				'default': '#ffffff', 
			},
			letterSpacing: {
				'10': '0.1em', 
			  },
		},
		screens: {
			'xs': '360px',

			'sm': '576px',
			
	  
			'md': '960px',
			
	  
			'lg': '1440px',
			
		  },
		  
		  
	},
	plugins: [],
}
