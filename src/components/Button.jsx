const Button = ({ text, type = "primary", onClick }) => {
  return (
    <button className={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
