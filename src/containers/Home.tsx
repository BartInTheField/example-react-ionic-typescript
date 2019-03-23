import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonToast, IonButton } from "@ionic/react";

const Home = () => {
    const [toastIsShown, setToastIsShown] = useState(false);

    const showToast = () => {
        setToastIsShown(true);
    }

    return (
        <IonCard>
            <IonCardHeader>
                <h1>Ionic + React</h1>
            </IonCardHeader>
            <IonCardContent>
                This is my first Ionic React application!
                <div>
                    <IonButton onClick={() => showToast()}>
                        Show toast
                    </IonButton>
                    <IonToast
                        isOpen={toastIsShown}
                        onDidDismiss={() => setToastIsShown(false)}
                        message="Let's show a toast!"
                        // duration={3000}
                    />
                </div>
            </IonCardContent>
        </IonCard>
    );
}

export default Home;