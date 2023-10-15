import { IconButton, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { translate } from "../../utils/Language";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getTrackingData } from "../../redux/features/shipmentsTrackSlice/shipmentsTrackSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");

  return (
    <div className="flex flex-col gap-5 ">
      <Typography color="gray-300" className="font-display text-sm">
        {translate("trackShipment")}
      </Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="number"
          placeholder={translate("trackingNumber")}
          className="border-gray-300 placeholder:text-gray-500 focus:!border-gray-300"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <IconButton
          color="red"
          className="!absolute end-0"
          onClick={() => {
            if (number) {
              dispatch(getTrackingData(number));
            }
          }}
        >
          <FiSearch />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBox;
