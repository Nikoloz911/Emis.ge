import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.scss'
})
export class StructureComponent {
  onFacebookClick(): void {
    alert('No Link');
  }

  onLinkedInClick(): void {
    alert('No Link');
  }
}
