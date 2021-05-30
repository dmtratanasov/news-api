import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,InfiniteScrollModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
