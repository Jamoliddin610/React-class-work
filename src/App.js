import 'boxicons'
import { Link, Route, Routes } from 'react-router-dom';
import styledComponents from 'styled-components';
import './App.css';
import Cart from './Cart';
import Products from './Products';

function App() {
  return (
    <Wrapper>
      <LinksWrapper>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </LinksWrapper>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Wrapper>
  );
}

export default App;



const Wrapper = styledComponents.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;


const LinksWrapper = styledComponents.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
