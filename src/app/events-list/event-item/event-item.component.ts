import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Event} from '../../models/event.model';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html',
    styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {

    @Input() event: Event;
    @Output() eventClicked: EventEmitter<Event>;

    constructor() {
        this.event = new Event();
        this.eventClicked = new EventEmitter<Event>();
    }

    selectEvent() {
        this.eventClicked.emit(this.event);
    }
}
