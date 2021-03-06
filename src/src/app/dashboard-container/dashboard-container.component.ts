import { AssignedMeeting } from './../model/assigned-meeting';
import { TimeRange } from './../model/time-range';
import { TimerangeService } from './../timerange.service';
import { TimerangeMode } from './../model/timerange-mode';
import { MeetingAssignedEvent } from './../model/meeting-assigned';

import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../model/calendar-event';
import { MeetingsUpdated } from '../model/meetings-updated';
import { ChangeAssignedMeetingsEvent } from '../model/change-assigned-meetings';

@Component({
    selector: 'app-dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

    public totalMinutesWorked: number = 0;
    public teamsAccessToken: string = "";
    public assignedMeetings: Array<AssignedMeeting> = [];
    public meetings: Array<CalendarEvent> = [];

    public initialDate: Date = new Date();

    public timeRange!: TimeRange;
    public mode: TimerangeMode = TimerangeMode.monthly;

    constructor(private timerangeService: TimerangeService) { }

    ngOnInit(): void {
        this.teamsAccessToken = localStorage.getItem('teams-token') ?? '';
        this.timeRange = this.timerangeService.getTimeRange(this.mode, new Date())
    }

    tokenChanged(evt: Event) : void {
        this.teamsAccessToken = (evt.target as HTMLInputElement).value;
    }

    public getUnassignedTime(): number {
        let timeToDeduct = 0;
        const assignationsToConsider = this.assignedMeetings.filter(o => !o.issue.ignoreInTimeCalculation);
        for (let index = 0; index < assignationsToConsider.length; index++) {
            const assignation = this.assignedMeetings.filter(o => !o.issue.ignoreInTimeCalculation)[index];
            timeToDeduct += this.getDurationInMinutes(assignation.meeting);
        }
        return this.totalMinutesWorked - timeToDeduct;
    }

    public totalHoursChanged(evt: Event) : void {
        const hoursInput = (evt.target as HTMLInputElement).value;
        const separatorPosition = hoursInput.indexOf(':');
        const hoursAsString = hoursInput.slice(0, separatorPosition);
        const minutesAsString = hoursInput.slice(separatorPosition+1);
        this.totalMinutesWorked = Number.parseInt(hoursAsString) * 60 + Number.parseInt(minutesAsString);
    }
    
    public onAssigned(evt: MeetingAssignedEvent) : void {

        const meeting = this.meetings.find(m => m.objectId == evt.meetingObjectId);

        if (meeting == null) {
            throw new Error(`meeting not found: ${evt.meetingObjectId}`)
        }

        console.log(`${meeting?.subject} will be logged on ticket ${evt.issue}`);
        console.log(`${meeting.subject} will be logged on ticket ${evt.issue}`);
        this.assignedMeetings.push(new AssignedMeeting(evt.issue, meeting));
        this.assignedMeetings = [...this.assignedMeetings];
    } 
    
    public onMeetingsUpdated(evt: MeetingsUpdated) : void {
        this.meetings = evt.meetings;
    }

    // todo : refactor this method because it is duplicated in at least 2 other places.
    public getDurationInMinutes(event: CalendarEvent) : number {
        const endTime = new Date(event.endTime);
        const startTime = new Date(event.startTime);
        const duration = (endTime.valueOf() - startTime.valueOf()) / 60000;

        return duration;
    }

    public timerangeChanged(event: TimeRange) : void {
        this.timeRange = event;
    }

    public assignedMeetingsUpdated(changeAssignedMeetingsEvent: ChangeAssignedMeetingsEvent) : void {
        this.assignedMeetings = changeAssignedMeetingsEvent.assignedMeetings;
        this.assignedMeetings = [...this.assignedMeetings];
    }
}
