<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const slides = [
    "/img/zach1.jpg",
    "/img/zach3.jpg",
    "/img/zach4.jpg"
]

const currentIndex = ref(0)

const startAutoSlide = () => {
  setInterval(() => {
    nextSlide()
  }, 5000)
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1) % slides.length
}

onMounted(() => {
  startAutoSlide()
})

</script>

<template>
  <div class="justify-items-center">
    <!--  Carousel-->
    <div class="flex items-center w-2xs md:w-xl">
      <!--    Image Frame-->
      <div class="flex w-2xs md:w-xl overflow-hidden">
        <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
              v-for="(slide, index) in slides"
              :key="index"
              class="flex-shrink-0"
          >
            <img
                :src="slide"
                alt="studio"
                class="w-2xs md:w-xl h-full"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
