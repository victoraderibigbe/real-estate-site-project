import { Navbar } from "flowbite-react";
import siteLogo from "../assets/img/dominion-homes-logo.png";
import MyButton from "./MyButton";
import { SlCallOut } from "react-icons/sl";

const Header = () => {
  return (
    <div className="px-0 md:px-32">
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img
            src={siteLogo}
            className="w-12 md:w-20"
            alt="Dominion Homes & Properties Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a href="tel:2349013284694">
            <MyButton title={"Call Us Now"} icon={<SlCallOut />} />
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="nav-link active" href="#">
            Home
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            About Us
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            Our Services
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            Properties
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            Contact Us
          </Navbar.Link>
          <Navbar.Link className="nav-link" href="#">
            FAQs
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
