export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => (cartItem.cartid === cartItemToAdd.cartid)
        );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.cartid === cartItemToAdd.cartid
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => (cartItem.cartid === cartItemToRemove.cartid)
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => (cartItem.cartid !== cartItemToRemove.cartid))
    } 

    return cartItems.map(
        cartItem => (cartItem.cartid === cartItemToRemove.cartid) ?
        {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
        )
}