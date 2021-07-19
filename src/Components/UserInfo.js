import React from 'react';

const styles = {
    img:{
        borderRadius:'50%',
        width:'70px',
        height:'70px',
    },
    name:{
        fontSize:'30px',
    },
    course:{
        fontSize:'20px',
        color:'gray',
    }
}

function UserInfo({photo, name, course}){
        
    return(
        <div>
           <img src={photo} style={styles.img}></img>
           <div>
               <span style={styles.name}>{name}</span>
               <span style={styles.course}>{course}</span>
           </div>
        </div> 
    )
}
export default UserInfo;