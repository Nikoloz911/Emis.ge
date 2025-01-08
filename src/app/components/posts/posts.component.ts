import { Component, OnInit, Renderer2 } from '@angular/core';
import { EmisService } from '../../service/emis.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  filteredPosts: any[] = [];
  showMore: boolean = false;
  containerHeight: number;
  bodyHeightIncrement: number;
  currentPage: number = 1;

  constructor(
    private _emisService: EmisService, 
    private renderer: Renderer2, 
    private router: Router, 
    private location: Location
  ) {this.containerHeight = 0;
    this.bodyHeightIncrement = 0;}

  ngOnInit() {
    this.setInitialHeight(); 
    this.loadPosts(this.currentPage);
  }

  setInitialHeight() {
    if (window.innerWidth <= 480) {
      this.containerHeight = 1050;
      this.bodyHeightIncrement = 1090;
    } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
      this.containerHeight = 1600; 
      this.bodyHeightIncrement = 1650; 
    } else {
      this.containerHeight = 800; 
      this.bodyHeightIncrement = 840; 
    }
    let bodyDiv = document.querySelector('.body') as HTMLElement;
    this.renderer.setStyle(bodyDiv, 'minHeight', `${this.containerHeight}px`);
  }
  

  loadPosts(page: number) {
    this._emisService.getInsidePostsList(page).subscribe((response: any) => {
      this.filteredPosts = [...this.filteredPosts, ...response.data];
    });
  }

  showMorePosts() {
    this.currentPage++;
    this.loadPosts(this.currentPage);

    this.containerHeight += this.bodyHeightIncrement;

    let bodyDiv = document.querySelector('.body') as HTMLElement;
    let currentBodyHeight = bodyDiv.offsetHeight;
    this.renderer.setStyle(bodyDiv, 'minHeight', `${currentBodyHeight + this.bodyHeightIncrement}px`);
  }
  goBack(): void {
    this.location.back();
  }
}
