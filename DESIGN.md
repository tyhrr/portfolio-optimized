---
name: Alan Salva
description: A single-page portfolio drawn as an Adriatic nautical chart; the career is a plotted course and the projects are its waypoints.
colors:
  water: "#E3EEF3"
  water-deep: "#D3E3EB"
  shoal: "#A8CDE0"
  land: "#E6D59E"
  ink: "#14212B"
  ink-soft: "#3B4B57"
  magenta: "#B0217F"
  magenta-deep: "#8E1866"
  paper: "#F4F8FA"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(3.2rem, 2.2rem + 4.6vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2.4rem, 1.9rem + 2.4vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1.1vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  note:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.3rem, 1.18rem + 0.5vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.02rem, 0.98rem + 0.2vw, 1.14rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(0.84rem, 0.8rem + 0.15vw, 0.92rem)"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 80"
  numeral:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  mark: "50%"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2.2vw, 3rem)"
  neatline: "10px"
  neatline-compact: "6px"
  frame-offset: "5px"
components:
  button-primary:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "2.9rem"
  button-primary-hover:
    backgroundColor: "{colors.magenta-deep}"
    textColor: "{colors.paper}"
  button-plain:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 0 0.15rem"
  button-plain-hover:
    textColor: "{colors.magenta-deep}"
  lang-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "2.25rem"
    width: "2.75rem"
  lang-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  cartouche:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 2.5vw, 2.5rem)"
  inset:
    backgroundColor: "{colors.water-deep}"
    rounded: "{rounded.none}"
  inset-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.25rem 0.6rem"
  waypoint-mark:
    backgroundColor: "{colors.water}"
    textColor: "{colors.magenta-deep}"
    typography: "{typography.numeral}"
    rounded: "{rounded.mark}"
    size: "2.1rem"
  waypoint-mark-lit:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.paper}"
---

# Design System: Alan Salva

## Overview

**Creative North Star: "The Passage Chart"**

The whole page is one nautical chart sheet. A pale deep-water ground carries buff land masses, shallow-water tints, dotted depth contours, italic soundings and a compass rose; a graduated black-and-white neatline frames the sheet at the viewport edge. Content sits on the chart the way a chart's own furniture does: the title block is a double-ruled cartouche, images are chart plans (insets) with a small lettered label tab, and the career is a magenta course line whose numbered waypoints are the projects. Contact is landfall: the page ends on land buff behind a hand-drawn coastline.

The world is light and printed, read by daylight on a chart table. It is flat ink-on-paper: hairline ink rules, tinted fields, no shadows, no gradients other than the printed hatching and the neatline. Type follows chart lettering convention: Spectral roman for land and proper names, Spectral italic for water, notes and asides, Archivo condensed caps with tracking for chart lettering, labels and actions, tabular numerals for waypoints and dates. Iconography is authored SVG stroke only.

Density is calm and editorial: generous section padding, a 12-column grid, long measure capped around 60ch.

**Key Characteristics:**
- One continuous chart sheet inside a graduated ink/paper neatline.
- Region fields (water, shoal, land) instead of cards or panels.
- Double-ruled frames (1px border plus 1px outline at 5px offset) for cartouche and insets.
- Magenta is navigation ink: the course, the waypoints, the one primary action.
- Roman for land, italic for water, condensed caps for lettering.
- Flat; depth comes from tint and rule, never from shadow.

## Colors

A chart palette: three region tints, one ink, one paper, and a single navigational magenta.

### Primary
- **Chart Magenta** (magenta): the course line, waypoint rings and numerals, the single primary action, and system states (focus ring, text selection). It is navigation ink, not decoration.
- **Deep Chart Magenta** (magenta-deep): hover and pressed state of magenta elements; resting color of waypoint numerals; hover color for plain links.

### Neutral
- **Deep-Water Ground** (water): the page ground and the sticky top strip.
- **Survey Water** (water-deep): fills inside insets and empty plan slots; hover tint for toggles.
- **Shallow-Water Blue** (shoal): shoal regions on the chart field (at reduced opacity) and the portrait inset backing.
- **Land Buff** (land): land masses on the chart and the whole landfall (contact) section.
- **Chart Ink** (ink): text, coastlines, every rule and frame, the neatline bars, the active language toggle.
- **Faded Ink** (ink-soft): secondary prose, soundings, notes, stack lists, colophon.
- **Chart Paper** (paper): cartouche ground, inset label tabs, the experience log band, neatline light bars, text on ink and magenta.

### Named Rules
**The Navigation Ink Rule.** Magenta marks only the course, its waypoints, the one primary action per view, and focus/selection. A second magenta filled button on a screen breaks the chart.

**The Region Field Rule.** Sections change by changing region (water, paper, land), separated by a 1px ink rule or a drawn coastline, never by floating cards.

## Typography

**Display Font:** Spectral (with Georgia, serif), self-hosted, weights 300/400/600 roman and 300/400 italic
**Label Font:** Archivo (with Arial Narrow, sans-serif), variable width, used condensed (78-85% stretch)

**Character:** A literary chart serif doing all the reading and naming, against a narrow grotesque doing the cartographer's lettering. The contrast is roman versus italic versus caps, not a rainbow of weights.

### Hierarchy
- **Display** (Spectral 300, fluid up to 6rem, 0.95): the name in the title cartouche only.
- **Headline** (Spectral 300, fluid up to 4rem, 1.1): section titles (Projects, Experience, Let's talk). The contact email runs at a similar light display size.
- **Title** (Spectral 400, fluid up to 2.5rem): project names; the italic 300 variant at the same size sets the one-line role under the name.
- **Note** (Spectral italic, fluid up to 1.6rem, 1.4): section sub-lines and the landfall lead; italic is the voice of the water and the margin.
- **Body** (Spectral 400, fluid ~1.02-1.14rem, 1.6): prose, capped at 46-62ch.
- **Label** (Archivo 600, condensed, ~0.84-0.92rem, 0.06-0.12em tracking, uppercase): navigation, buttons, link rows, dates, stack lists, inset tabs, aside block heads.
- **Numeral** (Archivo 700, tabular): waypoint and project marks, dates.

Chart lettering inside the SVG field follows the same convention at fixed sizes: water names in widely tracked Spectral italic, land names in widely tracked Spectral 600 caps, soundings in small Spectral italic in faded ink.

### Named Rules
**The Chart Lettering Rule.** Land and proper names are roman; water, notes and asides are italic; instructions and labels are condensed caps. Pick the voice by what the text is, not by how loud it should be.

**The Tabular Fix Rule.** Every number that marks position (waypoint, date range) uses tabular numerals.

## Layout

A 12-column grid with a fluid gutter (`spacing.gutter`) governs the hero, projects and experience log. The sheet is padded by the neatline width on all sides; the sticky top strip sits inside it with a 1px ink rule beneath.

- **Hero / chart field:** the chart SVG fills the hero behind the content. Cartouche spans roughly the left seven columns; the portrait inset sits in the last four, right-aligned. The course polyline and waypoint list share one percentage coordinate space, so each waypoint mark sits exactly on its course vertex; names hang beside (right, left) or below the mark.
- **Projects:** alternating 7/5 rows, plan inset and text swapping sides on even rows, aligned center.
- **Experience log:** a paper band; entries take eight columns with a fixed date column and the text column, separated by faded hairlines; Training, Languages and Tools stack in the right three columns.
- **Landfall:** a drawn coastline SVG transitions paper into land buff; contact runs full width on land.

**Responsive band.** At 1100px the cartouche widens and the log aside moves below the entries as three columns. At 820px the neatline thins (to `spacing.neatline-compact`, shorter ticks), the top-strip nav wraps to its own row, the hero stacks (small portrait inset first, then cartouche), and the chart becomes its own portrait-ratio band below the cartouche with a separate tall chart and course drawing (Río de la Plata at the foot, the Adriatic at the head) and its own waypoint coordinates; projects and log entries become single columns. Below 480px the top-strip CV link drops (the CV stays in the cartouche and contact).

## Elevation & Depth

Flat. There are no drop shadows anywhere. Depth is conveyed the way a printed chart conveys it: region tints (water, shoal, land, paper), dotted depth contours, fine printed hatching inside insets (horizontal rules behind the portrait, 45-degree hatching in empty plan slots), and z-order only to keep content above the chart field. The single box-shadow in the build is a 1px ink side rule that draws the sheet's inner border, not elevation.

### Named Rules
**The Printed Sheet Rule.** If it needs to stand forward, frame it with ink or give it paper; never lift it with a shadow or blur.

## Shapes

Square-cornered throughout (`rounded.none`): frames, buttons, toggles, tabs, bands. The only round forms are chart-native: waypoint and project marks are circles (`rounded.mark`) with a 2px magenta ring, and the compass rose. Edges are 1px ink hairlines; the signature frame is the double rule, a 1px border with a 1px outline at `spacing.frame-offset`, with a small outer margin to keep the outline clear. Organic curves belong only to coastlines, land, shoals, contours and the landfall shore, drawn as SVG with round joins.

**The Neatline.** The sheet edge is a graduated border: alternating ink and paper bars (24px ticks, 16px on phones) on all four sides at `spacing.neatline` width. It frames the page once; do not repeat it on inner elements.

## Components

### Buttons
Lettered, square, decisive.
- **Shape:** square corners (0), minimum height about 2.9rem.
- **Primary:** chart magenta fill, paper text, condensed uppercase label; one per view ("Write to me").
- **Hover / Focus:** fill deepens to deep magenta over 200ms on the expo-out ease; focus is a 2px magenta outline at 3px offset (global).
- **Plain:** no fill, ink text with a 1px ink underline rule; hover turns text and rule deep magenta. Used for the secondary action and project links (with a small authored SVG arrow that nudges up-right on hover).

### Language toggle
- Three square cells (EN / ES / HR) in a 1px ink box with ink dividers; active cell is ink-filled with paper text, inactive cells take a survey-water tint on hover. Pressed state is carried by `aria-pressed`.

### Navigation
- Sticky top strip on the water ground with a 1px ink rule below: the name in Spectral 600 at left, condensed-caps links (underline on hover), the CV link carrying a permanent ink underline, then the language toggle. On phones the links wrap to a full-width row.

### Title cartouche
- Paper ground, double-ruled ink frame, generous fluid padding. Holds display name, italic role, faded-ink intro and the action pair. It is the chart's title block; one per page.

### Chart insets (plans)
- Double-ruled ink frame over a survey-water fill, with a paper label tab pinned bottom-left (ink top and right rules, condensed caps: "Plan A · Croatia", "Plan 1 · …"). Used for the portrait and project screenshots. An empty plan shows 45-degree printed hatching until a screenshot is supplied; never fill it with invented imagery.

### Course and waypoints (signature)
- A magenta 2.5px non-scaling polyline crosses the chart field. Each project is a waypoint: a 2.1rem circle with a 2px magenta ring on water, a tabular numeral in deep magenta, and the project name in Spectral italic on a translucent water backing. Hover, focus, or the matching project being in view lights the mark (magenta fill, paper numeral, slight scale). Project rows below repeat the numbered ring beside their title and light it in the same way.
- **Motion:** on load the course is plotted west to east (clip reveal, 2.4s, expo-out), and each waypoint mark lands in sequence with a brief magenta flash. Under reduced motion the course and marks render in their end state; nothing is hidden waiting for animation.

### Experience log
- Paper band; each entry is a date in condensed tabular caps beside a roman title with the employer in faded italic, then body prose; faded ink hairlines between entries. Aside blocks head with condensed caps over a 1px ink rule.

### Landfall
- A drawn coastline with an ink shore line hands the page from paper onto land buff. The email is set at light display size with a magenta underline; secondary contact links are a row of condensed caps above an italic colophon.

## Do's and Don'ts

### Do:
- **Do** treat every new section as a region of the same chart: water, paper or land, divided by a 1px ink rule or a drawn coastline.
- **Do** frame featured content with the double rule (1px border, 1px outline at 5px offset) and a paper label tab in condensed caps.
- **Do** keep magenta for the course, waypoints, the one primary action, and focus/selection.
- **Do** set land and proper names roman, water and notes italic, labels in condensed Archivo caps, positional numbers tabular.
- **Do** draw icons and chart furniture as authored SVG strokes in ink.
- **Do** let motion plot the course once and land the fixes; always ship the end state visible under reduced motion.

### Don't:
- **Don't** add drop shadows, blur, or rounded cards; the sheet is printed and flat.
- **Don't** add rounded corners except on chart-native circles (waypoint marks, compass).
- **Don't** use icon fonts, emoji, or glyph icons in place of authored SVG.
- **Don't** introduce a second accent hue or a second magenta filled button in a view.
- **Don't** repeat the graduated neatline inside the page; it frames the sheet once.
- **Don't** fill empty plan insets with placeholder or invented imagery; the hatching is the empty state.
