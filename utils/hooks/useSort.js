function useSort(data) {
  return function execute({ sortKey, order }) {
    data.value = data.value.sort((a, b) => {
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
