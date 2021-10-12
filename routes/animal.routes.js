const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const Animal = require('../models/Animal')
const router = Router()



router.post( '/reganimal', async (req, res) => {
  try {
    const {name,  typeAnimal, gender,age,breed,statusAnimal,descrip,feed,Pnumber,img} = req.body
    await Animal.save()

    res.status(201).json({ message: 'Объявление создано' })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.route('/').get(async (req, res) => {
  const anim = await Animal.find({});
});

module.exports = router