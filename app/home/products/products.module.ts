import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ProductsComponent } from "./products.component";
import {BottomBarModule} from "~/home/bottomBar/bottomBar.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        BottomBarModule
	],
	declarations: [
		ProductsComponent
	],
	exports: [
		ProductsComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	entryComponents: [
		ProductsComponent
	]
})
export class ProductsModule { }
