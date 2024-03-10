import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, RouterOutlet, RouterModule],
  standalone: true,
})

export class AppComponent implements OnInit {
  safeHtmlContent: SafeHtml = "";
  botInitialized: boolean = false;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Example HTML content to be sanitized
    const htmlContent = '<p>dyelbot works!</p>';
    // Sanitize the HTML content
    this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent);

    // Initialize the Voiceflow bot
    this.initVoiceflowBot();
  }

  private initVoiceflowBot(): void {
    if (!this.botInitialized) {
      // Create a new script element for the Voiceflow bot injection
      const botScript = this.renderer.createElement('script');
      botScript.type = 'text/javascript';
      botScript.onload = () => {
        // Access 'voiceflow' property using bracket notation
        (window as any)['voiceflow'].chat.load({
          verify: { projectID: '65dd0c47c24a01a879ff6910' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      };
      botScript.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      this.renderer.appendChild(document.body, botScript);

      this.botInitialized = true;
    }
  }
}
