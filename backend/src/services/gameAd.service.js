import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const createNewAd = async (data, user) => {
    try {
        await prisma.gameAd.create({
            data: {
                user: {
                    connect: {
                        id: user.id
                    }
                },
                sport: {
                    connect: {
                        id: data.sport
                    }
                },
                title: data.title,
                description: data.description,
                generation: data.generation,
                gameDates: data.gameDates
            }
        })
    }
    catch (e) {
        console.error(e)
    }
}