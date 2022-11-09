import { serverSupabaseUser } from "#supabase/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const user = await serverSupabaseUser(event)

    if (user === null) {
        return []
    } else {
        return await prisma.game.findMany({
            where: {
                participants: {
                    some: {
                        playerId: user.id
                    }
                }
            }
        })
    }
})
