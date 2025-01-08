import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vacancies-fourth',
  templateUrl: './vacancies-fourth.component.html',
  styleUrl: './vacancies-fourth.component.scss'
})
export class VacanciesFourthComponent {
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
