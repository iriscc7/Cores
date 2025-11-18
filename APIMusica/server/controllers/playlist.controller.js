import {faker} from '@faker-js/faker'
import { cancion } from './cancion.controller.js'


const songs =()=>{
    const n = faker.number.int({min:3,max:10});
    const songs= [];
    for (let i = 0; i < n; i++) {
        songs.push(cancion())
    }
    return songs
}

const playlist =()=>{
    return{
        idplaylist:faker.string.uuid(),
        name:faker.word.verb(),
        description:faker.word.words({ count: 7 }),
        songs:songs(),
        date: faker.date.recent()
    }
}

const playlistcntrll={
    getplaylist: async (req,res) => {
        try{
            return res.status(201).json(playlist())
        }catch(e){
            return res.status(400).json(e)
        }
    }
}

export default playlistcntrll
