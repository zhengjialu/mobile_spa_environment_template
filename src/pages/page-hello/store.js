import { action, observable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

class Store {
  @observable content = ''

  @action testIo = async () => {
    try {
      const { content } = await io.testIo({
        ':id': 11,
      })
      runInAction(() => {
        this.content = content.name
      })
    } catch (e) {
      Toast.fail(e.message, 1)
    }
  }
}

export default Store
