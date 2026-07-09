# Project Memory — Louis Lock Real Estate site

Facts and decisions specific to this repo. Not personal/career info — see [MEMORY.md](MEMORY.md) for that.

## Site structure
- Static HTML site, hand-authored (index, about, residential, commercial, contact, resources, blog).
- Blog currently covers Seattle neighborhoods: Beacon Hill, Magnolia, Mt Baker, Seward Park.
- Served locally via `.claude/serve.ps1` + `.claude/launch.json`.

## Brand voice
- Tagline energy: "Keep Seattle, Seattle" — growth-minded but neighborhood-protective.
- Site emphasizes: born-and-raised-local credibility, serves first-time buyers through investors/commercial/development clients.
- Apply the writing-style rules in [RULES.md](RULES.md) to any blog/listing copy generated for this site.

## Business direction (relevant to site content)
- Early-stage push toward development advisory: helping clients start developing their own properties and make money on it, not just brokering sales. This lines up with the existing "Development" flow-node and the commercial page's "acquisition, leasing, and development" advisory language — it's a real, current direction, not aspirational filler.
- If/when blog posts, service pages, or CTAs get written around development, lean into this: practical, client-can-do-this framing, not "Louis the developer" framing (that's a later stage).
- Apply the client-framing rule in [RULES.md](RULES.md) here specifically: development content should read as "here's how we build your roadmap together," not "here's what Louis can build."

## Contact info (public, on contact.html)
- Phone: (206) 618-6409
- Email: inquiry@louisklock.com — live as of 2026-07-09 (Google Workspace, MX/SPF verified via DNS lookup before swapping the site over). No longer using the exprealty.com placeholder.
- Office address shown: 1455 NW Leary Way, Suite 400, Seattle, WA 98107. This is intentionally *not* Louis's home address — see privacy rule in [RULES.md](RULES.md) / [MEMORY.md](MEMORY.md).

## Decisions log
- 2026-07-09: Updated contact.html with real phone/email/office address, replacing placeholder data. Used exprealty.com email initially since inquiry@louisklock.com wasn't live yet; used a real office address instead of Louis's home address, per privacy rule.
- 2026-07-09: louisklock.com email hosting (Google Workspace) confirmed live — MX records point to Google, SPF record present. Swapped contact.html from louis.lock@exprealty.com to inquiry@louisklock.com.
