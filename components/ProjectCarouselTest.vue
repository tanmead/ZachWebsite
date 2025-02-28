<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const slides = [
  {image: '/img/breland.png',
    alt: 'Breland',
    title: ["Cowboy Don't", "Told You I Could Drink"],
    by: ["BRELAND", "BRELAND feat Lady A"],
    description: [
        "Produced by Zachary Manno, Sam Summer, and Sean Small. Written by Zachary Manno, BRELAND, and Haley Mae Campbell.",
        "Produced by Zachary Manno, Sam Summer, and Sean Small. Written by Zachary Manno, BRELAND, and Charles Kelley."
    ]
  },
  {image: '/img/HMC.png',
    alt: 'Haley Mae Campbell',
    title: ["20Something - EP"],
    by: ["Haley Mae Campbell"],
    description: ["Produced, Mixed, and Mastered by Zachary Manno."]
  },
  {image: '/img/HMA.png',
    alt: 'Hannah Mae Allison',
    title: ["Leaving Love Alone", "Thank God for All the Boys"],
    by: ["Hannah Mae Allison", "Hannah Mae Allison"],
    description: ["Produced, Mixed, and Mastered by Zachary Manno.", "Produced, Mixed, and Mastered by Zachary Manno."]
  }
]

const currentIndex = ref(0)
let autoSlideInterval = null

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const slideText = computed(() => {
  const currentSlide = slides[currentIndex.value]

  if (Array.isArray(currentSlide.title)) {
    return currentSlide.title.map((title, index) => ({
      title,
      by: currentSlide.by[index],
      description: currentSlide.description[index],
    }))
  } else {
    return [{
      title: currentSlide.title,
      by: currentSlide.by,
      description: currentSlide.description,
    }]
  }
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

</script>

<template>
<div class="bg-blue-500 w-xl rounded-2xl p-6">
<!--  Carousel-->
  <div class="flex w-full justify-around items-center mt-10">
    <button
        class="text-2xl bg-white h-fit p-2 rounded-4xl flex items-center"
        @click="() => { prevSlide(); stopAutoSlide(); }"
    >
      <ClientOnly>
        <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="px-1 py-4"/>
      </ClientOnly>
    </button>
<!--    Image Frame-->
    <div class="flex w-2xs overflow-hidden">
      <div
          class="flex w-2xs transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
            v-for="(slide, index) in slides"
            :key="index"
            class="flex-shrink-0"
        >
          <img
              :src="slide.image"
              :alt="slide.alt"
              class="w-2xs"
          >
        </div>
      </div>
    </div>
    <button
        class="text-2xl bg-white h-fit p-2 rounded-4xl flex items-center"
        @click="() => { nextSlide(); stopAutoSlide(); }"
    >
      <ClientOnly>
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="px-1 py-4"/>
      </ClientOnly>
    </button>
  </div>
  <div
      class="flex w-full flex-col text-center"
  >
    <div
        v-for="(slide, index) in slideText"
        :key="index"
        class="mt-6 space-y-2"
    >
      <div>
        <p class="text-4xl font-bold">{{ slide.title }}</p>
        <p class="italic text-xl">By: {{ slide.by }}</p>
      </div>
      <p class="font-light">{{ slide.description }}</p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>