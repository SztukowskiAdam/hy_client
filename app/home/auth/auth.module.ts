import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AuthComponent } from "./auth.component";
import {BottomBarModule} from "~/home/bottomBar/bottomBar.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        BottomBarModule
	],
	declarations: [
		AuthComponent
	],
	exports: [
		AuthComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	entryComponents: [
		AuthComponent
	]
})
export class AuthModule { }
