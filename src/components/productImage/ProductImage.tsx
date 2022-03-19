import { Product } from "../../types/ProductType";
import "./ProductImage.sass";


const ProductImage = (props: {
  selectedImage: string;
  selectedProducts: Product;
  onSelectedImage: any;
}) => {
  const { selectedImage, selectedProducts, onSelectedImage } = props;

  return (
    <>
      <div className="main-image">
        <img className="image" src={selectedImage} />
      </div>
      <div className="image-list">
        {selectedProducts.images.map((image: { src: string }) => {
          return (
            <div
              className="preview-image"
              onClick={() => onSelectedImage(image.src)}
            >
              <img className="temp-preview-image" src={image.src} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductImage;
