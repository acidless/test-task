<template>
  <form @submit="onSearchClick" class="top-bar__search">
    <input v-model="search" type="text" />
    <Button type="submit">Search</Button>
  </form>
</template>

<script>
import Button from "@/components/Button/Button";
import { ref } from "vue";

export default {
  name: "Search",
  components: { Button },
  setup(props, { emit }) {
    const search = ref("");

    function onSearchClick(e) {
      e.preventDefault();

      emit("search", search.value.toLowerCase().trim());
    }

    return {
      search,
      onSearchClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-bar__search {
  display: grid;
  align-items: center;
  grid-template-columns: minmax(150px, 3fr) minmax(70px, 1fr);
  grid-gap: 1em;
}
</style>
