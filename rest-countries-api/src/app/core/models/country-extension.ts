import { Border } from './border'
import { Country } from './country'

export interface CountryExtension extends Country {
  borderObjects: Border[]
}
