import {faker} from '@faker-js/faker'

const duration = () => {
    const minutos = faker.number.int({ min: 2, max: 6 });
    const segundos = faker.number.int({ min: 0, max: 59 });
    return `${minutos}:${segundos}`
}
const cancion = ()=>{
    return {
        id : faker.string.uuid(),
        tittle: faker.music.songName(),
        artist:faker.music.artist(),
        album:faker.music.album(),
        duration: duration(),
        genre:faker.music.genre(),
        year:faker.date.between({ from: '1920-01-01T00:00:00.000Z', to: faker.date.recent()}) 
        
    }   
}
const cancontroller={
    getcancion: async (req,res) => {
        try{
            return res.status(201).json(cancion())
        }catch(e){
            return res.status(400).json(e)
        }
    }
}

export default cancontroller
export {cancion}
