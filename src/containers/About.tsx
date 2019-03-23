import React from 'react';
import { IonCard, IonCardHeader, IonCardContent } from "@ionic/react";

const About = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <h1>About</h1>
            </IonCardHeader>
            <IonCardContent>
                This is the about page.
          </IonCardContent>
        </IonCard>
    );
}

export default About;