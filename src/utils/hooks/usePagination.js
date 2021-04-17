import { ref, watch } from "vue";

function usePagination(data, limit) {
  const paginatedData = ref([]);
  const currentPage = ref(1);
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
    // Если данные изменились и на странице элементов больше, чем лимит, то вызываем обработчик новой страницы
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
