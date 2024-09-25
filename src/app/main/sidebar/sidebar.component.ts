import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../../app/coin-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  coins: any[] = [];

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.getCoins().subscribe((data) => {
      this.coins = data.data;
    });
  }

  openCoin(coin:any, price: any){
    alert(coin + price);
  }
}
