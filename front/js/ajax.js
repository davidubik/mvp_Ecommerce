window.onload = function(){

    const req = new XMLHttpRequest();
    const Url = "http://localhost:3000/api/cameras";
    
    req.open("GET", Url);
    
    req.onreadystatechange = function(e){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                const response = JSON.parse(this.responseText);
                for(i = 0; i < response.length; i++){
                    console.log(response[i].imageUrl);

                    const camera = document.createElement("div");
                    camera.classList.add("camera");

                    const model = document.createElement("h3");
                    model.textContent = response[i].name;

                    const definition = document.createElement("p");
                    definition.textContent = response[i].description;

                    const prix = document.createElement("p");
                    prix.textContent = response[i].price;

                    const image = document.createElement("img");
                    image.src = response[i].imageUrl;


                    camera.appendChild(image);
                    camera.appendChild(model);
                    camera.appendChild(definition);
                    camera.appendChild(prix);


                   document.querySelector(".items-container").appendChild(camera);
                   
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




