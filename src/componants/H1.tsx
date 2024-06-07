type contentProp = {
  content: string;
  center: boolean;
};

const H1 = (prop: contentProp) => {
  return (
    <h1
      className={` ${
        prop.center ? "text-center" : ""
      } text-8xl  leading-[.8]  tracking-tighter font-bold text-black`}
    >
      {prop.content}
    </h1>
  );
};

export default H1;
