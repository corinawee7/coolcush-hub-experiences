# Coolcush Hub Experiences

A traveller can explore private tours around Brașov, pick an itinerary and email Corina a trip request with their preferred date and pick-up location. The site is available in English, Romanian and Spanish.

[Visit the live site](https://coolcushhub.ro/) · [Read the manual QA case study](QA.md)

![Illustration of Corina’s white Duster in the Transylvanian mountains](photos/coolcush-panorama.jpg)

## My role

I defined the services, itineraries and visitor experience for my own guiding business. I reviewed AI-assisted implementation, tested the enquiry flow through to my inbox, checked the layout on my phone and desktop, and published the site with Cloudflare Pages.

## QA portfolio

| What I noticed or wanted to verify | How we checked the outcome |
| --- | --- |
| On my phone, every navigation link appeared before the introduction. | The revised header collapses into one menu at phone width. I reviewed the published result on my phone. |
| The Experiences section looked unfinished with six cards. | Two more experiences filled the section. A desktop regression check caught a 3–3–2 layout at 1920 px. After the CSS change, the eight cards aligned in two rows of four. |
| I needed the pick-up location in the email I actually receive. | I entered Brașov in the form and checked the received message. Test 4 reached my inbox with the location visible. |

The casebook also covers language navigation, themes, publication and search discovery. Each case includes a way to repeat the check and the evidence available from the release. [Open the test cases and results](QA.md)

## Run locally

From the repository root, run `python3 -m http.server 8000` and open http://localhost:8000/. The site uses HTML, CSS and vanilla JavaScript. The trip form uses the live FormSubmit service.

## Project layout

The root contains the English pages, shared stylesheet, scripts and sitemap. The Romanian and Spanish pages are under `ro/` and `es/`. All three versions use the images in `photos/`.
