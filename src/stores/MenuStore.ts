import { AppStore } from './AppStore.ts'
import {makeAutoObservable, runInAction} from 'mobx'
import {config} from '../Config.ts'
import {Menu} from '../models/Menu.ts'
import axios from 'axios'

const menuUrl = `${config.apiEndpoint}/Menus`

export class MenuStore {
  appStore: AppStore

  menus: Menu[] = []

  constructor(appStore: AppStore) {
    this.appStore = appStore
    makeAutoObservable(this)
  }

  loadMenu = async () => {
    const response = await axios.get(menuUrl)

    runInAction(() => {
      this.menus = response.data
    })
  }
}