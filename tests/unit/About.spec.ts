import { mount } from '@vue/test-utils';
import About from '../../src/views/About.vue';


let wrapper:any;

describe('Home.vue', () => {
  beforeEach(() => {
    wrapper = mount(About);
  });

  it('Render component Home', () => {
    expect(wrapper);
  });

  it('Component Home has a form', () => {
    const form = wrapper.find('form');
    expect(form);
  });
  it('form inside Home has 3 input fields', () => {
    const form = wrapper.find('form');
    expect(form.findAll('input')).toHaveLength(3);
  });

  it('states from form are empty at the beginning', () => {
    expect(wrapper.vm.userInput.name).toBe('');
    expect(wrapper.vm.userInput.userCode).toBe('');
    expect(wrapper.vm.userInput.task).toBe('');
  });

  it('input fields allow receive data', async () => {
    const form = wrapper.find('form');
    const input = form.find('[data-testid="code-input"]');
    await input.setValue('code-1234');
    expect(input.element.value).toBe('code-1234');
  });
});

describe('form element', () => {
  beforeEach(() => {
    wrapper = mount(About);
  });
  it('submit form with user payload', async () => {
    const form = wrapper.find('form');
    // writing in the first input
    const input = form.find('[data-testid="code-input"]');
    await input.setValue('israel');
    // submit form once with payload
    await form.trigger('submit.prevent');
    expect(wrapper.find('.codeuser').text()).toBe('Codigo: israel');
    // todos render on screen and input clear
    expect(input.element.value).toBe('');
    expect(wrapper.findAll('.m-todo')).toHaveLength(1);

    // submit twice
    await input.setValue('brother');
    await form.trigger('submit.prevent');
    // second input with name
    expect(wrapper.findAll('.codeuser')[1].text()).toBe('Codigo: brother');
    // total todos render on screen
    expect(wrapper.findAll('.m-todo')).toHaveLength(2);
  });
});
