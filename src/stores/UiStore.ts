import {AppStore} from './AppStore.ts'

export class UiStore {
  appStore: AppStore

  isEdit = true

  constructor(appStore: AppStore) {
    this.appStore = appStore
  }

  setIsEdit = (isEdit: boolean) => {
    this.isEdit = isEdit
  }
}