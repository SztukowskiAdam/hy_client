import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { BottomBarComponent } from "./bottomBar.component";
import {RouterModule} from "@angular/router";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		RouterModule
	],
	declarations: [
		BottomBarComponent
	],
	exports: [
		BottomBarComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class BottomBarModule { }
