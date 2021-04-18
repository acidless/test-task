<template>
  <div class="pagination">
    <Button :disabled="currentPage <= 1" @click="onPreviousPage"> &#60;</Button>
    <Button :disabled="isLastPage" @click="onNextPage"> &#62;</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  name: "Pagination",
  components: { Button },
  props: {
    isLastPage: Boolean,
    currentPage: Number,
  },

  setup(props, { emit }) {
    function onPreviousPage() {
      emit("newPage", props.currentPage - 1);
    }

    function onNextPage() {
      emit("newPage", props.currentPage + 1);
    }

    return {
      onPreviousPage,
      onNextPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  margin-bottom: 2em;

  button:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
