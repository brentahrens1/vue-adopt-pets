export default {
    animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    },
    getAllCats: (state, getters) => {
        return state.pets.filter((pets) => { 
            return pets.species === 'cat'
        })
    }
}