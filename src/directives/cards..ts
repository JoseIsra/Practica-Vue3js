import { ComponentPublicInstance } from 'vue';

interface Ibinding {
  value:string,
}

export const borderCard = {
  mounted(el:ComponentPublicInstance<HTMLDivElement>, binding:Ibinding):void {
    switch (binding.value) {
      case 'Un chiste': el.style.border = '1px solid green';
        break;
      case 'Normal': el.style.border = '1px solid #03a9f4';
        break;
      case 'Regular': el.style.border = '1px solid orange';
        break;
      case 'Tengo miedo': el.style.border = '1px solid red';
        break;
      default: el.style.border = '1px solid black';
    }
  },
};

export const titleColored = {
  mounted(el:ComponentPublicInstance<HTMLSpanElement>, binding:Ibinding):void {
    switch (binding.value) {
      case 'Un chiste': el.style.color = '#2cb67d';
        break;
      case 'Normal': el.style.color = '#03a9f4';
        break;
      case 'Regular': el.style.color = 'orange';
        break;
      case 'Tengo miedo': el.style.color = 'red';
        break;
      default: el.style.color = '1px solid black';
    }
  },
};

export const borderCardContainer = {
  mounted(el:ComponentPublicInstance<HTMLDivElement>, binding:Ibinding):void {
    switch (binding.value) {
      case 'Un chiste': el.style.border = '1px solid green';
        break;
      case 'Normal': el.style.border = '1px solid #03a9f4';
        break;
      case 'Regular': el.style.border = '1px solid orange';
        break;
      case 'Tengo miedo': el.style.border = '1px solid red';
        break;
      default: el.style.border = '1px solid black';
    }
  },
};

export const buttonStyle = {
  mounted(el:ComponentPublicInstance<HTMLButtonElement>, binding:Ibinding):void {
    switch (binding.value) {
      case 'Un chiste': 
        el.style.backgroundColor = '#00473e';
        el.style.border = '1px solid green';
        break;
      case 'Normal': 
        el.style.backgroundColor = '#03a9f4';
        el.style.border = '1px solid white';
        break;
      case 'Regular':
        el.style.backgroundColor = 'rgba(250, 104, 7, 0.924)';
        el.style.border = '1px solid orange';
        break;
      case 'Tengo miedo':
        el.style.background = '#AB3E3E';
        el.style.border = '1px solid white';
        break;
      default: el.style.border = '1px solid black';
    }
  },
};
