<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const scroll = ref(true)

onMounted(() => {

  gsap.to('[data-speed]', {
    x: (i, el) => {
      if (el.getAttribute('data-direction') === 'left') {
        const speed = parseFloat(el.getAttribute('data-speed'));
        return -(1 - speed) * ScrollTrigger.maxScroll(window); // Move left
      } else if (el.getAttribute('data-direction') === 'right') {
        const speed = parseFloat(el.getAttribute('data-speed'));
        return (1 + speed) * ScrollTrigger.maxScroll(window); //Move Right
      }
      return 0; // No horizontal movement for other elements
    },
    y: (i, el) => {
      if (el.getAttribute('data-direction') === 'up') {
        const speed = parseFloat(el.getAttribute('data-speed'));
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
          snapTo: sections.map(section => ScrollTrigger.positionInViewport(section, 'top')),
          duration: { min: .4, max: .8 },
          ease: 'power3.inOut',
        },
      });
    });
  }
})

</script>

<template>
<div class="bg-gradient-to-r from-black to-blue-900 overflow-hidden">
  <div class="hidden lg:flex section h-[160vh] text-white">
    <div class="hidden md:flex h-screen w-7xl mx-auto text-8xl justify-between items-center px-2 underline">
      <p data-speed="2" data-direction="up">Producer</p>
      <p data-speed="-2" data-direction="up">Engineer</p>
      <p data-speed="-2" data-direction="left">Musician</p>
    </div>
  </div>
  <div class="flex flex-col lg:hidden section h-screen w-full text-6xl justify-center space-y-6 items-center underline text-white">
    <p data-speed="-2" data-direction="left">Producer</p>
    <p data-speed="2" data-direction="right">Engineer</p>
    <p data-speed="-2" data-direction="left">Musician</p>
  </div>
  <div class="flex flex-col section h-screen min-h-[700px] w-full justify-center items-center">
      <iframe
          class="w-5/6 md:w-4xl h-[500px]"
          src="https://open.spotify.com/embed/playlist/1v4lxr6U7X46BmVNVlq268?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
      >
      </iframe>
    <div class="flex w-full px-8 items-center justify-center text-center my-2">
      <p class="text-white text-xl">Produced, Mixed, and Mastered by Zachary Manno</p>
    </div>
  </div>
</div>
</template>

<style>

</style>