/*
 * @Author: majiaao
 * @Date: 2019-01-12 15:51:34
 * @LastEditors: majiaao
 * @LastEditTime: 2019-01-14 15:47:02
 * @Description: file content
 */
import {
  CHANGE_LOGIN_DIALOG_STATE
} from './mutations_types'
export default {
  [CHANGE_LOGIN_DIALOG_STATE] (state) {
    state.userDialogState = !state.userDialogState
  }
}
