import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BottomBarModule } from "./bottomBar/bottomBar.module";
import {SearchModule} from "~/home/search/search.module";
import {ScannerModule} from "~/home/scanner/scanner.module";
import {RankModule} from "~/home/rank/rank.module";
import {AuthModule} from "~/home/auth/auth.module";
import {ProductsModule} from "~/home/products/products.module";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        BottomBarModule,
        SearchModule,
        ScannerModule,
        RankModule,
        AuthModule,
        ProductsModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
    ]
})
export class HomeModule { }
