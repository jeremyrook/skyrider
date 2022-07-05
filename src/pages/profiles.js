import * as React from "react"
import { useState, useEffect } from 'react'

import Layout from '../components/layout/layout'
import "antd/dist/antd.css"

const Profiles = () => {
    const [pokemon, setPokemon] = useState()

    useEffect (() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(allPokemon => setPokemon(allPokemon.results))
    }, [])

    return (
            <Layout>
                <h2>Pokemon List</h2>
                {pokemon && pokemon.map((poke) => {
                return (
                    <>
                    <p>{poke.name}</p>
                    <p>{poke.url}</p>
                    </>
                )
                })}
            </Layout>
    )
}

export default Profiles