import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventsListComponent} from './events-list/events-list.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptorService} from './services/request-interceptor.service';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {LimitToPipe} from './limit-to.pipe';
import {EventItemComponent} from './events-list/event-item/event-item.component';

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        EventDetailsComponent,
        LimitToPipe,
        EventItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        FormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
