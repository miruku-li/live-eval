import m from '/vendor/mithril.js'
import b from '/vendor/bss.js'

let cur = '', evaluated, update = (value) => {
  try {
    evaluated = JSON.stringify(eval(cur = value))
  } catch (ex) {
    evaluated = ex.message
  }
};

let index  = {
  view: () => m('div'+b`d flex; fd column;border 1px solid silver`, 
    m('input', { 
      oninput: ({target}) => update(target.value)
    }), 
    m('pre', evaluated)
  )
}

m.mount(document.body, index)
