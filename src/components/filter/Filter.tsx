import { Product } from "../../types/ProductType";

const Filter = (props: {
  products: Product[];
  filterProducts: (event: Product[]) => void;
}) => {
  const { products, filterProducts } = props;

  const filter = (e: { target: { value: any } }) => {
    const keyword = e.target.value;
    if (products && keyword !== "") {
      const results = products.filter((product: { title: string }) => {
        return product.title.toLowerCase().includes(keyword.toLowerCase());
      });
      filterProducts(results);
    } else {
      filterProducts(products);
    }
  };

  return (
    <input
      placeholder="Search"
      className="form-control my-4"
      onChange={(e) => filter(e)}
    />
  );
};

export default Filter;
