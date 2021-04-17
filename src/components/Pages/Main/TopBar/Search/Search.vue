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
  display: flex;
  align-items: center;

  input {
    margin-right: 1em;
  }
}
</style>
