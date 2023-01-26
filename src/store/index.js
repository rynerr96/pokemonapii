import { configureStore } from '@reduxjs/toolkit'
import userName from './slices/nameVerification.Slice'

export default configureStore({
  reducer: {
    userName
	}
})