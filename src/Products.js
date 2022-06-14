import styledComponents from "styled-components";
import { shopData } from "./ShopData";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <div>
            <Title>Welcome to DC Clothing Shop</Title>

            <ProductsWrapper>
                {shopData.map((data, index) => (
                    <ProductCard key={index} {...data} />
                ))}
            </ProductsWrapper>
        </div>
    );
};

export default Products;

const Title = styledComponents.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styledComponents.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
`;
