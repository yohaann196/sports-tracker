# Sports Stat Tracker

A lightweight, zero-dependency sports stat tracker for **Basketball**, **Tennis**, **Ping Pong**, and **Ice Hockey** — runs entirely in the browser.

## Features

- **Mini Scoreboard** — editable team names, +/− score buttons, period navigation, live countdown timer (Basketball & Hockey)
- **Court / Field Editor** — drag-and-drop player positioning on accurate court diagrams for each sport
- **Team Stats** — per-team stat tracking with visual bar charts; toggle between Home and Away
- **Event Log** — log match events (goals, fouls, aces, penalties…) with timestamps or period labels
- **Player Roster** — add/remove players, assign to teams, colour-coded by side

## Usage

1. Open `index.html` in any modern browser — no build step, no dependencies
2. Select a sport from the tabs at the top
3. Edit team names by clicking on them in the scoreboard
4. Drag players on the court to set up your formation
5. Log events and update stats as the game progresses

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your tracker will be live at `https://<username>.github.io/<repo-name>/`

## File Structure

```
sports-tracker/
├── index.html   — markup & layout
├── style.css    — all styles (light + dark mode)
├── app.js       — sport data, state management, rendering
└── README.md
```

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No Internet Explorer support.

## License

MIT — free to use, modify, and distribute.
