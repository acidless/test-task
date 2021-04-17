import { ref, watch } from "vue";

function usePagination(data, limit) {
  const paginatedData = ref([]);
  const currentPage = ref(1);
  const isLastPage = ref(false);

  function onNewPage(page) {
    if (data.value) {
      currentPage.value = page;

      const skip = (page - 1) * limit;
      paginatedData.value = data.value.slice(skip, skip + limit);

      isLastPage.value = !data.value[skip + limit];
    }
  }

  watch(data, () => {
    if (data.value.length > limit) {
      onNewPage(currentPage.value);
    } else {
      paginatedData.value = data.value;
      isLastPage.value = true;
    }
  });

  return {
    onNewPage,
    paginatedData,
    isLastPage,
  };
}

export default usePagination;
