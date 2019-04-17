import {Injectable} from '@angular/core';
import {State} from '../models/state.model';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private state: State;

    constructor() {
    }

    getState(): State {
        return (this.state) ? this.state : new State();
    }

    setState(state: State) {
        this.state = state;
    }
}
