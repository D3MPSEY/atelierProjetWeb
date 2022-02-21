import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loginForm: FormGroup;
  authService: AuthService;
  snackBar: MatSnackBar;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.snackBar.open("Login réussi", "Merci", { duration: 5000 })
        },
        error:/* err*/() => {
          let msg = "invalid login";
          /*if (err.status === 400){
            msg = err.error;
          }*/
          this.snackBar.open(msg, "OK", { duration: 5000 })
        }
      });
    }
  }
}
