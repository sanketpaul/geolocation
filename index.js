let geolocation=()=>{
 let x=document.getElementsByClassName('out')[0]
 let y=document.getElementsByClassName('location')[0]
 let z=document.getElementsByClassName('weather')[0]

 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showlocation)
 }
 else{
    console.log("your browser not supported the geolocation")
    x.innerHTML=`geo not supported`
 }
 function showlocation(data){
    console.log(data)
    console.log(data.coords.latitude)
    console.log(data.coords.longitude)
    let lat=data.coords.latitude;
    let lon=data.coords.longitude;
    x.innerHTML=`YOur latitude is ${lat} and longitude is ${lon}`
    
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url).then((response)=>{
        return response.json()
        
    }).then((data)=>{
        console.log(data)
        console.log(data.city.name)
        y.innerHTML=`${data.city.name}`
        z.innerHTML=`${data.list[0].temp.day}c`
     
    })

 }
}