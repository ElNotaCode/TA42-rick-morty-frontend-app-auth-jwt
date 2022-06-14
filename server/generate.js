var faker = require("faker");

var database = { characters: [] };

for (let i = 0; i < 50; i++) {
  database.characters.push({
    id: i,
    name: faker.lorem.words(),
    status: faker.lorem.words(),
    species: faker.lorem.words(),
    gender: faker.lorem.words(),
    origin: faker.lorem.words(),
    location: faker.lorem.words(),
    image: faker.image.animals(),
  });
}

console.log(JSON.stringify(database));
