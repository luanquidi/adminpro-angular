import { NgModule } from "@angular/core";

//Modulos
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Rutas de la Pagina
import { PAGES_ROUTES } from './pages.routes';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        ComponentsModule,
        ChartsModule,
    ]
})

export class PagesModule {}