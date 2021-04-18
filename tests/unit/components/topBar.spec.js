import { shallowMount } from "@vue/test-utils";
import TopBar from "@/components/Pages/Main/TopBar/TopBar";
import Button from "@/components/Button/Button";

describe("TopBar.vue", () => {
  it("Create mode flag should be true", () => {
    const wrapper = shallowMount(TopBar);

    const button = wrapper.findComponent(Button);
    button.trigger("click");

    expect(wrapper.vm.isCreateMode).toBeTruthy();
  });
});
