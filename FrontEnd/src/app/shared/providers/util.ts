import { Injectable } from '@angular/core';
import { NgxAlertsService } from '@ngx-plus/ngx-alerts';


@Injectable({
    providedIn: 'root'
})
export class UtilProvider {

    constructor(
        private alert: NgxAlertsService
    ) { }


    alerta(type, title, message) {
        this.alert.alert({
            type: type,
            title: title,
            text: message,
            // timer: 2000
        });
    }
}
