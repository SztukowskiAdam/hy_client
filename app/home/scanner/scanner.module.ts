import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ScannerComponent } from "./scanner.component";
import {BottomBarModule} from "~/home/bottomBar/bottomBar.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        BottomBarModule
	],
	declarations: [
		ScannerComponent
	],
	exports: [
		ScannerComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	entryComponents: [
		ScannerComponent
	]
})
export class ScannerModule { }
