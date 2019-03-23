import React from 'react';
import { IonApp, IonSplitPane, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import SideMenu from './components/SideMenu';

const App = () => (
  <Router>
    <div id="app">
      <IonApp>
        <IonSplitPane contentId="main">
          <SideMenu></SideMenu>
          <IonPage id="main">
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </div>
  </Router>
);


export default App;
