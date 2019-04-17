import {Event} from './event.model';
import {Page} from './page.model';

export class State {
    events: Array<Event>;
    page: Page;
    selectablePages: Array<number>;
    /** default page size */
    currentPageSize: number;
    /** default filter */
    searchFilter: string;
    searchText: string;
    /** API limits max paging depth (page * size) must be less than 1000 */
    maxPage: number;

    constructor(state?) {
        this.events = state && state.events || [];
        this.page = state && state.page || new Page();
        this.selectablePages = state && state.selectablePages || [];
        this.currentPageSize = state && state.currentPageSize || 10;
        this.searchFilter = state && state.searchFilter || 'id';
        this.searchText = state && state.searchText || '';
        this.maxPage = state && state.maxPage || 100;
    }
}
