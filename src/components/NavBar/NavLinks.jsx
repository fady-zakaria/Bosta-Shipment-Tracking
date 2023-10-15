import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import SearchBox from "../SearchBox/SearchBox";

const NavLinks = ({ links, style }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <ul
      className={`mb-2 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ${
        style && "navbarStyle"
      }`}
    >
      {links.map((link, index) => (
        <React.Fragment key={link?.id}>
          {Boolean(link?.searchBar) ? (
            <Popover open={openPopover} handler={setOpenPopover}>
              <PopoverHandler {...triggers}>
                <Typography
                  as="li"
                  variant="small"
                  className=" text-bosta-gray hover:text-bosta-red hover:underline p-1 font-display"
                  key={index}
                >
                  {link?.name}
                </Typography>
              </PopoverHandler>
              <PopoverContent
                {...triggers}
                className="z-50 max-w-[24rem] bostaShadowBox"
              >
                <SearchBox />
              </PopoverContent>
            </Popover>
          ) : (
            <Typography
              as="li"
              variant="small"
              className=" text-bosta-gray hover:text-bosta-red hover:underline p-1 font-display"
            >
              <Link className="flex items-center" to={link?.link}>
                {link?.name}
              </Link>
            </Typography>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default NavLinks;
