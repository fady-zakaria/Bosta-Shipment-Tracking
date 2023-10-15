import { Typography } from "@material-tailwind/react";
import React from "react";
import { translate } from "../../utils/Language";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center m-auto h-screen">
      <Typography className="font-display font-bold text-xl text-center text-bosta-red">
        {translate("comingSoon")}
      </Typography>
    </div>
  );
};

export default NotFound;
