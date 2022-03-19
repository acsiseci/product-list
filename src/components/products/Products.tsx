import Card from "../productCard/ProductCard";
import { Product } from "../../types/ProductType";
import {Key} from "react";

const Products = (props: { tempProducts: any; onDetail: any }) => {
  const { tempProducts, onDetail } = props;

  return (
    <div className="product-list">
      <div className="row">
        {tempProducts?.map((item: Product, index: Key) => {
          return (
            <div key={index} className="col-6 col-sm-4 col-md-3">
              <Card
                item={item}
                onDetail={(item: Product) => onDetail(item)}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
