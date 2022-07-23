import Image from "next/image";
import Link from "next/link";

const Icon = (props) => {
  return (
    <div style={{cursor:"pointer"}}>
      <Link
        href="https://www.facebook.com/Plus-Aspect-113498961376645"
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
