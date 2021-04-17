<template>
  <div class="data-size-choice">
    <h1>Choose data size</h1>
    <div class="data-size-choice__buttons">
      <Button @click="setSmallDataSize">Small</Button>
      <Button @click="setLargeDataSize">Large</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import { LARGE_DATA_SIZE, SMALL_DATA_SIZE } from "@/utils/consts";

export default {
  components: { Button },
  methods: {
    setSmallDataSize() {
      this.$emit("setDataSize", SMALL_DATA_SIZE);
    },
    setLargeDataSize() {
      this.$emit("setDataSize", LARGE_DATA_SIZE);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-size-choice {
  padding: 0.5em;
  margin-bottom: 1em;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 0.25em;
  }

  button:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
