const {Router} = require('express')
const router = Router()

// /api/auth/register
router.post('register', async(rec, res) => {
	try{

	}catch(e){
		res.status(500).json({message: 'Error!!!'})
	}
})
router.post('login', async(rec, res) => {
	try{

	}catch(e){
		res.status(500).json({message: 'Error!!!'})
	}
})

module.exports = router
