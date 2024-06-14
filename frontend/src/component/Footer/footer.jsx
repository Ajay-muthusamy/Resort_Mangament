import React from "react";
import { FaPhone } from "react-icons/fa6";
import '../Footer/footer.css'
const Footer = () => {
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center pb-4 bg-light p-3" id="flexContainer">
        <div className="left-container d-flex flex-wrap gap-4 justify-content-start align-items-center me-5">
          <div className="child">
            <p>How can we help?</p>
            <button type="button" id="btn">
              <FaPhone /> Request a call
            </button>
            <p className="mt-3">©2024 paradise</p>
          </div>
          <div className="child2">
            <h6 className="text-primary">Customer Support</h6>
            <p>Online reservation assistance.</p>
          </div>
        </div>

        <div className="right-container">
          <div className="txt">
            <ul className="container list-unstyled d-flex flex-wrap align-item-center  gap-3 mt-2 ">
                <div className="box1">
              <li>Hilton Honors Discount</li>
              <li>Terms & Conditions</li>
              <li>Global</li>
              <li>Privacy Statement</li>
              </div>
              <div className="box">              
              <li>Accessibility</li>
              <li>Site Usage Agreement</li>
              <li>Trafficking</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
