import { ref, watch } from "vue";

function useSort(data) {
  const currentData = ref(null);

  watch(data, () => {
    currentData.value = [...data.value];
  });

  return function execute({ sortKey, order }) {
    return currentData.value.sort((a, b) => {
      if (a[sortKey] === b[sortKey]) {
        return 0;
      } else if (a[sortKey] < b[sortKey]) {
        return order ? -1 : 1;
      }
      return order ? 1 : -1;
    });
  };
}

export default useSort;
