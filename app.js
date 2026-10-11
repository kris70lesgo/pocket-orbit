const planets = [
  {
    id: "mercury", name: "Mercury", kind: "TERRESTRIAL PLANET", kicker: "QUICK ON ITS FEET", distance: "0.39", year: "88", color: "#b8afa4", glow: "rgba(208, 180, 145, .5)", size: 7, orbit: 102, duration: "19s", start: "18deg",
    description: "A little, cratered world that races around the Sun faster than any other planet.",
    fact: "Mercury has almost no atmosphere to hold on to heat, so its days and nights feel worlds apart.",
    body: "radial-gradient(circle at 33% 28%, #dfd0bd 0 7%, #9a8778 27%, #61534b 60%, #342f33 100%)", texture: "radial-gradient(circle at 29% 42%, rgba(54,45,43,.7) 0 3%, transparent 4%), radial-gradient(circle at 67% 30%, rgba(239,217,184,.5) 0 5%, transparent 6%), radial-gradient(circle at 56% 69%, rgba(41,37,39,.6) 0 7%, transparent 8%)"
  },
  {
    id: "venus", name: "Venus", kind: "TERRESTRIAL PLANET", kicker: "THE CLOUD-COVERED ONE", distance: "0.72", year: "225", color: "#e7b778", glow: "rgba(240, 184, 119, .55)", size: 10, orbit: 146, duration: "25s", start: "200deg",
    description: "A bright, cloud-wrapped planet with a surface hot enough to melt lead.",
    fact: "Venus turns slowly and in the opposite direction from most planets: the Sun rises in the west there.",
    body: "radial-gradient(circle at 34% 28%, #f7e2b6 0 8%, #d49c58 38%, #9e5d3f 73%, #573a38 100%)", texture: "repeating-linear-gradient(168deg, transparent 0 8px, rgba(255,235,190,.25) 9px 12px, transparent 13px 19px)"
  },
  {
    id: "earth", name: "Earth", kind: "TERRESTRIAL PLANET", kicker: "HOME, FOR NOW", distance: "1.00", year: "365", color: "#4e9dcc", glow: "rgba(83, 171, 218, .62)", size: 11, orbit: 190, duration: "31s", start: "270deg",
    description: "The only world we know of with liquid oceans on the surface — and the only one with us.",
    fact: "Earth’s atmosphere scatters blue light, giving our sky its familiar colour.",
    body: "radial-gradient(circle at 35% 28%, #cae4e5 0 6%, #4f9dc5 28%, #267052 54%, #183e63 78%, #112538 100%)", texture: "radial-gradient(ellipse at 70% 42%, rgba(125,182,123,.95) 0 13%, transparent 14%), radial-gradient(ellipse at 44% 60%, rgba(143,188,132,.86) 0 9%, transparent 10%), radial-gradient(ellipse at 49% 27%, rgba(145,193,152,.8) 0 8%, transparent 9%)"
  },
  {
    id: "mars", name: "Mars", kind: "TERRESTRIAL PLANET", kicker: "THE RED FRONTIER", distance: "1.52", year: "687", color: "#cf765b", glow: "rgba(224, 114, 82, .55)", size: 9, orbit: 234, duration: "39s", start: "92deg",
    description: "A rusty desert planet with ancient river valleys and the tallest volcano in the solar system.",
    fact: "Olympus Mons rises roughly 22 kilometres from the surrounding plains — almost three Mount Everests.",
    body: "radial-gradient(circle at 35% 28%, #edbd93 0 8%, #be6146 35%, #813e34 72%, #452b30 100%)", texture: "radial-gradient(ellipse at 43% 42%, rgba(245,183,128,.78) 0 8%, transparent 9%), radial-gradient(ellipse at 68% 67%, rgba(77,39,39,.7) 0 15%, transparent 16%), radial-gradient(circle at 25% 70%, rgba(235,163,106,.65) 0 5%, transparent 6%)"
  },
  {
    id: "jupiter", name: "Jupiter", kind: "GAS GIANT", kicker: "A WORLD OF WEATHER", distance: "5.20", year: "11.86 years", color: "#dbab7e", glow: "rgba(226, 181, 133, .5)", size: 18, orbit: 284, duration: "52s", start: "315deg",
    description: "A giant world of coloured cloud bands, storms, and a family of dozens of moons.",
    fact: "The Great Red Spot is a storm that has been observed for centuries and is wider than Earth.",
    body: "radial-gradient(circle at 36% 28%, #f2d8b7 0 8%, #bd8f6a 35%, #825844 76%, #493535 100%)", texture: "repeating-linear-gradient(0deg, transparent 0 8px, rgba(95,54,47,.6) 9px 12px, rgba(240,207,170,.42) 13px 18px, transparent 19px 23px)"
  },
  {
    id: "saturn", name: "Saturn", kind: "GAS GIANT", kicker: "THE RINGED WONDER", distance: "9.54", year: "29.45 years", color: "#ecd0a0", glow: "rgba(238, 205, 151, .6)", size: 15, orbit: 340, duration: "65s", start: "140deg",
    description: "A pale gas giant surrounded by bright rings made mostly of ice and rocky fragments.",
    fact: "Saturn’s rings span a huge distance, but in many places they are only tens of metres thick.",
    body: "radial-gradient(circle at 34% 28%, #fbebc6 0 8%, #d4b47f 38%, #9a704e 77%, #554039 100%)", texture: "repeating-linear-gradient(0deg, transparent 0 9px, rgba(255,235,199,.44) 10px 13px, transparent 14px 19px)"
  },
  {
    id: "uranus", name: "Uranus", kind: "ICE GIANT", kicker: "THE SIDEWAYS SPINNER", distance: "19.19", year: "84 years", color: "#9bd9d7", glow: "rgba(143, 224, 220, .55)", size: 13, orbit: 394, duration: "77s", start: "38deg",
    description: "A quiet blue-green ice giant whose extreme tilt gives it the strangest seasons around.",
    fact: "Uranus rotates on its side, so each pole can spend about 21 years facing the Sun.",
    body: "radial-gradient(circle at 35% 28%, #d7f1e8 0 7%, #91c9cb 37%, #4d8d9b 75%, #294e66 100%)", texture: "radial-gradient(ellipse at 42% 43%, rgba(215,249,236,.32) 0 9%, transparent 10%), repeating-linear-gradient(0deg, transparent 0 21px, rgba(215,249,236,.17) 22px 23px, transparent 24px 34px)"
  },
  {
    id: "neptune", name: "Neptune", kind: "ICE GIANT", kicker: "THE DEEP BLUE", distance: "30.07", year: "164.8 years", color: "#537de0", glow: "rgba(88, 123, 235, .64)", size: 13, orbit: 448, duration: "91s", start: "225deg",
    description: "A distant, deep-blue world swept by some of the fastest winds measured on a planet.",
    fact: "Neptune takes almost 165 Earth years to complete one trip around the Sun.",
    body: "radial-gradient(circle at 35% 28%, #b2d4fa 0 6%, #3d6fe0 36%, #183b8b 73%, #13254e 100%)", texture: "radial-gradient(ellipse at 62% 58%, rgba(35,51,122,.72) 0 16%, transparent 17%), repeating-linear-gradient(0deg, transparent 0 27px, rgba(181,216,255,.18) 28px 29px, transparent 30px 42px)"
  }
];

const ringHost = document.querySelector("#orbit-rings");
const planetList = document.querySelector("#planet-list");
const stage = document.querySelector("#orbit-stage");
const art = document.querySelector("#planet-art");
const selected = { id: "earth" };

for (const [index, planet] of planets.entries()) {
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  orbit.style.setProperty("--diameter", `${planet.orbit}px`);
  orbit.setAttribute("aria-hidden", "true");

  const moving = document.createElement("div");
  moving.className = "orbiter";
  moving.style.setProperty("--duration", planet.duration);
  moving.style.setProperty("--start", planet.start);

  const button = document.createElement("button");
  button.className = "planet-orb";
  button.type = "button";
  button.dataset.planet = planet.id;
  button.setAttribute("aria-label", `${planet.name}, ${index + 1}${index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"} from the Sun`);
  button.setAttribute("aria-pressed", "false");
  button.title = `Explore ${planet.name}`;
  button.style.setProperty("--diameter", `${planet.orbit}px`);
  button.style.setProperty("--planet-size", `${planet.size}px`);
  button.style.setProperty("--planet-color", planet.color);
  button.style.setProperty("--planet-glow", planet.glow);
  const dot = document.createElement("span");
  dot.setAttribute("aria-hidden", "true");
  button.append(dot);
  button.addEventListener("click", () => selectPlanet(planet.id));
  moving.append(button);
  orbit.append(moving);
  ringHost.append(orbit);

  const choice = document.createElement("button");
  choice.className = "planet-choice";
  choice.type = "button";
  choice.dataset.planet = planet.id;
  choice.setAttribute("aria-pressed", "false");
  choice.innerHTML = `<span class="planet-chip" aria-hidden="true"></span><span>${planet.name}</span>`;
  choice.style.setProperty("--planet-color", planet.color);
  choice.style.setProperty("--planet-glow", planet.glow);
  choice.addEventListener("click", () => selectPlanet(planet.id));
  planetList.append(choice);
}

function selectPlanet(id) {
  const planet = planets.find((entry) => entry.id === id);
  if (!planet) return;
  selected.id = id;
  const index = planets.indexOf(planet);
  document.querySelector("#planet-index").textContent = `${String(index + 1).padStart(2, "0")} / 08`;
  document.querySelector("#planet-kind").textContent = planet.kind;
  document.querySelector("#planet-kicker").textContent = planet.kicker;
  document.querySelector("#planet-name").textContent = planet.name;
  document.querySelector("#planet-description").textContent = planet.description;
  document.querySelector("#planet-distance").innerHTML = `${planet.distance} <small>AU</small>`;
  document.querySelector("#planet-year").innerHTML = `${planet.year.includes("years") ? planet.year.replace(" years", "") : planet.year} <small>${planet.year.includes("years") ? "Earth years" : "days"}</small>`;
  document.querySelector("#planet-fact").textContent = planet.fact;
  document.querySelector("#stage-selection").textContent = `${planet.name.toUpperCase()} / ${["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "EIGHTH"][index]} ORBIT`;
  art.dataset.planet = id;
  art.setAttribute("aria-label", `Illustration of ${planet.name}`);
  art.style.setProperty("--body-bg", planet.body);
  art.style.setProperty("--body-texture", planet.texture);
  art.style.setProperty("--body-glow", planet.glow);
  document.querySelectorAll("[data-planet].planet-orb, [data-planet].planet-choice").forEach((control) => {
    control.setAttribute("aria-pressed", String(control.dataset.planet === id));
  });
}

document.querySelector("#orbit-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const paused = button.getAttribute("aria-pressed") !== "true";
  stage.classList.toggle("orbit-paused", paused);
  button.setAttribute("aria-pressed", String(paused));
  button.querySelector(".pause-icon").textContent = paused ? "▶" : "Ⅱ";
  button.querySelector("span:last-child").textContent = paused ? "Resume orbits" : "Pause orbits";
});

document.querySelector("#surprise-button").addEventListener("click", () => {
  const options = planets.filter((planet) => planet.id !== selected.id);
  selectPlanet(options[Math.floor(Math.random() * options.length)].id);
});

selectPlanet(selected.id);
