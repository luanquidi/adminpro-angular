import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
       IncrementadorComponent,
       GraficaDonaComponent
    ],
    exports: [
       IncrementadorComponent,
       GraficaDonaComponent
    ],
    imports: [
        FormsModule,
        ChartsModule
    ]
})

export class ComponentsModule {}