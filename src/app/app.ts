
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FcmService } from './fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
})
export class App {
  private fcmService = inject(FcmService);
  public readonly message = signal<any>(undefined);
  public readonly token = signal<string | undefined>(undefined);

  constructor() {
    this.fcmService.message$.subscribe((payload) => {
      if (payload) {
        if (payload.token) {
            this.token.set(payload.token);
        } else {
            this.message.set(payload);
        }
      }
    });
  }

  requestPermission() {
    this.fcmService.requestPermission();
    this.fcmService.listenForMessages();
  }
}
