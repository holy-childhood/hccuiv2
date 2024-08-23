import React from 'react'
import {AppStore} from './stores/AppStore.ts'

interface AppContextInterface {
  appStore: AppStore
}

export const AppContext = React.createContext<AppContextInterface | null>(null)

export const useAppStore = () => {
  const context = React.useContext(AppContext)

  if (!context) {
    throw new Error('useAppStore must be used within the AppContextProvider')
  }
  return context.appStore
}

export const useAuthStore = () => useAppStore().authStore
export const useMenuStore = () => useAppStore().menuStore
export const usePageStore = () => useAppStore().pageStore
export const useUiStore = () => useAppStore().uiStore