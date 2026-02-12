import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Static navigation data
const navData = {
    mainNav: [
        { label: 'Home', path: '/', hasDropdown: false },
        { label: 'Roadmap', path: '/roadmap', hasDropdown: false },
        { label: 'Products', path: '/products', hasDropdown: true },
        { label: 'Enquiry', path: '/enquiry', hasDropdown: false },
        { label: 'Help', path: '/help', hasDropdown: false },
    ],
    products: {
        'content-server': {
            id: 'content-server',
            name: 'Content Server',
            path: '/products/content-server',
            subNav: [
                { label: 'About', path: '/products/content-server/about' },
                { label: 'Tech Specs', path: '/products/content-server/tech-specs' },
                { label: 'FAQ', path: '/products/content-server/faq' },
            ],
        },
        'rmsdk': {
            id: 'rmsdk',
            name: 'RMSDK',
            path: '/products/rmsdk',
            subNav: [
                { label: 'About', path: '/products/rmsdk/about' },
                { label: 'FAQ', path: '/products/rmsdk/faq' },
            ],
        },
        'digital-edition': {
            id: 'digital-edition',
            name: 'Digital Edition',
            path: '/products/digital-edition',
            subNav: [
                { label: 'About', path: '/products/digital-edition/about' },
                { label: 'Tech Specs', path: '/products/digital-edition/tech-specs' },
                { label: 'Release Notes', path: '/products/digital-edition/release-notes' },
                { label: 'FAQ', path: '/products/digital-edition/faq' },
                { label: 'Download', path: '/products/digital-edition/download' },
                { label: 'Sample Library', path: '/products/digital-edition/sample-library' },
                { label: 'Help', path: '/products/digital-edition/help' },
            ],
        },
    },
};

export default function Navigation() {
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Detect selected product from URL
    useEffect(() => {
        const path = location.pathname;
        if (path.includes('/products/')) {
            const productId = path.split('/products/')[1]?.split('/')[0];
            if (productId && navData.products[productId as keyof typeof navData.products]) {
                setSelectedProduct(productId);
            }
        } else {
            setSelectedProduct(null);
        }
    }, [location]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowProductDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentProduct = selectedProduct ? navData.products[selectedProduct as keyof typeof navData.products] : null;

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4">
                {/* Main Navigation */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-primary-600">
                        AdobeEbook
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Main navigation items */}
                        {navData.mainNav.map((item) => (
                            item.hasDropdown ? (
                                <div key={item.label} className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setShowProductDropdown(!showProductDropdown)}
                                        className="text-gray-700 hover:text-primary-600 font-medium flex items-center"
                                    >
                                        {item.label}
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {showProductDropdown && (
                                        <div className="absolute top-full mt-2 w-56 bg-white rounded-md shadow-lg py-2 border">
                                            {Object.values(navData.products).map((product) => (
                                                <Link
                                                    key={product.id}
                                                    to={product.subNav[0].path}
                                                    onClick={() => {
                                                        setShowProductDropdown(false);
                                                        setSelectedProduct(product.id);
                                                    }}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-gray-700 hover:text-primary-600 font-medium"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}

                        {/* Product-specific navigation items - shown when on a product page */}
                        {currentProduct && (
                            <>
                                <div className="h-6 w-px bg-gray-300" /> {/* Separator */}
                                {currentProduct.subNav.map((subItem) => (
                                    <Link
                                        key={subItem.path}
                                        to={subItem.path}
                                        className={`font-medium ${location.pathname === subItem.path
                                            ? 'text-primary-600'
                                            : 'text-gray-600 hover:text-primary-600'
                                            }`}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t py-4">
                        {navData.mainNav.map((item) => (
                            item.hasDropdown ? (
                                <div key={item.label} className="mb-2">
                                    <div className="font-medium text-gray-900 px-3 py-2">{item.label}</div>
                                    <div className="pl-6">
                                        {Object.values(navData.products).map((product) => (
                                            <Link
                                                key={product.id}
                                                to={product.subNav[0].path}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}

                        {/* Product-specific navigation in mobile menu */}
                        {currentProduct && (
                            <>
                                <div className="border-t my-2"></div>
                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {currentProduct.name}
                                </div>
                                {currentProduct.subNav.map((subItem) => (
                                    <Link
                                        key={subItem.path}
                                        to={subItem.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-3 py-2 ${location.pathname === subItem.path
                                                ? 'text-primary-600 bg-primary-50 font-medium'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}
