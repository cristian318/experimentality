import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { StaticContentComponent } from './components/static-content/static-content.component';
import { MenuComponent } from './components/menu/menu.component';
import { MostWantedProductsComponent } from './components/most-wanted-products/most-wanted-products.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ProductComponent,
    FooterComponent,
    StaticContentComponent,
    MenuComponent,
    MostWantedProductsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
