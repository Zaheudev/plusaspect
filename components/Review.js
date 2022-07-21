import classes from "./Review.module.css";

import Image from "next/image";

const Review = (props) => {
  return (
    <div>
      <div className={classes.title}>
        <div className={classes.container}>
          <Image
            src={props.avatar}
            alt={"profile avatar"}
            // layout={"fixed"}
            className={classes.avatar}
            width="55"
            height="55"
          />
        </div>
        <h1 className={classes.name}>{props.name}</h1>
        <span className={classes.stars}>
          <Image src={props.stars} alt={"stars"} className={classes.stars} />{" "}
        </span>
        <span className={classes.score}>(4.3/5)</span>
      </div>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Review;
