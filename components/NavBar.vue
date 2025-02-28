<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
<header>
  <nav class="fixed flex top-0 left-0 w-full bg-gradient-to-r from-black to-blue-900 px-8 py-2 items-center justify-between">
    <div class="flex items-center justify-between w-lg">
      <p class="logo">Zachary Manno</p>
      <p>Producer | Engineer | Musician</p>
    </div>
    <div class="flex justify-between space-x-6 w-fit text-xl">
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
        <a href=# class="hover:text-gray-400 transition duration-200">
          <FontAwesomeIcon :icon="['fab', 'youtube']"/>
        </a>
        <a href='https://music.apple.com/us/artist/haley-mae-campbell/962444490' target="_blank" class="hover:text-gray-400 transition duration-200">
          <FontAwesomeIcon :icon="['fas', 'music']"/>
        </a>
      </ClientOnly>
    </div>
  </nav>
</header>
</template>