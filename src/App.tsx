import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./components/homePage/Home";
import Claims from "./components/claims/Claims";
import Message from "./components/homePage/Message";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/messages" element={<Message />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
