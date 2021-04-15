<template>
  <div>
    <Table :data="usersData.data.value" />
    <Pagination
      :on-previous-page="newPageHandler"
      :on-next-page="newPageHandler"
    />
  </div>
</template>

<script>
import Table from "./components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";
import useAPI from "../utils/hooks/useAPI";
import { onMounted } from "vue";

export default {
  name: "App",
  components: {
    Pagination,
    Table,
  },
  setup() {
    let usersData = useAPI(
      () =>
        "http://www.filltext.com/?rows=30&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",
      async (response) => response.json()
    );

    onMounted(newPageHandler);

    function newPageHandler() {
      usersData.execute();
    }

    return {
      usersData,
      newPageHandler,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
