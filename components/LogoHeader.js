import Image from "next/image";
import Link from "next/link";

import classes from "./Logo.module.css";

import logo from "../assets/logo.png";

const LogoHeader = () => {
  return (
    <span className={classes.parent}>
      <Link href="/">
        <Image
          src={logo}
          alt={"logo"}
        />
      </Link>
    </span>
  );
};

export default LogoHeader;
