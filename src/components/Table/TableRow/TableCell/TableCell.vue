<template>
  <td>
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: "TableCell",
};
</script>

<style lang="scss" scoped>
td {
  padding: 0.75em 0;
  border-bottom: 0.1em solid lightgray;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
