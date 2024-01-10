import { Link } from "react-router-dom";

interface btntype {
  btntext: String;
  btnlink: any;
}

const Button = ({ btntext, btnlink }: btntype) => {
  return (
    <button className="rounded-2xl bg-primary py-2 px-5">
      <Link to={btnlink}>{btntext}</Link>
    </button>
  );
};

export default Button;
