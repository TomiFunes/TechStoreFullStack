import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("SEEED");
  await prisma.product.createMany({
    data: [
      {
        title: "iPhone 16 Pro",
        description: "Apple flagship smartphone",
        price: 1299,
        stock: 10,
        imageUrl: "https://pngimg.com/uploads/iphone16/iphone16_PNG38.png",
      },
      {
        title: "MacBook Pro M4",
        description: "Apple laptop",
        price: 2499,
        stock: 5,
        imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG22.png",
      },
      {
        title: "AirPods Pro",
        description: "Wireless earbuds",
        price: 299,
        stock: 25,
        imageUrl: "https://pngimg.com/uploads/airPods/airPods_PNG40.png",
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
