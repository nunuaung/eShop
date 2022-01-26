import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="section-wrapper">
          <div className="footer-top">
            <div className="container">
              <div className="footer-wrap">
                <div className="footer-col">
                  <h1 className="footer-title">Customer Service</h1>
                  <ul>
                    <li>
                      <a href="">Terms & Privacy Policy </a>
                    </li>
                    <li>
                      <a href="">Return Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h1 className="footer-title">Customer Service</h1>
                  <ul>
                    <li>
                      <a href="">Myanmar(Unicode)</a>
                    </li>
                    <li>
                      <a href="">English</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h1 className="footer-title">Customer Service</h1>
                  <ul>
                    <li>
                      <a href="">
                        No 17B, MyaKha St, Mayangone,
                        <br />6 Miles, Yangon, Myanmar
                      </a>
                    </li>
                    <li>
                      <a href="">+95&nbsp;9&nbsp;345&nbsp;454&nbsp;345</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              All rights reserved. Made with all the love in ShopDoora Co., Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
