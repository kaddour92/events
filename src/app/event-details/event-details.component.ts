import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventsService} from '../services/events.service';
import {Event} from '../models/event.model';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    event: Event;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private eventsService: EventsService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.eventsService.getEventById(params.id).subscribe((event: Event) => {
                this.event = new Event(event);
            });
        });
    }

    backToMainPage() {
        this.router.navigate(['/']);
    }

}
