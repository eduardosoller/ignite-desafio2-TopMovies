import React, {useState, useEffect} from 'react'
import {Button} from './Button'
import { api } from '../services/api';
import '../styles/sidebar.scss';
import {GenreResponseProps} from '../@types/GenreResponseProps'
interface IProps{
  selectedGenreObject: {id: number, title:string},
  setSelectedGenreObject:Function;
}
export function SideBar({selectedGenreObject, setSelectedGenreObject}: IProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  function handleClickButton(id:number, title:string) {
    setSelectedGenreObject({id: id, title:title});
    console.log(selectedGenreObject)
  }
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  // useEffect(() => {
  //    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
  //     setSelectedGenre(response.data);
  //   })
  // }, [selectedGenreId]);
  
return (<nav className="sidebar">
<span>Watch<p>Me</p></span>

<div className="buttons-container">
  {genres.map(genre => (
    <Button
      key={String(genre.id)}
      title={genre.title}
      iconName={genre.name}
      onClick={() => handleClickButton(genre.id, genre.title)}
      selected={selectedGenreObject.id === genre.id}
    />
  ))}
</div>

</nav>)}