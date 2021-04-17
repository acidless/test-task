import { ref, watch } from "vue";

function useSort(data) {
  const currentData = ref(null);

  watch(data, () => {
    currentData.value = [...data.value];
  });

  return function execute({ sortKey, order }) {
    if (currentData.value) {
      return currentData.value.sort((a, b) => {
        // Устанавливаем результат сравнения, в зависимости от порядка
        const resultWithOrder = order ? 1 : -1;

        if (a[sortKey] === b[sortKey]) {
          return 0;
        } else if (a[sortKey] < b[sortKey]) {
          return resultWithOrder;
        }
        return -resultWithOrder;
      });
    }
  };
}

export default useSort;
