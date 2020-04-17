import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// PWA
import { ServiceWorkerModule } from '@angular/service-worker';
// Carousel
import { OwlModule } from 'ngx-owl-carousel';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ClientComponent } from './components/client/client.component';
import { DownloadComponent } from './components/download/download.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ScreenshotComponent } from './components/screenshot/screenshot.component';
import { VideoComponent } from './components/video/video.component';
import { ScrollDirective } from './directives/scroll/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    VideoComponent,
    ScreenshotComponent,
    DownloadComponent,
    ClientComponent,
    FooterComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
