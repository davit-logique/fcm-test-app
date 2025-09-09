
import { Injectable, inject } from '@angular/core';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  private messaging = inject(Messaging);
  public message$ = new BehaviorSubject<any>(null);

  public requestPermission(): void {
    getToken(this.messaging, {
      vapidKey: '<YOUR_VAPID_KEY>', // TODO: Add your VAPID key
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          this.message$.next({ token: currentToken });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }

  public listenForMessages(): void {
    onMessage(this.messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message$.next(payload);
    });
  }
}
