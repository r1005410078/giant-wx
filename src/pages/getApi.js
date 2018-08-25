import * as api from './api'
const apis = {}

for (const key in api) {
  if (typeof api[key] === 'function') {
    const attr = key.replace(key.slice(0, 1), key.slice(0, 1).toLocaleLowerCase())
    Object.defineProperty(apis, attr, {
      get () {
        return new api[key]()
      }
    })
  }
}

export default apis
