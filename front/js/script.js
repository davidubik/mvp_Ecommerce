window.onload = function(){

    const req = new XMLHttpRequest();
     const method = "GET";
    const Url = "http://localhost:3000/api/cameras";
    
    req.open("GET", Url);
    
    req.onreadystatechange = function(e){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                const response = (JSON.parse(this.responseText));
                for(i = 0; i < response.length; i++){
                    console.log(response[i].imageUrl);
                    const image = document.createElement('img');
                    image.src = response[i].imageUrl;
                    document.body.appendChild(image);
                    console.log(response[i]);
                }
                // console.log(response[i]);
                
            } else{
                console.log("Statut: " + this.status);
            }
            
        }
    }
    
    
    req.send();

 
}




