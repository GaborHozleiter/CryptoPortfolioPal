import { Component, ViewChild, ElementRef } from '@angular/core';
import { CoinService } from '../../../coin-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {

  coins: any[] = [];

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.getCoins().subscribe((data) => {
      this.coins = data.data;
    });
  }

  @ViewChild('coinContainer') coinContainer!: ElementRef;

  scrollLeft() {
    this.coinContainer.nativeElement.scrollBy({
      left: -150, 
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.coinContainer.nativeElement.scrollBy({
      left: 150, 
      behavior: 'smooth'
    });
  }
}
