import { CHANGE_THEME } from '../actions/theme'

const initialState = {
  value: 'lightTheme'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}
