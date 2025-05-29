import React, { useState, useEffect } from 'react';
import ProductManagementPage from './ProductManagement';
import BlogManagementPage from './BlogManagementPage';
import OrderManagementPage from './OrderManagementPage'

// --- Icon Components (Centralized Definitions) ---
const DocumentDuplicateIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
  </svg>
);
const SearchIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
const UserCircleIcon = ({ className = "w-8 h-8" }) => <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0012 11z" clipRule="evenodd"></path></svg>;
const ChevronDownIcon = ({ className = "w-4 h-4" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>;
const HomeIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;
const BriefcaseIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const ShoppingBagIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>;
const UsersIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-1M15 21H9"></path></svg>;
const DocumentTextIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const LinkIcon = ({ className = "w-5 h-5" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>;
const ArrowSmRightIcon = ({ className = "w-4 h-4" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>;
const DotIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" />
  </svg>
);
const MenuIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);
const XIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);
const PlusIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
    </svg>
);
const PencilIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
    </svg>
);
const ChevronUpDownIcon = ({ className = "w-5 h-5" }) => ( 
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
    </svg>
);
const NoProductIllustration = ({ className = "w-48 h-48 text-gray-400" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified SVG for brevity, use your original detailed one */}
        <rect x="20" y="25" width="60" height="50" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2"/>
        <line x1="40" y1="40" x2="60" y2="60" stroke="currentColor" strokeWidth="2"/>
        <line x1="60" y1="40" x2="40" y2="60" stroke="currentColor" strokeWidth="2"/>
    </svg>
);


// --- Sidebar Navigation Item Component ---
const NavItem = ({ icon, text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out text-left
      ${active
        ? 'bg-orange-100 text-orange-600'
        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }`}
  >
    {icon && React.cloneElement(icon, { className: `w-5 h-5 mr-3 flex-shrink-0 ${active ? 'text-orange-600' : 'text-gray-500'}` })}
    {text}
  </button>
);

// --- Sidebar Component ---
const Sidebar = ({ activeItem, onNavigate, isOpen, toggleSidebar }) => {
    const navItems = [
        { id: 'Dashboard', text: 'Dashboard', icon: <HomeIcon /> },
        { id: 'ProductManagement', text: 'Product Management', icon: <BriefcaseIcon /> },
        { id: 'OrderManagement', text: 'Order Management', icon: <ShoppingBagIcon /> },
        { id: 'BlogManagement', text: 'Blog Management', icon: <DocumentTextIcon /> },
       
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-white p-6 space-y-6 border-r border-gray-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                            lg:translate-x-0 lg:static lg:inset-0 lg:flex lg:flex-col flex-shrink-0 transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-800">Company Name</div>
                    <button onClick={toggleSidebar} className="lg:hidden text-gray-600 hover:text-gray-800">
                        <XIcon />
                    </button>
                </div>
                <nav className="space-y-1 flex-1">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.id}
                            icon={item.icon}
                            text={item.text}
                            active={activeItem === item.id}
                            onClick={() => {
                                onNavigate(item.id);
                                if (isOpen) toggleSidebar();
                            }}
                        />
                    ))}
                </nav>
            </aside>
        </>
    );
};


// --- Page Specific Components ---
const DashboardPage = () => {
    // Data for the dashboard page
    const recentOrdersData = [
        { productImg: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=50&q=50', productId: '021231', productName: 'Beige Coffee', status: 'Pending' },
        { productImg: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=50&q=50', productId: '021231', productName: 'Beige Coffee', status: 'Completed' },
        { productImg: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=50&q=50', productId: '021231', productName: 'Beige Coffee', status: 'Completed' },
    ];
    const recentlyAddedProductsData = [ // Used in DashboardPage
        { name: 'Quick Fix', price: 'Rs.2000', imageSrc: 'https://placehold.co/32x32/f87171/ffffff?text=Q' },
        { name: 'Quick Fix', price: 'Rs.2000', imageSrc: 'https://placehold.co/32x32/fb923c/ffffff?text=Q' },
        { name: 'Quick Fix', price: 'Rs.2000', imageSrc: 'https://placehold.co/32x32/fdba74/ffffff?text=Q' },
        { name: 'Quick Fix', price: 'Rs.2000', imageSrc: 'https://placehold.co/32x32/a78bfa/ffffff?text=Q' },
    ];
    const statIconBgColor = 'bg-orange-100';
    const statIconTextColor = 'text-orange-700';

    return (
        <div className="p-4 sm:p-8 flex-1">
            {/* Header for Dashboard Overview */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
                <p className="text-sm text-gray-500">Home &gt; Dashboard</p>
            </div>
            {/* Stats Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Sales" value="₹12678.50" icon={<DocumentDuplicateIcon />} iconBgColor={statIconBgColor} iconTextColor={statIconTextColor} />
                <StatCard title="Total Orders" value="30,000" icon={<DocumentDuplicateIcon />} iconBgColor={statIconBgColor} iconTextColor={statIconTextColor} />
                <StatCard title="Customer Status" actionText="Click here" icon={<DocumentDuplicateIcon />} iconBgColor={statIconBgColor} iconTextColor={statIconTextColor} onActionClick={() => console.log("Customer Status Clicked")} />
                <StatCard title="Customer Support" actionText="Click here" icon={<DocumentDuplicateIcon />} iconBgColor={statIconBgColor} iconTextColor={statIconTextColor} onActionClick={() => console.log("Customer Support Clicked")} />
            </div>
            {/* Recent Orders and Products section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                    {/* Recent Orders Table */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                        <a href="#" className="text-sm text-orange-600 hover:underline flex items-center">
                            Go to Orders <ArrowSmRightIcon className="ml-1" />
                        </a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-orange-100">
                                <tr>
                                    <th className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
                                    <th className="p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentOrdersData.map((order, index) => (
                                    <OrderRow key={index} {...order} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Recently Added Products (multiple blocks) */}
                <div className="space-y-6">
                    {[1, 2, 3].map(block => (
                        <div key={block} className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">Recently Added Products</h3>
                                <a href="#" className="text-sm text-orange-600 hover:underline flex items-center">
                                    Show All <ArrowSmRightIcon className="ml-1" />
                                </a>
                            </div>
                            <div className="space-y-1">
                                {recentlyAddedProductsData.map((product, index) => (
                                    <ProductItem key={`block${block}-${index}`} {...product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom Stats section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-lg text-center"> <UsersIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" /> <p className="text-xl font-semibold text-gray-800">450</p> <p className="text-sm text-gray-500">All Orders</p> </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center"> <DotIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" /> <p className="text-xl font-semibold text-gray-800">50</p> <p className="text-sm text-gray-500">Pending</p> </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center"> <DotIcon className="w-8 h-8 text-green-500 mx-auto mb-2" /> <p className="text-xl font-semibold text-gray-800">400</p> <p className="text-sm text-gray-500">Completed</p> </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center"> <UsersIcon className="w-8 h-8 text-indigo-500 mx-auto mb-2" /> <p className="text-xl font-semibold text-gray-800">450</p> <p className="text-sm text-gray-500">New Customers</p> </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center"> <UsersIcon className="w-8 h-8 text-indigo-500 mx-auto mb-2" /> <p className="text-xl font-semibold text-gray-800">50</p> <p className="text-sm text-gray-500">Repeated Customers</p> </div>
            </div>
        </div>
    );
};


// Other Page Placeholders

const CustomerDataPage = () => <div className="p-8"><h1 className="text-2xl font-semibold">Customer Data Page</h1><p>Content for customer data goes here.</p></div>;

const ConnectivityPage = () => <div className="p-8"><h1 className="text-2xl font-semibold">Connectivity Page</h1><p>Content for connectivity goes here.</p></div>;

// --- Shared Sub-Components (StatCard, OrderRow, ProductItem for Dashboard) ---
const StatCard = ({ title, value, icon, iconBgColor = 'bg-yellow-100', iconTextColor = 'text-yellow-700', actionText, onActionClick }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className={`p-2 rounded-lg ${iconBgColor}`}>
            {React.cloneElement(icon, { className: `w-6 h-6 ${iconTextColor}` })}
          </div>
        </div>
        {actionText ? (
           <button onClick={onActionClick} className="text-lg font-semibold text-orange-600 hover:underline focus:outline-none">
             {actionText}
           </button>
        ) : (
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        )}
      </div>
    </div>
);
const OrderRow = ({ productImg, productId, productName, status }) => { // For Dashboard Recent Orders
    let statusColor = '';
    let rowBgColor = '';
    if (status === 'Pending') {
      statusColor = 'bg-yellow-100 text-yellow-700';
      rowBgColor = 'bg-orange-50 hover:bg-orange-100';
    } else if (status === 'Completed') {
      statusColor = 'bg-green-100 text-green-700';
      rowBgColor = 'hover:bg-gray-50';
    } else {
      statusColor = 'bg-gray-100 text-gray-700';
      rowBgColor = 'hover:bg-gray-50';
    }
    return (
      <tr className={rowBgColor}>
        <td className="p-3">
          <div className="flex items-center">
            <img src={productImg || `https://placehold.co/40x40/e2e8f0/cbd5e0?text=P`} alt={productName} className="w-10 h-10 rounded-md object-cover mr-3" onError={(e) => e.target.src = `https://placehold.co/40x40/e2e8f0/cbd5e0?text=Error`} />
            <div>
              <p className="text-sm font-medium text-gray-800">{productId}</p>
              <p className="text-xs text-gray-500">{productName}</p>
            </div>
          </div>
        </td>
        <td className="p-3 text-sm">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
            {status}
          </span>
        </td>
      </tr>
    );
};
const ProductItem = ({ name, price, imageSrc }) => ( // For Dashboard Recently Added Products
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        <img src={imageSrc || `https://placehold.co/32x32/e2e8f0/cbd5e0?text=P`} alt={name} className="w-8 h-8 rounded-md object-cover mr-3" onError={(e) => e.target.src = `https://placehold.co/32x32/e2e8f0/cbd5e0?text=Error`} />
        <span className="text-sm text-gray-700">{name}</span>
      </div>
      <span className="text-sm font-medium text-gray-800">{price}</span>
    </div>
);

// --- Main Admin Dashboard Component (acts as App Shell) ---
const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('Dashboard'); // Default page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state for mobile

  // Navigation handler
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
  };

  // Sidebar toggle handler
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to render the current page's content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'ProductManagement':
        return <ProductManagementPage />;
      case 'OrderManagement':
        return <OrderManagementPage />;
      case 'CustomerData':
        return <CustomerDataPage />;
      case 'BlogManagement':
        return <BlogManagementPage />;
      case 'Connectivity':
        return <ConnectivityPage />;
      default:
        return <DashboardPage />; // Fallback to Dashboard
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-x-hidden"> {/* Main app container */}
      {/* Sidebar Component */}
      <Sidebar
        activeItem={currentPage}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {/* Main Content Area (Header + Page Content) */}
      <div className="flex-1 flex flex-col overflow-y-auto"> {/* Allows content to scroll */}
        {/* Header Bar (non-sticky) */}
        <header className="bg-white shadow-sm p-4 sm:p-6 flex items-center justify-between">
          {/* Hamburger Menu (visible on mobile) */}
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-800 lg:hidden">
            <MenuIcon />
          </button>
          {/* Search Bar */}
          <div className="relative w-full max-w-xs sm:max-w-md ml-4 lg:ml-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="text-gray-400" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Search..."
            />
          </div>
          {/* Admin Profile Section */}
          <div className="flex items-center ml-3 sm:ml-6 flex-shrink-0">
            <UserCircleIcon className="text-gray-600 w-8 h-8" /> {/* Adjusted size */}
            <div className="ml-2 hidden sm:block"> {/* Text hidden on very small screens, shown on sm+ */}
              <p className="text-xs font-medium text-gray-700">Admin Name</p> {/* Smaller text */}
              <p className="text-[10px] text-gray-500">Admin</p> {/* Even smaller text for "Admin" role */}
            </div>
            <ChevronDownIcon className="ml-1 text-gray-500 cursor-pointer w-3 h-3 hidden sm:block" /> {/* Smaller icon, hidden on mobile */}
          </div>
        </header>
        {/* Dynamically Rendered Page Content */}
        {renderPageContent()}
      </div>
    </div>
  );
};

export default AdminDashboard; // Export the main dashboard component
