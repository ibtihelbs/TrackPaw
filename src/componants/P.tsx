type paragraphProp = {
  content: React.ReactNode;
};

function P(prop: paragraphProp) {
  return <p className="text-2xl m-4 leading-8">{prop.content}</p>;
}

export default P;
