import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { EmisService } from '../../../service/emis.service';

@Component({
  selector: 'app-products-service-inside-page',
  templateUrl: './products-service-inside-page.component.html',
  styleUrls: ['./products-service-inside-page.component.scss']
})
export class ProductsServiceInsidePageComponent implements OnInit {
  serviceDetails: any;
  formattedDescription: SafeHtml = '';
  fontSize: number = 13; 
  loadingError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _emisService: EmisService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.scrollToTop();
    let serviceId = this.route.snapshot.params['id'];
    this._emisService.getInsideService(+serviceId).subscribe(
      (response: any) => {
        this.serviceDetails = response.data.service;
        this.updateDescription();
      },
      (error) => {
        console.error('Error fetching service details:', error);
        this.loadingError = true;
      }
    );
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  goBack(): void {
    this.location.back();
  }

  private decodeHtmlEntities(text: string): string {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

  private formatDescription(text: string): SafeHtml { 
    let decodedText = this.decodeHtmlEntities(text);
    let formattedText = decodedText
    return this.sanitizer.bypassSecurityTrustHtml(`<p style="font-size: ${this.fontSize}px; margin-top: 20px;">${formattedText}</p>`);
  }

  increaseFontSize(): void {
    this.fontSize += 2;
    this.updateDescription();
  }

  decreaseFontSize(): void {
    if (this.fontSize > 6) {
      this.fontSize -= 2;
      this.updateDescription();
    }
  }

  private updateDescription(): void {
    if (this.serviceDetails && this.serviceDetails.description) {
      this.formattedDescription = this.formatDescription(this.serviceDetails.description);
    }
  }
  onFacebookClick(): void {
    alert('There was No API');
  }

  onLinkedInClick(): void {
    alert('There was No API');
  }
}
