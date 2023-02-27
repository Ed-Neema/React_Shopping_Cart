// how we specify the application state changes in response to certain actions to our store/context
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };

      case "ADD_TRANSACTION":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions],
        };

      default:
        return state;
    }
}