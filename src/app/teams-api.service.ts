import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalendarEventsResponse } from './model/calendar-events-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TeamsApiService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IldfbElycjg5VThlZk9WTGNmc0s3RUd2VDlHZHdqNFA2ekRvb1UxYndPUDgiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FwaS5zcGFjZXMuc2t5cGUuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGYxMTFkNjctNGNiMS00MTE5LTlmMDUtNGM1MmU1ZTBlMTUwLyIsImlhdCI6MTYxNTI5NzMzNywibmJmIjoxNjE1Mjk3MzM3LCJleHAiOjE2MTUzMDEyMzcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFNbDduOS9EOUJRZCtjbm5pb3NZZ0RuSDI3WUJvWE5uSnpyeFhsWGhlZ3JvPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1ZTNjZTZjMC0yYjFmLTQyODUtOGQ0Yi03NWVlNzg3ODczNDYiLCJhcHBpZGFjciI6IjAiLCJhdXRoX3RpbWUiOjE2MTUyNzczMDksImZhbWlseV9uYW1lIjoiUG9jY2lvbGkiLCJnaXZlbl9uYW1lIjoiRW1pbGllIiwiaXBhZGRyIjoiMTg1LjY4LjIzNi4xMyIsIm5hbWUiOiJQb2NjaW9saSBFbWlsaWUiLCJvaWQiOiJkZjE2ODI1MC1jZjc3LTRjOTQtOTUyMi05YmUwYTA0MDllZDkiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTE3NjA5NzEwLTE1MzIyOTg5NTQtNjgyMDAzMzMwLTI0MDcxMyIsInB1aWQiOiIxMDAzN0ZGRUEwOUI3REFFIiwicmgiOiIwLkFRc0FaeDBSMzdGTUdVR2ZCVXhTNWVEaFVNRG1QRjRmSzRWQ2pVdDE3bmg0YzBZTEFIby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsiaW5rbm93bm50d2siXSwic3ViIjoiSlBHOVlVajlaSmhsajlnSUJQaUkwSk5Ia3NaTVZadmdza1NMTjJhRHhzMCIsInRpZCI6ImRmMTExZDY3LTRjYjEtNDExOS05ZjA1LTRjNTJlNWUwZTE1MCIsInVuaXF1ZV9uYW1lIjoiZXBvY2Npb2xpQHZhdWRvaXNlLmNoIiwidXBuIjoiZXBvY2Npb2xpQHZhdWRvaXNlLmNoIiwidXRpIjoiMnhvbGUwUlBQVVdOT0hGTVp0ZEVBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.iwTCUrpYUy6uNP6V5TXqM2xeQf_23L4IxcWt_GHYXEdzdqM-G3MgEHNWcVg0p8tsxBvD4o91xLMeBUIQXAR7BiZTaMLsFA8Fk7gifS27Wayqob_y3wRVIMjSQ-NEWHHuwlqDUgceCKT4ExKbRys3ejzOTrUKaow-h38HPrHfVEPDYEiIAvswsHVWXxyCQkZCs0sM-jYQ_7GmFK2CrTSl-wj_6dfgK1imLqEm6Vq5INoFO09W-rSUFJ8m3slQD-1G939bQLNLYDLthTssC6XKBM6XZttJo-k-U6LNMjP7O5ntdc6DKj9pVNah9tfDGLGWkrt6BgTjRKd7yzAwYDdDfg' })
      };

    public getCalendarEvents(accessToken: string): Observable<CalendarEventsResponse> {
        //const json = '{\"type\":\"Microsoft.SkypeSpaces.MiddleTier.Models.CalendarEvent\",\"value\":[{\"objectId\":\"AAMkAGE3MWRjNjM0LTVlM2QtNDM4NS1iZmIxLTJjMTY4NDQyNTQwYQFRAAgI2OHFHfAAAEYAAAAAUWsCuYdefkuGjWRbU5UpIAcAj7yvGN3s00O1FSo4WavPkQAAAJyjcwAAYQyP31kXDEKvOxPGwDYBpwAByka6jwAAEA==\",\"startTime\":\"2021-03-08T07:30:00+00:00\",\"endTime\":\"2021-03-08T18:00:00+00:00\",\"lastModifiedTime\":\"2021-03-08T08:44:04.098+00:00\",\"eventTimeZone\":\"WEuropeSt\",\"utcOffset\":60,\"eventType\":\"Occurrence\",\"subject\":\"D\u00E9veloppement Portail -> pour les r\u00E9unions: jeudi & vendredi\",\"isOnlineMeeting\":false,\"organizerName\":\"Salvalai Fabio\",\"organizerAddress\":\"\/O=VAUDOISE\/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)\/CN=RECIPIENTS\/CN=SIO\",\"categories\":[],\"isResponseRequested\":true,\"attendees\":[],\"isReminderSet\":true,\"showAs\":\"Busy\",\"attachments\":[],\"conflictingMeetings\":[],\"isOrganizer\":true,\"isAppointment\":true,\"iCalUID\":\"040000008200e00074c5b7101a82e00807e5030840d72459b4fbd601000000000000000010000000a3aa33b91a425a44a342ebf751720b3d\",\"cleanGlobalObjectId\":\"040000008200e00074c5b7101a82e0080000000040d72459b4fbd601000000000000000010000000a3aa33b91a425a44a342ebf751720b3d\",\"doNotForward\":false},{\"objectId\":\"AAMkAGE3MWRjNjM0LTVlM2QtNDM4NS1iZmIxLTJjMTY4NDQyNTQwYQBGAAAAAABRawK5h15_S4aNZFtTlSkgBwCPvK8Y3ezTQ7UVKjhZq8_RAAAAnKNzAABhDI-fWRcMQq87E8bANgGnAAKaPmdPAAA=\",\"joinOnlineMeetingUrl\":\"https:\/\/meet.vaudoise.ch\/sguillaume\/946PJVM8\",\"startTime\":\"2021-03-08T09:00:00+00:00\",\"endTime\":\"2021-03-08T09:30:00+00:00\",\"lastModifiedTime\":\"2021-03-08T14:27:18.476+00:00\",\"eventTimeZone\":\"WEuropeSt\",\"utcOffset\":60,\"subject\":\"Votre probl\u00E8me entre Portail et Connectique\",\"location\":\"R\u00E9union Skype\",\"isOnlineMeeting\":true,\"myResponseType\":\"NotResponded\",\"organizerName\":\"Guillaume S\u00E9bastien\",\"organizerAddress\":\"\/O=VAUDOISE\/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)\/CN=RECIPIENTS\/CN=GUS0BC\",\"categories\":[],\"isResponseRequested\":true,\"attendees\":[],\"showAs\":\"Tentative\",\"attachments\":[],\"conflictingMeetings\":[],\"iCalUID\":\"040000008200e00074c5b7101a82e00800000000700c2de1f311d7010000000000000000100000004929145197568147a81771395e678f5f\",\"cleanGlobalObjectId\":\"040000008200e00074c5b7101a82e00800000000700c2de1f311d7010000000000000000100000004929145197568147a81771395e678f5f\",\"onlineMeetingConferenceId\":\"2354783\",\"onlineMeetingTollNumber\":\"+41215549391\",\"doNotForward\":false},{\"objectId\":\"AAMkAGE3MWRjNjM0LTVlM2QtNDM4NS1iZmIxLTJjMTY4NDQyNTQwYQFRAAgI2OHFHfAAAEYAAAAAUWsCuYdefkuGjWRbU5UpIAcAj7yvGN3s00O1FSo4WavPkQAAAJyjcwAAYQyP31kXDEKvOxPGwDYBpwACWT8HQAAAEA==\",\"startTime\":\"2021-03-08T09:30:00+00:00\",\"endTime\":\"2021-03-08T09:55:00+00:00\",\"lastModifiedTime\":\"2021-03-08T14:27:18.312+00:00\",\"eventTimeZone\":\"WEuropeSt\",\"utcOffset\":60,\"eventType\":\"Occurrence\",\"subject\":\"Portail - daily Scrum\",\"location\":\"R\u00E9union Microsoft Teams\",\"isOnlineMeeting\":true,\"myResponseType\":\"NotResponded\",\"organizerName\":\"Guillaume S\u00E9bastien\",\"organizerAddress\":\"\/O=VAUDOISE\/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)\/CN=RECIPIENTS\/CN=GUS0BC\",\"categories\":[],\"isResponseRequested\":true,\"attendees\":[],\"isReminderSet\":true,\"showAs\":\"Tentative\",\"attachments\":[],\"conflictingMeetings\":[],\"skypeTeamsData\":\"{\\\"cid\\\":\\\"19:meeting_OWFjNTVlM2QtZGU1NC00MTU2LTgyZTMtM2U3YmIwNWQzZTI1@thread.v2\\\",\\\"private\\\":true,\\\"type\\\":0,\\\"mid\\\":0,\\\"rid\\\":0,\\\"uid\\\":null}\",\"skypeTeamsMeetingUrl\":\"https:\/\/teams.microsoft.com\/l\/meetup-join\/19%3ameeting_OWFjNTVlM2QtZGU1NC00MTU2LTgyZTMtM2U3YmIwNWQzZTI1%40thread.v2\/0?context=%7b%22Tid%22%3a%22df111d67-4cb1-4119-9f05-4c52e5e0e150%22%2c%22Oid%22%3a%22151b703c-8b72-4a76-8f7b-31c6fa326e51%22%7d\",\"schedulingServiceUpdateUrl\":\"https:\/\/api.scheduler.teams.microsoft.com\/teams\/df111d67-4cb1-4119-9f05-4c52e5e0e150\/151b703c-8b72-4a76-8f7b-31c6fa326e51\/19_meeting_OWFjNTVlM2QtZGU1NC00MTU2LTgyZTMtM2U3YmIwNWQzZTI1@thread.v2\/0\",\"iCalUID\":\"040000008200e00074c5b7101a82e00807e50308909f1f391dc3d601000000000000000010000000894af31945d5754e90f7ac0641e380b6\",\"cleanGlobalObjectId\":\"040000008200e00074c5b7101a82e00800000000909f1f391dc3d601000000000000000010000000894af31945d5754e90f7ac0641e380b6\",\"doNotForward\":false},{\"objectId\":\"AAMkAGE3MWRjNjM0LTVlM2QtNDM4NS1iZmIxLTJjMTY4NDQyNTQwYQFRAAgI2OHFHfAAAEYAAAAAUWsCuYdefkuGjWRbU5UpIAcAj7yvGN3s00O1FSo4WavPkQAAAJyjcwAAYQyP31kXDEKvOxPGwDYBpwAByka6iwAAEA==\",\"startTime\":\"2021-03-08T10:00:00+00:00\",\"endTime\":\"2021-03-08T10:55:00+00:00\",\"lastModifiedTime\":\"2021-03-08T14:27:18.397+00:00\",\"eventTimeZone\":\"WEuropeSt\",\"utcOffset\":60,\"eventType\":\"Occurrence\",\"subject\":\"Portail - Product Backlog refinement \",\"location\":\"R\u00E9union Microsoft Teams\",\"isOnlineMeeting\":true,\"myResponseType\":\"Accepted\",\"organizerName\":\"Guillaume S\u00E9bastien\",\"organizerAddress\":\"\/O=VAUDOISE\/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)\/CN=RECIPIENTS\/CN=GUS0BC\",\"categories\":[],\"isResponseRequested\":true,\"attendees\":[],\"isReminderSet\":true,\"showAs\":\"Busy\",\"attachments\":[],\"conflictingMeetings\":[],\"skypeTeamsData\":\"{\\\"cid\\\":\\\"19:meeting_YWIwM2FiZTMtNTAyYy00ZjZiLTk4MTMtOWUyMTUzMTQ4MDk2@thread.v2\\\",\\\"private\\\":true,\\\"type\\\":0,\\\"mid\\\":0,\\\"rid\\\":0,\\\"uid\\\":null}\",\"skypeTeamsMeetingUrl\":\"https:\/\/teams.microsoft.com\/l\/meetup-join\/19%3ameeting_YWIwM2FiZTMtNTAyYy00ZjZiLTk4MTMtOWUyMTUzMTQ4MDk2%40thread.v2\/0?context=%7b%22Tid%22%3a%22df111d67-4cb1-4119-9f05-4c52e5e0e150%22%2c%22Oid%22%3a%22151b703c-8b72-4a76-8f7b-31c6fa326e51%22%7d\",\"schedulingServiceUpdateUrl\":\"https:\/\/api.scheduler.teams.microsoft.com\/teams\/df111d67-4cb1-4119-9f05-4c52e5e0e150\/151b703c-8b72-4a76-8f7b-31c6fa326e51\/19_meeting_YWIwM2FiZTMtNTAyYy00ZjZiLTk4MTMtOWUyMTUzMTQ4MDk2@thread.v2\/0\",\"iCalUID\":\"040000008200e00074c5b7101a82e00807e5030800c9c7551ec3d601000000000000000010000000706edb2d55f6ff4f8a5169152cb99899\",\"cleanGlobalObjectId\":\"040000008200e00074c5b7101a82e0080000000000c9c7551ec3d601000000000000000010000000706edb2d55f6ff4f8a5169152cb99899\",\"doNotForward\":false}]}'
        // return of(JSON.parse(json));
        return this.http.get<CalendarEventsResponse>("/api/mt/emea/beta/me/calendarEvents?StartDate=2021-03-20T23:00:00.000Z&EndDate=2021-03-27T23:00:00.000Z", this.httpOptions);
    }
}
