<template>
  <TableRow>
    <TableCell>{{ id }}</TableCell>
    <TableCell>{{ firstName }}</TableCell>
    <TableCell>{{ lastName }}</TableCell>
    <TableCell>{{ email }}</TableCell>
    <TableCell>{{ phone }}</TableCell>
  </TableRow>
</template>

<script>
import TableCell from "@/components/Table/TableRow/TableCell/TableCell";
import TableRow from "@/components/Table/TableRow/TableRow";
export default {
  name: "TableBodyItem",
  components: { TableRow, TableCell },
  props: {
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
  },
};
</script>
