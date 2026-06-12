# Site Nicolas Pieri — Improvisation théâtrale

React + Vite showcase site.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Add your images

Drop your pictures into `public/images/` with these exact names:

| File | What it is |
|---|---|
| `fond-scene.png` | The constant theater background (your "En_fond_global_et_constant.png") |
| `hero.jpg` | Masked orchestra photo at the top |
| `cabaret.jpg` | Photo in the QUI section |
| `masque.jpg`, `creation-masque.jpg`, `concepts.jpg`, `jdr.jpg`, `eloquence.jpg`, `ateliers.jpg` | The 6 workshop cards |
| `carte.png` | France/Périgord map |

To rename or add workshops, edit the `ATELIERS` array at the top of
`src/components/Quoi.jsx` — no other code change needed.

## Build for production

```bash
npm run build
```

The result goes into `dist/`.
