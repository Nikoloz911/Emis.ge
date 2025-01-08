import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancies-first',
  templateUrl: './vacancies-first.component.html',
  styleUrl: './vacancies-first.component.scss'
})
export class VacanciesFirstComponent {
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
