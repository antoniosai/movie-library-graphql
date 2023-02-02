import ActorModel from "src/app/modules/actor/actor.model"

require('dotenv').config()

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
  ActorModel.sync({ alter: isDev || isTest })
])

dbInit();

export default dbInit 
