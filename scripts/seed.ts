const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Pessoas Famosas' },
        { name: 'Filmes & TV' },
        { name: 'Músicos' },
        { name: 'Gamers' },
        { name: 'Animais' },
        { name: 'Filosofia' },
        { name: 'Cientistas' },
      ],
    });
  } catch (error) {
    console.error('Erro ao propagar categorias padrão:', error);
  } finally {
    await db.$disconnect();
  }
}

main();
