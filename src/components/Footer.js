import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/uditanshu-khatri-8ab185162/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/SnowQannik"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:udkhatri23@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Click "@" for email!</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
