<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0
    }
  });
})



</script>

<template>
<div>
  <div class="flex h-[180vh] bg-gradient-to-r from-black to-blue-900 text-white">
    <div class="flex flex-col h-fit w-7xl mx-auto my-60 text-8xl underline">
      <p data-speed="0.25">Producer</p>
      <p data-speed="0.65" class="text-center">Engineer</p>
      <p data-speed="0.4" class="text-right">Musician</p>
    </div>
  </div>
  <div class="flex h-screen bg-emerald-100"></div>
</div>
</template>
