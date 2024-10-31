import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ] 


export function App  () {   
return (   

        <seccion   className = "App" > 
            {
            users.map (({ userName, name, isFollowing } ) => (  
                        <TwitterFollowCard 
                            key={userName} 
                            userName={userName}
                            initialIsFollowing ={isFollowing}                    
                        > 
                        {name}     
                        </TwitterFollowCard>                                 
            ) )
            }
        </seccion>
    )
}
