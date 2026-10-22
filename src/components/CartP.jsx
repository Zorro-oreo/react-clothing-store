import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const Cart = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = useCallback(() => {
        setIsCartOpen((prev) => !prev);
    }, []);

    const openCart = useCallback(() => {
        setIsCartOpen(true);
    }, []);

    const closeCart = useCallback(() => {
        setIsCartOpen(false);
    }, []);

    const addToCart = useCallback((product, size, color, quantity) => {
        setCartItems((prevItems) => {
            const exist = prevItems.find(
                (item) => item.product.id === product.id && item.size === size && item.color === color
            );
            if (exist) {
                return prevItems.map((item) =>
                    item.product.id === product.id && item.size === size && item.color === color
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            setIsCartOpen(true);
            return [...prevItems, { product, size, color, quantity }];
        });
    }, []);

    const removeFromCart = useCallback((productId, size, color, quantity) => {
        setCartItems((prevItems) => {
            const exist = prevItems.find(
                (item) => item.product.id === productId && item.size === size && item.color === color
            );
            if (exist) {
                if (exist.quantity <= quantity) {
                    return prevItems.filter(
                        (item) => !(item.product.id === productId && item.size === size && item.color === color)
                    );
                } else {
                    return prevItems.map((item) =>
                        item.product.id === productId && item.size === size && item.color === color
                            ? { ...item, quantity: item.quantity - quantity }
                            : item
                    );
                }
            }
            return prevItems;
        });
    }, []);

    const updateCartItem = useCallback((productId, size, color, newQuantity) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.product.id === productId && item.size === size && item.color === color
                    ? { ...item, quantity: newQuantity }
                    : item
            );
        });
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartCount = useMemo(
        () => cartItems.reduce((total, item) => total + item.quantity, 0),
        [cartItems]
    );
    const cartTotal = useMemo(
        () => cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
        [cartItems]
    );

    const value = useMemo(
        () => ({ cartItems, addToCart, removeFromCart, updateCartItem, clearCart, cartCount, cartTotal, isCartOpen, toggleCart, openCart, closeCart }),
        [cartItems, cartCount, cartTotal, isCartOpen, addToCart, removeFromCart, updateCartItem, clearCart, toggleCart, openCart, closeCart]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export function UseCart() {
    return useContext(CartContext);
}