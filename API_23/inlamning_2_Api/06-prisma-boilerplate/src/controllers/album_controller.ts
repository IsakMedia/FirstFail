/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('Debug Album-rest')

/**
 * check if logged in
 * GET ALL ALBUMS ON USER
 * 
 */
export const index = async (req: Request, res: Response) => {
    try {
        const Albums = await prisma.album.findMany()

        res.status(200).send({
            status: "success",
            data: Albums,
        })

    } catch (err) {
        debug("Error kastat när du försöker hämta alla Album på användaren", err)
        res.status(500).send({ status: "error", message: "Något blev fel" })
    }
}


/**check if logged in
 * GET AN ALBUM
 */
export const show = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

    try {
        const album = await prisma.album.findUniqueOrThrow({
            where: {
                id: albumId,
            },
            include: {
                photos: true,
                user: true,
            }
        })

        res.send({
            status: "success",
            data: album,
        })

    } catch (err) {
        debug("Error thrown when trying to find an Album with the id %o: %o", req.params.albumId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}


/** check if logged
 * POST a new Album to user
 */
export const store = async (req: Request, res: Response) => {
    try {
        const album = await prisma.album.create({
            data: {
                title: req.body.title,
                userId: req.body.userId,
            }
        })

        res.send({
            status: "success",
            data: album,
        })

    } catch (err) {
        debug("Error thrown when creating an Album %o: %o", req.body, err)
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}

/** check if logged in
 * PATCH and Album to user
 */
export const update = async (req: Request, res: Response) => {
    const albumId = Number(req.params.AlbumId)

    try {
        const Album = await prisma.album.update({
            where: {
                id: albumId,
            },
            data: req.body,
        })

        return res.status(202).send(Album)

    } catch (err) {
        return res.status(500).send({ message: "Something went wrong" })
    }

}

/** check if logged in
 * DELETE an Album
 */
export const destroy = async (req: Request, res: Response) => {
}
