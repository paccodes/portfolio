# 🖥️ pacsh

A terminal-flavored portfolio site. Type a command, get a response — no buttons, no scroll-jacking, just a prompt.

Live at [pac.codes](https://pac.codes).

## 💻 Commands

| Command          | Description                   |
| ---------------- | ----------------------------- |
| 👤 `about`        | Once upon a dev.              |
| 🎓 `certs`        | I paid money for these.       |
| 🌈 `colorscript`  | ASCII art with a paint job.   |
| ✉️ `contact`      | Slide into my packets.        |
| 📺 `crt`          | Phosphor and scanlines, baby. |
| 📣 `echo`         | Yell into the void.           |
| 📜 `history`      | Your command rap sheet.       |
| 🐮 `moo`         | Bovine wisdom on demand.      |
| 🚀 `projects`     | My greatest commits.          |
| 🎨 `theme`        | Light mode is a cry for help. |
| ❓ `help`         | SOS, fully spelled out.       |
| 🧹 `clear`        | Wipe the prompt clean.        |

Tab-completion and command history (↑/↓) work as you'd expect.

## 🧱 Stack

- **Vite** + **TypeScript**, no UI framework
- **JetBrains Mono** via `@fontsource`
- ESLint, Prettier, Stylelint
- Hand-rolled renderer, input handling, autocomplete, history, and scroll

The whole thing is a few hundred lines of TypeScript organized into three folders: `content/` (what to render), `input/` (keys, clicks, history), and `view/` (the renderer and the prompt).

## 🛠️ Development

```sh
npm install
npm run dev       # vite dev server
npm run build     # tsc + vite build → dist/
npm run preview   # serve the build
npm run lint      # eslint
npm run stylelint # stylelint
npm run format    # prettier
```

## 📁 Project layout

```
src/
├── commands.ts      # command registry
├── crt.ts           # CRT effect toggle
├── theme.ts         # dark/light persistence
├── content/         # rendered output for each command
├── input/           # key bindings, history, autocomplete
└── view/            # renderer, prompt, banner, scroll
```

## 📄 License

[MIT](./LICENSE) © Pierre-Alain Castella
