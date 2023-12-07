import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {PRODUCT_LISTING_STYLED} from "./ProductListing.styled";
import {B2, H6, S1} from "../../elements/Font/Font.styled";
import Image from "next/image";
import {MDBBtn, MDBCollapse, MDBIcon} from 'mdb-react-ui-kit';
import ProductCard from "../ProductCard/ProductCard";
import {useLazyQuery} from "@apollo/client";
import {GET_SERVICES_QUERY} from '../../Apollo/query/GetServicesQuery';
import {GET_CATEGORIES_QUERY} from '../../Apollo/query/GetCategoriesQuery';
import {GET_BRANDS_QUERY} from '../../Apollo/query/GetBrandsQuery';
import {GET_PRODUCT_LISTING_QUERY} from '../../Apollo/query/GetProductListingQuery';
import {useRouter} from "next/router";
import {v4 as uuidv4} from 'uuid';
import CustomModal from "../CustomModal/CustomModal";
import {ContainedButton} from "../../elements/Button/Button";
import ProductView from "../ProductView/ProductView";
import {GET_SEARCH_PRODUCTS} from "../../Apollo/query/GetSearchQuery";
import {GET_PRODUCT_BY_ID_QUERY} from "../../Apollo/query/ProductByIdQuery";

const ProductListing = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [currentPage, setCurrentPage] = useState('');
    const [currentPageData, setCurrentPageData] = useState(1)


    const [serviceData, setServiceData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [brandData, setBrandData] = useState([]);
    const [productList, setProductList] = useState([]);

    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const [showServices, setShowServices] = useState(true);
    const [showCategories, setShowCategories] = useState(true);
    const [showBrands, setShowBrands] = useState(true);
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [mobileFilterTab, setMobileFilterTab] = useState(1);

    const [selectedProduct, setSelectedProduct] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [totalProductsCount, setTotalProductsCount] = useState(null);

    const [searchText, setSearchText] = useState("");

    const [hasMounted, setHasMounted] = useState(false);
    const router = useRouter();

    // services query
    const [getServicesData] = useLazyQuery(GET_SERVICES_QUERY);
    const [getCategoriesData] = useLazyQuery(GET_CATEGORIES_QUERY);
    const [getBrandsData] = useLazyQuery(GET_BRANDS_QUERY);
    const [getProductListData] = useLazyQuery(GET_PRODUCT_LISTING_QUERY);
    const [getProductByIdData] = useLazyQuery(GET_PRODUCT_BY_ID_QUERY);
    const [getSearchProducts] = useLazyQuery(GET_SEARCH_PRODUCTS);


    useEffect(() => {
        servicesApi();
        categoriesApi();
        brandApi();
        if (!isDesktopOrLaptop) {
            fetchProductList();
        }
        setHasMounted(true);
        return () => {
        }
    }, []);

    useEffect(() => {
        if (searchText === "") {
            fetchProductList();
        }
    },[searchText]);

    useEffect(() => {
        if (router.query && router.query.product) {
            fetchProductById();
        }
    },[router.query])

    useEffect(() => {
        if (isDesktopOrLaptop && searchText === "") {
            fetchProductList();
        }
    },[selectedBrands,selectedServices,selectedCategories])

    const servicesApi = async () => {
        try {
            await getServicesData().then(({data}) => {
                if (data?.services) {
                    setServiceData(data?.services);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const categoriesApi = async () => {
        try {
            await getCategoriesData().then(({data}) => {
                if (data?.categories) {
                    setCategoriesData(data?.categories);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const brandApi = async () => {
        try {
            await getBrandsData().then(({data}) => {
                if (data?.brands) {
                    setBrandData(data?.brands);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const checkServicesSelected = (service) => {
        let index = selectedServices.findIndex(item => item.id === service.id)
        return index > -1;
    }

    const handleServicesChange = async (service) => {
        setSearchText('')
        let tmp_selected_service = [...selectedServices];
        let index = selectedServices.findIndex((item) => item.id === service.id);
        if (index > -1) {
            tmp_selected_service.splice(index, 1);
        } else {
            tmp_selected_service.push(service);
        }
        setSelectedServices(tmp_selected_service);

        const categoriesResponse = await getProductListData({
            variables: {
                serviceIds: tmp_selected_service.map((s) => s.id),
            },
        });
        const brandsResponse = await getProductListData({
            variables: {
                serviceIds: tmp_selected_service.map((s) => s.id),
            },
        });

        const categories = categoriesResponse.data?.products?.categoryFilterData;
        const brands = brandsResponse.data?.products?.brandFilterData;
        setCategoriesData(categories);
        setBrandData(brands);


    };

    const checkCategorySelected = (category) => {
        let index = selectedCategories.findIndex(item => item.id === category.id)
        return index > -1;
    }

    const handleCategoryChange = (category) => {
        let tmp_selected_category = [...selectedCategories];
        let index = selectedCategories.findIndex(item => item.id === category.id);
        if (index > -1) {
            tmp_selected_category.splice(index, 1)

        } else {
            tmp_selected_category.push(category)
        }
        setSelectedCategories(tmp_selected_category)
    }

    const checkBrandSelected = (brand) => {
        let index = selectedBrands.findIndex(item => item.id === brand.id)
        return index > -1;
    }

    const handleBrandChange = (brand) => {
        let tmp_selected_brand = [...selectedBrands];
        let index = selectedBrands.findIndex(item => item.id === brand.id);
        if (index > -1) {
            tmp_selected_brand.splice(index, 1)
        } else {
            tmp_selected_brand.push(brand)
        }
        setSelectedBrands(tmp_selected_brand)
    }

    const toggleShowServices = () => setShowServices(!showServices);

    const toggleShowCategories = () => setShowCategories(!showCategories);

    const toggleShowBrands = () => setShowBrands(!showBrands);

    const toggleShowMobileFilter = () => setShowMobileFilter(!showMobileFilter);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const chooseDesign = (product) => {
        router.replace({
            query: {...router.query, product: product.id},
        }).then(r => {
            if (r) {
                // setSelectedProduct(product);
                // setShowModal(true);
            }
        });

    }

    const closeModal = () => {
        router.replace({
            query: {},
        }).then(r => {
            if (r) {
                setShowModal(false);
            }
        });
    }

    useEffect(() => {
        fetchProductList()

    }, [currentPageData])

    const fetchProductList = async () => {
        let serviceIds = selectedServices.map(item => item.id);
        let categoryIds = selectedCategories.map(item => item.id);
        let brandIds = selectedBrands.map(item => item.id);

        let variables = {
            categoryIds: categoryIds,
            serviceIds: serviceIds,
            brandIds: brandIds,
            end: currentPageData
        };
        await getProductListData({variables: variables})
            .then(({data}) => {
                if (data.products && data.products.productData) {
                    setProductList(data.products.productData);
                    setTotalProductsCount(data.products.totalCount);
                    setCurrentPage(data.products.pageRange);
                    // setCurrentPageData(data.products.pageRange)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchProductById = () => {
        let variables = {
            productId: router.query.product
        };
        getProductByIdData({variables: variables})
            .then(({data}) => {
                if (data.productById) {
                    setSelectedProduct(data.productById);
                    setShowModal(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const searchProducts = () => {

        if (searchText !== "") {
            let variables = {
                isActive: true,
                name_Istartswith: searchText,
            };
            getSearchProducts({variables: variables})
                .then(({data}) => {
                    if (data.searchProducts) {
                        let prducts = [];
                        data.searchProducts.edges.forEach((item) => {
                            prducts.push(item.node);
                        })

                        setProductList(prducts);
                        setTotalProductsCount(prducts.length);
                        setSelectedBrands([]);
                        setSelectedServices([]);
                        setSelectedCategories([]);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const clearSearch = () => {
        setSearchText("");
    }

    const applyFilter = () => {
        fetchProductList();
        setShowMobileFilter(false);
    }

    if (!hasMounted) {
        return null;
    }

    const handlePageChange = (currentPage) => {

        setCurrentPageData(currentPage)
        window.scrollTo({top: 0, behavior: 'smooth'});

    };
    console.log(parseInt(currentPageData), "datata")
    return (
        <PRODUCT_LISTING_STYLED>
            <div className={"main-heading text-center"}>
                <H6 className={"product-title"}>Products</H6>
                <B2>(Showing {productList.length} of {totalProductsCount} results)</B2>
            </div>
            <div className="search-Bar">
                <input type={"text"} placeholder={"Search"} className="search-box" value={searchText}
                       onChange={(e) => setSearchText(e.target.value)}
                       onKeyDown={(e) => {
                           if (e.key === 'Enter') {
                               searchProducts();
                           }
                       }}
                />
                <div className="search-logo cursor-pointer">
                    {
                        searchText !== "" ?
                            <MDBIcon fas icon="times" className={"SearchLogo"} onClick={clearSearch}/> :
                            <MDBIcon fas icon="search" className={"SearchLogo"}/>
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {isDesktopOrLaptop ?
                        <div className={"filter-section"}>
                            <div className={"d-flex align-items-center justify-content-between filter-item-header"}
                                 onClick={toggleShowServices}>
                                <B2 color={"#384955"} weight={400}>Filter By Services</B2>
                                {
                                    showServices ?
                                        <MDBIcon fas icon="angle-up"/> :
                                        <MDBIcon fas icon="angle-down"/>
                                }
                            </div>
                            {
                                serviceData?.edges?.length > 0 &&
                                <MDBCollapse show={showServices} className={"my-3 filter-collapse"}>
                                    <div className="d-flex flex-column gap-3">
                                        {serviceData?.edges?.map((service) => (
                                            <label key={uuidv4()} className="checkbox-label">
                                                {service?.node?.name}
                                                <input type="checkbox"
                                                       checked={checkServicesSelected(service.node)}
                                                       onChange={() => handleServicesChange(service.node)}
                                                />
                                                <span className="checkmark"/>
                                            </label>
                                        ))}
                                    </div>
                                </MDBCollapse>
                            }

                            <div className={"d-flex align-items-center justify-content-between filter-item-header mt-4"}
                                 onClick={toggleShowCategories}>
                                <B2 color={"#384955"} weight={400}>Filter by Categories</B2>
                                {
                                    showCategories ?
                                        <MDBIcon fas icon="angle-up"/> :
                                        <MDBIcon fas icon="angle-down"/>
                                }
                            </div>
                            {
                                categoriesData?.length > 0 &&
                                <MDBCollapse show={showCategories} className={"my-3 filter-collapse"}>
                                    <div className="d-flex flex-column gap-3">
                                        {categoriesData?.map((category) => (
                                            <label key={uuidv4()} className="checkbox-label">
                                                {category?.name}
                                                <input type="checkbox"
                                                       checked={checkCategorySelected(category)}
                                                       onChange={() => handleCategoryChange(category)}
                                                />
                                                <span className="checkmark"/>
                                            </label>
                                        ))}
                                    </div>
                                </MDBCollapse>
                            }

                            <div
                                className={"d-flex align-items-center justify-content-between filter-item-header  mt-4"}
                                onClick={toggleShowBrands}>
                                <B2 color={"#384955"} weight={400}>Filter by Brands</B2>
                                {
                                    showBrands ?
                                        <MDBIcon fas icon="angle-up"/> :
                                        <MDBIcon fas icon="angle-down"/>
                                }
                            </div>
                            {
                                brandData?.length > 0 &&
                                <MDBCollapse show={showBrands} className={"my-3 filter-collapse"}>
                                    <div className="d-flex flex-column gap-3">
                                        {brandData?.map((brand) => (
                                            <label key={uuidv4()} className="checkbox-label">
                                                {brand?.name}
                                                <input type="checkbox"
                                                       checked={checkBrandSelected(brand)}
                                                       onChange={() => handleBrandChange(brand)}
                                                />
                                                <span className="checkmark"/>
                                            </label>
                                        ))}
                                    </div>
                                </MDBCollapse>
                            }
                        </div>
                        :
                        <div className={"filter-button d-flex"} onClick={() => setShowMobileFilter(true)}>
                            <S1>Filter</S1>
                            <div className={"filter-icon ms-2 mt-1"}>
                                <Image
                                    src={"https://cdn.deepsense.space/nails/assets/images/filter.png"}
                                    alt={"filter"}
                                    width={15}
                                    height={11}
                                />
                            </div>
                        </div>
                    }
                </div>
                <div className="col-lg-9">
                    <div className={"row"}>
                        {
                            productList.map((product, index) => {
                                return (
                                    <div className={"col-sm-3 col-6"} key={uuidv4()}>
                                        <ProductCard product={product} chooseDesign={chooseDesign}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={"mobile-filter-modal"}>
                <CustomModal show={showMobileFilter} setShowModal={setShowMobileFilter}
                             toggleModal={toggleShowMobileFilter}>
                    <div className={'main-container row'}>
                        <div className={'left-side col-5'}>
                            <B2 className={'filter-attribute-name'}>Filter By </B2>
                            <B2 className={`filter-attribute-name cursor-pointer ${mobileFilterTab === 1 ? "active" : ""}`}
                                onClick={() => setMobileFilterTab(1)}>By Services</B2>
                            <B2 className={`filter-attribute-name cursor-pointer ${mobileFilterTab === 2 ? "active" : ""}`}
                                onClick={() => setMobileFilterTab(2)}>By Categories</B2>
                            <B2 className={`filter-attribute-name cursor-pointer ${mobileFilterTab === 3 ? "active" : ""}`}
                                onClick={() => setMobileFilterTab(3)}>By Brands</B2>
                        </div>
                        <div className={'col-7 right-side position-relative'}>
                            <div className={"d-flex justify-content-end px-2 pt-2"}>
                                <MDBBtn size='lg' floating tag='a' onClick={toggleShowMobileFilter}
                                        className={"floating-btn close"}>
                                    <MDBIcon fas icon="times" size='lg' className={"icon"}/>
                                </MDBBtn>
                            </div>
                            <div className={"px-3 pb-3 w-100"}>
                                {
                                    mobileFilterTab === 1 &&
                                    <div className={"d-flex flex-column gap-3 active"}>
                                        {serviceData?.edges?.map((service) => (
                                            <label key={uuidv4()} className="checkbox-label">
                                                {service.node.name}
                                                <input type="checkbox"
                                                       checked={checkServicesSelected(service.node)}
                                                       onChange={() => handleServicesChange(service.node)}
                                                />
                                                <span className="checkmark"/>
                                            </label>
                                        ))}
                                    </div>
                                }
                                {
                                    mobileFilterTab === 2 &&
                                    <div className="d-flex flex-column gap-3">
                                        {categoriesData?.map((category) => (
                                            <label key={uuidv4()} className="checkbox-label">
                                                {category.name}
                                                <input type="checkbox"
                                                       checked={checkCategorySelected(category)}
                                                       onChange={() => handleCategoryChange(category)}
                                                />
                                                <span className="checkmark"/>
                                            </label>
                                        ))}
                                    </div>
                                }
                                {
                                    mobileFilterTab === 3 &&
                                    <div className="d-flex flex-column gap-3">
                                        {brandData?.map((brand) => (
                                            <label key={uuidv4()} className="checkbox-label">
                                                {brand.name}
                                                <input type="checkbox"
                                                       checked={checkBrandSelected(brand)}
                                                       onChange={() => handleBrandChange(brand)}
                                                />
                                                <span className="checkmark"/>
                                            </label>
                                        ))}
                                    </div>
                                }

                                <div className={"pt-4"}>
                                    <ContainedButton padding={"16px 47px"} fontSize={"16px"} lineHeight={"22px"}
                                                     onClick={applyFilter}>
                                        Apply
                                    </ContainedButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomModal>
            </div>

            <CustomModal show={showModal} setShowModal={setShowModal} toggleModal={toggleModal}>
                <ProductView toggleModal={closeModal} product={selectedProduct}/>
            </CustomModal>
            {totalProductsCount > 12 &&
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center" style={{cursor: 'pointer'}}>
                        {currentPage?.length > 0 &&
                            currentPage?.map((data, index) => {
                                return (
                                    <li className="page-item" key={index}>
                                        <a className="page-link" onClick={() => handlePageChange(data)}>
                                            {data}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            }
        </PRODUCT_LISTING_STYLED>
    )

};

export default ProductListing;
