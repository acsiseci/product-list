import "./ProductCard.sass";
import { Product } from "../../types/ProductType";

const ProductCard = (props: { item: Product; onDetail: any; }) => {
  const { item, onDetail } = props;

  return (
    <div key={item.id} className="product" onClick={() => onDetail(item)}>
      <div className="product-content">
        <div className="title"> {item.title}</div>
        <div className="type"> {item.product_type}</div>
        <div className="price"> {"$" + item._min_price}</div>
      </div>
      <button className="button"> Detail </button>
    </div>
  );
};

export default ProductCard;
