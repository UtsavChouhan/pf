import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './general'
export default configureStore({
  reducer: {
    general: generalReducer
  },
})