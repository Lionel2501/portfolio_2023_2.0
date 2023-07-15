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

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index1 = () => {
  const [lenguage, setLanguage] = useContext(LanguageContext);
  
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    tony.scrollToActiveNav();
  }, []);

  useEffect(() => {
    console.log(lenguage)
  }, [lenguage]);
  
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              Tony
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
                  setLanguage(e.target.value);
                }}
                value={lenguage}
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
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#blog">
              <i className="fas fa-blog" />
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
            <i class="fa fa-cog" aria-hidden="true"></i>
              <span>Setting</span>
            </a>
          </li>
          {/* <li>
            {/* <a className="nav-link">
              <i className="fas fa-id-card-alt" />
              <span>Leng</span>
            </a> */}{/*
            <>
            <Form.Group controlId="formBasicSelect">
              {/* <Form.Label>Leng</Form.Label> */}
              {/*
              <Form.Control
                as="select"
                onChange={e => {
                  console.log("e.target.value", e.target.value);
                  // setType(e.target.value);
                }}
              >              
                <option value="spain">Es</option>
                <option value="inglish">En</option>
                <option value="french">Fr</option>
              </Form.Control>
            </Form.Group>
                </>
          </li> */}
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
