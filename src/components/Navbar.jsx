// import { useState } from "react";

// import { close, menu } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="w-full flex py-2 justify-between items-center navbar">
//       <img src="" alt="hoobank" className="w-[150px] h-[100px]" />

//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.title ? "text-dimWhite" : "text-white"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  // const handleSuccessfulLogin = (userData) => {
  //   sessionStorage.setItem("userData", JSON.stringify(userData));
  //   sessionStorage.setItem("isLoggedIn", "true");
  //   history.push("/dashboard");
  // };

  const handleLogout = () => {
    sessionStorage.removeItem(isLoggedIn);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <span className="font-bold text-lg">Netfi</span>
        </div>

        <div className="flex flex-row">
          <h1 className="text-white mx-4">Popular-Plans</h1>
          <h1 className="text-white mx-4">All-Plans</h1>
          <h1 className="text-white mx-4">Addons</h1>
          <h1 className="text-white mx-4">View-Recharge-Details</h1>
        </div>
        <div>
          {sessionStorage.getItem(isLoggedIn) != null ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
