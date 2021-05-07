import React, {useState, useEffect} from 'react'
import { MovieCard } from '../components/MovieCard';
import { api } from '../services/api';
import '../styles/content.scss';
import {GenreResponseProps} from '../@types/GenreResponseProps'
import {MovieProps} from '../@types/MovieProps'
interface IProps{
  selectedGenreObject:{id:number, title:string}
}
export function Content({selectedGenreObject}:IProps) {
  
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  useEffect(()=>{
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreObject.id}`).then(response => {
      setMovies(response.data);
    })}, [])
    useEffect(()=>{
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreObject.id}`).then(response => {
        setMovies(response.data);
      })}, [selectedGenreObject])
      return (<div className="container">
      <header>
      <span className="category">Categoria:<span> {selectedGenreObject.title}</span></span>
      </header>
      <main>
      <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
        </div>
        </main>
        </div>)}