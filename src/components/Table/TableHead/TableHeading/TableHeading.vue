<template>
  <th>
    <button @click="onClick">
      {{ title }}
      <span :class="{ ascending: !!currentOrder }" v-if="currentOrder !== -1"
        >&#9658;</span
      >
    </button>
  </th>
</template>

<script>
export default {
  name: "TableHeading",
  props: {
    title: String,
    sortKey: String,
    currentOrder: Number,
  },

  setup(props, { emit }) {
    function onClick() {
      emit("sortBy", props.sortKey, props.currentOrder === 1 ? 0 : 1);
    }

    return {
      onClick,
    };
  },
};
</script>

<style lang="scss">
@import "./src/assets/animations";
th {
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1em 0;

    span {
      margin-left: 0.25em;
      transform: rotateZ(90deg);
      animation: 0.3s FadeIn linear;
      transition: 0.3s transform ease-in-out;

      &.ascending {
        transform: rotateZ(-90deg);
      }
    }
  }

  background: var(--main-color);
}
</style>
