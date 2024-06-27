import { PrismaClient } from '@prisma/client';
import { nftDictionary } from './dictionaries';

const prisma = new PrismaClient();

async function seedData() {
  try {
    await prisma.nFT.createMany({ data: nftDictionary });
    console.log("\x1b[32m%s\x1b[0m'", '✅ Filling table NFT!');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '🚧 Error filling in the NFT table:', error);
    process.exit(1);
  }

  console.log('\x1b[34m%s\x1b[0m', '✅ Seeds created successfully!');
}

seedData()
