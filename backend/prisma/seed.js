import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

const sports = [
    { name: "Jalkapallo" },
    { name: "Koripallo" },
    { name: "Jääkiekko" },
    { name: "Jääpallo" },
    { name: "Futsal" },
    { name: "Amerikkalainen jalkapallo" },
    { name: "Vesipallo" },
    { name: "Lentopallo" },
    { name: "Käsipallo" },
    { name: "Pesäpallo" }
]

const main = async () => {
    console.log('Seeding database')

    await prisma.sport.createMany({
        data: sports
    })

    console.log('Added sports')

    console.log('Seeding finished')
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})