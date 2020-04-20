import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Api1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Api1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Api1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Api1SharedModule {
  static forRoot() {
    return {
      ngModule: Api1SharedModule
    };
  }
}
