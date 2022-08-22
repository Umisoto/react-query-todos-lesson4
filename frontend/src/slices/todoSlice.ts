import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { EditTask, Tag } from '../types/types'

export interface TaskState {
  editedTask: EditTask
  editedTag: Tag
}
// ユーザーが編集するtaskとtagのstateをreduxでグローバル化して管理

const initialState: TaskState = {
  editedTask: {
    id: 0,
    title: '',
    tag: 0
  },
  editedTag: {
    id: 0,
    name: ''
  }
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setEditedTask: (state, action: PayloadAction<EditTask>) => {
      state.editedTask = action.payload
      // payloadで受け取ったオブジェクトにアクセス
    },
    resetEditedTask: state => {
      state.editedTask = initialState.editedTask
    },
    setEditedTag: (state, action: PayloadAction<Tag>) => {
      state.editedTag = action.payload
    },
    resetEditedTag: state => {
      state.editedTag = initialState.editedTag
    }
  }
})

export const {
  setEditedTask,
  resetEditedTask,
  setEditedTag,
  resetEditedTag
} = taskSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTask = (state: RootState) => state.task.editedTask
export const selectTag = (state: RootState) => state.task.editedTag

export default taskSlice.reducer
