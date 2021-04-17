import { ref, watch } from "vue";

function useFilter(data) {
  const filteredData = ref(null);
  const currentData = ref(null);

  watch(data, () => {
    currentData.value = data.value;
    if (!filteredData.value) {
      filteredData.value = currentData.value;
    }
  });

  return {
    filteredData,
    executeFilter: function (filter) {
      filteredData.value = currentData.value.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(filter);
        });
      });
    },
  };
}

export default useFilter;
