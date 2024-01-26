import { Navbar } from "flowbite-react";
import siteLogo from "../assets/img/dominion-homes-logo.png";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // State to track the previous scroll position
  const [visible, setVisible] = useState(true); // State to track the visibility of the navbar

  // Effect hook to handle scroll events
  useEffect(() => {
    // Event handler for the scroll event
    const handleScroll = () => {
      // Get the current scroll position in the vertical axis
      const currentScrollPos = window.scrollY;

      // Determine whether to make the navbar visible or not
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      // Update the previous scroll position with the current one
      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={visible ? "navbar-visible" : "navbar-hidden"}>
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
          <a href="https://wa.me/+2349013284694?text=Hi! I'm interested in purchasing a landed property, my name is ...">
            <MyButton title={"Chat Us"} icon={<FaWhatsapp />} />
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
