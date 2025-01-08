import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  usernameError: boolean = false;
  isPasswordVisible: boolean = false;
  isModalVisible: boolean = true; 

  ngOnInit() {
    let closeModalButton = document.getElementById('close-modal-button');
    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => this.toggleModal());
    }
    let closeButton = document.getElementById('x-cube');
  if (closeButton) {
    closeButton.addEventListener('click', () => this.hideErrorCube());
  }
  }
  goToRegistration() {
    this.router.navigate(['/registration']);
  }
  onSubmit() {
    let usernameInput = document.getElementById('username') as HTMLInputElement;
    let passwordInput = document.getElementById('password') as HTMLInputElement;
    let errorCube = document.getElementById('error-cube') as HTMLElement;
    usernameInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    let errorMessage = document.getElementById('show-password-button');

    if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
      this.usernameError = true;

      if (!usernameInput.value.trim()) {
        usernameInput.style.borderColor = 'red';
      }
      if (!passwordInput.value.trim()) {
        passwordInput.style.borderColor = 'red';
      }

      if (errorCube) {
        errorCube.style.display = 'none';
      }
      if (errorMessage) {
        errorMessage.style.top = '465px';
        passwordInput.style.marginTop = '10px';
      }
    } else {
      this.usernameError = false;

      if (errorMessage) {
        errorMessage.style.top = '';
        passwordInput.style.marginTop = '';
      }


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

  togglePasswordVisibility() {
    let passwordInput = document.getElementById('password') as HTMLInputElement;

    if (this.isPasswordVisible) {
      passwordInput.type = 'password';
      this.isPasswordVisible = false;
    } else {
      passwordInput.type = 'text';
      this.isPasswordVisible = true;
    }
  }

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
    let modal = document.getElementById('auth-page-modal-cube');
    let triangle = document.getElementById('triangle');
    if (modal) {
      modal.style.display = this.isModalVisible ? 'block' : 'none';
    }
    if (triangle) {
      triangle.style.display = this.isModalVisible ? 'block' : 'none';
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
