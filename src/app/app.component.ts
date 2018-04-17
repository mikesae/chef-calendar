import {Component} from '@angular/core';
import {CalendarEvent, CalendarMonthViewDay} from 'angular-calendar';
import {colors, getMonthName} from '../utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chef';

  viewDate: Date = new Date();

  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: 'Increments badge total on the day cell',
      color: colors.yellow,
      start: new Date(),
      meta: {
        incrementsBadgeTotal: true
      }
    },
    {
      title: 'Does not increment the badge total on the day cell',
      color: colors.blue,
      start: new Date(),
      meta: {
        incrementsBadgeTotal: false
      }
    }
  ];

  beforeMonthViewRender({body}: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  getCalendarHeader(): string {
    return `${getMonthName(this.viewDate)}, ${this.viewDate.getFullYear()}`;
  }
}
