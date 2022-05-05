import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const createNewAd = async (data, user) => {
    try {
        const newAd = await prisma.gameAd.create({
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

        return newAd
    }
    catch (e) {
        console.error(e)
    }
}