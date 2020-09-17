import React, { Suspense } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import BasePage from './components/Layout/BasePage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

// So we can create subdomain routing ...
const domainName = window.location.hostname;

// The main domains ...
const mainDomains = ['biurad.com', 'biurad.github.io', 'localhost'];

/** The homepage routes for website */
const HomePageMenus = [
    { "name": "Home", "link": "#home" },
    { "name": "About", "link": "#about" },
    { "name": "Portfolio", "link": "#portfolio" },
    { "name": "Services", "link": "#services" },
    { "name": "News", "link": "#news" },
    { "name": "Contact us", "link": "#contact" },
]

const Routes = ({ location }) => {
    if (mainDomains.indexOf(domainName) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage menus={HomePageMenus}>
                <Suspense fallback={<HomePage />}>
                    <Switch location={location}>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </Suspense>
            </BasePage>
        )
    }

    return (<NotFound />)
}

export default withRouter(Routes);
