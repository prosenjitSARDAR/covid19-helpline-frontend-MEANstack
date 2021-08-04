import { environment } from '../environments/environment';

export const Config = {
    /*Back End URL*/
    backendAPIUrl: environment.production ? environment.backendAPIUrl : "http://localhost:3000/api",

    /*Front End URL*/
    forntEnd_URL: environment.production ? environment.forntEnd_URL : "http://localhost:4200/",
}