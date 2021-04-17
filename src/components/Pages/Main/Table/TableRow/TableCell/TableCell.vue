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

<style lang="scss">
td {
  padding: 1em 0.25em;
  border-bottom: 0.1em solid lightgray;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: gray;
  text-align: center;
}
</style>
