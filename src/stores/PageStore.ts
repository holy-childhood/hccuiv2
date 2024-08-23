import {AppStore} from './AppStore.ts'
import {makeAutoObservable, runInAction} from 'mobx'
import {Page} from '../models/Page.ts'
import axios from 'axios'
import {config} from '../Config.ts'
import {Menu} from '../models/Menu.ts'

const pageUrl = `${config.apiEndpoint}/pages`

export class PageStore {
  appStore: AppStore

  page: Page | null = null
  loaded: boolean = false

  constructor(appStore: AppStore) {
    this.appStore = appStore

    makeAutoObservable(this)
  }

  loadPage = async (id: number | string) => {
    this.loaded = false

    let response = await axios.get(`${pageUrl}/${id}`, this.appStore.config)
    const page = response.data

    response = await axios.get(`${pageUrl}/${id}/contents`, this.appStore.config)
    page.contents = response.data

    runInAction(() => {
      this.page = page
      this.loaded = true
    })
  }

  reload = async() => {
    if (this.page) {
      await this.loadPage(this.page.id)
    }
  }

  addPage = async (title: string, menu: Menu | null) => {
    const data = {
      title: title,
      index: menu && menu.pages ? menu.pages.length : 0,
      menuId: menu?.id
    }

    const response = await axios.post(pageUrl, data, this.appStore.config)

    await this.appStore.menuStore.loadMenu()

    return response.data as Page
  }

  updatePage = async (page: Page) => {
    await axios.put(`${pageUrl}/${page.id}`, page, this.appStore.config)
    await this.appStore.menuStore.loadMenu()
  }

  deletePage = async (id: number | string) => {
    await axios.delete(`${pageUrl}/${id}`, this.appStore.config)
    await this.appStore.menuStore.loadMenu()
  }

}