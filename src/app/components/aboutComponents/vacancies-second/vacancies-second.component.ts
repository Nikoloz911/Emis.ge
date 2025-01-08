import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vacancies-second',
  templateUrl: './vacancies-second.component.html',
  styleUrl: './vacancies-second.component.scss'
})
export class VacanciesSecondComponent {
  constructor(
    private location: Location
  ) {}
  onFacebookClick(): void {
    alert('No Link');
  }

  onLinkedInClick(): void {
    alert('No Link');
  }
  goBack(): void {
    this.location.back();
  }
}
