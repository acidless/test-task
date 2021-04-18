import { shallowMount } from "@vue/test-utils";
import CreateUser from "@/components/Pages/Main/TopBar/CreateUser/CreateUser";

describe("CreateUser.vue", () => {
  const event = { preventDefault: () => {} };

  it("Completed flag should be false", () => {
    const wrapper = shallowMount(CreateUser);

    expect(wrapper.vm.isCompleted).toBeFalsy();
  });

  it("Create user event should be emitted", () => {
    const wrapper = shallowMount(CreateUser);
    wrapper.vm.onSubmit(event);

    expect(wrapper.emitted("createUser")).toBeDefined();
  });

  it("Data should be cleared after submit", () => {
    const wrapper = shallowMount(CreateUser);
    const defaultValues = { ...wrapper.vm.values };

    Object.keys(wrapper.vm.values).forEach((key) => {
      wrapper.vm.values[key] = "rubtid";
    });
    wrapper.vm.onSubmit(event);

    expect(wrapper.vm.values).toEqual(defaultValues);
  });
});
