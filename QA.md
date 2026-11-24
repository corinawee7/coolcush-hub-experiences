# Manual QA case study

## Trip request delivery

**Goal.** A guide receiving a trip request needs the traveller’s pick-up location in the email.

**Check.** Enter Brașov as the pick-up location, submit the form once, then inspect the received email. An early test produced multiple messages and mail landed in Spam. On inspection, the received message contained the location. After marking the sender as safe, Corina confirmed that test 4 reached the inbox with Brașov visible.

**Scope.** This verifies the observed delivery to the business inbox. Duplicate delivery was reported earlier and its cause was not established.

## Navigation and layout

On her phone, Corina found that all navigation links appeared above the home page, pushing the introduction down. She also reported that the light and night views looked too similar. The revised design collapses navigation behind a menu button on narrow screens and uses a cream introduction panel in light mode and a dark green panel in night mode.

Browser checks at 1280, 1440 and 1920 px verified two rows of four experience cards. The first wide-screen check exposed a 3–3–2 arrangement at 1920 px. After the grid adjustment, all three desktop widths showed 4–4, with no horizontal overflow. At 390 px the menu button was visible and the cards stacked in one column. Corina then checked the published site on desktop and mobile.

**Repeat the check.** Open Home at desktop width, narrow the window to phone width, open and close the menu, switch theme, and follow the planning link. Verify the form is reachable and the page fits the viewport.

## Release test cases

The owner tested delivery in her business mailbox and reviewed the published site on her own devices. Viewport measurements and language checks came from assisted browser testing. The table records the scope of each observation.

| ID | Action and test data | Expected result | Observed result |
| --- | --- | --- | --- |
| TC-01 · Planning entry point | Open the English home page and choose **Plan my adventure**. | The planning form opens with a pick-up location field. | Confirmed in the preview browser. |
| TC-02 · Email content | Submit a test enquiry with Brașov as the pick-up location. Open the resulting email. | The guide can read the location in the message. | The owner confirmed Brașov in test 4. |
| TC-03 · Email delivery | After marking the earlier message as safe, send a fresh enquiry and check Inbox and Spam. | The owner can find the new enquiry in her inbox. | Test 4 reached Inbox. The earlier report of three copies remains a separate unresolved observation. |
| TC-04 · Mobile header | Open Home at 390 px. Inspect the header before opening the menu. | A menu button is visible and the page fits the screen. | The original header listed every section. The revised browser layout showed the menu button and zero horizontal overflow. |
| TC-05 · Desktop navigation | Open English Home at 1280, 1440 and 1920 px. Inspect the navigation links. | Categories are directly accessible in one row. | The links stayed in one row at all three widths. |
| TC-06 · Experience cards | Count the Home experience cards and compare the grid at the three desktop widths. | Eight cards form two complete rows. | The first 1920 px test produced 3–3–2. Retesting after the grid change gave 4–4 at all three widths. |
| TC-07 · Theme control | Activate Night mode on desktop. Check the control state and the action offered for switching back. | The control reflects the active night theme and offers Light mode. | The browser reported the active state and the Light mode label. The owner also reported that the earlier mobile themes looked too similar. A contrast ratio was not measured. |
| TC-08 · Language landing pages | Open English Home, then the Romanian and Spanish home pages. Inspect the heading and planning link. | Both elements use the selected language. | Confirmed for all three locales in browser checks. |
| TC-09 · Production domain | Open the custom domain on mobile data and on desktop after activation. Compare with the production Pages address. | Visitors can reach Home through the branded domain on both devices. | Mobile worked first. The owner later confirmed desktop and mobile access. |
| TC-10 · Sitemap submission | Open the deployed sitemap, then submit its address in Search Console. | A readable sitemap is served and Google accepts it. | The generated XML contained 21 page URLs. The owner opened the live list and reported a successful submission. Individual page indexing is tracked separately. |

## Next regression check

**Duplicate enquiry under a slow connection.** Use a staging form and a test inbox. Submit once, immediately attempt a second click, then count the received messages with the same test reference. Expected result: one email and clear sending feedback. Status: planned. The successful inbox test above did not isolate the cause of the earlier duplicates.
