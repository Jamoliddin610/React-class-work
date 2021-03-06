import styledComponents from "styled-components";
import useShop from "./store/ShopContext";
import ProductCard from "./ProductCard";

const Cart = () => {
    const { products, total } = useShop();

    return (
        <>
            <Title>Your cart total is {total}.00$</Title>
            <ProductsWrapper>
                {products.map((product, index) => (
                    <ProductCard {...product} key={index} />
                ))}
            </ProductsWrapper>
        </>
    );
};

export default Cart;

const Title = styledComponents.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styledComponents.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;