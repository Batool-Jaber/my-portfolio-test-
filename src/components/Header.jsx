const Header = (props) => {
  return (
    <>
    <header className={`bg-${props.color} text-center text-white p-4`}>
      <h1 className="text-4xl font-bold my-5 ">{props.name}</h1>
      <p className="text-lg my-2">{props.title}</p>
    </header>
    </>
  );
};

export default Header;

