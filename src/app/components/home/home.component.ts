import { Component} from '@angular/core';
//
import { interval, Subscription } from 'rxjs';
import { EmisService } from '../../service/emis.service';
import { IProduct } from '../../interfaces/products.model';
//

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // FOR API
  products: any[] = [];
  popularLinks: any[] = [];
  partners: any[] = [];
  stats: any = {};
  institutionData: { [key: string]: number } = {};
  // FOR API
  linkUrls: { [key: number]: string } = {
    29: 'https://students.emis.ge/',
  23: '/auth',
  25: 'https://eqe.ge/ka',
  27: 'https://mes.gov.ge/',
  24: 'https://directors.mes.gov.ge/',
  22: 'https://skolebi.emis.ge/',  /// პროექტი გავაკეთე
  };
  error: string | null = null;
  tooltipTimer: any = null;
  tooltipVisible: boolean = false;
  tooltipOffset = 50;
isDragging = false;
startX = 0;
scrollLeft = 0;
previousCard: HTMLElement | null = null;  
isBurgerMenuActive = false;


constructor(private _emisService: EmisService) {}
ngOnInit(): void {
  this.loadProducts();
  this.loadPopularLinks();
  this.startAutoSlide();
  this.loadPartners();
  this.loadStats();

  let scrollLeftButton = document.querySelector('#scroll-left') as HTMLElement;
  let scrollRightButton = document.querySelector('#scroll-right') as HTMLElement;

  if (scrollLeftButton) {
    scrollLeftButton.addEventListener('click', () => this.scrollLeftProducts());
  }

  if (scrollRightButton) {
    scrollRightButton.addEventListener('click', () => this.scrollRightProducts());
  }
}

// API FOR CARDS
private loadProducts(): void {
  this._emisService.getProducts().subscribe({
    next: (response: any) => {
      if (Array.isArray(response.data)) {
        this.products = response.data;
      } 
    },
   
  });
}
private loadPopularLinks(): void {
  this._emisService.getPopularLinks().subscribe({
    next: (response: any) => {
      if (Array.isArray(response.data)) {
        
        this.popularLinks = response.data.map((item: any) => {
          let url = this.linkUrls[item.id];     
          return {
            ...item,
            url: url
          };
        });
      }
    },
  });
}

private loadPartners(): void {
  this._emisService.getPartners().subscribe({
    next: (response: any) => {
      this.partners = response.data;
    }
  })
}
private loadStats(): void {
  this._emisService.getStatistic().subscribe({
    next: (response: any) => {
      this.stats = response.data.public_school;

     
      let institutions = response.data.institution;

     
      this.institutionData = institutions.reduce((acc: { [key: string]: number }, item: [string, number]) => {
        acc[item[0]] = item[1];
        return acc;
      }, {});
    }
  });
}
// API FOR CARDS
// SCROLL ARROWS ON popular Links Container

scrollLeftLink(containerSelector: string, cardSelector: string): void {
  let container = document.querySelector(containerSelector) as HTMLElement;
  let cardWidth = container.querySelector(cardSelector)?.clientWidth || 0;

  container.scrollTo({
    left: container.scrollLeft - cardWidth,
    behavior: 'smooth'
  });

  setTimeout(() => {
    if (container.scrollLeft < cardWidth) {
      container.scrollLeft = container.scrollWidth - container.clientWidth;
    }
  }, 300);
}

scrollRightLink(containerSelector: string, cardSelector: string): void {
  let container = document.querySelector(containerSelector) as HTMLElement;
  let cardWidth = container.querySelector(cardSelector)?.clientWidth || 0;

  container.scrollTo({
    left: container.scrollLeft + cardWidth,
    behavior: 'smooth'
  });

  setTimeout(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }
  }, 300);
}

scrollLeftPartners() {
  this.scrollLeftLink('.partners-products-container', '.partners-card');
}

scrollRightPartners() {
  this.scrollRightLink('.partners-products-container', '.partners-card');
}
scrollLeftProducts() {
  this.scrollLeftLink('#products-section', '#products-card');
}

scrollRightProducts() {
  this.scrollRightLink('#products-section', '#products-card');
}
// SCROLL ARROWS ON popular Links Container
/// PRODUCT CARDS SCROLL ///
onMouseDownScroll(event: MouseEvent) {
  this.isDragging = true;
  this.startX = event.pageX - (event.currentTarget as HTMLElement).offsetLeft;
  this.scrollLeft = (event.currentTarget as HTMLElement).scrollLeft;
  
  let card = event.target as HTMLElement;
  let cardElement = card.closest('.products-card') as HTMLElement;

  if (cardElement) {
   
    if (this.previousCard && this.previousCard !== cardElement) {
      this.previousCard.style.border = '';
    }

    cardElement.style.border = '1px solid blue';
    this.previousCard = cardElement;
  }

  (event.currentTarget as HTMLElement).classList.add('dragging'); 

 
  event.preventDefault();
}


onMouseMoveScroll(event: MouseEvent): void {
  if (!this.isDragging) return;

  let container = event.currentTarget as HTMLElement;
  let x = event.pageX - container.offsetLeft;
  let walk = (x - this.startX) * 2; 
  container.scrollLeft = this.scrollLeft - walk;

  event.preventDefault();
}

onMouseUpScroll(event: MouseEvent): void {
  this.isDragging = false;
  (event.currentTarget as HTMLElement).classList.remove('dragging');

  if (this.previousCard) {
    this.previousCard.style.border = '';
  }
  this.previousCard = null;
}

onMouseLeaveScroll(event: MouseEvent): void {
  this.isDragging = false;
  (event.currentTarget as HTMLElement).classList.remove('dragging');

  if (this.previousCard) {
    this.previousCard.style.border = '';
  }
  this.previousCard = null;
}

onClickCard(event: MouseEvent): void {
 
  if (this.isDragging) {
    event.preventDefault(); 
  }
}
/// PRODUCT CARDS SCROLL ///

  /// TOOTLIP ON MOUSE ON HOME PAGE PRODUCTS CARDS ///
  onMouseEnter(event: MouseEvent) {
    let card = (event.currentTarget as HTMLElement);
    
   
    clearTimeout(this.tooltipTimer);

    let tooltip = card.querySelector('.tooltip') as HTMLElement;
    if (tooltip) {
      this.tooltipVisible = true;
      this.updateTooltipPosition(event, tooltip, card);
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
      tooltip.style.transition = 'opacity 0.9s ease-in-out, visibility 0.9s linear 0.9s'; 
    }

   
    card.addEventListener('mousemove', this.onMouseMove.bind(this));
    card.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

 
  onMouseLeave(event: MouseEvent) {
    clearTimeout(this.tooltipTimer);
    let card = (event.currentTarget as HTMLElement);
    let tooltip = card.querySelector('.tooltip') as HTMLElement;
    if (tooltip) {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
      tooltip.style.transition = 'opacity 0.5s ease-in-out, visibility 0s linear 0.5s';
    }
    this.tooltipVisible = false; 
    card.removeEventListener('mousemove', this.onMouseMove.bind(this));
    card.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  
  onMouseMove(event: MouseEvent) {
    let card = event.currentTarget as HTMLElement;
    let tooltip = card.querySelector('.tooltip') as HTMLElement;
    if (tooltip && this.tooltipVisible) {
      this.updateTooltipPosition(event, tooltip, card);   
    }
  }
  updateTooltipPosition(event: MouseEvent, tooltip: HTMLElement, card: HTMLElement) {
    let rect = card.getBoundingClientRect();
    tooltip.style.left = `${event.clientX - rect.left}px`;
    tooltip.style.top = `${event.clientY - rect.top + 10}px`; 
  }
  /// TOOTLIP ON MOUSE ON HOME PAGE PRODUCTS CARDS ///

  
  /// HOME PAGE CAROUSEL ///
  items = [
    { id: 108, image: 'https://emis-api.emis.ge/storage/media/1291/%E1%83%93%E1%83%98%E1%83%93%E1%83%98.png', text: 'ცხადდება რიგგარეშე მობილობა აბიტურიენტებისა და მობილობის მსურველი იმ პირებისათვის, რომლებმაც, 2024-2025 სასწავლო წლისათვის, ჩარიცხვის უფლება მოიპოვეს შპს დავით აღმაშენებლის სახელობის უნივერსიტეტში.' }, 
    { id: 107, image: 'https://emis-api.emis.ge/storage/media/1288/%E1%83%A1%E1%83%98%E1%83%90%E1%83%AE%E1%83%9A%E1%83%94%E1%83%94%E1%83%91%E1%83%98-2024-Recovered.png', text: 'სახელოვნებო-შემოქმედებით ან სასპორტო საგანმანათლებლო პროგრამებზე მობილობაში მონაწილე სტუდენტების საყურადღებოდ!' }, 
    { id: 106, image: 'https://emis-api.emis.ge/storage/media/1289/vet.emis.ge.png', text: 'პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრაციის მსურველთათვის'},
    { id: 104, image: 'https://emis-api.emis.ge/storage/media/1272/%E1%83%A2%E1%83%A0%E1%83%90%E1%83%9F%E1%83%98%E1%83%A0%E1%83%94%E1%83%91%E1%83%90-%E1%83%93%E1%83%98%E1%83%93%E1%83%98.webp', text: 'კურსდამთავრებულთა სტაჟირების პროგრამის ფარგლებში განაცხადების მიღება იწყება' },
    { id: 103, image: 'https://emis-api.emis.ge/storage/media/1274/%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%95%E1%83%90%E1%83%99%E1%83%90%E1%83%9C%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%90%E1%83%93%E1%83%92%E1%83%98%E1%83%9A%E1%83%94%E1%83%91%E1%83%98!.webp', text: 'მობილობის ვაკანტური ადგილები!' },
    { id: 101, image: 'https://emis-api.emis.ge/storage/media/1278/mobiloba-3.webp', text: 'სტუდენტთა მობილობა' },
    { id: 102, image: 'https://emis-api.emis.ge/storage/media/1276/Screenshot-2024-07-15-171247-(1)-(1).webp', text: 'გამოცხადდა მიღება 2024-2025 სასწავლო წლისთვის მასწავლებლის მომზადების საგანმანათლებლო პროგრამაზე' }, 
    { id: 97, image: 'https://emis-api.emis.ge/storage/media/1158/jpeg-optimizer-students-knowing-right-answer-664af7b1c506c-1_1075x574-(1).webp', text: 'საჯარო სკოლებში პირველკლასელთა რეგისტრაცია იწყება – 2024-2025' },
    { id: 96, image: 'https://emis-api.emis.ge/storage/media/1105/1674393763-lid11bbv-1-664af7a2dd7c1.webp', text: 'საჯარო სკოლის დირექტორების კონკურსი' },
    { id: 80, image: 'https://emis-api.emis.ge/storage/media/1133/kids-using-laptop-school-23-2148666211-664af7b4f15de-(1).webp', text: 'გაიგეთ როგორ გამოიყენოთ საბავშვო ბუკები' }, 
  ];
  currentIndex = 0;
  autoSlideSubscription: Subscription | undefined;
  ngOnDestroy() {
    this.stopAutoSlide(); 
  }
  startAutoSlide() {
    this.stopAutoSlide(); 
    this.autoSlideSubscription = interval(6000).subscribe(() => {
      this.next();
    });
  }
  stopAutoSlide() {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }
  resetAutoSlide() {
    this.startAutoSlide();
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.resetAutoSlide();
  }
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.resetAutoSlide(); 
  }
  /// HOME PAGE CAROUSEL ///
}
