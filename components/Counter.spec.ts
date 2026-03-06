import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

describe("Counter.vue", () => {
  it("renders with initial count 0", () => {
    const wrapper = mount(Counter);
    expect(wrapper.text()).toContain("Counter 0");
  });

  it("increments count when button is clicked", async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find("button");

    await button.trigger("click");

    expect(wrapper.text()).toContain("Counter 1");
  });
});
