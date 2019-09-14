import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ScannerComponent } from "./scanner.component";
import {BottomBarModule} from "~/home/bottomBar/bottomBar.module";
import {BarcodeScanner} from "nativescript-barcodescanner";

function createBarcodeScanner() {
	return new BarcodeScanner();
}

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
	],
	providers: [
		{ provide: BarcodeScanner, useFactory: createBarcodeScanner}
	]
})
export class ScannerModule { }
