import { ref } from "vue";

function useAPI(urlFactory, handleResponse) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  async function execute(...args) {
    const url = urlFactory(...args);
    isLoading.value = true;
    try {
      const response = await fetch(url);
      data.value = await handleResponse(response);
      return data;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    data,
    isLoading,
    error,
    execute,
  };
}

export default useAPI;
