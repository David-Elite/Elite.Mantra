import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ServiceComponent } from './layout/service/service.component';
import { BlogComponent } from './layout/blog/blog.component';
import { ClientComponent } from './layout/client/client.component';
import { TestimonialComponent } from './layout/testimonial/testimonial.component';
import { OurServicesComponent } from './layout/our-services/our-services.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    ServiceComponent,
    BlogComponent,
    ClientComponent,
    TestimonialComponent,
    OurServicesComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
