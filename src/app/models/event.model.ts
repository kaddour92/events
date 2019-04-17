export class Event {
    id: string;
    name: string;
    type: string;
    url: string;
    info: string;
    city: string;
    countryCode: string;
    date: string;
    time: string;
    venue: string;
    segment: string;
    genre: string;
    subGenre: string;
    image: Image;

    constructor(props?) {
        this.id = props && props.id || '';
        this.name = props && props.name || 'No name';
        this.type = props && props.type || 'No type';
        this.url = props && props.url || 'No url';
        this.info = props && props.info || 'No info';
        this.city = props && props._embedded.venues && props._embedded.venues[0].city.name || 'No city';
        this.venue = props && props._embedded.venues && props._embedded.venues[0].name || 'No venue';
        this.date = props && props.dates && props.dates.start.localDate || 'No date';
        this.time = props && props.dates && props.dates.start.localTime || 'No time';
        this.countryCode = props && props._embedded.venues && props._embedded.venues[0].country.countryCode || 'No country';
        this.image = props && props.images && props.images.find(image => image.ratio === '4_3') || '';
        this.segment = props && props.classifications && props.classifications[0].segment
            && props.classifications[0].segment.name || 'No segment';
        this.genre = props && props.classifications && props.classifications[0].genre
            && props.classifications[0].genre.name || 'No genre';
        this.subGenre = props && props.classifications && props.classifications[0].subGenre
            && props.classifications[0].subGenre.name || 'No subGenre';
    }
}

export class Image {
    ratio: string;
    url: string;
    width: number;
    height: number;
}
