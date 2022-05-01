import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUser().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();

function getUser() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      firstName: 'Jon',
      lasname: 'Smith',
      email: 'jonsmith@junk.com',
      username: 'jsmith',
      password: 'hello#3'
    },
    {
      firstname: 'Brad',
      lastname: 'Dirheimer',
      email: 'dirheimerb@gmail.com',
      username: 'dirheimerb',
      password: 'Raysfoot#3'
    }
  ];
}
