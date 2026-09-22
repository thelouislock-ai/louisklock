# Louis Lock Real Estate: Master Brand Guide

> Cool water, warm ground, one accent that earns its place.

**Palette:** Sound & Patina. **Owner:** Louis Lock, Designated Broker, eXp Realty LLC, Washington.
**Scope:** every surface. Website, social, print, signage, email, decks, video.

This is the single source of truth. If something conflicts with an older file, deck or template, this wins.

---

## 1. The idea

The system reads Seattle without saying Seattle out loud.

Structure comes from deep Puget water and weathered teal. The page sits on warm linen rather than paper white. The accent is oxidised copper, the green that salt air leaves on metal. A second accent, alpenglow, is the ten minutes of warm light that hits Rainier at dusk, held back so it still means something when it appears.

**There is no gold, no black and no white anywhere in this system.** Darks are deep green-blue. Grounds are tinted linen. Those two substitutions are most of what separates this from every other brokerage brand in the market.

**Positioning in one line:** a Seattle broker who reads the lot, not just the listing.

---

## 2. Color

### Full palette

| Name | HEX | RGB | CMYK | Role |
|---|---|---|---|---|
| Warm linen | `#EEEAE3` | 238 234 227 | 0/2/5/7 | Primary ground. Also text on deep surfaces. |
| Card | `#F7F4EF` | 247 244 239 | 0/1/3/3 | Raised panels on the linen ground |
| Deep water | `#1B2B31` | 27 43 49 | 45/12/0/81 | Dark bands, headings on light, nav, footer |
| Teal | `#2F5559` | 47 85 89 | 47/4/0/65 | Mid structure, secondary surfaces |
| Slate body | `#34474C` | 52 71 76 | 32/7/0/70 | Body copy on light grounds |
| Pewter | `#5E665F` | 94 102 95 | 8/0/7/60 | Muted and secondary text on light |
| Line | `#DAD5CB` | 218 213 203 | 0/2/7/15 | Hairline rules, borders, dividers |
| Mist | `#C3C9C4` | 195 201 196 | 3/0/2/21 | Muted text on deep surfaces |
| **Verdigris** | `#2F6D5C` | 47 109 92 | 57/0/16/57 | **Accent on LIGHT grounds** |
| **Verdigris light** | `#77B5A2` | 119 181 162 | 34/0/10/29 | **Accent on DARK grounds** |
| Alpenglow | `#964F40` | 150 79 64 | 0/47/57/41 | Rare warm note on light |
| Alpenglow light | `#DE9C8D` | 222 156 141 | 0/30/36/13 | Display emphasis on dark |

CMYK values are conversions, not press-matched. For anything printed in volume, ask the printer to match to the HEX and pull a proof.

### The accent split is mandatory, not stylistic

One accent value cannot clear WCAG AA against both a linen ground and a near-black one. The math forbids it: to hit 4.5:1 against `#EEEAE3` the accent must be dark, and to hit 4.5:1 against `#1B2B31` it must be light. So the accent exists as two tints of one hue.

**Use verdigris `#2F6D5C` on anything light. Use verdigris light `#77B5A2` on anything dark. Never one value for both.**

The previous brand failed exactly this. Gold `#C8A24A` on off-white `#F5F3EF` measured **2.17:1** against a 4.5:1 requirement, used 34+ times as section labels. It was genuinely hard to read on a phone in daylight.

### Alpenglow is rationed

Alpenglow appears roughly **once per page or per piece**. The italicised word in a headline. A sold badge. A testimonial attribution. That is the entire brief. The moment it shows up three times on one layout it stops reading as emphasis and starts reading as a second brand color.

### Measured contrast

| Pair | Ratio | |
|---|---|---|
| Deep water on linen | 12.19:1 | PASS |
| Slate body on linen | 8.14:1 | PASS |
| Pewter on linen | 4.94:1 | PASS |
| Verdigris on linen | 5.06:1 | PASS |
| Alpenglow on linen | 5.02:1 | PASS |
| Linen on deep water | 12.19:1 | PASS |
| Mist on deep water | 8.68:1 | PASS |
| Verdigris light on deep water | 6.21:1 | PASS |
| Alpenglow light on deep water | 6.44:1 | PASS |

Every value was measured before adoption. Anything added later gets measured too.

---

## 3. Typography

Three faces, each with one job. Do not add a fourth.

**Cormorant Garamond** carries display. Weights 300 to 500. Headlines, section titles, large numerals, pull quotes, drop caps. Italic is reserved for the single emphasised word, and that word takes the accent color. Letter spacing stays near zero; the face is already narrow.

**Montserrat** carries labels. Weights 500 and 600, **always uppercase, always letterspaced 0.16em to 0.32em**. Eyebrows, nav, buttons, field labels, metadata, captions on stats. Never above 14px. If a label wants to be bigger than that, it wants to be Cormorant instead.

**Inter** carries body. Weight 300 for running text, 400 for emphasis. Paragraphs, form fields, captions, anything read in sentences.

### Scale (web)

| Role | Face | Size | Line height |
|---|---|---|---|
| Page hero | Cormorant 500 | 38 to 68px | 1.06 |
| Section head | Cormorant 500 | 32 to 44px | 1.12 |
| Card head | Cormorant 500 | 22 to 26px | 1.15 |
| Body large | Inter 300 | 16.5px | 1.9 |
| Body | Inter 300 | 14.5 to 15px | 1.75 |
| Caption | Inter 300 | 12.5 to 13px | 1.6 |
| Eyebrow | Montserrat 600 | 10.5px | 1.4 |
| Micro label | Montserrat 600 | 8.5px | 1.4 |

### Print and everywhere else

Same three faces. All are free on Google Fonts, so a printer, a designer or a VA can install them at no cost. Ratios carry over: display is roughly 4 to 6 times body size, eyebrows sit around 60 percent of body size with heavy letterspacing.

**If a tool genuinely cannot load them** (some MLS portals, some email clients), substitute in this order: Cormorant Garamond to Georgia; Montserrat to Helvetica Neue or Arial; Inter to Helvetica or Arial. Never substitute into Times New Roman or Calibri, both of which read as an unbranded default.

---

## 4. Shape, space, layout

**Radius: zero.** Every panel, card, button and input is square. The only curve in the system is a full circle, used solely for avatars, social icons and map pins. Rounded rectangles are not part of the vocabulary and are the fastest way to make this look like a template.

**Separation is hairlines, not shadows.** A 1px `#DAD5CB` rule, or a change of surface. Drop shadows are reserved for genuinely floating chrome such as a modal. Never on a card.

**Base unit 4px.** Web section rhythm runs 74 to 150px vertical. Print scales the same ratios.

**Surfaces**

| Level | Value | Purpose |
|---|---|---|
| 0 | `#EEEAE3` | Page ground |
| 1 | `#F7F4EF` | Cards, form panels |
| 2 | `#2F5559` | Mid structural bands |
| 3 | `#1B2B31` | Deep bands, nav, footer |

---

## 5. Components

**Primary button.** Solid deep water, linen text, square, Montserrat 600 at 10px / 0.2em uppercase, padding 13px 24px. Inverts on hover.

**Accent button.** Solid verdigris, card-colored text. At most one per view. On dark grounds the fill becomes verdigris light and the text becomes deep water.

**Outline button.** Transparent, 1px line border, deep water text, border goes verdigris on hover. The default for paired actions such as Guide plus Roadmap.

**Eyebrow.** Montserrat 600, 10.5px, 0.32em, uppercase, accent colored, usually preceded by a 30px hairline rule in the same color.

**Card.** Card fill on a 1px line border, square, 24 to 48px padding. Border goes verdigris on hover. No shadow.

**Input.** Transparent fill. Bottom border only on light forms, full border on dark. Border brightens to the accent on focus. Never a rounded pill.

**Focus state.** `outline: 2px solid var(--gold); outline-offset: 3px;` defined once, globally. The previous site had no visible focus indicator anywhere, a WCAG 2.4.7 failure. Must not recur.

---

## 6. Photography

**This is the rule that matters most, and no amount of color or type substitutes for it.**

Real estate is a photography business. Photographs carry every surface; type and color are the frame around them.

**Never use vector illustration in place of photography.** The previous site ran 40+ hand-drawn SVG shapes per page (cartoon skylines, geometric house outlines) against 4 real photographs sitewide. That single fact is the main reason it read as machine-generated, ahead of any type or color choice.

**What to shoot**

- **Neighborhoods.** Establishing frames that say a specific place: the Magnolia bluff, the Beacon Hill ridge, Seward Park's water edge. Ownable, never expires, and backs the born-and-raised claim.
- **Architecture and streetscape.** Craftsman detail, a DADU, a corner lot with visible potential. These carry the lot-reading angle that no competitor is selling.
- **Wide water and skyline.** Framed with empty sky or water through the middle third so text can sit on top.
- **One professional portrait.** Hire this out. It is the face of everything and cheap portraits read instantly.

**How to shoot.** Overcast Seattle mornings. The flat light is genuinely flattering and it is free. Minimum 2400px on the long edge. Strip EXIF before publishing; phone photos carry GPS coordinates.

**Never** use stock luxury interiors. They are a recognisable tell and they undo the entire point.

---

## 7. Voice

The goal is copy that reads like Louis wrote it, because he did.

- **No em-dashes.** This has recurred repeatedly across the site. Use a comma, a colon, or split the sentence. Grep before shipping anything.
- **Vary the rhythm.** The old site ran the identical beat in every section: eyebrow, serif headline with exactly one italic word, short paragraph, three-column grid. That metronome is as much of a tell as any single phrase. Break it on purpose.
- **Lead with the client's situation,** never with credentials. The throughline is a roadmap built for them.
- **Cut the standard tells:** "in today's fast-paced market", "whether you're a first-time buyer or a seasoned investor", "unlock your dream home", stacked "moreover" and "furthermore".
- **Prefer one concrete detail** over three generic ones. A neighborhood quirk, an actual number, a real anecdote.
- Slang is fine in a DM or a story caption. Dial it all the way down on listings, contracts, guides and client email.

---

## 8. By surface

**Website.** Linen ground, deep water bands roughly every third section, verdigris accents, alpenglow once. Photography full-bleed.

**Instagram feed.** Alternate linen-ground and deep-water posts so the grid reads as a checkerboard rather than a wall. Type: Montserrat uppercase eyebrow, Cormorant headline, one alpenglow word. Leave generous margin; the crowded edge-to-edge look is what template accounts do.

**Instagram stories.** Deep water ground, linen text, verdigris light accent. Keep the safe zone clear top and bottom.

**Email signature.** Name in Cormorant, role and contact in Montserrat uppercase small, a single verdigris hairline rule above the brokerage disclosure. No logo soup, no social icon row wider than the text block.

**Business card.** Deep water on the reverse, linen on the face. Name in Cormorant 500, everything else Montserrat uppercase. Square corners, no rounded stock, no spot gloss. Uncoated stock suits the palette far better than gloss.

**Yard sign and rider.** Deep water field, linen type, verdigris light rule. Phone number in Montserrat at the largest size the sign allows; legibility at 40mph beats elegance. eXp Realty lockup and license line as required.

**Listing flyer.** Photography occupies the top 60 percent minimum. Linen panel beneath for specs. Price in Cormorant, specs in Montserrat uppercase, description in Inter.

**Presentation decks.** Deep water title slides, linen content slides. One idea per slide. Cormorant for the statement, Inter for the support.

---

## 9. What must never be claimed

Louis holds a Washington real estate broker license. Everything public is regulated advertising and his license is attached to it.

- **No sales statistics that are not real.** No invented closed-sale counts, volume figures or average prices. This is not a design decision.
- **No press, award or ranking logos** without an actual placement.
- **No MLS listing data** without a licensed NWMLS IDX feed. If one is added, the NWMLS disclaimer and a DMCA notice become mandatory in the footer.
- **No testimonial** that is not a real client's words, with consent, attributed first name and last initial only.
- **No placeholder copy live, ever.** "Quote coming soon" and "Bio coming soon" ran on the live site for months. Ship fewer real items instead.
- **No lead capture for something that does not exist.** Three guide cards took a phone number and delivered nothing. Removed.

The disclosure "Licensed Real Estate Broker, eXp Realty, LLC, Washington State" appears in the footer of every page and on every print piece.

---

## 10. Quick start (web)

```css
:root{
  --off-white:#EEEAE3;   /* warm linen ground */
  --card:#F7F4EF;
  --charcoal:#1B2B31;    /* deep water */
  --teal:#2F5559;
  --graphite:#34474C;    /* body on light */
  --pewter:#5E665F;
  --line:#DAD5CB;
  --silver:#C3C9C4;      /* muted on dark */
  --gold:#2F6D5C;        /* verdigris, LIGHT grounds */
  --champagne:#DE9C8D;   /* alpenglow light, display emphasis on dark */
  --alpenglow:#964F40;   /* rare warm note on light */

  --f-display:'Cormorant Garamond',Georgia,serif;
  --f-label:'Montserrat',ui-sans-serif,system-ui,sans-serif;
  --f-body:'Inter',ui-sans-serif,system-ui,sans-serif;
}

/* the accent split: mandatory, not optional */
nav, footer, .hero, .page-hero, .article-hero, .cta-band, .article-cta-box,
.mobile-menu, .dropdown-menu-inner, .contact-info, .featured-card,
.flow-section, .guides-grid, .guide-card, .mission-full, .partner-cards,
.partner-card, .paths-grid, .path-card, .services-grid, .statement,
.strategy, .team-grid, .team-card, .values, .value-card, .map-section,
.map-wrap, .guide-gate-overlay, .qr-box, .story-photo, .team-photo,
.bio-photo, .calc, .development{
  --gold:#77B5A2;
}

:focus-visible{ outline:2px solid var(--gold); outline-offset:3px; }
@media(prefers-reduced-motion:reduce){ *{animation:none!important;transition:none!important;} }
```

---

## 11. The prompt

Paste this into any AI tool, designer brief, or freelancer scope.

> Design for Louis Lock, a Seattle real estate broker. Palette is "Sound & Patina": warm linen ground `#EEEAE3`, cards `#F7F4EF`, deep water `#1B2B31`, teal `#2F5559`, body text `#34474C`, muted `#5E665F`, hairlines `#DAD5CB`.
>
> The accent is verdigris and exists as two values: `#2F6D5C` on light grounds, `#77B5A2` on dark. Never use one value for both, it fails contrast. A second accent, alpenglow, is rationed to roughly once per piece: `#964F40` on light, `#DE9C8D` on dark, used for the single italicised word in a headline.
>
> No gold, no black, no white anywhere. Darks are deep green-blue, grounds are tinted linen.
>
> Type: Cormorant Garamond for display (italic only on the emphasised word, which takes the accent color), Montserrat uppercase and letterspaced 0.16 to 0.32em for all labels and buttons, Inter light for body.
>
> Square corners on everything except circular avatars. Separation comes from 1px hairlines, never drop shadows. Generous whitespace.
>
> Photography carries every layout; never use vector illustration in place of photos, and never stock luxury interiors. Real Seattle neighborhoods, architecture and water, shot in overcast light.
>
> Copy: no em-dashes. Vary sentence rhythm. Lead with the client's situation, not credentials. One concrete detail beats three generic ones. Never claim sales statistics, press placements or awards.
