<template>
   <section id="about" class="h-screen flex flex-col justify-center mb-24 px-4 md:px-16 bg-custom-gray">
      <h1 class="text-6xl mb-4 2xl:text-8xl">About</h1>
      <p class="text-xl 2xl:text-3xl">Outside of the core of HTML, CSS, and JavaScript, there are so many tools available for web development and design. Here are some of mine.</p>
      <div class="flex py-8">
         <ul class="w-1/2">
            <li><p class="text-xl 2xl:text-3xl">VueJS</p></li>
            <li><p class="text-xl 2xl:text-3xl">TailwindCSS</p></li>
            <li><p class="text-xl 2xl:text-3xl">WordPress</p></li>
            <li><p class="text-xl 2xl:text-3xl">SASS</p></li>
         </ul>
         <ul class="w-1/2">
            <li><p class="text-xl 2xl:text-3xl">AdobeXD</p></li>
            <li><p class="text-xl 2xl:text-3xl">Illustrator</p></li>
            <li><p class="text-xl 2xl:text-3xl">Photoshop</p></li>
         </ul>
      </div>
   </section>
</template>

<script>
export default {
   emits: ['updateAboutYPos'],
   data() {
      return {
         aboutYPos: 0
      }
   },
   created() {
      window.addEventListener("resize", this.updateAboutYPos);
   },
   mounted() {
      this.updateAboutYPos();
   },
   methods: {
      updateAboutYPos() {
         this.aboutYPos = document.getElementById("about").offsetTop;
         this.$emit('updateAboutYPos', this.aboutYPos);
      }
   }
}
</script>