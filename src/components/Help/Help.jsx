import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { translate } from "../../utils/Language";
import "../../App.css";

const Help = () => {
  return (
    <div className="flex xl:flex-col 2xl:flex-row flex-row py-10 ps-6 pe-14 rounded-lg bostaShadowBox gap-12 overflow-hidden">
      <img
        className="h-24 w-24 object-cover object-center"
        src="assets/images/help2.jpg"
        alt="help"
      />
      <div className="flex flex-col gap-5">
        <Typography
          variant="h5"
          color="gray-300"
          className="font-display font-bold"
        >
          {translate("helpQuestion")}
        </Typography>
        <Button className="bg-bosta-red normal-case font-display text-base">
          {translate("helpAction")}
        </Button>
      </div>
    </div>
  );
};

export default Help;
