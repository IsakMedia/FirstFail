import express from 'express'
import { index, /*linkPhotoToAlbum*/ show, store } from '../controllers/photo_controller'
const router = express.Router()

/**
 * GET all /photos
 */
router.get('/', index)

/**
 * GET a single photo,  /photos/:photoId
 */
router.get('/:photoId', show)

/**
 * POST a photo,  /photos 
 */
router.post('/', store)

// linking

router.post('/:photoId/albums', /*linkPhotoToAlbum*/)

export default router