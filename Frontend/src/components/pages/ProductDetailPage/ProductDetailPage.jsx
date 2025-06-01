// src/components/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync, removeFromCartAsync, fetchCartItems } from '../../../store/slice/cartSlice';
import { addToWishlist } from '../../../store/slice/wishlistSlice';
import { HeartIcon } from '@heroicons/react/24/outline';
import { API_BASE_URL } from "../../config/apiConfig";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMainImage, setSelectedMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [availableVariants, setAvailableVariants] = useState({
    sizes: [],
    colors: [],
    priceRange: { min: 0, max: 0 }
  });
  const [relatedProducts, setRelatedProducts] = useState([]);
  const dispatch = useDispatch();
  const { items: cartItems, isInCart, isLoading: isCartLoading } = useSelector((state) => state.cart);
  const [isCartOperationLoading, setIsCartOperationLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('API Error Response:', errorData);
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
        }
        
        const data = await response.json();

        if (!data || !data.product) {
          console.error('Invalid product data structure:', data);
          throw new Error('Invalid product data structure received from API');
        }

        const product = data.product;
        
        // Process images - convert array of characters to string URLs
        const processedImages = product.images.map(img => {
          if (typeof img === 'string') return img;
          if (typeof img === 'object') {
            // Convert array of characters to string
            const url = Object.values(img)
              .filter(val => typeof val === 'string' && val.length === 1)
              .join('');
            return url;
          }
          return '';
        }).filter(url => url.startsWith('http'));

        setProductDetail({
          ...product,
          images: processedImages
        });

        // Set available variants
        const sizes = [...new Set(product.variants.map(v => v.size))];
        const colors = [...new Set(product.variants.map(v => v.color))];
        const prices = product.variants.map(v => v.variantPrice);
        
        setAvailableVariants({
          sizes,
          colors,
          priceRange: {
            min: Math.min(...prices),
            max: Math.max(...prices)
          }
        });

        // Set related products with processed images
        const processedRelatedProducts = data.relatedProducts.map(relatedProduct => ({
          ...relatedProduct,
          images: relatedProduct.images.map(img => {
            if (typeof img === 'string') return img;
            if (typeof img === 'object') {
              const url = Object.values(img)
                .filter(val => typeof val === 'string' && val.length === 1)
                .join('');
              return url;
            }
            return '';
          }).filter(url => url.startsWith('http'))
        }));

        setRelatedProducts(processedRelatedProducts);

        // Set initial images
        if (processedImages.length > 0) {
          setSelectedMainImage(processedImages[0]);
        }

        // Set initial variant if available
        if (product.variants && product.variants.length > 0) {
          const initialVariant = product.variants[0];
          setSelectedSize(initialVariant.size);
          setSelectedColor(initialVariant.color);
          setSelectedVariant(initialVariant);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductDetail(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleVariantSelect = (size, color) => {
    setSelectedSize(size);
    setSelectedColor(color);
    
    // Find the matching variant
    const variant = productDetail.variants.find(
      v => v.size === size && v.color === color
    );
    
    if (variant) {
      console.log('Selected variant:', variant);
      setSelectedVariant(variant);
    } else {
      console.error('No variant found for selected size and color');
      setSelectedVariant(null);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      return;
    }

    setIsCartOperationLoading(true);
    try {
      if (isItemInCart) {
        await dispatch(removeFromCartAsync({ 
          productId: id, 
          variantId: selectedVariant._id 
        })).unwrap();
      } else {
        const newItem = {
          id: id,
          name: productDetail.name,
          price: selectedVariant.variantPrice,
          size: selectedVariant.size,
          color: selectedVariant.color,
          quantity: 1,
          image: selectedMainImage,
          stock: selectedVariant.stock,
          variantId: selectedVariant._id
        };
        const result = await dispatch(addToCartAsync(newItem)).unwrap();
        console.log('Add to cart result:', result);
      }
    } catch (error) {
      console.error('Cart operation failed:', error);
    } finally {
      setIsCartOperationLoading(false);
    }
  };

  const handleAddToWishlist = () => {
   

    const newItem = {
      id: id,
      name: productDetail.name,
      price: selectedVariant.variantPrice,
      size: selectedVariant.size,
      color: selectedVariant.color,
      quantity: 1,
      image: selectedMainImage,
      stock: selectedVariant.stock,
      variantId: selectedVariant._id
    };
    dispatch(addToWishlist(newItem));
    console.log('Adding to wishlist:', newItem);
  };

  const isItemInCart = cartItems.some(item => 
    item.productId === id && 
    item.variantId === selectedVariant?._id
  );

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (!productDetail) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8 text-center">
        <p className="text-red-500">Error loading product details or product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <ol className="list-none p-0 inline-flex space-x-2">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><span>&gt;</span></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          <li><span>&gt;</span></li>
          <li>
            <Link to={`/shop?category=${productDetail.category}`} className="hover:underline">
              {productDetail.category}
            </Link>
          </li>
          <li><span>&gt;</span></li>
          <li className="text-gray-700" aria-current="page">{productDetail.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          {productDetail.images && productDetail.images.length > 0 && (
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {productDetail.images.map((image, index) => (
                <button
                  key={`thumb-${index}`}
                  className={`flex-shrink-0 w-16 h-16 border rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    selectedMainImage === image ? 'border-gray-900' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`${productDetail.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover bg-gray-200"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/80x80/f0f0f0/cccccc?text=No+Img';
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Image */}
          <div className="flex-1 relative aspect-square rounded overflow-hidden">
            <button
              aria-label="Add to wishlist"
              onClick={handleAddToWishlist}
              className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            >
              <HeartIcon className="w-5 h-5 text-red-500" />
            </button>
            {selectedMainImage ? (
              <img
                src={selectedMainImage}
                alt={productDetail.name}
                className="w-full h-full object-contain object-center"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/400x400/f0f0f0/cccccc?text=No+Image';
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gray-100">
                <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-4">
          {/* Category Tag */}
          <div>
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-300">
              {productDetail.category}
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{productDetail.name}</h1>

          {/* Product Description */}
          <p className="text-gray-600">{productDetail.description}</p>

          {/* Product Details */}
          {productDetail.details && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <div className="prose prose-sm text-gray-600">
                {typeof productDetail.details === 'string' ? (
                  <p>{productDetail.details}</p>
                ) : (
                  <ul className="list-disc pl-5">
                    {Object.entries(productDetail.details).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Pricing */}
          {selectedVariant && (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ₹{(selectedVariant.variantPrice || 0).toFixed(2)}
              </span>
            </div>
          )}

          {/* Size Selection */}
          {availableVariants.sizes.length > 0 && (
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {availableVariants.sizes.map((size) => (
                  <button
                    key={`size-${size}`}
                    onClick={() => handleVariantSelect(size, selectedColor)}
                    className={`px-4 py-2 border rounded text-sm font-medium focus:outline-none ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-100 text-gray-900'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {availableVariants.colors.length > 0 && (
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Select Color</h3>
              <div className="flex items-center gap-3">
                {availableVariants.colors.map((color) => (
                  <button
                    key={`color-${color}`}
                    onClick={() => handleVariantSelect(selectedSize, color)}
                    className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  >
                    <span className="sr-only">{color}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stock Info */}
          {selectedVariant && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                {selectedVariant.stock > 0 ? (
                  <span className="text-green-600">
                    {selectedVariant.stock} in stock
                  </span>
                ) : (
                  <span className="text-red-600">Out of stock</span>
                )}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={isCartOperationLoading || isCartLoading || !selectedVariant || selectedVariant.stock === 0}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
            >
              {isCartOperationLoading || isCartLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isItemInCart ? (
                'Remove from Cart'
              ) : (
                'Add to Cart'
              )}
            </button>
            <button
              type="button"
              onClick={handleAddToWishlist}
              disabled={!selectedVariant}
              className="flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="group"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.images[0] || 'https://placehold.co/400x400/f0f0f0/cccccc?text=No+Image'}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ₹{(Math.min(...(product.variants || []).map(v => v.variantPrice || 0)) || 0).toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;