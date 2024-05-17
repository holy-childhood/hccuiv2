enum ContentType {
  Text = 0,
  Tab = 1,
  Calendar = 2,
  File = 3
}

export interface Content {
  id: number
  contentType: ContentType
  title?: string
  index: number
  pageId?: number
  width: number
  canResize: boolean

  // Text Content
  text?: string

  // Calendar Content
  calendarId?: number
  // calendar?: Calendar

  // File Content
  // files?: File[]


  // Tab Content
  // tabs?: Tab[]
}