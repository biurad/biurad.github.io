import React from "react";
import NavSection from "./components/NavSection";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import FooterSection from "./components/FooterSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import NewsSection from "./components/NewsSection";
import $ from 'jquery';
import './scripts/bootstrap';
import './theme/index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {"name": "Home", "link": "#home"},
        {"name": "About", "link": "#about"},
        {"name": "Portfolio", "link": "#portfolio"},
        {"name": "Services", "link": "#services"},
        {"name": "News", "link": "#news"},
        {"name": "Contact us", "link": "#contact"},
      ]
    };
  }

  componentDidMount() {
    // smooth scroll
    $("a").on("click", function (event) {

      if (this.hash !== "") {
        event.preventDefault();

        let hash = this.hash;

        $("html, body").animate({

          scrollTop: $(hash).offset().top - 50

        }, 850);

      }

    });
  }

  render() {
    return (
      <>
        <NavSection data={this.state.menus} />
        <HomeSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <ServicesSection />
        <NewsSection />
        <ContactSection />
        <FooterSection />
      </>
    );
  }
}
