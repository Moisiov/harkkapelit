import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const getUserByEmail = async (email) => {
    const user = await prisma.user({ email: email })
    return user
}

export const create = async (user) => {
    prisma.createUser({
        email: user.email,
        name: user.name
    })
}