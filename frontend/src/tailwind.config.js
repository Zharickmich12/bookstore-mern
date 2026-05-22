export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {    
        extend: {
            colors: {
                'primary': '#A77F60',
                'secondary': '#CCD67F',
                'accent': '#8A5F41',
                'background': '#F3E4C9',
                'text': '#333333',
                'black': '#000000',
            }, 
            fontFamily: {
                'heading': ['Finlandica Text', 'sans-serif'],
                'body': ['Strichpunkt Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}