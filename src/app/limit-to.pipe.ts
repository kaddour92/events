import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

    transform(value: Array<number>, args?: any): any {
        /** filter available pages on pagination */
        return value.filter(value1 => value1 <= args);
    }

}
