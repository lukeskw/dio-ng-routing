import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioId: string|null = "";

  constructor(
    private route: ActivatedRoute,
    private browser: Router
    ) {}

  ngOnInit() {
    this.route?.firstChild?.paramMap.subscribe(params => {
      console.log('param', params)
      this.portfolioId = params.get('id');
    });

    console.log(this.portfolioId)

    this.route?.firstChild?.queryParamMap.subscribe(params => {
      console.log(params)
    })


    // setInterval(()=> {
    //   this.browser.navigate(['/'])
    // }, 10000)
  }
}
