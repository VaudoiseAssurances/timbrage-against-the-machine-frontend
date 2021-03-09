import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { CalendarsContainerComponent } from './calendars-container/calendars-container.component';
import { TicketsContainerComponent } from './tickets-container/tickets-container.component';

import { CalendarEventsComponent } from './calendar-events/calendar-events.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    CalendarsContainerComponent,
    TicketsContainerComponent,
    CalendarEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
