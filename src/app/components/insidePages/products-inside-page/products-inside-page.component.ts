import { Component, OnInit } from '@angular/core';
import { EmisService } from '../../../service/emis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-inside-page',
  templateUrl: './products-inside-page.component.html',
  styleUrl: './products-inside-page.component.scss'
})
export class ProductsInsidePageComponent implements OnInit {
  productDetails: any; 

  constructor(
    private route: ActivatedRoute,
    private apiService: EmisService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.scrollToTop();
    let productId = this.route.snapshot.params['id'];
    if (productId) {
      this.apiService.getInsideProducts(productId).subscribe(
        (response: any) => {
          this.productDetails = response.data; 
        },
      );
    }
  }
  scrollToTop(): void {
    window.scrollTo(0,0);
  }
  goBack(): void {
    this.location.back();
  }

  onFacebookClick(): void {
    alert('There was No API');
  }

  onLinkedInClick(): void {
    alert('There was No API');
  }
}
