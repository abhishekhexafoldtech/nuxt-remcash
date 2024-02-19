<template>
  <div >
    <Sidenav />
    <main>
      <Navbar />
      <slot />
    </main>
  </div>
</template>

<script setup >
import Sidenav from "@/layouts/Sidenav";
import Navbar from "@/layouts/Navbar";

</script>
