import {Page} from './page.model';
import {Event} from './event.model';

export class Response {
    page: Page;
    _embedded: EmbeddedResponse;
}

export class EmbeddedResponse {
    events: Array<Event>;
}
