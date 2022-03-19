import { Option, Product, Variant } from "../../types/ProductType";
import "./ProductContent.sass";

const ProductContent = (props: {
  selectedVariant: Variant;
  selectedProducts: Product;
  onSelectVariant: any;
}) => {
  const { selectedVariant, selectedProducts, onSelectVariant } = props;

  return (
    <>
      <h1 className="title">{selectedProducts.title}</h1>
      <h2 className="type">{selectedProducts.product_type}</h2>
      {selectedVariant?.compare_at_price && (
        <s className="old-price">{"$" + selectedVariant?.compare_at_price}</s>
      )}
      <div className="price">{"$" + selectedVariant?.price}</div>

      {selectedProducts.options.map((option: Option, index: number) => {
        let _optionText = ("option" + (index + 1)) as
          | "option1"
          | "option2"
          | "option3";
        return (
          <div className="my-2">
            <div>{option.name}</div>
            <select
              value={selectedVariant?.[_optionText]}
              className="form-control variant"
              onChange={(e) => onSelectVariant(e, _optionText)}
            >
              {option.values.map((value) => {
                return <option value={value}>{value}</option>;
              })}
            </select>
          </div>
        );
      })}

      <div className="mt-4">
        {selectedVariant && selectedVariant?.inventory_quantity > 0 ? (
          <button className="buy-button">BUY IT NOW</button>
        ) : (
          <button className="sold-out-button" disabled={true}>
            SOLD OUT
          </button>
        )}
      </div>
      <hr />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: selectedProducts.body_html }}
      />
    </>
  );
};

export default ProductContent;
