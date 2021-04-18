import { shallowMount } from "@vue/test-utils";
import TableBody from "@/components/Pages/Main/Table/TableBody/TableBody";
import TableBodyItem from "@/components/Pages/Main/Table/TableBody/TableBodyItem/TableBodyItem";

describe("TableBody.vue", () => {
  it("Rows amoung should be right", () => {
    const wrapper = shallowMount(TableBody, {
      props: { users: new Array(10).fill({ phone: "test" }) },
    });

    const users = wrapper.findAllComponents(TableBodyItem);

    expect(users.length).toBe(10);
  });
});
