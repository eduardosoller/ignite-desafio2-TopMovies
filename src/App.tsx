import { useEffect, useState } from 'react';

 import { SideBar } from './components/SideBar';
 import { Content } from './components/Content';

import './styles/global.scss';
interface IProps{
  id: number; title:string,
}
export function App() {
  const [selectedGenreObject, setSelectedGenreObject] = useState<IProps>({id: 1, title: "Ação"});
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar selectedGenreObject={selectedGenreObject} setSelectedGenreObject={setSelectedGenreObject}/>
     <Content selectedGenreObject={selectedGenreObject}/>
    </div>
  )
}