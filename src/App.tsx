import React from 'react';
import { IonApp, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const App = () => {
  return (
    <IonApp>
      <IonCard>
        <IonCardHeader>
          <h1>
            Ionic + React
          </h1>
        </IonCardHeader>
        <IonCardContent>
          This is my first Ionic React application!
        </IonCardContent>
        </IonCard>
    </IonApp>
  );
}

export default App;
