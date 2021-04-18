import { shallowMount } from "@vue/test-utils";
import Search from "@/components/Pages/Main/TopBar/Search/Search";

describe("Search.vue", () => {
  const event = { preventDefault: () => {} };
  it("Search event should be emitted", function () {
    const wrapper = shallowMount(Search);

    wrapper.vm.onSearchClick(event);

    expect(wrapper.emitted("search")).toBeDefined();
  });
});
