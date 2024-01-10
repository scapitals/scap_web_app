import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import {HomePg, AboutPg, ContactPg, LoginPg, RegisterPg, FgtPwd, PlanServicePg, InvestmentstockPg} from "./pages";
import {FaSun, FaMoon} from "react-icons/fa"
import { useTheme } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"
import UserHome from "./pages/Dashboard/user/UserMain";
import UserMain from "./pages/Dashboard/user/UserMain";




const router = createBrowserRouter([{
  path: "*",
  Component: Root
}
])


function Root() {

  const { systemTheme, theme, setTheme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="black" size={18}/>;
    } else {
      return <FaMoon color="white" size={18}/>;
    }
  };
useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })
  return (
    
    <div>
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="fixed top-1/2 right-20 cursor-pointer border border-primary rounded-full p-2 z-50 dark:bg-[#f1f1f1] bg-[#1f2937] shadow-2xl">
      {themeBox()}
    </div>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/service" element={<PlanServicePg />} />
        <Route path="/investment-stocks" element={<InvestmentstockPg />} />
        <Route path="/user/*" element={<UserMain />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/forgot-password" element={<FgtPwd />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;