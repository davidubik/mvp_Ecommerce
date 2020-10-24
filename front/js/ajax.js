window.onload = function(){

    const req = new XMLHttpRequest();
    const Url = "http://localhost:3000/api/cameras";
    
    req.open("GET", Url);
    
    req.onreadystatechange = function(e){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                const response = (JSON.parse(this.responseText));
                for(i = 0; i < response.length; i++){
                    console.log(response[i].imageUrl);
                    const image = document.createElement('img');
                    const model = document.createElement('p');
                    const prix = document.createElement('p');
                    const definition = document.createElement('p');
                    definition.textContent = response[i].description;
                    prix.textContent = response[i].price;
                    model.textContent = response[i].name;
                    image.src = response[i].imageUrl;
                    document.querySelector('.image-container').appendChild(image);
                    document.querySelector(".section1").appendChild(model);
                    document.querySelector(".section1").appendChild(prix);
                    document.querySelector(".section1").appendChild(definition);
                    console.log(response[i]);
                    console.log(response[i].name);
                }
            
            } else{
                console.error("Statut: " + this.status);
            }
            
        }
    }
    
    req.send();



 
}




