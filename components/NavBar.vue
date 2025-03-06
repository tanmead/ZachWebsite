<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const router = useRouter();
const menuOpen = ref(false);

const handleOpen = () => {
  menuOpen.value = !menuOpen.value;
  console.log(menuOpen.value);
}

const menuIcon = computed(() => {
  if (menuOpen.value === false) {
    return ['fas', 'bars']
  } else {
    return ['fas', 'xmark']
  }
})

router.afterEach(() => {
  menuOpen.value = false;
})

</script>

<template>
<header>
  <nav class="fixed flex max-md:flex-col top-0 left-0 w-full bg-gradient-to-r from-black to-blue-900 pt-6 md:pt-2 items-center justify-between z-10">
    <div class="flex items-center px-8 pb-6 justify-between w-full">
      <NuxtLink to="/" class="logo text-xl md:text-2xl">Zachary Manno</NuxtLink>
      <p class="hidden md:block">Producer | Engineer | Musician</p>
      <div class="flex md:hidden">
        <ClientOnly>
          <FontAwesomeIcon
              :icon="menuIcon"
              class="text-2xl"
              @click="handleOpen"
          />
        </ClientOnly>
      </div>
      <div class="hidden md:flex justify-between space-x-6 w-fit text-xl">
        <NuxtLink to="/contact">Contact</NuxtLink>
        <ClientOnly>
          <a href='https://open.spotify.com/artist/2NDqx1z4TTkFr0QOnk8nX3?si=CP0QgzEHSh6cQa7mXNnkQA' target="_blank" class="hover:text-gray-400 transition duration-200">
            <FontAwesomeIcon :icon="['fab', 'spotify']"/>
          </a>
          <a href='https://www.facebook.com/zachmannomusic' target="_blank" class="hover:text-gray-400 transition duration-200">
            <FontAwesomeIcon :icon="['fab', 'facebook']"/>
          </a>
          <a href='https://www.instagram.com/zacharymanno/' target="_blank" class="hover:text-gray-400 transition duration-200">
            <FontAwesomeIcon :icon="['fab', 'instagram']"/>
          </a>
          <a href='https://music.apple.com/us/artist/haley-mae-campbell/962444490' target="_blank" class="hover:text-gray-400 transition duration-200">
            <FontAwesomeIcon :icon="['fas', 'music']"/>
          </a>
        </ClientOnly>
      </div>
    </div>

    <div
        class="flex flex-col w-full text-center space-y-6 py-6 bg-black md:hidden text-2xl"
        :class="{ 'hidden': !menuOpen }"
    >
      <NuxtLink to="/contact">Contact</NuxtLink>
      <ClientOnly>
        <a href='https://open.spotify.com/artist/2NDqx1z4TTkFr0QOnk8nX3?si=CP0QgzEHSh6cQa7mXNnkQA' target="_blank" class="hover:text-gray-400 transition duration-200">
          <FontAwesomeIcon :icon="['fab', 'spotify']"/>
        </a>
        <a href='https://www.facebook.com/zachmannomusic' target="_blank" class="hover:text-gray-400 transition duration-200">
          <FontAwesomeIcon :icon="['fab', 'facebook']"/>
        </a>
        <a href='https://www.instagram.com/zacharymanno/' target="_blank" class="hover:text-gray-400 transition duration-200">
          <FontAwesomeIcon :icon="['fab', 'instagram']"/>
        </a>
        <a href='https://music.apple.com/us/artist/haley-mae-campbell/962444490' target="_blank" class="hover:text-gray-400 transition duration-200">
          <FontAwesomeIcon :icon="['fas', 'music']"/>
        </a>
      </ClientOnly>
    </div>
  </nav>
</header>
</template>