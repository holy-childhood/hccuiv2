import {AppStore} from './AppStore.ts'

export class AuthStore {
  appStore: AppStore

  isAuthenticated: boolean = true

  constructor(appStore: AppStore) {
    this.appStore = appStore
  }

  get isAdministrator(): boolean {
    return this.isAuthenticated && this.isInRole('Administrator')
  }

  isInRole(role: string): boolean {
    return role === 'Administrator'
  }
}