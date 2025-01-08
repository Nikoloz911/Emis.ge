import { Component } from '@angular/core';
import { EmisService } from '../../service/emis.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  address: string = '';
  openStatus: string = '';
  phone: string = '';
  email: string = '';
  socials: { facebook: string | null; youtube: string | null; twitter: string | null } = { facebook: null, youtube: null, twitter: null };
  constructor(private _emisService: EmisService) {}


  ngOnInit(): void {
    this.loadFooterData();
  }

  private loadFooterData(): void {
    this._emisService.getContacts().subscribe({
      next: (response: any) => {
        this.address = response.data.address;
        this.openStatus = response.data.open_status;
        this.phone = response.data.phone;
        this.email = response.data.email;
        this.socials = response.data.socials;
      },
    });
  }
}
