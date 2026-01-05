import React, { useState } from 'react';

function App(){
const [name,setname]=useState("Sourabh");

  return (
    <div>Hello World {name} Kumar and Roshan Pal<span>Heyy</span></div>

  )
}

export default App;


// gits command most used in collaboration 
// git clone httpsurl foldername :- to clone the repository in that folder name if not give foldername then it clones into that git repository name mein 
// git stash :- save tumhara untracked file or uncommit files jab ap kisi dusri branch ke code ko apni branch mein la rahe ho tab by using
//git stash list :- to see your all git stash files means tumne koi bhi file ko saved kra liya tha without commit or tracked file
//git stash apply :- to when tum apni branch par vapaas aaoge by using git checkout yourbranch here then you run this command then jo bhi apke git stash se file saved ki thi vo vapaas aajayegi 
//git stash apply specificstash here:- jab hum us individual file jo bina commit ke save kra rakhi thi use hi bas lana ho or baki file ko nahi lana ho changes vali 
//git stash pop : it is the combination of git stash apply and git stash drop command :- combination of restores stash and delete stash 
//git stash drop: to delete the stash which was saved by git stash command 
//git merge otherbranchname: otherbranchname that's repo data wants to get in your repository
//git pull branchnam: "if it's push in on github and in your system not the updated code of that branch then you give this command to update in your local system"