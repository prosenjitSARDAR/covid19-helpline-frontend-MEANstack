import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/service/all services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

}
