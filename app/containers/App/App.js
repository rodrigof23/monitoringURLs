import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import LinksPage from 'containers/LinksPage/Loadable';
import ScreenshotsPage from 'containers/ScreenshotsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="Monitoramento de URLs"
      defaultTitle="Monitoramento de URLs"
    >
      <meta name="description" content="Aplicação para monitoramento de URLs" />
    </Helmet>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/links" />
      <Route path="/links" component={LinksPage} />
      <Route path="/screenshots" component={ScreenshotsPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
