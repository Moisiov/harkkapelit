import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const create = async (data, user) => {
    try {
        const game = await prisma.gameAd.create({
            data: {
                user: {
                    connect: {
                        email: user.email
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

        return game
    }
    catch (e) {
        console.error(e)
    }
}