import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  title = 'Lifting Calculator';
  weight: number = 0; // Set the type of val to number
  reps: number = 0;
  val = 0;
  

    calcWeight() {
      if (!isNaN(this.reps)) {
        if (this.reps == 1) {
          this.val = this.weight * 1;
        } else if (this.reps == 2) {
          this.val = this.weight / 0.95;
        } else if (this.reps == 3) {
          this.val = this.weight / 0.925;
        } else if (this.reps == 4) {
          this.val = this.weight / 0.9;
        } else if (this.reps == 5) {
          this.val = this.weight / 0.875;
        } else if (this.reps == 6) {
          this.val = this.weight / 0.85;
        } else if (this.reps == 7) {
          this.val = this.weight / 0.825;
        } else if (this.reps == 8) {
          this.val = this.weight / 0.8;
        } else if (this.reps == 9) {
          this.val = this.weight / 0.775;
        } else if (this.reps == 10) {
          this.val = this.weight / 0.75;
        } else if (this.reps == 11) {
          this.val = this.weight / 0.725;
        } else if (this.reps == 12) {
          this.val = this.weight / 0.7;
        } else if (this.reps > 13 && this.reps < 15) {
          this.val = this.weight / 0.675;
        } else if (this.reps > 15) {
          alert("Reps shouldnt be above 15")
        }
      }
      this.val = Math.round(this.val);
    }
}
