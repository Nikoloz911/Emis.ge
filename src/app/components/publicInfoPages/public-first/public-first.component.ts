import { Component } from '@angular/core';

@Component({
  selector: 'app-public-first',
  templateUrl: './public-first.component.html',
  styleUrl: './public-first.component.scss'
})
export class PublicFirstComponent {
  dropdowns = [
    { title: 'ზოგადი ინფორმაცია', description: 'საჯარო ინფორმაცია ამ წლით და კათეგორიით ვერ მოიძებნა', items: [
      'წლიური ანგარიში', 
      'სტრუქტურა',
      'სტრატეგია, კონცეფცია, სამოქმედო გეგემა',
      'საკონტაქტო ინფორმაცია',
      'სამართებლივი აქტები',
      'ხელმძღვანელი პირები',
      'მიზნები და ფუნქციები',

    ] },
    { title: 'საჯარო ინფორმაციის გვერდი', description: 'სსიპ - განათლების მართვის საინფორმაციო სისტემის მიზნები და ფუნქციები', items: [
      'ყოველწლიური ანგარიში', 
      'საჯარო ინფორმაციის ხელმისაწვდომობის უზრუნველყოფაზე პასუხისმგებელი პირები',
      'სამართებლივი აქტები',
      'ზოგადი სტატისტიკა',
      'გასაჩივრების წესი',
      'ადმინისტრაციული საჩივრის ფორმა',
    ] },
    { title: 'ინფორმაცია საკადრო უზრუნველყოფის შესახებ', description: 'საჯარო ინფორმაცია ამ წლით და კათეგორიით ვერ მოიძებნა', items: [
      'ნორმატიული აქტები',
      'თანამშრომლები',
      'ვაკანსიები',

    ] },
    { title: 'ინფორმაცია განხორციელებული სახელმწიფო შესყიდვებისა და სახელმწიფო ქონების პრივატიზების შესახებ', description: 'სახ.შესყიდვების წლიური გეგმა', items: [
      'სახელმწიფო შესყიდვის წლიური გეგმა', 
      'რეკლამის განთავსებაზე გაწეული ხარჯები',
      'ინფორმაცია სახელმწიფო ქონების განთვისებისა და სარგებლობაში გადაცემის შესახებ',
      'ინფორმაცია განხორციელებული სახელმწიფო შესყიდვების შესახებ',
    ] },
    { title: 'ინფორმაცია დაფინანსების და ხარჯთაღრიცხვის შესახებ', description: 'საჯარო ინფორმაცია ამ წლით და კათეგორიით ვერ მოიძებნა', items: [
      'Item 9', 
      'Item 10'
    ] },
    { title: 'სამართებლივი აქტები', description: 'საჯარო ინფორმაცია ამ წლით და კათეგორიით ვერ მოიძებნა', items: ['არქივი: სამართებლივი აქტები',] },
    { title: 'სხვა საჯარო ინფორმაცია', description: 'საჯარო ინფორმაცია ამ წლით და კათეგორიით ვერ მოიძებნა', items: ['სერვისები', 'ინფორმაცია ტარიფის/საფასურის შესახებ'] },
  ];
  
  activeDropdown: number | null = null; 
  selectedDropdownIndex: number | null = null; 
  selectedItemIndex: number | null = null; 
  autoOpenDisabled: boolean = false;
  
  ngOnInit() {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 480 && screenWidth <= 768) {
      this.autoOpenDisabled = true;
    } else {
      this.autoOpenDisabled = false; 
    }
    if (!this.autoOpenDisabled) {
      this.activeDropdown = 0;
      this.selectedDropdownIndex = 0;
      this.selectedItemIndex = 0;
    }
  }
  
  toggleDropdown(index: number) {
    if (this.activeDropdown === index) {
      this.activeDropdown = null; 
    } else {
      this.activeDropdown = index;
    }
  }
  
  selectItem(dropdownIndex: number, itemIndex: number, event: MouseEvent) {
    event.stopPropagation(); 
    this.selectedDropdownIndex = dropdownIndex;
    this.selectedItemIndex = itemIndex;
  }
  
}
