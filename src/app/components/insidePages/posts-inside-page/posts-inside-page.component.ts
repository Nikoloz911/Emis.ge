import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { EmisService } from '../../../service/emis.service';
@Component({
  selector: 'app-posts-inside-page',
  templateUrl: './posts-inside-page.component.html',
  styleUrls: ['./posts-inside-page.component.scss']
})
export class PostsInsidePageComponent implements OnInit {
  postDetails: any;
  formattedDescription: SafeHtml = '';
  fontSize: number = 13; 
  constructor(
    private route: ActivatedRoute,
    private _emisService: EmisService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit() {
    this.scrollToTop();
    const postId = this.route.snapshot.params['id'];
    this._emisService.getInsidePostsDetails(postId).subscribe(
      (response: any) => {
        this.postDetails = response.data.post; 
        this.updateDescription(); 
      }
    );
  }
  scrollToTop(): void {
    window.scrollTo(0,0);
  }
  goBack(): void {
    this.location.back();
  }

  stripHtml(html: string): string {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  formatDescription(text: string): SafeHtml {
    let sentences = text.split(/(?<=[./])\s+/);
    let formattedText = sentences.map(sentence => {
      let linkedSentence = sentence.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" style="color: blue; text-decoration: none;">$1</a>');
      return `<p style="font-size: ${this.fontSize}px; margin-top: 20px;">${linkedSentence}</p>`;
    }).join('');
    return this.sanitizer.bypassSecurityTrustHtml(formattedText); 
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
    if (this.postDetails) {
      this.formattedDescription = this.formatDescription(this.stripHtml(this.postDetails.description));
    }
  }
  onFacebookClick(): void {
    alert('There was No API');
  }

  onLinkedInClick(): void {
    alert('There was No API');
  }
}
