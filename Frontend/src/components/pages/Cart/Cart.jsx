import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart,
  incrementQuantity,
  decrementQuantity 
} from '../../../store/slice/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <button 
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
                <button 
                  className="text-red-500"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <p>Total: ₹{total.toFixed(2)}</p>
            <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded mt-2 block">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;