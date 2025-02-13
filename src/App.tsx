import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import ClaimPage from "./page/ClaimPage";
import Homepage from "./page/Homepage";
import MessagePage from "./page/MessagePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/claims" element={<ClaimPage />} />
            <Route path="/messages" element={<MessagePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
