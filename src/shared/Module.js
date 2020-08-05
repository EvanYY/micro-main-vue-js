// state common
export const common = {
  status: true,
  default: 1
}
export const commonAction = (state = {}, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_STATUS':
      state.status = payload
      break
    default:
      break
  }
  return state
}

