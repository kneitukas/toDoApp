import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  
  init() {
    this.matIconRegistry.addSvgIcon(
      "`cancel`",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svg/outline-cancel-24px.svg")
    );
  }
}