# Pocket Orbit

A tiny, interactive field guide to the eight planets. Choose a planet from the orbit view or the index, pause the orbital motion, and browse a few compact facts about each world.

## Live demo

[Open Pocket Orbit](https://pocket-orbit-one.vercel.app)

## Run it

Open `index.html` directly, or serve the folder locally:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

The project is plain HTML, CSS, and JavaScript; it has no build step or runtime dependencies. The optional DM Sans and DM Mono fonts load from Google Fonts, with system fallbacks if they are unavailable.

## Next ideas

- Add a guided tour that hops from the inner planets to the ice giants.
- Add a scale mode that compares planet diameters without distorting the orbit view.
- Add keyboard shortcuts for moving between worlds.

## Sources

Rounded orbit distances and periods are based on [NASA's Planet Compare](https://solarsystem.nasa.gov/planet-compare/). Short descriptions and facts are introductory summaries; the illustration intentionally compresses distances and uses stylized planet textures.
