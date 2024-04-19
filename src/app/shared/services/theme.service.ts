import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Theme} from "../types";

@Injectable({providedIn: 'root'})
export class ThemeService {
  themeLink = this.document.querySelector("#app-theme") as HTMLLinkElement

  constructor(@Inject(DOCUMENT) private document: Document) {
    if(localStorage.getItem("theme")) {
      this.switch(localStorage.getItem("theme") as Theme)
    } else{
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      this.switch(isDarkMode ? Theme.Dark : Theme.Light)
    }
  }

  switch(theme: Theme) {
    this.themeLink.href = `${theme}.css`
    localStorage.setItem("theme", theme)
  }

  toggle() {
    if(localStorage.getItem("theme")) {
      const currentTheme = localStorage.getItem("theme") as Theme
      const newTheme = currentTheme === Theme.Dark ? Theme.Light : Theme.Dark
      this.switch(newTheme)
    }
  }
}
