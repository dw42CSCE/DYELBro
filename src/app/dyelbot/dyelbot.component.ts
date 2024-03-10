import { Component, OnInit, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dyelbot',
  templateUrl: './dyelbot.component.html',
  styleUrls: ['./dyelbot.component.css']
})
export class DyelbotComponent implements OnInit, AfterViewInit, OnDestroy {
  safeHtmlContent: SafeHtml = "";
  botInitialized: boolean = false;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Example HTML content to be sanitized
    const htmlContent = '<p>dyelbot works!</p>';
    // Sanitize the HTML content
    this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  ngAfterViewInit(): void {
    if (!this.botInitialized && typeof document !== 'undefined') {
      this.appendScripts();
      this.botInitialized = true;
    }
  }

  ngOnDestroy(): void {
    // Clean up the bot when the component is destroyed
    if (typeof document !== 'undefined') {
      this.destroyBot();
    }
  }

  private appendScripts(): void {
    if (typeof document !== 'undefined') {
      // Create a new script element for the bot injection
      const botScript = this.renderer.createElement('script');
      botScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      this.renderer.appendChild(document.body, botScript);

      // Create a new script element for the bot configuration
      const configScript = this.renderer.createElement('script');
      configScript.src = 'https://mediafiles.botpress.cloud/61d89b4a-0439-4d61-9730-046d010c5b00/webchat/config.js';
      configScript.defer = true;
      this.renderer.appendChild(document.body, configScript);
    }
  }

  private destroyBot(): void {
    if (typeof document !== 'undefined') {
      // Remove the bot elements from the DOM
      const botContainer = document.getElementById('botContainer');
      if (botContainer) {
        botContainer.innerHTML = ''; // Remove all child elements
      }
    }
  }
}

