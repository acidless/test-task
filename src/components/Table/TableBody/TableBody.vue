<template>
  <tbody>
    <TableBodyItem
      id="101"
      first-name="Sue"
      last-name="Corson"
      email="DWhalley@in.gov"
      phone="(612)211-6296"
    />
    <TableBodyItem
      id="102"
      first-name="Lor"
      last-name="Ipsumd"
      email="dwhalley@in.gov"
      phone="(612)211-6296"
    />
    <TableBodyItem
      id="103"
      first-name="Ips"
      last-name="Umdolo"
      email="dwhalley@in.gov"
      phone="(612)211-6296"
    />
  </tbody>
</template>

<script>
import TableBodyItem from "@/components/Table/TableBody/TableBodyItem/TableBodyItem";
export default {
  name: "TableBody",
  components: { TableBodyItem },
};
</script>

<style lang="scss" scoped>
tbody {
  display: contents;
}
</style>
