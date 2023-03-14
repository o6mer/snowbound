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

export default function IconBreadcrumbs({resort,country,continent}) {
  return (
    <div className="m-5" role="presentation">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {continent!=="none" && (
          <Link
            href=""
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {continent}
          </Link>
        )}
        {country!=="none" && (
          <a
            className=" hover:underline"
            href={`/search/${continent}/${country}/none`}
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              underline: "hover",
            }}
            color="inherit"
          >
            <FlagIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {country}
          </a>
        )}
        {resort !== "none" && resort && (
          <Link
            href=""
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            <BedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {resort}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
}
