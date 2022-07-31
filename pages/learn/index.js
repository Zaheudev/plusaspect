import Head from "next/head";
import classes from "./learn.module.css";

export default function Learn() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Plus Aspect | Learn</title>
        <meta
          name="description"
          content="Plus Aspect official website, learn feature"
        />
      </Head>
      <main className={classes.main}>
        <div className={classes.head}>
          <h1>
            Welcome to <span className={classes.purple}><span className={classes.plus}>+</span>Learn</span>
          </h1>
        </div>
        <div className={classes.description}>
          <h1>
            Here you will learn for <span className={classes.purple}>free</span>{" "}
            every <span className={classes.purple}>trick</span> that an{" "}
            <span className={classes.purple}>smart entrepreneur </span>
            has to know
          </h1>
          <p>Only Quick 30 Seconds videos</p>
        </div>
      </main>
    </div>
  );
}
