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

  addMenu = async (name: string) => {
    const data = {
      title: name,
      index: this.menus.length
    } as Menu

    await axios.post<Menu>(menuUrl, data)
    await this.loadMenu()
  }

  deleteMenu = async (id: number) => {
    const url = `${menuUrl}/${id}`

    await axios.delete(url)
    await this.loadMenu()
  }

  updateMenu = async (menu: Menu, title: string) => {
    const updatedMenu = {...menu, title}

    const url = `${menuUrl}/${menu.id}`

    await axios.put(url, updatedMenu)
    await this.loadMenu()
  }
}