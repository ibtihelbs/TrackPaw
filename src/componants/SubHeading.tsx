type subHeadProp = {
  content: string;
};
const SubHeading = (prop: subHeadProp) => {
  return <h3 className="">{prop.content}</h3>;
};

export default SubHeading;
