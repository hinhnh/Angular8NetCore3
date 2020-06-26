import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

import { WeatherForecast } from '../models/weather-forecast-model';
import { FetchDataService } from '../fetch-data/fetch-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit, OnDestroy {
  public forecasts: WeatherForecast[];
  subFetchService: Subscription;
  constructor(private fetchService: FetchDataService) {

  }
   
    ngOnInit(): void {

      console.log(this.fetchService.getWeatherForecast);

      this.subFetchService = this.fetchService.getWeatherForecast().subscribe(result => {

        this.forecasts = result;
      },
        error => {
          console.error(error);
        }
      )

    }

  ngOnDestroy(): void {
    if (this.subFetchService) this.subFetchService.unsubscribe();
  }



}

