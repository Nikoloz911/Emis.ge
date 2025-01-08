import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  onFacebookClick(): void {
    alert('No Link');
  }

  onLinkedInClick(): void {
    alert('No Link');
  }
}
