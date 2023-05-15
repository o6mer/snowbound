import React, { useContext, useState } from "react";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import LoginPage from "../../components/userAuth/LoginPage";
import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Menu from "@mui/material/Menu";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { UserContext } from "../../contexts/UserContextProvider";
import { useAuth } from "../../hooks/useAuth";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Flag from "@mui/icons-material/Flag";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import Close from "@mui/icons-material/Close";
import { TableRow } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CountryNav from "./CountryNav";

const COUNTRIES = [
  "France",
  "Switzerland",
  "Italy",
  "Bulgaria",
  "Austria",
  "Canada",
];

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { user, openLogin, setOpenLogin, isSnowing, setIsSnowing } =
    useContext(UserContext);
  const { logout } = useAuth();

  const { country } = useParams();

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
      <LoginPage open={openLogin} onClose={handleCloseModal}></LoginPage>
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
              <div className="hidden xl:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/about"
                    className="transition-all hover:bg-sky-400
                   hover:text-white text-blue-600
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                  >
                    About us
                  </NavLink>

                  {user?.admin && (
                    <NavLink
                      to="/admin"
                      className="transition-all hover:bg-sky-400
                    hover:text-white
                    focus:bg-sky-400 text-blue-600  focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                    >
                      Admin
                    </NavLink>
                  )}
                  {COUNTRIES.map((countryName) => (
                    <CountryNav
                      selectedCountry={country}
                      name={countryName}
                      continent={
                        (countryName === "Canada" && "North America") ||
                        undefined
                      }
                    />
                  ))}
                  {!user ? (
                    <div className="flex items-center absolute right-0">
                      <div className="flex items-center justify-center mr-2">
                        <Switch
                          checked={isSnowing}
                          onChange={(e) => setIsSnowing(e.target.checked)}
                        />
                        <AcUnitIcon />
                      </div>

                      <NavLink
                        className=" transition-all hover:bg-sky-400 
                    hover:text-white
                    focus:bg-sky-400   focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md  font-medium"
                        onClick={handleOpenModal}
                      >
                        LogIn
                      </NavLink>
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
                            navigate("/");
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
            <div className="-mr-2 flex xl:hidden">
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
                  <section class="relative flex h-96 min-h-full items-start justify-center overflow-y-hidden border bg-gray-50 ">
                    <nav
                      id="sidenav-8"
                      class="fixed top-0 right-0 z-[1035] h-screen w-60 translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 "
                      data-te-sidenav-init
                      data-te-sidenav-hidden="false"
                      data-te-sidenav-position="absolute"
                      data-te-sidenav-accordion="true"
                    >
                      <div className="flex justify-between items-center px-4">
                        <a
                          class="mb-3 flex items-center justify-center border-b-2 border-solid border-gray-100 py-6 outline-none"
                          data-te-ripple-init
                          data-te-ripple-color="primary"
                        >
                          <ArrowForwardIosIcon />
                        </a>
                        <div className="flex items-center justify-center ">
                          <Switch
                            checked={isSnowing}
                            onChange={(e) => setIsSnowing(e.target.checked)}
                          />
                          <AcUnitIcon />
                        </div>
                      </div>
                      <ul
                        class="relative m-0 list-none px-[0.2rem] pb-12"
                        data-te-sidenav-menu-ref
                      >
                        <li class="relative pt-4">
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none  "
                            data-te-sidenav-link-ref
                            href="/about"
                          >
                            <GroupsIcon />
                            <span>About us</span>
                          </a>
                        </li>
                        {user && (
                          <>
                            <li class="relative pt-4">
                              <button
                                onClick={openProfile}
                                class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none  "
                              >
                                <div class="flex justify-center items-center  space-x-2">
                                  <div>
                                    <Avatar
                                      sx={{ width: 32, height: 32 }}
                                    ></Avatar>
                                  </div>
                                  <div class="flex justify-start flex-col items-start">
                                    <p class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none">
                                      Hello {user?.username}
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </li>
                          </>
                        )}
                        <li class="relative pt-4">
                          <span class="py-4 px-6 text-[1rem] font-bold uppercase text-gray-600 ">
                            Countries
                          </span>
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none :text-gray-300 "
                            data-te-sidenav-link-ref
                            href="/search/Europe/France/none"
                          >
                            <Flag />
                            <span>France</span>
                          </a>
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none    "
                            data-te-sidenav-link-ref
                            href="/search/Europe/Switzerland/none"
                          >
                            <Flag />
                            <span>Switzerland</span>
                          </a>
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none   "
                            data-te-sidenav-link-ref
                            href="/search/Europe/Italy/none"
                          >
                            <Flag />
                            <span>Italy</span>
                          </a>
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
                            data-te-sidenav-link-ref
                            href="/search/Europe/Bulgaria/none"
                          >
                            <Flag />
                            <span>Bulgaria</span>
                          </a>
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
                            data-te-sidenav-link-ref
                            href="/search/Europe/Austria/none"
                          >
                            <Flag />
                            <span>Austria</span>
                          </a>
                          <a
                            class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
                            data-te-sidenav-link-ref
                            href="/search/Europe/Canada/none"
                          >
                            <Flag />
                            <span>Canada</span>
                          </a>
                        </li>

                        {user?.admin && (
                          <li class="relative pt-4">
                            <span class="py-4 px-6 text-[1rem] font-bold uppercase text-gray-600 ">
                              Manage
                            </span>
                            <a
                              class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none  "
                              data-te-sidenav-link-ref
                              href="/search/Europe/France/none"
                            >
                              <AdminPanelSettings />
                              <span>Admin</span>
                            </a>
                          </li>
                        )}
                        {!user ? (
                          <li class="relative pt-4">
                            <button
                              class="py-4 px-6 text-[1rem] font-bold uppercase text-gray-600 "
                              data-te-sidenav-link-ref
                              onClick={() => setOpenLogin(true)}
                            >
                              <span class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none  ">
                                <LoginIcon /> Log in
                              </span>
                            </button>
                          </li>
                        ) : (
                          <li class="relative pt-4">
                            <div class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none ">
                              <div class="flex justify-center items-center  space-x-2">
                                <div>
                                  <Logout fontSize="small" color="error" />
                                </div>
                                <div class="flex justify-start flex-col items-start">
                                  <button
                                    onClick={() => {
                                      logout();
                                      handleClose();
                                      navigate("/");
                                    }}
                                    class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                  >
                                    Log out
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </section>
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
