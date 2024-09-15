import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ count }) => {
  const [sideNav, setSideNav] = useState(false);
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  console.log("user ", user);
  const { logout } = useAuth0();

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white">
      <div className="flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b relative">
        <div>
          <Link to="/">
            <p className="cursor-pointer">
              Yumi<span className="text-[#fbc531]">Food</span>
            </p>
          </Link>
        </div>

        <div>
          <ul className="sm:flex gap-4 hidden cursor-pointer  ">
            <Link to="/">
              <li className="hover:text-[#fbc531]">Home</li>
            </Link>

            <Link to="/aboutus">
              <li className="hover:text-[#fbc531]">About us</li>
            </Link>

            <Link to={"/ourfood"}>
              <li className="hover:text-[#fbc531]">Our food</li>
            </Link>
            {/* 
          <Link to="/signin">
            <li className="hover:text-[#fbc531]">Sign in</li>
          </Link> */}
            {isAuthenticated ? (
              <>
                <div className="text-[#fbc531]">
                  Welcome <span className="text-[#fbc531]">{user.name}</span>
                </div>
                <button
                  className="hover:text-[#fbc531]"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </>
            ) : (
              <button
                className="hover:text-[#fbc531]"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </ul>
        </div>

        {sideNav ? (
          <div className="bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10">
            <RxCross2
              size={25}
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setSideNav(!sideNav)}
            />

            <ul className="flex gap-12  cursor-pointer flex-col ">
              <Link to="/">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Home
                </li>
              </Link>

              <Link to="/aboutus">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  About us
                </li>
              </Link>

              <Link to={"/ourfood"}>
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Our food
                </li>
              </Link>

              {/* <Link to="/signin">
            <li className="hover:text-[#fbc531]" onClick={() => setSideNav(!sideNav)}>Sign in</li>
          </Link> */}
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="flex gap-5">
          <div>
            <GiHamburgerMenu
              size={30}
              className="cursor-pointer block sm:hidden"
              onClick={() => setSideNav(!sideNav)}
            />
          </div>

          {count}
          <FaCartShopping size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
