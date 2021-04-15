<template>
  <table class="users-table">
    <TableHeading />
    <TableBody />
  </table>
</template>

<script>
import TableHeading from "@/components/Table/TableHeading/TableHeading";
import TableBody from "@/components/Table/TableBody/TableBody";
export default {
  name: "Table",
  components: { TableBody, TableHeading },
};
</script>

<style lang="scss">
.users-table {
  width: 100%;
  border-spacing: 0;
  display: grid;
  grid-template-columns:
    minmax(50px, 1fr)
    repeat(4, minmax(150px, 1.75fr));
  overflow: auto;
}
</style>
