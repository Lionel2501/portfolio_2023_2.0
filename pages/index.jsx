import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import { tony } from "@/src/layouts/utils";
import { Fragment, useEffect, useState, useContext } from "react";

import Services from "@/src/components/Services";
import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";
import { Form } from "react-bootstrap";

import {LanguageContext} from './_app'
// import LanguageContext from '../src/context/LanguageContext'
import useLanguages from "../src/hooks/useLanguages"

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index1 = () => {
  const [lenguage, setLanguage] = useContext(LanguageContext);

  const {getLang} = useLanguages();
  
  const [toggle, setToggle] = useState(false);
  const [lenguageValue, setlenguageValue] = useState('es');

  const handleLangueSelect = (v) => {
    let l = getLang(v)
    setLanguage(l)
    setlenguageValue(v)
  }
  
  useEffect(() => {
    tony.scrollToActiveNav();
  }, []);

  
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              {lenguage?.sidebar.name}
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          {/* <a className="logo-text" href="index.html">
            Tony
          </a> */}
          <>
            <Form.Group controlId="formBasicSelect">
              {/* <Form.Label>Leng</Form.Label> */}
              
              <Form.Control
                as="select"
                onChange={e => {
                  handleLangueSelect(e.target.value);
                }}
                value={lenguageValue}
              >              
                <option value="es">Es</option>
                <option value="en">En</option>
                <option value="fr">Fr</option>
              </Form.Control>
            </Form.Group>
          </>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>{lenguage?.sidebar.home}</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>{lenguage?.sidebar.about_me}</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              <i className="fas fa-concierge-bell" />
              <span>{lenguage?.sidebar.services}</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              <i className="fas fa-briefcase" />
              <span>{lenguage?.sidebar.portfolio}</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#blog">
              <i className="fas fa-blog" />
              <span>{lenguage?.sidebar.blog}</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>{lenguage?.sidebar.contact}</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
            <i className="fa fa-cog" aria-hidden="true"></i>
              <span>{lenguage?.sidebar.setting}</span>
            </a>
          </li>
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}
        >
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello there...</h6>
                  <h1>Tony Smith</h1>
                  <h2>
                    I Am Passionate <TypingAnimation />
                  </h2>
                  <p>
                    The namics of how users interact with interactive elements
                    within a user interface flow chart based on container
                    proportion.
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#work">
                      my work
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}

        {/* End Home Banner */}
        {/* about us */}
        <About />
        {/* end about us */}
        {/* fun */}
        <Skills />
        {/* End fun */}
        {/* resume */}
        <Services />
        {/* End resume */}
        {/* Work */}
        <Work />
        {/* End work */}
        {/* Testiminails */}
        <Testiminails />
        {/* End Testiminails */}
        {/* Blog */}
        <Blog />
        {/* End Blog */}
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
