import { shallowMount } from "@vue/test-utils";
import DataSizeChoice from "@/components/Pages/DataSizeChoice/DataSizeChoice";
import { LARGE_DATA_SIZE, SMALL_DATA_SIZE } from "@/utils/consts";

describe("DataSizeChoice.vue", () => {
  it("Small data size should be setted", () => {
    const wrapper = shallowMount(DataSizeChoice);
    wrapper.vm.setSmallDataSize();

    expect(wrapper.emitted("setDataSize")[0]).toEqual([SMALL_DATA_SIZE]);
  });

  it("Large data size should be setted", () => {
    const wrapper = shallowMount(DataSizeChoice);
    wrapper.vm.setLargeDataSize();

    expect(wrapper.emitted("setDataSize")[0]).toEqual([LARGE_DATA_SIZE]);
  });
});
