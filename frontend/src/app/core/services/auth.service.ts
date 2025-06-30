import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl = "https://webapi.novitus.pl:8443/DownloadInternalAPIServlet?authorization=TVJRJPXSPB\n" +
        "B25DWHHGVN604UVAQ0ORMXWZSZ3SCMX3KB05L14MMWLGRAVSZITOWK&action=\n" +
        "DD01&SAPID=44\n";

    constructor(private http: HttpClient) {
    }

    getEmployeeData(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

}
