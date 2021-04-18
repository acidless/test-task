import { ref, watch } from "vue";

function usePagination(data, limit) {
  const currentPage = ref(1);
  const paginatedData = ref([]);
  const isLastPage = ref(false);

  function onNewPage(page) {
    if (data.value) {
      //Устнавливаем текущую страницу
      currentPage.value = page;

      const skip = (page - 1) * limit;

      paginatedData.value = data.value.slice(skip, skip + limit);

      // Если следующего элемента не существует, ставим флаг последней страницы
      isLastPage.value = !data.value[skip + limit];
    }
  }

  watch(data, () => {
    onNewPage(1);
  });

  return {
    onNewPage,
    paginatedData,
    isLastPage,
    currentPage,
  };
}

export default usePagination;
