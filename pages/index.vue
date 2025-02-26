<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const scroll = ref(true)

onMounted(() => {

  window.scrollTo(0, 0);

  gsap.to('[data-speed]', {
    x: (i, el) => {
      if (el.getAttribute('data-direction') === 'left') {
        const speed = parseFloat(el.getAttribute('data-speed'));
        console.log(`Element: ${el.textContent}, Speed: ${speed}, Direction: Left`);
        return -(1 - speed) * ScrollTrigger.maxScroll(window); // Move left
      }
      return 0; // No horizontal movement for other elements
    },
    y: (i, el) => {
      if (el.getAttribute('data-direction') === 'up') {
        const speed = parseFloat(el.getAttribute('data-speed'));
        console.log(`Element: ${el.textContent}, Speed: ${speed}, Direction: Up`);
        return (1 - speed) * ScrollTrigger.maxScroll(window); // Move up
      }
      return ScrollTrigger.maxScroll(window); // No vertical movement for other elements
    },
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: true,
    },
  });
});

onMounted(async () => {
  if (import.meta.client) {
    await nextTick(); // Wait for the DOM to update
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.3, max: 0.8 },
          ease: 'power3.inOut',
        },
      });
    });
  }
})

</script>

<template>
<div class="bg-gradient-to-r from-black to-blue-900 overflow-hidden">
  <div class="flex section h-[160vh] text-white">
    <div class="flex h-screen w-7xl mx-auto text-8xl justify-between items-center underline">
      <p data-speed="2" data-direction="up">Producer</p>
      <p data-speed="-2" data-direction="up">Engineer</p>
      <p data-speed="-2" data-direction="left">Musician</p>
    </div>
  </div>
  <div class="flex section h-screen min-h-fit w-full bg-blue-50 justify-center items-center">

    <div class="flex h-fit space-x-20">
      <iframe
          class="w-xl h-[80vh]"
          src="https://open.spotify.com/embed/playlist/70tdiIds2OZYQMAGaLY4Z6?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
      >
      </iframe>
      <div class="bg-blue-500 w-xl rounded-2xl">
        Hello
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>