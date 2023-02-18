import express from "express"
import photos from './photo_routes'
import albums from './album_routes'
import user from './user_routes'
// import { login, refresh, register } from '../controllers/user_controller'
// import { validateToken } from '../middlewares/auth/jwt'
// import { createUserRules } from '../validations/user_rules'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "These are not the routes you're looking for",
	})
})

/**
 * /photos
 */
router.use('/photos', photos)

/**
 * /albums
 */
router.use('/albums', albums)

/**
 * /profile
 */
router.use('/user', /*validateToken*/ user)


/**
 * POST /login
 * login yo
 */
router.post('/login', /*login*/)

/**
 * THIS IS JWS COUNTRY
 * do not attempt
 */
router.post('/refresh', /*refresh*/)

/**
 * POST /register
 * Create a user
 */
router.post('/register', /*createUserRules*/ /*register*/)

export default router
