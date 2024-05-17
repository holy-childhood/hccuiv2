import { Content } from './Content.ts'
import { Menu } from './Menu.ts'

export interface Page {
  id: number
  index: number
  title: string
  menuId: number
  menu: Menu
  contents: Content[]
}