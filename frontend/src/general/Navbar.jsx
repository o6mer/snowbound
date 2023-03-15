import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import { NavLink, useNavigate } from "react-router-dom";
import LoginPage from "../userAuth/LoginPage";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { UserContext } from "../contexts/UserContextProvider";
import { useAuth } from "../hooks/useAuth";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { user, openLogin, setOpenLogin } = useContext(UserContext);

  const { logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenLogin(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenLogin(false);
    document.body.style.overflow = "auto";
  };
  const openProfile = () => {
    navigate(`/profile/${user.username}/card`);
  };
  const openReviews = () => {
    navigate(`/profile/${user.username}/reviews`);
  };
  const openFavorites = () => {
    navigate(`/profile/${user.username}/favorites`);
  };

  return (
    <>
      <nav className="bg-clip-content bg-gradient-to-r h-16 to-white from-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center text-xl">
              <div className="flex-shrink-0">
                <NavLink
                  to="/"
                  className="flex items-center text-blue-600 font-large"
                >
                  <SnowboardingIcon color="primary" sx={{ fontSize: 50 }} />
                  <span className="ml-2">SnowBound</span>
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/search/Europe/France/none"
                    className="transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400 
                   focus:outline-none focus:ring focus:ring-white-300  px-3 py-2 rounded-md font-medium"
                  >
                    France
                  </a>
                  <a
                    href="/search/Europe/Switzerland/none"
                    className="transition-all hover:bg-sky-400  
                    hover:text-white
                    focus:bg-sky-400  focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    Switzerland
                  </a>

                  <a
                    href="/search/Europe/Italy/none"
                    className="transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md font-medium"
                  >
                    Italy
                  </a>
                  <a
                    href="/search/Europe/Bulgaria/none"
                    className="transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    Bulgaria
                  </a>
                  <a
                    href="/search/Europe/Austria/none"
                    className="transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    Austria
                  </a>
                  <a
                    href="/search/North America/Canada/none"
                    className="transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    Canada
                  </a>

                  {user?.admin && (
                    <NavLink
                      to="/admin"
                      className="transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                    >
                      Admin
                    </NavLink>
                  )}
                  {!user ? (
                    <div>
                      <NavLink
                        className="absolute top-4 right-2 transition-all  hover:bg-sky-500 
                    hover:text-white
                    focus:bg-sky-700 focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md text-sm font-medium"
                        onClick={handleOpenModal}
                      >
                        LogIn
                      </NavLink>
                      <LoginPage
                        open={openLogin}
                        onClose={handleCloseModal}
                      ></LoginPage>
                    </div>
                  ) : (
                    <div className="absolute top-3 left-[93vw]">
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                        </IconButton>
                      </Tooltip>
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem onClick={openProfile}>
                          <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={openReviews}>
                          <ReviewsIcon
                            fontSize="medium"
                            style={{ marginRight: "12px", color: "gray" }}
                          />{" "}
                          My reviews
                        </MenuItem>
                        <MenuItem onClick={openFavorites}>
                          <FavoriteBorder
                            fontSize="medium"
                            style={{ marginRight: "12px", color: "gray" }}
                          />
                          Favorites
                        </MenuItem>
                        <Divider />

                        <MenuItem
                          onClick={() => {
                            logout();
                            handleClose();
                          }}
                        >
                          <ListItemIcon>
                            <Logout fontSize="small" color="error" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {console.log(isOpen)}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-sky-200 text white inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-black hover:bg-sky-500 focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    type="button"
                    data-drawer-target="drawer-navigation"
                    data-drawer-show="drawer-navigation"
                    aria-controls="drawer-navigation"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                {isOpen && (
                  <nav
                    id="sidenav-7"
                    class="fixed top-0 right-0 z-[1035] h-screen w-60 translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 dark:bg-zinc-800"
                    data-te-sidenav-init
                    data-te-sidenav-hidden="false"
                    data-te-sidenav-right="true"
                  >
                    <ul
                      class="relative m-0 list-none px-[0.2rem]"
                      data-te-sidenav-menu-ref
                    >
                      <li class="relative">
                        <a
                          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                          data-te-sidenav-link-ref
                        >
                          <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-4 w-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                              />
                            </svg>
                          </span>
                          <span>Link 1</span>
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                          data-te-sidenav-link-ref
                        >
                          <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="h-4 w-4"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>Category 1</span>
                          <span
                            class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                            data-te-sidenav-rotate-icon-ref
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </a>
                        <ul
                          class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                          data-te-sidenav-collapse-ref
                        >
                          <li class="relative">
                            <a
                              class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                              data-te-sidenav-link-ref
                            >
                              Link 2
                            </a>
                          </li>
                          <li class="relative">
                            <a
                              class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                              data-te-sidenav-link-ref
                            >
                              Link 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="relative">
                        <a
                          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                          data-te-sidenav-link-ref
                        >
                          <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="h-4 w-4"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>Category 2</span>
                          <span
                            class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                            data-te-sidenav-rotate-icon-ref
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </a>
                        <ul
                          class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                          data-te-sidenav-collapse-ref
                        >
                          <li class="relative">
                            <a
                              class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                              data-te-sidenav-link-ref
                            >
                              Link 4
                            </a>
                          </li>
                          <li class="relative">
                            <a
                              class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                              data-te-sidenav-link-ref
                            >
                              Link 5
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
