//if someone is clikcing on add to cart button
//check weather user is logged in or not
//if user is logged in then add to cart
//if user is not logged in then redirect to login page

//i have to fetch the product from the database without the authentication or authorization




  // i will fetch 4 products for the men
  // i will fetch 4 products for the women
  // will filter the json according to the category
  //will make one state and strore both men and women data and then will filter the data and then map the data


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

const FreshArrivals = () => {
  const [products, setProducts] = useState();//to store all the products
   // State to store processed men and women products
   const [menProducts, setMenProducts] = useState([]);
   const [womenProducts, setWomenProducts] = useState([]);



  


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedData = await fetch(
          "https://hairlyf-backend-api.onrender.com/api/products"
        );
        const data = await fetchedData.json();
        setProducts(data);
        // console.log(products)

        const allItem = data.products;
        const men = allItem.filter((product) => product.category === "men");
        const women = allItem.filter((product) => product.category === "women");

        const fourMenProduct = men.slice(0, 4);
        const fourWomenProduct = women.slice(0, 4); 
      

        // Extract image URLs for men's products
        const menWithUrls = fourMenProduct.map((item) => ({
          ...item,
          imageUrls: item.images.map((imageObj) => {
            const urlCharacters = Object.values(imageObj).slice(0, -1); // Exclude `_id`
            return urlCharacters.join(""); // Join characters to form the URL
          }), 
        }));
 
        // Extract image URLs for women's products
        const womenWithUrls = fourWomenProduct.map((item) => ({
          ...item,
          imageUrls: item.images.map((imageObj) => {
            const urlCharacters = Object.values(imageObj).slice(0, -1); 
            return urlCharacters.join("");
          }),
        }));

        // Update the state with processed data 
        setMenProducts(menWithUrls);
        setWomenProducts(womenWithUrls);


        console.log("menProducts: ",womenProducts);
      } catch (error) {  
        console.log(error); 
      }  
    };
    fetchProducts();
  }, []);






  return (
    <div className="text-center py-10">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
        OUR FRESH ARRIVALS
      </h2>
      <hr className="border-t border-black w-[90%] mx-auto mt-4  mb-12" />

      {/* Men Section */}
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-center px-12 md:px-16 lg:px-20 mb-5">
        {menProducts.map((item) => (
          <div className="flex flex-col md:w-80" key={item._id}>
            {/* Image block */}
            <div className="bg-[#C9AEDE] ">
              <img src={item.imageUrls[0]} alt="" className="w-62" />
            </div>

            {/* Product details */}
            <p className="text-xl md:text-2xl font-semibold mt-2">
              {item.name}
            </p>
            <div className="flex justify-center">
              <hr className="border-t border-black w-[90%] mb-4 mt-1" />
            </div>

            {/* Price */}
            <div className="flex flex-col xl:flex-row xl:gap-3 justify-center mb-3">
              <p className="text-purple-700 line-through">MRP: {item.price}</p>
              <p className="text-purple-700">MRP: {item.price}</p>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#AA5BAE] hover:bg-[#a941ae] text-white px-4 py-2 rounded-lg cursor-pointer xl:w-1/2" >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Women Section */}
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-center px-12 md:px-16 lg:px-20">
        {womenProducts.map((item) => (
          <div className="flex flex-col md:w-80" key={item._id}>
            {/* Image block */}
            <div className="bg-[#E2D1CA]">
              <img src={item.imageUrls[0]} alt="" className="w-62" />
            </div>

            {/* Product details */}
            <p className="text-xl md:text-2xl font-semibold mt-2">
              {item.name}
            </p>
            <div className="flex justify-center">
              <hr className="border-t border-black w-[90%] mb-4 mt-1" />
            </div>

            {/* Price */}
            <div className="flex flex-col xl:flex-row xl:gap-3 justify-center mb-3">
              <p className="text-purple-700 line-through">MRP: {item.price}</p>
              <p className="text-purple-700">MRP: {item.price}</p>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#AA5BAE] hover:bg-[#a941ae] text-white px-4 py-2 rounded-lg cursor-pointer xl:w-1/2" >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* view more button */}
      <div className="flex justify-center mt-5">
        <button className="mt-4 px-7 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};

export default FreshArrivals;
