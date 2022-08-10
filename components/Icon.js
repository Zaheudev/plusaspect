import Image from "next/image";
import Link from "next/link";

const Icon = (props) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <Link
        href={props.link}
        target="_blank"
      >
        <Image
          // loader={myLoader}
          src={props.image}
          alt={props.alt}
        />
      </Link>
    </div>
  );
};

export default Icon;
