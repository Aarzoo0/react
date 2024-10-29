
function DisplayProps({name,greeting}){
    // let myname=props.name;
    // let mygreeting=props.greeting;
     //let {name,greeting,emoji}=props;
     return(
         <>
         <h3>This is DisplayProps Component..!!</h3>
         <h4>
            {greeting} {name}
             </h4>
         </>
     );
 }
  
 export default DisplayProps;
