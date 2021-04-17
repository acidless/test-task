<template>
  <TopBar :filter="filter" :create-user="createUser" />
  <Table
    :select-user="setSelectedUser"
    :handle-sort="sort"
    :is-loading="isLoading"
    :data="paginatedData"
  />
  <Pagination :is-last-page="isLastPage" @newPage="onNewPage" />
  <SelectedUser v-if="selectedUser" :current-user="selectedUser" />
</template>

<script>
import Table from "@/components/Pages/Main/Table/Table";
import Pagination from "@/components/Pages/Main/Pagination/Pagination";
import useAPI from "@/utils/hooks/useAPI";
import { onMounted, reactive, ref } from "vue";
import useSort from "@/utils/hooks/useSort";
import TopBar from "@/components/Pages/Main/TopBar/TopBar";
import usePagination from "@/utils/hooks/usePagination";
import useFilter from "@/utils/hooks/useFilter";
import SelectedUser from "@/components/Pages/Main/SelectedUser/SelectedUser";

export default {
  name: "Main",
  components: {
    SelectedUser,
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
    const { filteredData, executeFilter } = useFilter(data);
    const executeSort = useSort(filteredData);
    const { onNewPage, isLastPage, paginatedData } = usePagination(
      filteredData,
      16
    );
    let selectedUser = ref(null);
    let currentSort = reactive({ sortKey: "id", order: 1 });

    onMounted(async () => {
      await execute(props.dataSize);
      if (filteredData.value) {
        filteredData.value = executeSort(currentSort);
      }
    });

    function sort(sortObj) {
      if (filteredData.value) {
        currentSort = sortObj;
        filteredData.value = executeSort(currentSort);
      }
    }

    function createUser(user) {
      if (filteredData.value) {
        filteredData.value = [user, ...filteredData.value];
      }
    }

    function filter(filterText) {
      if (filteredData.value) {
        executeFilter(filterText);
      }
    }

    function setSelectedUser(user) {
      selectedUser.value = user;
    }

    return {
      paginatedData,
      isLoading,
      onNewPage,
      isLastPage,
      sort,
      createUser,
      filter,
      selectedUser,
      setSelectedUser,
    };
  },
};
</script>
