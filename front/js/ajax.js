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

                    const model = document.createElement("h1");
                    model.textContent = response[i].name;
                    
                    // model.textContent = response[i]._id;
                                  
                     const link = document.createElement("a");
                     link.textContent = "Plus d'info ici ";
                     link.style.color = '#000';
                     link.href = response[i]._id;

                    const definition = document.createElement("p");
                    definition.textContent = response[i].description;

                    const prix = document.createElement("p");
                    prix.textContent = response[i].price + "€";

                    const image = document.createElement("img");
                    image.src = response[i].imageUrl;
                    
                    
                    camera.appendChild(image);
                    camera.appendChild(model);
                    camera.appendChild(definition);
                    camera.appendChild(prix);
                    camera.appendChild(link);

                   document.querySelector(".items-container").appendChild(camera);
                   
                    console.log(response[i]);
                    console.log(response[i].name);
                    // console.log(response[i]._id);
                    // console.log(idCamera);
                   console.log(link.href = response[i]._id);
                }
            
            } else{
                console.error("Statut: " + this.status);
            }
            
        }
    }
    
    req.send();



 
}




