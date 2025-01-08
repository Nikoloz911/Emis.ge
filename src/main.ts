import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  
  // https://www.emis.ge/ განათლების სამინისტროს ვებსაიტი


  // გვაქვს შემდეგი ენდფოინთები
  // კონტქატების სია
  // https://emis-api.emis.ge/api/contact
  
  // პოსტების ჩამონათვალი
  // https://emis-api.emis.ge/api/posts?take=10
  
  
  // პროდუქტების ჩამონათვალი
  // https://emis-api.emis.ge/api/products?take=10
  
  // პოპულარული ლინკები
  // https://emis-api.emis.ge/api/popular-links
  
  // პარტნიორი კომპანიები
  // https://emis-api.emis.ge/api/partners
  
  // სტატისტიკა
  // https://emis-api.emis.ge/api/stats
  
  
  // შიდა გვერდებისთვის
  
  // პოსტის აიდით წამოღება
  // https://emis-api.emis.ge/api/products/68
  
  // სერვისის აიდით წამოღება
  // https://emis-api.emis.ge/api/services/19
  
  // პოსტების სიის წამოღება
  // https://emis-api.emis.ge/api/posts?per_page=6&page=1
  
  // პოსტის დეტალების წამოღება
  // https://emis-api.emis.ge/api/posts/80
  