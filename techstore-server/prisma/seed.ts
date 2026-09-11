import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "iPhone 16 Pro",
        description: "Apple flagship smartphone",
        price: 1299,
        stock: 10,
        imageUrl: "https://picsum.photos/300?1",
      },
      {
        title: "MacBook Pro M4",
        description: "Apple laptop",
        price: 2499,
        stock: 5,
        imageUrl: "https://picsum.photos/300?2",
      },
      {
        title: "AirPods Pro",
        description: "Wireless earbuds",
        price: 299,
        stock: 25,
        imageUrl: "https://picsum.photos/300?3",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
  });
