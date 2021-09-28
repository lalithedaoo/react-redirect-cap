import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";
// import {
//     PushNotifications,
//     PushNotification,
//     PushNotificationToken,
//     PushNotificationActionPerformed,
//   } from '@capacitor/core';

//   const { PushNotifications } = Plugins;
export default class FcmService {
    static instance;

    constructor() {
    }

    static getInstance() {
        if(!this.instance) {
            FcmService.instance = new FcmService();
        }
        return this.instance;
    }

    initialise = ()=> {
        if (Capacitor.getPlatform() !== "web") {
            this.register();
        }
    }

    register() {
        PushNotifications.requestPermissions().then((permission) => {
            // if (permission.granted) {
                PushNotifications.register()
            // } else {
            //     console.log("No permission for push notification granted")
            // }
        });

        PushNotifications.addListener('registration', (token) => {
            console.log('My token: ' + JSON.stringify(token));
        });

        PushNotifications.addListener('registrationError', (error) => {
            console.log('Error: ' + JSON.stringify(error));
        });

        PushNotifications.addListener(
            'pushNotificationReceived',
            async (notification) => {
                console.log('Push received: ' + JSON.stringify(notification));
            }
        );


        PushNotifications.addListener(
            'pushNotificationActionPerformed',
            async (notification) => {
                // const data = notification.notification.data;
                console.log('Action performed: ' + JSON.stringify(notification.notification));   
            }
        );
    }

}