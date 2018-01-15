import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showerror = false;
  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private auth: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onLogin(form) {
    if (form.valid) {
      this.showerror = false;

      const result = this.auth.login(form.value);
      console.log(result);
      if (result) {
        this.router.navigate(['/home']);
      }
    } else {
      this.showerror = true;
    }
  }

}
