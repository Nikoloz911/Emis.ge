import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  constructor(
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
isActive: boolean = false; 

activeDropdown: HTMLElement | null = null;  

  toggleDropdown(event: Event) {
    let clickedCard = event.currentTarget as HTMLElement;
    let faqContainer = document.getElementById("faq-container");

    if (this.activeDropdown === clickedCard) {
    
      if (faqContainer) {
        faqContainer.classList.add('collapsing');
        faqContainer.classList.remove('expanding');
        faqContainer.style.height = '2700px'; 
        setTimeout(() => {
          faqContainer.classList.remove('collapsing');
        }, 300); 
      }
      clickedCard.classList.remove('active');
      this.activeDropdown = null;
    } else {
     
      if (this.activeDropdown) {
        let previousFaqContainer = document.getElementById("faq-container");
        if (previousFaqContainer) {
          previousFaqContainer.classList.add('collapsing');
          previousFaqContainer.classList.remove('expanding');
          previousFaqContainer.style.height = '0px'; 
          setTimeout(() => {
            previousFaqContainer.classList.remove('collapsing');
          }, 300); 
        }
        this.activeDropdown.classList.remove('active');
      }

      
      if (faqContainer) {
        faqContainer.classList.add('expanding');
        faqContainer.classList.remove('collapsing');
        let contentHeight = faqContainer.scrollHeight; 
        faqContainer.style.height = `${contentHeight}px`; 
        clickedCard.classList.add('active');
        this.activeDropdown = clickedCard;
      }
    }
  }
  
}
