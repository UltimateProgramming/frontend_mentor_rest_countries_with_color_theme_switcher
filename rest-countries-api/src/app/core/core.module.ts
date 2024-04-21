import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  private throwIfAlreadyLoaded(parentModule: CoreModule, moduleName: string) {
    if (parentModule) {
      throw new Error(
        `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
      );
    }
  }
}
