
import React, { useState, useEffect, useCallback } from 'react';

// --- Icon Components (Simple SVGs) ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v18h18V3H3.75zm0 0h18M3.75 9h18M3.75 15h18M9 3v18m6-18v18" />
  </svg>
);

const ProductIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125V4.125c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

const OrderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const CustomerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V7.5c0-.621.504-1.125 1.125-1.125H7.5m3-3h3.375c.621 0 1.125.504 1.125 1.125V7.5m-4.5 0V4.5m0 0h3.375" />
  </svg>
);

const ConnectivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2.3.4-3.2 1.1A6.7 6.7 0 005.2 8H3.75c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125H5.2a6.7 6.7 0 003.6 3.9c.9.7 2 1.1 3.2 1.1s2.3-.4 3.2-1.1a6.7 6.7 0 003.6-3.9h1.45c.621 0 1.125-.504 1.125-1.125v-2.25c0-.621-.504-1.125-1.125-1.125H18.8a6.7 6.7 0 00-3.6-3.9c-.9-.7-2-1.1-3.2-1.1zm0 1.5a5.25 5.25 0 010 10.5 5.25 5.25 0 010-10.5z" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500 hover:text-blue-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500 hover:text-red-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.243.096 3.222.261m3.222.261L11 5.25M9 5.25L10.36 3.25M9 5.25V3.25m6.75 2.05l-2.618-2.2M15 5.25V3.25m2.472.488l-2.472-2.2M4.5 5.25V3.25" />
    </svg>
);


const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const TagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
);


// --- Initial Sample Data ---
const initialBlogs = [
    {
        id: 1,
        title: "Talk it out with audio",
        content: "Use audio to have live conversations with other collaborators directly in your Figma and FigJam files. This allows for real-time feedback and a more dynamic design process.",
        author: "Admin User",
        publicationDate: "2024-03-23",
        status: "Published",
        imageUrl: "https://placehold.co/600x400/f97316/white?text=Blog+Image+1",
        category: "Productivity",
        tags: ["Figma", "Collaboration", "Audio"]
    },
    {
        id: 2,
        title: "Mastering Component Design",
        content: "A deep dive into creating reusable and scalable components in modern UI design. Learn best practices for variants, properties, and auto layout.",
        author: "Jane Designer",
        publicationDate: "2024-04-15",
        status: "Published",
        imageUrl: "https://placehold.co/600x400/10b981/white?text=Blog+Image+2",
        category: "Design Systems",
        tags: ["UI/UX", "Components", "Scalability"]
    },
    {
        id: 3,
        title: "The Future of Remote Work Tools",
        content: "Exploring the next generation of tools that will shape how remote teams collaborate, communicate, and stay productive. From virtual offices to AI assistants.",
        author: "Tech Savvy",
        publicationDate: "2024-05-01",
        status: "Draft",
        imageUrl: "https://placehold.co/600x400/3b82f6/white?text=Blog+Image+3",
        category: "Technology",
        tags: ["Remote Work", "Future Tech", "AI"]
    }
];



// --- Main Application Component ---
function App() {
    const [currentPage, setCurrentPage] = useState('setup'); // 'setup', 'blogList', 'createBlog', 'editBlog'
    const [blogs, setBlogs] = useState(() => {
        const savedBlogs = localStorage.getItem('blogs');
        return savedBlogs ? JSON.parse(savedBlogs) : initialBlogs;
    });
    const [editingBlog, setEditingBlog] = useState(null); // Blog object to edit
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    const navigateTo = (page) => {
        setCurrentPage(page);
        setEditingBlog(null); // Reset editing state when navigating
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
    };

    const handleStartCustomization = () => navigateTo('blogList');

    const handleCreateBlog = () => {
        setEditingBlog(null);
        navigateTo('createBlog');
    };

    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        navigateTo('editBlog');
    };
    
    const handleDeleteBlog = (blogId) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            setBlogs(blogs.filter(blog => blog.id !== blogId));
        }
    };

    const handleSaveBlog = (blogData) => {
        if (editingBlog) {
            // Update existing blog
            setBlogs(blogs.map(b => b.id === editingBlog.id ? { ...b, ...blogData, id: editingBlog.id } : b));
        } else {
            // Create new blog
            setBlogs([...blogs, { ...blogData, id: Date.now() }]);
        }
        navigateTo('blogList');
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}  
                <div className="flex flex-col sm:flex-row justify-between sm:items-center ml-8 mt-9">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Blog Management</h1>
                </div>
                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100  p-4 md:p-6 lg:p-8">
                    {currentPage === 'setup' && <InitialSetupPage onStartCustomization={handleStartCustomization} />}
                    {currentPage === 'blogList' && <BlogListPage blogs={filteredBlogs} onCreateBlog={handleCreateBlog} onEditBlog={handleEditBlog} onDeleteBlog={handleDeleteBlog} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
                    {(currentPage === 'createBlog' || currentPage === 'editBlog') && <CreateEditBlogPage onSaveBlog={handleSaveBlog} onCancel={() => navigateTo('blogList')} blogToEdit={editingBlog} />}
                </main>
            </div>
        </div>
    );
}







// --- Page Components ---

// Initial Setup Page (Images 1 & 2)
function InitialSetupPage({ onStartCustomization }) {
    return (
        <div className="max-w-2xl ">
            <div className="mb-6">
                <span className="text-sm text-gray-500">Home &gt; </span>
                <span className="text-sm text-orange-600">Blog Management</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Setup your blog</h2>
            <p className="text-gray-600 mb-8">Here are some quick links that you can use.</p>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                        <BlogIcon/> {/* Using BlogIcon as a placeholder */}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Customize your blog</h3>
                        <p className="text-gray-600">Stand out from the crowd. We let you customize everything so you can create.</p>
                    </div>
                </div>
                <button
                    onClick={onStartCustomization}
                    className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition duration-150"
                >
                    Start Customization
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}

// Blog List Page (Image 5)
function BlogListPage({ blogs, onCreateBlog, onEditBlog, onDeleteBlog, searchTerm, setSearchTerm }) {
    return (
        <div>
            <div className="mb-4">
                <span className="text-sm text-gray-500">Home &gt; </span>
                <span className="text-sm text-orange-600">Blog Management</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="relative w-full md:w-1/2 lg:w-1/3">
                    <input
                        type="text"
                        placeholder="Search for id, name, product..."
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                     <button className="flex items-center bg-white text-gray-700 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-150 w-full md:w-auto justify-center">
                        <FilterIcon />
                        Filters
                    </button>
                    <button
                        onClick={onCreateBlog}
                        className="flex items-center bg-orange-500 text-white px-4 py-2.5 rounded-lg hover:bg-orange-600 transition duration-150 w-full md:w-auto justify-center"
                    >
                        <PlusIcon />
                        Create Blog
                    </button>
                </div>
            </div>

            {blogs.length === 0 && !searchTerm && (
                 <div className="text-center py-10">
                    <BlogIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No Blog Posts Yet</h3>
                    <p className="text-gray-500 mb-4">Get started by creating your first blog post.</p>
                    <button
                        onClick={onCreateBlog}
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-150"
                    >
                        Create First Blog
                    </button>
                </div>
            )}

            {blogs.length === 0 && searchTerm && (
                <div className="text-center py-10">
                    <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
                    <p className="text-gray-500">Try adjusting your search terms.</p>
                </div>
            )}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} onEdit={onEditBlog} onDelete={onDeleteBlog} />
                ))}
            </div>
            {/* Pagination can be added here */}
        </div>
    );
}

// Blog Card Component
function BlogCard({ blog, onEdit, onDelete }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img 
                src={blog.imageUrl || `https://placehold.co/600x400/eee/ccc?text=No+Image`} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/eee/ccc?text=Image+Error"; }}
            />
            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full mr-2">{blog.category || "Uncategorized"}</span>
                    {blog.tags && blog.tags.slice(0, 2).map(tag => (
                         <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mr-1">{tag}</span>
                    ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate" title={blog.title}>{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow clamp-3-lines">{blog.content}</p>
                <div className="text-xs text-gray-500 mb-3">
                    By {blog.author} on {new Date(blog.publicationDate).toLocaleDateString()}
                </div>
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${blog.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {blog.status}
                    </span>
                    <div className="flex space-x-2">
                        <button onClick={() => onEdit(blog)} title="Edit Blog" className="p-1 rounded-md hover:bg-gray-200">
                            <EditIcon />
                        </button>
                         <button onClick={() => onDelete(blog.id)} title="Delete Blog" className="p-1 rounded-md hover:bg-gray-200">
                            <TrashIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Create/Edit Blog Page (Images 3 & 4)
function CreateEditBlogPage({ onSaveBlog, onCancel, blogToEdit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState(''); // Comma-separated string
    const [author, setAuthor] = useState('Admin Name'); // Default author
    const [publicationDate, setPublicationDate] = useState(new Date().toISOString().split('T')[0]);
    const [status, setStatus] = useState('Draft'); // 'Draft', 'Published'
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const MAX_CONTENT_LENGTH = 8000;

    useEffect(() => {
        if (blogToEdit) {
            setTitle(blogToEdit.title || '');
            setContent(blogToEdit.content || '');
            setCategory(blogToEdit.category || '');
            setTags(blogToEdit.tags ? blogToEdit.tags.join(', ') : '');
            setAuthor(blogToEdit.author || 'Admin Name');
            setPublicationDate(blogToEdit.publicationDate ? new Date(blogToEdit.publicationDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]);
            setStatus(blogToEdit.status || 'Draft');
            setImagePreview(blogToEdit.imageUrl || null);
            setImageFile(null); // Don't pre-fill file input for security/UX reasons
        } else {
            // Reset for new blog
            setTitle('');
            setContent('');
            setCategory('');
            setTags('');
            setAuthor('Admin Name');
            setPublicationDate(new Date().toISOString().split('T')[0]);
            setStatus('Draft');
            setImagePreview(null);
            setImageFile(null);
        }
    }, [blogToEdit]);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                alert("Image size should be less than 10MB.");
                return;
            }
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (publishStatus) => {
        if (!title.trim()) {
            alert("Title is required.");
            return;
        }
        if (!content.trim()) {
            alert("Content is required.");
            return;
        }

        const blogData = {
            title,
            content,
            category,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            author,
            publicationDate,
            status: publishStatus,
            imageUrl: imagePreview // If imageFile is set, this would ideally be an uploaded URL in a real app
        };
        onSaveBlog(blogData);
    };
    
    const availableTags = ["White", "Green", "Yellow", "Black", "Tech", "News", "Tutorial"];


    return (
        <div>
            <div className="mb-6">
                <span className="text-sm text-gray-500">Home &gt; Blog &gt; </span>
                <span className="text-sm text-orange-600">{blogToEdit ? 'Edit Post' : 'Create Post'}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content Area (Editor) */}
                <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="mb-4 p-2 border border-gray-200 rounded-md bg-gray-50">
                        {/* Simplified Toolbar - In a real app, use a rich text editor library */}
                        <span className="font-bold mr-2">B</span> <span className="italic mr-2">I</span> <span className="underline mr-2">U</span>
                        <select className="text-sm p-1 border border-gray-300 rounded-md focus:outline-none">
                            <option>16</option>
                            <option>18</option>
                            <option>20</option>
                        </select>
                        {/* Add more mock toolbar items if needed */}
                    </div>
                    <textarea
                        placeholder="Start writing here..."
                        className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 resize-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value.slice(0, MAX_CONTENT_LENGTH))}
                        maxLength={MAX_CONTENT_LENGTH}
                    />
                    <div className="text-right text-sm text-gray-500 mt-2">
                        {content.length}/{MAX_CONTENT_LENGTH}
                    </div>
                </div>

                {/* Sidebar for Details */}
                <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg border border-gray-200 space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter blog title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category & Tags</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 mb-2"
                            placeholder="Enter category"
                        />
                        <div className="mb-2">
                            {availableTags.map(tag => (
                                <button 
                                    key={tag}
                                    type="button"
                                    onClick={() => {
                                        const currentTags = tags.split(',').map(t => t.trim()).filter(t => t);
                                        if (currentTags.includes(tag)) {
                                            setTags(currentTags.filter(t => t !== tag).join(', '));
                                        } else {
                                            setTags([...currentTags, tag].join(', '));
                                        }
                                    }}
                                    className={`mr-2 mb-2 px-3 py-1 text-sm rounded-full border ${
                                        tags.split(',').map(t => t.trim()).includes(tag) 
                                        ? 'bg-orange-500 text-white border-orange-500' 
                                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                         <input
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Add tags, comma separated"
                        />
                    </div>
                    
                    <div className="relative">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-6">
                           <UserIcon />
                        </div>
                        <select 
                            id="author" 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full pl-10 p-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 appearance-none"
                        >
                            <option>Admin Name</option>
                            <option>Editor One</option>
                            <option>Guest Writer</option>
                        </select>
                    </div>

                    <div className="relative">
                        <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-700 mb-1">Publication Date</label>
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-6">
                           <CalendarIcon />
                        </div>
                        <input
                            type="date"
                            id="publicationDate"
                            value={publicationDate}
                            onChange={(e) => setPublicationDate(e.target.value)}
                            className="w-full pl-10 p-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-6">
                           <TagIcon /> {/* Placeholder, better icon needed */}
                        </div>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full pl-10 p-2.5 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 appearance-none"
                        >
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                            <option value="Scheduled">Scheduled</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <p className="text-xs text-gray-500 mb-2">Please upload image, size less than 10MB</p>
                        <div className="flex items-center space-x-2 mb-2">
                            {/* Placeholder for multiple image slots if needed, simplified to one */}
                            <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                                {imagePreview ? <img src={imagePreview} alt="preview" className="w-full h-full object-cover rounded-md"/> : <PlusIcon />}
                            </div>
                             <label htmlFor="imageUpload" className="cursor-pointer text-sm text-orange-600 hover:text-orange-700 font-medium">
                                Browse image
                                <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} className="hidden" />
                            </label>
                        </div>
                        {imagePreview && (
                            <div className="mb-2">
                                <img src={imagePreview} alt="Selected" className="max-h-48 w-full object-contain rounded-lg border border-gray-200" />
                                <button type="button" onClick={() => {setImagePreview(null); setImageFile(null); document.getElementById('imageUpload').value = null;}} className="mt-1 text-xs text-red-500 hover:text-red-700">
                                    Remove Image
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 order-3 sm:order-1"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={() => handleSubmit('Draft')}
                    className="px-6 py-2.5 border border-orange-500 rounded-lg text-orange-600 hover:bg-orange-50 transition duration-150 order-2 sm:order-2"
                >
                    Save as Draft
                </button>
                <button
                    type="button"
                    onClick={() => handleSubmit('Published')}
                    className="px-6 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-150 order-1 sm:order-3"
                >
                    {blogToEdit ? 'Update Post' : 'Publish'}
                </button>
            </div>
        </div>
    );
}

export default App;



































