import {useState, useEffect} from "react"
import axios from "axios"

const Container = () => {
    const [pokemon, setPokemon] = useState([])
    const [selected, setSelected] = useState("")
    const [image, setImage] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/fire`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])

    useEffect(() => {
      axios.get(selected).then(res => {
        setImage(res.data.sprites.front_default)
      })
    }, [selected])

    const handleHover = (url) => {
      setSelected(url)
    }

    return (
        <div>
            <h1>Fire Types!</h1>
            <div className="trad-container">
              <img src={image} alt="pokemon sprite" />
              {pokemon.map((thisPokemon) => {
                  return (
                      <div 
                        className="trad-card"
                        onMouseOver={() => handleHover(thisPokemon.pokemon.url)}
                      >
                          {thisPokemon.pokemon.name}
                      </div>
                  )
              })}
            </div>

        </div>
    )
}

export default Container