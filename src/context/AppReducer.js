// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transaction.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}