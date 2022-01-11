import React, { Component } from 'react';

class List_mov extends Component{

	render(){
    const prps=this.props
    const movies=prps.movies
    const profiles=prps.profiles
    const fmv_list=[]
    const fmv_lover={}
    const mov_keys = Object.keys(movies);

    const mvs=profiles.map((profile)=>{
        if (!fmv_list.includes(movies[profile.favoriteMovieID])){
        fmv_list.push(movies[profile.favoriteMovieID])
        }
       if(fmv_lover[movies[profile.favoriteMovieID].name]){
        fmv_lover[movies[profile.favoriteMovieID].name]+=" ,"+prps.users[profile.userID].name   
       }else{
         fmv_lover[movies[profile.favoriteMovieID].name]=prps.users[profile.userID].name  
       }  
    }
      )
       mov_keys.forEach((key)=>{
         if(!fmv_list.includes(movies[key])){
            fmv_lover[movies[key].name]="NO One"  
       }
       })    


    return (
      <ol>
    	{mov_keys.map((key)=>
        	(<li key={movies[key].id}> The movie is {movies[key].name} 
            	<p> liked by :{fmv_lover[movies[key].name]}</p>
              </li>
           )             
         )}
      
      </ol>
    )

    }

}

export default List_mov;
