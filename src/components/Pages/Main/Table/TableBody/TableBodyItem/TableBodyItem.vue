<template>
  <TableRow class="user-info" @click="select">
    <TableCell>{{ user.id }}</TableCell>
    <TableCell>{{ user.firstName }}</TableCell>
    <TableCell>{{ user.lastName }}</TableCell>
    <TableCell>{{ user.email }}</TableCell>
    <TableCell>{{ user.phone }}</TableCell>
  </TableRow>
</template>

<script>
import TableCell from "@/components/Pages/Main/Table/TableRow/TableCell/TableCell";
import TableRow from "@/components/Pages/Main/Table/TableRow/TableRow";
export default {
  name: "TableBodyItem",
  components: { TableRow, TableCell },
  props: {
    user: Object,
  },
  methods: {
    select() {
      this.$emit("selectUser", this.$props.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  cursor: pointer;

  &:hover {
    td {
      background: var(--table-hover);
    }
  }
}
</style>
