import c from '../vendor/crelt.js'

class LiveEval extends HTMLElement {
  
  constructor() {
    super();
    const update = (v) => {
      value = v; try {
        pre.innerHTML = eval(v)
      } catch (ex) {
        pre.innerHTML = ex.message
      }
    }
    let shadow = this.attachShadow({mode: 'open'});
    let value = 'bar', pre
    shadow.appendChild(c('div', {
        style: 'display:flex;flex-direction: column;border: 1px solid silver'
      },
      c('input', {
        value,
        oninput: ({target}) => update(target.value)
      }), 
      c('pre')
    ))
    pre = shadow.querySelector('pre')
  }

}
customElements.define('mirukuli-live-eval', LiveEval);
