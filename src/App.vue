<template>
  <main>
    <DataSizeChoice @setDataSize="setDataSize" />
    <Table
      :handle-sort="sort"
      :is-loading="isLoading"
      :data="usersPaginatedData"
    />
    <Pagination :is-last-page="isLastPage" @newPage="newPageHandler" />
  </main>
</template>

<script>
import Table from "./components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";
import useAPI from "../utils/hooks/useAPI";
import { onMounted, reactive, ref, watch } from "vue";
import useSort from "../utils/hooks/useSort";
import DataSizeChoice from "@/components/DataSizeChoice/DataSizeChoice";

export default {
  name: "App",
  components: {
    DataSizeChoice,
    Pagination,
    Table,
  },
  setup() {
    const limit = 16;

    const { execute, data, isLoading } = useAPI(
      (size) =>
        `http://www.filltext.com/?rows=${size}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
      async (response) => response.json()
    );
    const isLastPage = ref(false);
    const currentPage = ref(1);
    const executeSort = useSort(data);
    const dataSize = ref(0);

    let currentSort = reactive({ sortKey: "id", order: 1 });
    let usersPaginatedData = ref([]);

    watch(dataSize, async () => {
      await execute(dataSize.value);
      executeSort(currentSort);
      newPageHandler(currentPage.value);
    });

    onMounted(async () => {
      setDataSize(32);
    });

    function newPageHandler(page) {
      currentPage.value = page;
      const skip = (page - 1) * limit;
      usersPaginatedData.value = data.value.slice(skip, skip + limit);
      isLastPage.value = !data.value[skip + limit + 1];
    }

    function sort(sortObj) {
      if (data.value) {
        currentSort = sortObj;
        executeSort(currentSort);
        newPageHandler(currentPage.value);
      }
    }

    function setDataSize(size) {
      dataSize.value = size;
    }

    return {
      usersPaginatedData,
      isLoading,
      newPageHandler,
      isLastPage,
      sort,
      setDataSize,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
