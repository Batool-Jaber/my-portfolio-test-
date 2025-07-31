const Footer = (props) => {
  return (
    <>
      <footer className={`bg-${props.color} text-center text-white p-2`}>
        <p className="text-lg my-2">{props.text}</p>
      </footer>
    </>
  );
};

export default Footer;


