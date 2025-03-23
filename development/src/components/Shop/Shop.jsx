// import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'

// const Shop = () => {
//   const [data, setData] = useState([]); // Initialize as an array to store the fetched products


//   useEffect(() => {
//     const fetchFunc = async () => {
//       try {
//         let fetchedData = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
//         let res = await fetchedData.json();
//         setData(res.products); // Update the state with the fetched products
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

  
//     fetchFunc();
//   }, []); // Empty dependency array to run the effect only once
 
//   return (
//     <div>
//       {/* Render each product in a card */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
//         {data.map((product, index) => (
//           <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
//             <h3>{product.title}</h3>
//             <p>Price: ₹{product.price}</p>
//             <button className='border-2 border-sky-500 bg-sky-400 text-white cursor-pointer'>
//               <Link to='/cart'>Add to Cart</Link>
//             </button>
//           </div>
//         ))}
//       </div>

      
//     </div>
//   );
// };

// export default Shop;





import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
              }))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;