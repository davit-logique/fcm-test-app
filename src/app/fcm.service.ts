
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
      vapidKey: 'BJE_w9fIMjGkzh-p_y6vdeJ6d9d1pQuNfPczxDmWJ1TBDG3n-nVIKcm_8fW2pZDB8naSnV1AKpT9d7AtrMOlWkE',
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
