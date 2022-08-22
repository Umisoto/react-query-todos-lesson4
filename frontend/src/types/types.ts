export interface Task {
  id: number
  title: string
  tag: number
  tag_name: string
  created_at: string
  updated_at: string
}

export interface EditTask {
  id: number
  title: string
  tag: number
}
// postメソッド用のデータ型

export interface Tag {
  id: number
  name: string
}
