import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    imports: [
        ReactiveFormsModule, CommonModule
    ],
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm!: FormGroup;
    isLoading = false;
    errorMessage: string | null = null;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            klucz: ['', Validators.required],
            numerSap: ['', Validators.required],
            pesel: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]] // Prosta walidacja PESEL
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }

        this.isLoading = true;
        this.errorMessage = null;

        const {klucz, numerSap, pesel} = this.loginForm.value;

        this.authService.login(klucz, numerSap, pesel).subscribe({
            next: (technician) => {
                // Sukces! Serwis zapisał dane, a my przekierowujemy użytkownika.
                this.isLoading = false;
                console.log('Zalogowano jako:', technician.ImieSerwisanta);
                this.router.navigate(['/id']); // <-- Przekierowanie na stronę z danymi
            },
            error: (err) => {
                // Błąd! Wyświetlamy go użytkownikowi.
                this.isLoading = false;
                this.errorMessage = err.message;
                console.error(err);
            }
        });
    }
}
