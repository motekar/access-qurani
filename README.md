# Access Qurani 🕌

**Accessible Quran Audio Player** - A Progressive Web App (PWA) designed for accessibility, featuring gesture-based navigation and audio playback of Quranic recitations.

[![Built with SvelteKit](https://img.shields.io/badge/Built%20with-SvelteKit%205-FF3E00?logo=svelte)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## ✨ Features

- **🎯 Gesture-Based Navigation** - Intuitive swipe controls for navigating Quran
- **♿ Accessibility First** - Full screen reader support with ARIA notifications
- **📱 Progressive Web App** - Install and use offline
- **🔊 Audio Playback** - High-quality Quran recitations by Sheikh Mishary Rashid Alafasy
- **📖 Mushaf Madinah Standard** - Follows standard Mushaf Madinah page numbering (604 pages)
- **🌙 Wake Lock Support** - Screen stays on during playback

## 🎮 How to Use

### Navigation Gestures

| Gesture                                | Action                          |
| -------------------------------------- | ------------------------------- |
| **Swipe Left/Right** ⬅️ ➡️             | Navigate between pages          |
| **Swipe Up/Down** ⬆️ ⬇️                | Navigate between ayat (verses)  |
| **Swipe Left+Up / Right+Up** ↖️ ↗️     | Navigate between juz            |
| **Swipe Left+Down / Right+Down** ↙️ ↘️ | Navigate between surahs         |
| **Tap Center** 👆                      | Play/Pause audio                |
| **Space Key** ⌨️                       | Play/Pause audio                |
| **Arrow Keys** ⌨️                      | Navigate (keyboard alternative) |

### For Screen Reader Users

Use **two-finger gestures** when performing swipes or taps. The app will announce the current position (surah, ayat, page, juz) after navigation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/access-qurani.git
cd access-qurani

# Install dependencies
npm install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev

# Open in browser
npm run dev -- --open
```

### Building for Production

```bash
# Create production build
bun run build

# Preview production build
bun run preview
```

### Deploying to Cloudflare Workers

This project is configured to deploy to Cloudflare Workers using Wrangler.

**Prerequisites:**

- A Cloudflare account
- Wrangler CLI (already installed as dev dependency)

**First-time setup:**

```bash
# Authenticate with Cloudflare
bun run cf:login
# This will open your browser to authenticate
```

**Deployment:**

```bash
# Deploy to Cloudflare Workers
bun run deploy

# This will:
# 1. Build the project
# 2. Deploy to Cloudflare Workers
# 3. Output the worker URL
```

**Local testing with Wrangler:**

```bash
# Test with Cloudflare Workers runtime locally
bun run preview:wrangler
```

**Environment Variables:**

For local development, environment variables are set in `.dev.vars`.

For production, set environment variables in the Cloudflare dashboard:

1. Go to **Workers & Pages** > **access-qurani** > **Settings** > **Variables**
2. Add `VITE_AUDIO_SOURCE` with your audio source URL
3. Click **Save and Deploy**

**Configuration:**

The Worker configuration is in `wrangler.toml`. You can customize:

- Worker name
- Custom domains/routes
- Compatibility settings

## ⚙️ Configuration

### Audio Source

You can configure the audio source by setting the `VITE_AUDIO_SOURCE` environment variable:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and set your preferred audio source
VITE_AUDIO_SOURCE=https://tanzil.net/res/audio/afasy
```

**Available Sources:**

- `https://tanzil.net/res/audio/afasy` (Default - Sheikh Mishary Alafasy)
- `https://everyayah.com/data/Maher_AlMuaiqly_64kbps` (Sheikh Maher Al-Muaiqly)

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── AriaNotifier.svelte  # Accessibility announcements
│   │   ├── Joystick.svelte      # Gesture control component
│   │   ├── Player.svelte        # Audio player
│   │   └── Icon.svelte          # Icon component
│   ├── config.ts                # App configuration
│   ├── globalState.ts           # Svelte stores
│   ├── localStore.ts            # LocalStorage wrapper
│   ├── quranData.ts             # Quran metadata (pages, surahs, etc.)
│   └── utils.ts                 # Utility functions
├── routes/
│   ├── App.svelte               # Main app component
│   ├── Welcome.svelte           # Onboarding screen
│   └── Info.svelte              # Info modal
└── service-worker/
    └── index.ts                 # Service worker (PWA)
```

## 🛠️ Technology Stack

- **[SvelteKit 5](https://kit.svelte.dev/)** - Web framework with Svelte 5 runes
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool
- **PWA** - Progressive Web App capabilities

## 🌐 Audio Sources

Audio recitations are provided by:

- **[Tanzil.net](https://tanzil.net/)** - Quran metadata and audio
- **[EveryAyah.com](https://everyayah.com/)** - Alternative audio source

## 📝 License

This project uses the following resources:

- Quran text and metadata from [Tanzil.net](https://tanzil.net/)
- Audio recitations from licensed reciters

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/yourusername/access-qurani/issues).

## 🙏 Credits

- Quran recitation by Sheikh Mishary Rashid Alafasy
- Mushaf Madinah page numbering standard
- Built with ❤️ for accessibility
