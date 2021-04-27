import { getProducts } from "../api";
import { parseRequestUrl } from "../utils";

const ProductScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProducts(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    return `<div>${product.name}</div>`;
  },
};

export default ProductScreen;
