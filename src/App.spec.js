/* eslint-disable no-undef */
import "regenerator-runtime/runtime";
import { mount } from "@vue/test-utils";
import CounterInc from "./components/CounterInc.vue";
import App from "./App.vue";

describe("App.vue", () => {
  const wrapper = mount(App);
  const title = wrapper.find("h1");
  const logoImage = wrapper.find("img");

  test("Setup feito corretamente", () => {
    expect(true).toBe(true);
  });

  test("Verifica se o título do APP está correto", () => {
    expect(title.text()).toContain("ATR Vue + Jest");
  });

  test("Verifica se a altura da imagem está correta", () => {
    expect(logoImage.attributes("height")).toBe("125");
  });

  test("Verifica se a largura da imagem está correta", () => {
    expect(logoImage.attributes("width")).toBe("125");
  });
});

describe("CounterInc.vue", () => {
  const wrapper = mount(CounterInc);
  const addButton = wrapper.find("#addButton");
  const resetButton = wrapper.find("#resetButton");

  test("Verifica se o valor inicial do contador é 0", () => {
    expect(wrapper.text()).toContain("Contador: 0");
  });

  test("Verifica se o texto do botão Adicionar está correto", () => {
    expect(addButton.text()).toContain("Adicionar");
  });

  test("Verifica se o texto do botão Reiniciar está correto", () => {
    expect(resetButton.text()).toContain("Reiniciar");
  });

  test("Verifica se adiciona 1 ao contador quando clicar no botão Adicionar", async () => {
    addButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Contador: 1");
  });

  test("Verifica se adiciona 2 ao contador quando clicar no botão Adicionar duas vezes", async () => {
    expect(wrapper.text()).toContain("Contador: 1");
    addButton.trigger("click");
    addButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Contador: 3");
  });

  test("Verifica se reinicia o contador para 0 quando clicar no botão Reiniciar", async () => {
    expect(wrapper.text()).toContain("Contador: 3");
    resetButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Contador: 0");
  });
});
