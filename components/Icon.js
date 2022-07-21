import Image from "next/image";

const Icon = (props) => {
  return (
    <Image
      // loader={myLoader}
      src={props.image}
      alt={props.alt}
    />
  );
}

export default Icon;
