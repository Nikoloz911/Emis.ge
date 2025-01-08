import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isModalOpen = false;
  title = 'lightToggle';
  darkMode = true;
  menuOpen: boolean = false;
  isDropdownOpen: number | null = null;
  
 
  constructor(private router: Router) {
    this.detectColorScheme();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      
        this.applyTheme();
      }
    });
  }
/// BURGER - MNEU ///
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleDropdown(dropdownNumber: number) {
    this.isDropdownOpen = this.isDropdownOpen === dropdownNumber ? null : dropdownNumber;
  }
/// BURGER - MNEU ///
  
  applyTheme() {
    let theme = this.darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    let url = this.router.url;  
  
    let textNews = document.getElementById('text-news');
    let textPublicInfo = document.getElementById('text-public-info');
    let textContact = document.getElementById('text-contact');
  
    // Dark mode 
    if (this.darkMode) {
      if (textNews) {
        textNews.style.color = url === '/posts' ? 'white' : '#8e8e8e'; 
      }
      if (textPublicInfo) {
        textPublicInfo.style.color = url === '/public-info' ? 'white' : '#8e8e8e'; 
      }
      if (textContact) {
        textContact.style.color = '#8e8e8e'; 
      }
    } 
    // Light mode 
    else {
      if (textNews) {
        textNews.style.color = url === '/posts' ? 'black' : '#333'; 
      }
      if (textPublicInfo) {
        textPublicInfo.style.color = url === '/public-info' ? 'black' : '#333'; 
      }
      if (textContact) {
        textContact.style.color = '#333'; 
      }
    }
  }
  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }
  detectColorScheme() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark';
    } else {
      this.darkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
          ? false
          : true;
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.applyTheme();
  }
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  scrollToBottom(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });

    let textContact = document.getElementById('text-contact');
    if (textContact) {
      textContact.style.color = 'white';
    }
  }
}
