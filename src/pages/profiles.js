import * as React from "react"
import { useState, useEffect } from 'react'

import Layout from '../components/layout/layout'
import CardList from '../components/general/CardList'

import "antd/dist/antd.css"


const Profiles = () => {
    const [pokemon, setPokemon] = useState()
    const [filter, setFilter] = useState()

    useEffect (() => {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(response => response.json())
        .then(allPokemon => setPokemon(allPokemon.pokemon))
    }, [])

    return (
            <Layout>
                <h2>Pokemon List</h2>
                <CardList data={pokemon} />
            </Layout>
    )
}

export default Profiles;