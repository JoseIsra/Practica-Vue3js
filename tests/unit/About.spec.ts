import About from '../../src/views/About.vue';
import { mount } from '@vue/test-utils';

let wrapper:any;

describe('Home.vue', () => {
  beforeEach(() => {
      wrapper= mount(About);
  });

  it('Render component Home', () => {
    expect(wrapper.vm.userInput).toBe('');
  });

  it('Component Home has a form', () => {
    const form = wrapper.find('form');
    expect(form.classes()).toContain('fofo');
  });
  it('form inside Home has input', () => {
    const form = wrapper.find('form');
    const button = form.find('button')
    expect(button.text()).toContain('Save');
  })
});