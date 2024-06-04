type helloTypes = {
  name: string;
  users: {
    name: string;
    email: string;
  }[];
};

const HelloBitch = (props: helloTypes) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          justifyContent: "flex-start",
        }}
      >
        {props.users.map((v) => (
          <div>
            <h1> {v.name} </h1>
            <p> {v.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelloBitch;
