import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

export function HoverServiceDropdown() {
  return (
    <>
      <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
      <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
      <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
    </>
  );
}

export function HoverProfileDropdown() {
  const [showAccSet, setShowAccSetDropdown] = useState(false);

  const handleAccSetMouseEnter = () => {
    setShowAccSetDropdown(true);
  };

  const handleAccSetMouseLeave = () => {
    setShowAccSetDropdown(false);
  };

  return (
    <>
      <NavDropdown.Item href="#service1">MyLearning</NavDropdown.Item>
      <NavDropdown.Item href="#service2">Notification</NavDropdown.Item>
      <NavDropdown
        title="Account Settings"
        id="account-nav-dropdown"
        show={showAccSet}
        onMouseEnter={handleAccSetMouseEnter}
        onMouseLeave={handleAccSetMouseLeave}
      >
        <NavDropdown.Item href="#service3">Edit Profile</NavDropdown.Item>
        <NavDropdown.Item href="#service3">Account Security</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Item href="#service4">Payment</NavDropdown.Item>
      <NavDropdown.Item href="#service4">Refferal</NavDropdown.Item>
      <NavDropdown.Item href="#service4">Log out</NavDropdown.Item>
    </>
  );
}
