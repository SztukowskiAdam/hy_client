import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RankComponent } from "./rank.component";
import {BottomBarModule} from "~/home/bottomBar/bottomBar.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
        BottomBarModule
	],
	declarations: [
		RankComponent
	],
	exports: [
		RankComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	entryComponents: [
		RankComponent
	]
})
export class RankModule { }
