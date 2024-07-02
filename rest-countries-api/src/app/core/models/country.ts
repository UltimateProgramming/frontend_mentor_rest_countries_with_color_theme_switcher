import { Flag } from './flag'
import { Name } from './name'

export interface Country {
  name: Name
  population: number
  region: string
  subregion: string
  capital: string
  tld: string
  currencies: object
  borders: string[]
  flags: Flag
  languages: object
}
