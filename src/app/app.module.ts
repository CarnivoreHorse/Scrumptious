import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { ScrumptiousAgileComponent } from './components/app-container/scrumptious-agile-app/scrumptious-agile/scrumptious-agile.component';
import { ScrumptiousAgileHeaderComponent } from './components/app-container/scrumptious-agile-app/scrumptious-agile/scrumptious-agile-header/scrumptious-agile-header.component';
import { ScrumptiousAgileNavComponent } from './components/app-container/scrumptious-agile-app/scrumptious-agile/scrumptious-agile-nav/scrumptious-agile-nav.component';
import { ScrumptiousAgileDashboardComponent } from './components/app-container/scrumptious-agile-app/scrumptious-agile/scrumptious-agile-dashboard/scrumptious-agile-dashboard.component';
import { ScrumptiousAgileProductComponent } from './components/app-container/scrumptious-agile-app/scrumptious-agile/scrumptious-agile-dashboard/scrumptious-agile-product/scrumptious-agile-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppContainerComponent,
    ScrumptiousAgileComponent,
    ScrumptiousAgileHeaderComponent,
    ScrumptiousAgileNavComponent,
    ScrumptiousAgileDashboardComponent,
    ScrumptiousAgileProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
