import Head from "next/head";
import Link from "next/link";

import LogoHeader from "../../components/LogoHeader";
import classes from "./learn.module.css";

export default function Learn() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Plus Aspect | Learn</title>
        <meta
          name="description"
          content="Plus Aspect Official Website, Learn Page"
        />
      </Head>
      <main className={classes.main}>
        <LogoHeader />
        <h1>
          THIS <span className={classes.purple}>PAGE</span> IS UNDER{" "}
          <span className={classes.purple}>MAINTENANCE</span>
        </h1>
        <Link href="/">
          <a className={classes.button}>PRESS HERE TO GET BACK TO HOME PAGE</a>
        </Link>
        {/* <header className={classes.head}>
          <h1>
            Welcome to <span className={classes.purple}><span className={classes.plus}>+</span>Learn</span>
          </h1>
        </header>
        <div className={classes.description}>
          <h1>
            Here you will learn for <span className={classes.purple}>free</span>{" "}
            every <span className={classes.purple}>trick</span> that an{" "}
            <span className={classes.purple}>smart entrepreneur </span>
            has to know
          </h1>
          <p>Only Quick 30 Seconds videos</p>
        </div> */}
      </main>
    </div>
  );
}
