import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsListComponent} from './events-list/events-list.component';
import {EventDetailsComponent} from './event-details/event-details.component';

const routes: Routes = [
    {
        path: '',
        component: EventsListComponent,
        pathMatch: 'full',
    },
    {
        path: 'event/:id',
        component: EventDetailsComponent,
    },
    {
        /** otherwise redirect to main page */
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    /** using hash as in kata document */
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
