import React from "react"
import "./Footer.css"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import EmailIcon from "@material-ui/icons/Email"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube, faAlipay, faWeixin } from "@fortawesome/free-brands-svg-icons"
import { faFan, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Like what you see here?</p>
        <p className="footer-subscription-text">Contact me via</p>
        <div className="contact-list">
          <div className="iconPadding">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>guofx@dukes.jmu.edu</span>
          </div>
          <div className="iconPadding">
            <FontAwesomeIcon icon={faWeixin} />
            <span>gf771026471</span>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Blibiber
              <FontAwesomeIcon icon={faFan} className="faFan" />
            </Link>
          </div>
          <small className="website-rights">Blibiber © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              className="social-icon-link alipay"
              to="Alipay"
              target="_blank"
              aria-label="Alipay"
            >
              <FontAwesomeIcon icon={faAlipay} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
