import { ref, watch } from "vue";

function useFilter(data) {
  const filteredData = ref(null);
  const currentData = ref(null);

  watch(data, () => {
    // Устанавливаем текущие данные для фильтрации
    currentData.value = data.value;

    //Если нет отфильтрованных данных, берем текущее
    if (!filteredData.value) {
      filteredData.value = currentData.value;
    }
  });

  return {
    filteredData,
    executeFilter: function (filter) {
      if (currentData.value) {
        filteredData.value = currentData.value.filter((item) => {
          return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filter);
          });
        });
      }
    },
  };
}

export default useFilter;
