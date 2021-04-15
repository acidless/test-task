<template>
  <div class="pagination">
    <Button @click="onPreviousPage"> &#60;</Button>
    <Button @click="onNextPage"> &#62;</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  name: "Pagination",
  components: { Button },
  props: {
    onPreviousPage: Function,
    onNextPage: Function,
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-bottom: 2em;

  button:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
