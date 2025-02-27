<script setup>
const slides = [
  {image: '/img/breland.png', alt: 'Breland'},
  {image: '/img/HMC.png', alt: 'Haley Mae Campbell'},
  {image: '/img/HMA.png', alt: 'Hannah Mae Allison'}
]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <div class="bg-blue-500 w-xl justify-items-center rounded-2xl">
    <!--Carousel Slides-->
    <div class="relative w-xs m-10 overflow-hidden">
      <div class="flex w-full transition-transform duration-500 ease-in-out"
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
            v-for="(slide, index) in slides"
            :key="index"
            class="w-full flex-shrink-0"
        >
          <img
              :src="slide.image"
              :alt="slide.alt"
              class="w-full h-auto object-cover"
          >
        </div>
      </div>
      <!--Navigation Buttons-->
      <button
          class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full hover:opacity-75"
          @click="prevSlide"
      >
        &larr;
      </button>
      <button
          class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full hover:opacity-75"
          @click="nextSlide"
      >
        &rarr;
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>