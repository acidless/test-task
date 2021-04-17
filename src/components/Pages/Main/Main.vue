<template>
  <TopBar :create-user="createUser" />
  <Table :handle-sort="sort" :is-loading="isLoading" :data="paginatedData" />
  <Pagination :is-last-page="isLastPage" @newPage="onNewPage" />
</template>

<script>
import Table from "@/components/Pages/Main/Table/Table";
import Pagination from "@/components/Pages/Main/Pagination/Pagination";
import useAPI from "@/utils/hooks/useAPI";
import { onMounted, reactive } from "vue";
import useSort from "@/utils/hooks/useSort";
import TopBar from "@/components/Pages/Main/TopBar/TopBar";
import usePagination from "@/utils/hooks/usePagination";

export default {
  name: "Main",
  components: {
    TopBar,
    Pagination,
    Table,
  },
  props: {
    dataSize: Number,
  },
  setup(props) {
    const { execute, data, isLoading } = useAPI(
      (size) =>
        `http://www.filltext.com/?rows=${size}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
      async (response) => response.json()
    );
    const executeSort = useSort(data);

    const { onNewPage, isLastPage, paginatedData } = usePagination(data, 16);

    let currentSort = reactive({ sortKey: "id", order: 1 });

    onMounted(async () => {
      await execute(props.dataSize);
      executeSort(currentSort);
    });

    function sort(sortObj) {
      if (data.value) {
        currentSort = sortObj;
        executeSort(currentSort);
      }
    }

    function createUser(user) {
      data.value = [user, ...data.value];
    }

    return {
      paginatedData,
      isLoading,
      onNewPage,
      isLastPage,
      sort,
      createUser,
    };
  },
};
</script>
