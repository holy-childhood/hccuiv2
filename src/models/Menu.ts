import { Page } from './Page.ts'

export interface Menu {
  id: number
  title: string
  index: number
  pages?: Page[]
}