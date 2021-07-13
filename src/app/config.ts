import { environment } from '../environments/environment';


export const Config = {
    API_BASE_URL: environment.production ? environment.apiUrl : "http://localhost:4000/api",
    BASE_URL: environment.production ? environment.BASE_URL : "http://localhost:4200/",

    /* PERSONAL URLs */
    author_GMAIL: environment.production ? environment.author_GMAIL : "prosenjit19111995@gmail.com",
    author_GITHUB: environment.production ? environment.author_GITHUB : "https://github.com/prosenjitSARDAR",
    author_LINKEDIN: environment.production ? environment.author_LINKEDIN : "https://www.linkedin.com/in/prosenjitsardar/"
}