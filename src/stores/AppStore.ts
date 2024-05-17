import {MenuStore} from './MenuStore.ts'

export class AppStore {
  menuStore: MenuStore

  constructor() {
    this.menuStore = new MenuStore(this)
  }
}