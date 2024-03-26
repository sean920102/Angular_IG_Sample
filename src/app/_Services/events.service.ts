import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
// import { MqttConnection,MqttSettings,Timeoutsec } from 'src/environments/environment';
import { Subject, Subscription, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  topbarSubject: ReplaySubject<I_Statuses[]>;
  constructor() {
    this.topbarSubject = new ReplaySubject<I_Statuses[]>();
   }
}

export interface I_Statuses {
  status: string;
  value: string;
}