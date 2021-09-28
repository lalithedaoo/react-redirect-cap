import React, { useEffect } from 'react';
import {  Capacitor } from '@capacitor/core';
import {
    IonApp,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
  } from '@ionic/react';
import { useHistory } from 'react-router';
import { AppLauncher } from '@capacitor/app-launcher';
import userEvent from '@testing-library/user-event';
import FcmService from './services/fcm.services';

const Launcher = () => {
  const history = useHistory();

  useEffect(()=>{
    window.addEventListener('beforeunload', function(event) {
      // clearTimeout(timeout);
      console.log('I am the 1st one.');   
  });
  },[]);
    // useEffect(() => {

    //     if (!Capacitor.isNativePlatform()) {
    //         console.log("isNativePlatform:  FALSE")

    //         if (Capacitor.getPlatform() === 'web') handleButton();

    //         // if (Capacitor.getPlatform() === 'ios') handleIOS();
    //     } else {
    //         console.log("isNativePlatform:  TRUE")
    //     }

    // }, []);

    const handleButton = async () => {
        // ToDo: Needs to revisit for android
        // await AppLauncher.openUrl({ url: 'com.metlife.upwise://' });
        console.log("handleAndroid")

        var now = new Date().valueOf();
        setTimeout(function () {
            console.log("Inside Timeout")
            // if (new Date().valueOf() - now > 100) return;
            console.log("Before click", document.getElementById("hiddenButton"))
            document.getElementById("hiddenButton").click();

            console.log("After click")
        }, 2000);
    };

    const handleAndroid = async () => {
        // ToDo: Needs to revisit for android
        // await AppLauncher.openUrl({ url: 'com.metlife.upwise://' });
        console.log("handleAndroid")

        var now = new Date().valueOf();
        // setTimeout(function () {
            console.log("Inside Timeout")
            // if (new Date().valueOf() - now > 100) return;
            console.log("Before click", document.getElementById("hiddenLink"))
            document.getElementById("hiddenLink").click();
            console.log("After click")
        // }, 25);
    };


    const handleIOS = () => {
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = "https://preprod.app.upwise.com/";
            
        }, 25);
        window.location.href = "com.metlife.upwise://entry";

    };

    // const handleAppStore = async () => {
    //   var now = new Date().valueOf();
    //     setTimeout(function () {
    //         if (new Date().valueOf() - now > 100) return;
    //         // window.location = "https://preprod.app.upwise.com/";
    //         // window.location = 'https://apps.apple.com/us/app/itunes-connect/id376771144';
    //         history.push('/')
    //     }, 25);
    //     window.location.href = "com.metlife.upwise://entry";
    // }

    const launchApp = () => {
      const { value }  = IonApp.canOpenUrl("com.metlife.upwise://entry"); //AppLauncher.canOpenUrl("com.metlife.upwise");
      if (value) {
        // IonApp.canOpenUrl("com.metlife.upwise://entry");
        AppLauncher.openUrl("com.metlife.upwise://entry");
      } else {
        AppLauncher.openUrl("https://apps.apple.com/us/app/itunes-connect/id376771144");
      }
      // window.location.replace("com.metlife.upwise://entry");
      // setTimeout(openWebApp, 1000);
    }

    const openWebApp = () =>{
      // window.location.replace("https://apps.apple.com/us/app/itunes-connect/id376771144");
      window.location.replace("https://apps.apple.com/us/app/whatsapp-messenger/id310633997")
    }

    const handleAppStore = async () => {
      // window.location.href = "com.metlife.upwise://entry";
      // window.location = 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997';
      
      var now = new Date().valueOf();  
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            // window.location = "https://preprod.app.upwise.com/";
            // window.location = 'https://apps.apple.com/us/app/itunes-connect/id376771144';
            window.location = 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997';
            // history.push('/')
        }, 25);
        window.location.href = "com.metlife.upwise://entry";
      //   // launchApp();
    }


    const handlePlayStore = async () => {
      // document.getElementById("hiddenPlayStoreLink").click();
      window.location.href = "intent://upwise/#Intent;scheme=com.metlife.upwise;package=com.metlife.upwise;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.metlife.upwise;end";
    }

    const handleAppStore1 = async () => { 
      document.getElementById("loader").src = "com.metlife.upwise://entry";

      setTimeout(function () {
        window.location = 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997';
        // window.location = 'itms-apps://appstore.com/whatsapp-messenger';
      }, 500);
    }

    const handleAppStore2 = async () => { 
      window.location.replace("com.metlife.upwise://")

      setTimeout(()=> {
        
        window.location.replace('https://apps.apple.com/us/app/itunes-connect/id376771144');
        // window.location.replace('https://apps.apple.com/us/app/whatsapp-messenger/id310633997');
        // window.location = 'itms-apps://appstore.com/whatsapp-messenger';
      }, 10000);
    }

    const handleStartPush = () => {
      FcmService.getInstance().initialise();
    }
    return (
        <IonApp>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>App Launcher</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  See if native app can open or not.
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              {/* <a id="hiddenLink" href="intent://upwise/#Intent;scheme=com.metlife.upwise;package=com.metlife.upwise;S.browser_fallback_url=https%3A%2F%2Fpreprod.app.upwise.com;end"> Android App </a> */}
              {/* <a id="hiddenLink" href="intent://upwise/#Intent;scheme=com.metlife.upwise;package=com.metlife.upwise;end"> Android App  Intent based </a> */}

              {/* <a id="hiddenLink2" href="com.metlife.upwise111://entry">          Android App url scheme based </a> */}

              {/* <a id="hiddenPlayStoreLink" href="intent://upwise/#Intent;scheme=com.metlife.upwise;package=com.metlife.upwise;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.metlife.upwise;end"> Android App </a> */}

              {/* <IonButton id="hiddenButton" onClick={handleAndroid}>Handle Android</IonButton> */}

              <IonButton id="AppStore" onClick={handleAppStore2}>AppStore</IonButton>
              <IonButton id="PlayStore" onClick={handlePlayStore}>PlayStore</IonButton>
              <div id="test_iOS" width="1" height="1" ></div>
              <iframe height="0" width="0" id="loader"></iframe>
              <a href="https://apps.apple.com/us/app/wise-up-online/id1476457267?itsct=apps_box_badge&amp;itscg=30200" ><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1570060800&h=1c1850d9e10e5c07240398b51f0b6b1d" alt="Download on the App Store"/></a>
              <IonButton id="StartPush" onClick={handleStartPush}>Start Push</IonButton>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonApp>
      );
}

export default Launcher;