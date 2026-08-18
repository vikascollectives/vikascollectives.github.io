/* ============================================================
   Testimonials Showcase (Option 3) - Vikas Collectives
   Featured video hero + thumbnail strip + filterable letters wall

   HOW TO ADD YOUR CONTENT
   -----------------------
   1) VIDEOS: for each YouTube video, copy the video ID
      (the part after "v=" in the URL, e.g. dQw4w9WgXcQ)
      and fill one line in the VIDEOS array:
        { id: "VIDEO_ID", name: "Client Name", role: "Designation / Company" }
      The FIRST real video in the list becomes the featured hero video.
      Put your strongest testimonial first.

   2) LETTERS: already filled in with all 35 signed letters
      (files live in assets/letters/). To add a new letter later,
      drop the JPG in that folder and add one line to LETTERS:
        { file: "assets/letters/your-file.jpg", name: "Client Name", cat: "corporate" }
      cat must be one of the keys in CATEGORIES below.
      You can rename category labels or add new ones there.
   ============================================================ */

var CATEGORIES = {
  institutions: "Embassies & Institutions",
  government: "Government & Judiciary",
  corporate: "Corporate",
  private: "Private Hosts",
  students: "Students"
};

var VIDEOS = [
  { id: "qS4l5LUUPiQ", name: "Kushal Pal (K.P.) Singh", role: "Former long-time CEO and Chairman, DLF" },
  { id: "zCBzXprNJUo", name: "Arup Kumar Bhagwati", role: "Executive Director, Indian Oil Corporation Limited (IOCL)" },
  { id: "2Uf3Z70Yi2s", name: "Neena Gupta Ji", role: "Indian Actress and Television Director" },
  { id: "yhdtqcxi1ic", name: "Dr Dipak Raj", role: "Consultant Orthopaedic Surgeon, London" },
  { id: "VIDEO_ID_05", name: "Client Name 5", role: "Designation, Organisation" },
  { id: "VIDEO_ID_06", name: "Client Name 6", role: "Designation, Organisation" },
  { id: "VIDEO_ID_07", name: "Client Name 7", role: "Designation, Organisation" },
  { id: "VIDEO_ID_08", name: "Client Name 8", role: "Designation, Organisation" },
  { id: "VIDEO_ID_09", name: "Client Name 9", role: "Designation, Organisation" },
  { id: "VIDEO_ID_10", name: "Client Name 10", role: "Designation, Organisation" },
  { id: "VIDEO_ID_11", name: "Client Name 11", role: "Designation, Organisation" },
  { id: "VIDEO_ID_12", name: "Client Name 12", role: "Designation, Organisation" },
  { id: "VIDEO_ID_13", name: "Client Name 13", role: "Designation, Organisation" },
  { id: "VIDEO_ID_14", name: "Client Name 14", role: "Designation, Organisation" },
  { id: "VIDEO_ID_15", name: "Client Name 15", role: "Designation, Organisation" },
  { id: "VIDEO_ID_16", name: "Client Name 16", role: "Designation, Organisation" },
  { id: "VIDEO_ID_17", name: "Client Name 17", role: "Designation, Organisation" },
  { id: "VIDEO_ID_18", name: "Client Name 18", role: "Designation, Organisation" },
  { id: "VIDEO_ID_19", name: "Client Name 19", role: "Designation, Organisation" }
];

var LETTERS = [
  { file: "assets/letters/letter-us-embassy-new-delhi.jpg", name: "US Embassy, New Delhi", cat: "institutions" },
  { file: "assets/letters/letter-the-british-school-new-delhi.jpg", name: "The British School, New Delhi", cat: "institutions" },
  { file: "assets/letters/letter-kp-singh-dlf.jpg", name: "K.P. Singh - Chairman Emeritus, DLF", cat: "corporate" },
  { file: "assets/letters/letter-pooja-virdi-dlf.jpg", name: "Office of Chairman Emeritus, DLF Ltd.", cat: "corporate" },
  { file: "assets/letters/letter-satish-golcha-ips.jpg", name: "Satish Golcha IPS - Commissioner of Police, Delhi", cat: "government" },
  { file: "assets/letters/letter-sandeep-rathor-ips.jpg", name: "Sandeep Rathor IPS - DGP, Chennai", cat: "government" },
  { file: "assets/letters/letter-upma-chaudhry-ias.jpg", name: "Upma Chaudhry IAS - Director", cat: "government" },
  { file: "assets/letters/letter-pavan-k-varma-ifs.jpg", name: "Ambassador Pavan K. Varma IFS", cat: "government" },
  { file: "assets/letters/letter-gopal-singh-supreme-court.jpg", name: "Gopal Singh - Hony. Secretary, Supreme Court Bar", cat: "government" },
  { file: "assets/letters/letter-deepak-chaudhry-safdarjung.jpg", name: "Dr. Deepak Chaudhry - Director, Safdarjung Hospital", cat: "government" },
  { file: "assets/letters/letter-showtime-events.jpg", name: "Showtime Events (India) Pvt. Ltd.", cat: "corporate" },
  { file: "assets/letters/letter-naresh-talwar-talbros.jpg", name: "Naresh Talwar - Chairman, Talbros", cat: "corporate" },
  { file: "assets/letters/letter-anil-rajput-itc.jpg", name: "Anil Rajput - ITC", cat: "corporate" },
  { file: "assets/letters/letter-anil-k-agarwal-cosmos-group.jpg", name: "Anil K. Agarwal - President, Cosmos Group", cat: "corporate" },
  { file: "assets/letters/letter-umesh-mehta-jubilant.jpg", name: "Umesh Mehta - CIO, Jubilant", cat: "corporate" },
  { file: "assets/letters/letter-prem-bajaj-tdi-1.jpg", name: "Prem Bajaj - TDI International", cat: "corporate" },
  { file: "assets/letters/letter-prem-bajaj-tdi-3.jpg", name: "TDI International India (P) Ltd.", cat: "corporate" },
  { file: "assets/letters/letter-rv-narayanan-bhadra-international.jpg", name: "R.V. Narayanan - VP, Bhadra International", cat: "corporate" },
  { file: "assets/letters/letter-chandan-bhandari-bic-logistics.jpg", name: "Chandan Bhandari - BIC Logistics Ltd.", cat: "corporate" },
  { file: "assets/letters/letter-mahabala-devadiga-lotus-freight.jpg", name: "Mahabala Devadiga - Director, Lotus Freight", cat: "corporate" },
  { file: "assets/letters/letter-rachit-alphacorp.jpg", name: "Rachit Chaudhary - Alpha Corp", cat: "corporate" },
  { file: "assets/letters/letter-rajiv-mohan-cherry-hill.jpg", name: "Rajiv Mohan - Cherry Hill Interiors", cat: "corporate" },
  { file: "assets/letters/letter-sushil-mittal-saksham.jpg", name: "Sushil Mittal - Saksham Advisory Services", cat: "corporate" },
  { file: "assets/letters/letter-nitin-aggarwal.jpg", name: "Nitin Aggarwal - MD, Mowgz Energy International", cat: "corporate" },
  { file: "assets/letters/letter-vikas-dhingra.jpg", name: "Vikas Dhingra - Speciality Merchandising Services", cat: "corporate" },
  { file: "assets/letters/letter-simpsy-tekchandani.jpg", name: "Simpsy Teckchandani - CEO, AeroX School of Aviation", cat: "corporate" },
  { file: "assets/letters/letter-dr-sushant-umre.jpg", name: "Dr. Sushant Umre - Dental Aesthetics", cat: "corporate" },
  { file: "assets/letters/letter-defence-colony-club.jpg", name: "Defence Colony Club, New Delhi", cat: "institutions" },
  { file: "assets/letters/letter-ravi-shankar-kakateeya.jpg", name: "M. Ravi Shankar - Kakateeya CGHS", cat: "institutions" },
  { file: "assets/letters/letter-pv-kapur-senior-advocate.jpg", name: "P.V. Kapur - Senior Advocate, New Delhi", cat: "private" },
  { file: "assets/letters/letter-ajay-bahl.jpg", name: "Ajay Bahl - New Delhi", cat: "private" },
  { file: "assets/letters/letter-anand-singh.jpg", name: "Anand Singh - New Delhi", cat: "private" },
  { file: "assets/letters/letter-rajesh-monga.jpg", name: "Rajesh Monga - New Delhi", cat: "private" },
  { file: "assets/letters/letter-ajay-jain-ca.jpg", name: "CA Ajay Jain - Saxophone Student", cat: "students" }
];

/* ============================================================
   No edits needed below this line
   ============================================================ */
(function () {
  "use strict";

  var realVideos = VIDEOS.filter(function (v) {
    return v.id && v.id.indexOf("VIDEO_ID") !== 0;
  });

  /* ---------- Featured hero player ---------- */
  var hero = document.getElementById("tstHero");
  var stage = hero ? hero.querySelector(".stage") : null;
  var heroMeta = hero ? hero.querySelector(".tst-hero-meta") : null;
  var heroPlay = hero ? hero.querySelector(".tst-hero-play") : null;
  var currentIndex = 0;

  function setHero(i, autoplay) {
    if (!stage || !realVideos.length) return;
    currentIndex = i;
    var v = realVideos[i];
    hero.classList.toggle("playing", !!autoplay);
    if (autoplay) {
      stage.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' + v.id + '?autoplay=1&rel=0" ' +
        'title="Video testimonial by ' + v.name + '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    } else {
      stage.innerHTML =
        '<img src="https://i.ytimg.com/vi/' + v.id + '/maxresdefault.jpg" ' +
        'onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg\'" ' +
        'alt="Video testimonial by ' + v.name + ' for saxophonist Vikas Gautam">';
    }
    if (heroMeta) {
      heroMeta.innerHTML = "<strong>" + v.name + "</strong><small>" + (v.role || "") + "</small>";
    }
    var clips = document.querySelectorAll(".tst-clip");
    Array.prototype.forEach.call(clips, function (c, idx) {
      c.classList.toggle("active", idx === i);
    });
  }

  if (heroPlay) {
    heroPlay.addEventListener("click", function () { setHero(currentIndex, true); });
  }

  /* ---------- Thumbnail strip ---------- */
  var strip = document.getElementById("tstStrip");
  if (strip) {
    if (realVideos.length) {
      var sFrag = document.createDocumentFragment();
      realVideos.forEach(function (v, i) {
        var clip = document.createElement("article");
        clip.className = "tst-clip" + (i === 0 ? " active" : "");
        clip.setAttribute("tabindex", "0");
        clip.setAttribute("role", "button");
        clip.setAttribute("aria-label", "Play video testimonial by " + v.name);
        clip.dataset.index = i;
        clip.innerHTML =
          '<div class="thumb">' +
          '<img loading="lazy" src="https://i.ytimg.com/vi/' + v.id + '/mqdefault.jpg" alt="Video testimonial by ' + v.name + ' for saxophonist Vikas Gautam">' +
          '<span class="mini-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>' +
          "</div>" +
          '<div class="meta"><strong>' + v.name + "</strong><small>" + (v.role || "") + "</small></div>";
        sFrag.appendChild(clip);
      });
      strip.appendChild(sFrag);
      setHero(0, false);
    } else {
      strip.innerHTML = '<p class="tst-empty">Video testimonials are being uploaded. Please check back soon.</p>';
      if (hero) hero.style.display = "none";
    }

    strip.addEventListener("click", function (e) {
      if (strip.classList.contains("dragged")) return;
      var clip = e.target.closest(".tst-clip");
      if (!clip) return;
      setHero(parseInt(clip.dataset.index, 10), true);
      var heroTop = hero.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: heroTop, behavior: "smooth" });
    });

    strip.addEventListener("keydown", function (e) {
      var clip = e.target.closest(".tst-clip");
      if (clip && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        clip.click();
      }
    });

    // Drag to scroll
    var isDown = false, startX = 0, startScroll = 0, moved = 0;
    strip.addEventListener("pointerdown", function (e) {
      isDown = true; moved = 0;
      startX = e.clientX;
      startScroll = strip.scrollLeft;
      strip.classList.add("dragging");
      strip.classList.remove("dragged");
    });
    window.addEventListener("pointermove", function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 6) { moved = 1; strip.classList.add("dragged"); }
      strip.scrollLeft = startScroll - dx;
    });
    window.addEventListener("pointerup", function () {
      if (!isDown) return;
      isDown = false;
      strip.classList.remove("dragging");
      if (moved) setTimeout(function () { strip.classList.remove("dragged"); }, 50);
    });

    // Mouse wheel scrolls horizontally
    strip.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        strip.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // Arrow buttons
    var prevBtn = document.querySelector(".tst-strip-prev");
    var nextBtn = document.querySelector(".tst-strip-next");
    function stripStep() { return Math.max(strip.clientWidth * 0.7, 220); }
    if (prevBtn) prevBtn.addEventListener("click", function () { strip.scrollLeft -= stripStep(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { strip.scrollLeft += stripStep(); });
  }

  /* ---------- Letters: chips + wall ---------- */
  var chipBar = document.getElementById("tstChips");
  var letterGrid = document.getElementById("tstLetterGrid");
  var activeLetters = LETTERS.filter(function (l) { return !!l.file; });
  var activeCat = "all";
  var visibleIndexes = [];

  function refreshVisible() {
    visibleIndexes = [];
    var cards = letterGrid.querySelectorAll(".tst-letter");
    Array.prototype.forEach.call(cards, function (card) {
      var idx = parseInt(card.dataset.index, 10);
      var show = activeCat === "all" || activeLetters[idx].cat === activeCat;
      card.classList.toggle("hidden", !show);
      if (show) visibleIndexes.push(idx);
    });
  }

  if (letterGrid && activeLetters.length) {
    var lFrag = document.createDocumentFragment();
    activeLetters.forEach(function (l, idx) {
      var fig = document.createElement("figure");
      fig.className = "tst-letter";
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", "View appreciation letter from " + l.name);
      fig.dataset.index = idx;
      fig.innerHTML =
        '<span class="seal" aria-hidden="true">&#9998;</span>' +
        '<img loading="lazy" src="' + l.file + '" alt="Signed appreciation letter from ' + l.name + ' for saxophonist Vikas Gautam">' +
        "<figcaption>" + l.name + "</figcaption>";
      lFrag.appendChild(fig);
    });
    letterGrid.appendChild(lFrag);

    // Build chips: All + only categories that actually have letters
    if (chipBar) {
      var counts = {};
      activeLetters.forEach(function (l) { counts[l.cat] = (counts[l.cat] || 0) + 1; });
      var chipHtml = '<button class="tst-chip" aria-pressed="true" data-cat="all">All <span class="cnt">(' + activeLetters.length + ")</span></button>";
      Object.keys(CATEGORIES).forEach(function (key) {
        if (!counts[key]) return;
        chipHtml += '<button class="tst-chip" aria-pressed="false" data-cat="' + key + '">' + CATEGORIES[key] + ' <span class="cnt">(' + counts[key] + ")</span></button>";
      });
      chipBar.innerHTML = chipHtml;
      chipBar.addEventListener("click", function (e) {
        var chip = e.target.closest(".tst-chip");
        if (!chip) return;
        activeCat = chip.dataset.cat;
        Array.prototype.forEach.call(chipBar.querySelectorAll(".tst-chip"), function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        refreshVisible();
      });
    }
    refreshVisible();
  } else if (letterGrid) {
    letterGrid.innerHTML = '<p class="tst-empty">Appreciation letters are being scanned and added. Please check back soon.</p>';
    if (chipBar) chipBar.style.display = "none";
  }

  /* ---------- Letter lightbox ---------- */
  var lb = document.getElementById("tstLightbox");
  if (!lb) return;
  var lbFrame = lb.querySelector(".frame");
  var lbCaption = lb.querySelector(".tst-lb-caption");
  var lbPrev = lb.querySelector(".tst-lb-prev");
  var lbNext = lb.querySelector(".tst-lb-next");
  var lbClose = lb.querySelector(".tst-lb-close");
  var lbPos = 0;
  var lastFocus = null;

  function showLetter(pos) {
    if (!visibleIndexes.length) return;
    lbPos = (pos + visibleIndexes.length) % visibleIndexes.length;
    var l = activeLetters[visibleIndexes[lbPos]];
    lbPrev.hidden = visibleIndexes.length < 2;
    lbNext.hidden = visibleIndexes.length < 2;
    lbFrame.innerHTML = '<img src="' + l.file + '" alt="Signed appreciation letter from ' + l.name + '">';
    lbCaption.textContent = l.name + "  (" + (lbPos + 1) + " of " + visibleIndexes.length + ")";
    if (!lb.classList.contains("open")) {
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }
  }

  function closeLightbox() {
    lb.classList.remove("open");
    lbFrame.innerHTML = "";
    lbCaption.textContent = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  if (letterGrid) {
    letterGrid.addEventListener("click", function (e) {
      var card = e.target.closest(".tst-letter");
      if (!card) return;
      lastFocus = card;
      showLetter(visibleIndexes.indexOf(parseInt(card.dataset.index, 10)));
    });
    letterGrid.addEventListener("keydown", function (e) {
      var card = e.target.closest(".tst-letter");
      if (card && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        card.click();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLetter(lbPos - 1);
    if (e.key === "ArrowRight") showLetter(lbPos + 1);
  });

  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", function () { showLetter(lbPos - 1); });
  lbNext.addEventListener("click", function () { showLetter(lbPos + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
})();