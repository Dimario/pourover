<template>
  <router-view/>

  <Confetti/>
</template>
<script lang="ts">
import Confetti from "@/components/Confetti.vue";

export default {
  name: "App",
  components: {
    Confetti
  }
};
</script>