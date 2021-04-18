import { shallowMount } from "@vue/test-utils";
import TableBodyItem from "@/components/Pages/Main/Table/TableBody/TableBodyItem/TableBodyItem";

describe("TableBodyItem.js", () => {
  const user = { id: 1, firstName: "test", lastName: "test" };

  it("Select user event should be emitted", function () {
    const wrapper = shallowMount(TableBodyItem, {
      props: { user },
    });
    wrapper.vm.select();

    expect(wrapper.emitted("selectUser")[0][0]).toEqual(user);
  });
});
