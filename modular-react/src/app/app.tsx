// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import {ProductList} from  '@modular-react/modules/products';
import { OrdersList} from '@modular-react/modules/orders';
function Home() {
  return <h1>Home</h1>
}
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path='/orders' element={<OrdersList />} />
    </Routes>
  );
}

export default App;
