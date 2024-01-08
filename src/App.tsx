import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import {HomePg, AboutPg, ContactPg, LoginPg, RegisterPg, FgtPwd, PlanServicePg, InvestmentstockPg} from "./pages";
import {FaSun, FaMoon} from "react-icons/fa"
import { useTheme } from "next-themes";
import "react-toastify"
import { useEffect } from "react";
import AOS from "aos";
import Dashboard from "./pages/Dashboard/Dashboard";
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
      return <FaSun />;
    } else {
      return <FaMoon />;
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
    
    <>
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="fixed top-1/2 right-20 cursor-pointer border border-primary rounded-full p-2">
      {themeBox()}
    </div>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/service" element={<PlanServicePg />} />
        <Route path="/investment-stocks" element={<InvestmentstockPg />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/user/*" element={<UserMain />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/forgot-password" element={<FgtPwd />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;