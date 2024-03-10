import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  imports: [ FormsModule, CommonModule ],
  standalone: true,
})
export class GoalsComponent {
  selectedValue: string = 'default';
  buttonAVisible: boolean = false;
  buttonBVisible: boolean = false;
  buttonCVisible: boolean = false;
  buttonDVisible: boolean = false;

  toggleButtonVisibility(): void {
    this.buttonAVisible = false;
    this.buttonBVisible = false;
    this.buttonCVisible = false;
    this.buttonDVisible = false;
  
    switch (this.selectedValue) {
      case 'A':
        this.buttonAVisible = true;
        break;
      case 'B':
        this.buttonBVisible = true;
        break;
      case 'C':
        this.buttonCVisible = true;
        break;
      case 'D':
        this.buttonDVisible = true;
        break;
      default:
        break;
    }
  }
  
}
