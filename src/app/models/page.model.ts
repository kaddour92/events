export class Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;

    constructor(page?) {
        this.size = page && page.size || 0;
        this.totalElements = page && page.totalElements || 0;
        this.totalPages = page && page.totalPages || 0;
        this.number = page && page.number || 0;
    }
}
