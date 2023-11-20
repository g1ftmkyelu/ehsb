import React, { useState, useEffect } from 'react';
import { TiEye, TiShoppingCart } from 'react-icons/ti';
import { BsFilter } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import { useFetchAllResources } from '../../utils/getAPI';
import Loader from '../specialRenderComponents/Loader';
import PayPalCheckout from '../specialRenderComponents/paypalCheckout';



const Shop = ({ rdata }) => {



    const { data, isLoading } = useFetchAllResources(
        rdata.path,
        rdata.dataSource
    );
    const [products, setProducts] = useState([]); // Initialize products as an empty array

    useEffect(() => {
        if (products.length === 0 && !isLoading) {
            setProducts(data);
        }
    }, [products, isLoading]);

    const [filteredProducts, setFilteredProducts] = useState([...products]);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [productNameFilter, setProductNameFilter] = useState('');
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const [selectedItem, setSelectedItem] = useState({});
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)

    useEffect(() => {
        handleFiltering();
    }, [categoryFilter, productNameFilter, products]);

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    const handleProductNameFilter = (name) => {
        setProductNameFilter(name);
    };

    const handleFiltering = () => {
        let filtered = [...products];

        if (categoryFilter !== 'All') {
            filtered = filtered.filter((product) => product.category === categoryFilter);
        }

        if (productNameFilter !== '') {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(productNameFilter.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    const handleAddToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId);
        setCart([...cart, productToAdd]);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (

        <>

            {isLoading ? <Loader /> :
                <div className="container mx-auto">
                    {/* Filter Section */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by product name"
                                    className="pl-8 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                    onChange={(e) => handleProductNameFilter(e.target.value)}
                                />
                                <AiOutlineSearch className="absolute top-3 left-3 text-gray-400" />
                            </div>
                            <div className="relative">
                                <select
                                    onChange={(e) => handleCategoryFilter(e.target.value)}
                                    className="appearance-none rounded border border-gray-300 py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="All">All Categories</option>
                                    {/* Assuming you have a list of unique categories */}
                                    {/* Render options based on unique categories */}
                                    {Array.from(new Set(products.map((product) => product.category))).map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                <BsFilter className="absolute top-3 left-3 text-gray-400" />
                            </div>
                        </div>
                        {/* Shopping Cart */}
                        <div className="flex items-center">
                            <TiShoppingCart className="text-2xl mr-2" />
                            <span>{cart.length}</span>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        {displayedProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded shadow-md p-4 flex flex-col justify-between">
                                <div className="flex flex-col items-center">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-700 mb-2">MWK{product.price}</p>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <PayPalCheckout/>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        previousLinkClassName={'pagination__link'}
                        nextLinkClassName={'pagination__link'}
                        disabledClassName={'pagination__link--disabled'}
                        activeClassName={'pagination__link--active'}
                    />



                </div>


            }
        </>

    );
};

export default Shop;
