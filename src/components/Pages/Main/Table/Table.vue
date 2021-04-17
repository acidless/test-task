<template>
  <table class="users-table">
    <TableHead @sort="handleSort" />
    <Loader v-if="isLoading" />
    <TableBody v-else :users="data" />
  </table>
</template>

<script>
import TableBody from "@/components/Pages/Main/Table/TableBody/TableBody";
import Loader from "@/components/Loader/Loader";
import TableHead from "@/components/Pages/Main/Table/TableHead/TableHead";

export default {
  name: "Table",
  components: { TableHead, Loader, TableBody },
  props: {
    data: Array,
    isLoading: Boolean,
    handleSort: Function,
  },
};
</script>

<style lang="scss" scoped>
.users-table {
  width: 100%;
  border-spacing: 0;
  display: grid;
  grid-template-columns:
    minmax(50px, 1fr)
    repeat(4, minmax(100px, 1.75fr));
  overflow: auto;
  margin-bottom: 1em;
  animation: 0.8s FadeIn linear;
}
</style>
