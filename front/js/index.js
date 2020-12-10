window.onload = () => {

    const req = new XMLHttpRequest(); // Requête XML
    const Url = "http://localhost:3000/api/cameras"; // Url de l'API où l'on envoie la requête
    
    req.open("GET", Url); // Instancie la requête XML avec comme arguments le methode GET et l'URL.
    

    req.onreadystatechange = function(e){                       // AJout de l'EventHandler sur la requête
    if(this.readyState === XMLHttpRequest.DONE){                // Si le raquête est finie
            if(this.status === 200){                            // Si la requête excécuter et que le satue est === à 200 (OK)
                const response = JSON.parse(this.responseText); // Tarduit la réponse du Server au format JSON
                for(i = 0; i < response.length; i++){           // On parcour la réponse du Server
                    console.log(response[i].imageUrl);

                    const camera = document.createElement("div");   // Création de l'élément camera (div) 
                    camera.classList.add("camera");

                    const model = document.createElement("h1");     // Création du l'élément H1 on lui attribue le .name de la réponse Server
                    model.textContent = response[i].name;
                    
                    
                                  
                     const link = document.createElement("a");      // Création de l'élément a qui affiche l'.id de la réponse Server et on utilise son href pour passé sur la page prduit.html
                     link.textContent = "Plus d'info ici";
                     link.style.color = '#000';
                     link.href = './pages/produit.html?id=' + response[i]._id;
                     
                

                    const definition = document.createElement("p");     // Création du l'élément P on lui attribue la .description de la réponse Server
                    definition.textContent = response[i].description;

                    const prix = document.createElement("p");                   // Création du l'élément P on lui attribue le .prix de la réponse Server
                    prix.textContent = response[i].price + "€";

                    const image = document.createElement("img");        // Création du l'élément IMG on lui attribue la .imageUrl de la réponse Server
                    image.src = response[i].imageUrl;
                    
                    
                    camera.appendChild(image);                          // On attache les variables à la balise Camera
                    camera.appendChild(model);
                    camera.appendChild(definition);
                    camera.appendChild(prix);
                    camera.appendChild(link);

                   document.querySelector(".items-container").appendChild(camera);  // Injection de CAMERA dans le HTML 
                   
                    console.log(response[i]);
                    console.log(response[i].name);
                    
                }
            
            } else{
                console.error("Statut: " + this.status);    // Si une erreur avec la requête  
            }
            
        }
    }
    
    req.send(); // Envoy de la Requête au Server



 
}




