import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const FEATURED_PLAYLISTS = [
  {
    title: "Top Picks",
    subtitle: "Hot Now",
    // Ideally an image, but using gradients from CSS below
    className: "card card-gradient-1",
  },
  {
    title: "Chill Vibes",
    subtitle: "Curated for you",
    className: "card card-gradient-2",
  },
  {
    title: "Workout Beats",
    subtitle: "Boost your energy",
    className: "card card-gradient-3",
  },
  {
    title: "Soulful Classics",
    subtitle: "Throwback gems",
    className: "card card-gradient-4",
  },
];

const RECENTLY_PLAYED = [
  { title: "Dreamscape", artist: "Nova X", cover: "🎵" },
  { title: "Morning Run", artist: "Beatsmith", cover: "🎧" },
  { title: "Violet Skies", artist: "Aurora", cover: "🎤" },
  { title: "Golden Hour", artist: "AfroSun", cover: "🎸" },
  { title: "Waves", artist: "Seaside", cover: "🌊" },
  { title: "Pulse", artist: "DJ Quest", cover: "🎼" },
];

// PUBLIC_INTERFACE
export default component$(() => {
  useStylesScoped$(`
:root {
  --primary-text: #111217;
  --secondary-text: #5c5e6b;
  --sidebar-bg: #f5f5f7;
  --main-bg: #ffffff;
  --border: #ededf0;
  --accent-pink: #fc2a5a;
  --accent-blue: #375ff5;
  --accent-purple: #6f52fb;
  --card-gradient-1: linear-gradient(135deg, #fa4383 0%, #fc2a5a 100%);
  --card-gradient-2: linear-gradient(135deg, #c3ad6f 0%, #a5832d 100%);
  --card-gradient-3: linear-gradient(135deg, #aaa 0%, #555 100%);
  --card-gradient-4: linear-gradient(135deg, #375ff5 0%, #6f52fb 100%);
}

.music-home-root {
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: var(--main-bg);
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.sidebar {
  width: 17vw;
  min-width: 200px;
  max-width: 270px;
  background: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 0 30px 0;
  border-right: 1px solid var(--border);
  gap: 18px;
  z-index: 1;
}

.sidebar .logo {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 36px;
  margin-left: 34px;
  letter-spacing: -0.01em;
  color: var(--primary-text);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-left: 18px;
}

.nav-section {
  color: var(--secondary-text);
  font-size: 0.95rem;
  margin: 24px 0 6px 8px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.sidebar .nav-item {
  border-radius: 10px;
  padding: 0.5em 1em;
  font-weight: 600;
  font-size: 1rem;
  color: var(--secondary-text);
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.19s, color 0.17s;
  text-align: left;
}

.sidebar .nav-item.active, .sidebar .nav-item:focus, .sidebar .nav-item:hover {
  background: var(--accent-pink);
  color: #fff;
}

.topbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100vw;
  background: var(--main-bg);
  z-index: 3;
  box-shadow: 0 1.5px 6px rgba(17,18,23,0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 34px 0 234px;
}

.topbar .logo {
  display: none;
}

@media (max-width: 900px) {
  .sidebar {
    min-width: 70px;
    width: 70px;
    padding: 16px 0 16px 0;
  }
  .sidebar .logo {
    font-size: 1.15rem;
    margin-left: 15px;
    margin-bottom: 24px;
  }
  .sidebar nav .nav-item {
    white-space: nowrap;
    font-size: 0.9rem;
    padding-left: 0.6em;
    padding-right: 0.6em;
  }
  .sidebar nav .nav-item span:not(.icon) {
    display: none;
  }
  .sidebar nav .nav-item span.icon {
    font-size: 1.2rem;
    margin-right: 0;
  }
}

.topbar .search-bar {
  flex: 1 1 700px;
  max-width: 540px;
  min-width: 160px;
  margin: 0 38px;
  position: relative;
}
.topbar .search-bar input {
  width: 100%;
  padding: 10px 16px 10px 38px;
  border: 1.5px solid var(--border);
  border-radius: 21px;
  outline: none;
  font-size: 1rem;
  background: #fafafa;
  color: var(--primary-text);
  transition: border-color 0.15s;
}
.topbar .search-bar input:focus {
  border-color: var(--accent-pink);
}
.topbar .search-bar .icon {
  position: absolute;
  left: 12px;
  top: 10px;
  color: var(--secondary-text);
  font-size: 1rem;
}

.topbar .right-controls {
  display: flex;
  align-items: center;
  gap: 22px;
}

.topbar .profile {
  background: var(--border);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 1rem;
}
.topbar .settings, .topbar .notifications {
  background: none;
  border: none;
  color: var(--secondary-text);
  font-size: 1.17rem;
  cursor: pointer;
  padding: 0 4px;
}

.music-main {
  flex: 1;
  padding: 98px 0 0 0; /* allow for fixed topbar */
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.music-content {
  padding: 0 36px 0 36px;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-text);
  margin-bottom: 22px;
  margin-top: 0;
}

.sections {
  /* placeholder for future vertical gap */
}

.section-header {
  font-size: 1.27rem;
  font-weight: 700;
  color: var(--primary-text);
  margin: 38px 0 14px 0;
}

.featured-row {
  display: flex;
  gap: 22px;
  margin-bottom: 8px;
}

.card {
  background: #fff;
  width: 180px;
  height: 220px;
  border-radius: 14px;
  padding: 18px 18px 16px 18px;
  box-shadow: 0 2px 10px 0 rgba(60,60,80,0.03);
  display: flex;
  flex-direction: column;
  justify-content: end;
  cursor: pointer;
  transition: transform .13s, box-shadow .17s;
  overflow: hidden;
  color: #fff;
  position: relative;
}

.card-gradient-1 { background: var(--card-gradient-1); }
.card-gradient-2 { background: var(--card-gradient-2); }
.card-gradient-3 { background: var(--card-gradient-3); }
.card-gradient-4 { background: var(--card-gradient-4); }

.card-title {
  font-size: 1.11rem;
  font-weight: 700;
  margin-bottom: 3px;
  color: #fff;
}
.card-subtitle {
  font-size: 0.96rem;
  font-weight: 400;
  color: #e9e9ec;
}
.card:hover {
  box-shadow: 0 5px 20px 2px rgba(252,42,90,0.10),
              0 1.5px 6px 0 rgba(17,18,23,0.09);
  transform: scale(1.04);
  z-index: 2;
}

.recently-played-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: thin;
  padding-bottom: 12px;
}
.recent-cover {
  width: 90px;
  height: 90px;
  border-radius: 11px;
  background: #ededf0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 0 1.5px 8px 0 rgba(64,64,72,0.07);
}
.recent-meta {
  text-align: left;
  margin-top: 8px;
  font-size: 0.98rem;
  color: var(--primary-text);
  font-weight: 600;
}
.recent-artist {
  font-size: 0.92rem;
  color: var(--secondary-text);
  font-weight: 400;
  margin-top: -3px;
}

@media (max-width: 800px) {
  .music-content { padding: 0 7vw; }
  .featured-row { gap: 11px; }
  .card { width: 140px; height: 170px; padding: 12px 12px 14px 12px; }
  .recent-cover { width: 66px; height: 66px; font-size: 1.3rem; }
}
@media (max-width: 550px) {
  .music-home-root { flex-direction: column; }
  .sidebar { display: none; }
  .topbar { padding-left: 18vw; }
  .music-main { padding: 82px 0 0 0; }
  .music-content { padding: 0 2vw; }
  .featured-row { flex-wrap: wrap; }
}
  `);

  return (
    <div class="music-home-root">
      {/* Left Sidebar */}
      <aside class="sidebar">
        <div class="logo">Music</div>
        <nav>
          <button class="nav-item active">
            <span class="icon" aria-label="Home">🏠</span>
            <span>Home</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Library">🎶</span>
            <span>Library</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Radio">📻</span>
            <span>Radio</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Recent">🕑</span>
            <span>Recently Added</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Artist">👨‍🎤</span>
            <span>Artists</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Album">💿</span>
            <span>Albums</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Song">🎼</span>
            <span>Songs</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Playlist">📝</span>
            <span>Playlists</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Devices">💻</span>
            <span>Devices</span>
          </button>
          <button class="nav-item">
            <span class="icon" aria-label="Settings">⚙️</span>
            <span>Settings</span>
          </button>
          <div class="nav-section">For You</div>
          <button class="nav-item">
            <span class="icon" aria-label="Suggested">✨</span>
            <span>Suggested</span>
          </button>
        </nav>
      </aside>

      {/* Main App Wrapper */}
      <main class="music-main">
        {/* Top Navigation Bar */}
        <div class="topbar">
          <div class="logo">Music</div>
          <div class="search-bar">
            <span class="icon" aria-label="search">🔍</span>
            <input type="text" placeholder="Search music, artists, albums..." />
          </div>
          <div class="right-controls">
            <button class="notifications" title="Notifications">🔔</button>
            <button class="settings" title="Settings">⚙️</button>
            <div class="profile" title="User profile">👤</div>
          </div>
        </div>

        <div class="music-content">
          {/* Page Title */}
          <h1 class="page-title">Home</h1>
          {/* For You / Featured */}
          <section class="sections">
            <div class="section-header">For You</div>
            <div class="featured-row">
              {FEATURED_PLAYLISTS.map((card, i) => (
                <div key={i} class={card.className}>
                  <div class="card-title">{card.title}</div>
                  <div class="card-subtitle">{card.subtitle}</div>
                </div>
              ))}
            </div>
            {/* Recently Played */}
            <div class="section-header" style={{marginTop: '36px'}}>Recently Played</div>
            <div class="recently-played-row">
              {RECENTLY_PLAYED.map((rec, i) => (
                <div key={i} style="display: flex; flex-direction:column; align-items:center; min-width:90px;">
                  <div class="recent-cover">{rec.cover}</div>
                  <div class="recent-meta">{rec.title}</div>
                  <div class="recent-artist">{rec.artist}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
});

/**
 * Document meta configuration for this page.
 */
export const head: DocumentHead = {
  title: "Music App – Home",
  meta: [
    {
      name: "description",
      content: "Browse featured playlists, recent songs, and more.",
    },
  ],
};
