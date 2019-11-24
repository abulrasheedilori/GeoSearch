window.addEventListener("load", ()=> {
        let lat;
        let long;

    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = "https://cors-anywhere.herokuapp.com/";
                const api = `${proxy}https://api.darksky.net/forecast/8680b0e2aa2f827b2d5d3566844700d9/${lat},${long}`;

                
                fetch(api)
                    .then(response=>{
                        return response.json();
                    })
                    .then(data =>{
                        console.log(data);    
                      


                    });
            });
        }
});

