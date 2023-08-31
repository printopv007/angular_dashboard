import { Component, OnInit } from '@angular/core';

interface Flag {
  country: string;
  iconUrl: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

   isDropdownOpen: boolean = false;
  selectedFlag: Flag = { country: '', iconUrl: '' }; // Initialize here
  flags: Flag[] = [
    { country: 'Eng', iconUrl: '/assets/images/England.svg' },
    { country: 'Ind', iconUrl: '/assets/images/india.svg' },
    // Add more flags
  ];

  ngOnInit(): void {
    this.selectedFlag = this.flags[0]; // Set default selected flag
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectFlag(flag: Flag): void {
    this.selectedFlag = flag;
    this.isDropdownOpen = false;
  }

  password: string = '';
  Show: boolean = false;

  togglePasswordVisibility() {
    this.Show = !this.Show;
  }
}






