import {AfterViewInit, Component, OnInit} from "@angular/core";
import {Page} from "tns-core-modules/ui/page";
import {BarcodeScanner} from "nativescript-barcodescanner";
import * as Permissions from "nativescript-permissions";
import {requestPermission} from "nativescript-permissions";

declare var android: any;

@Component({
	selector: "Scanner",
	moduleId: module.id,
	templateUrl: "./scanner.component.html",
	styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit{
	constructor(
		private page: Page,
		private barcodeScanner: BarcodeScanner
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit() {
		console.log('itin!');
		this.scanBarcode();
	}

	requestPermission() {
		return new Promise((resolve, reject) => {
			this.barcodeScanner.available().then((available) => {
				if(available) {
					this.barcodeScanner.hasCameraPermission().then((granted) => {
						if(!granted) {
							this.barcodeScanner.requestCameraPermission().then(() => {
								console.log("Camera permission granted");
								resolve("Camera permission granted");
							});
						} else {
							console.log("Camera permission was already granted");
							resolve("Camera permission was already granted");
						}
					});
				} else {
					console.log("This device does not have an available camera");
					reject("This device does not have an available camera");
				}
			});
		});
	}

	scanBarcode() {
		this.requestPermission().then((result) => {
			this.barcodeScanner.scan({
				cancelLabel: "Stop scanning",
				message: "Go scan something",
				preferFrontCamera: false,
				showFlipCameraButton: true
			}).then((result) => {
				console.log("Scan format: " + result.format);
				console.log("Scan text:   " + result.text);
			}, (error) => {
				console.log("No scan: " + error);
			});
		}, (error) => {
			console.log("ERROR", error);
		});
	}

	/*public getCameraPermission() {
		Permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
			console.log("Permission granted!");
		}).catch(() => {
			console.log("Permission is not granted (sadface)");
		});
	}

	scan() {
		console.log("OPEN NOTIFICATION!");

		this.barcodeScanner.scan({
			formats: "QR_CODE, EAN_13",
			showFlipCameraButton: true,   // default false
			preferFrontCamera: false,     // default false
			showTorchButton: true,        // default false
			beepOnScan: true,             // Play or Suppress beep on scan (default true)
			torchOn: false,               // launch with the flashlight on (default false)
			closeCallback: () => { console.log("Scanner closed")}, // invoked when the scanner was closed (success or abort)
			openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
		}).then((result) => {
				// Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
				alert({
					title: "Scan result",
					message: "Format: " + result.format + ",\nValue: " + result.text,
					okButtonText: "OK"
				});
			}, (errorMessage) => {
				console.log("No scan. " + errorMessage);
			}
		);
	}*/
}
