import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SearchComponent } from "./search.component";
import {BottomBarModule} from "~/home/bottomBar/bottomBar.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        BottomBarModule
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	entryComponents: [
		SearchComponent
	]
})
export class SearchModule { }
