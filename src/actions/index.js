export const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        }),
    }
}