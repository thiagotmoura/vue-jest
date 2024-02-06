/* eslint-disable no-undef */
import "regenerator-runtime/runtime";
import { mount } from "@vue/test-utils";
import CounterInc from "./CounterInc.vue";

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
