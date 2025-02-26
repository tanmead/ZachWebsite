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
      <font-awesome-icon icon="fab fa-spotify" />
      <font-awesome-icon icon="fa-solid fa-music" />
      <font-awesome-icon icon="fab fa-youtube" />
      <font-awesome-icon icon="fab fa-facebook" />
      <font-awesome-icon icon="fab fa-instagram" />
    </div>
  </nav>
</header>
</template>