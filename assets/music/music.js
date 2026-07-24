/* ============================================================
   Vikas Collectives — Background Music (v9.1)
   File: assets/music.js — loaded on every page after reveal.js.

   What it does:
   - Picks a random track for every browsing SESSION. Different
     visitors hear different tracks, and the same visitor hears a
     different track each time they come back (never the same one
     twice in a row). Within one session the track stays the same
     across pages and resumes close to where it left off.
   - Music is opt-in: it starts on the first click of the floating
     note button (browsers block sound before a user interaction).
   - Once turned on, it continues across pages. The visitor can
     pause anytime.

   HOW TO ADD YOUR 10 MP3 FILES:
   1. Create the folder /assets/music/
   2. Copy your files in and name them exactly as listed below,
      or edit the list to match your own file names.
   3. Keep each file small (ideally under 1.5 MB, 96-128 kbps MP3)
      so pages stay fast.
   ============================================================ */
(function () {
  'use strict';

  var TRACKS = [
    'assets/music/track-01.mp3'
  ];
  var VOLUME = 0.35;          /* 0.0 to 1.0 — background level */
  var KEY_TRACK = 'vc-music-track';   /* this session's track          */
  var KEY_ON    = 'vc-music-on';      /* playing state, this session   */
  var KEY_POS   = 'vc-music-pos';     /* resume position, this session */
  var KEY_LAST  = 'vc-music-last';    /* last session's track (kept)   */
  var KEY_HINT  = 'vc-music-hint';    /* hint bubble shown once ever   */

  /* Session values live in sessionStorage, so every new visit (and
     every new tab) starts fresh with a new random track. Long-term
     values (last track, hint) live in localStorage. */
  function store(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  function read(k)     { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function storeLong(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function readLong(k)     { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function init() {
    /* ---- Pick this session's track ----
       Random on the first page of the session, then kept for the rest
       of the session. Excludes the previous session's track, so the
       same visitor always hears something different on a new visit. */
    var idx = parseInt(read(KEY_TRACK), 10);
    if (isNaN(idx) || idx < 0 || idx >= TRACKS.length) {
      var last = parseInt(readLong(KEY_LAST), 10);
      do {
        idx = Math.floor(Math.random() * TRACKS.length);
      } while (TRACKS.length > 1 && idx === last);
      store(KEY_TRACK, idx);
      storeLong(KEY_LAST, idx);
    }

    var audio = new Audio();
    audio.src = TRACKS[idx];
    audio.loop = true;
    audio.volume = VOLUME;
    audio.preload = read(KEY_ON) === '1' ? 'auto' : 'none';

    /* Resume near where the visitor left off on the previous page */
    var pos = parseFloat(read(KEY_POS));
    if (!isNaN(pos) && pos > 0) {
      audio.addEventListener('loadedmetadata', function () {
        if (pos < audio.duration - 1) audio.currentTime = pos;
      }, { once: true });
    }

    /* ---- Floating button ---- */
    var btn = document.createElement('button');
    btn.className = 'music-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Play background music');
    btn.setAttribute('aria-pressed', 'false');
    btn.title = 'Play music';
    btn.innerHTML =
      '<svg class="icon-note" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>' +
      '<svg class="icon-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
    document.body.appendChild(btn);

    /* One-time hint bubble so visitors discover the feature */
    if (!readLong(KEY_HINT)) {
      var hint = document.createElement('span');
      hint.className = 'music-hint';
      hint.textContent = 'Listen while you browse \u266A';
      document.body.appendChild(hint);
      storeLong(KEY_HINT, '1');
      setTimeout(function () { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 6500);
    }

    function setUI(playing) {
      btn.classList.toggle('playing', playing);
      btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      btn.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
      btn.title = playing ? 'Pause music' : 'Play music';
    }

    function play() {
      audio.play().then(function () {
        setUI(true);
        store(KEY_ON, '1');
      }).catch(function () {
        /* Browser refused (no user gesture yet) — resume on first
           interaction anywhere on the page instead. */
        armResume();
      });
    }
    function pause() {
      audio.pause();
      setUI(false);
      store(KEY_ON, '0');
      store(KEY_POS, audio.currentTime);
    }

    btn.addEventListener('click', function () {
      if (audio.paused) { play(); } else { pause(); }
    });

    /* If music was ON when the visitor left the previous page, try to
       continue automatically; if the browser blocks it, the very first
       click / tap / key press anywhere resumes it seamlessly. */
    var armed = false;
    function armResume() {
      if (armed) return;
      armed = true;
      var resume = function () {
        if (read(KEY_ON) === '1' && audio.paused) { play(); }
        document.removeEventListener('pointerdown', resume);
        document.removeEventListener('keydown', resume);
      };
      document.addEventListener('pointerdown', resume);
      document.addEventListener('keydown', resume);
    }
    if (read(KEY_ON) === '1') { play(); }

    /* Remember the playback position for the next page */
    var lastSave = 0;
    audio.addEventListener('timeupdate', function () {
      var now = Date.now();
      if (now - lastSave > 3000) {
        lastSave = now;
        store(KEY_POS, audio.currentTime);
      }
    });
    window.addEventListener('pagehide', function () {
      if (!audio.paused) store(KEY_POS, audio.currentTime);
    });

    /* If the visitor's assigned file is missing or fails to load,
       quietly reassign a different track for next time and hide
       the button on this page. */
    audio.addEventListener('error', function () {
      var next = (idx + 1) % TRACKS.length;
      store(KEY_TRACK, next);
      btn.style.display = 'none';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
