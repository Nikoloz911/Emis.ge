import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  usernameError: boolean = false;
  isPasswordVisible: boolean = false;
  isModalVisible: boolean = true; 
  
  goToAuth() {
    this.router.navigate(['/auth']);
  }
  onSubmit() {
    let usernameInput = document.getElementById('username') as HTMLInputElement;
   
    let errorCube = document.getElementById('error-cube') as HTMLElement;
    usernameInput.style.borderColor = '';
   

    let errorMessage = document.getElementById('show-password-button');

    if (!usernameInput.value.trim()) {
      this.usernameError = true;

      if (!usernameInput.value.trim()) {
        usernameInput.style.borderColor = 'red';
      }
   

      if (errorCube) {
        errorCube.style.display = 'none';
      }
      if (errorMessage) {
        errorMessage.style.top = '465px';
     
      }
    } else {
      this.usernameError = false;

      if (errorCube) {
        errorCube.style.display = 'flex';
        errorCube.style.opacity = '0'; 
        setTimeout(() => {
          errorCube.style.opacity = '1'; 
          setTimeout(() => {
            errorCube.style.opacity = '0';
            setTimeout(() => {
              errorCube.style.display = 'none'; 
            }, 500); 
          }, 4000); 
        }, 500); 
      }
    }
  }

  

  hideErrorCube() {
    let errorCube = document.getElementById('error-cube') as HTMLElement;
    if (errorCube) {
      errorCube.style.opacity = '0'; 
      setTimeout(() => {
        errorCube.style.display = 'none'; 
      }, 500);
    }
  }
}
