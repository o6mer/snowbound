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

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user } = useContext(UserContext);

  const { logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const openProfile = () => {
    console.log(user.username);
    navigate(`/profile/${user.username}`);
  }
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
                    className=" hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400 
                   focus:outline-none focus:ring focus:ring-white-300  px-3 py-2 rounded-md font-medium"
                  >
                    France
                  </a>
                  <a
                    href="/search/Europe/Switzerland/none"
                    className=" hover:bg-sky-400  
                    hover:text-white
                    focus:bg-sky-400  focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    Switzerland
                  </a>

                  <a
                    href="/search/Europe/Italy/none"
                    className=" hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md font-medium"
                  >
                    Italy
                  </a>
                  <a
                    href="/search/North America/Canada/none"
                    className=" hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    Canada
                  </a>

                  {user?.admin && (
                    <NavLink
                      to="/admin"
                      className=" hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                    >
                      admin
                    </NavLink>
                  )}
                  {!user ? (
                    <div>
                      <NavLink
                        className="absolute top-4 right-2  hover:bg-sky-500 
                    hover:text-white
                    focus:bg-sky-700 focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md text-sm font-medium"
                        onClick={handleOpenModal}
                      >
                        LogIn
                      </NavLink>
                      <LoginPage
                        open={modalOpen}
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
                        <MenuItem onClick={handleClose}>
                          <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <PersonAdd fontSize="small" />
                          </ListItemIcon>
                          Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Settings
                        </MenuItem>
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
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring focus:ring-white-300 text-white  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Country 1
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-white-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Country 1
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700  focus:outline-none focus:ring focus:ring-white-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Country 1
                </NavLink>

                {user?.admin && (
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700  focus:outline-none focus:ring focus:ring-white-300 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    admin
                  </NavLink>
                )}

                <NavLink
                  className="absolute top-4 right-2  hover:bg-sky-500 
                    hover:text-white
                    focus:bg-sky-700 focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={handleOpenModal}
                >
                  LogIn
                </NavLink>
                <LoginPage
                  open={modalOpen}
                  onClose={handleCloseModal}
                ></LoginPage>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Navbar;
