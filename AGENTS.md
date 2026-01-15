# Access Qurani - AI Agent Guide

## Project Snapshot

- **Type:** Single SvelteKit 5 application (Progressive Web App)
- **Stack:** SvelteKit 5 + TypeScript + Vite + Cloudflare Workers
- **Purpose:** Accessible Quran audio player with gesture navigation (604 pages, 114 surahs)

## Root Setup Commands

```bash
# Install dependencies (prefer Bun)
bun install
# or: npm install, pnpm install

# Development server
bun run dev

# Type checking
bun run check

# Linting & formatting
bun run lint
bun run format

# Production build
bun run build

# Preview production build
bun run preview

# Deploy to Cloudflare Workers
bun run deploy
```

## Universal Conventions

### Code Style

- **Indentation:** Tabs (not spaces)
- **Quotes:** Single quotes (`'`)
- **Line Length:** 100 characters max
- **Trailing Commas:** None
- **TypeScript:** Strict mode enabled
- **Svelte Version:** Svelte 5 (use runes: `$state`, `$props`, `$effect`, `$derived`)

### Commit Format

- Use **Conventional Commits**: `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- Examples:
  - `feat: add juz navigation gesture`
  - `fix: correct basmala playback logic`
  - `docs: update README with deployment steps`

### Branch Strategy

- Work on feature branches
- PR to `main` branch

## Security & Secrets

- **Never commit:** API keys, tokens, or sensitive data
- **Environment Variables:**
  - Use `.env` for local development (copy from `.env.example`)
  - Prefix with `VITE_` for client-side access (e.g., `VITE_AUDIO_SOURCE`)
  - Set production vars in Cloudflare dashboard: Workers & Pages > access-qurani > Settings > Variables

## Project Structure & JIT Index

### Directory Map

```
src/
├── lib/
│   ├── components/     → Reusable Svelte components (see Component Patterns below)
│   ├── config.ts       → Audio configuration
│   ├── globalState.ts  → Svelte stores (currentIndex, current, config)
│   ├── localStore.ts   → LocalStorage wrapper for persistence
│   ├── quranData.ts    → Quran metadata (pages, surahs, juz, aya indices)
│   ├── utils.ts        → Utilities (formatTime, wakeLock)
│   └── index.ts        → Library exports
├── routes/
│   ├── App.svelte      → Main app component (navigation logic)
│   ├── Welcome.svelte  → Onboarding screen
│   ├── Info.svelte     → Info modal
│   ├── +layout.svelte  → Root layout
│   └── +page.svelte    → Entry route
├── service-worker/
│   └── index.ts        → PWA service worker
└── app.html            → HTML template
```

### Quick Find Commands

```bash
# Find a Svelte component
rg -n "export " src/lib/components/

# Find a store or state variable
rg -n "\$state|\$derived|localStore" src/

# Find a function definition
rg -n "^(export )?function " src/

# Find environment variable usage
rg -n "import\.meta\.env\." src/

# Find gesture/navigation actions
rg -n "actions\." src/routes/App.svelte
```

## Component Patterns

### Svelte 5 Component Structure

✅ **DO:** Use Svelte 5 runes (modern syntax)

```svelte
<script lang="ts">
	let count = $state(0);
	let doubled = $derived(count * 2);

	let { someProp = $bindable(0) }: { someProp?: number } = $props();

	$effect(() => {
		console.log('count changed:', count);
	});
</script>
```

❌ **DON'T:** Use legacy Svelte 3/4 syntax

```svelte
<!-- Old syntax - don't use -->
<script lang="ts">
	let count = 0; // Should be $state
	$: doubled = count * 2; // Should be $derived
	export let someProp = 0; // Should be $props()
</script>
```

### Component Examples

- **Player Component:** See `src/lib/components/Player.svelte`
  - Exposes imperative API: `load()`, `play()`, `pause()`, `current()`
  - Uses `bind:this` for parent control
  - Audio preloading strategy (next aya, page, sura)

- **Joystick (Gesture Control):** See `src/lib/components/Joystick.svelte`
  - Touch gesture detection with multi-directional swipes
  - Event callbacks: `onclick`, `ontouchend`

- **AriaNotifier:** See `src/lib/components/AriaNotifier.svelte`
  - Accessibility announcements for screen readers
  - Imperative `notify(message)` method

### State Management

✅ **DO:** Use global stores from `globalState.ts`

```typescript
import { currentIndex, current } from '$lib/globalState';

// Read store value in component
$currentIndex++; // In Svelte component
// or
currentIndex.update((n) => n + 1); // Anywhere
```

✅ **DO:** Use `localStore` for persistent state

```typescript
import { localStore } from '$lib/localStore';
export const mySetting: Writable<boolean> = localStore('mySetting', true);
```

## Quran Data Patterns

### Key Functions (from `src/lib/quranData.ts`)

```typescript
// Navigation helpers
getAyaIndexFromPage(page: number): number
getAyaIndexFromSura(sura: number): number
getAyaIndexFromJuz(juz: number): number
getPageFromIndex(ayaIdx: number): number
getJuzFromIndex(ayaIdx: number): number

// Audio URL generation
getAudioUrl(idx: number): string
getBasmalaUrl(sura: number): string
needBasmala(ayaIdx: number): boolean
```

✅ **DO:** Use these helpers for navigation

```typescript
// Jump to page 10
$currentIndex = getAyaIndexFromPage(10);

// Jump to Surah 18 (Al-Kahf)
$currentIndex = getAyaIndexFromSura(18);
```

## Cloudflare Workers Deployment

### Configuration

- Worker config: `wrangler.toml`
- Adapter: `@sveltejs/adapter-cloudflare`

### First-Time Setup

```bash
# Authenticate with Cloudflare
bun run cf:login
```

### Deployment Commands

```bash
# Deploy to production
bun run deploy

# Test with Wrangler locally
bun run preview:wrangler
```

### Environment Variables (Production)

Set in Cloudflare Dashboard:

1. Go to **Workers & Pages** > **access-qurani** > **Settings** > **Variables**
2. Add `VITE_AUDIO_SOURCE` with your audio CDN URL
3. Click **Save and Deploy**

## Common Gotchas

- **Svelte 5 Syntax:** Always use runes (`$state`, `$props`, `$derived`, `$effect`), not legacy reactive declarations
- **Tabs not Spaces:** Prettier is configured for tabs—don't use spaces
- **VITE\_ Prefix:** Environment variables must start with `VITE_` to be accessible client-side
- **Quran Indexing:** Internal indices are 0-based, but display values (sura, aya, page, juz) are 1-based
- **Audio Preloading:** Player automatically preloads next aya/page/sura—don't manually preload
- **Cloudflare Workers:** No Node.js APIs available (use Web APIs only)

## Definition of Done

Before creating a PR:

```bash
# Run all checks
bun run check && bun run lint && bun run build
```

**Checklist:**

- [ ] TypeScript compiles without errors (`bun run check`)
- [ ] Code passes linting (`bun run lint`)
- [ ] Production build succeeds (`bun run build`)
- [ ] Conventional commit message used
- [ ] No hardcoded secrets or API keys
