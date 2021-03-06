import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { SearchInputComponent } from './components/search-input/search-input.component';

import { SwiperModule } from 'swiper/angular';
import { CartComponent } from './components/cart/cart.component';

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
    SearchComponent,
    SearchInputComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
