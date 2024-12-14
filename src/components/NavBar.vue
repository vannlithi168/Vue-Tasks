<template>
  <nav
    class="flex py-4 px-10 justify-between items-center bg-slate-900 mx-auto">
    <div class="flex items-center gap-3">
      <img :src="Logo" alt="Logo" class="w-10 drop-shadow-lg" />
      <div class="text-3xl font-medium">
        <span class="text-green-600">Vue</span>
        <span class="text-yellow-500">Task</span>
      </div>
    </div>

    <div class="flex gap-4 items-center text-white font-medium">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tasks">All Tasks</RouterLink>
      <a href="#">Favorite</a>
      <a href="#">Done Tasks</a>
      <button class="bg-green-500 rounded-md px-3 py-1">Sign in</button>
    </div>
  </nav>
</template>

<script setup>
import Logo from "@/assets/logo.svg";
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
