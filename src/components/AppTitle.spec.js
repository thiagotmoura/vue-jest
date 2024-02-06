/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import AppTitle from "./AppTitle.vue";

describe("AppTitle.vue", () => {
  const wrapper = mount(AppTitle);
  const title = wrapper.find("h1");

  test("Verifica se o título do APP está correto", () => {
    expect(title.text()).toContain("ATR Vue + Jest");
  });
});
