import { NgModule } from '@angular/core';

import { PrlVaultSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PrlVaultSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PrlVaultSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PrlVaultSharedCommonModule {}
