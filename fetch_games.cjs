const fs = require('fs');

async function fetchGames() {
  try {
    const res = await fetch('https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&popularity=newest&amount=24');
    const data = await res.json();
    
    const formattedGames = data.map((game, index) => {
      // Create a slug from the title
      const slug = game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      
      return {
        id: String(index + 1),
        title: game.title,
        slug: slug,
        category: game.category || 'Action',
        rating: Number((Math.random() * (5 - 3.8) + 3.8).toFixed(1)), // Random rating between 3.8 and 5
        thumbnail: game.thumb,
        gameUrl: game.url,
        description: game.description || 'Enjoy this amazing game directly in your browser.',
        developer: "Gamemonetize",
        releaseDate: "2024",
        technology: "HTML5",
        platforms: ["Desktop", "Mobile"]
      };
    });

    const fileContent = `export const GAMES = ${JSON.stringify(formattedGames, null, 4)};\n`;
    
    // Create directory if not exists
    if (!fs.existsSync('./src/data')){
        fs.mkdirSync('./src/data');
    }
    
    fs.writeFileSync('./src/data/games.js', fileContent);
    console.log('Successfully generated games.js!');
  } catch (err) {
    console.error(err);
  }
}

fetchGames();
