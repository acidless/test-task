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
import TableRow from "@/components/Pages/Main/Table/TableRow/TableRow";
import TableHeading from "@/components/Pages/Main/Table/TableHead/TableHeading/TableHeading";
import { ref } from "vue";
import { UNSORTED } from "@/utils/consts";
export default {
  name: "TableHead",
  components: { TableHeading, TableRow },
  setup(props, { emit }) {
    const headings = ref([
      { sortKey: "id", title: "ID", order: UNSORTED },
      { sortKey: "firstName", title: "First Name", order: UNSORTED },
      { sortKey: "lastName", title: "Last Name", order: UNSORTED },
      { sortKey: "email", title: "Email", order: UNSORTED },
      { sortKey: "phone", title: "Phone", order: UNSORTED },
    ]);

    function sortBy(sortKey, order) {
      headings.value = headings.value.map((heading) => {
        // Если находим ключ, по которому фильтруем, устанавливаем элементу порядок
        if (sortKey === heading.sortKey) {
          return { ...heading, order };
        }

        // Иначе убираем порядок фильтрации
        return { ...heading, order: UNSORTED };
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
