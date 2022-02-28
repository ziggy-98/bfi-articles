import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";

interface Props {
  isLoading: boolean;
}

const Overlay = ({ isLoading }: Props) => {
  return (
    <Backdrop
      open={isLoading}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Overlay;
