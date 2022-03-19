import { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { Product } from "../types/ProductType";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>();
  const [tempProducts, setTempProducts] = useState<Product[]>();
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>();
  const [pageItemCount, setPageItemCount] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    ProductService.getProducts().then((response) => {
      addMinPrice(response.data.products);
      pagination(response.data.products);
    });
  }, []);

  const addMinPrice = (products: Product[]) => {
    products.forEach((v) => {
      let priceList = v.variants.map((variant) => {
        return Number(variant.price);
      });
      let min = Math.min.apply(null, priceList);
      v._min_price = min;
    });
    setProducts(products);
    setTempProducts(products);
  };

  const pagination = (response: Product[]) => {
    setPageCount(Math.ceil(response.length / pageItemCount));
    setTempProducts(response!.slice(0, 10));
  };

  const onPaginationChange = (page: number) => {
    let _page = page + 1;
    setSelectedPage(_page);
    setTempProducts(products!.slice(_page * 10 - 10, _page * 10));
  };

  const onDetail = (item: Product) => {
    navigate("/product", { state: item });
  };

  const onFilter = (results: Product[]) => {
    setTempProducts(results);
    pagination(results);
  };

  return (
      products ? <div className="container">
          <Filter
              products={products}
              filterProducts={(results: Product[]) => onFilter(results)}
          />
          <Products
              onDetail={(item: Product) => onDetail(item)}
              tempProducts={tempProducts}
          />
          <Pagination
              pageCount={pageCount}
              selectedPage={selectedPage}
              onPaginationChange={(page: number) => onPaginationChange(page)}
          />
        </div> : <div className="text-center">Loading...</div>
  );
};

export default ProductList;
