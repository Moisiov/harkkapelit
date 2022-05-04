import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const get = async () => {
    const sports = await prisma.sport.findMany({
        orderBy: [
            {
                name: 'asc'
            }
        ]
    })
    return sports
}