import { Component, OnInit } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { NewsApiService } from "./services/news-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  apiKey = "23a1dc1a155f45fab50d958ef5930628";
  mArticles: Array<any>;
  page = 1;
  countryCode="";
  mArticlesTest: Array<any> = [
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Natasha Mascarenhas, Danny Crichton, Alex Wilhelm",
        "title": "3 views on the future of meetings",
        "description": "Founders aren’t flocking to build just another SaaS tool or Airtable copycat — they're trying to disrupt the only thing possibly more annoying than e-mail: the work meeting.",
        "url": "https://techcrunch.com/2021/05/28/3-views-on-the-future-of-meetings/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/yann-maignan-rRiAzFkJPMo-unsplash.jpg?w=600",
        "publishedAt": "2021-05-28T22:11:55Z",
        "content": "More than a year into the coronavirus pandemic, early-stage startups across the world are re-inventing how we work. But founders arent flocking to build just another SaaS tool or Airtable copycat the… [+3189 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Alex Wilhelm",
        "title": "Daily Crunch: Tesla switches on camera-based driver monitoring for Autopilot users",
        "description": "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
        "url": "https://techcrunch.com/2021/05/28/2159008/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/01/tesla-cameraAutopilot.jpg?w=764",
        "publishedAt": "2021-05-28T22:10:23Z",
        "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nWelcome to the Daily Crunch for May 28, the last edition before a … [+4356 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Alex Wilhelm, Ron Miller",
        "title": "Once a buzzword, digital transformation is reshaping markets",
        "description": "What follows is a digest of notes concerning the recent earnings results from Box, Sprout Social, Yext, Snowflake and Salesforce.",
        "url": "https://techcrunch.com/2021/05/28/once-a-buzzword-digital-transformation-is-reshaping-markets/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-1271697775.jpg?w=678",
        "publishedAt": "2021-05-28T21:27:26Z",
        "content": "The notion of digital transformation evolved from a buzzword joke to a critical and accelerating fact during the COVID-19 pandemic. The changes wrought by a global shift to remote work and schooling … [+2223 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Walter Thompson, Annie Siebert",
        "title": "Extra Crunch roundup: first-check myths, Miami relocation checklist, standout SaaSy startups",
        "description": "We're off on Monday, May 31 in observance of Memorial Day; I hope you have a relaxing weekend!",
        "url": "https://techcrunch.com/2021/05/28/extra-crunch-roundup-first-check-myths-miami-relocation-checklist-standout-saasy-startups/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/copyofbaybridgewheelie.jpeg?w=600",
        "publishedAt": "2021-05-28T20:54:51Z",
        "content": "This may seem like a great time to launch a SaaS startup, but the landscape is crowded with well-designed applications that promise “blazingly fast and delightfully simple” experiences, according to … [+7152 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Mary Ann Azevedo",
        "title": "Meet Justos, the new Brazilian insurtech that just got backing from the CEOs of 7 unicorns",
        "description": "Here in the U.S. the concept of using driver’s data to decide the cost of auto insurance premiums is not a new one. But in markets like Brazil, the idea is still considered relatively novel. A new startup called Justos claims it will be the first Brazilian in…",
        "url": "https://techcrunch.com/2021/05/28/meet-justos-the-new-brazilian-insurtech-that-just-got-backing-from-the-ceos-of-7-unicorns/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/Justos-team.jpg?w=533",
        "publishedAt": "2021-05-28T20:52:32Z",
        "content": "Here in the U.S. the concept of using drivers data to decide the cost of auto insurance premiums is not a new one.\r\nBut in markets like Brazil, the idea is still considered relatively novel. A new st… [+5475 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Taylor Hatmaker",
        "title": "Facebook changes misinfo rules to allow posts claiming Covid-19 is man-made",
        "description": "Facebook made a few noteworthy changes to its misinformation policies this week, including the news that the company will now allow claims that Covid was created by humans — a theory that contradicts the previously prevailing assumption that humans picked up …",
        "url": "https://techcrunch.com/2021/05/28/facebook-covid-man-made-lab-theory/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1207957894.jpg?w=600",
        "publishedAt": "2021-05-28T20:40:41Z",
        "content": "Facebook made a few noteworthy changes to its misinformation policies this week, including the news that the company will now allow claims that Covid was created by humans a theory that contradicts t… [+2499 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Devin Coldewey",
        "title": "Anthropic is the new AI research outfit from OpenAI's Dario Amodei, and it has $124M to burn",
        "description": "As AI has grown from a menagerie of research projects to include a handful of titanic, industry-powering models like GPT-3, there is a need for the sector to evolve — or so thinks Dario Amodei, former VP of research at OpenAI, who struck out on his own to cre…",
        "url": "https://techcrunch.com/2021/05/28/anthropic-is-the-new-ai-research-outfit-from-openais-dario-amodei-and-it-has-124m-to-burn/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-1150039017.jpg?w=727",
        "publishedAt": "2021-05-28T17:59:23Z",
        "content": "As AI has grown from a menagerie of research projects to include a handful of titanic, industry-powering models like GPT-3, there is a need for the sector to evolve or so thinks Dario Amodei, former … [+3687 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Mark Harris",
        "title": "The financial pickle facing Elon Musk's Las Vegas Loop system",
        "description": "Restrictions put in place by Nevada regulators are making it difficult for The Boring Company to meet contractual targets for its LVCC Loop, Elon Musk’s first underground transportation system. The Loop system at the Las Vegas Convention Center (LVCC) is supp…",
        "url": "https://techcrunch.com/2021/05/28/the-financial-pickle-facing-elon-musks-las-vegas-loop-system/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/boring-loop-GettyImages-1311709587.jpg?w=623",
        "publishedAt": "2021-05-28T17:20:54Z",
        "content": "Restrictions put in place by Nevada regulators are making it difficult for The Boring Company to meet contractual targets for its LVCC Loop, Elon Musk’s first underground transportation system.\r\nThe … [+8005 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Manish Singh",
        "title": "Facebook, WhatsApp, Google and other internet giants comply with India's IT rules",
        "description": "Google, Facebook, Telegram, LinkedIn and Tiger Global-backed Indian startups ShareChat and Koo have either fully or partially complied with the South Asian nation’s new IT rules, according to two people familiar with the matter and a government note obtained …",
        "url": "https://techcrunch.com/2021/05/28/facebook-whatsapp-google-and-other-internet-giants-comply-with-indias-it-rules/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1096026706.jpg?w=570",
        "publishedAt": "2021-05-28T17:13:04Z",
        "content": "Google, Facebook, Telegram, LinkedIn and Tiger Global-backed Indian startups ShareChat and Koo have either fully or partially complied with the South Asian nations new IT rules, according to two peop… [+1368 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Amanda Silberling",
        "title": "Twitter Blue, a $3 monthly subscription service, could be coming soon",
        "description": "Great news for typo-prone tweeters: Twitter Blue, a $2.99 monthly subscription, appears to be coming soon to a Timeline near you. Two weeks ago, researcher Jane Manchun Wong first reported that Twitter’s new subscription service is in the works. But yesterday…",
        "url": "https://techcrunch.com/2021/05/28/twitter-blue-a-3-monthly-subscription-service-could-be-coming-soon/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/wong-twitter-1.jpeg?w=346",
        "publishedAt": "2021-05-28T16:45:35Z",
        "content": "Great news for typo-prone tweeters: Twitter Blue, a $2.99 monthly subscription, appears to be coming soon to a Timeline near you.\r\nTwo weeks ago, researcher Jane Manchun Wong first reported that Twit… [+2076 chars]"
    }
]
  constructor(private _newsapiService: NewsApiService) {}


  openArticleUrl(articleUrl: string){
      window.open(articleUrl, "_blank")
  }

  getArticles(event: any) {
      this.page = 1;
      this.countryCode = event.target.id;
    this._newsapiService.getArticles(event.target.id, this.page).subscribe((data) => {
      this.mArticles = data["articles"];
      console.log(this.mArticles);
    });
  }

  onScroll(): void {
    this._newsapiService
      .getArticles(this.countryCode,++this.page)
      .subscribe((data) => {
        this.mArticles.push(...data["articles"]);
      });
  }

  ngOnInit() {
      this.countryCode = "us";
      this.page = 1;
    this._newsapiService.getArticles(this.countryCode, this.page).subscribe((data) => {
        this.mArticles = data["articles"];
        console.log(this.mArticles);
      });
  }
}
