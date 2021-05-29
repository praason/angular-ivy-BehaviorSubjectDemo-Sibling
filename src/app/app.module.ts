import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilterComponent } from './filter/filter.component';
import { ResultComponent } from './result/result.component';
import { DataserviceService } from './dataservice.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FilterComponent, ResultComponent],
  bootstrap: [AppComponent],
  providers: [DataserviceService]
})
export class AppModule {}
