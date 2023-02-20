/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('Debug, Photo-controller')

/**
 * check if logged in
 * GET ALL Photos ON a USER
 * 
 */
export const index = async (req: Request, res: Response) => {
    try {
        const Photos = await prisma.photo.findMany()

        res.status(200).send({
            status: "success",
            data: Photos,
        })

    } catch (err) {
        debug("Error thrown when trying to find all photos %o: %o", err)
        res.status(500).send({ status: "error", message: "something went wrong when trying to find all photos" })
    }
}


/**check if logged in
 * GET AN ALBUM
 */
export const show = async (req: Request, res: Response) => {
    const photoId = Number(req.params.photoId)

    try {
        const Photo = await prisma.photo.findUniqueOrThrow({
            where: {
                id: photoId,
            },
            include: {
                albums: true,
                user: true,
            }
        })

        res.send({
            status: "success",
            data: Photo,
        })

    } catch (err) {
        debug("Error thrown when trying to find a photo with the id %o: %o", req.params.photoId, err)
        return res.status(404).send({ status: "error", message: "Not found" })
    }
}


/** check if logged
 * POST a new photo to user
 */
export const store = async (req: Request, res: Response) => {
    try {
        const photo = await prisma.photo.create({
            data: {
                // 7.3 10:32 , valideringen kan sköta det som ska skickas in
                // så bara req.body är ok? 
                title: req.body.title,
                userId: req.body.userId,
                url: req.body.url
            }
        })

        res.send({
            status: "success",
            data: photo,
        })

    } catch (err) {
        debug("Error thrown when creating an photo %o: %o", req.body, err)
        res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}

/** check if logged in
 * PATCH, add photo to album. 
 */
export const update = async (req: Request, res: Response) => {
    const photoId = Number(req.params.photoId)

    try {
        const Photo = await prisma.photo.update({
            where: {
                id: photoId,
            },
            data: req.body,
        })

        return res.status(202).send(Photo)

    } catch (err) {
        return res.status(500).send({ status: "error", message: "Something went wrong" })
    }

}


// PATCH, add a photo to an album

export const linkPhotoToAlbum = async (req: Request, res: Response) => {

}
