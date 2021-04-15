<template>
  <thead>
    <TableRow>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
    </TableRow>
  </thead>
</template>

<script>
import TableRow from "@/components/Table/TableRow/TableRow";
export default {
  name: "TableHeading",
  components: { TableRow },
};
</script>

<style lang="scss" scoped>
thead {
  display: contents;

  th {
    font-size: 1.3rem;
    padding: 1em 0;
    color: #fff;
    background: var(--heading-bg);
  }
}
</style>
