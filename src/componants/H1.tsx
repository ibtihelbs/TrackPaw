type contentProp = {
  content: string;
};

const H1 = (prop: contentProp) => {
  return (
    <h1 className="text-8xl leading-[.8]  tracking-tighter font-bold text-black">
      {prop.content}
    </h1>
  );
};

export default H1;
