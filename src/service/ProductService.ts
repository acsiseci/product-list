import http from "../core/httpCommon";
import { Products } from "../types/ProductType";

class ProductService {
  getProducts() {
    return http.get<Products>("/products");
  }
}

export default new ProductService();
