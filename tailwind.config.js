module.exports = {
   purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            "custom-gray": "#212121",
            "custom-white": "#F7F7F6",
            "custom-mint": "#6effd3",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
