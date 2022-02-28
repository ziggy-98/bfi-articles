import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { logoSrc } from "../logo";

export const Header = () => {
  return (
    <React.Fragment>
      <Toolbar sx={{ backgroundColor: "black", padding: "10px 0" }}>
        <img className="bfi-logo" src={logoSrc} alt="The BFI logo" />
      </Toolbar>
    </React.Fragment>
  );
};
