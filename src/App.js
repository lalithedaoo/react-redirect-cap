import { Capacitor } from '@capacitor/core';
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { Component } from 'react';
import { AppLauncher } from '@capacitor/app-launcher';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    chomps: 0,
  };
  unchomp = () => {
    if (this.state.chomps > 0) {
      this.setState({
        chomps: this.state.chomps -= 1,
      });
    }
  };
  chomp = () => {
    this.setState({
      chomps: this.state.chomps += 1,
    });
  };

  checkCanOpenUrl = async () => {
    const { value } = await AppLauncher.canOpenUrl({ url: 'com.metlife.upwise2' });
    console.log('Can open url: ', {value});
    alert('Can open url: ' +value );
  };
  
  openPortfolioPage = async () => {
    await AppLauncher.openUrl({ url: 'com.metlife.upwise1://entry' });
  };

  testOpen = async () => {
    var now = new Date().valueOf();
    setTimeout(function () {
      if (new Date().valueOf() - now > 100) return;
      window.location = "https://preprod.app.upwise.com/";
    }, 25);
    window.location.href = "com.metlife.upwise://entry";
  }

  componentDidMount(){
    console.log("Component mounted")
    if (Capacitor.isNativePlatform()) {
      console.log("isNativePlatform:  TRUE")
    } else {
      console.log("isNativePlatform:  FALSE")
      // this.checkCanOpenUrl();
      this.openPortfolioPage();
      // this.testOpen();
    }
    

    // const installedApps = await navigator.getInstalledRelatedApps();
    // const nativeApp = installedApps.find(app => app.id === 'com.gl.capacitor.test');
    // if (nativeApp) {
    //   console.log("Found application: ", {nativeApp})
    // }
  }

  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Alligator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <img src="https://images.unsplash.com/photo-1549240923-93a2e080e653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2165&q=80" />
            <IonCardHeader>
              <IonCardSubtitle>Crocco</IonCardSubtitle>
              <IonCardTitle>
                You've been chomped {this.state.chomps} times!
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={this.chomp}>Chomp</IonButton>
              <IonButton onClick={this.unchomp}>UnChomp</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;