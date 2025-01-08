import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vacancies-third',
  templateUrl: './vacancies-third.component.html',
  styleUrl: './vacancies-third.component.scss'
})
export class VacanciesThirdComponent {
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
