import { ref, watch } from "vue";

function useFilter(data) {
  const currentData = ref(null);
  const filteredData = ref(null);
  const currentFilter = ref("");

  watch(data, () => {
    // При изменении данных устанавливаем новые значения
    currentData.value = data.value;
    executeFilter(currentFilter.value);
  });

  function executeFilter(filter) {
    if (currentData.value) {
      currentFilter.value = filter;

      filteredData.value = currentData.value.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(filter);
        });
      });
    }
  }

  return {
    filteredData,
    executeFilter,
  };
}

export default useFilter;
