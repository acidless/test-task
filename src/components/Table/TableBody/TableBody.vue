<template>
  <tbody>
    <TableBodyItem
      :key="user.id"
      :id="user.id"
      :first-name="user.firstName"
      :last-name="user.lastName"
      :email="user.email"
      :phone="user.phone"
      v-for="user in users"
    />
  </tbody>
</template>

<script>
import TableBodyItem from "@/components/Table/TableBody/TableBodyItem/TableBodyItem";
export default {
  name: "TableBody",
  components: { TableBodyItem },
  props: {
    users: Array,
  },
};
</script>

<style lang="scss">
tbody {
  display: contents;
}
</style>
