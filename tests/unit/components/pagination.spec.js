import { shallowMount } from "@vue/test-utils";
import Pagination from "@/components/Pages/Main/Pagination/Pagination";
import Button from "@/components/Button/Button";

describe("Pagination.vue", () => {
  it("Next page should be setted", () => {
    const wrapper = shallowMount(Pagination);
    const oldValue = wrapper.vm.currentPage;
    wrapper.vm.onNextPage();

    expect(wrapper.emitted("newPage")[0]).toEqual([oldValue + 1]);
  });

  it("Previous page should be setted", () => {
    const wrapper = shallowMount(Pagination);
    const oldValue = wrapper.vm.currentPage;
    wrapper.vm.onPreviousPage();

    expect(wrapper.emitted("newPage")[0]).toEqual([oldValue - 1]);
  });

  it("Previous button should be disabled", () => {
    const wrapper = shallowMount(Pagination);
    const buttons = wrapper.findAllComponents(Button);

    expect(buttons[0].attributes()["disabled"]).toBeTruthy();
  });

  it("Next button should be disabled", () => {
    const wrapper = shallowMount(Pagination);
    wrapper.setProps({
      isLastPage: true,
    });
    const buttons = wrapper.findAllComponents(Button);

    expect(buttons[1].attributes()["disabled"]).toBeTruthy();
  });
});
