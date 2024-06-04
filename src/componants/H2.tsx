type contentProp = {
  content: string;
};
const H2 = (prop: contentProp) => {
  return (
    <h2 className="text-3xl leading-[.8]  tracking-tighter font-bold text-black">
      {prop.content}
    </h2>
  );
};

export default H2;
