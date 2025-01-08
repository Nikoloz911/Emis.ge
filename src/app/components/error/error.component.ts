import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  isModalOpen = false;


  openModal(): void {
    this.isModalOpen = true;
    
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
