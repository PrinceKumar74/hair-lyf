import React, { useState } from 'react';

// --- Icon Components ---
const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);
const ChevronUpIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
);

// --- OrderItem Component ---
const OrderItem = ({ order, isOpen, onToggle }) => {
    const getStatusPillStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200'; // Softer border
            case 'completed':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'rejected':
                return 'bg-red-100 text-red-700 border-red-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const statusPillBaseClasses = `text-xs font-semibold rounded-full border flex items-center justify-center whitespace-nowrap`;
    const summaryStatusPillClasses = `${statusPillBaseClasses} px-2.5 py-1`; // Adjusted padding for summary
    const expandedStatusPillClasses = `${statusPillBaseClasses} px-3 py-1.5`;


    return (
        <div className="bg-white rounded-lg shadow-md mb-3 transition-all duration-300 ease-in-out">
            {/* Always visible part - Summary Row */}
            {/* Desktop uses Grid, Mobile uses Flex */}
            <div 
                className="p-3 sm:p-0 sm:py-3 sm:px-4 cursor-pointer hover:bg-gray-50/70 flex sm:grid sm:grid-cols-[auto_minmax(0,2.5fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto] items-center sm:gap-x-4"
                onClick={onToggle}
            >
                {/* Checkbox - common for both layouts */}
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 mr-3 sm:mr-0 flex-shrink-0"/>
                
                {/* Product Image and Info Container (for mobile flex, and for desktop grid cell) */}
                <div className="flex items-center flex-1 sm:flex-grow-[2] min-w-0"> {/* On desktop, this is the "Product" grid cell */}
                    <img 
                        src={order.productImage || `https://placehold.co/60x60/F2E6D0/A67C52?text=${order.productName.substring(0,1)}`} 
                        alt={order.productName} 
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-md object-cover mr-3 flex-shrink-0"
                        onError={(e) => e.target.src = 'https://placehold.co/60x60/E2E8F0/4A5568?text=Err'}
                    />
                    <div className="min-w-0"> {/* This div is for text truncation */}
                        <p className="text-xs text-gray-500 truncate">{order.orderId}</p>
                        <p className="text-sm font-medium text-gray-800 truncate">{order.productName}</p>
                    </div>
                </div>

                {/* Customer Name (Desktop Only in this part of the grid) */}
                <p className="hidden sm:block text-sm text-gray-700 truncate sm:flex-grow-[1.5] min-w-0">{order.customerName}</p>
                
                {/* Status (Desktop Only in this part of the grid) */}
                <div className="hidden sm:flex sm:flex-grow-[1] min-w-0 justify-start items-center">
                    <span className={`${summaryStatusPillClasses} ${getStatusPillStyle(order.status)}`}>
                        {order.status}
                        <ChevronDownIcon className="w-3 h-3 ml-1 text-gray-500" />
                    </span>
                </div>

                {/* Toggle Icon - common for both layouts */}
                <button className="ml-auto sm:ml-0 p-1 text-gray-400 hover:text-gray-600 flex-shrink-0 self-center">
                    {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
            </div>

            {/* Collapsible Details Section */}
            {isOpen && (
                <div className="border-t border-gray-200 p-3 sm:p-4 bg-gray-50/30">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <DetailItem label="Price" value={`Rs.${order.price.toFixed(2)}`} />
                        <DetailItem label="Customer" value={order.customerName} /> 
                        <DetailItem label="Size" value={order.size} />
                        <DetailItem label="QTY" value={order.quantity} />
                        <div className="col-span-1 sm:col-span-2 flex items-center mt-1.5 pt-1.5 border-t sm:border-none sm:pt-0"> 
                            <span className="font-medium text-gray-600 mr-2">Status:</span>
                            <span className={`${expandedStatusPillClasses} ${getStatusPillStyle(order.status)}`}>
                                {order.status}
                                <ChevronDownIcon className="w-3.5 h-3.5 ml-1.5 text-gray-500" />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const DetailItem = ({ label, value }) => (
    <div className="flex items-baseline gap-x-1.5 py-0.5"> {/* Keeps label and value close on mobile */}
        <span className="font-medium text-gray-500 text-xs whitespace-nowrap">{label}:</span>
        <span className="text-gray-700 text-sm break-words">{value}</span>
    </div>
);


// --- OrderManagementPage Component ---
const OrderManagementPage = () => {
    const [orders, setOrders] = useState([
        { id: '1', orderId: '021231', productName: 'Beige Coffee Super Long Name To Test Truncation and Wrapping', productImage: 'https://placehold.co/80x80/d2b48c/704214?text=Coffee1', customerName: 'Sarah Brown', status: 'Pending', price: 2000, size: '16"', quantity: 200 },
        { id: '2', orderId: '021232', productName: 'Dark Roast Blend', productImage: 'https://placehold.co/80x80/A0522D/FFFFFF?text=Coffee2', customerName: 'Johnathan Doe The Third', status: 'Completed', price: 2500, size: '12"', quantity: 150 },
        { id: '3', orderId: '021233', productName: 'Espresso Machine Deluxe', productImage: 'https://placehold.co/80x80/808080/FFFFFF?text=Machine', customerName: 'Lisa Ray', status: 'Rejected', price: 15000, size: 'N/A', quantity: 1 },
        { id: '4', orderId: '021234', productName: 'Coffee Grinder Pro', productImage: 'https://placehold.co/80x80/BDB76B/000000?text=Grinder', customerName: 'Mike P.', status: 'Pending', price: 3500, size: 'Medium', quantity: 50 },
        { id: '5', orderId: '021235', productName: 'Artisan Ceramic Mug Set', productImage: 'https://placehold.co/80x80/ADD8E6/000000?text=Mugs', customerName: 'Karen White', status: 'Completed', price: 1200, size: 'Standard (Set of 4)', quantity: 400 },
    ]);
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleOrderDetails = (orderId) => {
        setExpandedOrderId(prevId => (prevId === orderId ? null : orderId));
    };

    const filteredOrders = orders.filter(order => 
        order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8 flex-1 bg-gray-100 min-h-screen">
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Order Management</h1>
                <p className="text-xs sm:text-sm text-gray-500">
                    Home &gt; <span className="sm:hidden">Order Details</span><span className="hidden sm:inline">Order</span>
                </p>
            </div>

            {/* Search Bar (Mobile only as per screenshot, can be enabled for desktop too) */}
            <div className="sm:hidden mb-4 bg-white p-3 rounded-xl shadow-lg"> {/* Increased rounding and shadow */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"> {/* Adjusted padding */}
                        <SearchIcon className="text-gray-400 h-5 w-5" />
                    </div>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm" // Adjusted padding
                        placeholder="Search for id, name, product..."
                    />
                </div>
            </div>

            {/* Desktop Table Header */}
            <div className="hidden sm:grid sm:grid-cols-[auto_minmax(0,2.5fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto] items-center bg-orange-100 px-4 py-3 rounded-t-lg text-xs font-semibold text-gray-500 uppercase tracking-wider shadow-sm gap-x-4">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-600 border-gray-400 rounded focus:ring-1 focus:ring-orange-500 focus:ring-offset-0 flex-shrink-0"/>
                <span className="pl-0">Product</span> 
                <span>Customer</span> 
                <span>Status</span>   
                <div className="w-5 flex-shrink-0"></div> {/* Spacer for dropdown icon column, matching icon size */}
            </div>
            
            {/* Mobile Header */}
            <div className="sm:hidden bg-orange-100 px-4 py-2.5 rounded-t-lg text-sm font-semibold text-gray-700 uppercase tracking-wider shadow-sm mb-3">
                Product
            </div>


            {/* Orders List */}
            {filteredOrders.length > 0 ? (
                <div className={filteredOrders.length > 0 && !expandedOrderId ? "sm:rounded-b-lg sm:shadow-md sm:overflow-hidden" : ""}> {/* Add rounded-b and shadow if no item is expanded */}
                    {filteredOrders.map((order, index) => (
                        <OrderItem 
                            key={order.id} 
                            order={order}
                            isOpen={expandedOrderId === order.id}
                            onToggle={() => toggleOrderDetails(order.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 bg-white rounded-lg shadow-md">
                    <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-3"/>
                    <p className="text-lg font-semibold text-gray-700">
                        {searchTerm ? "No orders match your search." : "No orders found."}
                    </p>
                     {searchTerm && <p className="text-sm text-gray-500">Try a different search term.</p>}
                </div>
            )}
        </div>
    );
};

export default OrderManagementPage;
