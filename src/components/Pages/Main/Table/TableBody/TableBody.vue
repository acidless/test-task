<template>
  <tbody>
    <TableBodyItem
      @selectUser="selectUser"
      :key="user.phone"
      :user="user"
      v-for="user in users"
    />
  </tbody>
</template>

<script>
import TableBodyItem from "@/components/Pages/Main/Table/TableBody/TableBodyItem/TableBodyItem";
export default {
  name: "TableBody",
  components: { TableBodyItem },
  props: {
    users: Array,
    selectUser: Function,
  },
};
</script>

<style lang="scss">
tbody {
  display: contents;
}
</style>
