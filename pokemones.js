const pokemones = [
  {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    base: { HP: 45, ATK: 49, SATK: 65, SDEF: 65, SPD: 45 },
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    height: "0.7 m",
    weight: "6.9 kg",
    ability: ["Overgrow", "Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    base: { HP: 60, ATK: 62, DEF: 63, SATK: 80, SDEF: 80, SPD: 60 },
    description:
      "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
    height: "1 m",
    weight: "13 kg",
    ability: ["Overgrow", "Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
  {
    name: "Venusaur",
    type: ["Grass", "Poison"],
    base: { HP: 80, ATK: 82, DEF: 83, SATK: 100, SDEF: 100, SPD: 80 },
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    height: "2 m",
    weight: "100 kg",
    ability: ["Overgrow", "Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    name: "Charmander",
    type: ["Fire"],
    base: { HP: 39, ATK: 52, DEF: 43, SATK: 60, SDEF: 50, SPD: 65 },
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    height: "0.6 m",
    weight: "8.5 kg",
    ability: ["Blaze", "Solar Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
  },
  {
    name: "Charmeleon",
    type: ["Fire"],
    base: { HP: 58, ATK: 64, DEF: 58, SATK: 80, SDEF: 65, SPD: 80 },
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    height: "1.1 m",
    weight: "19 kg",
    ability: ["Blaze", "Solar Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
  },
  {
    name: "Charizard",
    type: ["Fire", "Flying"],
    base: { HP: 78, ATK: 84, DEF: 78, SATK: 109, SDEF: 85, SPD: 100 },
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    height: "1.7 m",
    weight: "90.5 kg",
    ability: ["Blaze", "Solar Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
  },
  {
    name: "Squirtle",
    type: ["Water"],
    base: { HP: 44, ATK: 48, DEF: 65, SATK: 50, SDEF: 64, SPD: 43 },
    description:
      "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    height: "0.5 m",
    weight: "9 kg",
    ability: ["Torrent", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
  },
  {
    name: "Wartortle",
    type: ["Water"],
    base: { HP: 59, ATK: 63, DEF: 80, SATK: 65, SDEF: 80, SPD: 58 },
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
    height: "1 m",
    weight: "22.5 kg",
    ability: ["Torrent", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
  },
  {
    name: "Blastoise",
    type: ["Water"],
    base: { HP: 79, ATK: 83, DEF: 100, SATK: 85, SDEF: 105, SPD: 78 },
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    height: "1.6 m",
    weight: "85.5 kg",
    ability: ["Torrent", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
  },
  {
    name: "Caterpie",
    type: ["Bug"],
    base: { HP: 45, ATK: 30, DEF: 35, SATK: 20, SDEF: 20, SPD: 45 },
    description:
      "Its body is soft and weak. In nature, its perpetual fate is to be seen by others as food.",
    height: "0.3 m",
    weight: "2.9 kg",
    ability: ["Shield Dust", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
  },
  {
    name: "Metapod",
    type: ["Bug"],
    base: { HP: 50, ATK: 20, DEF: 55, SATK: 25, SDEF: 25, SPD: 30 },
    description:
      "Its hard shell doesn’t crack a bit even if Pikipek pecks at it, but it will tip over, spilling out its insides.",
    height: "0.7 m",
    weight: "9.9 kg",
    ability: ["Shed Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
  },
  {
    name: "Butterfree",
    type: ["Bug", "Flying"],
    base: { HP: 60, ATK: 45, DEF: 50, SATK: 90, SDEF: 80, SPD: 70 },
    description:
      "Nectar from pretty flowers is its favorite food. In fields of flowers, it has heated battles with Cutiefly for territory.",
    height: "1.1 m",
    weight: "32 kg",
    ability: ["Compound Eyes", "Tinted Lens"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
  },
  {
    name: "Weedle",
    type: ["Bug", "Poison"],
    base: { HP: 40, ATK: 35, DEF: 30, SATK: 20, SDEF: 20, SPD: 50 },
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    height: "0.3 m",
    weight: "3.2 kg",
    ability: ["Shield Dust", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
  },
  {
    name: "Kakuna",
    type: ["Bug", "Poison"],
    base: { HP: 45, ATK: 25, DEF: 50, SATK: 25, SDEF: 25, SPD: 35 },
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    height: "0.6 m",
    weight: "10 kg",
    ability: ["Shed Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
  },
  {
    name: "Beedrill",
    type: ["Bug", "Poison"],
    base: { HP: 65, ATK: 90, DEF: 40, SATK: 45, SDEF: 80, SPD: 75 },
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    height: "1 m",
    weight: "29.5 kg",
    ability: ["Swarm", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
  },
  {
    name: "Pidgey",
    type: ["Normal", "Flying"],
    base: { HP: 40, ATK: 45, DEF: 40, SATK: 35, SDEF: 35, SPD: 56 },
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    height: "0.3 m",
    weight: "1.8 kg",
    ability: ["Keen Eye", "Tangled Feet", "Big Pecks"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
  },
  {
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    base: { HP: 63, ATK: 60, DEF: 55, SATK: 50, SDEF: 50, SPD: 71 },
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    height: "1.1 m",
    weight: "30 kg",
    ability: ["Keen Eye", "Tangled Feet", "Big Pecks"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
  },
  {
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    base: { HP: 83, ATK: 80, DEF: 75, SATK: 70, SDEF: 70, SPD: 101 },
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    height: "1.5 m",
    weight: "39.5 kg",
    ability: ["Keen Eye", "Tangled Feet", "Big Pecks"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
  },
  {
    name: "Rattata",
    type: ["Normal"],
    base: { HP: 30, ATK: 56, DEF: 35, SATK: 25, SDEF: 35, SPD: 72 },
    description:
      "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
    height: "0.3 m",
    weight: "3.5 kg",
    ability: ["Run Away", "Guts", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
  },
  {
    name: "Raticate",
    type: ["Normal"],
    base: { HP: 55, ATK: 81, DEF: 60, SATK: 50, SDEF: 70, SPD: 97 },
    description:
      "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
    height: "0.7 m",
    weight: "18.5 kg",
    ability: ["Run Away", "Guts", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
  },
  {
    name: "Spearow",
    type: ["Normal", "Flying"],
    base: { HP: 40, ATK: 60, DEF: 30, SATK: 31, SDEF: 31, SPD: 70 },
    description:
      "Due to its short wings, it can’t fly long distances. It wanders about restlessly and pecks at bug Pokémon.",
    height: "0.3 m",
    weight: "2 kg",
    ability: ["Keen Eye", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
  },
  {
    name: "Fearow",
    type: ["Normal", "Flying"],
    base: { HP: 65, ATK: 90, DEF: 65, SATK: 61, SDEF: 61, SPD: 100 },
    description:
      "In Alola, fish Pokémon are its prey. It can be seen circling above the ocean searching for food.",
    height: "1.2 m",
    weight: "38 kg",
    ability: ["Keen Eye", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
  },
  {
    name: "Ekans",
    type: ["Poison"],
    base: { HP: 35, ATK: 60, DEF: 44, SATK: 40, SDEF: 54, SPD: 55 },
    description:
      "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints.",
    height: "2 m",
    weight: "6.9 kg",
    ability: ["Intimidate", "Shed Skin", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
  },
  {
    name: "Arbok",
    type: ["Poison"],
    base: { HP: 60, ATK: 95, DEF: 69, SATK: 65, SDEF: 79, SPD: 80 },
    description:
      "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving.",
    height: "3.5 m",
    weight: "65 kg",
    ability: ["Intimidate", "Shed Skin", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
  },
  {
    name: "Pikachu",
    type: ["Electric"],
    base: { HP: 35, ATK: 55, DEF: 40, SATK: 50, SDEF: 50, SPD: 90 },
    description:
      "While sleeping, it generates electricity in the sacs in its cheeks. If it’s not getting enough sleep, it will be able to use only weak electricity.",
    height: "0.4 m",
    weight: "6 kg",
    ability: ["Static", "Lightning Rod"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
  },
  {
    name: "Raichu",
    type: ["Electric"],
    base: { HP: 60, ATK: 90, DEF: 55, SATK: 90, SDEF: 80, SPD: 110 },
    description:
      "Because so many Trainers like the way Pikachu looks, you don’t see this Pokémon very often.",
    height: "0.8 m",
    weight: "30 kg",
    ability: ["Static", "Lightning Rod"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
  },
  {
    name: "Sandshrew",
    type: ["Ground"],
    base: { HP: 50, ATK: 75, DEF: 85, SATK: 20, SDEF: 30, SPD: 40 },
    description:
      "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out.",
    height: "0.6 m",
    weight: "12 kg",
    ability: ["Sand Veil", "Sand Rush"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
  },
  {
    name: "Sandslash",
    type: ["Ground"],
    base: { HP: 75, ATK: 100, DEF: 110, SATK: 45, SDEF: 55, SPD: 65 },
    description:
      "Thanks to its thick claws, it’s good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep.",
    height: "1 m",
    weight: "29.5 kg",
    ability: ["Sand Veil", "Sand Rush"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
  },
  {
    name: "Nidoran♀",
    type: ["Poison"],
    base: { HP: 55, ATK: 47, DEF: 52, SATK: 40, SDEF: 40, SPD: 41 },
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    height: "0.4 m",
    weight: "7 kg",
    ability: ["Poison Point", "Rivalry", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
  },
  {
    name: "Nidorina",
    type: ["Poison"],
    base: { HP: 70, ATK: 62, DEF: 67, SATK: 55, SDEF: 55, SPD: 56 },
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    height: "0.8 m",
    weight: "20 kg",
    ability: ["Poison Point", "Rivalry", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png",
  },
  {
    name: "Nidoqueen",
    type: ["Poison", "Ground"],
    base: { HP: 90, ATK: 92, DEF: 87, SATK: 75, SDEF: 85, SPD: 76 },
    description:
      "Nidoqueen’s body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    height: "1.3 m",
    weight: "60 kg",
    ability: ["Poison Point", "Rivalry", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/031.png",
  },
  {
    name: "Nidoran♂",
    type: ["Poison"],
    base: { HP: 46, ATK: 57, DEF: 40, SATK: 40, SDEF: 40, SPD: 50 },
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon’s notice.",
    height: "0.5 m",
    weight: "9 kg",
    ability: ["Poison Point", "Rivalry", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/032.png",
  },
  {
    name: "Nidorino",
    type: ["Poison"],
    base: { HP: 61, ATK: 72, DEF: 57, SATK: 55, SDEF: 55, SPD: 65 },
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    height: "0.9 m",
    weight: "19.5 kg",
    ability: ["Poison Point", "Rivalry", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/033.png",
  },
  {
    name: "Nidoking",
    type: ["Poison", "Ground"],
    base: { HP: 81, ATK: 102, DEF: 77, SATK: 85, SDEF: 75, SPD: 85 },
    description:
      "Nidoking’s thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    height: "1.4 m",
    weight: "62 kg",
    ability: ["Poison Point", "Rivalry", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/034.png",
  },
  {
    name: "Clefairy",
    type: ["Fairy"],
    base: { HP: 70, ATK: 45, DEF: 48, SATK: 60, SDEF: 65, SPD: 35 },
    description:
      "Bathed in moonlight, its wings glow faintly. Without even flapping, Clefairy rises into the air, where it dances around.",
    height: "0.6 m",
    weight: "7.5 kg",
    ability: ["Cute Charm", "Magic Guard", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/035.png",
  },
  {
    name: "Clefable",
    type: ["Fairy"],
    base: { HP: 95, ATK: 70, DEF: 73, SATK: 95, SDEF: 90, SPD: 60 },
    description:
      "Some scientists believe that it gazes intently at the sky on nights with a full moon because it’s homesick.",
    height: "1.3 m",
    weight: "40 kg",
    ability: ["Cute Charm", "Magic Guard", "Unaware"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/036.png",
  },
  {
    name: "Vulpix",
    type: ["Fire"],
    base: { HP: 38, ATK: 41, DEF: 40, SATK: 50, SDEF: 65, SPD: 65 },
    description:
      "It manipulates balls of fire to catch its prey. If you raise one from when it’s young, it will grow close to you like a puppy Pokémon.",
    height: "0.6 m",
    weight: "9.9 kg",
    ability: ["Flash Fire", "Drought"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/037.png",
  },
  {
    name: "Ninetales",
    type: ["Fire"],
    base: { HP: 73, ATK: 76, DEF: 75, SATK: 81, SDEF: 100, SPD: 100 },
    description:
      "The flickering flames it spews from its mouth leave its opponents hypnotized. Then, this extremely intelligent Pokémon attacks.",
    height: "1.1 m",
    weight: "19.9 kg",
    ability: ["Flash Fire", "Drought"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/038.png",
  },
  {
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    base: { HP: 115, ATK: 45, DEF: 20, SATK: 45, SDEF: 25, SPD: 20 },
    description:
      "The songs they sing are totally different depending on the region they live in. Some even sound like they’re shouting!",
    height: "0.5 m",
    weight: "5.5 kg",
    ability: ["Cute Charm", "Competitive", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/039.png",
  },
  {
    name: "Wigglytuff",
    type: ["Normal", "Fairy"],
    base: { HP: 140, ATK: 70, DEF: 45, SATK: 85, SDEF: 50, SPD: 45 },
    description:
      "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!",
    height: "1 m",
    weight: "12 kg",
    ability: ["Cute Charm", "Competitive", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/040.png",
  },
  {
    name: "Zubat",
    type: ["Poison", "Flying"],
    base: { HP: 40, ATK: 45, DEF: 35, SATK: 30, SDEF: 40, SPD: 55 },
    description:
      "Their skin is so thin that they’ll be burned if sunlight hits them. When it gets cold out, they gather together to warm one another’s bodies.",
    height: "0.8 m",
    weight: "7.5 kg",
    ability: ["Inner Focus", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/041.png",
  },
  {
    name: "Golbat",
    type: ["Poison", "Flying"],
    base: { HP: 75, ATK: 80, DEF: 70, SATK: 65, SDEF: 75, SPD: 90 },
    description:
      "They can suck down over 10 ounces of blood in one go. They have been known to drink so much blood that they can no longer fly.",
    height: "1.6 m",
    weight: "55 kg",
    ability: ["Inner Focus", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/042.png",
  },
  {
    name: "Oddish",
    type: ["Grass", "Poison"],
    base: { HP: 45, ATK: 50, DEF: 55, SATK: 75, SDEF: 65, SPD: 30 },
    description:
      "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon’s feet are thought to change shape and become similar to the roots of trees.",
    height: "0.5 m",
    weight: "5.4 kg",
    ability: ["Chlorophyll", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/043.png",
  },
  {
    name: "Gloom",
    type: ["Grass", "Poison"],
    base: { HP: 60, ATK: 65, DEF: 70, SATK: 85, SDEF: 75, SPD: 40 },
    description:
      "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
    height: "0.8 m",
    weight: "8.6 kg",
    ability: ["Chlorophyll", "Stench"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/044.png",
  },
  {
    name: "Vileplume",
    type: ["Grass", "Poison"],
    base: { HP: 75, ATK: 80, DEF: 85, SATK: 110, SDEF: 90, SPD: 50 },
    description:
      "Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
    height: "1.2 m",
    weight: "18.6 kg",
    ability: ["Chlorophyll", "Effect Spore"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/045.png",
  },
  {
    name: "Paras",
    type: ["Bug", "Grass"],
    base: { HP: 35, ATK: 70, DEF: 55, SATK: 45, SDEF: 55, SPD: 25 },
    description:
      "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
    height: "0.3 m",
    weight: "5.4 kg",
    ability: ["Effect Spore", "Dry Skin", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/046.png",
  },
  {
    name: "Parasect",
    type: ["Bug", "Grass"],
    base: { HP: 60, ATK: 95, DEF: 80, SATK: 60, SDEF: 80, SPD: 30 },
    description:
      "Its poisonous spores are also used in traditional medicine. Apparently, spores produced in Alola are not of very good quality.",
    height: "1 m",
    weight: "29.5 kg",
    ability: ["Effect Spore", "Dry Skin", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/047.png",
  },
  {
    name: "Venonat",
    type: ["Bug", "Poison"],
    base: { HP: 60, ATK: 55, DEF: 50, SATK: 40, SDEF: 55, SPD: 45 },
    description:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
    height: "1 m",
    weight: "30 kg",
    ability: ["Compound Eyes", "Tinted Lens", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/048.png",
  },
  {
    name: "Venomoth",
    type: ["Bug", "Poison"],
    base: { HP: 70, ATK: 65, DEF: 60, SATK: 90, SDEF: 75, SPD: 90 },
    description:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    height: "1.5 m",
    weight: "12.5 kg",
    ability: ["Shield Dust", "Tinted Lens", "Wonder Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/049.png",
  },
  {
    name: "Diglett",
    type: ["Ground"],
    base: { HP: 10, ATK: 55, DEF: 25, SATK: 35, SDEF: 45, SPD: 95 },
    description:
      "Around their crops, farmers plant the kind of tree that Diglett like to eat as a way of getting Diglett to plow the fields for them.",
    height: "0.2 m",
    weight: "0.8 kg",
    ability: ["Sand Veil", "Arena Trap", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/050.png",
  },
  {
    name: "Dugtrio",
    type: ["Ground"],
    base: { HP: 35, ATK: 100, DEF: 50, SATK: 50, SDEF: 70, SPD: 120 },
    description:
      "Dugtrio’s heads are sleek and smooth and incredibly hard. It can dig through any soil with its headbutts.",
    height: "0.7 m",
    weight: "33.3 kg",
    ability: ["Sand Veil", "Arena Trap", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/051.png",
  },
  {
    name: "Meowth",
    type: ["Normal"],
    base: { HP: 40, ATK: 45, DEF: 35, SATK: 40, SDEF: 40, SPD: 90 },
    description:
      "It loves coins, so if you give it one, you can make friends with Meowth easily. But it’s fickle, so you can’t count on that friendship lasting.",
    height: "0.4 m",
    weight: "4.2 kg",
    ability: ["Pickup", "Technician", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/052.png",
  },
  {
    name: "Persian",
    type: ["Normal"],
    base: { HP: 65, ATK: 70, DEF: 60, SATK: 65, SDEF: 65, SPD: 115 },
    description:
      "This Pokémon is popular with rich people. It’s also targeted by hunters who are after the jewel in its forehead.",
    height: "1 m",
    weight: "32 kg",
    ability: ["Limber", "Technician", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/053.png",
  },
  {
    name: "Psyduck",
    type: ["Water"],
    base: { HP: 50, ATK: 52, DEF: 48, SATK: 65, SDEF: 50, SPD: 55 },
    description:
      "It has been found that its brain cells are 10 times more active when Psyduck is experiencing a headache.",
    height: "0.8 m",
    weight: "19.6 kg",
    ability: ["Damp", "Cloud Nine", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/054.png",
  },
  {
    name: "Golduck",
    type: ["Water"],
    base: { HP: 80, ATK: 82, DEF: 78, SATK: 95, SDEF: 80, SPD: 85 },
    description:
      "A professional swimmer, it can continue swimming for two days straight by waving its long tail skillfully.",
    height: "1.7 m",
    weight: "76.6 kg",
    ability: ["Damp", "Cloud Nine", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/055.png",
  },
  {
    name: "Mankey",
    type: ["Fighting"],
    base: { HP: 40, ATK: 80, DEF: 35, SATK: 35, SDEF: 45, SPD: 70 },
    description:
      "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey.",
    height: "0.5 m",
    weight: "28 kg",
    ability: ["Vital Spirit", "Anger Point", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/056.png",
  },
  {
    name: "Primeape",
    type: ["Fighting"],
    base: { HP: 65, ATK: 105, DEF: 60, SATK: 60, SDEF: 70, SPD: 95 },
    description:
      "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging.",
    height: "1 m",
    weight: "32 kg",
    ability: ["Vital Spirit", "Anger Point", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/057.png",
  },
  {
    name: "Growlithe",
    type: ["Fire"],
    base: { HP: 55, ATK: 70, DEF: 45, SATK: 70, SDEF: 50, SPD: 60 },
    description:
      "It has lived alongside humans since ages ago. Its bones have been found in excavations of ruins from the Stone Age.",
    height: "0.7 m",
    weight: "19 kg",
    ability: ["Intimidate", "Flash Fire", "Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/058.png",
  },
  {
    name: "Arcanine",
    type: ["Fire"],
    base: { HP: 90, ATK: 110, DEF: 80, SATK: 100, SDEF: 80, SPD: 95 },
    description:
      "There are so many old tales about them that they’re called legendary Pokémon, but there are way more of them around than you’d expect.",
    height: "1.9 m",
    weight: "155 kg",
    ability: ["Intimidate", "Flash Fire", "Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/059.png",
  },
  {
    name: "Poliwag",
    type: ["Water"],
    base: { HP: 40, ATK: 50, DEF: 40, SATK: 40, SDEF: 40, SPD: 90 },
    description:
      "The direction of the swirl on their stomachs differs depending on where they live. Poliwag aficionados can tell them apart at a glance.",
    height: "0.6 m",
    weight: "12.4 kg",
    ability: ["Water Absorb", "Damp", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/060.png",
  },
  {
    name: "Poliwhirl",
    type: ["Water"],
    base: { HP: 65, ATK: 65, DEF: 65, SATK: 50, SDEF: 50, SPD: 90 },
    description:
      "Its health suffers when its skin dries out, so be sure to moisturize it diligently.",
    height: "1 m",
    weight: "20 kg",
    ability: ["Water Absorb", "Damp", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/061.png",
  },
  {
    name: "Poliwrath",
    type: ["Water", "Fighting"],
    base: { HP: 90, ATK: 95, DEF: 95, SATK: 70, SDEF: 90, SPD: 70 },
    description:
      "The muscles it has developed through swimming are thick and powerful. When it lands a square punch, it can turn huge boulders to dust.",
    height: "1.3 m",
    weight: "54 kg",
    ability: ["Water Absorb", "Damp", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/062.png",
  },
  {
    name: "Abra",
    type: ["Psychic"],
    base: { HP: 25, ATK: 20, DEF: 15, SATK: 105, SDEF: 55, SPD: 90 },
    description:
      "It can read others’ minds and will teleport away when danger approaches. You must clear your mind if you want to catch it.",
    height: "0.9 m",
    weight: "19.5 kg",
    ability: ["Synchronize", "Inner Focus", "Magic Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/063.png",
  },
  {
    name: "Kadabra",
    type: ["Psychic"],
    base: { HP: 40, ATK: 35, DEF: 30, SATK: 120, SDEF: 70, SPD: 105 },
    description:
      "It possesses strong mental capabilities, but its psychic powers are halved when it’s not holding a silver spoon.",
    height: "1.3 m",
    weight: "56.5 kg",
    ability: ["Synchronize", "Inner Focus", "Magic Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/064.png",
  },
  {
    name: "Alakazam",
    type: ["Psychic"],
    base: { HP: 55, ATK: 50, DEF: 45, SATK: 135, SDEF: 95, SPD: 120 },
    description:
      "If it trusts someone deeply, it will let them have one of its spoons. Anything you eat with that spoon is apparently delicious.",
    height: "1.5 m",
    weight: "48 kg",
    ability: ["Synchronize", "Inner Focus", "Magic Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/065.png",
  },
  {
    name: "Machop",
    type: ["Fighting"],
    base: { HP: 70, ATK: 80, DEF: 50, SATK: 35, SDEF: 35, SPD: 35 },
    description:
      "It likes food that’s highly nutritious because its instincts drive it to build muscle efficiently.",
    height: "0.8 m",
    weight: "19.5 kg",
    ability: ["Guts", "No Guard", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/066.png",
  },
  {
    name: "Machoke",
    type: ["Fighting"],
    base: { HP: 80, ATK: 100, DEF: 70, SATK: 50, SDEF: 60, SPD: 45 },
    description:
      "A popular motif for sculptures, its incredibly well-developed muscles have captured the imagination of many an artist.",
    height: "1.5 m",
    weight: "70.5 kg",
    ability: ["Guts", "No Guard", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/067.png",
  },
  {
    name: "Machamp",
    type: ["Fighting"],
    base: { HP: 90, ATK: 130, DEF: 80, SATK: 65, SDEF: 85, SPD: 55 },
    description:
      "With four arms, it can attack and defend simultaneously. It’s said to have mastered every martial art in the world.",
    height: "1.6 m",
    weight: "130 kg",
    ability: ["Guts", "No Guard", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/068.png",
  },
  {
    name: "Bellsprout",
    type: ["Grass", "Poison"],
    base: { HP: 50, ATK: 75, DEF: 35, SATK: 70, SDEF: 30, SPD: 40 },
    description:
      "Bellsprout’s thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    height: "0.7 m",
    weight: "4 kg",
    ability: ["Chlorophyll", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/069.png",
  },
  {
    name: "Weepinbell",
    type: ["Grass", "Poison"],
    base: { HP: 65, ATK: 90, DEF: 50, SATK: 85, SDEF: 45, SPD: 55 },
    description:
      "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
    height: "1 m",
    weight: "6.4 kg",
    ability: ["Chlorophyll", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/070.png",
  },
  {
    name: "Victreebel",
    type: ["Grass", "Poison"],
    base: { HP: 80, ATK: 105, DEF: 65, SATK: 100, SDEF: 70, SPD: 70 },
    description:
      "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    height: "1.7 m",
    weight: "15.5 kg",
    ability: ["Chlorophyll", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/071.png",
  },
  {
    name: "Tentacool",
    type: ["Water", "Poison"],
    base: { HP: 40, ATK: 40, DEF: 35, SATK: 50, SDEF: 100, SPD: 70 },
    description:
      "Its body is 99% water. The remaining 1% contains the organ that makes its poison.",
    height: "0.9 m",
    weight: "45.5 kg",
    ability: ["Clear Body", "Liquid Ooze", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/072.png",
  },
  {
    name: "Tentacruel",
    type: ["Water", "Poison"],
    base: { HP: 80, ATK: 70, DEF: 65, SATK: 80, SDEF: 120, SPD: 100 },
    description:
      "It communicates with others of its kind by lighting up the red orbs on its head. When the orbs are blinking, it’s a warning sign.",
    height: "1.6 m",
    weight: "55 kg",
    ability: ["Clear Body", "Liquid Ooze", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/073.png",
  },
  {
    name: "Geodude",
    type: ["Rock", "Ground"],
    base: { HP: 40, ATK: 80, DEF: 100, SATK: 30, SDEF: 30, SPD: 20 },
    description:
      "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering.",
    height: "0.4 m",
    weight: "20 kg",
    ability: ["Rock Head", "Sturdy", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/074.png",
  },
  {
    name: "Graveler",
    type: ["Rock", "Ground"],
    base: { HP: 55, ATK: 95, DEF: 115, SATK: 45, SDEF: 45, SPD: 35 },
    description:
      "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp.",
    height: "1 m",
    weight: "105 kg",
    ability: ["Rock Head", "Sturdy", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/075.png",
  },
  {
    name: "Golem",
    type: ["Rock", "Ground"],
    base: { HP: 80, ATK: 120, DEF: 130, SATK: 55, SDEF: 65, SPD: 45 },
    description:
      "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed.",
    height: "1.4 m",
    weight: "300 kg",
    ability: ["Rock Head", "Sturdy", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/076.png",
  },
  {
    name: "Ponyta",
    type: ["Fire"],
    base: { HP: 50, ATK: 85, DEF: 55, SATK: 65, SDEF: 65, SPD: 90 },
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    height: "1 m",
    weight: "30 kg",
    ability: ["Run Away", "Flash Fire", "Flame Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/077.png",
  },
  {
    name: "Rapidash",
    type: ["Fire"],
    base: { HP: 65, ATK: 100, DEF: 70, SATK: 80, SDEF: 80, SPD: 105 },
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    height: "1.7 m",
    weight: "95 kg",
    ability: ["Run Away", "Flash Fire", "Flame Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/078.png",
  },
  {
    name: "Slowpoke",
    type: ["Water", "Psychic"],
    base: { HP: 90, ATK: 65, DEF: 65, SATK: 40, SDEF: 40, SPD: 15 },
    description:
      "Although their tails, which fall off naturally, can easily be found lying around, they’re a precious ingredient for cooking.",
    height: "1.2 m",
    weight: "36 kg",
    ability: ["Oblivious", "Own Tempo", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/079.png",
  },
  {
    name: "Slowbro",
    type: ["Water", "Psychic"],
    base: { HP: 95, ATK: 75, DEF: 110, SATK: 100, SDEF: 80, SPD: 30 },
    description:
      "Shellder, in its greed to suck out more and more sweetness from Slowbro’s tail, has metamorphosed into a spiral-shaped shell.",
    height: "1.6 m",
    weight: "78.5 kg",
    ability: ["Oblivious", "Own Tempo", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/080.png",
  },
  {
    name: "Magnemite",
    type: ["Electric", "Steel"],
    base: { HP: 25, ATK: 35, DEF: 70, SATK: 95, SDEF: 55, SPD: 45 },
    description:
      "Perhaps because electrical lines are often buried these days, the number of Magnemite attacks on power plants has increased.",
    height: "0.3 m",
    weight: "6 kg",
    ability: ["Magnet Pull", "Sturdy", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/081.png",
  },
  {
    name: "Magneton",
    type: ["Electric", "Steel"],
    base: { HP: 50, ATK: 60, DEF: 95, SATK: 120, SDEF: 70, SPD: 70 },
    description:
      "When rain clouds form, many Magneton gather in high places to wait for lightning to strike.",
    height: "1 m",
    weight: "60 kg",
    ability: ["Magnet Pull", "Sturdy", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/082.png",
  },
  {
    name: "Farfetch'd",
    type: ["Normal", "Flying"],
    base: { HP: 52, ATK: 90, DEF: 55, SATK: 58, SDEF: 62, SPD: 60 },
    description:
      "Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    height: "0.8 m",
    weight: "15 kg",
    ability: ["Keen Eye", "Inner Focus", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/083.png",
  },
  {
    name: "Doduo",
    type: ["Normal", "Flying"],
    base: { HP: 35, ATK: 85, DEF: 45, SATK: 35, SDEF: 35, SPD: 75 },
    description:
      "Doduo’s two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
    height: "1.4 m",
    weight: "39.2 kg",
    ability: ["Run Away", "Early Bird", "Tangled Feet"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/084.png",
  },
  {
    name: "Dodrio",
    type: ["Normal", "Flying"],
    base: { HP: 60, ATK: 110, DEF: 70, SATK: 60, SDEF: 60, SPD: 110 },
    description:
      "Apparently, the heads aren’t the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
    height: "1.8 m",
    weight: "85.2 kg",
    ability: ["Run Away", "Early Bird", "Tangled Feet"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/085.png",
  },
  {
    name: "Seel",
    type: ["Water"],
    base: { HP: 65, ATK: 45, DEF: 55, SATK: 45, SDEF: 70, SPD: 45 },
    description:
      "Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.",
    height: "1.1 m",
    weight: "90 kg",
    ability: ["Thick Fat", "Hydration", "Ice Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/086.png",
  },
  {
    name: "Dewgong",
    type: ["Water", "Ice"],
    base: { HP: 90, ATK: 70, DEF: 80, SATK: 70, SDEF: 95, SPD: 70 },
    description:
      "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
    height: "1.7 m",
    weight: "120 kg",
    ability: ["Thick Fat", "Hydration", "Ice Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/087.png",
  },
  {
    name: "Grimer",
    type: ["Poison"],
    base: { HP: 80, ATK: 80, DEF: 50, SATK: 40, SDEF: 50, SPD: 25 },
    description:
      "The wastewater coming from factories is clean these days, so Grimer have nothing to eat. They’re said to be on the verge of extinction.",
    height: "0.9 m",
    weight: "30 kg",
    ability: ["Stench", "Sticky Hold", "Poison Touch"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/088.png",
  },
  {
    name: "Muk",
    type: ["Poison"],
    base: { HP: 105, ATK: 105, DEF: 75, SATK: 65, SDEF: 100, SPD: 50 },
    description:
      "Because they scatter germs everywhere, they’ve long been targeted for extermination, leading to a steep decline in their population.",
    height: "1.2 m",
    weight: "30 kg",
    ability: ["Stench", "Sticky Hold", "Poison Touch"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/089.png",
  },
  {
    name: "Shellder",
    type: ["Water"],
    base: { HP: 30, ATK: 65, DEF: 100, SATK: 45, SDEF: 25, SPD: 40 },
    description:
      "Even when its shell is closed, its tongue still hangs out. If you give its tongue a good yank, the shock will cause Shellder to open its shell.",
    height: "0.3 m",
    weight: "4 kg",
    ability: ["Shell Armor", "Skill Link", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/090.png",
  },
  {
    name: "Cloyster",
    type: ["Water", "Ice"],
    base: { HP: 50, ATK: 95, DEF: 180, SATK: 85, SDEF: 45, SPD: 70 },
    description:
      "Slowpoke tails are its favorite food. It has even been known to come up on land to look for Slowpoke from time to time.",
    height: "1.5 m",
    weight: "132.5 kg",
    ability: ["Shell Armor", "Skill Link", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/091.png",
  },
  {
    name: "Gastly",
    type: ["Ghost", "Poison"],
    base: { HP: 30, ATK: 35, DEF: 30, SATK: 100, SDEF: 35, SPD: 80 },
    description:
      "Poisonous gas comprises 95% of its body. It’s said that the remaining 5% is made up of the souls of those who died from the gas.",
    height: "1.3 m",
    weight: "0.1 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/092.png",
  },
  {
    name: "Haunter",
    type: ["Ghost", "Poison"],
    base: { HP: 45, ATK: 50, DEF: 45, SATK: 115, SDEF: 55, SPD: 95 },
    description:
      "It’s dangerous to go outside alone on nights when you’re feeling sad. Haunter will catch you, and you won’t be able to go back home.",
    height: "1.6 m",
    weight: "0.1 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/093.png",
  },
  {
    name: "Gengar",
    type: ["Ghost", "Poison"],
    base: { HP: 60, ATK: 65, DEF: 60, SATK: 130, SDEF: 75, SPD: 110 },
    description:
      "Even your home isn’t safe. Gengar will lurk in whatever dark corner of a room it can find and wait for its chance to catch its prey.",
    height: "1.5 m",
    weight: "40.5 kg",
    ability: ["Cursed Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/094.png",
  },
  {
    name: "Onix",
    type: ["Rock", "Ground"],
    base: { HP: 35, ATK: 45, DEF: 160, SATK: 30, SDEF: 45, SPD: 70 },
    description:
      "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    height: "8.8 m",
    weight: "210 kg",
    ability: ["Rock Head", "Sturdy", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/095.png",
  },
  {
    name: "Drowzee",
    type: ["Psychic"],
    base: { HP: 60, ATK: 48, DEF: 45, SATK: 43, SDEF: 90, SPD: 42 },
    description:
      "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn’t particularly like eating them.",
    height: "1 m",
    weight: "32.4 kg",
    ability: ["Insomnia", "Forewarn", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/096.png",
  },
  {
    name: "Hypno",
    type: ["Psychic"],
    base: { HP: 85, ATK: 73, DEF: 70, SATK: 73, SDEF: 115, SPD: 67 },
    description:
      "There are some Hypno that assist doctors with patients who can’t sleep at night in hospitals.",
    height: "1.6 m",
    weight: "75.6 kg",
    ability: ["Insomnia", "Forewarn", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/097.png",
  },
  {
    name: "Krabby",
    type: ["Water"],
    base: { HP: 30, ATK: 105, DEF: 90, SATK: 25, SDEF: 25, SPD: 50 },
    description:
      "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    height: "0.4 m",
    weight: "6.5 kg",
    ability: ["Hyper Cutter", "Shell Armor", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/098.png",
  },
  {
    name: "Kingler",
    type: ["Water"],
    base: { HP: 55, ATK: 130, DEF: 115, SATK: 50, SDEF: 50, SPD: 75 },
    description:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    height: "1.3 m",
    weight: "60 kg",
    ability: ["Hyper Cutter", "Shell Armor", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/099.png",
  },
  {
    name: "Voltorb",
    type: ["Electric"],
    base: { HP: 40, ATK: 30, DEF: 50, SATK: 55, SDEF: 55, SPD: 100 },
    description:
      "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
    height: "0.5 m",
    weight: "10.4 kg",
    ability: ["Soundproof", "Static", "Aftermath"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/100.png",
  },
  {
    name: "Electrode",
    type: ["Electric"],
    base: { HP: 60, ATK: 50, DEF: 70, SATK: 80, SDEF: 80, SPD: 150 },
    description:
      "One of Electrode’s characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
    height: "1.2 m",
    weight: "66.6 kg",
    ability: ["Soundproof", "Static", "Aftermath"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/101.png",
  },
  {
    name: "Exeggcute",
    type: ["Grass", "Psychic"],
    base: { HP: 60, ATK: 40, DEF: 80, SATK: 60, SDEF: 45, SPD: 40 },
    description:
      "Although they are the same size as other Exeggcute, the ones produced in Alola are quite heavy. Their shells are packed full.",
    height: "0.4 m",
    weight: "2.5 kg",
    ability: ["Chlorophyll", "Harvest"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/102.png",
  },
  {
    name: "Exeggutor",
    type: ["Grass", "Psychic"],
    base: { HP: 95, ATK: 95, DEF: 85, SATK: 125, SDEF: 75, SPD: 55 },
    description:
      "Each of its three heads has its own thoughts. When they want to go in different directions, Exeggutor becomes unable to move.",
    height: "2 m",
    weight: "120 kg",
    ability: ["Chlorophyll", "Harvest"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/103.png",
  },
  {
    name: "Cubone",
    type: ["Ground"],
    base: { HP: 50, ATK: 50, DEF: 95, SATK: 40, SDEF: 50, SPD: 35 },
    description:
      "It wears its mother’s skull on its head, so no one knows what its bare face looks like. However, it’s clear that it’s always crying.",
    height: "0.4 m",
    weight: "6.5 kg",
    ability: ["Rock Head", "Lightning Rod", "Battle Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/104.png",
  },
  {
    name: "Marowak",
    type: ["Ground"],
    base: { HP: 60, ATK: 80, DEF: 110, SATK: 50, SDEF: 80, SPD: 45 },
    description:
      "They thump their bones rhythmically to communicate among themselves. There are nearly 50 different rhythmic patterns.",
    height: "1 m",
    weight: "45 kg",
    ability: ["Rock Head", "Lightning Rod", "Battle Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/105.png",
  },
  {
    name: "Hitmonlee",
    type: ["Fighting"],
    base: { HP: 50, ATK: 120, DEF: 53, SATK: 35, SDEF: 110, SPD: 87 },
    description:
      "Hitmonlee’s legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    height: "1.5 m",
    weight: "49.8 kg",
    ability: ["Limber", "Reckless", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/106.png",
  },
  {
    name: "Hitmonchan",
    type: ["Fighting"],
    base: { HP: 50, ATK: 105, DEF: 79, SATK: 35, SDEF: 110, SPD: 76 },
    description:
      "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    height: "1.4 m",
    weight: "50.2 kg",
    ability: ["Keen Eye", "Iron Fist", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/107.png",
  },
  {
    name: "Lickitung",
    type: ["Normal"],
    base: { HP: 90, ATK: 55, DEF: 75, SATK: 60, SDEF: 75, SPD: 30 },
    description:
      "It licks filth clean with its tongue. Whatever it licks always stinks afterward, so whether it’s really clean is...questionable.",
    height: "1.2 m",
    weight: "65.5 kg",
    ability: ["Own Tempo", "Oblivious", "Cloud Nine"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/108.png",
  },
  {
    name: "Koffing",
    type: ["Poison"],
    base: { HP: 40, ATK: 65, DEF: 95, SATK: 60, SDEF: 45, SPD: 35 },
    description:
      "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.",
    height: "0.6 m",
    weight: "1 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/109.png",
  },
  {
    name: "Weezing",
    type: ["Poison"],
    base: { HP: 65, ATK: 90, DEF: 120, SATK: 85, SDEF: 70, SPD: 60 },
    description:
      "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.",
    height: "1.2 m",
    weight: "9.5 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/110.png",
  },
  {
    name: "Rhyhorn",
    type: ["Ground", "Rock"],
    base: { HP: 80, ATK: 85, DEF: 95, SATK: 30, SDEF: 30, SPD: 25 },
    description:
      "Rhyhorn’s brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.",
    height: "1 m",
    weight: "115 kg",
    ability: ["Lightning Rod", "Rock Head", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/111.png",
  },
  {
    name: "Rhydon",
    type: ["Ground", "Rock"],
    base: { HP: 105, ATK: 130, DEF: 120, SATK: 45, SDEF: 45, SPD: 40 },
    description:
      "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.",
    height: "1.9 m",
    weight: "120 kg",
    ability: ["Lightning Rod", "Rock Head", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/112.png",
  },
  {
    name: "Chansey",
    type: ["Normal"],
    base: { HP: 250, ATK: 5, DEF: 5, SATK: 35, SDEF: 105, SPD: 50 },
    description:
      "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small.",
    height: "1.1 m",
    weight: "34.6 kg",
    ability: ["Natural Cure", "Serene Grace", "Healer"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/113.png",
  },
  {
    name: "Tangela",
    type: ["Grass"],
    base: { HP: 65, ATK: 55, DEF: 115, SATK: 100, SDEF: 40, SPD: 60 },
    description:
      "Tangela’s vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    height: "1 m",
    weight: "35 kg",
    ability: ["Chlorophyll", "Leaf Guard", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/114.png",
  },
  {
    name: "Kangaskhan",
    type: ["Normal"],
    base: { HP: 105, ATK: 95, DEF: 80, SATK: 40, SDEF: 80, SPD: 90 },
    description:
      "You shouldn’t get close to the child when it’s playing outside its mother’s pouch. Its mother is always nearby watching over it.",
    height: "2.2 m",
    weight: "80 kg",
    ability: ["Early Bird", "Scrappy", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/115.png",
  },
  {
    name: "Horsea",
    type: ["Water"],
    base: { HP: 30, ATK: 40, DEF: 70, SATK: 70, SDEF: 25, SPD: 60 },
    description:
      "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.",
    height: "0.4 m",
    weight: "8 kg",
    ability: ["Swift Swim", "Sniper", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/116.png",
  },
  {
    name: "Seadra",
    type: ["Water"],
    base: { HP: 55, ATK: 65, DEF: 95, SATK: 95, SDEF: 45, SPD: 85 },
    description:
      "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.",
    height: "1.2 m",
    weight: "25 kg",
    ability: ["Poison Point", "Sniper", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/117.png",
  },
  {
    name: "Goldeen",
    type: ["Water"],
    base: { HP: 45, ATK: 67, DEF: 60, SATK: 35, SDEF: 50, SPD: 63 },
    description:
      "The way it swims along fluttering its dress-like fins has earned it the name “princess of the water.”",
    height: "0.6 m",
    weight: "15 kg",
    ability: ["Swift Swim", "Water Veil", "Lightning Rod"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/118.png",
  },
  {
    name: "Seaking",
    type: ["Water"],
    base: { HP: 80, ATK: 92, DEF: 65, SATK: 65, SDEF: 80, SPD: 68 },
    description:
      "To attract females, males dance on the river’s floor. The females gather around the male that dances most gracefully.",
    height: "1.3 m",
    weight: "39 kg",
    ability: ["Swift Swim", "Water Veil", "Lightning Rod"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/119.png",
  },
  {
    name: "Staryu",
    type: ["Water"],
    base: { HP: 30, ATK: 45, DEF: 55, SATK: 70, SDEF: 55, SPD: 85 },
    description:
      "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!",
    height: "0.8 m",
    weight: "34.5 kg",
    ability: ["Illuminate", "Natural Cure", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/120.png",
  },
  {
    name: "Starmie",
    type: ["Water", "Psychic"],
    base: { HP: 60, ATK: 75, DEF: 85, SATK: 100, SDEF: 85, SPD: 115 },
    description:
      "It rotates its geometrically shaped body to swim through the water. It always seems to be sending out mysterious radio waves.",
    height: "1.1 m",
    weight: "80 kg",
    ability: ["Illuminate", "Natural Cure", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/121.png",
  },
  {
    name: "Mr. Mime",
    type: ["Psychic", "Fairy"],
    base: { HP: 40, ATK: 45, DEF: 65, SATK: 100, SDEF: 120, SPD: 90 },
    description:
      "It creates invisible walls with its pantomiming. If you don’t act impressed, it will attack you with a double slap!",
    height: "1.3 m",
    weight: "54.5 kg",
    ability: ["Soundproof", "Filter", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/122.png",
  },
  {
    name: "Scyther",
    type: ["Bug", "Flying"],
    base: { HP: 70, ATK: 110, DEF: 80, SATK: 55, SDEF: 80, SPD: 105 },
    description:
      "Some call it a ninja. Its movements— imperceptibly quick—are sufficient to cleave the air in two. It’s very popular in Alola.",
    height: "1.5 m",
    weight: "56 kg",
    ability: ["Swarm", "Technician", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/123.png",
  },
  {
    name: "Jynx",
    type: ["Ice", "Psychic"],
    base: { HP: 65, ATK: 50, DEF: 35, SATK: 115, SDEF: 95, SPD: 95 },
    description:
      "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.",
    height: "1.4 m",
    weight: "40.6 kg",
    ability: ["Oblivious", "Forewarn", "Dry Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/124.png",
  },
  {
    name: "Electabuzz",
    type: ["Electric"],
    base: { HP: 65, ATK: 83, DEF: 57, SATK: 95, SDEF: 85, SPD: 105 },
    description:
      "While it’s often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electric company.",
    height: "1.1 m",
    weight: "30 kg",
    ability: ["Static", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/125.png",
  },
  {
    name: "Magmar",
    type: ["Fire"],
    base: { HP: 65, ATK: 95, DEF: 57, SATK: 100, SDEF: 85, SPD: 93 },
    description:
      "The hotter the place, the better they feel. Magmar in Alola are said to be hardier than those in other areas.",
    height: "1.3 m",
    weight: "44.5 kg",
    ability: ["Flame Body", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/126.png",
  },
  {
    name: "Pinsir",
    type: ["Bug"],
    base: { HP: 65, ATK: 125, DEF: 100, SATK: 55, SDEF: 70, SPD: 85 },
    description:
      "Although it’s tough, it can’t handle cold well. When night falls, it buries itself in leafage and sleeps.",
    height: "1.5 m",
    weight: "55 kg",
    ability: ["Hyper Cutter", "Mold Breaker", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/127.png",
  },
  {
    name: "Tauros",
    type: ["Normal"],
    base: { HP: 75, ATK: 100, DEF: 95, SATK: 40, SDEF: 70, SPD: 110 },
    description:
      "The climate seems to be related to the reason Tauros in Alola are a little calmer than those in other regions.",
    height: "1.4 m",
    weight: "88.4 kg",
    ability: ["Intimidate", "Anger Point", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/128.png",
  },
  {
    name: "Magikarp",
    type: ["Water"],
    base: { HP: 20, ATK: 10, DEF: 55, SATK: 15, SDEF: 20, SPD: 80 },
    description:
      "Thanks to their strong hold on life, dirty water doesn’t bother them at all. They live in waters all over the world!",
    height: "0.9 m",
    weight: "10 kg",
    ability: ["Swift Swim", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/129.png",
  },
  {
    name: "Gyarados",
    type: ["Water", "Flying"],
    base: { HP: 95, ATK: 125, DEF: 79, SATK: 60, SDEF: 100, SPD: 81 },
    description:
      "The energy from evolution stimulated its brain cells strongly, causing it to become very ferocious.",
    height: "6.5 m",
    weight: "235 kg",
    ability: ["Intimidate", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/130.png",
  },
  {
    name: "Lapras",
    type: ["Water", "Ice"],
    base: { HP: 130, ATK: 85, DEF: 80, SATK: 85, SDEF: 95, SPD: 60 },
    description:
      "They’ve been so cherished that there’s now an overabundance. The fish Pokémon population has declined in waters with too many Lapras.",
    height: "2.5 m",
    weight: "220 kg",
    ability: ["Water Absorb", "Shell Armor", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/131.png",
  },
  {
    name: "Ditto",
    type: ["Normal"],
    base: { HP: 48, ATK: 48, DEF: 48, SATK: 48, SDEF: 48, SPD: 48 },
    description:
      "It transforms into whatever it sees. If the thing it’s transforming into isn’t right in front of it, Ditto relies on its memory—so sometimes it fails.",
    height: "0.3 m",
    weight: "4 kg",
    ability: ["Limber", "Imposter"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/132.png",
  },
  {
    name: "Eevee",
    type: ["Normal"],
    base: { HP: 55, ATK: 55, DEF: 50, SATK: 45, SDEF: 65, SPD: 55 },
    description:
      "Its genes are easily influenced by its surroundings. Even its face starts to look like that of its Trainer.",
    height: "0.3 m",
    weight: "6.5 kg",
    ability: ["Run Away", "Adaptability", "Anticipation"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/133.png",
  },
  {
    name: "Vaporeon",
    type: ["Water"],
    base: { HP: 130, ATK: 65, DEF: 60, SATK: 110, SDEF: 95, SPD: 65 },
    description:
      "It detects nearby moisture with its fin. When its fin begins trembling rapidly, that means rain will fall in a few hours.",
    height: "1 m",
    weight: "29 kg",
    ability: ["Water Absorb", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/134.png",
  },
  {
    name: "Jolteon",
    type: ["Electric"],
    base: { HP: 65, ATK: 65, DEF: 60, SATK: 110, SDEF: 95, SPD: 130 },
    description:
      "Its fur stands on end, becoming like needles it fires at enemies. Once they’re weakened, it finishes them off with a 10,000 volt shock.",
    height: "0.8 m",
    weight: "24.5 kg",
    ability: ["Volt Absorb", "Quick Feet"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/135.png",
  },
  {
    name: "Flareon",
    type: ["Fire"],
    base: { HP: 65, ATK: 130, DEF: 60, SATK: 95, SDEF: 110, SPD: 65 },
    description:
      "The flame chamber inside its body ignites when Flareon gets agitated, reaching temperatures of up to 1,650 degrees Fahrenheit.",
    height: "0.9 m",
    weight: "25 kg",
    ability: ["Flash Fire", "Guts"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/136.png",
  },
  {
    name: "Porygon",
    type: ["Normal"],
    base: { HP: 65, ATK: 60, DEF: 70, SATK: 85, SDEF: 75, SPD: 40 },
    description:
      "It was built 20 years ago by scientists who dreamed of exploring space. Their dreams have yet to come true.",
    height: "0.8 m",
    weight: "36.5 kg",
    ability: ["Trace", "Download", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/137.png",
  },
  {
    name: "Omanyte",
    type: ["Rock", "Water"],
    base: { HP: 35, ATK: 40, DEF: 100, SATK: 90, SDEF: 55, SPD: 35 },
    description:
      "It was restored from an ancient fossil. Those Helix Fossils are excavated from areas that were once oceans long, long ago.",
    height: "0.4 m",
    weight: "7.5 kg",
    ability: ["Swift Swim", "Shell Armor", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/138.png",
  },
  {
    name: "Omastar",
    type: ["Rock", "Water"],
    base: { HP: 70, ATK: 60, DEF: 125, SATK: 115, SDEF: 70, SPD: 55 },
    description:
      "It wraps its prey in its tentacles to immobilize them and then finishes them off with its sharp fangs.",
    height: "1 m",
    weight: "35 kg",
    ability: ["Swift Swim", "Shell Armor", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/139.png",
  },
  {
    name: "Kabuto",
    type: ["Rock", "Water"],
    base: { HP: 30, ATK: 80, DEF: 90, SATK: 55, SDEF: 45, SPD: 55 },
    description:
      "This Pokémon became extinct everywhere, except in a few areas. It protects itself with its hard shell.",
    height: "0.5 m",
    weight: "11.5 kg",
    ability: ["Swift Swim", "Battle Armor", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/140.png",
  },
  {
    name: "Kabutops",
    type: ["Rock", "Water"],
    base: { HP: 60, ATK: 115, DEF: 105, SATK: 65, SDEF: 70, SPD: 80 },
    description:
      "It swims at speeds of roughly 29 knots, quickly closing in on its prey and slashing into them with its scythes to finish them off.",
    height: "1.3 m",
    weight: "40.5 kg",
    ability: ["Swift Swim", "Battle Armor", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/141.png",
  },
  {
    name: "Aerodactyl",
    type: ["Rock", "Flying"],
    base: { HP: 80, ATK: 105, DEF: 65, SATK: 60, SDEF: 75, SPD: 130 },
    description:
      "It flew through the open skies over the ancient continent as if they were its own. When it touched ground, its walk was weak and slow.",
    height: "1.8 m",
    weight: "59 kg",
    ability: ["Rock Head", "Pressure", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/142.png",
  },
  {
    name: "Snorlax",
    type: ["Normal"],
    base: { HP: 160, ATK: 110, DEF: 65, SATK: 65, SDEF: 110, SPD: 30 },
    description:
      "It has no interest in anything other than eating. Even if you climb up on its stomach while it’s napping, it doesn’t seem to mind at all!",
    height: "2.1 m",
    weight: "460 kg",
    ability: ["Immunity", "Thick Fat", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/143.png",
  },
  {
    name: "Articuno",
    type: ["Ice", "Flying"],
    base: { HP: 90, ATK: 85, DEF: 100, SATK: 95, SDEF: 125, SPD: 85 },
    description:
      "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    height: "1.7 m",
    weight: "55.4 kg",
    ability: ["Pressure", "Snow Cloak"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/144.png",
  },
  {
    name: "Zapdos",
    type: ["Electric", "Flying"],
    base: { HP: 90, ATK: 90, DEF: 85, SATK: 125, SDEF: 90, SPD: 100 },
    description:
      "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    height: "1.6 m",
    weight: "52.6 kg",
    ability: ["Pressure", "Static"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/145.png",
  },
  {
    name: "Moltres",
    type: ["Fire", "Flying"],
    base: { HP: 90, ATK: 100, DEF: 90, SATK: 125, SDEF: 85, SPD: 90 },
    description:
      "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    height: "2 m",
    weight: "60 kg",
    ability: ["Pressure", "Flame Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/146.png",
  },
  {
    name: "Dratini",
    type: ["Dragon"],
    base: { HP: 41, ATK: 64, DEF: 45, SATK: 50, SDEF: 50, SPD: 50 },
    description:
      "It sheds its skin—almost on a daily basis—and grows larger. Its skin is soft just after it’s been shed.",
    height: "1.8 m",
    weight: "3.3 kg",
    ability: ["Shed Skin", "Marvel Scale"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/147.png",
  },
  {
    name: "Dragonair",
    type: ["Dragon"],
    base: { HP: 61, ATK: 84, DEF: 65, SATK: 70, SDEF: 70, SPD: 70 },
    description:
      "Some say that if you see it at the start of the year, flying through the sky and twisting its body, you’ll be healthy all year long.",
    height: "4 m",
    weight: "16.5 kg",
    ability: ["Shed Skin", "Marvel Scale"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/148.png",
  },
  {
    name: "Dragonite",
    type: ["Dragon", "Flying"],
    base: { HP: 91, ATK: 134, DEF: 95, SATK: 100, SDEF: 100, SPD: 80 },
    description:
      "You’ll often hear tales of this kindhearted Pokémon rescuing people or Pokémon that are drowning.",
    height: "2.2 m",
    weight: "210 kg",
    ability: ["Inner Focus", "Multiscale"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/149.png",
  },
  {
    name: "Mewtwo",
    type: ["Psychic"],
    base: { HP: 106, ATK: 110, DEF: 90, SATK: 154, SDEF: 90, SPD: 130 },
    description:
      "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon’s body, they failed to endow Mewtwo with a compassionate heart.",
    height: "2 m",
    weight: "122 kg",
    ability: ["Pressure", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/150.png",
  },
  {
    name: "Mew",
    type: ["Psychic"],
    base: { HP: 100, ATK: 100, DEF: 100, SATK: 100, SDEF: 100, SPD: 100 },
    description:
      "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
    height: "0.4 m",
    weight: "4 kg",
    ability: ["Synchronize"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/151.png",
  },
  {
    name: "Chikorita",
    type: ["Grass"],
    base: { HP: 45, ATK: 49, DEF: 65, SATK: 49, SDEF: 65, SPD: 45 },
    description:
      "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
    height: "0.9 m",
    weight: "6.4 kg",
    ability: ["Overgrow", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/152.png",
  },
  {
    name: "Bayleef",
    type: ["Grass"],
    base: { HP: 60, ATK: 62, DEF: 80, SATK: 63, SDEF: 80, SPD: 60 },
    description:
      "Bayleef’s neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
    height: "1.2 m",
    weight: "15.8 kg",
    ability: ["Overgrow", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/153.png",
  },
  {
    name: "Meganium",
    type: ["Grass"],
    base: { HP: 80, ATK: 82, DEF: 100, SATK: 83, SDEF: 100, SPD: 80 },
    description:
      "The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s fighting spirit.",
    height: "1.8 m",
    weight: "100.5 kg",
    ability: ["Overgrow", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/154.png",
  },
  {
    name: "Cyndaquil",
    type: ["Fire"],
    base: { HP: 39, ATK: 52, DEF: 43, SATK: 60, SDEF: 50, SPD: 65 },
    description:
      "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
    height: "0.5 m",
    weight: "7.9 kg",
    ability: ["Blaze", "Flash Fire"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/155.png",
  },
  {
    name: "Quilava",
    type: ["Fire"],
    base: { HP: 58, ATK: 64, DEF: 58, SATK: 80, SDEF: 65, SPD: 80 },
    description:
      "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
    height: "0.9 m",
    weight: "19 kg",
    ability: ["Blaze", "Flash Fire"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/156.png",
  },
  {
    name: "Typhlosion",
    type: ["Fire"],
    base: { HP: 78, ATK: 84, DEF: 78, SATK: 109, SDEF: 85, SPD: 100 },
    description:
      "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
    height: "1.7 m",
    weight: "79.5 kg",
    ability: ["Blaze", "Flash Fire"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/157.png",
  },
  {
    name: "Totodile",
    type: ["Water"],
    base: { HP: 50, ATK: 65, DEF: 64, SATK: 44, SDEF: 48, SPD: 43 },
    description:
      "Despite the smallness of its body, Totodile’s jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
    height: "0.6 m",
    weight: "9.5 kg",
    ability: ["Torrent", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/158.png",
  },
  {
    name: "Croconaw",
    type: ["Water"],
    base: { HP: 65, ATK: 80, DEF: 80, SATK: 59, SDEF: 63, SPD: 58 },
    description:
      "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
    height: "1.1 m",
    weight: "25 kg",
    ability: ["Torrent", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/159.png",
  },
  {
    name: "Feraligatr",
    type: ["Water"],
    base: { HP: 85, ATK: 105, DEF: 100, SATK: 79, SDEF: 83, SPD: 78 },
    description:
      "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
    height: "2.3 m",
    weight: "88.8 kg",
    ability: ["Torrent", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/160.png",
  },
  {
    name: "Sentret",
    type: ["Normal"],
    base: { HP: 35, ATK: 46, DEF: 34, SATK: 35, SDEF: 45, SPD: 20 },
    description:
      "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
    height: "0.8 m",
    weight: "6 kg",
    ability: ["Run Away", "Keen Eye", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/161.png",
  },
  {
    name: "Furret",
    type: ["Normal"],
    base: { HP: 85, ATK: 76, DEF: 64, SATK: 45, SDEF: 55, SPD: 90 },
    description:
      "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
    height: "1.8 m",
    weight: "32.5 kg",
    ability: ["Run Away", "Keen Eye", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/162.png",
  },
  {
    name: "Hoothoot",
    type: ["Normal", "Flying"],
    base: { HP: 60, ATK: 30, DEF: 30, SATK: 36, SDEF: 56, SPD: 50 },
    description:
      "It cries out at the same time every day. A long time ago, people cherished it and considered it a divine messenger sent to tell the time.",
    height: "0.7 m",
    weight: "21.2 kg",
    ability: ["Insomnia", "Keen Eye", "Tinted Lens"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/163.png",
  },
  {
    name: "Noctowl",
    type: ["Normal", "Flying"],
    base: { HP: 100, ATK: 50, DEF: 50, SATK: 86, SDEF: 96, SPD: 70 },
    description:
      "When it turns its head entirely upside down, you know it’s troubled by something. If you don’t leave it be, it will peck you.",
    height: "1.6 m",
    weight: "40.8 kg",
    ability: ["Insomnia", "Keen Eye", "Tinted Lens"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/164.png",
  },
  {
    name: "Ledyba",
    type: ["Bug", "Flying"],
    base: { HP: 40, ATK: 20, DEF: 30, SATK: 40, SDEF: 80, SPD: 55 },
    description:
      "These very cowardly Pokémon join together and use Reflect to protect their nest.",
    height: "1 m",
    weight: "10.8 kg",
    ability: ["Swarm", "Early Bird", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/165.png",
  },
  {
    name: "Ledian",
    type: ["Bug", "Flying"],
    base: { HP: 55, ATK: 35, DEF: 50, SATK: 55, SDEF: 110, SPD: 85 },
    description:
      "It flies through the night sky, sprinkling sparkly dust. According to some, if that dust sticks to you, good things will happen to you.",
    height: "1.4 m",
    weight: "35.6 kg",
    ability: ["Swarm", "Early Bird", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/166.png",
  },
  {
    name: "Spinarak",
    type: ["Bug", "Poison"],
    base: { HP: 40, ATK: 60, DEF: 40, SATK: 40, SDEF: 40, SPD: 30 },
    description:
      "Although the poison from its fangs isn’t that strong, it’s potent enough to weaken prey that gets caught in its web.",
    height: "0.5 m",
    weight: "8.5 kg",
    ability: ["Swarm", "Insomnia", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/167.png",
  },
  {
    name: "Ariados",
    type: ["Bug", "Poison"],
    base: { HP: 70, ATK: 90, DEF: 70, SATK: 60, SDEF: 70, SPD: 40 },
    description:
      "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
    height: "1.1 m",
    weight: "33.5 kg",
    ability: ["Swarm", "Insomnia", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/168.png",
  },
  {
    name: "Crobat",
    type: ["Poison", "Flying"],
    base: { HP: 85, ATK: 90, DEF: 80, SATK: 70, SDEF: 80, SPD: 130 },
    description:
      "It feeds on the blood of living people and Pokémon. If it can’t drink any blood for even a short while, it becomes weak and unable to fly.",
    height: "1.8 m",
    weight: "75 kg",
    ability: ["Inner Focus", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/169.png",
  },
  {
    name: "Chinchou",
    type: ["Water", "Electric"],
    base: { HP: 75, ATK: 38, DEF: 38, SATK: 56, SDEF: 56, SPD: 67 },
    description:
      "Chinchou blink their shining antennae at one another to claim their respective turf.",
    height: "0.5 m",
    weight: "12 kg",
    ability: ["Volt Absorb", "Illuminate", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/170.png",
  },
  {
    name: "Lanturn",
    type: ["Water", "Electric"],
    base: { HP: 125, ATK: 58, DEF: 58, SATK: 76, SDEF: 76, SPD: 67 },
    description:
      "It lives far down in the depths of the ocean. It blinds its prey with light, using the moment they’re dazzled to swallow them whole.",
    height: "1.2 m",
    weight: "22.5 kg",
    ability: ["Volt Absorb", "Illuminate", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/171.png",
  },
  {
    name: "Pichu",
    type: ["Electric"],
    base: { HP: 20, ATK: 40, DEF: 15, SATK: 35, SDEF: 35, SPD: 60 },
    description:
      "It has electric sacs in its cheeks. When they’re fully charged, Pichu plays very energetically.",
    height: "0.3 m",
    weight: "2 kg",
    ability: ["Static", "Lightning Rod"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/172.png",
  },
  {
    name: "Cleffa",
    type: ["Fairy"],
    base: { HP: 50, ATK: 25, DEF: 28, SATK: 45, SDEF: 55, SPD: 15 },
    description:
      "Said to have ridden here on a shooting star, Cleffa seem to appear in places where meteorites have struck in the past.",
    height: "0.3 m",
    weight: "3 kg",
    ability: ["Cute Charm", "Magic Guard", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/173.png",
  },
  {
    name: "Igglybuff",
    type: ["Normal", "Fairy"],
    base: { HP: 90, ATK: 30, DEF: 15, SATK: 40, SDEF: 20, SPD: 15 },
    description:
      "Left to its own devices, it will constantly practice singing. You should make it take a break so it doesn’t hurt its throat.",
    height: "0.3 m",
    weight: "1 kg",
    ability: ["Cute Charm", "Competitive", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/174.png",
  },
  {
    name: "Togepi",
    type: ["Fairy"],
    base: { HP: 35, ATK: 20, DEF: 65, SATK: 40, SDEF: 65, SPD: 20 },
    description:
      "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
    height: "0.3 m",
    weight: "1.5 kg",
    ability: ["Hustle", "Serene Grace", "Super Luck"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/175.png",
  },
  {
    name: "Togetic",
    type: ["Fairy", "Flying"],
    base: { HP: 55, ATK: 40, DEF: 85, SATK: 80, SDEF: 105, SPD: 40 },
    description:
      "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
    height: "0.6 m",
    weight: "3.2 kg",
    ability: ["Hustle", "Serene Grace", "Super Luck"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/176.png",
  },
  {
    name: "Natu",
    type: ["Psychic", "Flying"],
    base: { HP: 40, ATK: 50, DEF: 45, SATK: 70, SDEF: 45, SPD: 70 },
    description:
      "The look in its eyes gives the impression that it’s carefully observing you. If you approach it, Natu will hop away.",
    height: "0.2 m",
    weight: "2 kg",
    ability: ["Synchronize", "Early Bird", "Magic Bounce"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/177.png",
  },
  {
    name: "Xatu",
    type: ["Psychic", "Flying"],
    base: { HP: 65, ATK: 75, DEF: 70, SATK: 95, SDEF: 70, SPD: 95 },
    description:
      "While it can see the future, it has no desire to change it, which is probably why it remains motionless at all times.",
    height: "1.5 m",
    weight: "15 kg",
    ability: ["Synchronize", "Early Bird", "Magic Bounce"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/178.png",
  },
  {
    name: "Mareep",
    type: ["Electric"],
    base: { HP: 55, ATK: 40, DEF: 40, SATK: 65, SDEF: 45, SPD: 35 },
    description:
      "Rubbing its fleece generates electricity. You’ll want to pet it because it’s cute, but if you use your bare hand, you’ll get a painful shock.",
    height: "0.6 m",
    weight: "7.8 kg",
    ability: ["Static", "Plus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/179.png",
  },
  {
    name: "Flaaffy",
    type: ["Electric"],
    base: { HP: 70, ATK: 55, DEF: 55, SATK: 80, SDEF: 60, SPD: 45 },
    description:
      "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches.",
    height: "0.8 m",
    weight: "13.3 kg",
    ability: ["Static", "Plus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/180.png",
  },
  {
    name: "Ampharos",
    type: ["Electric"],
    base: { HP: 90, ATK: 75, DEF: 85, SATK: 115, SDEF: 90, SPD: 55 },
    description:
      "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors.",
    height: "1.4 m",
    weight: "61.5 kg",
    ability: ["Static", "Plus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/181.png",
  },
  {
    name: "Bellossom",
    type: ["Grass"],
    base: { HP: 75, ATK: 80, DEF: 95, SATK: 90, SDEF: 100, SPD: 50 },
    description:
      "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.",
    height: "0.4 m",
    weight: "5.8 kg",
    ability: ["Chlorophyll", "Healer"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/182.png",
  },
  {
    name: "Marill",
    type: ["Water", "Fairy"],
    base: { HP: 70, ATK: 20, DEF: 50, SATK: 20, SDEF: 50, SPD: 40 },
    description:
      "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pokémon’s tail is flexible and configured to stretch.",
    height: "0.4 m",
    weight: "8.5 kg",
    ability: ["Thick Fat", "Huge Power", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/183.png",
  },
  {
    name: "Azumarill",
    type: ["Water", "Fairy"],
    base: { HP: 100, ATK: 50, DEF: 80, SATK: 60, SDEF: 80, SPD: 50 },
    description:
      "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pokémon. The air balloons enable the Pokémon in trouble to breathe.",
    height: "0.8 m",
    weight: "28.5 kg",
    ability: ["Thick Fat", "Huge Power", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/184.png",
  },
  {
    name: "Sudowoodo",
    type: ["Rock"],
    base: { HP: 70, ATK: 100, DEF: 115, SATK: 30, SDEF: 65, SPD: 30 },
    description:
      "The result of its holding the same pose all the time is arms that have become supple yet strong.",
    height: "1.2 m",
    weight: "38 kg",
    ability: ["Sturdy", "Rock Head", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/185.png",
  },
  {
    name: "Politoed",
    type: ["Water"],
    base: { HP: 90, ATK: 75, DEF: 75, SATK: 90, SDEF: 100, SPD: 70 },
    description:
      "The longer and more luxurious the curled hair on its head, the greater the number of Poliwag and Poliwhirl that will obey it.",
    height: "1.1 m",
    weight: "33.9 kg",
    ability: ["Water Absorb", "Damp", "Drizzle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/186.png",
  },
  {
    name: "Hoppip",
    type: ["Grass", "Flying"],
    base: { HP: 35, ATK: 35, DEF: 40, SATK: 35, SDEF: 55, SPD: 50 },
    description:
      "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
    height: "0.4 m",
    weight: "0.5 kg",
    ability: ["Chlorophyll", "Leaf Guard", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/187.png",
  },
  {
    name: "Skiploom",
    type: ["Grass", "Flying"],
    base: { HP: 55, ATK: 45, DEF: 50, SATK: 45, SDEF: 65, SPD: 80 },
    description:
      "Skiploom’s flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
    height: "0.6 m",
    weight: "1 kg",
    ability: ["Chlorophyll", "Leaf Guard", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/188.png",
  },
  {
    name: "Jumpluff",
    type: ["Grass", "Flying"],
    base: { HP: 75, ATK: 55, DEF: 70, SATK: 55, SDEF: 95, SPD: 110 },
    description:
      "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
    height: "0.8 m",
    weight: "3 kg",
    ability: ["Chlorophyll", "Leaf Guard", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/189.png",
  },
  {
    name: "Aipom",
    type: ["Normal"],
    base: { HP: 55, ATK: 70, DEF: 55, SATK: 40, SDEF: 55, SPD: 85 },
    description:
      "It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
    height: "0.8 m",
    weight: "11.5 kg",
    ability: ["Run Away", "Pickup", "Skill Link"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/190.png",
  },
  {
    name: "Sunkern",
    type: ["Grass"],
    base: { HP: 30, ATK: 30, DEF: 30, SATK: 30, SDEF: 30, SPD: 30 },
    description:
      "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
    height: "0.3 m",
    weight: "1.8 kg",
    ability: ["Chlorophyll", "Solar Power", "Early Bird"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/191.png",
  },
  {
    name: "Sunflora",
    type: ["Grass"],
    base: { HP: 75, ATK: 75, DEF: 55, SATK: 105, SDEF: 85, SPD: 30 },
    description:
      "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
    height: "0.8 m",
    weight: "8.5 kg",
    ability: ["Chlorophyll", "Solar Power", "Early Bird"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/192.png",
  },
  {
    name: "Yanma",
    type: ["Bug", "Flying"],
    base: { HP: 65, ATK: 65, DEF: 45, SATK: 75, SDEF: 45, SPD: 95 },
    description:
      "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
    height: "1.2 m",
    weight: "38 kg",
    ability: ["Speed Boost", "Compound Eyes", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/193.png",
  },
  {
    name: "Wooper",
    type: ["Water", "Ground"],
    base: { HP: 55, ATK: 45, DEF: 45, SATK: 25, SDEF: 25, SPD: 15 },
    description:
      "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
    height: "0.4 m",
    weight: "8.5 kg",
    ability: ["Damp", "Water Absorb", "Unaware"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/194.png",
  },
  {
    name: "Quagsire",
    type: ["Water", "Ground"],
    base: { HP: 95, ATK: 85, DEF: 85, SATK: 65, SDEF: 65, SPD: 35 },
    description:
      "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
    height: "1.4 m",
    weight: "75 kg",
    ability: ["Damp", "Water Absorb", "Unaware"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/195.png",
  },
  {
    name: "Espeon",
    type: ["Psychic"],
    base: { HP: 65, ATK: 65, DEF: 60, SATK: 130, SDEF: 95, SPD: 110 },
    description:
      "Psychic power builds up in the orb on its forehead as it bathes in the sunshine. Espeon is not good at battling at night.",
    height: "0.9 m",
    weight: "26.5 kg",
    ability: ["Synchronize", "Magic Bounce"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/196.png",
  },
  {
    name: "Umbreon",
    type: ["Dark"],
    base: { HP: 95, ATK: 65, DEF: 110, SATK: 60, SDEF: 130, SPD: 65 },
    description:
      "It lurks in the dark of night looking for prey. At the moment it pounces, the rings on its body glow dimly but ominously.",
    height: "1 m",
    weight: "27 kg",
    ability: ["Synchronize", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/197.png",
  },
  {
    name: "Murkrow",
    type: ["Dark", "Flying"],
    base: { HP: 60, ATK: 85, DEF: 42, SATK: 85, SDEF: 42, SPD: 91 },
    description:
      "It searches for shiny things for its boss. Murkrow’s presence is said to be unlucky, so many people detest it.",
    height: "0.5 m",
    weight: "2.1 kg",
    ability: ["Insomnia", "Super Luck", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/198.png",
  },
  {
    name: "Slowking",
    type: ["Water", "Psychic"],
    base: { HP: 95, ATK: 75, DEF: 80, SATK: 100, SDEF: 110, SPD: 30 },
    description:
      "It’s called “the sage of the sea.” It engages in battles of wits with Oranguru, but the result is usually a draw.",
    height: "2 m",
    weight: "79.5 kg",
    ability: ["Oblivious", "Own Tempo", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/199.png",
  },
  {
    name: "Misdreavus",
    type: ["Ghost"],
    base: { HP: 60, ATK: 60, DEF: 60, SATK: 85, SDEF: 85, SPD: 85 },
    description:
      "What makes it happy is imitating the voices of weeping people and scaring everyone. It doesn’t deal well with folks who aren’t easily frightened.",
    height: "0.7 m",
    weight: "1 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/200.png",
  },
  {
    name: "Unown",
    type: ["Psychic"],
    base: { HP: 48, ATK: 72, DEF: 48, SATK: 72, SDEF: 48, SPD: 48 },
    description:
      "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
    height: "0.5 m",
    weight: "5 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/201.png",
  },
  {
    name: "Wobbuffet",
    type: ["Psychic"],
    base: { HP: 190, ATK: 33, DEF: 58, SATK: 33, SDEF: 58, SPD: 33 },
    description:
      "Wobbuffet does nothing but endure attacks—it won’t attack on its own. However, it won’t endure an attack on its tail. When that happens, the Pokémon will try to take the foe with it using Destiny Bond.",
    height: "1.3 m",
    weight: "28.5 kg",
    ability: ["Shadow Tag", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/202.png",
  },
  {
    name: "Girafarig",
    type: ["Normal", "Psychic"],
    base: { HP: 70, ATK: 80, DEF: 65, SATK: 90, SDEF: 65, SPD: 85 },
    description:
      "Girafarig’s rear head contains a tiny brain that is too small for thinking. However, the rear head doesn’t need to sleep, so it can keep watch over its surroundings 24 hours a day.",
    height: "1.5 m",
    weight: "41.5 kg",
    ability: ["Inner Focus", "Early Bird", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/203.png",
  },
  {
    name: "Pineco",
    type: ["Bug"],
    base: { HP: 50, ATK: 65, DEF: 90, SATK: 35, SDEF: 35, SPD: 15 },
    description:
      "It sticks tree bark to itself with its saliva, making itself thicker and larger. Elderly Pineco are ridiculously huge.",
    height: "0.6 m",
    weight: "7.2 kg",
    ability: ["Sturdy", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/204.png",
  },
  {
    name: "Forretress",
    type: ["Bug", "Steel"],
    base: { HP: 75, ATK: 90, DEF: 140, SATK: 60, SDEF: 60, SPD: 40 },
    description:
      "In the moment that it gulps down its prey, the inside of its shell is exposed, but to this day, no one has ever seen that sight.",
    height: "1.2 m",
    weight: "125.8 kg",
    ability: ["Sturdy", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/205.png",
  },
  {
    name: "Dunsparce",
    type: ["Normal"],
    base: { HP: 100, ATK: 70, DEF: 70, SATK: 65, SDEF: 65, SPD: 45 },
    description:
      "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky.",
    height: "1.5 m",
    weight: "14 kg",
    ability: ["Serene Grace", "Run Away", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/206.png",
  },
  {
    name: "Gligar",
    type: ["Ground", "Flying"],
    base: { HP: 65, ATK: 75, DEF: 105, SATK: 35, SDEF: 65, SPD: 85 },
    description:
      "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
    height: "1.1 m",
    weight: "64.8 kg",
    ability: ["Hyper Cutter", "Sand Veil", "Immunity"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/207.png",
  },
  {
    name: "Steelix",
    type: ["Steel", "Ground"],
    base: { HP: 75, ATK: 85, DEF: 200, SATK: 55, SDEF: 65, SPD: 30 },
    description:
      "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth’s core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
    height: "9.2 m",
    weight: "400 kg",
    ability: ["Rock Head", "Sturdy", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/208.png",
  },
  {
    name: "Snubbull",
    type: ["Fairy"],
    base: { HP: 60, ATK: 80, DEF: 50, SATK: 40, SDEF: 40, SPD: 30 },
    description:
      "In contrast to its appearance, it’s quite timid. When playing with other puppy Pokémon, it sometimes gets bullied.",
    height: "0.6 m",
    weight: "7.8 kg",
    ability: ["Intimidate", "Run Away", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/209.png",
  },
  {
    name: "Granbull",
    type: ["Fairy"],
    base: { HP: 90, ATK: 120, DEF: 75, SATK: 60, SDEF: 60, SPD: 45 },
    description:
      "Although it’s popular with young people, Granbull is timid and sensitive, so it’s totally incompetent as a watchdog.",
    height: "1.4 m",
    weight: "48.7 kg",
    ability: ["Intimidate", "Quick Feet", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/210.png",
  },
  {
    name: "Qwilfish",
    type: ["Water", "Poison"],
    base: { HP: 65, ATK: 95, DEF: 85, SATK: 55, SDEF: 55, SPD: 85 },
    description:
      "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
    height: "0.5 m",
    weight: "3.9 kg",
    ability: ["Poison Point", "Swift Swim", "Intimidate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/211.png",
  },
  {
    name: "Scizor",
    type: ["Bug", "Steel"],
    base: { HP: 70, ATK: 130, DEF: 100, SATK: 55, SDEF: 80, SPD: 65 },
    description:
      "Once it has identified something as an enemy, it will continue beating them with its steel-hard pincers until there’s nothing left but scraps.",
    height: "1.8 m",
    weight: "118 kg",
    ability: ["Swarm", "Technician", "Light Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/212.png",
  },
  {
    name: "Shuckle",
    type: ["Bug", "Rock"],
    base: { HP: 20, ATK: 10, DEF: 230, SATK: 10, SDEF: 230, SPD: 5 },
    description:
      "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
    height: "0.6 m",
    weight: "20.5 kg",
    ability: ["Sturdy", "Gluttony", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/213.png",
  },
  {
    name: "Heracross",
    type: ["Bug", "Fighting"],
    base: { HP: 80, ATK: 125, DEF: 75, SATK: 40, SDEF: 95, SPD: 85 },
    description:
      "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it’s not that good at flying.",
    height: "1.5 m",
    weight: "54 kg",
    ability: ["Swarm", "Guts", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/214.png",
  },
  {
    name: "Sneasel",
    type: ["Dark", "Ice"],
    base: { HP: 55, ATK: 95, DEF: 55, SATK: 35, SDEF: 75, SPD: 115 },
    description:
      "It blends into the dark of night to ambush its prey. Sneasel will attack Sandshrew, but its hard skin can cause Sneasel’s claws to snap off.",
    height: "0.9 m",
    weight: "28 kg",
    ability: ["Inner Focus", "Keen Eye", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/215.png",
  },
  {
    name: "Teddiursa",
    type: ["Normal"],
    base: { HP: 60, ATK: 80, DEF: 50, SATK: 50, SDEF: 50, SPD: 40 },
    description:
      "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
    height: "0.6 m",
    weight: "8.8 kg",
    ability: ["Pickup", "Quick Feet", "Honey Gather"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/216.png",
  },
  {
    name: "Ursaring",
    type: ["Normal"],
    base: { HP: 90, ATK: 130, DEF: 75, SATK: 75, SDEF: 75, SPD: 55 },
    description:
      "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
    height: "1.8 m",
    weight: "125.8 kg",
    ability: ["Guts", "Quick Feet", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/217.png",
  },
  {
    name: "Slugma",
    type: ["Fire"],
    base: { HP: 40, ATK: 40, DEF: 40, SATK: 70, SDEF: 40, SPD: 20 },
    description:
      "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon’s body, carrying essential nutrients and oxygen to its organs.",
    height: "0.7 m",
    weight: "35 kg",
    ability: ["Magma Armor", "Flame Body", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/218.png",
  },
  {
    name: "Magcargo",
    type: ["Fire", "Rock"],
    base: { HP: 60, ATK: 50, DEF: 120, SATK: 90, SDEF: 80, SPD: 30 },
    description:
      "Magcargo’s body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.",
    height: "0.8 m",
    weight: "55 kg",
    ability: ["Magma Armor", "Flame Body", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/219.png",
  },
  {
    name: "Swinub",
    type: ["Ice", "Ground"],
    base: { HP: 50, ATK: 50, DEF: 40, SATK: 30, SDEF: 30, SPD: 50 },
    description:
      "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
    height: "0.4 m",
    weight: "6.5 kg",
    ability: ["Oblivious", "Snow Cloak", "Thick Fat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/220.png",
  },
  {
    name: "Piloswine",
    type: ["Ice", "Ground"],
    base: { HP: 100, ATK: 100, DEF: 80, SATK: 60, SDEF: 60, SPD: 50 },
    description:
      "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
    height: "1.1 m",
    weight: "55.8 kg",
    ability: ["Oblivious", "Snow Cloak", "Thick Fat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/221.png",
  },
  {
    name: "Corsola",
    type: ["Water", "Rock"],
    base: { HP: 65, ATK: 55, DEF: 95, SATK: 65, SDEF: 95, SPD: 35 },
    description:
      "In Alola, where their natural enemies Mareanie are plentiful, many Corsola have stubby branches on their heads.",
    height: "0.6 m",
    weight: "5 kg",
    ability: ["Hustle", "Natural Cure", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/222.png",
  },
  {
    name: "Remoraid",
    type: ["Water"],
    base: { HP: 35, ATK: 65, DEF: 35, SATK: 65, SDEF: 35, SPD: 65 },
    description:
      "Also known as the “sniper of the seas,” its water gun can hit prey without fail from over 300 feet away.",
    height: "0.6 m",
    weight: "12 kg",
    ability: ["Hustle", "Sniper", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/223.png",
  },
  {
    name: "Octillery",
    type: ["Water"],
    base: { HP: 75, ATK: 105, DEF: 75, SATK: 105, SDEF: 75, SPD: 45 },
    description:
      "It usually sleeps in caves. The pitch-black ink that Octillery spits is also used for cooking.",
    height: "0.9 m",
    weight: "28.5 kg",
    ability: ["Suction Cups", "Sniper", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/224.png",
  },
  {
    name: "Delibird",
    type: ["Ice", "Flying"],
    base: { HP: 45, ATK: 55, DEF: 45, SATK: 65, SDEF: 45, SPD: 75 },
    description:
      "It wraps food in its tail to carry it around. The Delibird with the biggest tail is the boss of the flock!",
    height: "0.9 m",
    weight: "16 kg",
    ability: ["Vital Spirit", "Hustle", "Insomnia"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/225.png",
  },
  {
    name: "Mantine",
    type: ["Water", "Flying"],
    base: { HP: 85, ATK: 40, DEF: 70, SATK: 80, SDEF: 140, SPD: 70 },
    description:
      "Many people have taken up surfing because they admire how magnificently Mantine swims.",
    height: "2.1 m",
    weight: "220 kg",
    ability: ["Swift Swim", "Water Absorb", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/226.png",
  },
  {
    name: "Skarmory",
    type: ["Steel", "Flying"],
    base: { HP: 65, ATK: 80, DEF: 140, SATK: 40, SDEF: 70, SPD: 70 },
    description:
      "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!",
    height: "1.7 m",
    weight: "50.5 kg",
    ability: ["Keen Eye", "Sturdy", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/227.png",
  },
  {
    name: "Houndour",
    type: ["Dark", "Fire"],
    base: { HP: 45, ATK: 60, DEF: 30, SATK: 80, SDEF: 50, SPD: 65 },
    description:
      "They make repeated eerie howls before dawn to call attention to their pack.",
    height: "0.6 m",
    weight: "10.8 kg",
    ability: ["Early Bird", "Flash Fire", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/228.png",
  },
  {
    name: "Houndoom",
    type: ["Dark", "Fire"],
    base: { HP: 75, ATK: 90, DEF: 50, SATK: 110, SDEF: 80, SPD: 95 },
    description:
      "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it.",
    height: "1.4 m",
    weight: "35 kg",
    ability: ["Early Bird", "Flash Fire", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/229.png",
  },
  {
    name: "Kingdra",
    type: ["Water", "Dragon"],
    base: { HP: 75, ATK: 95, DEF: 95, SATK: 95, SDEF: 95, SPD: 85 },
    description:
      "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pokémon is said to awaken and wander about in search of prey.",
    height: "1.8 m",
    weight: "152 kg",
    ability: ["Swift Swim", "Sniper", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/230.png",
  },
  {
    name: "Phanpy",
    type: ["Ground"],
    base: { HP: 90, ATK: 60, DEF: 60, SATK: 40, SDEF: 40, SPD: 40 },
    description:
      "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.",
    height: "0.5 m",
    weight: "33.5 kg",
    ability: ["Pickup", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/231.png",
  },
  {
    name: "Donphan",
    type: ["Ground"],
    base: { HP: 90, ATK: 120, DEF: 120, SATK: 60, SDEF: 60, SPD: 50 },
    description:
      "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.",
    height: "1.1 m",
    weight: "120 kg",
    ability: ["Sturdy", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/232.png",
  },
  {
    name: "Porygon2",
    type: ["Normal"],
    base: { HP: 85, ATK: 80, DEF: 90, SATK: 105, SDEF: 95, SPD: 60 },
    description:
      "Even though it doesn’t die in the vacuum of space, it can’t move around very well in zero gravity.",
    height: "0.6 m",
    weight: "32.5 kg",
    ability: ["Trace", "Download", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/233.png",
  },
  {
    name: "Stantler",
    type: ["Normal"],
    base: { HP: 73, ATK: 95, DEF: 62, SATK: 85, SDEF: 65, SPD: 85 },
    description:
      "Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
    height: "1.4 m",
    weight: "71.2 kg",
    ability: ["Intimidate", "Frisk", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/234.png",
  },
  {
    name: "Smeargle",
    type: ["Normal"],
    base: { HP: 55, ATK: 20, DEF: 35, SATK: 20, SDEF: 45, SPD: 75 },
    description:
      "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them.",
    height: "1.2 m",
    weight: "58 kg",
    ability: ["Own Tempo", "Technician", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/235.png",
  },
  {
    name: "Tyrogue",
    type: ["Fighting"],
    base: { HP: 35, ATK: 35, DEF: 35, SATK: 35, SDEF: 35, SPD: 35 },
    description:
      "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
    height: "0.7 m",
    weight: "21 kg",
    ability: ["Guts", "Steadfast", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/236.png",
  },
  {
    name: "Hitmontop",
    type: ["Fighting"],
    base: { HP: 50, ATK: 95, DEF: 95, SATK: 35, SDEF: 110, SPD: 70 },
    description:
      "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
    height: "1.4 m",
    weight: "48 kg",
    ability: ["Intimidate", "Technician", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/237.png",
  },
  {
    name: "Smoochum",
    type: ["Ice", "Psychic"],
    base: { HP: 45, ATK: 30, DEF: 15, SATK: 85, SDEF: 65, SPD: 65 },
    description:
      "Highly perceptive sensors, Smoochum’s lips are kept moist by its daily application of tree sap.",
    height: "0.4 m",
    weight: "6 kg",
    ability: ["Oblivious", "Forewarn", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/238.png",
  },
  {
    name: "Elekid",
    type: ["Electric"],
    base: { HP: 45, ATK: 63, DEF: 37, SATK: 65, SDEF: 55, SPD: 95 },
    description:
      "When its horns shine a bluish white, that’s the sign it’s fully charged. You’ll get a shocking jolt if you touch it!",
    height: "0.6 m",
    weight: "23.5 kg",
    ability: ["Static", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/239.png",
  },
  {
    name: "Magby",
    type: ["Fire"],
    base: { HP: 45, ATK: 75, DEF: 37, SATK: 70, SDEF: 55, SPD: 83 },
    description:
      "Its body temperature is always around 1,100 degrees Fahrenheit. If Magby falls into a small- enough pond, the whole thing will dry up.",
    height: "0.7 m",
    weight: "21.4 kg",
    ability: ["Flame Body", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/240.png",
  },
  {
    name: "Miltank",
    type: ["Normal"],
    base: { HP: 95, ATK: 80, DEF: 105, SATK: 40, SDEF: 70, SPD: 100 },
    description:
      "Its milk is delicious and chock-full of nutrients. However, if you drink too much, it could make your stomach hurt, so be careful.",
    height: "1.2 m",
    weight: "75.5 kg",
    ability: ["Thick Fat", "Scrappy", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/241.png",
  },
  {
    name: "Blissey",
    type: ["Normal"],
    base: { HP: 255, ATK: 10, DEF: 10, SATK: 75, SDEF: 135, SPD: 55 },
    description:
      "This Pokémon is overflowing with love. Only Chansey that share a strong bond with their Trainer can evolve, so people say.",
    height: "1.5 m",
    weight: "46.8 kg",
    ability: ["Natural Cure", "Serene Grace", "Healer"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/242.png",
  },
  {
    name: "Raikou",
    type: ["Electric"],
    base: { HP: 90, ATK: 85, DEF: 75, SATK: 115, SDEF: 100, SPD: 115 },
    description:
      "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
    height: "1.9 m",
    weight: "178 kg",
    ability: ["Pressure", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/243.png",
  },
  {
    name: "Entei",
    type: ["Fire"],
    base: { HP: 115, ATK: 115, DEF: 85, SATK: 90, SDEF: 75, SPD: 100 },
    description:
      "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    height: "2.1 m",
    weight: "198 kg",
    ability: ["Pressure", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/244.png",
  },
  {
    name: "Suicune",
    type: ["Water"],
    base: { HP: 100, ATK: 75, DEF: 115, SATK: 90, SDEF: 115, SPD: 85 },
    description:
      "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
    height: "2 m",
    weight: "187 kg",
    ability: ["Pressure", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/245.png",
  },
  {
    name: "Larvitar",
    type: ["Rock", "Ground"],
    base: { HP: 50, ATK: 64, DEF: 50, SATK: 45, SDEF: 50, SPD: 41 },
    description:
      "Raised on nutrients it finds in the dirt, it eats roughly a mountain’s worth of dirt before it becomes a pupa.",
    height: "0.6 m",
    weight: "72 kg",
    ability: ["Guts", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/246.png",
  },
  {
    name: "Pupitar",
    type: ["Rock", "Ground"],
    base: { HP: 70, ATK: 84, DEF: 70, SATK: 65, SDEF: 70, SPD: 51 },
    description:
      "This dangerous pupa thrashes about. Its shell is as hard as bedrock, containing its gradually forming new body within.",
    height: "1.2 m",
    weight: "152 kg",
    ability: ["Shed Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/247.png",
  },
  {
    name: "Tyranitar",
    type: ["Rock", "Dark"],
    base: { HP: 100, ATK: 134, DEF: 110, SATK: 95, SDEF: 100, SPD: 61 },
    description:
      "This Pokémon is a mobile disaster, leaving mountains crumbled and houses destroyed in its wake.",
    height: "2 m",
    weight: "202 kg",
    ability: ["Sand Stream", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/248.png",
  },
  {
    name: "Lugia",
    type: ["Psychic", "Flying"],
    base: { HP: 106, ATK: 90, DEF: 130, SATK: 90, SDEF: 154, SPD: 110 },
    description:
      "Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
    height: "5.2 m",
    weight: "216 kg",
    ability: ["Pressure", "Multiscale"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/249.png",
  },
  {
    name: "Ho-Oh",
    type: ["Fire", "Flying"],
    base: { HP: 106, ATK: 130, DEF: 90, SATK: 110, SDEF: 154, SPD: 90 },
    description:
      "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    height: "3.8 m",
    weight: "199 kg",
    ability: ["Pressure", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/250.png",
  },
  {
    name: "Celebi",
    type: ["Psychic", "Grass"],
    base: { HP: 100, ATK: 100, DEF: 100, SATK: 100, SDEF: 100, SPD: 100 },
    description:
      "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    height: "0.6 m",
    weight: "5 kg",
    ability: ["Natural Cure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/251.png",
  },
  {
    name: "Treecko",
    type: ["Grass"],
    base: { HP: 40, ATK: 45, DEF: 35, SATK: 65, SDEF: 55, SPD: 70 },
    description:
      "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.",
    height: "0.5 m",
    weight: "5 kg",
    ability: ["Overgrow", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/252.png",
  },
  {
    name: "Grovyle",
    type: ["Grass"],
    base: { HP: 50, ATK: 65, DEF: 45, SATK: 85, SDEF: 65, SPD: 95 },
    description:
      "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.",
    height: "0.9 m",
    weight: "21.6 kg",
    ability: ["Overgrow", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/253.png",
  },
  {
    name: "Sceptile",
    type: ["Grass"],
    base: { HP: 70, ATK: 85, DEF: 65, SATK: 105, SDEF: 85, SPD: 120 },
    description:
      "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.",
    height: "1.7 m",
    weight: "52.2 kg",
    ability: ["Overgrow", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/254.png",
  },
  {
    name: "Torchic",
    type: ["Fire"],
    base: { HP: 45, ATK: 60, DEF: 40, SATK: 70, SDEF: 50, SPD: 45 },
    description:
      "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.",
    height: "0.4 m",
    weight: "2.5 kg",
    ability: ["Blaze", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/255.png",
  },
  {
    name: "Combusken",
    type: ["Fire", "Fighting"],
    base: { HP: 60, ATK: 85, DEF: 60, SATK: 85, SDEF: 60, SPD: 55 },
    description:
      "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon’s cry is very loud and distracting.",
    height: "0.9 m",
    weight: "19.5 kg",
    ability: ["Blaze", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/256.png",
  },
  {
    name: "Blaziken",
    type: ["Fire", "Fighting"],
    base: { HP: 80, ATK: 120, DEF: 70, SATK: 110, SDEF: 70, SPD: 80 },
    description:
      "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon’s blazing punches leave its foes scorched and blackened.",
    height: "1.9 m",
    weight: "52 kg",
    ability: ["Blaze", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/257.png",
  },
  {
    name: "Mudkip",
    type: ["Water"],
    base: { HP: 50, ATK: 70, DEF: 50, SATK: 50, SDEF: 50, SPD: 40 },
    description:
      "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.",
    height: "0.4 m",
    weight: "7.6 kg",
    ability: ["Torrent", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/258.png",
  },
  {
    name: "Marshtomp",
    type: ["Water", "Ground"],
    base: { HP: 70, ATK: 85, DEF: 70, SATK: 60, SDEF: 70, SPD: 50 },
    description:
      "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon’s hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
    height: "0.7 m",
    weight: "28 kg",
    ability: ["Torrent", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/259.png",
  },
  {
    name: "Swampert",
    type: ["Water", "Ground"],
    base: { HP: 100, ATK: 110, DEF: 90, SATK: 85, SDEF: 90, SPD: 60 },
    description:
      "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
    height: "1.5 m",
    weight: "81.9 kg",
    ability: ["Torrent", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/260.png",
  },
  {
    name: "Poochyena",
    type: ["Dark"],
    base: { HP: 35, ATK: 55, DEF: 35, SATK: 30, SDEF: 30, SPD: 35 },
    description:
      "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
    height: "0.5 m",
    weight: "13.6 kg",
    ability: ["Run Away", "Quick Feet", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/261.png",
  },
  {
    name: "Mightyena",
    type: ["Dark"],
    base: { HP: 70, ATK: 90, DEF: 70, SATK: 60, SDEF: 60, SPD: 70 },
    description:
      "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
    height: "1 m",
    weight: "37 kg",
    ability: ["Intimidate", "Quick Feet", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/262.png",
  },
  {
    name: "Zigzagoon",
    type: ["Normal"],
    base: { HP: 38, ATK: 30, DEF: 41, SATK: 30, SDEF: 41, SPD: 60 },
    description:
      "The hair on Zigzagoon’s back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.",
    height: "0.4 m",
    weight: "17.5 kg",
    ability: ["Pickup", "Gluttony", "Quick Feet"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/263.png",
  },
  {
    name: "Linoone",
    type: ["Normal"],
    base: { HP: 78, ATK: 70, DEF: 61, SATK: 50, SDEF: 61, SPD: 100 },
    description:
      "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.",
    height: "0.5 m",
    weight: "32.5 kg",
    ability: ["Pickup", "Gluttony", "Quick Feet"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/264.png",
  },
  {
    name: "Wurmple",
    type: ["Bug"],
    base: { HP: 45, ATK: 45, DEF: 35, SATK: 20, SDEF: 30, SPD: 20 },
    description:
      "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.",
    height: "0.3 m",
    weight: "3.6 kg",
    ability: ["Shield Dust", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/265.png",
  },
  {
    name: "Silcoon",
    type: ["Bug"],
    base: { HP: 50, ATK: 35, DEF: 55, SATK: 25, SDEF: 25, SPD: 15 },
    description:
      "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking rainwater that collects on its silk.",
    height: "0.6 m",
    weight: "10 kg",
    ability: ["Shed Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/266.png",
  },
  {
    name: "Beautifly",
    type: ["Bug", "Flying"],
    base: { HP: 60, ATK: 70, DEF: 50, SATK: 100, SDEF: 50, SPD: 65 },
    description:
      "Beautifly has a long mouth like a coiled needle, which is very convenient for collecting pollen from flowers. This Pokémon rides the spring winds as it flits around gathering pollen.",
    height: "1 m",
    weight: "28.4 kg",
    ability: ["Swarm", "Rivalry"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/267.png",
  },
  {
    name: "Cascoon",
    type: ["Bug"],
    base: { HP: 50, ATK: 35, DEF: 55, SATK: 25, SDEF: 25, SPD: 15 },
    description:
      "If it is attacked, Cascoon remains motionless however badly it may be hurt. It does so because if it were to move, its body would be weak upon evolution. This Pokémon will also not forget the pain it endured.",
    height: "0.7 m",
    weight: "11.5 kg",
    ability: ["Shed Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/268.png",
  },
  {
    name: "Dustox",
    type: ["Bug", "Poison"],
    base: { HP: 60, ATK: 50, DEF: 70, SATK: 50, SDEF: 90, SPD: 65 },
    description:
      "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.",
    height: "1.2 m",
    weight: "31.6 kg",
    ability: ["Shield Dust", "Compound Eyes"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/269.png",
  },
  {
    name: "Lotad",
    type: ["Water", "Grass"],
    base: { HP: 40, ATK: 30, DEF: 30, SATK: 40, SDEF: 50, SPD: 30 },
    description:
      "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to water because the leaf on its head grew large and heavy. It now lives by floating atop the water.",
    height: "0.5 m",
    weight: "2.6 kg",
    ability: ["Swift Swim", "Rain Dish", "Own Tempo"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/270.png",
  },
  {
    name: "Lombre",
    type: ["Water", "Grass"],
    base: { HP: 60, ATK: 50, DEF: 50, SATK: 60, SDEF: 70, SPD: 50 },
    description:
      "Lombre’s entire body is covered by a slippery, slimy film. It feels horribly unpleasant to be touched by this Pokémon’s hands. Lombre is often mistaken for a human child.",
    height: "1.2 m",
    weight: "32.5 kg",
    ability: ["Swift Swim", "Rain Dish", "Own Tempo"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/271.png",
  },
  {
    name: "Ludicolo",
    type: ["Water", "Grass"],
    base: { HP: 80, ATK: 70, DEF: 70, SATK: 90, SDEF: 100, SPD: 70 },
    description:
      "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo’s body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.",
    height: "1.5 m",
    weight: "55 kg",
    ability: ["Swift Swim", "Rain Dish", "Own Tempo"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/272.png",
  },
  {
    name: "Seedot",
    type: ["Grass"],
    base: { HP: 40, ATK: 40, DEF: 50, SATK: 30, SDEF: 30, SPD: 30 },
    description:
      "Seedot looks exactly like an acorn when it is dangling from a tree branch. It startles other Pokémon by suddenly moving. This Pokémon polishes its body once a day using leaves.",
    height: "0.5 m",
    weight: "4 kg",
    ability: ["Chlorophyll", "Early Bird", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/273.png",
  },
  {
    name: "Nuzleaf",
    type: ["Grass", "Dark"],
    base: { HP: 70, ATK: 70, DEF: 40, SATK: 60, SDEF: 40, SPD: 60 },
    description:
      "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf’s flute strikes fear and uncertainty in the hearts of people lost in a forest.",
    height: "1 m",
    weight: "28 kg",
    ability: ["Chlorophyll", "Early Bird", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/274.png",
  },
  {
    name: "Shiftry",
    type: ["Grass", "Dark"],
    base: { HP: 90, ATK: 100, DEF: 60, SATK: 90, SDEF: 60, SPD: 80 },
    description:
      "Shiftry’s large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.",
    height: "1.3 m",
    weight: "59.6 kg",
    ability: ["Chlorophyll", "Early Bird", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/275.png",
  },
  {
    name: "Taillow",
    type: ["Normal", "Flying"],
    base: { HP: 40, ATK: 55, DEF: 30, SATK: 30, SDEF: 30, SPD: 85 },
    description:
      "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.",
    height: "0.3 m",
    weight: "2.3 kg",
    ability: ["Guts", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/276.png",
  },
  {
    name: "Swellow",
    type: ["Normal", "Flying"],
    base: { HP: 60, ATK: 85, DEF: 60, SATK: 75, SDEF: 50, SPD: 125 },
    description:
      "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other’s wings.",
    height: "0.7 m",
    weight: "19.8 kg",
    ability: ["Guts", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/277.png",
  },
  {
    name: "Wingull",
    type: ["Water", "Flying"],
    base: { HP: 40, ATK: 30, DEF: 30, SATK: 55, SDEF: 30, SPD: 85 },
    description:
      "It builds nests in cliffs by the sea. It circles the skies above the ocean looking for its favorite food—Wishiwashi.",
    height: "0.6 m",
    weight: "9.5 kg",
    ability: ["Keen Eye", "Hydration", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/278.png",
  },
  {
    name: "Pelipper",
    type: ["Water", "Flying"],
    base: { HP: 60, ATK: 50, DEF: 100, SATK: 95, SDEF: 70, SPD: 65 },
    description:
      "It scoops up Wishiwashi in its huge beak and swallows them whole. It can devour more than 30 at one go!",
    height: "1.2 m",
    weight: "28 kg",
    ability: ["Keen Eye", "Drizzle", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/279.png",
  },
  {
    name: "Ralts",
    type: ["Psychic", "Fairy"],
    base: { HP: 28, ATK: 25, DEF: 25, SATK: 45, SDEF: 35, SPD: 40 },
    description:
      "Ralts has the ability to sense the emotions of people. If its Trainer is in a cheerful mood, this Pokémon grows cheerful and joyous in the same way.",
    height: "0.4 m",
    weight: "6.6 kg",
    ability: ["Synchronize", "Trace", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/280.png",
  },
  {
    name: "Kirlia",
    type: ["Psychic", "Fairy"],
    base: { HP: 38, ATK: 35, DEF: 35, SATK: 65, SDEF: 55, SPD: 50 },
    description:
      "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of nonexistent scenery.",
    height: "0.8 m",
    weight: "20.2 kg",
    ability: ["Synchronize", "Trace", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/281.png",
  },
  {
    name: "Gardevoir",
    type: ["Psychic", "Fairy"],
    base: { HP: 68, ATK: 65, DEF: 65, SATK: 125, SDEF: 115, SPD: 80 },
    description:
      "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.",
    height: "1.6 m",
    weight: "48.4 kg",
    ability: ["Synchronize", "Trace", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/282.png",
  },
  {
    name: "Surskit",
    type: ["Bug", "Water"],
    base: { HP: 40, ATK: 30, DEF: 32, SATK: 50, SDEF: 52, SPD: 65 },
    description:
      "It lives in ponds and marshes that feature lots of plant life. It often fights with Dewpider, whose habitat and diet are similar.",
    height: "0.5 m",
    weight: "1.7 kg",
    ability: ["Swift Swim", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/283.png",
  },
  {
    name: "Masquerain",
    type: ["Bug", "Flying"],
    base: { HP: 70, ATK: 60, DEF: 62, SATK: 100, SDEF: 82, SPD: 80 },
    description:
      "Its thin, winglike antennae are highly absorbent. It waits out rainy days in tree hollows.",
    height: "0.8 m",
    weight: "3.6 kg",
    ability: ["Intimidate", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/284.png",
  },
  {
    name: "Shroomish",
    type: ["Grass"],
    base: { HP: 60, ATK: 40, DEF: 60, SATK: 40, SDEF: 60, SPD: 35 },
    description:
      "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon’s spores are so toxic, they make trees and weeds wilt.",
    height: "0.4 m",
    weight: "4.5 kg",
    ability: ["Effect Spore", "Poison Heal", "Quick Feet"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/285.png",
  },
  {
    name: "Breloom",
    type: ["Grass", "Fighting"],
    base: { HP: 60, ATK: 130, DEF: 80, SATK: 60, SDEF: 60, SPD: 70 },
    description:
      "The seeds ringing Breloom’s tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon’s seed will cause your stomach to rumble.",
    height: "1.2 m",
    weight: "39.2 kg",
    ability: ["Effect Spore", "Poison Heal", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/286.png",
  },
  {
    name: "Slakoth",
    type: ["Normal"],
    base: { HP: 60, ATK: 60, DEF: 60, SATK: 35, SDEF: 35, SPD: 30 },
    description:
      "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
    height: "0.8 m",
    weight: "24 kg",
    ability: ["Truant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/287.png",
  },
  {
    name: "Vigoroth",
    type: ["Normal"],
    base: { HP: 80, ATK: 80, DEF: 80, SATK: 55, SDEF: 55, SPD: 90 },
    description:
      "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
    height: "1.4 m",
    weight: "46.5 kg",
    ability: ["Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/288.png",
  },
  {
    name: "Slaking",
    type: ["Normal"],
    base: { HP: 150, ATK: 160, DEF: 100, SATK: 95, SDEF: 65, SPD: 100 },
    description:
      "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
    height: "2 m",
    weight: "130.5 kg",
    ability: ["Truant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/289.png",
  },
  {
    name: "Nincada",
    type: ["Bug", "Ground"],
    base: { HP: 31, ATK: 45, DEF: 90, SATK: 30, SDEF: 30, SPD: 40 },
    description:
      "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can’t withstand bright sunlight so avoids it.",
    height: "0.5 m",
    weight: "5.5 kg",
    ability: ["Compound Eyes", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/290.png",
  },
  {
    name: "Ninjask",
    type: ["Bug", "Flying"],
    base: { HP: 61, ATK: 90, DEF: 45, SATK: 50, SDEF: 50, SPD: 160 },
    description:
      "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer’s abilities to the test.",
    height: "0.8 m",
    weight: "12 kg",
    ability: ["Speed Boost", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/291.png",
  },
  {
    name: "Shedinja",
    type: ["Bug", "Ghost"],
    base: { HP: 1, ATK: 90, DEF: 45, SATK: 30, SDEF: 30, SPD: 40 },
    description:
      "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn’t even breathe.",
    height: "0.8 m",
    weight: "1.2 kg",
    ability: ["Wonder Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/292.png",
  },
  {
    name: "Whismur",
    type: ["Normal"],
    base: { HP: 64, ATK: 51, DEF: 23, SATK: 51, SDEF: 23, SPD: 28 },
    description:
      "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
    height: "0.6 m",
    weight: "16.3 kg",
    ability: ["Soundproof", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/293.png",
  },
  {
    name: "Loudred",
    type: ["Normal"],
    base: { HP: 84, ATK: 71, DEF: 43, SATK: 71, SDEF: 43, SPD: 48 },
    description:
      "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
    height: "1 m",
    weight: "40.5 kg",
    ability: ["Soundproof", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/294.png",
  },
  {
    name: "Exploud",
    type: ["Normal"],
    base: { HP: 104, ATK: 91, DEF: 63, SATK: 91, SDEF: 73, SPD: 68 },
    description:
      "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voice when it is in battle.",
    height: "1.5 m",
    weight: "84 kg",
    ability: ["Soundproof", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/295.png",
  },
  {
    name: "Makuhita",
    type: ["Fighting"],
    base: { HP: 72, ATK: 60, DEF: 30, SATK: 20, SDEF: 30, SPD: 25 },
    description:
      "There’s a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita.",
    height: "1 m",
    weight: "86.4 kg",
    ability: ["Thick Fat", "Guts", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/296.png",
  },
  {
    name: "Hariyama",
    type: ["Fighting"],
    base: { HP: 144, ATK: 120, DEF: 60, SATK: 40, SDEF: 60, SPD: 50 },
    description:
      "Hariyama that are big and fat aren’t necessarily strong. There are some small ones that move nimbly and use moves skillfully.",
    height: "2.3 m",
    weight: "253.8 kg",
    ability: ["Thick Fat", "Guts", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/297.png",
  },
  {
    name: "Azurill",
    type: ["Normal", "Fairy"],
    base: { HP: 50, ATK: 20, DEF: 40, SATK: 20, SDEF: 40, SPD: 20 },
    description:
      "Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.",
    height: "0.2 m",
    weight: "2 kg",
    ability: ["Thick Fat", "Huge Power", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/298.png",
  },
  {
    name: "Nosepass",
    type: ["Rock"],
    base: { HP: 30, ATK: 45, DEF: 135, SATK: 45, SDEF: 90, SPD: 30 },
    description:
      "It hunts without twitching a muscle by pulling in its prey with powerful magnetism. But sometimes it pulls natural enemies in close.",
    height: "1 m",
    weight: "97 kg",
    ability: ["Sturdy", "Magnet Pull", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/299.png",
  },
  {
    name: "Skitty",
    type: ["Normal"],
    base: { HP: 50, ATK: 45, DEF: 45, SATK: 35, SDEF: 35, SPD: 50 },
    description:
      "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
    height: "0.6 m",
    weight: "11 kg",
    ability: ["Cute Charm", "Normalize", "Wonder Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/300.png",
  },
  {
    name: "Delcatty",
    type: ["Normal"],
    base: { HP: 70, ATK: 65, DEF: 65, SATK: 55, SDEF: 55, SPD: 90 },
    description:
      "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
    height: "1.1 m",
    weight: "32.6 kg",
    ability: ["Cute Charm", "Normalize", "Wonder Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/301.png",
  },
  {
    name: "Sableye",
    type: ["Dark", "Ghost"],
    base: { HP: 50, ATK: 75, DEF: 75, SATK: 65, SDEF: 65, SPD: 50 },
    description:
      "Materials from gems it has eaten float to the surface of its body and can form an infinite number of patterns among individuals.",
    height: "0.5 m",
    weight: "11 kg",
    ability: ["Keen Eye", "Stall", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/302.png",
  },
  {
    name: "Mawile",
    type: ["Steel", "Fairy"],
    base: { HP: 50, ATK: 85, DEF: 85, SATK: 55, SDEF: 55, SPD: 50 },
    description:
      "It has two mouths. The big jaws on the back of its head can’t taste anything, so that’s the mouth it uses to eat foods it doesn’t like.",
    height: "0.6 m",
    weight: "11.5 kg",
    ability: ["Hyper Cutter", "Intimidate", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/303.png",
  },
  {
    name: "Aron",
    type: ["Steel", "Rock"],
    base: { HP: 50, ATK: 70, DEF: 100, SATK: 40, SDEF: 40, SPD: 30 },
    description:
      "Aron has a body of steel. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.",
    height: "0.4 m",
    weight: "60 kg",
    ability: ["Sturdy", "Rock Head", "Heavy Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/304.png",
  },
  {
    name: "Lairon",
    type: ["Steel", "Rock"],
    base: { HP: 60, ATK: 90, DEF: 140, SATK: 50, SDEF: 50, SPD: 40 },
    description:
      "Lairon feeds on iron contained in rocks and water. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.",
    height: "0.9 m",
    weight: "120 kg",
    ability: ["Sturdy", "Rock Head", "Heavy Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/305.png",
  },
  {
    name: "Aggron",
    type: ["Steel", "Rock"],
    base: { HP: 70, ATK: 110, DEF: 180, SATK: 60, SDEF: 60, SPD: 50 },
    description:
      "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a fire, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.",
    height: "2.1 m",
    weight: "360 kg",
    ability: ["Sturdy", "Rock Head", "Heavy Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/306.png",
  },
  {
    name: "Meditite",
    type: ["Fighting", "Psychic"],
    base: { HP: 30, ATK: 40, DEF: 55, SATK: 40, SDEF: 55, SPD: 60 },
    description:
      "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon’s training.",
    height: "0.6 m",
    weight: "11.2 kg",
    ability: ["Pure Power", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/307.png",
  },
  {
    name: "Medicham",
    type: ["Fighting", "Psychic"],
    base: { HP: 60, ATK: 60, DEF: 75, SATK: 60, SDEF: 75, SPD: 80 },
    description:
      "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
    height: "1.3 m",
    weight: "31.5 kg",
    ability: ["Pure Power", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/308.png",
  },
  {
    name: "Electrike",
    type: ["Electric"],
    base: { HP: 40, ATK: 45, DEF: 40, SATK: 65, SDEF: 40, SPD: 65 },
    description:
      "Static electricity builds up all over its body as strands of its long fur rub together. This Pokémon boasts incredible speed.",
    height: "0.6 m",
    weight: "15.2 kg",
    ability: ["Static", "Lightning Rod", "Minus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/309.png",
  },
  {
    name: "Manectric",
    type: ["Electric"],
    base: { HP: 70, ATK: 75, DEF: 60, SATK: 105, SDEF: 60, SPD: 105 },
    description:
      "It stimulates its own muscles with electricity, so it can move quickly. It eases its soreness with electricity, too, so it can recover quickly as well.",
    height: "1.5 m",
    weight: "40.2 kg",
    ability: ["Static", "Lightning Rod", "Minus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/310.png",
  },
  {
    name: "Plusle",
    type: ["Electric"],
    base: { HP: 60, ATK: 50, DEF: 40, SATK: 85, SDEF: 75, SPD: 95 },
    description:
      "When Plusle is cheering on its partner, it flashes with electric sparks from all over its body. If its partner loses, this Pokémon cries loudly.",
    height: "0.4 m",
    weight: "4.2 kg",
    ability: ["Plus", "Lightning Rod"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/311.png",
  },
  {
    name: "Minun",
    type: ["Electric"],
    base: { HP: 60, ATK: 40, DEF: 50, SATK: 75, SDEF: 85, SPD: 95 },
    description:
      "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.",
    height: "0.4 m",
    weight: "4.2 kg",
    ability: ["Minus", "Volt Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/312.png",
  },
  {
    name: "Volbeat",
    type: ["Bug"],
    base: { HP: 65, ATK: 73, DEF: 75, SATK: 47, SDEF: 85, SPD: 85 },
    description:
      "Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
    height: "0.7 m",
    weight: "17.7 kg",
    ability: ["Illuminate", "Swarm", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/313.png",
  },
  {
    name: "Illumise",
    type: ["Bug"],
    base: { HP: 65, ATK: 47, DEF: 75, SATK: 73, SDEF: 85, SPD: 85 },
    description:
      "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.",
    height: "0.6 m",
    weight: "17.7 kg",
    ability: ["Oblivious", "Tinted Lens", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/314.png",
  },
  {
    name: "Roselia",
    type: ["Grass", "Poison"],
    base: { HP: 50, ATK: 60, DEF: 45, SATK: 100, SDEF: 80, SPD: 65 },
    description:
      "On extremely rare occasions, a Roselia is said to appear with its flowers in unusual colors. The thorns on this Pokémon’s head contain a vicious poison.",
    height: "0.3 m",
    weight: "2 kg",
    ability: ["Natural Cure", "Poison Point", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/315.png",
  },
  {
    name: "Gulpin",
    type: ["Poison"],
    base: { HP: 70, ATK: 43, DEF: 53, SATK: 43, SDEF: 53, SPD: 40 },
    description:
      "Most of Gulpin’s body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon’s stomach contains special enzymes that dissolve anything.",
    height: "0.4 m",
    weight: "10.3 kg",
    ability: ["Liquid Ooze", "Sticky Hold", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/316.png",
  },
  {
    name: "Swalot",
    type: ["Poison"],
    base: { HP: 100, ATK: 73, DEF: 83, SATK: 73, SDEF: 83, SPD: 55 },
    description:
      "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon’s mouth.",
    height: "1.7 m",
    weight: "80 kg",
    ability: ["Liquid Ooze", "Sticky Hold", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/317.png",
  },
  {
    name: "Carvanha",
    type: ["Water", "Dark"],
    base: { HP: 45, ATK: 90, DEF: 20, SATK: 65, SDEF: 20, SPD: 65 },
    description:
      "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food.",
    height: "0.8 m",
    weight: "20.8 kg",
    ability: ["Rough Skin", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/318.png",
  },
  {
    name: "Sharpedo",
    type: ["Water", "Dark"],
    base: { HP: 70, ATK: 120, DEF: 40, SATK: 95, SDEF: 40, SPD: 95 },
    description:
      "It drinks in seawater and jets it from its rear to propel itself. It’s very sensitive to the scent of blood.",
    height: "1.8 m",
    weight: "88.8 kg",
    ability: ["Rough Skin", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/319.png",
  },
  {
    name: "Wailmer",
    type: ["Water"],
    base: { HP: 130, ATK: 70, DEF: 35, SATK: 70, SDEF: 35, SPD: 60 },
    description:
      "Due to their memories of when they once lived on land, pods of them will, very rarely, wash up on shore.",
    height: "2 m",
    weight: "130 kg",
    ability: ["Water Veil", "Oblivious", "Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/320.png",
  },
  {
    name: "Wailord",
    type: ["Water"],
    base: { HP: 170, ATK: 90, DEF: 45, SATK: 90, SDEF: 45, SPD: 60 },
    description:
      "When a small Wailmer is attacked by Sharpedo or Dhelmise, its whole pod works together to protect it.",
    height: "14.5 m",
    weight: "398 kg",
    ability: ["Water Veil", "Oblivious", "Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/321.png",
  },
  {
    name: "Numel",
    type: ["Fire", "Ground"],
    base: { HP: 60, ATK: 60, DEF: 40, SATK: 65, SDEF: 45, SPD: 35 },
    description:
      "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon’s body grows heavy and its movements become sluggish.",
    height: "0.7 m",
    weight: "24 kg",
    ability: ["Oblivious", "Simple", "Own Tempo"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/322.png",
  },
  {
    name: "Camerupt",
    type: ["Fire", "Ground"],
    base: { HP: 70, ATK: 100, DEF: 70, SATK: 105, SDEF: 75, SPD: 40 },
    description:
      "The humps on Camerupt’s back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.",
    height: "1.9 m",
    weight: "220 kg",
    ability: ["Magma Armor", "Solid Rock", "Anger Point"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/323.png",
  },
  {
    name: "Torkoal",
    type: ["Fire"],
    base: { HP: 70, ATK: 85, DEF: 140, SATK: 85, SDEF: 70, SPD: 20 },
    description:
      "It burns coal to produce energy. When it has burned through all of its coal, it becomes unable to move.",
    height: "0.5 m",
    weight: "80.4 kg",
    ability: ["White Smoke", "Drought", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/324.png",
  },
  {
    name: "Spoink",
    type: ["Psychic"],
    base: { HP: 60, ATK: 25, DEF: 35, SATK: 70, SDEF: 80, SPD: 60 },
    description:
      "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon’s psychokinetic powers. It is therefore on a constant search for a bigger pearl.",
    height: "0.7 m",
    weight: "30.6 kg",
    ability: ["Thick Fat", "Own Tempo", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/325.png",
  },
  {
    name: "Grumpig",
    type: ["Psychic"],
    base: { HP: 80, ATK: 45, DEF: 65, SATK: 90, SDEF: 110, SPD: 80 },
    description:
      "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon’s black pearls are valuable as works of art.",
    height: "0.9 m",
    weight: "71.5 kg",
    ability: ["Thick Fat", "Own Tempo", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/326.png",
  },
  {
    name: "Spinda",
    type: ["Normal"],
    base: { HP: 60, ATK: 60, DEF: 60, SATK: 60, SDEF: 60, SPD: 60 },
    description:
      "Each Spinda’s spot pattern is different. With its stumbling movements, it evades opponents’ attacks brilliantly!",
    height: "1.1 m",
    weight: "5 kg",
    ability: ["Own Tempo", "Tangled Feet", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/327.png",
  },
  {
    name: "Trapinch",
    type: ["Ground"],
    base: { HP: 45, ATK: 100, DEF: 45, SATK: 45, SDEF: 45, SPD: 10 },
    description:
      "It builds nests that double as traps, lying in wait for its prey to get caught. When night falls, it digs itself a spot beneath the sand to sleep.",
    height: "0.7 m",
    weight: "15 kg",
    ability: ["Hyper Cutter", "Arena Trap", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/328.png",
  },
  {
    name: "Vibrava",
    type: ["Ground", "Dragon"],
    base: { HP: 50, ATK: 70, DEF: 50, SATK: 50, SDEF: 50, SPD: 70 },
    description:
      "It vibrates its wings to send out odd sound waves. Trainers who are with it need earplugs.",
    height: "1.1 m",
    weight: "15.3 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/329.png",
  },
  {
    name: "Flygon",
    type: ["Ground", "Dragon"],
    base: { HP: 80, ATK: 100, DEF: 80, SATK: 80, SDEF: 80, SPD: 100 },
    description:
      "People continue to have their hearts stolen by its enchanting songs and find themselves stranded in the desert.",
    height: "2 m",
    weight: "82 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/330.png",
  },
  {
    name: "Cacnea",
    type: ["Grass"],
    base: { HP: 50, ATK: 85, DEF: 40, SATK: 85, SDEF: 40, SPD: 35 },
    description:
      "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.",
    height: "0.4 m",
    weight: "51.3 kg",
    ability: ["Sand Veil", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/331.png",
  },
  {
    name: "Cacturne",
    type: ["Grass", "Dark"],
    base: { HP: 70, ATK: 115, DEF: 60, SATK: 115, SDEF: 60, SPD: 55 },
    description:
      "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
    height: "1.3 m",
    weight: "77.4 kg",
    ability: ["Sand Veil", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/332.png",
  },
  {
    name: "Swablu",
    type: ["Normal", "Flying"],
    base: { HP: 45, ATK: 40, DEF: 60, SATK: 40, SDEF: 75, SPD: 50 },
    description:
      "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.",
    height: "0.4 m",
    weight: "1.2 kg",
    ability: ["Natural Cure", "Cloud Nine"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/333.png",
  },
  {
    name: "Altaria",
    type: ["Dragon", "Flying"],
    base: { HP: 75, ATK: 70, DEF: 90, SATK: 70, SDEF: 105, SPD: 80 },
    description:
      "Altaria sings in a gorgeous soprano. Its wings are like cotton clouds. This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder.",
    height: "1.1 m",
    weight: "20.6 kg",
    ability: ["Natural Cure", "Cloud Nine"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/334.png",
  },
  {
    name: "Zangoose",
    type: ["Normal"],
    base: { HP: 73, ATK: 115, DEF: 60, SATK: 60, SDEF: 60, SPD: 90 },
    description:
      "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
    height: "1.3 m",
    weight: "40.3 kg",
    ability: ["Immunity", "Toxic Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/335.png",
  },
  {
    name: "Seviper",
    type: ["Poison"],
    base: { HP: 73, ATK: 100, DEF: 60, SATK: 100, SDEF: 60, SPD: 65 },
    description:
      "Seviper’s swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
    height: "2.7 m",
    weight: "52.5 kg",
    ability: ["Shed Skin", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/336.png",
  },
  {
    name: "Lunatone",
    type: ["Rock", "Psychic"],
    base: { HP: 90, ATK: 55, DEF: 65, SATK: 95, SDEF: 85, SPD: 70 },
    description:
      "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon’s intimidating red eyes cause all those who see it to become transfixed with fear.",
    height: "1 m",
    weight: "168 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/337.png",
  },
  {
    name: "Solrock",
    type: ["Rock", "Psychic"],
    base: { HP: 90, ATK: 95, DEF: 85, SATK: 55, SDEF: 65, SPD: 70 },
    description:
      "Sunlight is the source of Solrock’s power. It is said to possess the ability to read the emotions of others. This Pokémon gives off intense heat while rotating its body.",
    height: "1.2 m",
    weight: "154 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/338.png",
  },
  {
    name: "Barboach",
    type: ["Water", "Ground"],
    base: { HP: 50, ATK: 48, DEF: 43, SATK: 46, SDEF: 41, SPD: 60 },
    description:
      "Its whiskers are filled with nerves. They can sense smells and flavors just as a person’s nose or tongue would.",
    height: "0.4 m",
    weight: "1.9 kg",
    ability: ["Oblivious", "Anticipation", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/339.png",
  },
  {
    name: "Whiscash",
    type: ["Water", "Ground"],
    base: { HP: 110, ATK: 78, DEF: 73, SATK: 76, SDEF: 71, SPD: 60 },
    description:
      "Its vision is not that good. It senses vibrations in the water with its whiskers to determine the location of its prey.",
    height: "0.9 m",
    weight: "23.6 kg",
    ability: ["Oblivious", "Anticipation", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/340.png",
  },
  {
    name: "Corphish",
    type: ["Water"],
    base: { HP: 43, ATK: 80, DEF: 65, SATK: 50, SDEF: 35, SPD: 35 },
    description:
      "It can adapt very well to its environment. Feebas and Corphish are about the only Pokémon to live in stagnant ditches.",
    height: "0.6 m",
    weight: "11.5 kg",
    ability: ["Hyper Cutter", "Shell Armor", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/341.png",
  },
  {
    name: "Crawdaunt",
    type: ["Water", "Dark"],
    base: { HP: 63, ATK: 120, DEF: 85, SATK: 90, SDEF: 55, SPD: 55 },
    description:
      "Its pincers often fall off. Unlike with Crabrawler or Clauncher, the meat in its claws is utterly nasty and stinking.",
    height: "1.1 m",
    weight: "32.8 kg",
    ability: ["Hyper Cutter", "Shell Armor", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/342.png",
  },
  {
    name: "Baltoy",
    type: ["Ground", "Psychic"],
    base: { HP: 40, ATK: 40, DEF: 55, SATK: 40, SDEF: 70, SPD: 55 },
    description:
      "When they find others of their kind, they cry out loudly and gather together. Large numbers of them can be found in old graveyards.",
    height: "0.5 m",
    weight: "21.5 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/343.png",
  },
  {
    name: "Claydol",
    type: ["Ground", "Psychic"],
    base: { HP: 60, ATK: 70, DEF: 105, SATK: 70, SDEF: 120, SPD: 75 },
    description:
      "The ancient people who made it apparently modeled it after something that descended from the sky. It fires beams from both arms.",
    height: "1.5 m",
    weight: "108 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/344.png",
  },
  {
    name: "Lileep",
    type: ["Rock", "Grass"],
    base: { HP: 66, ATK: 41, DEF: 77, SATK: 61, SDEF: 87, SPD: 23 },
    description:
      "It sticks to rocks with its powerful suckers and can’t be washed away no matter how rough the surf gets.",
    height: "1 m",
    weight: "23.8 kg",
    ability: ["Suction Cups", "Storm Drain"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/345.png",
  },
  {
    name: "Cradily",
    type: ["Rock", "Grass"],
    base: { HP: 86, ATK: 81, DEF: 97, SATK: 81, SDEF: 107, SPD: 43 },
    description:
      "This carnivorous Pokémon lived in primordial seas. It catches prey in its eight tentacles and dissolves them with digestive fluid as it eats.",
    height: "1.5 m",
    weight: "60.4 kg",
    ability: ["Suction Cups", "Storm Drain"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/346.png",
  },
  {
    name: "Anorith",
    type: ["Rock", "Bug"],
    base: { HP: 45, ATK: 95, DEF: 50, SATK: 40, SDEF: 50, SPD: 75 },
    description:
      "This is one kind of primeval bug Pokémon. With eight wings, it could apparently swim a lot faster than you’d expect.",
    height: "0.7 m",
    weight: "12.5 kg",
    ability: ["Battle Armor", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/347.png",
  },
  {
    name: "Armaldo",
    type: ["Rock", "Bug"],
    base: { HP: 75, ATK: 125, DEF: 100, SATK: 70, SDEF: 80, SPD: 45 },
    description:
      "Armaldo adapted from living in water to living on land. It has been determined that it is the ancestor of some bug Pokémon.",
    height: "1.5 m",
    weight: "68.2 kg",
    ability: ["Battle Armor", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/348.png",
  },
  {
    name: "Feebas",
    type: ["Water"],
    base: { HP: 20, ATK: 15, DEF: 20, SATK: 10, SDEF: 55, SPD: 80 },
    description:
      "Because of its wretched appearance, most people pay it no attention, but there are some who collect Feebas—and Feebas alone!",
    height: "0.6 m",
    weight: "7.4 kg",
    ability: ["Swift Swim", "Oblivious", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/349.png",
  },
  {
    name: "Milotic",
    type: ["Water"],
    base: { HP: 95, ATK: 60, DEF: 79, SATK: 100, SDEF: 125, SPD: 81 },
    description:
      "Its dwelling place is the bottom of big lakes. Those who behold its loveliness are said to have their hearts purified.",
    height: "6.2 m",
    weight: "162 kg",
    ability: ["Marvel Scale", "Competitive", "Cute Charm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/350.png",
  },
  {
    name: "Castform",
    type: ["Normal"],
    base: { HP: 70, ATK: 70, DEF: 70, SATK: 70, SDEF: 70, SPD: 70 },
    description:
      "Its form changes depending on the weather. The rougher conditions get, the rougher Castform’s disposition!",
    height: "0.3 m",
    weight: "0.8 kg",
    ability: ["Forecast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/351.png",
  },
  {
    name: "Kecleon",
    type: ["Normal"],
    base: { HP: 60, ATK: 90, DEF: 70, SATK: 60, SDEF: 120, SPD: 40 },
    description:
      "Its color changes for concealment and also when its mood or health changes. The darker the color, the healthier it is.",
    height: "1 m",
    weight: "22 kg",
    ability: ["Color Change", "Protean"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/352.png",
  },
  {
    name: "Shuppet",
    type: ["Ghost"],
    base: { HP: 44, ATK: 75, DEF: 35, SATK: 63, SDEF: 33, SPD: 45 },
    description:
      "There’s a proverb that says, “Shun the house where Shuppet gather in the growing dusk.”",
    height: "0.6 m",
    weight: "2.3 kg",
    ability: ["Insomnia", "Frisk", "Cursed Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/353.png",
  },
  {
    name: "Banette",
    type: ["Ghost"],
    base: { HP: 64, ATK: 115, DEF: 65, SATK: 83, SDEF: 63, SPD: 65 },
    description:
      "Resentment at being cast off made it spring into being. Some say that treating it well will satisfy it, and it will once more become a stuffed toy.",
    height: "1.1 m",
    weight: "12.5 kg",
    ability: ["Insomnia", "Frisk", "Cursed Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/354.png",
  },
  {
    name: "Duskull",
    type: ["Ghost"],
    base: { HP: 20, ATK: 40, DEF: 90, SATK: 30, SDEF: 90, SPD: 25 },
    description:
      "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.",
    height: "0.8 m",
    weight: "15 kg",
    ability: ["Levitate", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/355.png",
  },
  {
    name: "Dusclops",
    type: ["Ghost"],
    base: { HP: 40, ATK: 70, DEF: 130, SATK: 60, SDEF: 130, SPD: 25 },
    description:
      "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops’s bidding.",
    height: "1.6 m",
    weight: "30.6 kg",
    ability: ["Pressure", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/356.png",
  },
  {
    name: "Tropius",
    type: ["Grass", "Flying"],
    base: { HP: 99, ATK: 68, DEF: 83, SATK: 72, SDEF: 87, SPD: 51 },
    description:
      "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius.",
    height: "2 m",
    weight: "100 kg",
    ability: ["Chlorophyll", "Solar Power", "Harvest"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/357.png",
  },
  {
    name: "Chimecho",
    type: ["Psychic"],
    base: { HP: 75, ATK: 50, DEF: 80, SATK: 95, SDEF: 90, SPD: 65 },
    description:
      "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.",
    height: "0.6 m",
    weight: "1 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/358.png",
  },
  {
    name: "Absol",
    type: ["Dark"],
    base: { HP: 65, ATK: 130, DEF: 60, SATK: 75, SDEF: 60, SPD: 75 },
    description:
      "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise.",
    height: "1.2 m",
    weight: "47 kg",
    ability: ["Pressure", "Super Luck", "Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/359.png",
  },
  {
    name: "Wynaut",
    type: ["Psychic"],
    base: { HP: 95, ATK: 23, DEF: 48, SATK: 23, SDEF: 48, SPD: 23 },
    description:
      "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.",
    height: "0.6 m",
    weight: "14 kg",
    ability: ["Shadow Tag", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/360.png",
  },
  {
    name: "Snorunt",
    type: ["Ice"],
    base: { HP: 50, ATK: 50, DEF: 50, SATK: 50, SDEF: 50, SPD: 50 },
    description:
      "Rich people from cold areas all share childhood memories of playing with Snorunt.",
    height: "0.7 m",
    weight: "16.8 kg",
    ability: ["Inner Focus", "Ice Body", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/361.png",
  },
  {
    name: "Glalie",
    type: ["Ice"],
    base: { HP: 80, ATK: 80, DEF: 80, SATK: 80, SDEF: 80, SPD: 80 },
    description:
      "Its actual body is a rock that isn’t particularly hard. Glalie absorbs moisture from the air and drapes itself in an armor of ice.",
    height: "1.5 m",
    weight: "256.5 kg",
    ability: ["Inner Focus", "Ice Body", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/362.png",
  },
  {
    name: "Spheal",
    type: ["Ice", "Water"],
    base: { HP: 70, ATK: 40, DEF: 50, SATK: 55, SDEF: 50, SPD: 25 },
    description:
      "Spheal always travels by rolling around on its ball-like body. When the season for ice floes arrives, this Pokémon can be seen rolling about on ice and crossing the sea.",
    height: "0.8 m",
    weight: "39.5 kg",
    ability: ["Thick Fat", "Ice Body", "Oblivious"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/363.png",
  },
  {
    name: "Sealeo",
    type: ["Ice", "Water"],
    base: { HP: 90, ATK: 60, DEF: 70, SATK: 75, SDEF: 70, SPD: 45 },
    description:
      "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object’s aroma and texture to determine whether it likes the object or not.",
    height: "1.1 m",
    weight: "87.6 kg",
    ability: ["Thick Fat", "Ice Body", "Oblivious"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/364.png",
  },
  {
    name: "Walrein",
    type: ["Ice", "Water"],
    base: { HP: 110, ATK: 80, DEF: 90, SATK: 95, SDEF: 90, SPD: 65 },
    description:
      "Walrein swims all over in frigid seawater while crushing icebergs with its grand, imposing tusks. Its thick layer of blubber makes enemy attacks bounce off harmlessly.",
    height: "1.4 m",
    weight: "150.6 kg",
    ability: ["Thick Fat", "Ice Body", "Oblivious"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/365.png",
  },
  {
    name: "Clamperl",
    type: ["Water"],
    base: { HP: 35, ATK: 64, DEF: 85, SATK: 74, SDEF: 55, SPD: 32 },
    description:
      "Clamperl’s pearls are exceedingly precious. They can be more than 10 times as costly as Shellder’s pearls.",
    height: "0.4 m",
    weight: "52.5 kg",
    ability: ["Shell Armor", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/366.png",
  },
  {
    name: "Huntail",
    type: ["Water"],
    base: { HP: 55, ATK: 104, DEF: 105, SATK: 94, SDEF: 75, SPD: 52 },
    description:
      "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen.",
    height: "1.7 m",
    weight: "27 kg",
    ability: ["Swift Swim", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/367.png",
  },
  {
    name: "Gorebyss",
    type: ["Water"],
    base: { HP: 55, ATK: 84, DEF: 105, SATK: 114, SDEF: 75, SPD: 52 },
    description:
      "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon.",
    height: "1.8 m",
    weight: "22.6 kg",
    ability: ["Swift Swim", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/368.png",
  },
  {
    name: "Relicanth",
    type: ["Water", "Rock"],
    base: { HP: 100, ATK: 90, DEF: 130, SATK: 45, SDEF: 65, SPD: 55 },
    description:
      "The reason it hasn’t changed at all in a hundred million years is that it’s apparently already a perfect life-form.",
    height: "1 m",
    weight: "23.4 kg",
    ability: ["Swift Swim", "Rock Head", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/369.png",
  },
  {
    name: "Luvdisc",
    type: ["Water"],
    base: { HP: 43, ATK: 30, DEF: 55, SATK: 40, SDEF: 65, SPD: 97 },
    description:
      "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola’s branches.",
    height: "0.6 m",
    weight: "8.7 kg",
    ability: ["Swift Swim", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/370.png",
  },
  {
    name: "Bagon",
    type: ["Dragon"],
    base: { HP: 45, ATK: 75, DEF: 60, SATK: 40, SDEF: 30, SPD: 50 },
    description:
      "Some theories suggest that its behavior of forcefully bashing its head into things stimulates cells that affect its evolution.",
    height: "0.6 m",
    weight: "42.1 kg",
    ability: ["Rock Head", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/371.png",
  },
  {
    name: "Shelgon",
    type: ["Dragon"],
    base: { HP: 65, ATK: 95, DEF: 100, SATK: 60, SDEF: 50, SPD: 50 },
    description:
      "Shelgon lives deep within caves. It stays shut up in its hard shell, dreaming of the day it will be able to fly.",
    height: "1.1 m",
    weight: "110.5 kg",
    ability: ["Rock Head", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/372.png",
  },
  {
    name: "Salamence",
    type: ["Dragon", "Flying"],
    base: { HP: 95, ATK: 135, DEF: 80, SATK: 110, SDEF: 80, SPD: 100 },
    description:
      "Thanks to its fervent wishes, the cells in its body finally mutated, and at last it has its heart’s desire—wings.",
    height: "1.5 m",
    weight: "102.6 kg",
    ability: ["Intimidate", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/373.png",
  },
  {
    name: "Beldum",
    type: ["Steel", "Psychic"],
    base: { HP: 40, ATK: 55, DEF: 80, SATK: 35, SDEF: 60, SPD: 30 },
    description:
      "If you anger it, it will do more than rampage. It will also burst out strong magnetism, causing nearby machines to break.",
    height: "0.6 m",
    weight: "95.2 kg",
    ability: ["Clear Body", "Light Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/374.png",
  },
  {
    name: "Metang",
    type: ["Steel", "Psychic"],
    base: { HP: 60, ATK: 75, DEF: 100, SATK: 55, SDEF: 80, SPD: 50 },
    description:
      "It flies at high speeds around the skies. When it finds its prey, Metang takes a firm grip with its sharp claws and never lets go.",
    height: "1.2 m",
    weight: "202.5 kg",
    ability: ["Clear Body", "Light Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/375.png",
  },
  {
    name: "Metagross",
    type: ["Steel", "Psychic"],
    base: { HP: 80, ATK: 135, DEF: 130, SATK: 95, SDEF: 90, SPD: 70 },
    description:
      "It analyzes its opponents with more accuracy than a supercomputer, which enables it to calmly back them into a corner.",
    height: "1.6 m",
    weight: "550 kg",
    ability: ["Clear Body", "Light Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/376.png",
  },
  {
    name: "Regirock",
    type: ["Rock"],
    base: { HP: 80, ATK: 100, DEF: 200, SATK: 50, SDEF: 100, SPD: 50 },
    description:
      "Regirock’s body is composed entirely of rocks. Recently, a study made the startling discovery that the rocks were all unearthed from different locations.",
    height: "1.7 m",
    weight: "230 kg",
    ability: ["Clear Body", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/377.png",
  },
  {
    name: "Regice",
    type: ["Ice"],
    base: { HP: 80, ATK: 50, DEF: 100, SATK: 100, SDEF: 200, SPD: 50 },
    description:
      "Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.",
    height: "1.8 m",
    weight: "175 kg",
    ability: ["Clear Body", "Ice Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/378.png",
  },
  {
    name: "Registeel",
    type: ["Steel"],
    base: { HP: 80, ATK: 75, DEF: 150, SATK: 75, SDEF: 150, SPD: 50 },
    description:
      "Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.",
    height: "1.9 m",
    weight: "205 kg",
    ability: ["Clear Body", "Light Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/379.png",
  },
  {
    name: "Latias",
    type: ["Dragon", "Psychic"],
    base: { HP: 80, ATK: 80, DEF: 90, SATK: 110, SDEF: 130, SPD: 110 },
    description:
      "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
    height: "1.4 m",
    weight: "40 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/380.png",
  },
  {
    name: "Latios",
    type: ["Dragon", "Psychic"],
    base: { HP: 80, ATK: 90, DEF: 80, SATK: 130, SDEF: 110, SPD: 110 },
    description:
      "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
    height: "2 m",
    weight: "60 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/381.png",
  },
  {
    name: "Kyogre",
    type: ["Water"],
    base: { HP: 100, ATK: 100, DEF: 90, SATK: 150, SDEF: 140, SPD: 90 },
    description:
      "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
    height: "4.5 m",
    weight: "352 kg",
    ability: ["Drizzle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/382.png",
  },
  {
    name: "Groudon",
    type: ["Ground"],
    base: { HP: 100, ATK: 150, DEF: 140, SATK: 100, SDEF: 90, SPD: 90 },
    description:
      "Through Primal Reversion and with nature’s full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.",
    height: "3.5 m",
    weight: "950 kg",
    ability: ["Drought"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/383.png",
  },
  {
    name: "Rayquaza",
    type: ["Dragon", "Flying"],
    base: { HP: 105, ATK: 150, DEF: 90, SATK: 150, SDEF: 90, SPD: 95 },
    description:
      "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.",
    height: "7 m",
    weight: "206.5 kg",
    ability: ["Air Lock"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/384.png",
  },
  {
    name: "Jirachi",
    type: ["Steel", "Psychic"],
    base: { HP: 100, ATK: 100, DEF: 100, SATK: 100, SDEF: 100, SPD: 100 },
    description:
      "Jirachi will awaken from its sleep of a thousand years if you sing to it in a voice of purity. It is said to make true any wish that people desire.",
    height: "0.3 m",
    weight: "1.1 kg",
    ability: ["Serene Grace"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/385.png",
  },
  {
    name: "Deoxys",
    type: ["Psychic"],
    base: { HP: 50, ATK: 150, DEF: 50, SATK: 150, SDEF: 50, SPD: 150 },
    description:
      "Deoxys emerged from a virus that came from space. It is highly intelligent and wields psychokinetic powers. This Pokémon shoots lasers from the crystalline organ on its chest.",
    height: "1.7 m",
    weight: "60.8 kg",
    ability: ["Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/386.png",
  },
  {
    name: "Turtwig",
    type: ["Grass"],
    base: { HP: 55, ATK: 68, DEF: 64, SATK: 45, SDEF: 55, SPD: 31 },
    description:
      "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
    height: "0.4 m",
    weight: "10.2 kg",
    ability: ["Overgrow", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/387.png",
  },
  {
    name: "Grotle",
    type: ["Grass"],
    base: { HP: 75, ATK: 89, DEF: 85, SATK: 55, SDEF: 65, SPD: 36 },
    description:
      "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
    height: "1.1 m",
    weight: "97 kg",
    ability: ["Overgrow", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/388.png",
  },
  {
    name: "Torterra",
    type: ["Grass", "Ground"],
    base: { HP: 95, ATK: 109, DEF: 105, SATK: 75, SDEF: 85, SPD: 56 },
    description:
      "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
    height: "2.2 m",
    weight: "310 kg",
    ability: ["Overgrow", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/389.png",
  },
  {
    name: "Chimchar",
    type: ["Fire"],
    base: { HP: 44, ATK: 58, DEF: 44, SATK: 58, SDEF: 44, SPD: 61 },
    description:
      "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
    height: "0.5 m",
    weight: "6.2 kg",
    ability: ["Blaze", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/390.png",
  },
  {
    name: "Monferno",
    type: ["Fire", "Fighting"],
    base: { HP: 64, ATK: 78, DEF: 52, SATK: 78, SDEF: 52, SPD: 81 },
    description:
      "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
    height: "0.9 m",
    weight: "22 kg",
    ability: ["Blaze", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/391.png",
  },
  {
    name: "Infernape",
    type: ["Fire", "Fighting"],
    base: { HP: 76, ATK: 104, DEF: 71, SATK: 104, SDEF: 71, SPD: 108 },
    description:
      "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
    height: "1.2 m",
    weight: "55 kg",
    ability: ["Blaze", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/392.png",
  },
  {
    name: "Piplup",
    type: ["Water"],
    base: { HP: 53, ATK: 51, DEF: 53, SATK: 61, SDEF: 56, SPD: 40 },
    description:
      "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
    height: "0.4 m",
    weight: "5.2 kg",
    ability: ["Torrent", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/393.png",
  },
  {
    name: "Prinplup",
    type: ["Water"],
    base: { HP: 64, ATK: 66, DEF: 68, SATK: 81, SDEF: 76, SPD: 50 },
    description:
      "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees.",
    height: "0.8 m",
    weight: "23 kg",
    ability: ["Torrent", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/394.png",
  },
  {
    name: "Empoleon",
    type: ["Water", "Steel"],
    base: { HP: 84, ATK: 86, DEF: 88, SATK: 111, SDEF: 101, SPD: 60 },
    description:
      "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
    height: "1.7 m",
    weight: "84.5 kg",
    ability: ["Torrent", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/395.png",
  },
  {
    name: "Starly",
    type: ["Normal", "Flying"],
    base: { HP: 40, ATK: 55, DEF: 30, SATK: 30, SDEF: 30, SPD: 60 },
    description:
      "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
    height: "0.3 m",
    weight: "2 kg",
    ability: ["Keen Eye", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/396.png",
  },
  {
    name: "Staravia",
    type: ["Normal", "Flying"],
    base: { HP: 55, ATK: 75, DEF: 50, SATK: 40, SDEF: 40, SPD: 80 },
    description:
      "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
    height: "0.6 m",
    weight: "15.5 kg",
    ability: ["Intimidate", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/397.png",
  },
  {
    name: "Staraptor",
    type: ["Normal", "Flying"],
    base: { HP: 85, ATK: 120, DEF: 70, SATK: 50, SDEF: 60, SPD: 100 },
    description:
      "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
    height: "1.2 m",
    weight: "24.9 kg",
    ability: ["Intimidate", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/398.png",
  },
  {
    name: "Bidoof",
    type: ["Normal"],
    base: { HP: 59, ATK: 45, DEF: 40, SATK: 35, SDEF: 40, SPD: 31 },
    description:
      "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.",
    height: "0.5 m",
    weight: "20 kg",
    ability: ["Simple", "Unaware", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/399.png",
  },
  {
    name: "Bibarel",
    type: ["Normal", "Water"],
    base: { HP: 79, ATK: 85, DEF: 60, SATK: 55, SDEF: 60, SPD: 71 },
    description:
      "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
    height: "1 m",
    weight: "31.5 kg",
    ability: ["Simple", "Unaware", "Moody"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/400.png",
  },
  {
    name: "Kricketot",
    type: ["Bug"],
    base: { HP: 37, ATK: 25, DEF: 41, SATK: 25, SDEF: 41, SPD: 25 },
    description:
      "When its antennae hit each other, it sounds like the music of a xylophone.",
    height: "0.3 m",
    weight: "2.2 kg",
    ability: ["Shed Skin", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/401.png",
  },
  {
    name: "Kricketune",
    type: ["Bug"],
    base: { HP: 77, ATK: 85, DEF: 51, SATK: 55, SDEF: 51, SPD: 65 },
    description:
      "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
    height: "1 m",
    weight: "25.5 kg",
    ability: ["Swarm", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/402.png",
  },
  {
    name: "Shinx",
    type: ["Electric"],
    base: { HP: 45, ATK: 65, DEF: 34, SATK: 40, SDEF: 34, SPD: 45 },
    description:
      "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
    height: "0.5 m",
    weight: "9.5 kg",
    ability: ["Rivalry", "Intimidate", "Guts"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/403.png",
  },
  {
    name: "Luxio",
    type: ["Electric"],
    base: { HP: 60, ATK: 85, DEF: 49, SATK: 60, SDEF: 49, SPD: 60 },
    description:
      "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
    height: "0.9 m",
    weight: "30.5 kg",
    ability: ["Rivalry", "Intimidate", "Guts"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/404.png",
  },
  {
    name: "Luxray",
    type: ["Electric"],
    base: { HP: 80, ATK: 120, DEF: 79, SATK: 95, SDEF: 79, SPD: 70 },
    description:
      "Luxray’s ability to see through objects comes in handy when it’s scouting for danger.",
    height: "1.4 m",
    weight: "42 kg",
    ability: ["Rivalry", "Intimidate", "Guts"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/405.png",
  },
  {
    name: "Budew",
    type: ["Grass", "Poison"],
    base: { HP: 40, ATK: 30, DEF: 35, SATK: 50, SDEF: 70, SPD: 55 },
    description:
      "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.",
    height: "0.2 m",
    weight: "1.2 kg",
    ability: ["Natural Cure", "Poison Point", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/406.png",
  },
  {
    name: "Roserade",
    type: ["Grass", "Poison"],
    base: { HP: 60, ATK: 70, DEF: 65, SATK: 125, SDEF: 105, SPD: 90 },
    description:
      "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
    height: "0.9 m",
    weight: "14.5 kg",
    ability: ["Natural Cure", "Poison Point", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/407.png",
  },
  {
    name: "Cranidos",
    type: ["Rock"],
    base: { HP: 67, ATK: 125, DEF: 40, SATK: 30, SDEF: 30, SPD: 58 },
    description:
      "Its hard skull is its distinguishing feature. It snapped trees by headbutting them, and then it fed on their ripe berries.",
    height: "0.9 m",
    weight: "31.5 kg",
    ability: ["Mold Breaker", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/408.png",
  },
  {
    name: "Rampardos",
    type: ["Rock"],
    base: { HP: 97, ATK: 165, DEF: 60, SATK: 65, SDEF: 50, SPD: 58 },
    description:
      "This ancient Pokémon used headbutts skillfully. Its brain was really small, so some theories suggest that its stupidity led to its extinction.",
    height: "1.6 m",
    weight: "102.5 kg",
    ability: ["Mold Breaker", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/409.png",
  },
  {
    name: "Shieldon",
    type: ["Rock", "Steel"],
    base: { HP: 30, ATK: 42, DEF: 118, SATK: 42, SDEF: 88, SPD: 30 },
    description:
      "Although its fossils can be found in layers of primeval rock, nothing but its face has ever been discovered.",
    height: "0.5 m",
    weight: "57 kg",
    ability: ["Sturdy", "Soundproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/410.png",
  },
  {
    name: "Bastiodon",
    type: ["Rock", "Steel"],
    base: { HP: 60, ATK: 52, DEF: 168, SATK: 47, SDEF: 138, SPD: 30 },
    description:
      "This Pokémon is from roughly 100 million years ago. Its terrifyingly tough face is harder than steel.",
    height: "1.3 m",
    weight: "149.5 kg",
    ability: ["Sturdy", "Soundproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/411.png",
  },
  {
    name: "Burmy",
    type: ["Bug"],
    base: { HP: 40, ATK: 29, DEF: 45, SATK: 29, SDEF: 45, SPD: 36 },
    description:
      "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
    height: "0.2 m",
    weight: "3.4 kg",
    ability: ["Shed Skin", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/412.png",
  },
  {
    name: "Wormadam",
    type: ["Bug", "Grass"],
    base: { HP: 60, ATK: 59, DEF: 85, SATK: 79, SDEF: 105, SPD: 36 },
    description:
      "When Burmy evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.",
    height: "0.5 m",
    weight: "6.5 kg",
    ability: ["Anticipation", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/413.png",
  },
  {
    name: "Mothim",
    type: ["Bug", "Flying"],
    base: { HP: 70, ATK: 94, DEF: 50, SATK: 94, SDEF: 50, SPD: 66 },
    description:
      "It flutters around at night and steals honey from the Combee hive.",
    height: "0.9 m",
    weight: "23.3 kg",
    ability: ["Swarm", "Tinted Lens"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/414.png",
  },
  {
    name: "Combee",
    type: ["Bug", "Flying"],
    base: { HP: 30, ATK: 30, DEF: 42, SATK: 30, SDEF: 42, SPD: 70 },
    description:
      "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
    height: "0.3 m",
    weight: "5.5 kg",
    ability: ["Honey Gather", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/415.png",
  },
  {
    name: "Vespiquen",
    type: ["Bug", "Flying"],
    base: { HP: 70, ATK: 80, DEF: 102, SATK: 80, SDEF: 102, SPD: 40 },
    description:
      "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
    height: "1.2 m",
    weight: "38.5 kg",
    ability: ["Pressure", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/416.png",
  },
  {
    name: "Pachirisu",
    type: ["Electric"],
    base: { HP: 60, ATK: 45, DEF: 70, SATK: 45, SDEF: 90, SPD: 95 },
    description:
      "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
    height: "0.4 m",
    weight: "3.9 kg",
    ability: ["Run Away", "Pickup", "Volt Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/417.png",
  },
  {
    name: "Buizel",
    type: ["Water"],
    base: { HP: 55, ATK: 65, DEF: 35, SATK: 60, SDEF: 30, SPD: 85 },
    description:
      "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on.",
    height: "0.7 m",
    weight: "29.5 kg",
    ability: ["Swift Swim", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/418.png",
  },
  {
    name: "Floatzel",
    type: ["Water"],
    base: { HP: 85, ATK: 105, DEF: 55, SATK: 85, SDEF: 50, SPD: 115 },
    description:
      "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.",
    height: "1.1 m",
    weight: "33.5 kg",
    ability: ["Swift Swim", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/419.png",
  },
  {
    name: "Cherubi",
    type: ["Grass"],
    base: { HP: 45, ATK: 35, DEF: 45, SATK: 62, SDEF: 53, SPD: 35 },
    description:
      "It evolves by sucking the energy out of the small ball where it had been storing nutrients.",
    height: "0.4 m",
    weight: "3.3 kg",
    ability: ["Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/420.png",
  },
  {
    name: "Cherrim",
    type: ["Grass"],
    base: { HP: 70, ATK: 60, DEF: 70, SATK: 87, SDEF: 78, SPD: 85 },
    description:
      "If it senses strong sunlight, it opens its folded petals to absorb the sun’s rays with its whole body.",
    height: "0.5 m",
    weight: "9.3 kg",
    ability: ["Flower Gift"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/421.png",
  },
  {
    name: "Shellos",
    type: ["Water"],
    base: { HP: 76, ATK: 48, DEF: 48, SATK: 57, SDEF: 62, SPD: 34 },
    description:
      "When it senses danger, a purple liquid oozes out of it. The liquid is thought to be something like greasy sweat.",
    height: "0.3 m",
    weight: "6.3 kg",
    ability: ["Sticky Hold", "Storm Drain", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/422.png",
  },
  {
    name: "Gastrodon",
    type: ["Water", "Ground"],
    base: { HP: 111, ATK: 83, DEF: 68, SATK: 92, SDEF: 82, SPD: 39 },
    description:
      "Their shape and color change, depending on their environment and diet. There are many of them at beaches where the waves are calm.",
    height: "0.9 m",
    weight: "29.9 kg",
    ability: ["Sticky Hold", "Storm Drain", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/423.png",
  },
  {
    name: "Ambipom",
    type: ["Normal"],
    base: { HP: 75, ATK: 100, DEF: 66, SATK: 60, SDEF: 66, SPD: 115 },
    description:
      "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that’s proof it really likes you.",
    height: "1.2 m",
    weight: "20.3 kg",
    ability: ["Technician", "Pickup", "Skill Link"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/424.png",
  },
  {
    name: "Drifloon",
    type: ["Ghost", "Flying"],
    base: { HP: 90, ATK: 50, DEF: 34, SATK: 60, SDEF: 44, SPD: 70 },
    description:
      "Wandering souls gathered together to form this Pokémon. When trying to make friends with children, Drifloon grabs them by the hand.",
    height: "0.4 m",
    weight: "1.2 kg",
    ability: ["Aftermath", "Unburden", "Flare Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/425.png",
  },
  {
    name: "Drifblim",
    type: ["Ghost", "Flying"],
    base: { HP: 150, ATK: 80, DEF: 44, SATK: 90, SDEF: 54, SPD: 80 },
    description:
      "The raw material for the gas inside its body is souls. When its body starts to deflate, it’s thought to carry away people and Pokémon.",
    height: "1.2 m",
    weight: "15 kg",
    ability: ["Aftermath", "Unburden", "Flare Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/426.png",
  },
  {
    name: "Buneary",
    type: ["Normal"],
    base: { HP: 55, ATK: 66, DEF: 44, SATK: 44, SDEF: 56, SPD: 85 },
    description:
      "The reason it keeps one ear rolled up is so it can launch a swift counterattack if it’s attacked by an enemy.",
    height: "0.4 m",
    weight: "5.5 kg",
    ability: ["Run Away", "Klutz", "Limber"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/427.png",
  },
  {
    name: "Lopunny",
    type: ["Normal"],
    base: { HP: 65, ATK: 76, DEF: 84, SATK: 54, SDEF: 96, SPD: 105 },
    description:
      "It’s notably wary and has a dislike of fighting, but at the same time, it can deliver powerful kicks with its lithe legs.",
    height: "1.2 m",
    weight: "33.3 kg",
    ability: ["Cute Charm", "Klutz", "Limber"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/428.png",
  },
  {
    name: "Mismagius",
    type: ["Ghost"],
    base: { HP: 60, ATK: 60, DEF: 60, SATK: 105, SDEF: 105, SPD: 105 },
    description:
      "Its muttered curses can cause awful headaches or terrifying visions that torment others.",
    height: "0.9 m",
    weight: "4.4 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/429.png",
  },
  {
    name: "Honchkrow",
    type: ["Dark", "Flying"],
    base: { HP: 100, ATK: 125, DEF: 52, SATK: 105, SDEF: 52, SPD: 71 },
    description:
      "Its goons take care of most of the fighting for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent.",
    height: "0.9 m",
    weight: "27.3 kg",
    ability: ["Insomnia", "Super Luck", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/430.png",
  },
  {
    name: "Glameow",
    type: ["Normal"],
    base: { HP: 49, ATK: 55, DEF: 42, SATK: 42, SDEF: 37, SPD: 85 },
    description:
      "When it’s happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon.",
    height: "0.5 m",
    weight: "3.9 kg",
    ability: ["Limber", "Own Tempo", "Keen Eye"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/431.png",
  },
  {
    name: "Purugly",
    type: ["Normal"],
    base: { HP: 71, ATK: 82, DEF: 64, SATK: 64, SDEF: 59, SPD: 112 },
    description:
      "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
    height: "1 m",
    weight: "43.8 kg",
    ability: ["Thick Fat", "Own Tempo", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/432.png",
  },
  {
    name: "Chingling",
    type: ["Psychic"],
    base: { HP: 45, ATK: 30, DEF: 50, SATK: 65, SDEF: 50, SPD: 45 },
    description:
      "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.",
    height: "0.2 m",
    weight: "0.6 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/433.png",
  },
  {
    name: "Stunky",
    type: ["Poison", "Dark"],
    base: { HP: 63, ATK: 63, DEF: 47, SATK: 41, SDEF: 41, SPD: 74 },
    description:
      "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
    height: "0.4 m",
    weight: "19.2 kg",
    ability: ["Stench", "Aftermath", "Keen Eye"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/434.png",
  },
  {
    name: "Skuntank",
    type: ["Poison", "Dark"],
    base: { HP: 103, ATK: 93, DEF: 67, SATK: 71, SDEF: 61, SPD: 84 },
    description:
      "It sprays a stinky fluid from its tail. The fluid smells worse the longer it is allowed to fester.",
    height: "1 m",
    weight: "38 kg",
    ability: ["Stench", "Aftermath", "Keen Eye"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/435.png",
  },
  {
    name: "Bronzor",
    type: ["Steel", "Psychic"],
    base: { HP: 57, ATK: 24, DEF: 86, SATK: 24, SDEF: 86, SPD: 23 },
    description:
      "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.",
    height: "0.5 m",
    weight: "60.5 kg",
    ability: ["Levitate", "Heatproof", "Heavy Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/436.png",
  },
  {
    name: "Bronzong",
    type: ["Steel", "Psychic"],
    base: { HP: 67, ATK: 89, DEF: 116, SATK: 79, SDEF: 116, SPD: 33 },
    description:
      "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
    height: "1.3 m",
    weight: "187 kg",
    ability: ["Levitate", "Heatproof", "Heavy Metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/437.png",
  },
  {
    name: "Bonsly",
    type: ["Rock"],
    base: { HP: 50, ATK: 80, DEF: 95, SATK: 10, SDEF: 45, SPD: 10 },
    description:
      "If its body gets too damp, it will die. So, in a process reminiscent of sweating, its eyes expel moisture.",
    height: "0.5 m",
    weight: "15 kg",
    ability: ["Sturdy", "Rock Head", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/438.png",
  },
  {
    name: "Mime Jr.",
    type: ["Psychic", "Fairy"],
    base: { HP: 20, ATK: 25, DEF: 45, SATK: 70, SDEF: 90, SPD: 60 },
    description:
      "When this gifted mimic surprises an opponent, Mime Jr. feels so happy that it ends up forgetting it was imitating something.",
    height: "0.6 m",
    weight: "13 kg",
    ability: ["Soundproof", "Filter", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/439.png",
  },
  {
    name: "Happiny",
    type: ["Normal"],
    base: { HP: 100, ATK: 5, DEF: 5, SATK: 15, SDEF: 65, SPD: 30 },
    description:
      "When it sees something round and white, Happiny puts it into the pouch on its stomach. It sometimes becomes overloaded and can’t move.",
    height: "0.6 m",
    weight: "24.4 kg",
    ability: ["Natural Cure", "Serene Grace", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/440.png",
  },
  {
    name: "Chatot",
    type: ["Normal", "Flying"],
    base: { HP: 76, ATK: 65, DEF: 45, SATK: 92, SDEF: 42, SPD: 91 },
    description:
      "It can learn and speak human words. If they gather, they all learn the same saying.",
    height: "0.5 m",
    weight: "1.9 kg",
    ability: ["Keen Eye", "Tangled Feet", "Big Pecks"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/441.png",
  },
  {
    name: "Spiritomb",
    type: ["Ghost", "Dark"],
    base: { HP: 50, ATK: 92, DEF: 108, SATK: 92, SDEF: 108, SPD: 35 },
    description:
      "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago.",
    height: "1 m",
    weight: "108 kg",
    ability: ["Pressure", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/442.png",
  },
  {
    name: "Gible",
    type: ["Dragon", "Ground"],
    base: { HP: 58, ATK: 70, DEF: 45, SATK: 40, SDEF: 45, SPD: 42 },
    description:
      "Its original home is an area much hotter than Alola. If you’re planning to live with one, your heating bill will soar.",
    height: "0.7 m",
    weight: "20.5 kg",
    ability: ["Sand Veil", "Rough Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/443.png",
  },
  {
    name: "Gabite",
    type: ["Dragon", "Ground"],
    base: { HP: 68, ATK: 90, DEF: 65, SATK: 50, SDEF: 55, SPD: 82 },
    description:
      "It sheds its skin and gradually grows larger. Its scales can be ground into a powder and used as raw materials for traditional medicine.",
    height: "1.4 m",
    weight: "56 kg",
    ability: ["Sand Veil", "Rough Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/444.png",
  },
  {
    name: "Garchomp",
    type: ["Dragon", "Ground"],
    base: { HP: 108, ATK: 130, DEF: 95, SATK: 80, SDEF: 85, SPD: 102 },
    description:
      "Its fine scales don’t just reduce wind resistance—their sharp edges also cause injury to any opponent who attacks it.",
    height: "1.9 m",
    weight: "95 kg",
    ability: ["Sand Veil", "Rough Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/445.png",
  },
  {
    name: "Munchlax",
    type: ["Normal"],
    base: { HP: 135, ATK: 85, DEF: 40, SATK: 40, SDEF: 85, SPD: 5 },
    description:
      "Anything that looks edible, Munchlax will go on and swallow whole. Its stomach is tough enough to handle it even if the food has gone rotten.",
    height: "0.6 m",
    weight: "105 kg",
    ability: ["Pickup", "Thick Fat", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/446.png",
  },
  {
    name: "Riolu",
    type: ["Fighting"],
    base: { HP: 40, ATK: 70, DEF: 40, SATK: 35, SDEF: 40, SPD: 60 },
    description:
      "It uses waves called auras to communicate with others of its kind. It doesn’t make any noise during this time, so its enemies can’t detect it.",
    height: "0.7 m",
    weight: "20.2 kg",
    ability: ["Steadfast", "Inner Focus", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/447.png",
  },
  {
    name: "Lucario",
    type: ["Fighting", "Steel"],
    base: { HP: 70, ATK: 110, DEF: 70, SATK: 115, SDEF: 70, SPD: 90 },
    description:
      "Lucario reads its opponent’s feelings with its aura waves. It finds out things it would rather not know, so it gets stressed out easily.",
    height: "1.2 m",
    weight: "54 kg",
    ability: ["Steadfast", "Inner Focus", "Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/448.png",
  },
  {
    name: "Hippopotas",
    type: ["Ground"],
    base: { HP: 68, ATK: 72, DEF: 78, SATK: 38, SDEF: 42, SPD: 32 },
    description:
      "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
    height: "0.8 m",
    weight: "49.5 kg",
    ability: ["Sand Stream", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/449.png",
  },
  {
    name: "Hippowdon",
    type: ["Ground"],
    base: { HP: 108, ATK: 112, DEF: 118, SATK: 68, SDEF: 72, SPD: 47 },
    description:
      "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
    height: "2 m",
    weight: "300 kg",
    ability: ["Sand Stream", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/450.png",
  },
  {
    name: "Skorupi",
    type: ["Poison", "Bug"],
    base: { HP: 40, ATK: 50, DEF: 90, SATK: 30, SDEF: 55, SPD: 65 },
    description:
      "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.",
    height: "0.8 m",
    weight: "12 kg",
    ability: ["Battle Armor", "Sniper", "Keen Eye"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/451.png",
  },
  {
    name: "Drapion",
    type: ["Poison", "Dark"],
    base: { HP: 70, ATK: 90, DEF: 110, SATK: 60, SDEF: 75, SPD: 95 },
    description:
      "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
    height: "1.3 m",
    weight: "61.5 kg",
    ability: ["Battle Armor", "Sniper", "Keen Eye"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/452.png",
  },
  {
    name: "Croagunk",
    type: ["Poison", "Fighting"],
    base: { HP: 48, ATK: 61, DEF: 40, SATK: 61, SDEF: 40, SPD: 50 },
    description:
      "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
    height: "0.7 m",
    weight: "23 kg",
    ability: ["Anticipation", "Dry Skin", "Poison Touch"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/453.png",
  },
  {
    name: "Toxicroak",
    type: ["Poison", "Fighting"],
    base: { HP: 83, ATK: 106, DEF: 65, SATK: 86, SDEF: 65, SPD: 85 },
    description:
      "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
    height: "1.3 m",
    weight: "44.4 kg",
    ability: ["Anticipation", "Dry Skin", "Poison Touch"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/454.png",
  },
  {
    name: "Carnivine",
    type: ["Grass"],
    base: { HP: 74, ATK: 100, DEF: 72, SATK: 90, SDEF: 72, SPD: 46 },
    description:
      "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
    height: "1.4 m",
    weight: "27 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/455.png",
  },
  {
    name: "Finneon",
    type: ["Water"],
    base: { HP: 49, ATK: 49, DEF: 56, SATK: 49, SDEF: 61, SPD: 66 },
    description:
      "It lures in prey with its shining tail fins. It stays near the surface during the day and moves to the depths when night falls.",
    height: "0.4 m",
    weight: "7 kg",
    ability: ["Swift Swim", "Storm Drain", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/456.png",
  },
  {
    name: "Lumineon",
    type: ["Water"],
    base: { HP: 69, ATK: 69, DEF: 76, SATK: 69, SDEF: 86, SPD: 91 },
    description:
      "They traverse the deep waters as if crawling over the seafloor. The fantastic lights of its fins shine like stars in the night sky.",
    height: "1.2 m",
    weight: "24 kg",
    ability: ["Swift Swim", "Storm Drain", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/457.png",
  },
  {
    name: "Mantyke",
    type: ["Water", "Flying"],
    base: { HP: 45, ATK: 20, DEF: 50, SATK: 60, SDEF: 120, SPD: 50 },
    description:
      "Mantyke are friendly toward people and will approach boats closely. The patterns on their backs differ depending on their habitat.",
    height: "1 m",
    weight: "65 kg",
    ability: ["Swift Swim", "Water Absorb", "Water Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/458.png",
  },
  {
    name: "Snover",
    type: ["Grass", "Ice"],
    base: { HP: 60, ATK: 62, DEF: 50, SATK: 62, SDEF: 60, SPD: 40 },
    description:
      "In the spring, it grows berries with the texture of frozen treats around its belly.",
    height: "1 m",
    weight: "50.5 kg",
    ability: ["Snow Warning", "Soundproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/459.png",
  },
  {
    name: "Abomasnow",
    type: ["Grass", "Ice"],
    base: { HP: 90, ATK: 92, DEF: 75, SATK: 92, SDEF: 85, SPD: 60 },
    description:
      "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
    height: "2.2 m",
    weight: "135.5 kg",
    ability: ["Snow Warning", "Soundproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/460.png",
  },
  {
    name: "Weavile",
    type: ["Dark", "Ice"],
    base: { HP: 70, ATK: 120, DEF: 65, SATK: 45, SDEF: 85, SPD: 125 },
    description:
      "Thanks to its increased intelligence, scrapping over food is a thing of the past. A scratch from its claws will give you a case of frostbite!",
    height: "1.1 m",
    weight: "34 kg",
    ability: ["Pressure", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/461.png",
  },
  {
    name: "Magnezone",
    type: ["Electric", "Steel"],
    base: { HP: 70, ATK: 70, DEF: 115, SATK: 130, SDEF: 90, SPD: 60 },
    description:
      "There are still people who believe that this Pokémon came from outer space. It emanates a powerful magnetic field.",
    height: "1.2 m",
    weight: "180 kg",
    ability: ["Magnet Pull", "Sturdy", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/462.png",
  },
  {
    name: "Lickilicky",
    type: ["Normal"],
    base: { HP: 110, ATK: 85, DEF: 95, SATK: 80, SDEF: 95, SPD: 50 },
    description:
      "It uses its tongue much more skillfully than its hands or its feet. It can deftly pick up a single small bean with its tongue.",
    height: "1.7 m",
    weight: "140 kg",
    ability: ["Own Tempo", "Oblivious", "Cloud Nine"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/463.png",
  },
  {
    name: "Rhyperior",
    type: ["Ground", "Rock"],
    base: { HP: 115, ATK: 140, DEF: 130, SATK: 55, SDEF: 55, SPD: 40 },
    description:
      "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
    height: "2.4 m",
    weight: "282.8 kg",
    ability: ["Lightning Rod", "Solid Rock", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/464.png",
  },
  {
    name: "Tangrowth",
    type: ["Grass"],
    base: { HP: 100, ATK: 100, DEF: 125, SATK: 110, SDEF: 50, SPD: 50 },
    description:
      "Its vines grow so profusely that, in the warm season, you can’t even see its eyes.",
    height: "2 m",
    weight: "128.6 kg",
    ability: ["Chlorophyll", "Leaf Guard", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/465.png",
  },
  {
    name: "Electivire",
    type: ["Electric"],
    base: { HP: 75, ATK: 123, DEF: 67, SATK: 95, SDEF: 85, SPD: 95 },
    description:
      "A single Electivire can provide enough electricity for all the buildings in a big city for a year.",
    height: "1.8 m",
    weight: "138.6 kg",
    ability: ["Motor Drive", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/466.png",
  },
  {
    name: "Magmortar",
    type: ["Fire"],
    base: { HP: 75, ATK: 95, DEF: 67, SATK: 125, SDEF: 95, SPD: 83 },
    description:
      "Magmortar takes down its enemies by shooting fireballs, which burn them to a blackened crisp. It avoids this method when hunting prey.",
    height: "1.6 m",
    weight: "68 kg",
    ability: ["Flame Body", "Vital Spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/467.png",
  },
  {
    name: "Togekiss",
    type: ["Fairy", "Flying"],
    base: { HP: 85, ATK: 50, DEF: 95, SATK: 120, SDEF: 115, SPD: 80 },
    description:
      "It shares many blessings with people who respect one another’s rights and avoid needless strife.",
    height: "1.5 m",
    weight: "38 kg",
    ability: ["Hustle", "Serene Grace", "Super Luck"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/468.png",
  },
  {
    name: "Yanmega",
    type: ["Bug", "Flying"],
    base: { HP: 86, ATK: 76, DEF: 86, SATK: 116, SDEF: 56, SPD: 95 },
    description:
      "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
    height: "1.9 m",
    weight: "51.5 kg",
    ability: ["Speed Boost", "Tinted Lens", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/469.png",
  },
  {
    name: "Leafeon",
    type: ["Grass"],
    base: { HP: 65, ATK: 110, DEF: 130, SATK: 60, SDEF: 65, SPD: 95 },
    description:
      "It gets its nutrition from photosynthesis. It lives a quiet life deep in forests where clean rivers flow.",
    height: "1 m",
    weight: "25.5 kg",
    ability: ["Leaf Guard", "Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/470.png",
  },
  {
    name: "Glaceon",
    type: ["Ice"],
    base: { HP: 65, ATK: 60, DEF: 110, SATK: 130, SDEF: 95, SPD: 65 },
    description:
      "It can instantaneously freeze any moisture that’s around it, creating ice pellets to shoot at its prey.",
    height: "0.8 m",
    weight: "25.9 kg",
    ability: ["Snow Cloak", "Ice Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/471.png",
  },
  {
    name: "Gliscor",
    type: ["Ground", "Flying"],
    base: { HP: 75, ATK: 95, DEF: 125, SATK: 45, SDEF: 75, SPD: 95 },
    description:
      "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest.",
    height: "2 m",
    weight: "42.5 kg",
    ability: ["Hyper Cutter", "Sand Veil", "Poison Heal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/472.png",
  },
  {
    name: "Mamoswine",
    type: ["Ice", "Ground"],
    base: { HP: 110, ATK: 130, DEF: 80, SATK: 70, SDEF: 60, SPD: 80 },
    description:
      "Its impressive tusks are made of ice. The population thinned when it turned warm after the ice age.",
    height: "2.5 m",
    weight: "291 kg",
    ability: ["Oblivious", "Snow Cloak", "Thick Fat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/473.png",
  },
  {
    name: "Porygon-Z",
    type: ["Normal"],
    base: { HP: 85, ATK: 80, DEF: 70, SATK: 135, SDEF: 75, SPD: 90 },
    description:
      "A faulty update was added to its programming. Its behavior is noticeably strange, so the experiment may have been a failure.",
    height: "0.9 m",
    weight: "34 kg",
    ability: ["Adaptability", "Download", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/474.png",
  },
  {
    name: "Gallade",
    type: ["Psychic", "Fighting"],
    base: { HP: 68, ATK: 125, DEF: 65, SATK: 65, SDEF: 115, SPD: 80 },
    description:
      "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.",
    height: "1.6 m",
    weight: "52 kg",
    ability: ["Steadfast", "Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/475.png",
  },
  {
    name: "Probopass",
    type: ["Rock", "Steel"],
    base: { HP: 60, ATK: 55, DEF: 145, SATK: 75, SDEF: 150, SPD: 40 },
    description:
      "It uses three small units to catch prey and battle enemies. The main body mostly just gives orders.",
    height: "1.4 m",
    weight: "340 kg",
    ability: ["Sturdy", "Magnet Pull", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/476.png",
  },
  {
    name: "Dusknoir",
    type: ["Ghost"],
    base: { HP: 45, ATK: 100, DEF: 135, SATK: 65, SDEF: 135, SPD: 45 },
    description:
      "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
    height: "2.2 m",
    weight: "106.6 kg",
    ability: ["Pressure", "Frisk"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/477.png",
  },
  {
    name: "Froslass",
    type: ["Ice", "Ghost"],
    base: { HP: 70, ATK: 80, DEF: 70, SATK: 80, SDEF: 70, SPD: 110 },
    description:
      "It’s said that on nights of terrible blizzards, it comes down to human settlements. If you hear it knocking at your door, do not open it!",
    height: "1.3 m",
    weight: "26.6 kg",
    ability: ["Snow Cloak", "Cursed Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/478.png",
  },
  {
    name: "Rotom",
    type: ["Electric", "Ghost"],
    base: { HP: 50, ATK: 50, DEF: 77, SATK: 95, SDEF: 77, SPD: 91 },
    description:
      "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
    height: "0.3 m",
    weight: "0.3 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/479.png",
  },
  {
    name: "Uxie",
    type: ["Psychic"],
    base: { HP: 75, ATK: 75, DEF: 130, SATK: 75, SDEF: 130, SPD: 95 },
    description:
      "It is said that its emergence gave humans the intelligence to improve their quality of life.",
    height: "0.3 m",
    weight: "0.3 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/480.png",
  },
  {
    name: "Mesprit",
    type: ["Psychic"],
    base: { HP: 80, ATK: 105, DEF: 105, SATK: 105, SDEF: 105, SPD: 80 },
    description:
      "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake’s surface.",
    height: "0.3 m",
    weight: "0.3 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/481.png",
  },
  {
    name: "Azelf",
    type: ["Psychic"],
    base: { HP: 75, ATK: 125, DEF: 70, SATK: 125, SDEF: 70, SPD: 115 },
    description:
      "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.",
    height: "0.3 m",
    weight: "0.3 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/482.png",
  },
  {
    name: "Dialga",
    type: ["Steel", "Dragon"],
    base: { HP: 100, ATK: 120, DEF: 120, SATK: 150, SDEF: 100, SPD: 90 },
    description:
      "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
    height: "5.4 m",
    weight: "683 kg",
    ability: ["Pressure", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/483.png",
  },
  {
    name: "Palkia",
    type: ["Water", "Dragon"],
    base: { HP: 90, ATK: 120, DEF: 100, SATK: 150, SDEF: 120, SPD: 100 },
    description:
      "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
    height: "4.2 m",
    weight: "336 kg",
    ability: ["Pressure", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/484.png",
  },
  {
    name: "Heatran",
    type: ["Fire", "Steel"],
    base: { HP: 91, ATK: 90, DEF: 106, SATK: 130, SDEF: 106, SPD: 77 },
    description:
      "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
    height: "1.7 m",
    weight: "430 kg",
    ability: ["Flash Fire", "Flame Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/485.png",
  },
  {
    name: "Regigigas",
    type: ["Normal"],
    base: { HP: 110, ATK: 160, DEF: 110, SATK: 80, SDEF: 110, SPD: 100 },
    description:
      "There is an enduring legend that states this Pokémon towed continents with ropes.",
    height: "3.7 m",
    weight: "420 kg",
    ability: ["Slow Start"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/486.png",
  },
  {
    name: "Giratina",
    type: ["Ghost", "Dragon"],
    base: { HP: 150, ATK: 100, DEF: 120, SATK: 100, SDEF: 120, SPD: 90 },
    description:
      "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
    height: "4.5 m",
    weight: "750 kg",
    ability: ["Pressure", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/487.png",
  },
  {
    name: "Cresselia",
    type: ["Psychic"],
    base: { HP: 120, ATK: 70, DEF: 120, SATK: 75, SDEF: 130, SPD: 85 },
    description:
      "Those who sleep holding Cresselia’s feather are assured of joyful dreams. It is said to represent the crescent moon.",
    height: "1.5 m",
    weight: "85.6 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/488.png",
  },
  {
    name: "Phione",
    type: ["Water"],
    base: { HP: 80, ATK: 80, DEF: 80, SATK: 80, SDEF: 80, SPD: 80 },
    description:
      "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
    height: "0.4 m",
    weight: "3.1 kg",
    ability: ["Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/489.png",
  },
  {
    name: "Manaphy",
    type: ["Water"],
    base: { HP: 100, ATK: 100, DEF: 100, SATK: 100, SDEF: 100, SPD: 100 },
    description:
      "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
    height: "0.3 m",
    weight: "1.4 kg",
    ability: ["Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/490.png",
  },
  {
    name: "Darkrai",
    type: ["Dark"],
    base: { HP: 70, ATK: 90, DEF: 90, SATK: 135, SDEF: 90, SPD: 125 },
    description:
      "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
    height: "1.5 m",
    weight: "50.5 kg",
    ability: ["Bad Dreams"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/491.png",
  },
  {
    name: "Shaymin",
    type: ["Grass"],
    base: { HP: 100, ATK: 100, DEF: 100, SATK: 100, SDEF: 100, SPD: 100 },
    description:
      "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
    height: "0.2 m",
    weight: "2.1 kg",
    ability: ["Natural Cure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/492.png",
  },
  {
    name: "Arceus",
    type: ["Normal"],
    base: { HP: 120, ATK: 120, DEF: 120, SATK: 120, SDEF: 120, SPD: 120 },
    description:
      "It is told in mythology that this Pokémon was born before the universe even existed.",
    height: "3.2 m",
    weight: "320 kg",
    ability: ["Multitype"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/493.png",
  },
  {
    name: "Victini",
    type: ["Psychic", "Fire"],
    base: { HP: 100, ATK: 100, DEF: 100, SATK: 100, SDEF: 100, SPD: 100 },
    description:
      "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
    height: "0.4 m",
    weight: "4 kg",
    ability: ["Victory Star"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/494.png",
  },
  {
    name: "Snivy",
    type: ["Grass"],
    base: { HP: 45, ATK: 45, DEF: 55, SATK: 45, SDEF: 55, SPD: 63 },
    description:
      "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
    height: "0.6 m",
    weight: "8.1 kg",
    ability: ["Overgrow", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/495.png",
  },
  {
    name: "Servine",
    type: ["Grass"],
    base: { HP: 60, ATK: 60, DEF: 75, SATK: 60, SDEF: 75, SPD: 83 },
    description:
      "When it gets dirty, its leaves can’t be used in photosynthesis, so it always keeps itself clean.",
    height: "0.8 m",
    weight: "16 kg",
    ability: ["Overgrow", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/496.png",
  },
  {
    name: "Serperior",
    type: ["Grass"],
    base: { HP: 75, ATK: 75, DEF: 95, SATK: 75, SDEF: 95, SPD: 113 },
    description:
      "It can stop its opponents’ movements with just a glare. It takes in solar energy and boosts it internally.",
    height: "3.3 m",
    weight: "63 kg",
    ability: ["Overgrow", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/497.png",
  },
  {
    name: "Tepig",
    type: ["Fire"],
    base: { HP: 65, ATK: 63, DEF: 45, SATK: 45, SDEF: 45, SPD: 45 },
    description:
      "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp.",
    height: "0.5 m",
    weight: "9.9 kg",
    ability: ["Blaze", "Thick Fat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/498.png",
  },
  {
    name: "Pignite",
    type: ["Fire", "Fighting"],
    base: { HP: 90, ATK: 93, DEF: 55, SATK: 70, SDEF: 55, SPD: 55 },
    description:
      "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
    height: "1 m",
    weight: "55.5 kg",
    ability: ["Blaze", "Thick Fat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/499.png",
  },
  {
    name: "Emboar",
    type: ["Fire", "Fighting"],
    base: { HP: 110, ATK: 123, DEF: 65, SATK: 100, SDEF: 65, SPD: 65 },
    description:
      "It has mastered fast and powerful fighting moves. It grows a beard of fire.",
    height: "1.6 m",
    weight: "150 kg",
    ability: ["Blaze", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/500.png",
  },
  {
    name: "Oshawott",
    type: ["Water"],
    base: { HP: 55, ATK: 55, DEF: 45, SATK: 63, SDEF: 45, SPD: 45 },
    description:
      "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
    height: "0.5 m",
    weight: "5.9 kg",
    ability: ["Torrent", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/501.png",
  },
  {
    name: "Dewott",
    type: ["Water"],
    base: { HP: 75, ATK: 75, DEF: 60, SATK: 83, SDEF: 60, SPD: 60 },
    description:
      "As a result of strict training, each Dewott learns different forms for using the scalchops.",
    height: "0.8 m",
    weight: "24.5 kg",
    ability: ["Torrent", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/502.png",
  },
  {
    name: "Samurott",
    type: ["Water"],
    base: { HP: 95, ATK: 100, DEF: 85, SATK: 108, SDEF: 70, SPD: 70 },
    description:
      "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
    height: "1.5 m",
    weight: "94.6 kg",
    ability: ["Torrent", "Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/503.png",
  },
  {
    name: "Patrat",
    type: ["Normal"],
    base: { HP: 45, ATK: 55, DEF: 39, SATK: 35, SDEF: 39, SPD: 42 },
    description:
      "Extremely cautious, one of them will always be on the lookout, but it won’t notice a foe coming from behind.",
    height: "0.5 m",
    weight: "11.6 kg",
    ability: ["Run Away", "Keen Eye", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/504.png",
  },
  {
    name: "Watchog",
    type: ["Normal"],
    base: { HP: 60, ATK: 85, DEF: 69, SATK: 60, SDEF: 69, SPD: 77 },
    description:
      "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
    height: "1.1 m",
    weight: "27 kg",
    ability: ["Illuminate", "Keen Eye", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/505.png",
  },
  {
    name: "Lillipup",
    type: ["Normal"],
    base: { HP: 45, ATK: 60, DEF: 45, SATK: 25, SDEF: 45, SPD: 55 },
    description:
      "This Pokémon is popular with beginners because it’s intelligent, obedient to its Trainer’s commands, and easy to raise.",
    height: "0.4 m",
    weight: "4.1 kg",
    ability: ["Vital Spirit", "Pickup", "Run Away"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/506.png",
  },
  {
    name: "Herdier",
    type: ["Normal"],
    base: { HP: 65, ATK: 80, DEF: 65, SATK: 35, SDEF: 65, SPD: 60 },
    description:
      "It has been living with people for so long that portrayals of it can be found on the walls of caves from long, long ago.",
    height: "0.9 m",
    weight: "14.7 kg",
    ability: ["Intimidate", "Sand Rush", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/507.png",
  },
  {
    name: "Stoutland",
    type: ["Normal"],
    base: { HP: 85, ATK: 110, DEF: 90, SATK: 45, SDEF: 90, SPD: 80 },
    description:
      "Its fur is long and thick. A long time ago in cold regions, every household kept a Stoutland.",
    height: "1.2 m",
    weight: "61 kg",
    ability: ["Intimidate", "Sand Rush", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/508.png",
  },
  {
    name: "Purrloin",
    type: ["Dark"],
    base: { HP: 41, ATK: 50, DEF: 37, SATK: 50, SDEF: 37, SPD: 66 },
    description:
      "They steal from people for fun, but their victims can’t help but forgive them. Their deceptively cute act is perfect.",
    height: "0.4 m",
    weight: "10.1 kg",
    ability: ["Limber", "Unburden", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/509.png",
  },
  {
    name: "Liepard",
    type: ["Dark"],
    base: { HP: 64, ATK: 88, DEF: 50, SATK: 88, SDEF: 50, SPD: 106 },
    description:
      "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.",
    height: "1.1 m",
    weight: "37.5 kg",
    ability: ["Limber", "Unburden", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/510.png",
  },
  {
    name: "Pansage",
    type: ["Grass"],
    base: { HP: 50, ATK: 53, DEF: 48, SATK: 53, SDEF: 48, SPD: 64 },
    description:
      "It’s good at finding berries and gathers them from all over. It’s kind enough to share them with friends.",
    height: "0.6 m",
    weight: "10.5 kg",
    ability: ["Gluttony", "Overgrow"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/511.png",
  },
  {
    name: "Simisage",
    type: ["Grass"],
    base: { HP: 75, ATK: 98, DEF: 63, SATK: 98, SDEF: 63, SPD: 101 },
    description:
      "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
    height: "1.1 m",
    weight: "30.5 kg",
    ability: ["Gluttony", "Overgrow"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/512.png",
  },
  {
    name: "Pansear",
    type: ["Fire"],
    base: { HP: 50, ATK: 53, DEF: 48, SATK: 53, SDEF: 48, SPD: 64 },
    description:
      "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.",
    height: "0.6 m",
    weight: "11 kg",
    ability: ["Gluttony", "Blaze"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/513.png",
  },
  {
    name: "Simisear",
    type: ["Fire"],
    base: { HP: 75, ATK: 98, DEF: 63, SATK: 98, SDEF: 63, SPD: 101 },
    description:
      "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
    height: "1 m",
    weight: "28 kg",
    ability: ["Gluttony", "Blaze"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/514.png",
  },
  {
    name: "Panpour",
    type: ["Water"],
    base: { HP: 50, ATK: 53, DEF: 48, SATK: 53, SDEF: 48, SPD: 64 },
    description:
      "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
    height: "0.6 m",
    weight: "13.5 kg",
    ability: ["Gluttony", "Torrent"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/515.png",
  },
  {
    name: "Simipour",
    type: ["Water"],
    base: { HP: 75, ATK: 98, DEF: 63, SATK: 98, SDEF: 63, SPD: 101 },
    description:
      "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.",
    height: "1 m",
    weight: "29 kg",
    ability: ["Gluttony", "Torrent"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/516.png",
  },
  {
    name: "Munna",
    type: ["Psychic"],
    base: { HP: 76, ATK: 25, DEF: 45, SATK: 67, SDEF: 55, SPD: 24 },
    description:
      "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.",
    height: "0.6 m",
    weight: "23.3 kg",
    ability: ["Forewarn", "Synchronize", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/517.png",
  },
  {
    name: "Musharna",
    type: ["Psychic"],
    base: { HP: 116, ATK: 55, DEF: 85, SATK: 107, SDEF: 95, SPD: 29 },
    description:
      "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.",
    height: "1.1 m",
    weight: "60.5 kg",
    ability: ["Forewarn", "Synchronize", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/518.png",
  },
  {
    name: "Pidove",
    type: ["Normal", "Flying"],
    base: { HP: 50, ATK: 55, DEF: 50, SATK: 36, SDEF: 30, SPD: 43 },
    description:
      "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.",
    height: "0.3 m",
    weight: "2.1 kg",
    ability: ["Big Pecks", "Super Luck", "Rivalry"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/519.png",
  },
  {
    name: "Tranquill",
    type: ["Normal", "Flying"],
    base: { HP: 62, ATK: 77, DEF: 62, SATK: 50, SDEF: 42, SPD: 65 },
    description:
      "No matter where in the world it goes, it knows where its nest is, so it never gets separated from its Trainer.",
    height: "0.6 m",
    weight: "15 kg",
    ability: ["Big Pecks", "Super Luck", "Rivalry"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/520.png",
  },
  {
    name: "Unfezant",
    type: ["Normal", "Flying"],
    base: { HP: 80, ATK: 115, DEF: 80, SATK: 65, SDEF: 55, SPD: 93 },
    description:
      "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers.",
    height: "1.2 m",
    weight: "29 kg",
    ability: ["Big Pecks", "Super Luck", "Rivalry"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/521.png",
  },
  {
    name: "Blitzle",
    type: ["Electric"],
    base: { HP: 45, ATK: 60, DEF: 32, SATK: 50, SDEF: 32, SPD: 76 },
    description:
      "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.",
    height: "0.8 m",
    weight: "29.8 kg",
    ability: ["Lightning Rod", "Motor Drive", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/522.png",
  },
  {
    name: "Zebstrika",
    type: ["Electric"],
    base: { HP: 75, ATK: 100, DEF: 63, SATK: 80, SDEF: 63, SPD: 116 },
    description:
      "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
    height: "1.6 m",
    weight: "79.5 kg",
    ability: ["Lightning Rod", "Motor Drive", "Sap Sipper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/523.png",
  },
  {
    name: "Roggenrola",
    type: ["Rock"],
    base: { HP: 55, ATK: 75, DEF: 85, SATK: 25, SDEF: 25, SPD: 15 },
    description:
      "It was found in a fissure in a layer of exposed rock. The material that makes up its body is dirt from several hundred years ago.",
    height: "0.4 m",
    weight: "18 kg",
    ability: ["Sturdy", "Weak Armor", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/524.png",
  },
  {
    name: "Boldore",
    type: ["Rock"],
    base: { HP: 70, ATK: 105, DEF: 105, SATK: 50, SDEF: 40, SPD: 20 },
    description:
      "Its orange crystals are lumps of powerful energy. They’re valuable, so Boldore is sometimes targeted for them.",
    height: "0.9 m",
    weight: "102 kg",
    ability: ["Sturdy", "Weak Armor", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/525.png",
  },
  {
    name: "Gigalith",
    type: ["Rock"],
    base: { HP: 85, ATK: 135, DEF: 130, SATK: 60, SDEF: 80, SPD: 25 },
    description:
      "It absorbs rays of sunlight and shoots out energy. It’s usually lurking deep beneath the surface.",
    height: "1.7 m",
    weight: "260 kg",
    ability: ["Sturdy", "Sand Stream", "Sand Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/526.png",
  },
  {
    name: "Woobat",
    type: ["Psychic", "Flying"],
    base: { HP: 65, ATK: 45, DEF: 43, SATK: 55, SDEF: 43, SPD: 72 },
    description:
      "The heart-shaped mark left on a body after a Woobat has been attached to it is said to bring good fortune.",
    height: "0.4 m",
    weight: "2.1 kg",
    ability: ["Unaware", "Klutz", "Simple"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/527.png",
  },
  {
    name: "Swoobat",
    type: ["Psychic", "Flying"],
    base: { HP: 67, ATK: 57, DEF: 55, SATK: 77, SDEF: 55, SPD: 114 },
    description:
      "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.",
    height: "0.9 m",
    weight: "10.5 kg",
    ability: ["Unaware", "Klutz", "Simple"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/528.png",
  },
  {
    name: "Drilbur",
    type: ["Ground"],
    base: { HP: 60, ATK: 85, DEF: 40, SATK: 30, SDEF: 45, SPD: 68 },
    description:
      "By spinning its body, it can dig straight through the ground at a speed of 30 mph.",
    height: "0.3 m",
    weight: "8.5 kg",
    ability: ["Sand Rush", "Sand Force", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/529.png",
  },
  {
    name: "Excadrill",
    type: ["Ground", "Steel"],
    base: { HP: 110, ATK: 135, DEF: 60, SATK: 50, SDEF: 65, SPD: 88 },
    description:
      "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
    height: "0.7 m",
    weight: "40.4 kg",
    ability: ["Sand Rush", "Sand Force", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/530.png",
  },
  {
    name: "Audino",
    type: ["Normal"],
    base: { HP: 103, ATK: 60, DEF: 86, SATK: 60, SDEF: 86, SPD: 50 },
    description:
      "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
    height: "1.1 m",
    weight: "31 kg",
    ability: ["Healer", "Regenerator", "Klutz"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/531.png",
  },
  {
    name: "Timburr",
    type: ["Fighting"],
    base: { HP: 75, ATK: 80, DEF: 55, SATK: 25, SDEF: 35, SPD: 35 },
    description:
      "Always carrying squared logs, they help out with construction. As they grow, they carry bigger logs.",
    height: "0.6 m",
    weight: "12.5 kg",
    ability: ["Guts", "Sheer Force", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/532.png",
  },
  {
    name: "Gurdurr",
    type: ["Fighting"],
    base: { HP: 85, ATK: 105, DEF: 85, SATK: 40, SDEF: 50, SPD: 40 },
    description:
      "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.",
    height: "1.2 m",
    weight: "40 kg",
    ability: ["Guts", "Sheer Force", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/533.png",
  },
  {
    name: "Conkeldurr",
    type: ["Fighting"],
    base: { HP: 105, ATK: 140, DEF: 95, SATK: 55, SDEF: 65, SPD: 45 },
    description:
      "Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.",
    height: "1.4 m",
    weight: "87 kg",
    ability: ["Guts", "Sheer Force", "Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/534.png",
  },
  {
    name: "Tympole",
    type: ["Water"],
    base: { HP: 50, ATK: 50, DEF: 40, SATK: 50, SDEF: 40, SPD: 64 },
    description:
      "By vibrating its cheeks, it emits sound waves imperceptible to humans. It uses the rhythm of these sounds to talk.",
    height: "0.5 m",
    weight: "4.5 kg",
    ability: ["Swift Swim", "Hydration", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/535.png",
  },
  {
    name: "Palpitoad",
    type: ["Water", "Ground"],
    base: { HP: 75, ATK: 65, DEF: 55, SATK: 65, SDEF: 55, SPD: 69 },
    description:
      "It lives in the water and on land. It uses its long, sticky tongue to immobilize its opponents.",
    height: "0.8 m",
    weight: "17 kg",
    ability: ["Swift Swim", "Hydration", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/536.png",
  },
  {
    name: "Seismitoad",
    type: ["Water", "Ground"],
    base: { HP: 105, ATK: 95, DEF: 75, SATK: 85, SDEF: 75, SPD: 74 },
    description:
      "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
    height: "1.5 m",
    weight: "62 kg",
    ability: ["Swift Swim", "Poison Touch", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/537.png",
  },
  {
    name: "Throh",
    type: ["Fighting"],
    base: { HP: 120, ATK: 100, DEF: 85, SATK: 30, SDEF: 85, SPD: 45 },
    description:
      "When it encounters a foe bigger than itself, it wants to throw it. It changes belts as it gets stronger.",
    height: "1.3 m",
    weight: "55.5 kg",
    ability: ["Guts", "Inner Focus", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/538.png",
  },
  {
    name: "Sawk",
    type: ["Fighting"],
    base: { HP: 75, ATK: 125, DEF: 75, SATK: 30, SDEF: 75, SPD: 85 },
    description:
      "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
    height: "1.4 m",
    weight: "51 kg",
    ability: ["Sturdy", "Inner Focus", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/539.png",
  },
  {
    name: "Sewaddle",
    type: ["Bug", "Grass"],
    base: { HP: 45, ATK: 53, DEF: 70, SATK: 40, SDEF: 60, SPD: 42 },
    description:
      "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers.",
    height: "0.3 m",
    weight: "2.5 kg",
    ability: ["Swarm", "Chlorophyll", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/540.png",
  },
  {
    name: "Swadloon",
    type: ["Bug", "Grass"],
    base: { HP: 55, ATK: 63, DEF: 90, SATK: 50, SDEF: 80, SPD: 42 },
    description:
      "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.",
    height: "0.5 m",
    weight: "7.3 kg",
    ability: ["Leaf Guard", "Chlorophyll", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/541.png",
  },
  {
    name: "Leavanny",
    type: ["Bug", "Grass"],
    base: { HP: 75, ATK: 103, DEF: 80, SATK: 70, SDEF: 80, SPD: 92 },
    description:
      "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
    height: "1.2 m",
    weight: "20.5 kg",
    ability: ["Swarm", "Chlorophyll", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/542.png",
  },
  {
    name: "Venipede",
    type: ["Bug", "Poison"],
    base: { HP: 30, ATK: 45, DEF: 59, SATK: 30, SDEF: 39, SPD: 57 },
    description:
      "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it.",
    height: "0.4 m",
    weight: "5.3 kg",
    ability: ["Poison Point", "Swarm", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/543.png",
  },
  {
    name: "Whirlipede",
    type: ["Bug", "Poison"],
    base: { HP: 40, ATK: 55, DEF: 99, SATK: 40, SDEF: 79, SPD: 47 },
    description:
      "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.",
    height: "1.2 m",
    weight: "58.5 kg",
    ability: ["Poison Point", "Swarm", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/544.png",
  },
  {
    name: "Scolipede",
    type: ["Bug", "Poison"],
    base: { HP: 60, ATK: 100, DEF: 89, SATK: 55, SDEF: 69, SPD: 112 },
    description:
      "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.",
    height: "2.5 m",
    weight: "200.5 kg",
    ability: ["Poison Point", "Swarm", "Speed Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/545.png",
  },
  {
    name: "Cottonee",
    type: ["Grass", "Fairy"],
    base: { HP: 40, ATK: 27, DEF: 60, SATK: 37, SDEF: 50, SPD: 66 },
    description:
      "When attacked, it expels cotton from its body to create a diversion. The cotton it loses grows back in quickly.",
    height: "0.3 m",
    weight: "0.6 kg",
    ability: ["Prankster", "Infiltrator", "Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/546.png",
  },
  {
    name: "Whimsicott",
    type: ["Grass", "Fairy"],
    base: { HP: 60, ATK: 67, DEF: 85, SATK: 77, SDEF: 75, SPD: 116 },
    description:
      "Whimsicott doesn’t live in a fixed location. It floats around on whirling winds, appearing all over the place to perform its mischief.",
    height: "0.7 m",
    weight: "6.6 kg",
    ability: ["Prankster", "Infiltrator", "Chlorophyll"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/547.png",
  },
  {
    name: "Petilil",
    type: ["Grass"],
    base: { HP: 45, ATK: 35, DEF: 50, SATK: 70, SDEF: 50, SPD: 30 },
    description:
      "They prefer clean water and soil. When the environment they live in turns bad, the whole bunch will up and move to a new area.",
    height: "0.5 m",
    weight: "6.6 kg",
    ability: ["Chlorophyll", "Own Tempo", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/548.png",
  },
  {
    name: "Lilligant",
    type: ["Grass"],
    base: { HP: 70, ATK: 60, DEF: 75, SATK: 110, SDEF: 75, SPD: 90 },
    description:
      "It’s well liked by other Pokémon because of its beauty. The flower on its head needs constant care, or it will soon wither and rot.",
    height: "1.1 m",
    weight: "16.3 kg",
    ability: ["Chlorophyll", "Own Tempo", "Leaf Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/549.png",
  },
  {
    name: "Basculin",
    type: ["Water"],
    base: { HP: 70, ATK: 92, DEF: 65, SATK: 80, SDEF: 55, SPD: 98 },
    description:
      "When a school of Basculin appears in a lake, everything else disappears, except for Corphish and Crawdaunt. That’s how violent Basculin are.",
    height: "1 m",
    weight: "18 kg",
    ability: ["Reckless", "Adaptability", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/550.png",
  },
  {
    name: "Sandile",
    type: ["Ground", "Dark"],
    base: { HP: 50, ATK: 72, DEF: 35, SATK: 35, SDEF: 35, SPD: 65 },
    description:
      "Sandile’s still not good at hunting, so it mostly eats things that have collapsed in the desert. It’s called “the cleaner of the desert.”",
    height: "0.7 m",
    weight: "15.2 kg",
    ability: ["Intimidate", "Moxie", "Anger Point"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/551.png",
  },
  {
    name: "Krokorok",
    type: ["Ground", "Dark"],
    base: { HP: 60, ATK: 82, DEF: 45, SATK: 45, SDEF: 45, SPD: 74 },
    description:
      "It buries some of its prey in the sand to use as emergency meals when its hunts are unsuccessful.",
    height: "1 m",
    weight: "33.4 kg",
    ability: ["Intimidate", "Moxie", "Anger Point"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/552.png",
  },
  {
    name: "Krookodile",
    type: ["Ground", "Dark"],
    base: { HP: 95, ATK: 117, DEF: 80, SATK: 65, SDEF: 70, SPD: 92 },
    description:
      "It conceals itself in sandstorms that Flygon whip up and waits patiently for prey to appear.",
    height: "1.5 m",
    weight: "96.3 kg",
    ability: ["Intimidate", "Moxie", "Anger Point"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/553.png",
  },
  {
    name: "Darumaka",
    type: ["Fire"],
    base: { HP: 70, ATK: 90, DEF: 45, SATK: 15, SDEF: 45, SPD: 50 },
    description:
      "When it sleeps, it pulls its limbs into its body and its internal fire goes down to 1,100 degrees Fahrenheit.",
    height: "0.6 m",
    weight: "37.5 kg",
    ability: ["Hustle", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/554.png",
  },
  {
    name: "Darmanitan",
    type: ["Fire"],
    base: { HP: 105, ATK: 140, DEF: 55, SATK: 30, SDEF: 55, SPD: 95 },
    description:
      "Its internal fire burns at 2,500 degrees Fahrenheit, making enough power that it can destroy a dump truck with one punch.",
    height: "1.3 m",
    weight: "92.9 kg",
    ability: ["Sheer Force", "Zen Mode"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/555.png",
  },
  {
    name: "Maractus",
    type: ["Grass"],
    base: { HP: 75, ATK: 86, DEF: 67, SATK: 106, SDEF: 67, SPD: 60 },
    description:
      "Arid regions are their habitat. They move rhythmically, making a sound similar to maracas.",
    height: "1 m",
    weight: "28 kg",
    ability: ["Water Absorb", "Chlorophyll", "Storm Drain"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/556.png",
  },
  {
    name: "Dwebble",
    type: ["Bug", "Rock"],
    base: { HP: 50, ATK: 65, DEF: 85, SATK: 35, SDEF: 35, SPD: 55 },
    description:
      "When it finds a stone of a suitable size, it secretes a liquid from its mouth to open up a hole to crawl into.",
    height: "0.3 m",
    weight: "14.5 kg",
    ability: ["Sturdy", "Shell Armor", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/557.png",
  },
  {
    name: "Crustle",
    type: ["Bug", "Rock"],
    base: { HP: 70, ATK: 105, DEF: 125, SATK: 65, SDEF: 75, SPD: 45 },
    description:
      "Competing for territory, Crustle fight viciously. The one whose boulder is broken is the loser of the battle.",
    height: "1.4 m",
    weight: "200 kg",
    ability: ["Sturdy", "Shell Armor", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/558.png",
  },
  {
    name: "Scraggy",
    type: ["Dark", "Fighting"],
    base: { HP: 50, ATK: 75, DEF: 70, SATK: 35, SDEF: 70, SPD: 48 },
    description:
      "It stretches its saggy skin up to its neck to protect itself. The saggier their skin, the more respect they garner.",
    height: "0.6 m",
    weight: "11.8 kg",
    ability: ["Shed Skin", "Moxie", "Intimidate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/559.png",
  },
  {
    name: "Scrafty",
    type: ["Dark", "Fighting"],
    base: { HP: 65, ATK: 90, DEF: 115, SATK: 45, SDEF: 115, SPD: 58 },
    description:
      "It taunts its opponents by spitting. It has a certain territory that it never leaves its whole life long.",
    height: "1.1 m",
    weight: "30 kg",
    ability: ["Shed Skin", "Moxie", "Intimidate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/560.png",
  },
  {
    name: "Sigilyph",
    type: ["Psychic", "Flying"],
    base: { HP: 72, ATK: 58, DEF: 80, SATK: 103, SDEF: 80, SPD: 97 },
    description:
      "The guardians of an ancient city, they always fly the same route while keeping watch for invaders.",
    height: "1.4 m",
    weight: "14 kg",
    ability: ["Wonder Skin", "Magic Guard", "Tinted Lens"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/561.png",
  },
  {
    name: "Yamask",
    type: ["Ghost"],
    base: { HP: 38, ATK: 30, DEF: 85, SATK: 55, SDEF: 65, SPD: 30 },
    description:
      "Each of them carries a mask that used to be its face when it was human. Sometimes they look at it and cry.",
    height: "0.5 m",
    weight: "1.5 kg",
    ability: ["Mummy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/562.png",
  },
  {
    name: "Cofagrigus",
    type: ["Ghost"],
    base: { HP: 58, ATK: 50, DEF: 145, SATK: 95, SDEF: 105, SPD: 30 },
    description:
      "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.",
    height: "1.7 m",
    weight: "76.5 kg",
    ability: ["Mummy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/563.png",
  },
  {
    name: "Tirtouga",
    type: ["Water", "Rock"],
    base: { HP: 54, ATK: 78, DEF: 103, SATK: 53, SDEF: 45, SPD: 22 },
    description:
      "Its hunting grounds encompassed a broad area, from the land to more than half a mile deep in the ocean.",
    height: "0.7 m",
    weight: "16.5 kg",
    ability: ["Solid Rock", "Sturdy", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/564.png",
  },
  {
    name: "Carracosta",
    type: ["Water", "Rock"],
    base: { HP: 74, ATK: 108, DEF: 133, SATK: 83, SDEF: 65, SPD: 32 },
    description:
      "Carracosta eats every last bit of the prey it catches, even the shells and bones, to further strengthen its sturdy shell.",
    height: "1.2 m",
    weight: "81 kg",
    ability: ["Solid Rock", "Sturdy", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/565.png",
  },
  {
    name: "Archen",
    type: ["Rock", "Flying"],
    base: { HP: 55, ATK: 112, DEF: 45, SATK: 74, SDEF: 45, SPD: 70 },
    description:
      "Restored from a fossil, this ancient bird Pokémon has wings but can’t yet fly.",
    height: "0.5 m",
    weight: "9.5 kg",
    ability: ["Defeatist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/566.png",
  },
  {
    name: "Archeops",
    type: ["Rock", "Flying"],
    base: { HP: 75, ATK: 140, DEF: 65, SATK: 112, SDEF: 65, SPD: 110 },
    description:
      "Said to be an ancestor of bird Pokémon, the muscles it uses to flap its wings are still weak, so it needs a long runway in order to take off.",
    height: "1.4 m",
    weight: "32 kg",
    ability: ["Defeatist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/567.png",
  },
  {
    name: "Trubbish",
    type: ["Poison"],
    base: { HP: 50, ATK: 50, DEF: 62, SATK: 40, SDEF: 62, SPD: 65 },
    description:
      "If a young Pokémon or child breathes in the toxic gas that Trubbish belches out, it could be a life-threatening situation.",
    height: "0.6 m",
    weight: "31 kg",
    ability: ["Stench", "Sticky Hold", "Aftermath"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/568.png",
  },
  {
    name: "Garbodor",
    type: ["Poison"],
    base: { HP: 80, ATK: 95, DEF: 82, SATK: 60, SDEF: 82, SPD: 75 },
    description:
      "Some say the reason Garbodor in Alola are a little stronger than their counterparts elsewhere is the presence of Muk, their natural enemy.",
    height: "1.9 m",
    weight: "107.3 kg",
    ability: ["Stench", "Weak Armor", "Aftermath"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/569.png",
  },
  {
    name: "Zorua",
    type: ["Dark"],
    base: { HP: 40, ATK: 65, DEF: 40, SATK: 80, SDEF: 40, SPD: 65 },
    description:
      "If a normally talkative child suddenly stops talking, it may have been replaced by Zorua.",
    height: "0.7 m",
    weight: "12.5 kg",
    ability: ["Illusion"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/570.png",
  },
  {
    name: "Zoroark",
    type: ["Dark"],
    base: { HP: 60, ATK: 105, DEF: 60, SATK: 120, SDEF: 60, SPD: 105 },
    description:
      "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods.",
    height: "1.6 m",
    weight: "81.1 kg",
    ability: ["Illusion"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/571.png",
  },
  {
    name: "Minccino",
    type: ["Normal"],
    base: { HP: 55, ATK: 50, DEF: 40, SATK: 40, SDEF: 40, SPD: 75 },
    description:
      "When its tail has gotten dirty from self-cleaning or from cleaning its nest, Minccino spends a whole day washing its tail in clean spring water.",
    height: "0.4 m",
    weight: "5.8 kg",
    ability: ["Cute Charm", "Technician", "Skill Link"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/572.png",
  },
  {
    name: "Cinccino",
    type: ["Normal"],
    base: { HP: 75, ATK: 95, DEF: 60, SATK: 65, SDEF: 60, SPD: 115 },
    description:
      "The oil that seeps from its body is really smooth. For people troubled by bad skin, this oil is an effective treatment.",
    height: "0.5 m",
    weight: "7.5 kg",
    ability: ["Cute Charm", "Technician", "Skill Link"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/573.png",
  },
  {
    name: "Gothita",
    type: ["Psychic"],
    base: { HP: 45, ATK: 30, DEF: 50, SATK: 55, SDEF: 65, SPD: 45 },
    description:
      "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.",
    height: "0.4 m",
    weight: "5.8 kg",
    ability: ["Frisk", "Competitive", "Shadow Tag"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/574.png",
  },
  {
    name: "Gothorita",
    type: ["Psychic"],
    base: { HP: 60, ATK: 45, DEF: 70, SATK: 75, SDEF: 85, SPD: 55 },
    description:
      "According to many old tales, it creates friends for itself by controlling sleeping children on starry nights.",
    height: "0.7 m",
    weight: "18 kg",
    ability: ["Frisk", "Competitive", "Shadow Tag"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/575.png",
  },
  {
    name: "Gothitelle",
    type: ["Psychic"],
    base: { HP: 70, ATK: 55, DEF: 95, SATK: 95, SDEF: 110, SPD: 65 },
    description:
      "They can predict the future from the placement and movement of the stars. They can see Trainers’ life spans.",
    height: "1.5 m",
    weight: "44 kg",
    ability: ["Frisk", "Competitive", "Shadow Tag"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/576.png",
  },
  {
    name: "Solosis",
    type: ["Psychic"],
    base: { HP: 45, ATK: 30, DEF: 40, SATK: 105, SDEF: 50, SPD: 20 },
    description:
      "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.",
    height: "0.3 m",
    weight: "1 kg",
    ability: ["Overcoat", "Magic Guard", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/577.png",
  },
  {
    name: "Duosion",
    type: ["Psychic"],
    base: { HP: 65, ATK: 40, DEF: 50, SATK: 125, SDEF: 60, SPD: 30 },
    description:
      "When their two divided brains think the same thoughts, their psychic power is maximized.",
    height: "0.6 m",
    weight: "8 kg",
    ability: ["Overcoat", "Magic Guard", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/578.png",
  },
  {
    name: "Reuniclus",
    type: ["Psychic"],
    base: { HP: 110, ATK: 65, DEF: 75, SATK: 125, SDEF: 85, SPD: 30 },
    description:
      "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.",
    height: "1 m",
    weight: "20.1 kg",
    ability: ["Overcoat", "Magic Guard", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/579.png",
  },
  {
    name: "Ducklett",
    type: ["Water", "Flying"],
    base: { HP: 62, ATK: 44, DEF: 50, SATK: 44, SDEF: 50, SPD: 55 },
    description:
      "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.",
    height: "0.5 m",
    weight: "5.5 kg",
    ability: ["Keen Eye", "Big Pecks", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/580.png",
  },
  {
    name: "Swanna",
    type: ["Water", "Flying"],
    base: { HP: 75, ATK: 87, DEF: 63, SATK: 87, SDEF: 63, SPD: 98 },
    description:
      "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
    height: "1.3 m",
    weight: "24.2 kg",
    ability: ["Keen Eye", "Big Pecks", "Hydration"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/581.png",
  },
  {
    name: "Vanillite",
    type: ["Ice"],
    base: { HP: 36, ATK: 50, DEF: 50, SATK: 65, SDEF: 60, SPD: 44 },
    description:
      "When the morning sun hit an icicle, it wished not to melt, and thus Vanillite was born. At night, it buries itself in snow to sleep.",
    height: "0.4 m",
    weight: "5.7 kg",
    ability: ["Ice Body", "Snow Cloak", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/582.png",
  },
  {
    name: "Vanillish",
    type: ["Ice"],
    base: { HP: 51, ATK: 65, DEF: 65, SATK: 80, SDEF: 75, SPD: 59 },
    description:
      "This hearty Pokémon survived the Ice Age. It’s incredibly popular in very hot regions.",
    height: "1.1 m",
    weight: "41 kg",
    ability: ["Ice Body", "Snow Cloak", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/583.png",
  },
  {
    name: "Vanilluxe",
    type: ["Ice"],
    base: { HP: 71, ATK: 95, DEF: 85, SATK: 110, SDEF: 95, SPD: 79 },
    description:
      "Vanilluxe is born when two Vanillish, half-melted by the day’s light, stick to each other and freeze together in the cold return of night.",
    height: "1.3 m",
    weight: "57.5 kg",
    ability: ["Ice Body", "Snow Warning", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/584.png",
  },
  {
    name: "Deerling",
    type: ["Normal", "Grass"],
    base: { HP: 60, ATK: 60, DEF: 50, SATK: 40, SDEF: 50, SPD: 75 },
    description:
      "The turning of the seasons changes the color and scent of this Pokémon’s fur. People use it to mark the seasons.",
    height: "0.6 m",
    weight: "19.5 kg",
    ability: ["Chlorophyll", "Sap Sipper", "Serene Grace"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/585.png",
  },
  {
    name: "Sawsbuck",
    type: ["Normal", "Grass"],
    base: { HP: 80, ATK: 100, DEF: 70, SATK: 60, SDEF: 70, SPD: 95 },
    description:
      "They migrate according to the seasons, so some people call Sawsbuck the harbingers of spring.",
    height: "1.9 m",
    weight: "92.5 kg",
    ability: ["Chlorophyll", "Sap Sipper", "Serene Grace"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/586.png",
  },
  {
    name: "Emolga",
    type: ["Electric", "Flying"],
    base: { HP: 55, ATK: 75, DEF: 60, SATK: 75, SDEF: 60, SPD: 103 },
    description:
      "As it flies, it scatters electricity around, so bird Pokémon keep their distance. That’s why Emolga can keep all its food to itself.",
    height: "0.4 m",
    weight: "5 kg",
    ability: ["Static", "Motor Drive"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/587.png",
  },
  {
    name: "Karrablast",
    type: ["Bug"],
    base: { HP: 50, ATK: 75, DEF: 45, SATK: 40, SDEF: 45, SPD: 60 },
    description:
      "For some reason they evolve when they receive electrical energy while they are attacking Shelmet.",
    height: "0.5 m",
    weight: "5.9 kg",
    ability: ["Swarm", "Shed Skin", "No Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/588.png",
  },
  {
    name: "Escavalier",
    type: ["Bug", "Steel"],
    base: { HP: 70, ATK: 135, DEF: 105, SATK: 60, SDEF: 105, SPD: 20 },
    description:
      "These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.",
    height: "1 m",
    weight: "33 kg",
    ability: ["Swarm", "Shell Armor", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/589.png",
  },
  {
    name: "Foongus",
    type: ["Grass", "Poison"],
    base: { HP: 69, ATK: 55, DEF: 45, SATK: 55, SDEF: 55, SPD: 15 },
    description:
      "It lures Pokémon with its pattern that looks just like a Poké Ball, then releases poison spores.",
    height: "0.2 m",
    weight: "1 kg",
    ability: ["Effect Spore", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/590.png",
  },
  {
    name: "Amoonguss",
    type: ["Grass", "Poison"],
    base: { HP: 114, ATK: 85, DEF: 70, SATK: 85, SDEF: 80, SPD: 30 },
    description:
      "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.",
    height: "0.6 m",
    weight: "10.5 kg",
    ability: ["Effect Spore", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/591.png",
  },
  {
    name: "Frillish",
    type: ["Water", "Ghost"],
    base: { HP: 55, ATK: 40, DEF: 50, SATK: 65, SDEF: 85, SPD: 40 },
    description:
      "Using the invisible poison spikes on its veillike arms and legs, it paralyzes its enemies and causes them to drown.",
    height: "1.2 m",
    weight: "33 kg",
    ability: ["Water Absorb", "Cursed Body", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/592.png",
  },
  {
    name: "Jellicent",
    type: ["Water", "Ghost"],
    base: { HP: 100, ATK: 60, DEF: 70, SATK: 85, SDEF: 105, SPD: 60 },
    description:
      "Fishermen are terrified of Jellicent. It’s rumored to drag them into the sea and steal their lives away.",
    height: "2.2 m",
    weight: "135 kg",
    ability: ["Water Absorb", "Cursed Body", "Damp"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/593.png",
  },
  {
    name: "Alomomola",
    type: ["Water"],
    base: { HP: 165, ATK: 75, DEF: 80, SATK: 40, SDEF: 45, SPD: 65 },
    description:
      "The reason it helps Pokémon in a weakened condition is that any Pokémon coming after them may also attack Alomomola.",
    height: "1.2 m",
    weight: "31.6 kg",
    ability: ["Healer", "Hydration", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/594.png",
  },
  {
    name: "Joltik",
    type: ["Bug", "Electric"],
    base: { HP: 50, ATK: 47, DEF: 50, SATK: 57, SDEF: 50, SPD: 65 },
    description:
      "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
    height: "0.1 m",
    weight: "0.6 kg",
    ability: ["Compound Eyes", "Unnerve", "Swarm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/595.png",
  },
  {
    name: "Galvantula",
    type: ["Bug", "Electric"],
    base: { HP: 70, ATK: 77, DEF: 60, SATK: 97, SDEF: 60, SPD: 108 },
    description:
      "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
    height: "0.8 m",
    weight: "14.3 kg",
    ability: ["Compound Eyes", "Unnerve", "Swarm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/596.png",
  },
  {
    name: "Ferroseed",
    type: ["Grass", "Steel"],
    base: { HP: 44, ATK: 50, DEF: 91, SATK: 24, SDEF: 86, SPD: 10 },
    description:
      "It absorbs the iron it finds in the rock while clinging to the ceiling. It shoots spikes when in danger.",
    height: "0.6 m",
    weight: "18.8 kg",
    ability: ["Iron Barbs"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/597.png",
  },
  {
    name: "Ferrothorn",
    type: ["Grass", "Steel"],
    base: { HP: 74, ATK: 94, DEF: 131, SATK: 54, SDEF: 116, SPD: 20 },
    description:
      "They attach themselves to cave ceilings, firing steel spikes at targets passing beneath them.",
    height: "1 m",
    weight: "110 kg",
    ability: ["Iron Barbs", "Anticipation"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/598.png",
  },
  {
    name: "Klink",
    type: ["Steel"],
    base: { HP: 40, ATK: 55, DEF: 70, SATK: 45, SDEF: 60, SPD: 30 },
    description:
      "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing.",
    height: "0.3 m",
    weight: "21 kg",
    ability: ["Plus", "Minus", "Clear Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/599.png",
  },
  {
    name: "Klang",
    type: ["Steel"],
    base: { HP: 60, ATK: 80, DEF: 95, SATK: 70, SDEF: 85, SPD: 50 },
    description:
      "A minigear and big gear comprise its body. If the minigear it launches at a foe doesn’t return, it will die.",
    height: "0.6 m",
    weight: "51 kg",
    ability: ["Plus", "Minus", "Clear Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/600.png",
  },
  {
    name: "Klinklang",
    type: ["Steel"],
    base: { HP: 60, ATK: 100, DEF: 115, SATK: 70, SDEF: 85, SPD: 90 },
    description:
      "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.",
    height: "0.6 m",
    weight: "81 kg",
    ability: ["Plus", "Minus", "Clear Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/601.png",
  },
  {
    name: "Tynamo",
    type: ["Electric"],
    base: { HP: 35, ATK: 55, DEF: 40, SATK: 45, SDEF: 40, SPD: 60 },
    description:
      "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock.",
    height: "0.2 m",
    weight: "0.3 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/602.png",
  },
  {
    name: "Eelektrik",
    type: ["Electric"],
    base: { HP: 65, ATK: 85, DEF: 70, SATK: 75, SDEF: 70, SPD: 40 },
    description:
      "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
    height: "1.2 m",
    weight: "22 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/603.png",
  },
  {
    name: "Eelektross",
    type: ["Electric"],
    base: { HP: 85, ATK: 115, DEF: 80, SATK: 105, SDEF: 80, SPD: 50 },
    description:
      "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
    height: "2.1 m",
    weight: "80.5 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/604.png",
  },
  {
    name: "Elgyem",
    type: ["Psychic"],
    base: { HP: 55, ATK: 55, DEF: 55, SATK: 85, SDEF: 55, SPD: 30 },
    description:
      "This Pokémon is shrouded in mystery. It’s said to have appeared from a UFO that fell from the sky about 50 years ago.",
    height: "0.5 m",
    weight: "9 kg",
    ability: ["Telepathy", "Synchronize", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/605.png",
  },
  {
    name: "Beheeyem",
    type: ["Psychic"],
    base: { HP: 75, ATK: 75, DEF: 75, SATK: 125, SDEF: 95, SPD: 40 },
    description:
      "It has strong psychic powers. Using its fingers that flash three different colors, it controls its opponents and rewrites their memories.",
    height: "1 m",
    weight: "34.5 kg",
    ability: ["Telepathy", "Synchronize", "Analytic"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/606.png",
  },
  {
    name: "Litwick",
    type: ["Ghost", "Fire"],
    base: { HP: 50, ATK: 30, DEF: 55, SATK: 65, SDEF: 55, SPD: 20 },
    description:
      "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns.",
    height: "0.3 m",
    weight: "3.1 kg",
    ability: ["Flash Fire", "Flame Body", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/607.png",
  },
  {
    name: "Lampent",
    type: ["Ghost", "Fire"],
    base: { HP: 60, ATK: 40, DEF: 60, SATK: 95, SDEF: 60, SPD: 55 },
    description:
      "It arrives near the moment of death and steals spirit from the body.",
    height: "0.6 m",
    weight: "13 kg",
    ability: ["Flash Fire", "Flame Body", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/608.png",
  },
  {
    name: "Chandelure",
    type: ["Ghost", "Fire"],
    base: { HP: 60, ATK: 55, DEF: 90, SATK: 145, SDEF: 90, SPD: 80 },
    description:
      "The spirits burned up in its ominous flame lose their way and wander this world forever.",
    height: "1 m",
    weight: "34.3 kg",
    ability: ["Flash Fire", "Flame Body", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/609.png",
  },
  {
    name: "Axew",
    type: ["Dragon"],
    base: { HP: 46, ATK: 87, DEF: 60, SATK: 30, SDEF: 40, SPD: 57 },
    description:
      "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
    height: "0.6 m",
    weight: "18 kg",
    ability: ["Rivalry", "Mold Breaker", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/610.png",
  },
  {
    name: "Fraxure",
    type: ["Dragon"],
    base: { HP: 66, ATK: 117, DEF: 70, SATK: 40, SDEF: 50, SPD: 67 },
    description:
      "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.",
    height: "1 m",
    weight: "36 kg",
    ability: ["Rivalry", "Mold Breaker", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/611.png",
  },
  {
    name: "Haxorus",
    type: ["Dragon"],
    base: { HP: 76, ATK: 147, DEF: 90, SATK: 60, SDEF: 70, SPD: 97 },
    description:
      "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
    height: "1.8 m",
    weight: "105.5 kg",
    ability: ["Rivalry", "Mold Breaker", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/612.png",
  },
  {
    name: "Cubchoo",
    type: ["Ice"],
    base: { HP: 55, ATK: 70, DEF: 40, SATK: 60, SDEF: 40, SPD: 40 },
    description:
      "Their snot is a barometer of health. When healthy, their snot is sticky and the power of their ice moves increases.",
    height: "0.5 m",
    weight: "8.5 kg",
    ability: ["Snow Cloak", "Slush Rush", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/613.png",
  },
  {
    name: "Beartic",
    type: ["Ice"],
    base: { HP: 95, ATK: 130, DEF: 80, SATK: 70, SDEF: 80, SPD: 50 },
    description:
      "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
    height: "2.6 m",
    weight: "260 kg",
    ability: ["Snow Cloak", "Slush Rush", "Swift Swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/614.png",
  },
  {
    name: "Cryogonal",
    type: ["Ice"],
    base: { HP: 80, ATK: 50, DEF: 50, SATK: 95, SDEF: 135, SPD: 105 },
    description:
      "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148 degrees Fahrenheit.",
    height: "1.1 m",
    weight: "148 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/615.png",
  },
  {
    name: "Shelmet",
    type: ["Bug"],
    base: { HP: 50, ATK: 40, DEF: 85, SATK: 40, SDEF: 65, SPD: 25 },
    description:
      "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.",
    height: "0.4 m",
    weight: "7.7 kg",
    ability: ["Hydration", "Shell Armor", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/616.png",
  },
  {
    name: "Accelgor",
    type: ["Bug"],
    base: { HP: 80, ATK: 70, DEF: 40, SATK: 100, SDEF: 60, SPD: 145 },
    description:
      "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
    height: "0.8 m",
    weight: "25.3 kg",
    ability: ["Hydration", "Sticky Hold", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/617.png",
  },
  {
    name: "Stunfisk",
    type: ["Ground", "Electric"],
    base: { HP: 109, ATK: 66, DEF: 84, SATK: 81, SDEF: 99, SPD: 32 },
    description:
      "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
    height: "0.7 m",
    weight: "11 kg",
    ability: ["Static", "Limber", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/618.png",
  },
  {
    name: "Mienfoo",
    type: ["Fighting"],
    base: { HP: 45, ATK: 85, DEF: 50, SATK: 55, SDEF: 50, SPD: 65 },
    description:
      "They seclude themselves in the mountains and devote themselves to training. The form of their kicks and chops differs from pack to pack.",
    height: "0.9 m",
    weight: "20 kg",
    ability: ["Inner Focus", "Regenerator", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/619.png",
  },
  {
    name: "Mienshao",
    type: ["Fighting"],
    base: { HP: 65, ATK: 125, DEF: 60, SATK: 95, SDEF: 60, SPD: 105 },
    description:
      "When Mienshao lets out a bizarre wail, you’re in danger. A flurry of kicks and chops too fast to see is about to be unleashed!",
    height: "1.4 m",
    weight: "35.5 kg",
    ability: ["Inner Focus", "Regenerator", "Reckless"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/620.png",
  },
  {
    name: "Druddigon",
    type: ["Dragon"],
    base: { HP: 77, ATK: 120, DEF: 90, SATK: 60, SDEF: 90, SPD: 48 },
    description:
      "It infiltrates tunnels that Pokémon like Diglett and Dugtrio have dug and quietly waits for prey to pass through.",
    height: "1.6 m",
    weight: "139 kg",
    ability: ["Rough Skin", "Sheer Force", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/621.png",
  },
  {
    name: "Golett",
    type: ["Ground", "Ghost"],
    base: { HP: 59, ATK: 74, DEF: 50, SATK: 35, SDEF: 50, SPD: 35 },
    description:
      "Although ancient people apparently built it by working with clay, the source of its energy is unclear.",
    height: "1 m",
    weight: "92 kg",
    ability: ["Iron Fist", "Klutz", "No Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/622.png",
  },
  {
    name: "Golurk",
    type: ["Ground", "Ghost"],
    base: { HP: 89, ATK: 124, DEF: 80, SATK: 55, SDEF: 80, SPD: 55 },
    description:
      "When the seal on its chest is removed, it rages indiscriminately, turning the whole town around it into a mountain of rubble.",
    height: "2.8 m",
    weight: "330 kg",
    ability: ["Iron Fist", "Klutz", "No Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/623.png",
  },
  {
    name: "Pawniard",
    type: ["Dark", "Steel"],
    base: { HP: 45, ATK: 85, DEF: 70, SATK: 40, SDEF: 40, SPD: 60 },
    description:
      "It follows Bisharp’s orders to a tee when it attacks enemies. After slashing an opponent, Pawniard clangs both of its blades together.",
    height: "0.5 m",
    weight: "10.2 kg",
    ability: ["Defiant", "Inner Focus", "Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/624.png",
  },
  {
    name: "Bisharp",
    type: ["Dark", "Steel"],
    base: { HP: 65, ATK: 125, DEF: 100, SATK: 60, SDEF: 70, SPD: 70 },
    description:
      "It leads a group of Pawniard. Bisharp doesn’t even change its expression when it deals the finishing blow to an opponent.",
    height: "1.6 m",
    weight: "70 kg",
    ability: ["Defiant", "Inner Focus", "Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/625.png",
  },
  {
    name: "Bouffalant",
    type: ["Normal"],
    base: { HP: 95, ATK: 110, DEF: 95, SATK: 40, SDEF: 95, SPD: 55 },
    description:
      "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt.",
    height: "1.6 m",
    weight: "94.6 kg",
    ability: ["Reckless", "Sap Sipper", "Soundproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/626.png",
  },
  {
    name: "Rufflet",
    type: ["Normal", "Flying"],
    base: { HP: 70, ATK: 83, DEF: 50, SATK: 37, SDEF: 50, SPD: 60 },
    description:
      "Known as a natural-born warrior, soon after its hatching, it will challenge its parent to a fight in order to gain their acceptance.",
    height: "0.5 m",
    weight: "10.5 kg",
    ability: ["Keen Eye", "Sheer Force", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/627.png",
  },
  {
    name: "Braviary",
    type: ["Normal", "Flying"],
    base: { HP: 100, ATK: 123, DEF: 75, SATK: 57, SDEF: 75, SPD: 80 },
    description:
      "Known as “the hero of the skies,” this Pokémon is so proud and so brave that it will never retreat, even when it’s injured.",
    height: "1.5 m",
    weight: "41 kg",
    ability: ["Keen Eye", "Sheer Force", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/628.png",
  },
  {
    name: "Vullaby",
    type: ["Dark", "Flying"],
    base: { HP: 70, ATK: 55, DEF: 75, SATK: 45, SDEF: 65, SPD: 60 },
    description:
      "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases.",
    height: "0.5 m",
    weight: "9 kg",
    ability: ["Big Pecks", "Overcoat", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/629.png",
  },
  {
    name: "Mandibuzz",
    type: ["Dark", "Flying"],
    base: { HP: 110, ATK: 65, DEF: 105, SATK: 55, SDEF: 95, SPD: 80 },
    description:
      "It’s always searching for food for Vullaby. When it finds a weak Pokémon, Mandibuzz swoops it right off to its nest.",
    height: "1.2 m",
    weight: "39.5 kg",
    ability: ["Big Pecks", "Overcoat", "Weak Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/630.png",
  },
  {
    name: "Heatmor",
    type: ["Fire"],
    base: { HP: 85, ATK: 97, DEF: 66, SATK: 105, SDEF: 66, SPD: 65 },
    description:
      "It draws in air through its tail, transforms it into fire, and uses it like a tongue. It melts Durant and eats them.",
    height: "1.4 m",
    weight: "58 kg",
    ability: ["Gluttony", "Flash Fire", "White Smoke"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/631.png",
  },
  {
    name: "Durant",
    type: ["Bug", "Steel"],
    base: { HP: 58, ATK: 109, DEF: 112, SATK: 48, SDEF: 48, SPD: 109 },
    description:
      "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
    height: "0.3 m",
    weight: "33 kg",
    ability: ["Swarm", "Hustle", "Truant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/632.png",
  },
  {
    name: "Deino",
    type: ["Dark", "Dragon"],
    base: { HP: 52, ATK: 65, DEF: 50, SATK: 45, SDEF: 50, SPD: 38 },
    description:
      "Lacking sight, it’s unaware of its surroundings, so it bumps into things and eats anything that moves.",
    height: "0.8 m",
    weight: "17.3 kg",
    ability: ["Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/633.png",
  },
  {
    name: "Zweilous",
    type: ["Dark", "Dragon"],
    base: { HP: 72, ATK: 85, DEF: 70, SATK: 65, SDEF: 70, SPD: 58 },
    description:
      "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.",
    height: "1.4 m",
    weight: "50 kg",
    ability: ["Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/634.png",
  },
  {
    name: "Hydreigon",
    type: ["Dark", "Dragon"],
    base: { HP: 92, ATK: 105, DEF: 90, SATK: 125, SDEF: 90, SPD: 98 },
    description:
      "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
    height: "1.8 m",
    weight: "160 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/635.png",
  },
  {
    name: "Larvesta",
    type: ["Bug", "Fire"],
    base: { HP: 55, ATK: 85, DEF: 55, SATK: 50, SDEF: 55, SPD: 60 },
    description:
      "It protects itself with flame. Long years ago, people believed Larvesta had a nest on the sun.",
    height: "1.1 m",
    weight: "28.8 kg",
    ability: ["Flame Body", "Swarm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/636.png",
  },
  {
    name: "Volcarona",
    type: ["Bug", "Fire"],
    base: { HP: 85, ATK: 60, DEF: 65, SATK: 135, SDEF: 105, SPD: 100 },
    description:
      "According to legends, it was hatched from a flaming cocoon to save people and Pokémon that were suffering from the cold.",
    height: "1.6 m",
    weight: "46 kg",
    ability: ["Flame Body", "Swarm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/637.png",
  },
  {
    name: "Cobalion",
    type: ["Steel", "Fighting"],
    base: { HP: 91, ATK: 90, DEF: 129, SATK: 90, SDEF: 72, SPD: 108 },
    description:
      "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.",
    height: "2.1 m",
    weight: "250 kg",
    ability: ["Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/638.png",
  },
  {
    name: "Terrakion",
    type: ["Rock", "Fighting"],
    base: { HP: 91, ATK: 129, DEF: 90, SATK: 72, SDEF: 90, SPD: 108 },
    description:
      "Spoken of in legend, this Pokémon used its phenomenal power to destroy a castle in its effort to protect Pokémon.",
    height: "1.9 m",
    weight: "260 kg",
    ability: ["Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/639.png",
  },
  {
    name: "Virizion",
    type: ["Grass", "Fighting"],
    base: { HP: 91, ATK: 90, DEF: 72, SATK: 90, SDEF: 129, SPD: 108 },
    description:
      "Legends say this Pokémon confounded opponents with its swift movements.",
    height: "2 m",
    weight: "200 kg",
    ability: ["Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/640.png",
  },
  {
    name: "Tornadus",
    type: ["Flying"],
    base: { HP: 79, ATK: 115, DEF: 70, SATK: 125, SDEF: 80, SPD: 111 },
    description:
      "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
    height: "1.5 m",
    weight: "63 kg",
    ability: ["Prankster", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/641.png",
  },
  {
    name: "Thundurus",
    type: ["Electric", "Flying"],
    base: { HP: 79, ATK: 115, DEF: 70, SATK: 125, SDEF: 80, SPD: 111 },
    description:
      "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.",
    height: "1.5 m",
    weight: "61 kg",
    ability: ["Prankster", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/642.png",
  },
  {
    name: "Reshiram",
    type: ["Dragon", "Fire"],
    base: { HP: 100, ATK: 120, DEF: 100, SATK: 150, SDEF: 120, SPD: 90 },
    description:
      "When Reshiram’s tail flares, the heat energy moves the atmosphere and changes the world’s weather.",
    height: "3.2 m",
    weight: "330 kg",
    ability: ["Turboblaze"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/643.png",
  },
  {
    name: "Zekrom",
    type: ["Dragon", "Electric"],
    base: { HP: 100, ATK: 150, DEF: 120, SATK: 120, SDEF: 100, SPD: 90 },
    description:
      "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.",
    height: "2.9 m",
    weight: "345 kg",
    ability: ["Teravolt"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/644.png",
  },
  {
    name: "Landorus",
    type: ["Ground", "Flying"],
    base: { HP: 89, ATK: 125, DEF: 90, SATK: 115, SDEF: 80, SPD: 101 },
    description:
      "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant.",
    height: "1.5 m",
    weight: "68 kg",
    ability: ["Sand Force", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/645.png",
  },
  {
    name: "Kyurem",
    type: ["Dragon", "Ice"],
    base: { HP: 125, ATK: 130, DEF: 90, SATK: 130, SDEF: 90, SPD: 95 },
    description:
      "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
    height: "3 m",
    weight: "325 kg",
    ability: ["Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/646.png",
  },
  {
    name: "Keldeo",
    type: ["Water", "Fighting"],
    base: { HP: 91, ATK: 72, DEF: 90, SATK: 129, SDEF: 90, SPD: 108 },
    description:
      "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
    height: "1.4 m",
    weight: "48.5 kg",
    ability: ["Justified"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/647.png",
  },
  {
    name: "Meloetta",
    type: ["Normal", "Psychic"],
    base: { HP: 100, ATK: 77, DEF: 77, SATK: 128, SDEF: 128, SPD: 90 },
    description:
      "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
    height: "0.6 m",
    weight: "6.5 kg",
    ability: ["Serene Grace"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/648.png",
  },
  {
    name: "Genesect",
    type: ["Bug", "Steel"],
    base: { HP: 71, ATK: 120, DEF: 95, SATK: 120, SDEF: 95, SPD: 99 },
    description:
      "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
    height: "1.5 m",
    weight: "82.5 kg",
    ability: ["Download"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/649.png",
  },
  {
    name: "Chespin",
    type: ["Grass"],
    base: { HP: 56, ATK: 61, DEF: 65, SATK: 48, SDEF: 45, SPD: 38 },
    description:
      "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn’t faze it.",
    height: "0.4 m",
    weight: "9 kg",
    ability: ["Overgrow", "Bulletproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/650.png",
  },
  {
    name: "Quilladin",
    type: ["Grass"],
    base: { HP: 61, ATK: 78, DEF: 95, SATK: 56, SDEF: 58, SPD: 57 },
    description:
      "They strengthen their lower bodies by running into one another. They are very kind and won’t start fights.",
    height: "0.7 m",
    weight: "29 kg",
    ability: ["Overgrow", "Bulletproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/651.png",
  },
  {
    name: "Chesnaught",
    type: ["Grass", "Fighting"],
    base: { HP: 88, ATK: 107, DEF: 122, SATK: 74, SDEF: 75, SPD: 64 },
    description:
      "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.",
    height: "1.6 m",
    weight: "90 kg",
    ability: ["Overgrow", "Bulletproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/652.png",
  },
  {
    name: "Fennekin",
    type: ["Fire"],
    base: { HP: 40, ATK: 45, DEF: 40, SATK: 62, SDEF: 60, SPD: 60 },
    description:
      "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.",
    height: "0.4 m",
    weight: "9.4 kg",
    ability: ["Blaze", "Magician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/653.png",
  },
  {
    name: "Braixen",
    type: ["Fire"],
    base: { HP: 59, ATK: 59, DEF: 58, SATK: 90, SDEF: 70, SPD: 73 },
    description:
      "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
    height: "1 m",
    weight: "14.5 kg",
    ability: ["Blaze", "Magician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/654.png",
  },
  {
    name: "Delphox",
    type: ["Fire", "Psychic"],
    base: { HP: 75, ATK: 69, DEF: 72, SATK: 114, SDEF: 100, SPD: 104 },
    description:
      "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame.",
    height: "1.5 m",
    weight: "39 kg",
    ability: ["Blaze", "Magician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/655.png",
  },
  {
    name: "Froakie",
    type: ["Water"],
    base: { HP: 41, ATK: 56, DEF: 40, SATK: 62, SDEF: 44, SPD: 71 },
    description:
      "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
    height: "0.3 m",
    weight: "7 kg",
    ability: ["Torrent", "Protean"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/656.png",
  },
  {
    name: "Frogadier",
    type: ["Water"],
    base: { HP: 54, ATK: 63, DEF: 52, SATK: 83, SDEF: 56, SPD: 97 },
    description:
      "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute’s time.",
    height: "0.6 m",
    weight: "10.9 kg",
    ability: ["Torrent", "Protean"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/657.png",
  },
  {
    name: "Greninja",
    type: ["Water", "Dark"],
    base: { HP: 72, ATK: 95, DEF: 67, SATK: 103, SDEF: 71, SPD: 122 },
    description:
      "It appears and vanishes with a ninja’s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
    height: "1.5 m",
    weight: "40 kg",
    ability: ["Torrent", "Protean"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/658.png",
  },
  {
    name: "Bunnelby",
    type: ["Normal"],
    base: { HP: 38, ATK: 36, DEF: 38, SATK: 32, SDEF: 36, SPD: 57 },
    description:
      "It has ears like shovels. Digging holes strengthens its ears so much that they can sever thick roots effortlessly.",
    height: "0.4 m",
    weight: "5 kg",
    ability: ["Pickup", "Cheek Pouch", "Huge Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/659.png",
  },
  {
    name: "Diggersby",
    type: ["Normal", "Ground"],
    base: { HP: 85, ATK: 56, DEF: 77, SATK: 50, SDEF: 77, SPD: 78 },
    description:
      "As powerful as an excavator, its ears can reduce dense bedrock to rubble. When it’s finished digging, it lounges lazily.",
    height: "1 m",
    weight: "42.4 kg",
    ability: ["Pickup", "Cheek Pouch", "Huge Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/660.png",
  },
  {
    name: "Fletchling",
    type: ["Normal", "Flying"],
    base: { HP: 45, ATK: 50, DEF: 43, SATK: 40, SDEF: 38, SPD: 62 },
    description:
      "Its body is always warm. Trainers who live in cold areas apparently sleep with it in their bed.",
    height: "0.3 m",
    weight: "1.7 kg",
    ability: ["Big Pecks", "Gale Wings"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/661.png",
  },
  {
    name: "Fletchinder",
    type: ["Fire", "Flying"],
    base: { HP: 62, ATK: 73, DEF: 55, SATK: 56, SDEF: 52, SPD: 84 },
    description:
      "Its speed right after takeoff already puts it in the top speed class of all bird Pokémon.",
    height: "0.7 m",
    weight: "16 kg",
    ability: ["Flame Body", "Gale Wings"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/662.png",
  },
  {
    name: "Talonflame",
    type: ["Fire", "Flying"],
    base: { HP: 78, ATK: 81, DEF: 71, SATK: 74, SDEF: 69, SPD: 126 },
    description:
      "Bird Pokémon make up most of its diet. It approaches at high speeds and smacks them down to the ground with its powerful kick.",
    height: "1.2 m",
    weight: "24.5 kg",
    ability: ["Flame Body", "Gale Wings"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/663.png",
  },
  {
    name: "Scatterbug",
    type: ["Bug"],
    base: { HP: 38, ATK: 35, DEF: 40, SATK: 27, SDEF: 25, SPD: 35 },
    description:
      "The powder that covers its body regulates its temperature, so it can live in any region or climate.",
    height: "0.3 m",
    weight: "2.5 kg",
    ability: ["Shield Dust", "Compound Eyes", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/664.png",
  },
  {
    name: "Spewpa",
    type: ["Bug"],
    base: { HP: 45, ATK: 22, DEF: 60, SATK: 27, SDEF: 30, SPD: 29 },
    description:
      "The beaks of bird Pokémon can’t begin to scratch its stalwart body. To defend itself, it spews powder.",
    height: "0.3 m",
    weight: "8.4 kg",
    ability: ["Shed Skin", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/665.png",
  },
  {
    name: "Vivillon",
    type: ["Bug", "Flying"],
    base: { HP: 80, ATK: 52, DEF: 50, SATK: 90, SDEF: 50, SPD: 89 },
    description:
      "The patterns on this Pokémon’s wings depend on the climate and topography of its habitat. It scatters colorful scales.",
    height: "1.2 m",
    weight: "17 kg",
    ability: ["Shield Dust", "Compound Eyes", "Friend Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/666.png",
  },
  {
    name: "Litleo",
    type: ["Fire", "Normal"],
    base: { HP: 62, ATK: 50, DEF: 58, SATK: 73, SDEF: 54, SPD: 72 },
    description:
      "This hot-blooded Pokémon is filled with curiosity. When it gets angry or starts fighting, its short mane gets hot.",
    height: "0.6 m",
    weight: "13.5 kg",
    ability: ["Rivalry", "Unnerve", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/667.png",
  },
  {
    name: "Pyroar",
    type: ["Fire", "Normal"],
    base: { HP: 86, ATK: 68, DEF: 72, SATK: 109, SDEF: 66, SPD: 106 },
    description:
      "The temperature of its breath is over 10,000 degrees Fahrenheit, but Pyroar doesn’t use it on its prey. This Pokémon prefers to eat raw meat.",
    height: "1.5 m",
    weight: "81.5 kg",
    ability: ["Rivalry", "Unnerve", "Moxie"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/668.png",
  },
  {
    name: "Flabébé",
    type: ["Fairy"],
    base: { HP: 44, ATK: 38, DEF: 39, SATK: 61, SDEF: 79, SPD: 42 },
    description:
      "Flabébé wears a crown made from pollen it’s collected from its flower. The crown has hidden healing properties.",
    height: "0.1 m",
    weight: "0.1 kg",
    ability: ["Flower Veil", "Symbiosis"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/669.png",
  },
  {
    name: "Floette",
    type: ["Fairy"],
    base: { HP: 54, ATK: 45, DEF: 47, SATK: 75, SDEF: 98, SPD: 52 },
    description:
      "It gives its own power to flowers, pouring its heart into caring for them. Floette never forgives anyone who messes up a flower bed.",
    height: "0.2 m",
    weight: "0.9 kg",
    ability: ["Flower Veil", "Symbiosis"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/670.png",
  },
  {
    name: "Florges",
    type: ["Fairy"],
    base: { HP: 78, ATK: 65, DEF: 68, SATK: 112, SDEF: 154, SPD: 75 },
    description:
      "Its life can span several hundred years. It’s said to devote its entire life to protecting gardens.",
    height: "1.1 m",
    weight: "10 kg",
    ability: ["Flower Veil", "Symbiosis"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/671.png",
  },
  {
    name: "Skiddo",
    type: ["Grass"],
    base: { HP: 66, ATK: 65, DEF: 48, SATK: 62, SDEF: 57, SPD: 52 },
    description:
      "If it has sunshine and water, it doesn’t need to eat, because it can generate energy from the leaves on its back.",
    height: "0.9 m",
    weight: "31 kg",
    ability: ["Sap Sipper", "Grass Pelt"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/672.png",
  },
  {
    name: "Gogoat",
    type: ["Grass"],
    base: { HP: 123, ATK: 100, DEF: 62, SATK: 97, SDEF: 81, SPD: 68 },
    description:
      "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns.",
    height: "1.7 m",
    weight: "91 kg",
    ability: ["Sap Sipper", "Grass Pelt"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/673.png",
  },
  {
    name: "Pancham",
    type: ["Fighting"],
    base: { HP: 67, ATK: 82, DEF: 62, SATK: 46, SDEF: 48, SPD: 43 },
    description:
      "It’s desperate to intimidate its opponents. Be nice and pretend to be scared if you catch it glaring at you intensely.",
    height: "0.6 m",
    weight: "8 kg",
    ability: ["Iron Fist", "Mold Breaker", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/674.png",
  },
  {
    name: "Pangoro",
    type: ["Fighting", "Dark"],
    base: { HP: 95, ATK: 124, DEF: 78, SATK: 69, SDEF: 71, SPD: 58 },
    description:
      "Pangoro is the type to talk with its fists. It doesn’t say much as it pummels opponents with enough force to send a dump truck flying.",
    height: "2.1 m",
    weight: "136 kg",
    ability: ["Iron Fist", "Mold Breaker", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/675.png",
  },
  {
    name: "Furfrou",
    type: ["Normal"],
    base: { HP: 75, ATK: 80, DEF: 60, SATK: 65, SDEF: 90, SPD: 102 },
    description:
      "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it.",
    height: "1.2 m",
    weight: "28 kg",
    ability: ["Fur Coat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/676.png",
  },
  {
    name: "Espurr",
    type: ["Psychic"],
    base: { HP: 62, ATK: 48, DEF: 54, SATK: 63, SDEF: 60, SPD: 68 },
    description:
      "It has enough psychic energy to blast everything within 300 feet of itself, but it has no control over its power.",
    height: "0.3 m",
    weight: "3.5 kg",
    ability: ["Keen Eye", "Infiltrator", "Own Tempo"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/677.png",
  },
  {
    name: "Meowstic",
    type: ["Psychic"],
    base: { HP: 74, ATK: 48, DEF: 76, SATK: 83, SDEF: 81, SPD: 104 },
    description:
      "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
    height: "0.6 m",
    weight: "8.5 kg",
    ability: ["Keen Eye", "Infiltrator", "Prankster"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/678.png",
  },
  {
    name: "Honedge",
    type: ["Steel", "Ghost"],
    base: { HP: 45, ATK: 80, DEF: 100, SATK: 35, SDEF: 37, SPD: 28 },
    description:
      "If anyone dares to grab its hilt, it wraps a blue cloth around that person’s arm and drains that person’s life energy completely.",
    height: "0.8 m",
    weight: "2 kg",
    ability: ["No Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/679.png",
  },
  {
    name: "Doublade",
    type: ["Steel", "Ghost"],
    base: { HP: 59, ATK: 110, DEF: 150, SATK: 45, SDEF: 49, SPD: 35 },
    description:
      "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
    height: "0.8 m",
    weight: "4.5 kg",
    ability: ["No Guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/680.png",
  },
  {
    name: "Aegislash",
    type: ["Steel", "Ghost"],
    base: { HP: 60, ATK: 50, DEF: 150, SATK: 50, SDEF: 150, SPD: 60 },
    description:
      "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
    height: "1.7 m",
    weight: "53 kg",
    ability: ["Stance Change"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/681.png",
  },
  {
    name: "Spritzee",
    type: ["Fairy"],
    base: { HP: 78, ATK: 52, DEF: 60, SATK: 63, SDEF: 65, SPD: 23 },
    description:
      "In the past, rather than using perfume, royal ladies carried a Spritzee that would waft a fragrance they liked.",
    height: "0.2 m",
    weight: "0.5 kg",
    ability: ["Healer", "Aroma Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/682.png",
  },
  {
    name: "Aromatisse",
    type: ["Fairy"],
    base: { HP: 101, ATK: 72, DEF: 72, SATK: 99, SDEF: 89, SPD: 29 },
    description:
      "Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.",
    height: "0.8 m",
    weight: "15.5 kg",
    ability: ["Healer", "Aroma Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/683.png",
  },
  {
    name: "Swirlix",
    type: ["Fairy"],
    base: { HP: 62, ATK: 48, DEF: 66, SATK: 59, SDEF: 57, SPD: 49 },
    description:
      "Because it eats nothing but sweets, its fur is as sticky sweet as cotton candy.",
    height: "0.4 m",
    weight: "3.5 kg",
    ability: ["Sweet Veil", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/684.png",
  },
  {
    name: "Slurpuff",
    type: ["Fairy"],
    base: { HP: 82, ATK: 80, DEF: 86, SATK: 85, SDEF: 75, SPD: 72 },
    description:
      "Its sense of smell is 100 million times better than a human’s, so even the faintest scent tells it about everything in the area. It’s like it can see with its nose!",
    height: "0.8 m",
    weight: "5 kg",
    ability: ["Sweet Veil", "Unburden"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/685.png",
  },
  {
    name: "Inkay",
    type: ["Dark", "Psychic"],
    base: { HP: 53, ATK: 54, DEF: 53, SATK: 37, SDEF: 46, SPD: 45 },
    description:
      "When exchanging information with others of its kind, it flashes the light-emitting spots on its body in a complex rhythm.",
    height: "0.4 m",
    weight: "3.5 kg",
    ability: ["Contrary", "Suction Cups", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/686.png",
  },
  {
    name: "Malamar",
    type: ["Dark", "Psychic"],
    base: { HP: 86, ATK: 92, DEF: 88, SATK: 68, SDEF: 75, SPD: 73 },
    description:
      "It flashes the pattern on its torso to control its prey and draw them in. The edges of its fins are supremely sharp.",
    height: "1.5 m",
    weight: "47 kg",
    ability: ["Contrary", "Suction Cups", "Infiltrator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/687.png",
  },
  {
    name: "Binacle",
    type: ["Rock", "Water"],
    base: { HP: 42, ATK: 52, DEF: 67, SATK: 39, SDEF: 56, SPD: 50 },
    description:
      "They stretch and then contract, yanking their rocks along with them in bold hops. They eat seaweed that washes up on the shoreline.",
    height: "0.5 m",
    weight: "31 kg",
    ability: ["Tough Claws", "Sniper", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/688.png",
  },
  {
    name: "Barbaracle",
    type: ["Rock", "Water"],
    base: { HP: 72, ATK: 105, DEF: 115, SATK: 54, SDEF: 86, SPD: 68 },
    description:
      "Barbaracle’s legs and hands have minds of their own, and they will move independently. But they usually follow the head’s orders.",
    height: "1.3 m",
    weight: "96 kg",
    ability: ["Tough Claws", "Sniper", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/689.png",
  },
  {
    name: "Skrelp",
    type: ["Poison", "Water"],
    base: { HP: 50, ATK: 60, DEF: 60, SATK: 60, SDEF: 60, SPD: 30 },
    description:
      "It’s not good at swimming, so it clings to the seaweed. In the Alola region, it’s often found near Dhelmise.",
    height: "0.5 m",
    weight: "7.3 kg",
    ability: ["Poison Point", "Poison Touch", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/690.png",
  },
  {
    name: "Dragalge",
    type: ["Poison", "Dragon"],
    base: { HP: 65, ATK: 75, DEF: 90, SATK: 97, SDEF: 123, SPD: 44 },
    description:
      "It blends in with seaweed to ambush its prey and then takes them down with a poisonous liquid strong enough to melt metal.",
    height: "1.8 m",
    weight: "81.5 kg",
    ability: ["Poison Point", "Poison Touch", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/691.png",
  },
  {
    name: "Clauncher",
    type: ["Water"],
    base: { HP: 50, ATK: 53, DEF: 62, SATK: 58, SDEF: 63, SPD: 44 },
    description:
      "It moves around by jetting water from its right pincer. It has a poor sense of balance, so it’s terrible at swimming straight.",
    height: "0.5 m",
    weight: "8.3 kg",
    ability: ["Mega Launcher"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/692.png",
  },
  {
    name: "Clawitzer",
    type: ["Water"],
    base: { HP: 71, ATK: 73, DEF: 88, SATK: 120, SDEF: 89, SPD: 59 },
    description:
      "Its right arm is packed with meat. When its pincer falls off, it’s exported to be used as a cooking ingredient.",
    height: "1.3 m",
    weight: "35.3 kg",
    ability: ["Mega Launcher"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/693.png",
  },
  {
    name: "Helioptile",
    type: ["Electric", "Normal"],
    base: { HP: 44, ATK: 38, DEF: 33, SATK: 61, SDEF: 43, SPD: 70 },
    description:
      "The frills on either side of its head have cells that generate electricity when exposed to sunlight.",
    height: "0.5 m",
    weight: "6 kg",
    ability: ["Dry Skin", "Sand Veil", "Solar Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/694.png",
  },
  {
    name: "Heliolisk",
    type: ["Electric", "Normal"],
    base: { HP: 62, ATK: 55, DEF: 52, SATK: 109, SDEF: 94, SPD: 109 },
    description:
      "It stimulates its muscles with electricity, boosting the strength in its legs and enabling it to run 100 yards in five seconds.",
    height: "1 m",
    weight: "21 kg",
    ability: ["Dry Skin", "Sand Veil", "Solar Power"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/695.png",
  },
  {
    name: "Tyrunt",
    type: ["Rock", "Dragon"],
    base: { HP: 58, ATK: 89, DEF: 77, SATK: 45, SDEF: 45, SPD: 48 },
    description:
      "Tyrunt is spoiled and selfish. It may just be trying to frolic, but sometimes the ones it’s trying to frolic with are gravely injured.",
    height: "0.8 m",
    weight: "26 kg",
    ability: ["Strong Jaw", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/696.png",
  },
  {
    name: "Tyrantrum",
    type: ["Rock", "Dragon"],
    base: { HP: 82, ATK: 121, DEF: 119, SATK: 69, SDEF: 59, SPD: 71 },
    description:
      "The king of the ancient world, it can easily crunch a car with the devastating strength of its enormous jaws.",
    height: "2.5 m",
    weight: "270 kg",
    ability: ["Strong Jaw", "Rock Head"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/697.png",
  },
  {
    name: "Amaura",
    type: ["Rock", "Ice"],
    base: { HP: 77, ATK: 59, DEF: 50, SATK: 67, SDEF: 63, SPD: 46 },
    description:
      "Amaura was restored successfully, but it’s not expected to live long because of the heat of the current environment.",
    height: "1.3 m",
    weight: "25.2 kg",
    ability: ["Refrigerate", "Snow Warning"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/698.png",
  },
  {
    name: "Aurorus",
    type: ["Rock", "Ice"],
    base: { HP: 123, ATK: 77, DEF: 72, SATK: 99, SDEF: 92, SPD: 58 },
    description:
      "This usually quiet and kindly Pokémon has a surface temperature of around –240 degrees Fahrenheit.",
    height: "2.7 m",
    weight: "225 kg",
    ability: ["Refrigerate", "Snow Warning"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/699.png",
  },
  {
    name: "Sylveon",
    type: ["Fairy"],
    base: { HP: 95, ATK: 65, DEF: 65, SATK: 110, SDEF: 130, SPD: 60 },
    description:
      "Sylveon wraps its ribbonlike feelers around its Trainer’s arm because this touch enables it to read its Trainer’s feelings.",
    height: "1 m",
    weight: "23.5 kg",
    ability: ["Cute Charm", "Pixilate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/700.png",
  },
  {
    name: "Hawlucha",
    type: ["Fighting", "Flying"],
    base: { HP: 78, ATK: 92, DEF: 75, SATK: 74, SDEF: 63, SPD: 118 },
    description:
      "In combat, Hawlucha leaps nimbly about, taking advantage of its opponents’ blind spots. It’s also skilled at using superb submission holds.",
    height: "0.8 m",
    weight: "21.5 kg",
    ability: ["Limber", "Unburden", "Mold Breaker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/701.png",
  },
  {
    name: "Dedenne",
    type: ["Electric", "Fairy"],
    base: { HP: 67, ATK: 58, DEF: 57, SATK: 81, SDEF: 67, SPD: 101 },
    description:
      "Its upper whiskers are sensors that survey its surroundings. Its lower whiskers are organs that shoot electricity.",
    height: "0.2 m",
    weight: "2.2 kg",
    ability: ["Cheek Pouch", "Pickup", "Plus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/702.png",
  },
  {
    name: "Carbink",
    type: ["Rock", "Fairy"],
    base: { HP: 50, ATK: 50, DEF: 150, SATK: 50, SDEF: 150, SPD: 50 },
    description:
      "To keep the jewels on their bodies free of tarnish, packs of Carbink use their soft manes to polish one another’s jewels.",
    height: "0.3 m",
    weight: "5.7 kg",
    ability: ["Clear Body", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/703.png",
  },
  {
    name: "Goomy",
    type: ["Dragon"],
    base: { HP: 45, ATK: 50, DEF: 35, SATK: 55, SDEF: 75, SPD: 40 },
    description:
      "Its body is mostly water. If it dries out, it will die, so it’s always sitting with perfect stillness in the shade.",
    height: "0.3 m",
    weight: "2.8 kg",
    ability: ["Sap Sipper", "Hydration", "Gooey"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/704.png",
  },
  {
    name: "Sliggoo",
    type: ["Dragon"],
    base: { HP: 68, ATK: 75, DEF: 53, SATK: 83, SDEF: 113, SPD: 60 },
    description:
      "Its entire body is covered with gooey mucus that can dissolve anything. Be sure to put gloves on if you’re going to touch it.",
    height: "0.8 m",
    weight: "17.5 kg",
    ability: ["Sap Sipper", "Hydration", "Gooey"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/705.png",
  },
  {
    name: "Goodra",
    type: ["Dragon"],
    base: { HP: 90, ATK: 100, DEF: 70, SATK: 110, SDEF: 150, SPD: 80 },
    description:
      "Underneath its slimy skin is a thick layer of fat, and the combination of the two makes enemies’ attacks slide right off.",
    height: "2 m",
    weight: "150.5 kg",
    ability: ["Sap Sipper", "Hydration", "Gooey"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/706.png",
  },
  {
    name: "Klefki",
    type: ["Steel", "Fairy"],
    base: { HP: 57, ATK: 80, DEF: 91, SATK: 80, SDEF: 87, SPD: 75 },
    description:
      "Long ago it lived in mines, but once the minerals that make up its diet became scarcer, Klefki began appearing in human settlements.",
    height: "0.2 m",
    weight: "3 kg",
    ability: ["Prankster", "Magician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/707.png",
  },
  {
    name: "Phantump",
    type: ["Ghost", "Grass"],
    base: { HP: 43, ATK: 70, DEF: 48, SATK: 50, SDEF: 60, SPD: 38 },
    description:
      "An unknown spirit came to lodge in a tree stump, creating this Pokémon. A cure-all can be made from an infusion of its green leaves.",
    height: "0.4 m",
    weight: "7 kg",
    ability: ["Natural Cure", "Frisk", "Harvest"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/708.png",
  },
  {
    name: "Trevenant",
    type: ["Ghost", "Grass"],
    base: { HP: 85, ATK: 110, DEF: 76, SATK: 65, SDEF: 82, SPD: 56 },
    description:
      "This Pokémon controls trees via roots stretching from its feet, and it will attack anyone that dares to ravage the forest.",
    height: "1.5 m",
    weight: "71 kg",
    ability: ["Natural Cure", "Frisk", "Harvest"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/709.png",
  },
  {
    name: "Pumpkaboo",
    type: ["Ghost", "Grass"],
    base: { HP: 59, ATK: 66, DEF: 70, SATK: 44, SDEF: 55, SPD: 41 },
    description:
      "It is said to carry wandering spirits to the place where they belong so they can move on.",
    height: "0.4 m",
    weight: "5 kg",
    ability: ["Pickup", "Frisk", "Insomnia"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/710.png",
  },
  {
    name: "Gourgeist",
    type: ["Ghost", "Grass"],
    base: { HP: 85, ATK: 100, DEF: 122, SATK: 58, SDEF: 75, SPD: 54 },
    description:
      "It enwraps its prey in its hairlike arms. It sings joyfully as it observes the suffering of its prey.",
    height: "0.9 m",
    weight: "12.5 kg",
    ability: ["Pickup", "Frisk", "Insomnia"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/711.png",
  },
  {
    name: "Bergmite",
    type: ["Ice"],
    base: { HP: 55, ATK: 69, DEF: 85, SATK: 32, SDEF: 35, SPD: 28 },
    description:
      "Using air of -150 degrees Fahrenheit, they freeze opponents solid. They live in herds above the snow line on mountains.",
    height: "1 m",
    weight: "99.5 kg",
    ability: ["Own Tempo", "Ice Body", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/712.png",
  },
  {
    name: "Avalugg",
    type: ["Ice"],
    base: { HP: 95, ATK: 117, DEF: 184, SATK: 44, SDEF: 46, SPD: 28 },
    description:
      "The way several Bergmite huddle on its back makes it look like an aircraft carrier made of ice.",
    height: "2 m",
    weight: "505 kg",
    ability: ["Own Tempo", "Ice Body", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/713.png",
  },
  {
    name: "Noibat",
    type: ["Flying", "Dragon"],
    base: { HP: 40, ATK: 30, DEF: 35, SATK: 45, SDEF: 40, SPD: 55 },
    description:
      "It flies around in search of fruit to eat. It uses ultrasonic waves to detect which fruits are ripe.",
    height: "0.5 m",
    weight: "8 kg",
    ability: ["Frisk", "Infiltrator", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/714.png",
  },
  {
    name: "Noivern",
    type: ["Flying", "Dragon"],
    base: { HP: 85, ATK: 70, DEF: 80, SATK: 97, SDEF: 80, SPD: 123 },
    description:
      "This hot-blooded Pokémon attacks anything it sees with ultrasonic waves that can crush boulders.",
    height: "1.5 m",
    weight: "85 kg",
    ability: ["Frisk", "Infiltrator", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/715.png",
  },
  {
    name: "Xerneas",
    type: ["Fairy"],
    base: { HP: 126, ATK: 131, DEF: 95, SATK: 131, SDEF: 98, SPD: 99 },
    description:
      "When the horns on its head shine in seven colors, it is said to be sharing everlasting life.",
    height: "3 m",
    weight: "215 kg",
    ability: ["Fairy Aura"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/716.png",
  },
  {
    name: "Yveltal",
    type: ["Dark", "Flying"],
    base: { HP: 126, ATK: 131, DEF: 95, SATK: 131, SDEF: 98, SPD: 99 },
    description:
      "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
    height: "5.8 m",
    weight: "203 kg",
    ability: ["Dark Aura"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/717.png",
  },
  {
    name: "Zygarde",
    type: ["Dragon", "Ground"],
    base: { HP: 108, ATK: 100, DEF: 121, SATK: 81, SDEF: 95, SPD: 95 },
    description:
      "Some say it can change to an even more powerful form when battling those who threaten the ecosystem.",
    height: "5 m",
    weight: "305 kg",
    ability: ["Aura Break"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/718.png",
  },
  {
    name: "Diancie",
    type: ["Rock", "Fairy"],
    base: { HP: 50, ATK: 100, DEF: 150, SATK: 100, SDEF: 150, SPD: 50 },
    description:
      "It can instantly create many diamonds by compressing the carbon in the air between its hands.",
    height: "0.7 m",
    weight: "8.8 kg",
    ability: ["Clear Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/719.png",
  },
  {
    name: "Hoopa",
    type: ["Psychic", "Ghost"],
    base: { HP: 80, ATK: 110, DEF: 60, SATK: 150, SDEF: 130, SPD: 70 },
    description:
      "It is said to be able to seize anything it desires with its six rings and six huge arms. With its power sealed, it is transformed into a much smaller form.",
    height: "0.5 m",
    weight: "9 kg",
    ability: ["Magician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/720.png",
  },
  {
    name: "Volcanion",
    type: ["Fire", "Water"],
    base: { HP: 80, ATK: 110, DEF: 120, SATK: 130, SDEF: 90, SPD: 70 },
    description:
      "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
    height: "1.7 m",
    weight: "195 kg",
    ability: ["Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/721.png",
  },
  {
    name: "Rowlet",
    type: ["Grass", "Flying"],
    base: { HP: 68, ATK: 55, DEF: 55, SATK: 50, SDEF: 50, SPD: 42 },
    description:
      "It feels relaxed in tight, dark places and has been known to use its Trainer’s pocket or bag as a nest.",
    height: "0.3 m",
    weight: "1.5 kg",
    ability: ["Overgrow", "Long Reach"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/722.png",
  },
  {
    name: "Dartrix",
    type: ["Grass", "Flying"],
    base: { HP: 78, ATK: 75, DEF: 75, SATK: 70, SDEF: 70, SPD: 52 },
    description:
      "Supremely sensitive to the presence of others, it can detect opponents standing behind it, flinging its sharp feathers to take them out.",
    height: "0.7 m",
    weight: "16 kg",
    ability: ["Overgrow", "Long Reach"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/723.png",
  },
  {
    name: "Decidueye",
    type: ["Grass", "Ghost"],
    base: { HP: 78, ATK: 107, DEF: 75, SATK: 100, SDEF: 100, SPD: 70 },
    description:
      "Decidueye can nock and fire an arrow at an enemy in a tenth of a second, so its battles are decided in the blink of an eye.",
    height: "1.6 m",
    weight: "36.6 kg",
    ability: ["Overgrow", "Long Reach"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/724.png",
  },
  {
    name: "Litten",
    type: ["Fire"],
    base: { HP: 45, ATK: 65, DEF: 40, SATK: 60, SDEF: 40, SPD: 70 },
    description:
      "Its coat regrows twice a year. When the time comes, Litten sets its own body on fire and burns away the old fur.",
    height: "0.4 m",
    weight: "4.3 kg",
    ability: ["Blaze", "Intimidate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/725.png",
  },
  {
    name: "Torracat",
    type: ["Fire"],
    base: { HP: 65, ATK: 85, DEF: 50, SATK: 80, SDEF: 50, SPD: 90 },
    description:
      "When its mane is standing on end, you can tell it’s feeling good. When it isn’t feeling well, its fur will lie down flat.",
    height: "0.7 m",
    weight: "25 kg",
    ability: ["Blaze", "Intimidate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/726.png",
  },
  {
    name: "Incineroar",
    type: ["Fire", "Dark"],
    base: { HP: 95, ATK: 115, DEF: 90, SATK: 80, SDEF: 90, SPD: 60 },
    description:
      "When its fighting spirit is set alight, the flames around its waist become especially intense.",
    height: "1.8 m",
    weight: "83 kg",
    ability: ["Blaze", "Intimidate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/727.png",
  },
  {
    name: "Popplio",
    type: ["Water"],
    base: { HP: 50, ATK: 54, DEF: 54, SATK: 66, SDEF: 56, SPD: 40 },
    description:
      "Popplio gets on top of its bouncy water balloons to jump higher. It’s quite the acrobatic fighter!",
    height: "0.4 m",
    weight: "7.5 kg",
    ability: ["Torrent", "Liquid Voice"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/728.png",
  },
  {
    name: "Brionne",
    type: ["Water"],
    base: { HP: 60, ATK: 69, DEF: 69, SATK: 91, SDEF: 81, SPD: 50 },
    description:
      "It attacks by smacking its enemies with the exploding water balloons that it creates.",
    height: "0.6 m",
    weight: "17.5 kg",
    ability: ["Torrent", "Liquid Voice"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/729.png",
  },
  {
    name: "Primarina",
    type: ["Water", "Fairy"],
    base: { HP: 80, ATK: 74, DEF: 74, SATK: 126, SDEF: 116, SPD: 60 },
    description:
      "Also known as a songstress, it has a fantastical look on moonlit nights when it leads its colony in song.",
    height: "1.8 m",
    weight: "44 kg",
    ability: ["Torrent", "Liquid Voice"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/730.png",
  },
  {
    name: "Pikipek",
    type: ["Normal", "Flying"],
    base: { HP: 35, ATK: 75, DEF: 30, SATK: 30, SDEF: 30, SPD: 65 },
    description:
      "It may look spindly, but its neck muscles are heavy-duty. It can peck at a tree 16 times per second!",
    height: "0.3 m",
    weight: "1.2 kg",
    ability: ["Keen Eye", "Skill Link", "Pickup"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/731.png",
  },
  {
    name: "Trumbeak",
    type: ["Normal", "Flying"],
    base: { HP: 55, ATK: 85, DEF: 50, SATK: 40, SDEF: 50, SPD: 75 },
    description:
      "From its mouth, it fires the seeds of berries it has eaten. The scattered seeds give rise to new plants.",
    height: "0.6 m",
    weight: "14.8 kg",
    ability: ["Keen Eye", "Skill Link", "Pickup"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/732.png",
  },
  {
    name: "Toucannon",
    type: ["Normal", "Flying"],
    base: { HP: 80, ATK: 120, DEF: 75, SATK: 75, SDEF: 75, SPD: 60 },
    description:
      "Known for forming harmonious couples, this Pokémon is brought to wedding ceremonies as a good luck charm.",
    height: "1.1 m",
    weight: "26 kg",
    ability: ["Keen Eye", "Skill Link", "Sheer Force"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/733.png",
  },
  {
    name: "Yungoos",
    type: ["Normal"],
    base: { HP: 48, ATK: 70, DEF: 30, SATK: 30, SDEF: 30, SPD: 45 },
    description:
      "Although it will eat anything, it prefers fresh living things, so it marches down streets in search of prey.",
    height: "0.4 m",
    weight: "6 kg",
    ability: ["Stakeout", "Strong Jaw", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/734.png",
  },
  {
    name: "Gumshoos",
    type: ["Normal"],
    base: { HP: 88, ATK: 110, DEF: 60, SATK: 55, SDEF: 60, SPD: 45 },
    description:
      "Patient by nature, this Pokémon loses control of itself and pounces when it spots its favorite meal—Rattata!",
    height: "0.7 m",
    weight: "14.2 kg",
    ability: ["Stakeout", "Strong Jaw", "Adaptability"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/735.png",
  },
  {
    name: "Grubbin",
    type: ["Bug"],
    base: { HP: 47, ATK: 62, DEF: 45, SATK: 55, SDEF: 45, SPD: 46 },
    description:
      "It spits a sticky thread to stop opponents in their tracks, and then it grabs them in its sharp, sturdy mandibles to take them down.",
    height: "0.4 m",
    weight: "4.4 kg",
    ability: ["Swarm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/736.png",
  },
  {
    name: "Charjabug",
    type: ["Bug", "Electric"],
    base: { HP: 57, ATK: 82, DEF: 95, SATK: 55, SDEF: 75, SPD: 36 },
    description:
      "Its stout shell provides excellent defense from attacks. It uses electricity on persistent opponents.",
    height: "0.5 m",
    weight: "10.5 kg",
    ability: ["Battery"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/737.png",
  },
  {
    name: "Vikavolt",
    type: ["Bug", "Electric"],
    base: { HP: 77, ATK: 70, DEF: 90, SATK: 145, SDEF: 75, SPD: 43 },
    description:
      "Vikavolt flusters opponents with acrobatic flying maneuvers. This creates an opening for it to deliver an electric beam attack.",
    height: "1.5 m",
    weight: "45 kg",
    ability: ["Levitate"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/738.png",
  },
  {
    name: "Crabrawler",
    type: ["Fighting"],
    base: { HP: 47, ATK: 82, DEF: 57, SATK: 42, SDEF: 47, SPD: 63 },
    description:
      "Crabrawler has been known to mistake Exeggutor for a coconut tree and climb it. The enraged Exeggutor shakes it off and stomps it.",
    height: "0.6 m",
    weight: "7 kg",
    ability: ["Hyper Cutter", "Iron Fist", "Anger Point"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/739.png",
  },
  {
    name: "Crabominable",
    type: ["Fighting", "Ice"],
    base: { HP: 97, ATK: 132, DEF: 77, SATK: 62, SDEF: 67, SPD: 43 },
    description:
      "Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches.",
    height: "1.7 m",
    weight: "180 kg",
    ability: ["Hyper Cutter", "Iron Fist", "Anger Point"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/740.png",
  },
  {
    name: "Oricorio",
    type: ["Fire", "Flying"],
    base: { HP: 75, ATK: 70, DEF: 70, SATK: 98, SDEF: 70, SPD: 93 },
    description:
      "This Oricorio has drunk red nectar. If its Trainer gives the wrong order, this passionate Pokémon becomes fiercely angry.",
    height: "0.6 m",
    weight: "3.4 kg",
    ability: ["Dancer"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/741.png",
  },
  {
    name: "Cutiefly",
    type: ["Bug", "Fairy"],
    base: { HP: 40, ATK: 45, DEF: 40, SATK: 55, SDEF: 40, SPD: 84 },
    description:
      "Cutiefly can pick up the auras of living things. It skillfully reads those auras to predict its foes’ movements and make fools of them.",
    height: "0.1 m",
    weight: "0.2 kg",
    ability: ["Honey Gather", "Shield Dust", "Sweet Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/742.png",
  },
  {
    name: "Ribombee",
    type: ["Bug", "Fairy"],
    base: { HP: 60, ATK: 55, DEF: 60, SATK: 95, SDEF: 70, SPD: 124 },
    description:
      "It can predict the weather from moisture levels and wind direction. Ribombee only reveals itself when there are a few clear days in a row.",
    height: "0.2 m",
    weight: "0.5 kg",
    ability: ["Honey Gather", "Shield Dust", "Sweet Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/743.png",
  },
  {
    name: "Rockruff",
    type: ["Rock"],
    base: { HP: 45, ATK: 65, DEF: 40, SATK: 30, SDEF: 40, SPD: 60 },
    description:
      "When it rubs the rocks on its neck against you, that’s proof of its love for you. However, the rocks are sharp, so the gesture is quite painful!",
    height: "0.5 m",
    weight: "9.2 kg",
    ability: ["Keen Eye", "Vital Spirit", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/744.png",
  },
  {
    name: "Lycanroc",
    type: ["Rock"],
    base: { HP: 75, ATK: 115, DEF: 65, SATK: 55, SDEF: 65, SPD: 112 },
    description:
      "The rocks in its mane are sharper than a knife. Fragments that break off are treasured as good luck charms.",
    height: "0.8 m",
    weight: "25 kg",
    ability: ["Keen Eye", "Sand Rush", "Steadfast"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/745.png",
  },
  {
    name: "Wishiwashi",
    type: ["Water"],
    base: { HP: 45, ATK: 20, DEF: 20, SATK: 25, SDEF: 25, SPD: 40 },
    description:
      "When it’s in a jam, its shining eyes attract others of its kind. The light from its eyes is visible almost 25 miles away.",
    height: "0.2 m",
    weight: "0.3 kg",
    ability: ["Schooling"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/746.png",
  },
  {
    name: "Mareanie",
    type: ["Poison", "Water"],
    base: { HP: 50, ATK: 53, DEF: 62, SATK: 43, SDEF: 52, SPD: 45 },
    description:
      "Aside from its head, its body parts regenerate quickly if they’re cut off. After a good night’s sleep, Mareanie is back to normal.",
    height: "0.4 m",
    weight: "8 kg",
    ability: ["Merciless", "Limber", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/747.png",
  },
  {
    name: "Toxapex",
    type: ["Poison", "Water"],
    base: { HP: 50, ATK: 63, DEF: 152, SATK: 53, SDEF: 142, SPD: 35 },
    description:
      "With its 12 legs, it creates a dome to shelter within. The flow of the tides doesn’t affect Toxapex in there, so it’s very comfortable.",
    height: "0.7 m",
    weight: "14.5 kg",
    ability: ["Merciless", "Limber", "Regenerator"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/748.png",
  },
  {
    name: "Mudbray",
    type: ["Ground"],
    base: { HP: 70, ATK: 100, DEF: 70, SATK: 45, SDEF: 55, SPD: 45 },
    description:
      "Possessing mighty power, Mudbray can be loaded with 50 times its own body weight and will be totally fine.",
    height: "1 m",
    weight: "110 kg",
    ability: ["Own Tempo", "Stamina", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/749.png",
  },
  {
    name: "Mudsdale",
    type: ["Ground"],
    base: { HP: 100, ATK: 125, DEF: 100, SATK: 55, SDEF: 85, SPD: 35 },
    description:
      "It can trudge mountain roads without rest for three days and three nights, all the while dragging a 10-ton load.",
    height: "2.5 m",
    weight: "920 kg",
    ability: ["Own Tempo", "Stamina", "Inner Focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/750.png",
  },
  {
    name: "Dewpider",
    type: ["Water", "Bug"],
    base: { HP: 38, ATK: 40, DEF: 52, SATK: 40, SDEF: 72, SPD: 27 },
    description:
      "It can only breathe oxygen that has dissolved in water, so it wears a water bubble on its head when it walks around on land.",
    height: "0.3 m",
    weight: "4 kg",
    ability: ["Water Bubble", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/751.png",
  },
  {
    name: "Araquanid",
    type: ["Water", "Bug"],
    base: { HP: 68, ATK: 70, DEF: 92, SATK: 50, SDEF: 132, SPD: 42 },
    description:
      "It has a habit of storing things it values in its water bubble. If its Trainer doesn’t watch out, Araquanid will try to put them in its bubble!",
    height: "1.8 m",
    weight: "82 kg",
    ability: ["Water Bubble", "Water Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/752.png",
  },
  {
    name: "Fomantis",
    type: ["Grass"],
    base: { HP: 40, ATK: 55, DEF: 35, SATK: 50, SDEF: 35, SPD: 35 },
    description:
      "It loves the sunshine. When it basks in the sunlight regularly, it grows up with vivid coloration.",
    height: "0.3 m",
    weight: "1.5 kg",
    ability: ["Leaf Guard", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/753.png",
  },
  {
    name: "Lurantis",
    type: ["Grass"],
    base: { HP: 70, ATK: 105, DEF: 90, SATK: 80, SDEF: 90, SPD: 45 },
    description:
      "As it slashes into its enemies, it looks like it’s dancing. Its elegant appearance has led some to call it the most glamorous Grass Pokémon.",
    height: "0.9 m",
    weight: "18.5 kg",
    ability: ["Leaf Guard", "Contrary"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/754.png",
  },
  {
    name: "Morelull",
    type: ["Grass", "Fairy"],
    base: { HP: 40, ATK: 35, DEF: 55, SATK: 65, SDEF: 75, SPD: 15 },
    description:
      "It likes damp dark places. When night falls, the spores filling the caps of its mushrooms glow.",
    height: "0.2 m",
    weight: "1.5 kg",
    ability: ["Illuminate", "Effect Spore", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/755.png",
  },
  {
    name: "Shiinotic",
    type: ["Grass", "Fairy"],
    base: { HP: 60, ATK: 45, DEF: 80, SATK: 90, SDEF: 100, SPD: 30 },
    description:
      "When it starts fighting for territory with Parasect, the entire area gets completely coated in spores!",
    height: "1 m",
    weight: "11.5 kg",
    ability: ["Illuminate", "Effect Spore", "Rain Dish"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/756.png",
  },
  {
    name: "Salandit",
    type: ["Poison", "Fire"],
    base: { HP: 48, ATK: 44, DEF: 40, SATK: 71, SDEF: 40, SPD: 77 },
    description:
      "It weakens opponents and sends them reeling with its poisonous gas. Salandit doesn’t deal well with Spinda, since it’s always reeling.",
    height: "0.6 m",
    weight: "4.8 kg",
    ability: ["Corrosion", "Oblivious"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/757.png",
  },
  {
    name: "Salazzle",
    type: ["Poison", "Fire"],
    base: { HP: 68, ATK: 64, DEF: 60, SATK: 111, SDEF: 60, SPD: 117 },
    description:
      "It punishes Salandit that couldn’t bring it food with a fierce slap of its flame-spewing palm.",
    height: "1.2 m",
    weight: "22.2 kg",
    ability: ["Corrosion", "Oblivious"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/758.png",
  },
  {
    name: "Stufful",
    type: ["Normal", "Fighting"],
    base: { HP: 70, ATK: 75, DEF: 50, SATK: 45, SDEF: 50, SPD: 50 },
    description:
      "Stufful hates to be hugged or touched in any way. It will squirm, thrash, and resist with amazing power.",
    height: "0.5 m",
    weight: "6.8 kg",
    ability: ["Fluffy", "Klutz", "Cute Charm"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/759.png",
  },
  {
    name: "Bewear",
    type: ["Normal", "Fighting"],
    base: { HP: 120, ATK: 125, DEF: 80, SATK: 55, SDEF: 60, SPD: 60 },
    description:
      "It boasts tremendous physical strength. Many people call it the most dangerous Pokémon in the Alola region.",
    height: "2.1 m",
    weight: "135 kg",
    ability: ["Fluffy", "Klutz", "Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/760.png",
  },
  {
    name: "Bounsweet",
    type: ["Grass"],
    base: { HP: 42, ATK: 30, DEF: 38, SATK: 30, SDEF: 38, SPD: 32 },
    description:
      "It tries to resist being swallowed by a bird Pokémon by spinning the sepals on its head. It’s usually a fruitless attempt.",
    height: "0.3 m",
    weight: "3.2 kg",
    ability: ["Leaf Guard", "Oblivious", "Sweet Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/761.png",
  },
  {
    name: "Steenee",
    type: ["Grass"],
    base: { HP: 52, ATK: 40, DEF: 48, SATK: 40, SDEF: 48, SPD: 62 },
    description:
      "It bounces around, swinging the sepals on its head with abandon. They’re quite painful when they smack you!",
    height: "0.7 m",
    weight: "8.2 kg",
    ability: ["Leaf Guard", "Oblivious", "Sweet Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/762.png",
  },
  {
    name: "Tsareena",
    type: ["Grass"],
    base: { HP: 72, ATK: 120, DEF: 98, SATK: 50, SDEF: 98, SPD: 72 },
    description:
      "A Pokémon with an aggressive personality and a mastery of kicking, it cackles every time it kicks an opponent.",
    height: "1.2 m",
    weight: "21.4 kg",
    ability: ["Leaf Guard", "Queenly Majesty", "Sweet Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/763.png",
  },
  {
    name: "Comfey",
    type: ["Fairy"],
    base: { HP: 51, ATK: 52, DEF: 90, SATK: 82, SDEF: 110, SPD: 100 },
    description:
      "It picks flowers and sticks them to its body with fluids it produces. The aroma that wafts from its petals has a healing effect.",
    height: "0.1 m",
    weight: "0.3 kg",
    ability: ["Flower Veil", "Triage", "Natural Cure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/764.png",
  },
  {
    name: "Oranguru",
    type: ["Normal", "Psychic"],
    base: { HP: 90, ATK: 60, DEF: 80, SATK: 90, SDEF: 110, SPD: 60 },
    description:
      "Oranguru don’t get along with each other, so they’re always engaging in battles of wits to decide which one is superior.",
    height: "1.5 m",
    weight: "76 kg",
    ability: ["Inner Focus", "Telepathy", "Symbiosis"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/765.png",
  },
  {
    name: "Passimian",
    type: ["Fighting"],
    base: { HP: 100, ATK: 120, DEF: 90, SATK: 40, SDEF: 60, SPD: 80 },
    description:
      "Berries are its weapons as well as the staple of its diet. The one that can throw a berry the farthest is the boss of the troop.",
    height: "2 m",
    weight: "82.8 kg",
    ability: ["Receiver", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/766.png",
  },
  {
    name: "Wimpod",
    type: ["Bug", "Water"],
    base: { HP: 25, ATK: 35, DEF: 40, SATK: 20, SDEF: 30, SPD: 80 },
    description:
      "An astonishingly cowardly Pokémon, Wimpod will whir its legs at high speeds to run away if anything comes near it.",
    height: "0.5 m",
    weight: "12 kg",
    ability: ["Wimp Out"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/767.png",
  },
  {
    name: "Golisopod",
    type: ["Bug", "Water"],
    base: { HP: 75, ATK: 125, DEF: 140, SATK: 60, SDEF: 90, SPD: 40 },
    description:
      "Its claws, which it can extend and retract at will, are its greatest weapons. Golisopod is sometimes accompanied by Wimpod.",
    height: "2 m",
    weight: "108 kg",
    ability: ["Emergency Exit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/768.png",
  },
  {
    name: "Sandygast",
    type: ["Ghost", "Ground"],
    base: { HP: 55, ATK: 55, DEF: 80, SATK: 70, SDEF: 45, SPD: 15 },
    description:
      "If you build sand mounds when you’re playing, destroy them before you go home, or they may get possessed and become Sandygast.",
    height: "0.5 m",
    weight: "70 kg",
    ability: ["Water Compaction", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/769.png",
  },
  {
    name: "Palossand",
    type: ["Ghost", "Ground"],
    base: { HP: 85, ATK: 75, DEF: 110, SATK: 100, SDEF: 75, SPD: 35 },
    description:
      "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality.",
    height: "1.3 m",
    weight: "250 kg",
    ability: ["Water Compaction", "Sand Veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/770.png",
  },
  {
    name: "Pyukumuku",
    type: ["Water"],
    base: { HP: 55, ATK: 60, DEF: 130, SATK: 30, SDEF: 130, SPD: 5 },
    description:
      "Its entire body is covered in its own slime. If you accidentally step on one, you’ll slip, and it will get mad and smack you!",
    height: "0.3 m",
    weight: "1.2 kg",
    ability: ["Innards Out", "Unaware"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/771.png",
  },
  {
    name: "Type: Null",
    type: ["Normal"],
    base: { HP: 95, ATK: 95, DEF: 95, SATK: 95, SDEF: 95, SPD: 59 },
    description:
      "There’s danger of its going on a rampage, so its true power is sealed away beneath its control mask.",
    height: "1.9 m",
    weight: "120.5 kg",
    ability: ["Battle Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/772.png",
  },
  {
    name: "Silvally",
    type: ["Normal"],
    base: { HP: 95, ATK: 95, DEF: 95, SATK: 95, SDEF: 95, SPD: 95 },
    description:
      "Through the bond it formed with its Trainer, its will was strengthened, and it was able to destroy its control mask.",
    height: "2.3 m",
    weight: "100.5 kg",
    ability: ["Rks System"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/773.png",
  },
  {
    name: "Minior",
    type: ["Rock", "Flying"],
    base: { HP: 60, ATK: 60, DEF: 100, SATK: 60, SDEF: 100, SPD: 60 },
    description:
      "Although its outer shell is uncommonly durable, the shock of falling to the ground smashes the shell to smithereens.",
    height: "0.3 m",
    weight: "40 kg",
    ability: ["Shields Down"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/774.png",
  },
  {
    name: "Komala",
    type: ["Normal"],
    base: { HP: 65, ATK: 115, DEF: 65, SATK: 75, SDEF: 95, SPD: 65 },
    description:
      "It remains asleep from birth to death as a result of the sedative properties of the leaves that form its diet.",
    height: "0.4 m",
    weight: "19.9 kg",
    ability: ["Comatose"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/775.png",
  },
  {
    name: "Turtonator",
    type: ["Fire", "Dragon"],
    base: { HP: 60, ATK: 78, DEF: 135, SATK: 91, SDEF: 85, SPD: 36 },
    description:
      "Its exploding shell poses a real danger but is sensitive to moisture. On rainy days, Turtonator takes silent refuge in caves.",
    height: "2 m",
    weight: "212 kg",
    ability: ["Shell Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/776.png",
  },
  {
    name: "Togedemaru",
    type: ["Electric", "Steel"],
    base: { HP: 65, ATK: 98, DEF: 63, SATK: 40, SDEF: 73, SPD: 96 },
    description:
      "Its capacity to produce electricity is somewhat limited, so it gets charged up by letting lightning strike it!",
    height: "0.3 m",
    weight: "3.3 kg",
    ability: ["Iron Barbs", "Lightning Rod", "Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/777.png",
  },
  {
    name: "Mimikyu",
    type: ["Ghost", "Fairy"],
    base: { HP: 55, ATK: 90, DEF: 80, SATK: 50, SDEF: 105, SPD: 96 },
    description:
      "A gust of wind revealed what hides under this Pokémon’s rag to a passing Trainer, who went home and died painfully that very night.",
    height: "0.2 m",
    weight: "0.7 kg",
    ability: ["Disguise"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/778.png",
  },
  {
    name: "Bruxish",
    type: ["Water", "Psychic"],
    base: { HP: 68, ATK: 105, DEF: 70, SATK: 70, SDEF: 70, SPD: 92 },
    description:
      "Its skin is thick enough to fend off Mareanie’s spikes. With its robust teeth, Bruxish crunches up the spikes and eats them.",
    height: "0.9 m",
    weight: "19 kg",
    ability: ["Dazzling", "Strong Jaw", "Wonder Skin"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/779.png",
  },
  {
    name: "Drampa",
    type: ["Normal", "Dragon"],
    base: { HP: 78, ATK: 60, DEF: 85, SATK: 135, SDEF: 91, SPD: 36 },
    description:
      "It appears in towns and plays with the children. Drampa will protect kids when they’re in danger, so their moms don’t have to worry.",
    height: "3 m",
    weight: "185 kg",
    ability: ["Berserk", "Sap Sipper", "Cloud Nine"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/780.png",
  },
  {
    name: "Dhelmise",
    type: ["Ghost", "Grass"],
    base: { HP: 70, ATK: 131, DEF: 100, SATK: 86, SDEF: 90, SPD: 40 },
    description:
      "Its chain-like green seaweed can stretch outward for hundreds of yards. For some reason, it gets along well with Skrelp.",
    height: "3.9 m",
    weight: "210 kg",
    ability: ["Steelworker"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/781.png",
  },
  {
    name: "Jangmo-o",
    type: ["Dragon"],
    base: { HP: 45, ATK: 55, DEF: 65, SATK: 45, SDEF: 45, SPD: 45 },
    description:
      "It will never show an enemy its back in battle. Ancient warriors liked Jangmo-o for its valiant disposition and made it one of their own.",
    height: "0.6 m",
    weight: "29.7 kg",
    ability: ["Bulletproof", "Soundproof", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/782.png",
  },
  {
    name: "Hakamo-o",
    type: ["Dragon", "Fighting"],
    base: { HP: 55, ATK: 75, DEF: 90, SATK: 65, SDEF: 70, SPD: 65 },
    description:
      "The scales it sheds can be molded and processed to make pots and pans. They conduct heat well, so they’re a popular item.",
    height: "1.2 m",
    weight: "47 kg",
    ability: ["Bulletproof", "Soundproof", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/783.png",
  },
  {
    name: "Kommo-o",
    type: ["Dragon", "Fighting"],
    base: { HP: 75, ATK: 110, DEF: 125, SATK: 100, SDEF: 105, SPD: 85 },
    description:
      "It battles valiantly with its fists, which are armored in steel scales. Kommo-o specializes in uppercuts.",
    height: "1.6 m",
    weight: "78.2 kg",
    ability: ["Bulletproof", "Soundproof", "Overcoat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/784.png",
  },
  {
    name: "Tapu Koko",
    type: ["Electric", "Fairy"],
    base: { HP: 70, ATK: 115, DEF: 85, SATK: 95, SDEF: 75, SPD: 130 },
    description:
      "The lightning-wielding guardian deity of Melemele, Tapu Koko is brimming with curiosity and appears before people from time to time.",
    height: "1.8 m",
    weight: "20.5 kg",
    ability: ["Electric Surge", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/785.png",
  },
  {
    name: "Tapu Lele",
    type: ["Psychic", "Fairy"],
    base: { HP: 70, ATK: 85, DEF: 75, SATK: 130, SDEF: 115, SPD: 95 },
    description:
      "Although called a guardian deity, Tapu Lele is devoid of guilt about its cruel disposition and can be described as nature incarnate.",
    height: "1.2 m",
    weight: "18.6 kg",
    ability: ["Psychic Surge", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/786.png",
  },
  {
    name: "Tapu Bulu",
    type: ["Grass", "Fairy"],
    base: { HP: 70, ATK: 130, DEF: 115, SATK: 85, SDEF: 95, SPD: 75 },
    description:
      "It makes ringing sounds with its tail to let others know where it is, avoiding unneeded conflicts. This guardian deity of Ula’ula controls plants.",
    height: "1.9 m",
    weight: "45.5 kg",
    ability: ["Grassy Surge", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/787.png",
  },
  {
    name: "Tapu Fini",
    type: ["Water", "Fairy"],
    base: { HP: 70, ATK: 75, DEF: 115, SATK: 95, SDEF: 130, SPD: 85 },
    description:
      "Although it’s called a guardian deity, terrible calamities sometimes befall those who recklessly approach Tapu Fini.",
    height: "1.3 m",
    weight: "21.2 kg",
    ability: ["Misty Surge", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/788.png",
  },
  {
    name: "Cosmog",
    type: ["Psychic"],
    base: { HP: 43, ATK: 29, DEF: 31, SATK: 29, SDEF: 31, SPD: 37 },
    description:
      "Whether or not it’s a Pokémon from this world is a mystery. When it’s in a jam, it warps away to a safe place to hide.",
    height: "0.2 m",
    weight: "0.1 kg",
    ability: ["Unaware"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/789.png",
  },
  {
    name: "Cosmoem",
    type: ["Psychic"],
    base: { HP: 43, ATK: 29, DEF: 131, SATK: 29, SDEF: 131, SPD: 37 },
    description:
      "As it absorbs light, Cosmoem continues to grow. Its golden shell is surprisingly solid.",
    height: "0.1 m",
    weight: "999.9 kg",
    ability: ["Sturdy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/790.png",
  },
  {
    name: "Solgaleo",
    type: ["Psychic", "Steel"],
    base: { HP: 137, ATK: 137, DEF: 107, SATK: 113, SDEF: 89, SPD: 97 },
    description:
      "In writings from the distant past, it’s called by the name “the beast that devours the sun.”",
    height: "3.4 m",
    weight: "230 kg",
    ability: ["Full Metal Body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/791.png",
  },
  {
    name: "Lunala",
    type: ["Psychic", "Ghost"],
    base: { HP: 137, ATK: 113, DEF: 89, SATK: 137, SDEF: 107, SPD: 97 },
    description:
      "It sometimes summons unknown powers and life-forms here to this world from holes that lead to other worlds.",
    height: "4 m",
    weight: "120 kg",
    ability: ["Shadow Shield"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/792.png",
  },
  {
    name: "Nihilego",
    type: ["Rock", "Poison"],
    base: { HP: 109, ATK: 53, DEF: 47, SATK: 127, SDEF: 131, SPD: 103 },
    description:
      "It appeared in this world from an Ultra Wormhole. Nihilego appears to be a parasite that lives by feeding on people and Pokémon.",
    height: "1.2 m",
    weight: "55.5 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/793.png",
  },
  {
    name: "Buzzwole",
    type: ["Bug", "Fighting"],
    base: { HP: 107, ATK: 139, DEF: 139, SATK: 53, SDEF: 53, SPD: 79 },
    description:
      "Buzzwole goes around showing off its abnormally swollen muscles. It is one kind of Ultra Beast.",
    height: "2.4 m",
    weight: "333.6 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/794.png",
  },
  {
    name: "Pheromosa",
    type: ["Bug", "Fighting"],
    base: { HP: 71, ATK: 137, DEF: 37, SATK: 137, SDEF: 37, SPD: 151 },
    description:
      "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
    height: "1.8 m",
    weight: "25 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/795.png",
  },
  {
    name: "Xurkitree",
    type: ["Electric"],
    base: { HP: 83, ATK: 89, DEF: 71, SATK: 173, SDEF: 71, SPD: 83 },
    description:
      "They’ve been dubbed Ultra Beasts. Some of them stand unmoving, like trees, with their arms and legs stuck into the ground.",
    height: "3.8 m",
    weight: "100 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/796.png",
  },
  {
    name: "Celesteela",
    type: ["Steel", "Flying"],
    base: { HP: 97, ATK: 101, DEF: 103, SATK: 107, SDEF: 101, SPD: 61 },
    description:
      "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
    height: "9.2 m",
    weight: "999.9 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/797.png",
  },
  {
    name: "Kartana",
    type: ["Grass", "Steel"],
    base: { HP: 59, ATK: 181, DEF: 131, SATK: 59, SDEF: 31, SPD: 109 },
    description:
      "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
    height: "0.3 m",
    weight: "0.1 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/798.png",
  },
  {
    name: "Guzzlord",
    type: ["Dark", "Dragon"],
    base: { HP: 223, ATK: 101, DEF: 53, SATK: 97, SDEF: 53, SPD: 43 },
    description:
      "An unknown life-form called a UB. It may be constantly hungry—it is certainly always devouring something.",
    height: "5.5 m",
    weight: "888 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/799.png",
  },
  {
    name: "Necrozma",
    type: ["Psychic"],
    base: { HP: 97, ATK: 107, DEF: 101, SATK: 127, SDEF: 89, SPD: 79 },
    description:
      "Light is the source of its energy. If it isn’t devouring light, impurities build up in it and on it, and Necrozma darkens and stops moving.",
    height: "2.4 m",
    weight: "230 kg",
    ability: ["Prism Armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/800.png",
  },
  {
    name: "Magearna",
    type: ["Steel", "Fairy"],
    base: { HP: 80, ATK: 95, DEF: 115, SATK: 130, SDEF: 115, SPD: 65 },
    description:
      "Built roughly 500 years ago by a scientist, the part called the Soul-Heart is the actual life-form.",
    height: "1 m",
    weight: "80.5 kg",
    ability: ["Soul Heart"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/801.png",
  },
  {
    name: "Marshadow",
    type: ["Fighting", "Ghost"],
    base: { HP: 90, ATK: 125, DEF: 80, SATK: 90, SDEF: 90, SPD: 125 },
    description:
      "It sinks into the shadows of people and Pokémon, where it can understand their feelings and copy their capabilities.",
    height: "0.7 m",
    weight: "22.2 kg",
    ability: ["Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/802.png",
  },
  {
    name: "Poipole",
    type: ["Poison"],
    base: { HP: 67, ATK: 73, DEF: 67, SATK: 73, SDEF: 67, SPD: 73 },
    description:
      "An Ultra Beast that lives in a different world, it cackles wildly as it sprays its opponents with poison from the needles on its head.",
    height: "0.6 m",
    weight: "1.8 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/803.png",
  },
  {
    name: "Naganadel",
    type: ["Poison", "Dragon"],
    base: { HP: 73, ATK: 73, DEF: 73, SATK: 127, SDEF: 73, SPD: 121 },
    description:
      "One kind of Ultra Beast, it fires a glowing, venomous liquid from its needles. This liquid is also immensely adhesive.",
    height: "3.6 m",
    weight: "150 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/804.png",
  },
  {
    name: "Stakataka",
    type: ["Rock", "Steel"],
    base: { HP: 61, ATK: 131, DEF: 211, SATK: 53, SDEF: 101, SPD: 13 },
    description:
      "When stone walls started moving and attacking, the brute’s true identity was this mysterious life-form, which brings to mind an Ultra Beast.",
    height: "5.5 m",
    weight: "820 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/805.png",
  },
  {
    name: "Blacephalon",
    type: ["Fire", "Ghost"],
    base: { HP: 53, ATK: 127, DEF: 53, SATK: 151, SDEF: 79, SPD: 107 },
    description:
      "A UB that appeared from an Ultra Wormhole, it causes explosions, then takes advantage of opponents’ surprise to rob them of their vitality.",
    height: "1.8 m",
    weight: "13 kg",
    ability: ["Beast Boost"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/806.png",
  },
  {
    name: "Zeraora",
    type: ["Electric"],
    base: { HP: 88, ATK: 112, DEF: 75, SATK: 102, SDEF: 80, SPD: 143 },
    description:
      "It approaches its enemies at the speed of lightning, then tears them limb from limb with its sharp claws.",
    height: "1.5 m",
    weight: "44.5 kg",
    ability: ["Volt Absorb"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/807.png",
  },
  {
    name: "Meltan",
    type: ["Steel"],
    base: { HP: 46, ATK: 65, DEF: 65, SATK: 55, SDEF: 35, SPD: 34 },
    description:
      "They live as a group, but when the time comes, one strong Meltan will absorb all the others and evolve.",
    height: "0.2 m",
    weight: "8.0 kg",
    ability: ["Magnet Pull"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/808.png",
  },
  {
    name: "Melmetal",
    type: ["Steel"],
    base: { HP: 135, ATK: 143, DEF: 143, SATK: 80, SDEF: 65, SPD: 34 },
    description:
      "Centrifugal force is behind the punches of Melmetal's heavy hex-nut arms. Melmetal is said to deliver the strongest punches of all Pokémon.",
    height: "2.5 m",
    weight: "800.0 kg",
    ability: ["Iron Fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/809.png",
  },
  {
    name: "Grookey",
    type: ["Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped.",
    height: "0 m",
    weight: "5 kg",
    ability: ["Overgrow", "Grassy-surge"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/810.png",
  },
  {
    name: "Thwackey",
    type: ["Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "When it’s drumming out rapid beats in battle, it gets so caught up in the rhythm that it won’t even notice that it’s already knocked out its opponent.",
    height: "1 m",
    weight: "14 kg",
    ability: ["Overgrow", "Grassy-surge"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/811.png",
  },
  {
    name: "Rillaboom",
    type: ["Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group.",
    height: "2 m",
    weight: "90 kg",
    ability: ["Overgrow", "Grassy-surge"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/812.png",
  },
  {
    name: "Scorbunny",
    type: ["Fire"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It has special pads on the backs of its feet, and one on its nose. Once it’s raring to fight, these pads radiate tremendous heat.",
    height: "0 m",
    weight: "4 kg",
    ability: ["Blaze", "Libero"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/813.png",
  },
  {
    name: "Raboot",
    type: ["Fire"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork.",
    height: "1 m",
    weight: "9 kg",
    ability: ["Blaze", "Libero"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/814.png",
  },
  {
    name: "Cinderace",
    type: ["Fire"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It’s skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot.",
    height: "1 m",
    weight: "33 kg",
    ability: ["Blaze", "Libero"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/815.png",
  },
  {
    name: "Sobble",
    type: ["Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "When it gets wet, its skin changes color, and this Pokémon becomes invisible as if it were camouflaged.",
    height: "0 m",
    weight: "4 kg",
    ability: ["Torrent", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/816.png",
  },
  {
    name: "Drizzile",
    type: ["Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere.",
    height: "1 m",
    weight: "12 kg",
    ability: ["Torrent", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/817.png",
  },
  {
    name: "Inteleon",
    type: ["Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its nictitating membranes let it pick out foes’ weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3.",
    height: "2 m",
    weight: "45 kg",
    ability: ["Torrent", "Sniper"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/818.png",
  },
  {
    name: "Skwovet",
    type: ["Normal"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It eats berries nonstop—a habit that has made it more resilient than it looks. It’ll show up on farms, searching for yet more berries.",
    height: "0 m",
    weight: "2 kg",
    ability: ["Cheek-pouch", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/819.png",
  },
  {
    name: "Greedent",
    type: ["Normal"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells.",
    height: "1 m",
    weight: "6 kg",
    ability: ["Cheek-pouch", "Gluttony"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/820.png",
  },
  {
    name: "Rookidee",
    type: ["Flying"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents.",
    height: "0 m",
    weight: "2 kg",
    ability: ["Keen-eye", "Unnerve", "Big-pecks"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/821.png",
  },
  {
    name: "Corvisquire",
    type: ["Flying"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The lessons of many harsh battles have taught it how to accurately judge an opponent’s strength.",
    height: "1 m",
    weight: "16 kg",
    ability: ["Keen-eye", "Unnerve", "Big-pecks"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/822.png",
  },
  {
    name: "Corviknight",
    type: ["Flying", "Steel"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region’s airborne taxi service.",
    height: "2 m",
    weight: "75 kg",
    ability: ["Pressure", "Unnerve", "Mirror-armor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/823.png",
  },
  {
    name: "Blipbug",
    type: ["Bug"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings.",
    height: "0 m",
    weight: "8 kg",
    ability: ["Swarm", "Compound-eyes", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/824.png",
  },
  {
    name: "Dottler",
    type: ["Bug", "Psychic"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution.",
    height: "0 m",
    weight: "20 kg",
    ability: ["Swarm", "Compound-eyes", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/825.png",
  },
  {
    name: "Orbeetle",
    type: ["Bug", "Psychic"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It emits psychic energy to observe and study what’s around it—and what’s around it can include things over six miles away.",
    height: "0 m",
    weight: "41 kg",
    ability: ["Swarm", "Frisk", "Telepathy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/826.png",
  },
  {
    name: "Nickit",
    type: ["Dark"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder.",
    height: "1 m",
    weight: "9 kg",
    ability: ["Run-away", "Unburden", "Stakeout"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/827.png",
  },
  {
    name: "Thievul",
    type: ["Dark"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "With a lithe body and sharp claws, it goes around stealing food and eggs. Boltund is its natural enemy.",
    height: "1 m",
    weight: "20 kg",
    ability: ["Run-away", "Unburden", "Stakeout"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/828.png",
  },
  {
    name: "Gossifleur",
    type: ["Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon.",
    height: "0 m",
    weight: "2 kg",
    ability: ["Cotton-down", "Regenerator", "Effect-spore"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/829.png",
  },
  {
    name: "Eldegoss",
    type: ["Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty.",
    height: "1 m",
    weight: "2 kg",
    ability: ["Cotton-down", "Regenerator", "Effect-spore"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/830.png",
  },
  {
    name: "Wooloo",
    type: ["Normal"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "If its fleece grows too long, Wooloo won’t be able to move. Cloth made with the wool of this Pokémon is surprisingly strong.",
    height: "1 m",
    weight: "6 kg",
    ability: ["Fluffy", "Run-away", "Bulletproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/831.png",
  },
  {
    name: "Dubwool",
    type: ["Normal"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its majestic horns are meant only to impress the opposite gender. They never see use in battle.",
    height: "1 m",
    weight: "43 kg",
    ability: ["Fluffy", "Run-away", "Bulletproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/832.png",
  },
  {
    name: "Chewtle",
    type: ["Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go.",
    height: "0 m",
    weight: "8 kg",
    ability: ["Strong-jaw", "Shell-armor", "Swift-swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/833.png",
  },
  {
    name: "Drednaw",
    type: ["Water", "Rock"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down.",
    height: "1 m",
    weight: "116 kg",
    ability: ["Strong-jaw", "Shell-armor", "Swift-swim"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/834.png",
  },
  {
    name: "Yamper",
    type: ["Electric"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
    height: "0 m",
    weight: "14 kg",
    ability: ["Ball-fetch", "Rattled"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/835.png",
  },
  {
    name: "Boltund",
    type: ["Electric"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph.",
    height: "1 m",
    weight: "34 kg",
    ability: ["Strong-jaw", "Competitive"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/836.png",
  },
  {
    name: "Rolycoly",
    type: ["Rock"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It can race around like a unicycle, even on rough, rocky terrain. Burning coal sustains it.",
    height: "0 m",
    weight: "12 kg",
    ability: ["Steam-engine", "Heatproof", "Flash-fire"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/837.png",
  },
  {
    name: "Carkol",
    type: ["Rock", "Fire"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "By rapidly rolling its legs, it can travel at over 18 mph. The temperature of the flames it breathes exceeds 1,800 degrees Fahrenheit.",
    height: "1 m",
    weight: "78 kg",
    ability: ["Steam-engine", "Flame-body", "Flash-fire"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/838.png",
  },
  {
    name: "Coalossal",
    type: ["Rock", "Fire"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "While it’s engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area.",
    height: "3 m",
    weight: "310 kg",
    ability: ["Steam-engine", "Flame-body", "Flash-fire"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/839.png",
  },
  {
    name: "Applin",
    type: ["Grass", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "As soon as it’s born, it burrows into an apple. Not only does the apple serve as its food source, but the flavor of the fruit determines its evolution.",
    height: "0 m",
    weight: "0 kg",
    ability: ["Ripen", "Gluttony", "Bulletproof"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/840.png",
  },
  {
    name: "Flapple",
    type: ["Grass", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple.",
    height: "0 m",
    weight: "1 kg",
    ability: ["Ripen", "Gluttony", "Hustle"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/841.png",
  },
  {
    name: "Appletun",
    type: ["Grass", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its body is covered in sweet nectar, and the skin on its back is especially yummy. Children used to have it as a snack.",
    height: "0 m",
    weight: "13 kg",
    ability: ["Ripen", "Gluttony", "Thick-fat"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/842.png",
  },
  {
    name: "Silicobra",
    type: ["Ground"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It spews sand from its nostrils. While the enemy is blinded, it burrows into the ground to hide.",
    height: "2 m",
    weight: "8 kg",
    ability: ["Sand-spit", "Shed-skin", "Sand-veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/843.png",
  },
  {
    name: "Sandaconda",
    type: ["Ground"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its unique style of coiling allows it to blast sand out of its sand sac more efficiently.",
    height: "4 m",
    weight: "66 kg",
    ability: ["Sand-spit", "Shed-skin", "Sand-veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/844.png",
  },
  {
    name: "Cramorant",
    type: ["Flying", "Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This hungry Pokémon swallows Arrokuda whole. Occasionally, it makes a mistake and tries to swallow a Pokémon other than its preferred prey.",
    height: "1 m",
    weight: "18 kg",
    ability: ["Gulp-missile"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/845.png",
  },
  {
    name: "Arrokuda",
    type: ["Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "After it’s eaten its fill, its movements become extremely sluggish. That’s when Cramorant swallows it up.",
    height: "1 m",
    weight: "1 kg",
    ability: ["Swift-swim", "Propeller-tail"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/846.png",
  },
  {
    name: "Barraskewda",
    type: ["Water"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It spins its tail fins to propel itself, surging forward at speeds of over 100 knots before ramming prey and spearing into them.",
    height: "1 m",
    weight: "30 kg",
    ability: ["Swift-swim", "Propeller-tail"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/847.png",
  },
  {
    name: "Toxel",
    type: ["Electric", "Poison"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis.",
    height: "0 m",
    weight: "11 kg",
    ability: ["Rattled", "Static", "Klutz"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/848.png",
  },
  {
    name: "Toxtricity",
    type: ["Electric", "Poison"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This short-tempered and aggressive Pokémon chugs stagnant water to absorb any toxins it might contain.",
    height: "2 m",
    weight: "40 kg",
    ability: ["Punk-rock", "Plus", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/849.png",
  },
  {
    name: "Sizzlipede",
    type: ["Fire", "Bug"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It wraps prey up with its heated body, cooking them in its coils. Once they’re well-done, it will voraciously nibble them down to the last morsel.",
    height: "1 m",
    weight: "1 kg",
    ability: ["Flash-fire", "White-smoke", "Flame-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/850.png",
  },
  {
    name: "Centiskorch",
    type: ["Fire", "Bug"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs.",
    height: "3 m",
    weight: "120 kg",
    ability: ["Flash-fire", "White-smoke", "Flame-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/851.png",
  },
  {
    name: "Clobbopus",
    type: ["Fighting"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its tentacles tear off easily, but it isn’t alarmed when that happens—it knows they’ll grow back. It’s about as smart as a three-year-old.",
    height: "1 m",
    weight: "4 kg",
    ability: ["Limber", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/852.png",
  },
  {
    name: "Grapploct",
    type: ["Fighting"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea.",
    height: "2 m",
    weight: "39 kg",
    ability: ["Limber", "Technician"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/853.png",
  },
  {
    name: "Sinistea",
    type: ["Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The teacup in which this Pokémon makes its home is a famous piece of antique tableware. Many forgeries are in circulation.",
    height: "0 m",
    weight: "0 kg",
    ability: ["Weak-armor", "Cursed-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/854.png",
  },
  {
    name: "Polteageist",
    type: ["Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Leaving leftover black tea unattended is asking for this Pokémon to come along and pour itself into it, turning the tea into a new Polteageist.",
    height: "0 m",
    weight: "0 kg",
    ability: ["Weak-armor", "Cursed-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/855.png",
  },
  {
    name: "Hatenna",
    type: ["Psychic"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "If this Pokémon senses a strong emotion, it will run away as fast as it can. It prefers areas without people.",
    height: "0 m",
    weight: "3 kg",
    ability: ["Healer", "Anticipation", "Magic-bounce"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/856.png",
  },
  {
    name: "Hattrem",
    type: ["Psychic"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Using the braids on its head, it pummels foes to get them to quiet down. One blow from those braids would knock out a professional boxer.",
    height: "1 m",
    weight: "5 kg",
    ability: ["Healer", "Anticipation", "Magic-bounce"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/857.png",
  },
  {
    name: "Hatterene",
    type: ["Psychic", "Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "If you’re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch.",
    height: "2 m",
    weight: "5 kg",
    ability: ["Healer", "Anticipation", "Magic-bounce"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/858.png",
  },
  {
    name: "Impidimp",
    type: ["Dark", "Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It sneaks into people’s homes, stealing things and feasting on the negative energy of the frustrated occupants.",
    height: "0 m",
    weight: "6 kg",
    ability: ["Prankster", "Frisk", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/859.png",
  },
  {
    name: "Morgrem",
    type: ["Dark", "Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow.",
    height: "1 m",
    weight: "12 kg",
    ability: ["Prankster", "Frisk", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/860.png",
  },
  {
    name: "Grimmsnarl",
    type: ["Dark", "Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its hairs work like muscle fibers. When its hairs unfurl, they latch on to opponents, ensnaring them as tentacles would.",
    height: "1 m",
    weight: "61 kg",
    ability: ["Prankster", "Frisk", "Pickpocket"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/861.png",
  },
  {
    name: "Obstagoon",
    type: ["Dark", "Normal"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch.",
    height: "2 m",
    weight: "46 kg",
    ability: ["Reckless", "Guts", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/862.png",
  },
  {
    name: "Perrserker",
    type: ["Steel"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "After many battles, it evolved dangerous claws that come together to form daggers when extended.",
    height: "1 m",
    weight: "28 kg",
    ability: ["Battle-armor", "Tough-claws", "Steely-spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/863.png",
  },
  {
    name: "Cursola",
    type: ["Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Be cautious of the ectoplasmic body surrounding its soul. You’ll become stiff as stone if you touch it.",
    height: "1 m",
    weight: "0 kg",
    ability: ["Weak-armor", "Perish-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/864.png",
  },
  {
    name: "Sirfetch'd",
    type: ["Fighting"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "After deflecting attacks with its hard leaf shield, it strikes back with its sharp leek stalk. The leek stalk is both weapon and food.",
    height: "1 m",
    weight: "117 kg",
    ability: ["Steadfast", "Scrappy"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/865.png",
  },
  {
    name: "Mr. Rime",
    type: ["Ice", "Psychic"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly.",
    height: "1 m",
    weight: "58 kg",
    ability: ["Tangled-feet", "Screen-cleaner", "Ice-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/866.png",
  },
  {
    name: "Runerigus",
    type: ["Ground", "Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Never touch its shadowlike body, or you’ll be shown the horrific memories behind the picture carved into it.",
    height: "2 m",
    weight: "67 kg",
    ability: ["Wandering-spirit"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/867.png",
  },
  {
    name: "Milcery",
    type: ["Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "They say that any patisserie visited by Milcery is guaranteed success and good fortune.",
    height: "0 m",
    weight: "0 kg",
    ability: ["Sweet-veil", "Aroma-veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/868.png",
  },
  {
    name: "Alcremie",
    type: ["Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "When Alcremie is content, the cream it secretes from its hands becomes sweeter and richer.",
    height: "0 m",
    weight: "0 kg",
    ability: ["Sweet-veil", "Aroma-veil"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/869.png",
  },
  {
    name: "Falinks",
    type: ["Fighting"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight.",
    height: "3 m",
    weight: "62 kg",
    ability: ["Battle-armor", "Defiant"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/870.png",
  },
  {
    name: "Pincurchin",
    type: ["Electric"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It stores electricity in each spine. Even if one gets broken off, it still continues to emit electricity for at least three hours.",
    height: "0 m",
    weight: "1 kg",
    ability: ["Lightning-rod", "Electric-surge"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/871.png",
  },
  {
    name: "Snom",
    type: ["Ice", "Bug"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow.",
    height: "0 m",
    weight: "4 kg",
    ability: ["Shield-dust", "Ice-scales"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/872.png",
  },
  {
    name: "Frosmoth",
    type: ["Ice", "Bug"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away.",
    height: "1 m",
    weight: "42 kg",
    ability: ["Shield-dust", "Ice-scales"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/873.png",
  },
  {
    name: "Stonjourner",
    type: ["Rock"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Once a year, on a specific date and at a specific time, they gather out of nowhere and form up in a circle.",
    height: "2 m",
    weight: "520 kg",
    ability: ["Power-spot"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/874.png",
  },
  {
    name: "Eiscue",
    type: ["Ice"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey.",
    height: "1 m",
    weight: "89 kg",
    ability: ["Ice-face"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/875.png",
  },
  {
    name: "Indeedee",
    type: ["Psychic", "Normal"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength.",
    height: "1 m",
    weight: "28 kg",
    ability: ["Inner-focus", "Synchronize", "Psychic-surge"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/876.png",
  },
  {
    name: "Morpeko",
    type: ["Electric", "Dark"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It carries electrically roasted seeds with it as if they’re precious treasures. No matter how much it eats, it always gets hungry again in short order.",
    height: "0 m",
    weight: "3 kg",
    ability: ["Hunger-switch"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/877.png",
  },
  {
    name: "Cufant",
    type: ["Steel"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "If a job requires serious strength, this Pokémon will excel at it. Its copper body tarnishes in the rain, turning a vibrant green color.",
    height: "1 m",
    weight: "100 kg",
    ability: ["Sheer-force", "Heavy-metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/878.png",
  },
  {
    name: "Copperajah",
    type: ["Steel"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder.",
    height: "3 m",
    weight: "650 kg",
    ability: ["Sheer-force", "Heavy-metal"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/879.png",
  },
  {
    name: "Dracozolt",
    type: ["Electric", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The powerful muscles in its tail generate its electricity. Compared to its lower body, its upper half is entirely too small.",
    height: "2 m",
    weight: "190 kg",
    ability: ["Volt-absorb", "Hustle", "Sand-rush"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/880.png",
  },
  {
    name: "Arctozolt",
    type: ["Electric", "Ice"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This Pokémon lived on prehistoric seashores and was able to preserve food with the ice on its body. It went extinct because it moved so slowly.",
    height: "2 m",
    weight: "150 kg",
    ability: ["Volt-absorb", "Static", "Slush-rush"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/881.png",
  },
  {
    name: "Dracovish",
    type: ["Water", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its mighty legs are capable of running at speeds exceeding 40 mph, but this Pokémon can’t breathe unless it’s underwater.",
    height: "2 m",
    weight: "215 kg",
    ability: ["Water-absorb", "Strong-jaw", "Sand-rush"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/882.png",
  },
  {
    name: "Arctovish",
    type: ["Water", "Ice"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The skin on its face is impervious to attack, but breathing difficulties made this Pokémon go extinct anyway.",
    height: "2 m",
    weight: "175 kg",
    ability: ["Water-absorb", "Ice-body", "Slush-rush"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/883.png",
  },
  {
    name: "Duraludon",
    type: ["Steel", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "The special metal that composes its body is very light, so this Pokémon has considerable agility. It lives in caves because it dislikes the rain.",
    height: "2 m",
    weight: "40 kg",
    ability: ["Light-metal", "Heavy-metal", "Stalwart"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/884.png",
  },
  {
    name: "Dreepy",
    type: ["Dragon", "Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "If this weak Pokémon is by itself, a mere child could defeat it. But if Dreepy has friends to help it train, it can evolve and become much stronger.",
    height: "1 m",
    weight: "2 kg",
    ability: ["Clear-body", "Infiltrator", "Cursed-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/885.png",
  },
  {
    name: "Drakloak",
    type: ["Dragon", "Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Without a Dreepy to place on its head and care for, it gets so uneasy it’ll try to substitute any Pokémon it finds for the missing Dreepy.",
    height: "1 m",
    weight: "11 kg",
    ability: ["Clear-body", "Infiltrator", "Cursed-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/886.png",
  },
  {
    name: "Dragapult",
    type: ["Dragon", "Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Apparently the Dreepy inside Dragapult’s horns eagerly look forward to being launched out at Mach speeds.",
    height: "3 m",
    weight: "50 kg",
    ability: ["Clear-body", "Infiltrator", "Cursed-body"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/887.png",
  },
  {
    name: "Zacian",
    type: ["Fairy"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This Pokémon has slumbered for many years. Some say it’s Zamazenta’s elder sister—others say the two Pokémon are rivals.",
    height: "3 m",
    weight: "110 kg",
    ability: ["Intrepid-sword"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/888.png",
  },
  {
    name: "Zamazenta",
    type: ["Fighting"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "This Pokémon slept for aeons while in the form of a statue. It was asleep for so long, people forgot that it ever existed.",
    height: "3 m",
    weight: "210 kg",
    ability: ["Dauntless-shield"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/889.png",
  },
  {
    name: "Eternatus",
    type: ["Poison", "Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "It was inside a meteorite that fell 20,000 years ago. There seems to be a connection between this Pokémon and the Dynamax phenomenon.",
    height: "20 m",
    weight: "950 kg",
    ability: ["Pressure"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/890.png",
  },
  {
    name: "Kubfu",
    type: ["Fighting"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "If Kubfu pulls the long white hair on its head, its fighting spirit heightens and power wells up from the depths of its belly.",
    height: "1 m",
    weight: "12 kg",
    ability: ["Inner-focus"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/891.png",
  },
  {
    name: "Urshifu",
    type: ["Fighting", "Dark"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Inhabiting the mountains of a distant region, this Pokémon races across sheer cliffs, training its legs and refining its moves.",
    height: "2 m",
    weight: "105 kg",
    ability: ["Unseen-fist"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/892.png",
  },
  {
    name: "Zarude",
    type: ["Dark", "Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow.",
    height: "2 m",
    weight: "70 kg",
    ability: ["Leaf-guard"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/893.png",
  },
  {
    name: "Regieleki",
    type: ["Electric"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its entire body is made up of a single organ that generates electrical energy. Regieleki is capable of creating all Galar’s electricity.",
    height: "1 m",
    weight: "145 kg",
    ability: ["Transistor"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/894.png",
  },
  {
    name: "Regidrago",
    type: ["Dragon"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon.",
    height: "2 m",
    weight: "200 kg",
    ability: ["Dragons-maw"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/895.png",
  },
  {
    name: "Glastrier",
    type: ["Ice"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Glastrier has tremendous physical strength, and the mask of ice covering its face is 100 times harder than diamond.",
    height: "2 m",
    weight: "800 kg",
    ability: ["Chilling-neigh"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/896.png",
  },
  {
    name: "Spectrier",
    type: ["Ghost"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "As it dashes through the night, Spectrier absorbs the life-force of sleeping creatures. It craves silence and solitude.",
    height: "2 m",
    weight: "44 kg",
    ability: ["Grim-neigh"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/897.png",
  },
  {
    name: "Calyrex",
    type: ["Psychic", "Grass"],
    base: { HP: "", ATK: "", DEF: "", SATK: "", SDEF: "", SPD: "" },
    description:
      "Calyrex is known in legend as a king that ruled over Galar in ancient times. It has the power to cause hearts to mend and plants to spring forth.",
    height: "1 m",
    weight: "8 kg",
    ability: ["Unnerve"],
    image:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/898.png",
  },
];
