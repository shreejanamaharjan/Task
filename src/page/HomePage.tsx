import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Homepage = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        style={{
          position: "absolute",
          zIndex: 1000000,
        }}
      />
      <div>home</div>;
    </>
  );
};

export default Homepage;
