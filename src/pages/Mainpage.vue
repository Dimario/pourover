<template>
  <div class="game">
    <Pourover />
  </div>
  <Actions />
</template>
<script lang="ts">
import Pourover from "@/components/Pourover.vue";
import Actions from "@/components/Actions.vue";

export default {
  name: "Mainpage",
  components: { Actions, Pourover },
};
</script>
<style scoped>
.game {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10%);
  background: green;
}
</style>
