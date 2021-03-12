import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SubscribeComponent} from "../../components/subscribe/subscribe.component";

@NgModule({
  declarations: [
      SubscribeComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        SubscribeComponent,
    ]
})
export class SharedModule{ }
