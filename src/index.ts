import cloneDeep from 'lodash.clonedeep'
import type { PiniaPluginContext } from 'pinia'

const piniaPluginReset = ({ store }: PiniaPluginContext) => {
  const initialState = cloneDeep(store.$state)
  store.$reset = () => {
    store.$patch(cloneDeep(initialState))
  }
}

export default piniaPluginReset
export { piniaPluginReset }
