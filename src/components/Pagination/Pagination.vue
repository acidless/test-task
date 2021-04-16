<template>
  <div class="pagination">
    <Button :disabled="currentPage <= 1" @click="onPreviousPage"> &#60;</Button>
    <Button :disabled="isLastPage" @click="onNextPage"> &#62;</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import { ref } from "vue";
export default {
  name: "Pagination",
  components: { Button },
  props: {
    isLastPage: Boolean,
  },

  setup(props, { emit }) {
    const currentPage = ref(1);

    function onPreviousPage() {
      currentPage.value -= 1;
      emit("newPage", currentPage.value);
    }

    function onNextPage() {
      currentPage.value += 1;
      emit("newPage", currentPage.value);
    }

    return {
      currentPage,
      onPreviousPage,
      onNextPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;

  button:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
