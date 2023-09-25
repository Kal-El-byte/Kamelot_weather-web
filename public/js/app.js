console.log('Loading for a javascript file');

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
   
    })
})