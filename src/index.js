import React from 'react';
import ReactDOM from 'react-dom';

// Ionic 4 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import './index.css';
import Launcher from './Launcher';
import reportWebVitals from './reportWebVitals';
import { IonApp, IonRouterOutlet } from '@ionic/react';

ReactDOM.render(
  <React.StrictMode>

    {/* <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp> */}
    <Launcher />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
