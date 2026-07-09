# Vikas Collectives — New Website

A 6-page, SEO-optimized static website. No build step needed — upload all files
to your hosting (cPanel / Netlify / GitHub Pages etc.) and it works.

## Pages
- index.html — Home
- live-saxophone-shows-delhi.html — Live shows (weddings / corporate / parties)
- saxophone-lessons.html — Lessons (online + Delhi NCR)
- about.html — Bio & career highlights
- testimonials.html — Client reviews (with Review schema)
- contact.html — Bookings & enquiries
- sitemap.xml, robots.txt — for Google Search Console

## BEFORE GOING LIVE — replace these placeholders
1. **Photos**: add real images to /assets/ using these exact filenames referenced in meta tags:
   - vikas-gautam-saxophonist-delhi.jpg (main portrait, also used for social sharing)
   - vikas-gautam-live-saxophone-show.jpg
   - saxophone-lessons-delhi.jpg
   Compress them (use squoosh.app) and keep filenames lowercase.
2. **YouTube videos**: in index.html replace VIDEO_ID_1 and VIDEO_ID_2 with your
   actual YouTube video IDs (the part after watch?v= in the URL).
3. **Testimonials**: in testimonials.html paste the exact wording from your
   appreciation letters into each [Paste...] placeholder, and mirror the same
   text into the JSON-LD "reviewBody" fields in the <head>.
4. **Verify contact details**: phone, WhatsApp, email and YouTube channel URL
   appear in the header/footer of every page — confirm they are correct.

## After going live
- Verify the site in Google Search Console and submit sitemap.xml
- Create a Google Business Profile (Musician / Music Instructor, Delhi NCR)
- Test schema at https://search.google.com/test/rich-results

## v4 updates
- Show count: 3,300+ everywhere, 13+ countries stat
- Footer: address removed; Facebook, Instagram, YouTube, LinkedIn links added
- 3 photos live on Home / About / Live Shows + Gallery page
- Text-resize control (A- / A / A+) in the header of every page
- Blog removed; Gallery added with placeholder slots
- Add your 50+ celebrity photos to /assets/gallery/ and follow the
  <figure> template inside gallery.html (instructions in HTML comments)

## Vaastu-aligned layout choices
- Brand/identity fixed in the top-left (Ishan/north-east corner of the layout)
- Light, sattvic cream backgrounds for all reading areas; heavy darks kept
  to the top (sky) and bottom (base) bands only
- Brass/gold — an auspicious tone — as the single accent throughout
- Clutter-free symmetric grid, generous whitespace, balanced left-right weight
- Contact and action buttons placed in the lower-right flow of sections
  (Agneya/south-east, the direction of energy and action)
