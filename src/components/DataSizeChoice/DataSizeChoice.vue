<template>
  <div class="data-size-choice">
    <Button>Small</Button>
    <Button>Large</Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  components: { Button },
  methods: {
    setSmallDataSize() {
      this.$emit("setDataSize", 32);
    },
    setLargeDataSize() {
      this.$emit("setDataSize", 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-size-choice {
  padding: 0.5em;
  margin-bottom: 1em;

  button:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
