import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEventsResponse } from './model/calendar-events-response';

@Injectable({
  providedIn: 'root'
})
export class TeamsApiService {

  constructor(accessToken: string) { }

  public getCalendarEvents(): Observable<CalendarEventsResponse> {
    throw new Error('not implemented');

  }
}
