<template>
  <main>
    <Main v-if="dataSize" :data-size="dataSize" />
    <DataSizeChoice v-else @setDataSize="setDataSize" />
  </main>
</template>

<script>
import { ref } from "vue";
import DataSizeChoice from "@/components/Pages/DataSizeChoice/DataSizeChoice";
import Main from "@/components/Pages/Main/Main";

export default {
  name: "App",
  components: { Main, DataSizeChoice },
  setup() {
    const dataSize = ref(0);

    function setDataSize(size) {
      dataSize.value = size;
    }

    return {
      dataSize,
      setDataSize,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
