import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import BedIcon from "@mui/icons-material/Bed";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  return (
    <div className="m-5" role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link
          href=""
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Continent
        </Link>
        <Link
          href=""
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <FlagIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Country
        </Link>
        <Link
          href=""
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <BedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Resort
        </Link>
      </Breadcrumbs>
    </div>
  );
}
