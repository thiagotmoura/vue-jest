/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import LogoImage from "./LogoImage.vue";

describe("LogoImage.vue", () => {
  const wrapper = mount(LogoImage);
  const logoImage = wrapper.find("img");

  test("Verifica se a altura da imagem está correta", () => {
    expect(logoImage.attributes("height")).toBe("125");
  });

  test("Verifica se a largura da imagem está correta", () => {
    expect(logoImage.attributes("width")).toBe("125");
  });
});
