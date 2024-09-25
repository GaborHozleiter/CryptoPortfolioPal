import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  goToDashboard() {
    alert('Dashboard clicked');
  }

  goToMarkets() {
    alert('Markets clicked');
  }

  goToPriceCharts() {
    alert('Price Charts clicked');
  }

  goToPortfolio() {
    alert('Portfolio clicked');
  }

  goToNews() {
    alert('News clicked');
  }

  goToTopTrades() {
    alert('Top Trades/Signals clicked');
  }

  goToSettings() {
    alert('Settings clicked');
  }

  goToLogin() {
    alert('Login clicked');
  }
}
