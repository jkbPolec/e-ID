import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs';
import {Technicican} from '../../shared/models/technician.model';
import {ApiResponse} from '../../shared/models/api-response.model';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = "https://webapi.novitus.pl:8443/DownloadInternalAPIServlet";
    public currentTechniciainSubject = new BehaviorSubject<Technicican | null>(null);
    public currentTechnician$ = this.currentTechniciainSubject.asObservable();
    router = inject(Router);

    constructor(private http: HttpClient) {
    }

    login(authKey: string, sap: string, pesel: string): Observable<Technicican> {

        const url = this.apiUrl + '?authorization= ' + authKey + ' &action=DD01&SAPID=' + sap;

        return this.http.get<ApiResponse>(url).pipe(
            map(response => {
                const technician = response.listaSerwisantow.find(t => t.PESEL === pesel);

                if (technician) {
                    this.currentTechniciainSubject.next(technician);
                    return technician;
                } else {
                    throw new Error('Technician not found');
                }

            }),
            catchError(this.handleError)
        );
    }

    logout() {
        this.currentTechniciainSubject.next(null);
        this.router.navigate(['/login']);
    }

    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Something bad happened; please try again later.'));

    }

}
