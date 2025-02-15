import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import ClaimPage from "./page/ClaimPage";
import MessagePage from "./page/MessagePage";
import ProtectedRoute from "./context/ProtectedRoute";
import Homepage from "./page/HomePage";
import AuthForm from "./components/auth/AuthForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/claims" element={<ClaimPage />} />
              <Route path="/messages" element={<MessagePage />} />
            </Route>
          </Route>
          <Route path="/auth-form" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
