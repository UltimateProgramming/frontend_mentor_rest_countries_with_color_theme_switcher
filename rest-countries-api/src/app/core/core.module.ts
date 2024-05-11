import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RestService } from './services/rest/rest.service'
import { CountryService } from './services/country/country.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [RestService, CountryService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }

  private throwIfAlreadyLoaded(parentModule: CoreModule, moduleName: string) {
    if (parentModule) {
      throw new Error(
        `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
      )
    }
  }
}
