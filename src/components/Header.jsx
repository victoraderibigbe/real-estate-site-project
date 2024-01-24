import { Navbar } from "flowbite-react";
import siteLogo from "../assets/img/dominion-homes-logo.png";
import MyButton from "./MyButton";
import { SlCallOut } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-0 md:px-32">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={siteLogo}
              className="w-12 md:w-20"
              alt="Dominion Homes & Properties Logo"
            />
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a href="tel:2349013284694">
            <MyButton title={"Call Us Now"} icon={<SlCallOut />} />
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="nav-link active">
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link className="nav-link">
            <Link to="/about">About Us</Link>
          </Navbar.Link>
          <Navbar.Link className="nav-link">
            <Link to="/services">Our Services</Link>
          </Navbar.Link>
          <Navbar.Link className="nav-link">
            <Link to="/properties">Properties</Link>
          </Navbar.Link>
          <Navbar.Link className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </Navbar.Link>
          <Navbar.Link className="nav-link">
            <Link to="/faqs">FAQs</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
