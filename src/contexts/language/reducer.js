function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case "CHANGE": {
      return { language: action.payload }
    }
  }
}

export { reducer };