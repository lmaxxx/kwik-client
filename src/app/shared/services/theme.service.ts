import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({providedIn: 'root'})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  switch(theme: string) {
    let themeLink = this.document.querySelector("#app-theme") as HTMLLinkElement

    if(themeLink) {
      themeLink.href = `${theme}.css`
    }
  }
}
