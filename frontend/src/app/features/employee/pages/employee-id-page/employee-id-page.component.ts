import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from '@angular/common';
import {AuthService} from '../../../../core/services/auth.service';
import {Technicican} from '../../../../shared/models/technician.model';
import {Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-employee-id-page',
    imports: [AsyncPipe, NgIf],
    templateUrl: './employee-id-page.component.html',
    styleUrl: './employee-id-page.component.css'
})
export class EmployeeIdPageComponent implements OnInit {

    technician$!: Observable<Technicican | null>;

    authService = inject(AuthService);

    ngOnInit(): void {
        this.technician$ = this.authService.currentTechnician$;
    }

    logout(): void {
        this.authService.logout();
    }

}
