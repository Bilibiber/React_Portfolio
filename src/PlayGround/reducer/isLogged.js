const isLogged = (state = false, action) => {
  switch (action.type) {
    case 'SignedIn':
      return true
    case 'SingedOut':
      return false
    default:
      return false
  }
}

export default isLogged
