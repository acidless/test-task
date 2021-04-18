import { ref } from "vue";
import usePagination from "@/utils/hooks/usePagination";

describe("usePagination.vue", () => {
  const data = ref(null);

  beforeEach(() => {
    data.value = [
      { id: 1, firstName: "Ips", lastName: "Umdolo" },
      { id: 2, firstName: "Sue", lastName: "Corson" },
      { id: 3, firstName: "Lor", lastName: "Ipsumd" },
    ];
  });

  it("Data should be paginated", async () => {
    const { paginatedData, onNewPage } = usePagination(data, 2);

    onNewPage(1);

    expect(paginatedData.value.length).toBe(2);
  });

  it("Last page flag should be true", () => {
    const { onNewPage, isLastPage } = usePagination(data, 3);

    onNewPage(1);

    expect(isLastPage.value).toBeTruthy();
  });
});
