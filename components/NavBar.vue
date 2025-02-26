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
        <FontAwesomeIcon :icon="['fab', 'spotify']" />
        <FontAwesomeIcon :icon="['fab', 'facebook']" />
        <FontAwesomeIcon :icon="['fab', 'instagram']" />
        <FontAwesomeIcon :icon="['fab', 'youtube']" />
        <FontAwesomeIcon :icon="['fas', 'music']" />
      </ClientOnly>
    </div>
  </nav>
</header>
</template>