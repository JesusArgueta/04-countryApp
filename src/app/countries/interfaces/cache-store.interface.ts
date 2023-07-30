import { Country } from "./country";

export interface CacheStore{
  byCapital:TermCountries;
  byCountries:TermCountries;
  byRegion:TermRegion;
}

export interface TermCountries{
  term?:string;
  countries:Country[];
}

interface TermRegion {
  region: string;
  countries: Country[];
}

