
export interface ProductInformation {
  overview: string;
  features: string;
  whats_box: string;
}

export interface ProductFunction {
  image: string;
  description: string;
}

export interface ProductColor {
  title: string;
  description: string;
}

export interface ProductWarranty {
  title: string;
  description: string;
  value: number;
  cost: number;
}

export interface ProductFeature {
  title: string;
  value: number;
  cost: number;
}

export interface ProductSpecification {
  title: string;
  description: string;
}

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  new?: boolean;
  information: ProductInformation
  functions: Array<ProductFunction>,
  images: Array<string>,
  colors: Array<ProductColor>,
  warranty: Array<ProductWarranty>,
  features: Array<ProductFeature>,
  specifications: Array<ProductSpecification>
}

export default ProductData