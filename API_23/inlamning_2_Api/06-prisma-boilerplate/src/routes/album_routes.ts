import express from 'express'
import { index, show, store } from '../controllers/album_controller'
const router = express.Router()

/**
 * GET /Albums
 */
router.get('/', index)

/**
 * GET /Albums/:albumId
 */
router.get('/:albumId', show)

/**
 * POST an album to /albums
 */
router.post('/', store)

export default router