import {Component, OnInit} from '@angular/core';
import {EventsService} from '../services/events.service';
import {Router} from '@angular/router';
import {Event} from '../models/event.model';
import {Response} from '../models/response.model';
import {State} from '../models/state.model';
import {StateService} from '../services/state.service';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    private state: State;

    constructor(private eventsService: EventsService, private stateService: StateService, private router: Router) {
    }

    ngOnInit() {
        this.state = this.stateService.getState();
        this.getEvent(this.state.currentPageSize, this.state.page.number);
    }

    getEvent(pageSize: number, pageIndex: number) {
        this.eventsService.getEvents(pageSize, pageIndex, this.state.searchFilter, this.state.searchText)
            .subscribe((response: Response) => {
                this.state.page = response.page;
                this.state.maxPage = this.state.page.totalPages;
                /** API limits max paging depth (page * size) must be less than 1000 */
                if (this.state.maxPage * this.state.currentPageSize > 1000) {
                    this.state.maxPage = 1000 / this.state.currentPageSize;
                }
                /** map json response to Event array if there is no events array is empty */
                this.state.events = (response._embedded) ? response._embedded.events.map(event => new Event(event)) : [];
                /**
                 * reinitialize pagination indexes
                 * (1) fill pagination
                 * (2) page to display is after the last element of selectable pages
                 * (3) page to display is before the first element of selectable pages
                 */
                if (this.state.selectablePages.length === 0 || this.state.selectablePages[3] < this.state.page.number + 1 ||
                    this.state.selectablePages[0] > this.state.page.number + 1) {
                    this.setSelectablePages();
                }
                this.stateService.setState(this.state);
            });
    }

    getPage(pageNumber: number) {
        this.getEvent(this.state.currentPageSize, pageNumber);
    }

    getNextPage() {
        this.getEvent(this.state.currentPageSize, this.state.page.number + 1);
    }

    getPreviousPage() {
        this.getEvent(this.state.currentPageSize, this.state.page.number - 1);
    }

    getFirstPage() {
        this.getEvent(this.state.currentPageSize, 0);
    }

    getLastPage() {
        this.getEvent(this.state.currentPageSize, this.state.maxPage - 1);
    }

    setSelectablePages() {
        /** fill pagination indexes -- 4 pages to select -- (page.number of API starts from 0) */
        this.state.selectablePages = Array.from(Array(4).keys()).map(i => i + this.state.page.number + 1);
    }

    changePageSize() {
        this.getEvent(this.state.currentPageSize, 0);
    }

    goToDetails(event: Event) {
        this.router.navigate(['event/' + event.id]);
    }

    filter() {
        this.getEvent(this.state.currentPageSize, 0);
    }

}
