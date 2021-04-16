<template>
  <thead>
    <TableRow>
      <TableHeading
        v-for="heading in headings"
        :sort-key="heading.sortKey"
        :key="heading.sortKey"
        :title="heading.title"
        :current-order="heading.order"
        @sortBy="sortBy"
      />
    </TableRow>
  </thead>
</template>

<script>
import TableRow from "@/components/Table/TableRow/TableRow";
import TableHeading from "@/components/Table/TableHead/TableHeading/TableHeading";
import { ref } from "vue";
export default {
  name: "TableHead",
  components: { TableHeading, TableRow },
  setup(props, { emit }) {
    const headings = ref([
      { sortKey: "id", title: "ID", order: -1 },
      { sortKey: "firstName", title: "First Name", order: -1 },
      { sortKey: "lastName", title: "Last Name", order: -1 },
      { sortKey: "email", title: "Email", order: -1 },
      { sortKey: "phone", title: "Phone", order: -1 },
    ]);

    function sortBy(sortKey, order) {
      headings.value = headings.value.map((heading) => {
        if (sortKey === heading.sortKey) {
          return { ...heading, order };
        }

        return { ...heading, order: -1 };
      });

      emit("sort", { sortKey, order });
    }

    return {
      headings,
      sortBy,
    };
  },
};
</script>

<style lang="scss">
thead {
  display: contents;
}
</style>
