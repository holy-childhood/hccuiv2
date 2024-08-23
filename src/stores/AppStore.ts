import {MenuStore} from './MenuStore.ts'
import {AuthStore} from './AuthStore.ts'
import {UiStore} from './UiStore.ts'
import {PageStore} from './PageStore.ts'

export class AppStore {
  authStore: AuthStore
  menuStore: MenuStore
  pageStore: PageStore
  uiStore: UiStore

  constructor() {
    this.authStore = new AuthStore(this)
    this.menuStore = new MenuStore(this)
    this.pageStore = new PageStore(this)
    this.uiStore = new UiStore(this)
  }

  get config() {
    return {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': '', TODO: Add bearer token
      }
    }
  }
}