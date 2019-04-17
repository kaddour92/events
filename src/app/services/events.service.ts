import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/event.model';
import {Response} from '../models/response.model';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    private urlBase = 'https://app.ticketmaster.com/discovery/v2/events/';

    constructor(private httpClient: HttpClient) {
    }

    public getEvents(pageSize: number, pageIndex: number, filter: string, text: string): Observable<Response> {
        const params = {
            /** number events per page */
            size: pageSize.toString(),
            /** selected page index */
            page: pageIndex.toString(),
        };
        /** add filter param */
        params[filter] = text;

        return this.httpClient.get<Response>(this.urlBase, {params});
    }

    public getEventById(id: string): Observable<Event> {
        return this.httpClient.get<Event>(this.urlBase + '/' + id);
    }
}
