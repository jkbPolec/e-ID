import {Component, inject} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
    selector: 'app-employee-id-page',
    imports: [DatePipe],
    templateUrl: './employee-id-page.component.html',
    styleUrl: './employee-id-page.component.css'
})
export class EmployeeIdPageComponent {


    response: any[] = [];
    authservice = inject(AuthService);

    constructor() {
        this.authservice.getEmployeeData().subscribe({
            next: data => {
                this.response = data;
                console.log('Employee data fetched successfully:', this.response);
            },
            error: error => {
                console.error('Error fetching employee data:', error);
            }
        });
    }

    mockEmployee = new employee(1, 'Tomek', 'Testy', 'NOO/Ł11', new Date('2025-05-15'), 44, "https://www.w3schools.com/howto/img_avatar.png");

}

class employee {
    id: number;
    firstname: string;
    surname: string;
    sealId: string;
    expirationDate: Date;
    oldSap: number;
    photoUrl: string;


    constructor(id: number, firstname: string, surname: string, sealId: string, expirationDate: Date, oldSap: number, photoUrl: string) {
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.sealId = sealId;
        this.expirationDate = expirationDate;
        this.oldSap = oldSap;
        this.photoUrl = photoUrl;
    }

}
