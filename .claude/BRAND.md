# Louis Lock Real Estate: Brand & Style Reference

> Cool water, warm ground, one accent that earns its place.

**Theme:** light-first, with deep bands. **Palette name:** Sound & Patina.

The system reads Seattle without saying Seattle out loud. Structure comes from deep Puget water and weathered teal; the page sits on warm linen rather than paper white; and the accent is oxidised copper, the green salt air leaves on metal. A second accent, alpenglow, is the ten minutes of warm light that hits Rainier at dusk, and it is used sparingly enough that it still means something when it appears. There is no gold, no black, and no white anywhere in the system. Darks are deep green-blue, not black. Grounds are tinted linen, not paper.

---

## Tokens: Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Warm linen | `#EEEAE3` | `--off-white` | Page ground. Also body text on deep surfaces. |
| Card | `#F7F4EF` |  | Raised panels sitting on the linen ground |
| Deep water | `#1B2B31` | `--charcoal` | Dark bands, headings on light, nav and footer |
| Teal | `#2F5559` |  | Mid structure, secondary surfaces |
| Slate body | `#34474C` | `--graphite` | Body copy on light grounds |
| Pewter | `#5E665F` |  | Muted and secondary text on light |
| Line | `#DAD5CB` |  | Hairline rules, card borders, dividers |
| Mist | `#C3C9C4` | `--silver` | Muted text on deep surfaces |
| **Verdigris** | `#2F6D5C` | `--gold` | **The accent, on LIGHT grounds.** Links, eyebrows, active states, numerals |
| **Verdigris light** | `#77B5A2` | `--gold` (inside dark containers) | **The accent, on DARK grounds.** Same role, legible tint |
| Alpenglow | `#964F40` | `--alpenglow` | Rare warm note on light grounds |
| Alpenglow light | `#DE9C8D` | `--champagne` | Display emphasis on dark: the italic word in a headline |

### The accent split is mandatory, not stylistic

One accent value cannot clear WCAG AA against both a linen ground and a near-black one. The math forbids it: to hit 4.5:1 against `#EEEAE3` the accent must be very dark, and to hit 4.5:1 against `#1B2B31` it must be light. So the accent exists as two tints of one hue.

Implementation: define `--gold` once as the light-ground verdigris, then redefine it inside dark containers. Custom properties inherit, so every descendant follows with no per-rule edits.

```css
:root{ --gold:#2F6D5C; }
nav, footer, .hero, .page-hero, .article-hero, .cta-band,
.statement, .strategy, .calc, .development, /* ...all dark containers */ {
  --gold:#77B5A2;
}
```

**The previous brand failed this.** Gold `#C8A24A` on off-white `#F5F3EF` measured **2.17:1** against a 4.5:1 standard, used 34+ times as section labels. Every value in this system was measured before it was adopted.

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

---

## Tokens: Typography

Three faces, each with one job. Do not add a fourth.

### Cormorant Garamond, the display face
- Weights 300, 400, 500. Italic used for the emphasised word only.
- Headlines, section titles, large numerals, pull quotes, drop caps.
- Sizes 26 to 68px. Line height 1.02 to 1.2. Letter spacing near zero; it is already narrow.
- The italic in a headline takes the accent color: verdigris on light, alpenglow light on dark.

### Montserrat, the label face
- Weights 500, 600. **Always uppercase, always letterspaced 0.16em to 0.32em.**
- Eyebrows, nav, buttons, field labels, metadata, stat captions.
- Sizes 8.5 to 12px. Never above 14px; if it wants to be bigger it should be Cormorant.

### Inter, the body face
- Weight 300 for body, 400 for emphasis.
- Paragraphs, form inputs, captions, anything read in sentences.
- Sizes 13 to 16.5px. Line height 1.6 to 1.9. Long-form article copy runs 16.5px at 1.9.

### Scale

| Role | Face | Size | Line height |
|------|------|------|-------------|
| Page hero | Cormorant 500 | 38–68px | 1.06 |
| Section head | Cormorant 500 | 32–44px | 1.12 |
| Card head | Cormorant 500 | 22–26px | 1.15 |
| Body large | Inter 300 | 16.5px | 1.9 |
| Body | Inter 300 | 14.5–15px | 1.75 |
| Caption | Inter 300 | 12.5–13px | 1.6 |
| Eyebrow | Montserrat 600 | 10.5px | 1.4 |
| Micro label | Montserrat 600 | 8.5px | 1.4 |

---

## Tokens: Spacing & Shape

**Base unit:** 4px. Section rhythm runs 74px to 150px vertical.

**Radius: zero.** Every panel, card, button and input in this system has square corners. The one exception is a circle, used only for avatars, social pills and the map pin. Rounded rectangles are not part of the vocabulary.

**Elevation is hairlines, not shadows.** Separation comes from a 1px `#DAD5CB` rule or from a surface change. Drop shadows are reserved for genuinely floating chrome (modal overlays), never for cards.

**Surfaces**

| Level | Value | Purpose |
|---|---|---|
| 0 | `#EEEAE3` | Page ground |
| 1 | `#F7F4EF` | Cards, form panels |
| 2 | `#2F5559` | Mid structural bands |
| 3 | `#1B2B31` | Deep bands, nav, footer |

---

## Components

**Primary button.** Solid `#1B2B31`, linen text, square, Montserrat 600 at 10px / 0.2em uppercase, padding 13px 24px. Inverts on hover.

**Accent button.** Solid verdigris, card-colored text. One per view at most. On dark grounds the fill becomes verdigris light and the text becomes deep water.

**Outline button.** Transparent, 1px `#DAD5CB` border, deep water text. Border goes verdigris on hover. This is the default for paired actions (Guide + Roadmap).

**Eyebrow.** Montserrat 600, 10.5px, 0.32em, uppercase, accent colored, often preceded by a 30px hairline rule in the same color.

**Card.** `#F7F4EF` on a 1px `#DAD5CB` border, square, 24 to 48px padding. Border goes verdigris on hover. No shadow.

**Input.** Transparent fill, 1px bottom border only on light forms; full 1px border on dark. Border brightens to the accent on focus. Never a rounded pill.

**Focus state.** `outline: 2px solid var(--gold); outline-offset: 3px;` defined once, globally. The previous site had **no visible focus indicator anywhere**; that is a WCAG 2.4.7 failure and must not recur.

---

## Imagery

**This is the rule that matters most.**

Real estate is a photography business. Photographs carry every page; type and color are the frame around them.

**Do not use vector illustration as a substitute for photography.** The previous site ran 40+ hand-drawn SVG shapes per page (cartoon skylines, geometric house outlines) against 4 real photographs sitewide. That single fact is what made it read as generated, ahead of any type or color choice. No palette fixes it.

What to shoot:
- **Neighborhoods.** Establishing frames that say a specific place: the Magnolia bluff, the Beacon Hill ridge, Seward Park's water edge. Ownable, never expires, and backs the born-and-raised claim.
- **Architecture and streetscape.** Craftsman detail, a DADU, a corner lot with visible potential. These carry the lot-reading angle.
- **Wide water and skyline.** Shot with empty sky or water in the middle third so text can sit on top.
- **One professional portrait.** Hire this out. It is the face of the site and cheap portraits read instantly.

Shoot on overcast Seattle mornings. The flat light is genuinely flattering and it is free. Minimum 2400px on the long edge. Strip EXIF before publishing; phone photos carry GPS.

**Never** use stock luxury interiors. They are a recognisable tell and they undo the point.

---

## Writing

Applies to anything client-facing. The goal is copy that reads like Louis wrote it.

- **No em-dashes.** This has recurred repeatedly. Use commas, colons, or split the sentence. Grep for it before shipping.
- **Vary the rhythm.** The previous site ran the identical beat in every section: eyebrow, then a serif headline with exactly one italic word, then a short paragraph, then a three-column grid. That metronome is as much a tell as any phrase. Break it deliberately.
- **Lead with the client's situation,** not credentials. The throughline is a tailored roadmap for them.
- Cut the standard tells: "in today's fast-paced market", "whether you're a first-time buyer or a seasoned investor", "unlock your dream home", stacked "moreover/furthermore".
- Prefer a concrete detail (a neighborhood quirk, a real number, an actual anecdote) over generic real-estate language.

---

## What must never be claimed

Louis holds a Washington broker license. Site copy is regulated advertising.

- **No sales statistics that are not real.** No invented closed-sale counts, volume figures, or average prices.
- **No press or award logos** without an actual placement.
- **No MLS listing data** without a licensed NWMLS IDX feed, and if one is added, the NWMLS disclaimer and a DMCA notice become mandatory in the footer.
- **No testimonial that is not a real client's words,** with their consent, attributed first name and last initial only.
- Placeholder copy ("quote coming soon", "bio coming soon") must never be live. Ship fewer real items instead.

The brokerage disclosure "Licensed Real Estate Broker, eXp Realty, LLC, Washington State" stays in the footer of every page.

---

## Quick start

```css
:root{
  /* Sound & Patina */
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

/* the accent split: mandatory */
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

## Using this as a prompt

Paste the whole file. The short version, if you need one:

> Design for a Seattle real estate broker. Palette "Sound & Patina": warm linen ground `#EEEAE3`, deep water `#1B2B31`, teal `#2F5559`, body `#34474C`, hairlines `#DAD5CB`. Accent is verdigris, `#2F6D5C` on light grounds and `#77B5A2` on dark, never one value for both. A rare warm note, alpenglow `#964F40` on light and `#DE9C8D` on dark, used only for the italic word in a headline. No gold, no black, no white. Cormorant Garamond for display, Montserrat uppercase letterspaced for labels, Inter light for body. Square corners everywhere except circles for avatars. Hairline rules instead of shadows. Photography carries every page; never vector illustration in place of photos. No em-dashes in any copy.
