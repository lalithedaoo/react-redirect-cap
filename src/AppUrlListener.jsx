import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Plugins } from '@capacitor/core';
import { IonApp } from '@ionic/react';
// import { AppLauncher } from '@capacitor/app-launcher';
// const { App: CapApp } = Plugins;

const AppUrlListener = () => {
    let history = useHistory();
    useEffect(() => {
        // AppLauncher
        // IonApp.addListener
        IonApp.addListener('appUrlOpen', (data) => {
        // Example url: https://beerswift.app/tabs/tab2
        // slug = /tabs/tab2
        const slug = data.url.split('.app').pop();
        if (slug) {
          history.push(slug);
        }
        // If no match, do nothing - let regular routing
        // logic take over
      });
    }, []);
  
    return null;
  };
  
  export default AppUrlListener;