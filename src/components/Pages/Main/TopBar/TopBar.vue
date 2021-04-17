<template>
  <div class="top-bar">
    <div class="top-bar__actions">
      <Search @search="filter" />
      <Button @click="isCreateMode = !isCreateMode">{{
        isCreateMode ? "-" : "+"
      }}</Button>
    </div>
    <CreateUser @createUser="createUser" v-if="isCreateMode" />
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import { ref } from "vue";
import CreateUser from "@/components/Pages/Main/TopBar/CreateUser/CreateUser";
import Search from "@/components/Pages/Main/TopBar/Search/Search";
export default {
  name: "TopBar",
  props: {
    createUser: Function,
    filter: Function,
  },
  components: { Search, CreateUser, Button },
  setup() {
    const isCreateMode = ref(false);

    return {
      isCreateMode,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  padding: 1em 3em;

  &__actions {
    display: flex;
    margin-bottom: 2em;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
