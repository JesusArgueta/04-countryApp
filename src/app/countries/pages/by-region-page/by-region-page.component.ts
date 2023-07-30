import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[]=[];
  public regions: string[]=['Africa','Americas','Asia','Europe', 'Oceania'];
  public selectedRegion?: string;

  constructor(private countryService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion  = this.countryService.cacheStore.byRegion.region;
  }

  searchRegion(term: string):void{
    this.selectedRegion=term;
    this.countryService.searchRegion(term)
    .subscribe(countries =>{
      this.countries = countries;
    });
  }

}
