import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import AddUserModal from "./AddUserModal";
import RekognitionButton from "./RekognitionButton";

const Header = (props) => (
  <Navbar inverse collapseOnSelect style={{ backgroundColor: "#000" }}>
    <Navbar.Header>
      <Navbar.Brand>Digitalyz Rekognition Engagement Meter</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem
          eventKey={1}
          href="https://github.com/aws-samples/amazon-rekognition-engagement-meter"
          target="_blank"
        >
          Fork me in github
        </NavItem>
      </Nav>
      <Nav pullRight style={{ paddingTop: "8px" }}>
        <RekognitionButton
          onClick={props.toggleRekognition}
          enabled={props.readyToStream}
        />
        <AddUserModal onSave={props.addUser} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
