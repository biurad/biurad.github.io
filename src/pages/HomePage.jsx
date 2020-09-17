import React, { Component } from 'react';
import $ from 'jquery';
import HomeSection from "../components/Common/HomeSection";
import AboutSection from "../components/Common/AboutSection";
import ProcessSection from "../components/Common/ProcessSection";
import PortfolioSection from "../components/Common/PortfolioSection";
import ServicesSection from "../components/Common/ServicesSection";
import ContactSection from "../components/Common/ContactSection";
import NewsSection from "../components/Common/NewsSection";

export default class HomePage extends Component {
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
                <HomeSection />
                <AboutSection />
                <ProcessSection />
                <PortfolioSection />
                <ServicesSection />
                <NewsSection />
                <ContactSection />
            </>
        )
    }
}
