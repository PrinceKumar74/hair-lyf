// import React, { useState } from 'react';

// // --- Icon Components ---
// const PlusIcon = ({ className = "w-5 h-5" }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
//     </svg>
// );

// const PencilIcon = ({ className = "w-4 h-4" }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
//     </svg>
// );

// const TrashIcon = ({ className = "w-4 h-4" }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
//     </svg>
// );

// const SearchIcon = ({ className = "w-5 h-5" }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
// );


// const XCircleIcon = ({className = "w-5 h-5"}) => (
//     <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z" clipRule="evenodd" />
//     </svg>
// );


// // --- AddProductModal Component ---
// const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
//     const [productName, setProductName] = useState('');
//     const [description, setDescription] = useState('');
//     const [productId, setProductId] = useState('');
//     const [category, setCategory] = useState('');
//     const [buyingPrice, setBuyingPrice] = useState('');
//     const [discountedPrice, setDiscountedPrice] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [productLength, setProductLength] = useState('');
//     const [productColor, setProductColor] = useState('');
//     const [images, setImages] = useState([null, null, null, null]); // Array for 4 image slots
//     const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);


//     if (!isOpen) return null;

//     const handleImageChange = (e, index) => {
//         if (e.target.files && e.target.files[0]) {
//             const file = e.target.files[0];
//             const newImages = [...images];
//             newImages[index] = file;
//             setImages(newImages);

//             const newImagePreviews = [...imagePreviews];
//             newImagePreviews[index] = URL.createObjectURL(file);
//             setImagePreviews(newImagePreviews);
//         }
//     };
    
//     const removeImage = (indexToRemove) => {
//         const newImages = [...images];
//         newImages[indexToRemove] = null;
//         setImages(newImages);
    
//         const newImagePreviews = [...imagePreviews];
//         if (imagePreviews[indexToRemove]) {
//             URL.revokeObjectURL(imagePreviews[indexToRemove]); // Clean up object URL
//         }
//         newImagePreviews[indexToRemove] = null;
//         setImagePreviews(newImagePreviews);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newProductData = {
//             name: productName,
//             description,
//             id: productId,
//             category,
//             price: parseFloat(discountedPrice) || parseFloat(buyingPrice),
//             buyingPrice: parseFloat(buyingPrice),
//             quantity: parseInt(quantity),
//             length: productLength,
//             color: productColor,
//             // Handle actual image file upload here, for now, we pass previews or file objects
//             images: images.filter(img => img !== null), // Pass actual files
//             imagePreviews: imagePreviews.filter(preview => preview !== null), // For display in product list
//         };
//         onAddProduct(newProductData);
//         // Reset form state
//         setProductName(''); setDescription(''); setProductId(''); setCategory('');
//         setBuyingPrice(''); setDiscountedPrice(''); setQuantity('');
//         setProductLength(''); setProductColor(''); 
//         setImages([null, null, null, null]);
//         setImagePreviews([null, null, null, null]);
//         onClose();
//     };
    
//     const commonInputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm py-2.5 px-3"; // Increased padding

//     return (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity duration-300 ease-in-out">
//             <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modalFadeInScale">
//                 <style jsx global>{`
//                     @keyframes modalFadeInScale {
//                         from { opacity: 0; transform: scale(0.95); }
//                         to { opacity: 1; transform: scale(1); }
//                     }
//                     .animate-modalFadeInScale { animation: modalFadeInScale 0.3s forwards; }
//                 `}</style>
//                 <div className="p-6 sm:p-8">
//                     <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">New Product</h2>
                    
//                     <div className="mb-6">
//                         <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-2">
//                             {imagePreviews.map((preview, index) => (
//                                 <div key={index} className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative bg-gray-50 hover:border-orange-400 transition-colors">
//                                     {preview ? (
//                                         <>
//                                             <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-md" />
//                                             <button 
//                                                 onClick={() => removeImage(index)}
//                                                 className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
//                                                 aria-label="Remove image"
//                                             >
//                                                 <XCircleIcon className="w-4 h-4" />
//                                             </button>
//                                         </>
//                                     ) : (
//                                         <label htmlFor={`image-upload-${index}`} className="w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-orange-500 cursor-pointer">
//                                             <PlusIcon className="w-7 h-7" />
//                                             <input id={`image-upload-${index}`} type="file" accept="image/*" onChange={(e) => handleImageChange(e, index)} className="hidden" />
//                                         </label>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         <label htmlFor="image-upload-browse" className="text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline cursor-pointer">
//                             Browse image
//                             <input id="image-upload-browse" type="file" accept="image/*" onChange={(e) => handleImageChange(e, imagePreviews.findIndex(p => p === null))} className="hidden" />
//                         </label>
//                     </div>

//                     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
//                         <div>
//                             <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
//                             <input type="text" name="productName" id="productName" value={productName} onChange={e => setProductName(e.target.value)} className={commonInputClass} placeholder="Enter product name" required />
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
//                             <textarea name="description" id="description" rows="3" value={description} onChange={e => setDescription(e.target.value)} className={commonInputClass} placeholder="Enter product description"></textarea>
//                         </div>
//                         <div>
//                             <label htmlFor="productId" className="block text-sm font-medium text-gray-700">Product ID</label>
//                             <input type="text" name="productId" id="productId" value={productId} onChange={e => setProductId(e.target.value)} className={commonInputClass} placeholder="Enter product ID" />
//                         </div>
//                         <div>
//                             <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//                             <select id="category" name="category" value={category} onChange={e => setCategory(e.target.value)} className={commonInputClass} required>
//                                 <option value="">Select Product Category</option>
//                                 <option value="electronics">Electronics</option>
//                                 <option value="clothing">Clothing</option>
//                                 <option value="books">Books</option>
//                                 <option value="home">Home & Kitchen</option>
//                                 <option value="beauty">Beauty & Personal Care</option>
//                             </select>
//                         </div>
//                          <div>
//                             <label htmlFor="buyingPrice" className="block text-sm font-medium text-gray-700">Buying Price</label>
//                             <input type="number" name="buyingPrice" id="buyingPrice" value={buyingPrice} onChange={e => setBuyingPrice(e.target.value)} className={commonInputClass} placeholder="Enter buying price" required />
//                         </div>
//                         <div>
//                             <label htmlFor="discountedPrice" className="block text-sm font-medium text-gray-700">Discounted Price</label>
//                             <input type="number" name="discountedPrice" id="discountedPrice" value={discountedPrice} onChange={e => setDiscountedPrice(e.target.value)} className={commonInputClass} placeholder="Enter discounted price" />
//                         </div>
//                         <div>
//                             <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
//                             <input type="number" name="quantity" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} className={commonInputClass} placeholder="Enter product quantity" required />
//                         </div>
//                         <div>
//                             <label htmlFor="productLength" className="block text-sm font-medium text-gray-700">Product Length</label>
//                              <select id="productLength" name="productLength" value={productLength} onChange={e => setProductLength(e.target.value)} className={commonInputClass}>
//                                 <option value="">Select Product Length</option>
//                                 <option value="small">Small</option>
//                                 <option value="medium">Medium</option>
//                                 <option value="large">Large</option>
//                                 <option value="xl">XL</option>
//                             </select>
//                         </div>
//                          <div className="sm:col-span-2">
//                             <label htmlFor="productColor" className="block text-sm font-medium text-gray-700">Product Color</label>
//                             <select id="productColor" name="productColor" value={productColor} onChange={e => setProductColor(e.target.value)} className={commonInputClass}>
//                                 <option value="">Select Product Color</option>
//                                 <option value="red">Red</option>
//                                 <option value="blue">Blue</option>
//                                 <option value="green">Green</option>
//                                 <option value="black">Black</option>
//                                 <option value="white">White</option>
//                                 <option value="yellow">Yellow</option>
//                                 <option value="multicolor">Multicolor</option>
//                             </select>
//                         </div>
                        
//                         <div className="sm:col-span-2 flex justify-end gap-3 mt-6">
//                             <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm transition-colors">Cancel</button>
//                             <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm transition-colors">Add Product</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // --- ProductManagementPage Component ---
// const ProductManagementPage = () => {
//     const [products, setProducts] = useState([ 
//         { id: 'P001', title: 'Elegant Gold Watch', productCode: 'GW-0123', description: 'A very fine and elegant gold watch for everyday use and special occasions. Features a sapphire crystal and leather strap.', price: 148.50, image: 'https://placehold.co/80x80/F2E6D0/A67C52?text=Watch' },
//         { id: 'P002', title: 'Modern Bluetooth Speaker', productCode: 'BS-0456', description: 'Portable speaker with high-fidelity sound, 12-hour battery life, and waterproof design.', price: 75.00, image: 'https://placehold.co/80x80/D0D3F2/525DA6?text=Speaker' },
//         { id: 'P003', title: 'Organic Green Tea Leaves', productCode: 'GT-0789', description: 'Premium quality organic green tea leaves, hand-picked, rich in antioxidants. 100g pack.', price: 22.99, image: 'https://placehold.co/80x80/D0F2D6/52A65D?text=Tea' },
//         { id: 'P004', title: 'Leather Wallet for Men', productCode: 'LW-1011', description: 'Genuine leather wallet with multiple card slots and a coin pocket. Slim design.', price: 45.00, image: 'https://placehold.co/80x80/C4A484/5F4C3B?text=Wallet' },
//         { id: 'P005', title: 'Wireless Charging Pad', productCode: 'WC-1213', description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and minimalist.', price: 29.99, image: 'https://placehold.co/80x80/E0E0E0/424242?text=Charger' },
//     ]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [showAddProductModal, setShowAddProductModal] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 8; // Adjusted to show more items per page as in image

//     const handleAddNewProductToList = (newProductData) => {
//         const newProductEntry = {
//             id: newProductData.id || `P${String(products.length + 1).padStart(3, '0')}`, // Generate ID if not provided
//             title: newProductData.name,
//             productCode: newProductData.id, // Or a separate product code field
//             description: newProductData.description,
//             price: newProductData.price,
//             image: newProductData.imagePreviews[0] || `https://placehold.co/80x80/e2e8f0/cbd5e0?text=${newProductData.name.substring(0,1)}`,
//             // Add other necessary fields from newProductData
//         };
//         setProducts(prevProducts => [newProductEntry, ...prevProducts]);
//     };
    
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const filteredProducts = products.filter(product => 
//             product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//             product.productCode.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const goToPrevPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
//     const goToNextPage = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));

//     return (
//         <div className="p-4 sm:p-6 lg:p-8 flex-1 bg-gray-50 min-h-screen">
//             {/* Header Section */}
//             <div className="mb-6">
//                 <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
//                     <div>
//                         <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Product Management</h1>
//                         <p className="text-xs sm:text-sm text-gray-500">Home &gt; Product</p>
//                     </div>
//                     {/* Action buttons container */}
//                     <div className="flex flex-col w-full sm:w-auto sm:flex-row-reverse gap-2 sm:gap-3">
//                         <button 
//                             onClick={() => setShowAddProductModal(true)}
//                             className="flex w-full sm:w-auto items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-sm"
//                         >
//                             <PlusIcon className="w-4 h-4" />
//                             Add new Product
//                         </button>
                        
//                     </div>
//                 </div>
//             </div>

//             {/* Search Bar */}
//             <div className="mb-4 bg-white p-4 rounded-xl shadow-lg"> {/* Increased rounding and shadow */}
//                 <div className="relative flex-grow w-full">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"> {/* Increased padding */}
//                         <SearchIcon className="text-gray-400 h-5 w-5" />
//                     </div>
//                     <input
//                         type="search"
//                         value={searchTerm}
//                         onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//                         className="block w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-shadow hover:shadow-md" // Increased padding and added hover effect
//                         placeholder="Search for id, name, product..."
//                     />
//                 </div>
//             </div>
            
            
//             {/* Desktop Table Headers - Using a more flexible grid approach */}
//             <div className="hidden sm:grid grid-cols-[min-content_2fr_3fr_1.5fr_min-content] gap-x-4 items-center bg-orange-100 px-4 py-3 rounded-t-xl text-xs font-semibold text-gray-700 uppercase tracking-wider shadow-md">
//                 <div className="flex justify-center"><input type="checkbox" className="rounded border-gray-400 text-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1"/></div>
//                 <div className="pl-1">Title</div>
//                 <div>Description</div>
//                 <div className="text-right pr-2">Price</div>
//                 <div className="text-center">Actions</div>
//             </div>

//             {currentProducts.length === 0 && (
//                  <div className="text-center py-12 bg-white rounded-b-xl shadow">
//                     <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4"/>
//                     <p className="text-xl font-semibold text-gray-700 mb-1">
//                         {searchTerm ? "No products match your search." : "No products yet."}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                         {searchTerm ? "Try a different search term or clear your search." : "Add a new product to get started!"}
//                     </p>
//                 </div>
//             )}

//             {/* Desktop Table View */}
//             <div className="hidden sm:block bg-white rounded-b-xl shadow overflow-hidden">
//                 {currentProducts.map(product => (
//                     <div key={product.id} className="grid grid-cols-[min-content_2fr_3fr_1.5fr_min-content] gap-x-4 items-center border-b last:border-b-0 hover:bg-gray-50/75 px-4 py-3 transition-colors">
//                         <div className="flex justify-center"><input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1"/></div>
//                         <div className="flex items-center space-x-3 pl-1">
//                             <img src={product.image || `https://placehold.co/60x60/e2e8f0/cbd5e0?text=P`} alt={product.title} className="w-10 h-10 rounded-md object-cover shadow-sm flex-shrink-0" />
//                             <div>
//                                 <p className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors cursor-pointer">{product.title}</p>
//                                 <p className="text-xs text-gray-500">{product.productCode}</p>
//                             </div>
//                         </div>
//                         <p className="text-sm text-gray-600 line-clamp-2" title={product.description}>{product.description}</p>
//                         <p className="text-sm text-gray-800 font-medium text-right pr-2">₹{product.price.toFixed(2)}</p>
//                         <div className="flex items-center justify-center gap-2">
//                             <button className="text-blue-600 hover:text-blue-700 p-1 rounded-md hover:bg-blue-100 transition-colors"><PencilIcon className="w-4 h-4"/></button>
//                             <button className="text-red-500 hover:text-red-600 p-1 rounded-md hover:bg-red-100 transition-colors"><TrashIcon className="w-4 h-4"/></button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
            
//             {/* Mobile Card View */}
//             <div className="sm:hidden space-y-4 mt-4">
//                 {currentProducts.map(product => (
//                     <div key={product.id} className="bg-white p-4 rounded-xl shadow-lg"> {/* Increased rounding and shadow */}
//                         <div className="flex items-start gap-4">
//                              <input type="checkbox" className="mt-1.5 rounded border-gray-400 text-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1"/>
//                             <img src={product.image || `https://placehold.co/80x80/e2e8f0/cbd5e0?text=P`} alt={product.title} className="w-20 h-20 rounded-lg object-cover shadow-md flex-shrink-0" /> {/* Larger image */}
//                             <div className="flex-grow">
//                                 <h3 className="text-md font-semibold text-gray-800 mb-0.5">{product.title}</h3>
//                                 <p className="text-xs text-gray-500 mb-1.5">{product.productCode}</p>
//                                 <p className="text-sm text-gray-800 font-semibold mb-1.5">₹{product.price.toFixed(2)}</p>
//                                 <p className="text-xs text-gray-600 line-clamp-2" title={product.description}>{product.description}</p>
//                             </div>
//                         </div>
//                         <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end gap-2">
//                                 <button className="text-blue-600 hover:text-blue-700 p-1.5 rounded-md hover:bg-blue-100 transition-colors flex items-center gap-1 text-sm"><PencilIcon className="w-4 h-4"/> Edit</button>
//                                 <button className="text-red-500 hover:text-red-600 p-1.5 rounded-md hover:bg-red-100 transition-colors flex items-center gap-1 text-sm"><TrashIcon className="w-4 h-4"/> Delete</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 0 && ( // Show pagination only if there are products
//                 <div className="mt-8 flex  sm:flex-row justify-between items-center text-sm text-gray-700">
//                     <button 
//                         onClick={goToPrevPage} 
//                         disabled={currentPage === 1}
//                         className="px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed mb-2 sm:mb-0 transition-colors shadow-sm"
//                     >
//                         Prev
//                     </button>
//                     <span className="font-medium">Page {currentPage} of {totalPages}</span>
//                     <button 
//                         onClick={goToNextPage}
//                         disabled={currentPage === totalPages}
//                         className="px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed mt-2 sm:mt-0 transition-colors shadow-sm"
//                     >
//                         Next
//                     </button>
//                 </div>
//             )}

//             <AddProductModal 
//                 isOpen={showAddProductModal} 
//                 onClose={() => setShowAddProductModal(false)}
//                 onAddProduct={handleAddNewProductToList}
//             />
//         </div>
//     );
// };

// export default ProductManagementPage;




import React, { useState, useEffect } from 'react';

// --- Icon Components (unchanged) ---
const PlusIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
    </svg>
);

const PencilIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
    </svg>
);

const TrashIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
    </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const XCircleIcon = ({className = "w-5 h-5"}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z" clipRule="evenodd" />
    </svg>
);

// --- AddProductModal Component (renamed to ProductFormModal for reusability) ---
const ProductFormModal = ({ isOpen, onClose, onSaveProduct, initialData = {} }) => {
    const [productName, setProductName] = useState(initialData.title || '');
    const [description, setDescription] = useState(initialData.description || '');
    const [productId, setProductId] = useState(initialData.productCode || ''); // Using productCode for ID
    const [category, setCategory] = useState(initialData.category || '');
    const [buyingPrice, setBuyingPrice] = useState(initialData.buyingPrice || '');
    const [discountedPrice, setDiscountedPrice] = useState(initialData.discountedPrice || '');
    const [quantity, setQuantity] = useState(initialData.quantity || '');
    const [productLength, setProductLength] = useState(initialData.length || '');
    const [productColor, setProductColor] = useState(initialData.color || '');
    // For images, if initialData has a single image, populate the first slot
    const [images, setImages] = useState(initialData.image ? [initialData.image, null, null, null] : [null, null, null, null]); 
    const [imagePreviews, setImagePreviews] = useState(initialData.image ? [initialData.image, null, null, null] : [null, null, null, null]);

    // Reset form when modal opens with new initialData
    useEffect(() => {
        if (isOpen) {
            setProductName(initialData.title || '');
            setDescription(initialData.description || '');
            setProductId(initialData.productCode || '');
            setCategory(initialData.category || '');
            setBuyingPrice(initialData.buyingPrice || '');
            setDiscountedPrice(initialData.discountedPrice || '');
            setQuantity(initialData.quantity || '');
            setProductLength(initialData.length || '');
            setProductColor(initialData.color || '');
            setImages(initialData.image ? [initialData.image, null, null, null] : [null, null, null, null]);
            setImagePreviews(initialData.image ? [initialData.image, null, null, null] : [null, null, null, null]);
        }
    }, [isOpen, initialData]);


    if (!isOpen) return null;

    const handleImageChange = (e, index) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);

            const newImagePreviews = [...imagePreviews];
            newImagePreviews[index] = URL.createObjectURL(file);
            setImagePreviews(newImagePreviews);
        }
    };
    
    const removeImage = (indexToRemove) => {
        const newImages = [...images];
        if (newImages[indexToRemove] instanceof File) { // Only revoke if it's a file object URL
            URL.revokeObjectURL(imagePreviews[indexToRemove]); 
        }
        newImages[indexToRemove] = null;
        setImages(newImages);
    
        const newImagePreviews = [...imagePreviews];
        newImagePreviews[indexToRemove] = null;
        setImagePreviews(newImagePreviews);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            id: initialData.id, // Keep the original ID for edits
            name: productName,
            description,
            productCode: productId, // Use productCode for display ID
            category,
            price: parseFloat(discountedPrice) || parseFloat(buyingPrice),
            buyingPrice: parseFloat(buyingPrice),
            quantity: parseInt(quantity),
            length: productLength,
            color: productColor,
            images: images.filter(img => img !== null),
            imagePreviews: imagePreviews.filter(preview => preview !== null),
            // Take the first image preview for the main display
            image: imagePreviews.filter(preview => preview !== null)[0] || `https://placehold.co/80x80/e2e8f0/cbd5e0?text=${productName.substring(0,1)}`,
        };
        onSaveProduct(productData); // Call the save handler (add or update)
        onClose(); // Close the modal
    };
    
    const commonInputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm py-2.5 px-3";

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modalFadeInScale">
                <style jsx global>{`
                    @keyframes modalFadeInScale {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-modalFadeInScale { animation: modalFadeInScale 0.3s forwards; }
                `}</style>
                <div className="p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">{initialData.id ? "Edit Product" : "New Product"}</h2>
                    
                    <div className="mb-6">
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-2">
                            {imagePreviews.map((preview, index) => (
                                <div key={index} className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative bg-gray-50 hover:border-orange-400 transition-colors">
                                    {preview ? (
                                        <>
                                            <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                            <button 
                                                onClick={() => removeImage(index)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                                                aria-label="Remove image"
                                            >
                                                <XCircleIcon className="w-4 h-4" />
                                            </button>
                                        </>
                                    ) : (
                                        <label htmlFor={`image-upload-${index}`} className="w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-orange-500 cursor-pointer">
                                            <PlusIcon className="w-7 h-7" />
                                            <input id={`image-upload-${index}`} type="file" accept="image/*" onChange={(e) => handleImageChange(e, index)} className="hidden" />
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                        <label htmlFor="image-upload-browse" className="text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline cursor-pointer">
                            Browse image
                            {/* This input helps in situations where you want a generic "browse" for the next available slot */}
                            <input id="image-upload-browse" type="file" accept="image/*" 
                                onChange={(e) => {
                                    const nextEmptyIndex = imagePreviews.findIndex(p => p === null);
                                    if (nextEmptyIndex !== -1) {
                                        handleImageChange(e, nextEmptyIndex);
                                    } else {
                                        // Optionally handle case where all 4 slots are full
                                        alert("All image slots are full. Please remove an image to add a new one.");
                                        e.target.value = null; // Clear the input so same file can be selected again
                                    }
                                }} 
                                className="hidden" 
                            />
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input type="text" name="productName" id="productName" value={productName} onChange={e => setProductName(e.target.value)} className={commonInputClass} placeholder="Enter product name" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
                            <textarea name="description" id="description" rows="3" value={description} onChange={e => setDescription(e.target.value)} className={commonInputClass} placeholder="Enter product description"></textarea>
                        </div>
                        <div>
                            <label htmlFor="productId" className="block text-sm font-medium text-gray-700">Product ID</label>
                            <input type="text" name="productId" id="productId" value={productId} onChange={e => setProductId(e.target.value)} className={commonInputClass} placeholder="Enter product ID" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <select id="category" name="category" value={category} onChange={e => setCategory(e.target.value)} className={commonInputClass} required>
                                <option value="">Select Product Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                                <option value="home">Home & Kitchen</option>
                                <option value="beauty">Beauty & Personal Care</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="buyingPrice" className="block text-sm font-medium text-gray-700">Buying Price</label>
                            <input type="number" name="buyingPrice" id="buyingPrice" value={buyingPrice} onChange={e => setBuyingPrice(e.target.value)} className={commonInputClass} placeholder="Enter buying price" required />
                        </div>
                        <div>
                            <label htmlFor="discountedPrice" className="block text-sm font-medium text-gray-700">Discounted Price</label>
                            <input type="number" name="discountedPrice" id="discountedPrice" value={discountedPrice} onChange={e => setDiscountedPrice(e.target.value)} className={commonInputClass} placeholder="Enter discounted price" />
                        </div>
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input type="number" name="quantity" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} className={commonInputClass} placeholder="Enter product quantity" required />
                        </div>
                        <div>
                            <label htmlFor="productLength" className="block text-sm font-medium text-gray-700">Product Length</label>
                             <select id="productLength" name="productLength" value={productLength} onChange={e => setProductLength(e.target.value)} className={commonInputClass}>
                                <option value="">Select Product Length</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>
                         <div className="sm:col-span-2">
                            <label htmlFor="productColor" className="block text-sm font-medium text-gray-700">Product Color</label>
                            <select id="productColor" name="productColor" value={productColor} onChange={e => setProductColor(e.target.value)} className={commonInputClass}>
                                <option value="">Select Product Color</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="yellow">Yellow</option>
                                <option value="multicolor">Multicolor</option>
                            </select>
                        </div>
                        
                        <div className="sm:col-span-2 flex justify-end gap-3 mt-6">
                            <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm transition-colors">Cancel</button>
                            <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm transition-colors">{initialData.id ? "Save Changes" : "Add Product"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// --- ProductManagementPage Component ---
const ProductManagementPage = () => {
    // Increased initial products for testing pagination
    const [products, setProducts] = useState([ 
        { id: 'P001', title: 'Elegant Gold Watch', productCode: 'GW-0123', description: 'A very fine and elegant gold watch for everyday use and special occasions. Features a sapphire crystal and leather strap.', price: 148.50, buyingPrice: 120.00, quantity: 50, category: 'electronics', length: 'medium', color: 'gold', image: 'https://placehold.co/80x80/F2E6D0/A67C52?text=Watch' },
        { id: 'P002', title: 'Modern Bluetooth Speaker', productCode: 'BS-0456', description: 'Portable speaker with high-fidelity sound, 12-hour battery life, and waterproof design.', price: 75.00, buyingPrice: 60.00, quantity: 120, category: 'electronics', length: 'small', color: 'blue', image: 'https://placehold.co/80x80/D0D3F2/525DA6?text=Speaker' },
        { id: 'P003', title: 'Organic Green Tea Leaves', productCode: 'GT-0789', description: 'Premium quality organic green tea leaves, hand-picked, rich in antioxidants. 100g pack.', price: 22.99, buyingPrice: 18.00, quantity: 200, category: 'food', length: 'small', color: 'green', image: 'https://placehold.co/80x80/D0F2D6/52A65D?text=Tea' },
        { id: 'P004', title: 'Leather Wallet for Men', productCode: 'LW-1011', description: 'Genuine leather wallet with multiple card slots and a coin pocket. Slim design.', price: 45.00, buyingPrice: 35.00, quantity: 80, category: 'clothing', length: 'small', color: 'black', image: 'https://placehold.co/80x80/C4A484/5F4C3B?text=Wallet' },
        { id: 'P005', title: 'Wireless Charging Pad', productCode: 'WC-1213', description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and minimalist.', price: 29.99, buyingPrice: 20.00, quantity: 150, category: 'electronics', length: 'small', color: 'white', image: 'https://placehold.co/80x80/E0E0E0/424242?text=Charger' },
        { id: 'P006', title: 'Ergonomic Office Chair', productCode: 'OC-1415', description: 'High-back mesh office chair with adjustable lumbar support and armrests.', price: 249.00, buyingPrice: 200.00, quantity: 30, category: 'home', length: 'large', color: 'black', image: 'https://placehold.co/80x80/C8C8C8/6B6B6B?text=Chair' },
        { id: 'P007', title: 'Portable External SSD 1TB', productCode: 'SSD-1617', description: 'Compact and fast external SSD for all your storage needs. USB-C compatible.', price: 110.00, buyingPrice: 90.00, quantity: 70, category: 'electronics', length: 'small', color: 'silver', image: 'https://placehold.co/80x80/D9D9D9/404040?text=SSD' },
        { id: 'P008', title: 'Luxury Silk Scarf', productCode: 'SS-1819', description: '100% pure silk scarf, soft and vibrant, perfect for any outfit.', price: 65.00, buyingPrice: 50.00, quantity: 90, category: 'clothing', length: 'medium', color: 'red', image: 'https://placehold.co/80x80/F2D0D0/A65252?text=Scarf' },
        { id: 'P009', title: 'Smart Home LED Bulb', productCode: 'LB-2021', description: 'Wi-Fi enabled LED bulb with customizable colors and voice control.', price: 15.00, buyingPrice: 10.00, quantity: 300, category: 'home', length: 'small', color: 'multicolor', image: 'https://placehold.co/80x80/D0E6F2/52A6A6?text=Bulb' },
        { id: 'P010', title: 'Noise-Cancelling Headphones', productCode: 'NC-2223', description: 'Over-ear headphones with active noise cancellation and deep bass.', price: 199.00, buyingPrice: 160.00, quantity: 60, category: 'electronics', length: 'large', color: 'black', image: 'https://placehold.co/80x80/C0B2D0/5A4E6B?text=Headphones' },
        { id: 'P011', title: 'Travel Backpack 30L', productCode: 'TB-2425', description: 'Durable and spacious backpack with multiple compartments, ideal for travel.', price: 89.00, buyingPrice: 70.00, quantity: 40, category: 'clothing', length: 'large', color: 'grey', image: 'https://placehold.co/80x80/E0D9F2/7B6BB2?text=Bag' },
        { id: 'P012', title: 'Cookbook: Italian Classics', productCode: 'CB-2627', description: 'Collection of authentic Italian recipes, from pasta to tiramisu.', price: 30.00, buyingPrice: 20.00, quantity: 100, category: 'books', length: 'medium', color: 'brown', image: 'https://placehold.co/80x80/F2F2D0/A6A652?text=Book' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showProductFormModal, setShowProductFormModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null); // State to hold product data for editing
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10; // Changed to 10 products per page

    const handleSaveProduct = (productData) => {
        if (productData.id) {
            // Update existing product
            setProducts(prevProducts => 
                prevProducts.map(p => p.id === productData.id ? { 
                    ...p, 
                    title: productData.name,
                    description: productData.description,
                    productCode: productData.productCode,
                    price: productData.price,
                    buyingPrice: productData.buyingPrice,
                    quantity: productData.quantity,
                    category: productData.category,
                    length: productData.length,
                    color: productData.color,
                    image: productData.image // Use the primary image
                } : p)
            );
        } else {
            // Add new product
            const newId = `P${String(products.length + 1).padStart(3, '0')}`;
            const newProductEntry = {
                id: newId,
                title: productData.name,
                productCode: productData.productCode || newId, // Use given productCode or generated ID
                description: productData.description,
                price: productData.price,
                buyingPrice: productData.buyingPrice,
                quantity: productData.quantity,
                category: productData.category,
                length: productData.length,
                color: productData.color,
                image: productData.image, // Use the primary image
            };
            setProducts(prevProducts => [newProductEntry, ...prevProducts]);
        }
        setEditingProduct(null); // Clear editing state
        setShowProductFormModal(false); // Close modal
    };

    const handleDeleteProduct = (productIdToDelete) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(prevProducts => prevProducts.filter(p => p.id !== productIdToDelete));
            // Recalculate total pages and adjust current page if necessary
            const newTotalPages = Math.ceil((filteredProducts.length - 1) / productsPerPage);
            if (currentPage > newTotalPages && newTotalPages > 0) {
                setCurrentPage(newTotalPages);
            } else if (filteredProducts.length - 1 === 0) {
                setCurrentPage(1); // If no products left, reset to page 1
            }
        }
    };

    const handleEditClick = (product) => {
        setEditingProduct({
            ...product,
            discountedPrice: product.price // Assuming price is discounted if available
        }); 
        setShowProductFormModal(true);
    };

    const handleAddClick = () => {
        setEditingProduct(null); // Ensure no old data is present
        setShowProductFormModal(true);
    };
    
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.productCode.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Ensure current page is valid when search term changes or products are deleted
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        } else if (totalPages === 0 && currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [filteredProducts.length, totalPages, currentPage]);


    const goToPrevPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
    const goToNextPage = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));

    return (
        <div className="p-4 sm:p-6 lg:p-8 flex-1 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Product Management</h1>
                        <p className="text-xs sm:text-sm text-gray-500">Home &gt; Product</p>
                    </div>
                    {/* Action buttons container */}
                    <div className="flex flex-col w-full sm:w-auto sm:flex-row-reverse gap-2 sm:gap-3">
                        <button 
                            onClick={handleAddClick}
                            className="flex w-full sm:w-auto items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-sm"
                        >
                            <PlusIcon className="w-4 h-4" />
                            Add new Product
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="relative flex-grow w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <SearchIcon className="text-gray-400 h-5 w-5" />
                    </div>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="block w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-shadow hover:shadow-md"
                        placeholder="Search for id, name, product..."
                    />
                </div>
            </div>
            
            {/* Desktop Table Headers */}
            <div className="hidden sm:grid grid-cols-[min-content_2fr_3fr_1.5fr_min-content] gap-x-4 items-center bg-orange-100 px-4 py-3 rounded-t-xl text-xs font-semibold text-gray-700 uppercase tracking-wider shadow-md">
                <div className="flex justify-center"><input type="checkbox" className="rounded border-gray-400 text-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1"/></div>
                <div className="pl-1">Title</div>
                <div>Description</div>
                <div className="text-right pr-2">Price</div>
                <div className="text-center">Actions</div>
            </div>

            {currentProducts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-b-xl shadow">
                    <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4"/>
                    <p className="text-xl font-semibold text-gray-700 mb-1">
                        {searchTerm ? "No products match your search." : "No products yet."}
                    </p>
                    <p className="text-sm text-gray-500">
                        {searchTerm ? "Try a different search term or clear your search." : "Add a new product to get started!"}
                    </p>
                </div>
            )}

            {/* Desktop Table View */}
            <div className="hidden sm:block bg-white rounded-b-xl shadow overflow-hidden">
                {currentProducts.map(product => (
                    <div key={product.id} className="grid grid-cols-[min-content_2fr_3fr_1.5fr_min-content] gap-x-4 items-center border-b last:border-b-0 hover:bg-gray-50/75 px-4 py-3 transition-colors">
                        <div className="flex justify-center"><input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1"/></div>
                        <div className="flex items-center space-x-3 pl-1">
                            <img src={product.image || `https://placehold.co/60x60/e2e8f0/cbd5e0?text=P`} alt={product.title} className="w-10 h-10 rounded-md object-cover shadow-sm flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors cursor-pointer">{product.title}</p>
                                <p className="text-xs text-gray-500">{product.productCode}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2" title={product.description}>{product.description}</p>
                        <p className="text-sm text-gray-800 font-medium text-right pr-2">₹{product.price.toFixed(2)}</p>
                        <div className="flex items-center justify-center gap-2">
                            <button 
                                onClick={() => handleEditClick(product)}
                                className="text-blue-600 hover:text-blue-700 p-1 rounded-md hover:bg-blue-100 transition-colors"
                                aria-label="Edit product"
                            >
                                <PencilIcon className="w-4 h-4"/>
                            </button>
                            <button 
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-500 hover:text-red-600 p-1 rounded-md hover:bg-red-100 transition-colors"
                                aria-label="Delete product"
                            >
                                <TrashIcon className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Card View */}
            <div className="sm:hidden space-y-4 mt-4">
                {currentProducts.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-start gap-4">
                                <input type="checkbox" className="mt-1.5 rounded border-gray-400 text-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1"/>
                            <img src={product.image || `https://placehold.co/80x80/e2e8f0/cbd5e0?text=P`} alt={product.title} className="w-20 h-20 rounded-lg object-cover shadow-md flex-shrink-0" />
                            <div className="flex-grow">
                                <h3 className="text-md font-semibold text-gray-800 mb-0.5">{product.title}</h3>
                                <p className="text-xs text-gray-500 mb-1.5">{product.productCode}</p>
                                <p className="text-sm text-gray-800 font-semibold mb-1.5">₹{product.price.toFixed(2)}</p>
                                <p className="text-xs text-gray-600 line-clamp-2" title={product.description}>{product.description}</p>
                            </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end gap-2">
                                <button 
                                    onClick={() => handleEditClick(product)}
                                    className="text-blue-600 hover:text-blue-700 p-1.5 rounded-md hover:bg-blue-100 transition-colors flex items-center gap-1 text-sm"
                                >
                                    <PencilIcon className="w-4 h-4"/> Edit
                                </button>
                                <button 
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="text-red-500 hover:text-red-600 p-1.5 rounded-md hover:bg-red-100 transition-colors flex items-center gap-1 text-sm"
                                >
                                    <TrashIcon className="w-4 h-4"/> Delete
                                </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && ( // Show pagination only if there's more than one page
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700">
                    <button 
                        onClick={goToPrevPage} 
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed mb-2 sm:mb-0 transition-colors shadow-sm"
                    >
                        Prev
                    </button>
                    <span className="font-medium">Page {currentPage} of {totalPages}</span>
                    <button 
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed mt-2 sm:mt-0 transition-colors shadow-sm"
                    >
                        Next
                    </button>
                </div>
            )}

            <ProductFormModal 
                isOpen={showProductFormModal} 
                onClose={() => setShowProductFormModal(false)}
                onSaveProduct={handleSaveProduct}
                initialData={editingProduct || {}} // Pass data for editing or empty object for new
            />
        </div>
    );
};

export default ProductManagementPage;