import { ItemListContainer, ItemDetailContainer, NavBar } from "./componentes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./componentes";
export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
