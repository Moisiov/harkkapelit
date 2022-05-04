import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return user
}

export const create = async (user) => {
    try {
        await prisma.user.create({
            data: {
                email: user.email,
                name: user.name
            }
        })
    }
    catch (e) {
        console.error(e)
    }
}