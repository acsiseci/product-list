import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product, Variant } from "../types/ProductType";
import ProductImage from "../components/productImage/ProductImage";
import ProductContent from "../components/productContent/ProductContent";

const ProductDetail = () => {
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState<Product>(
    location.state as Product
  );
  const [selectedVariant, setSelectedVariant] = useState<Variant>();
  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    setSelectedVariant(selectedProducts.variants[0]);
    setSelectedImage(selectedProducts.image.src);
  }, []);

  const onSelectVariant = (
    e: ChangeEvent<HTMLSelectElement>,
    optionType: "option1" | "option2" | "option3"
  ) => {
    let _tempProduct = selectedProducts.variants.find(
      (item) => item[optionType] == e.target.value
    );
    setSelectedVariant(_tempProduct);
  };

  return (
    <div className="container py-5">
      <div className="row product">
        <div className="col-12 col-sm-4">
          <ProductImage
            selectedImage={selectedImage!}
            selectedProducts={selectedProducts}
            onSelectedImage={(image: string) => setSelectedImage(image)}
          ></ProductImage>
        </div>
        <div className="col-12 col-sm-8">
          <ProductContent
            onSelectVariant={(
              e: ChangeEvent<HTMLSelectElement>,
              _optionText: "option1" | "option2" | "option3"
            ) => onSelectVariant(e, _optionText)}
            selectedProducts={selectedProducts}
            selectedVariant={selectedVariant!}
          ></ProductContent>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
