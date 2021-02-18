window.onload = () => {

    const req = new XMLHttpRequest(); // Requête XML
    const Url = "http://localhost:3000/api/cameras"; // Url de l'API où l'on envoie la requête
    
    req.open("GET", Url); // Instance la requête XML avec comme arguments le methode GET et l'URL.
    

    req.onreadystatechange = function(e){                       // AJout de l'EventHandler sur la requête
    if(this.readyState === XMLHttpRequest.DONE){                // Si le raquête est finie
            if(this.status === 200){                            // Si la requête excécuter et que le satue est === à 200 (OK)
                const response = JSON.parse(this.responseText); // Traduit la réponse du Server au format JSON
                for(i = 0; i < response.length; i++){           // On parcour la réponse du Server
                    console.log(response[i].imageUrl);


                    const camera = document.createElement("div");   // Création de l'élément camera (div) 
                    camera.classList.add("camera");

                    const txtContainer = document.createElement('div');
                    txtContainer.classList.add('txt-container');

                    const itemTitre = document.createElement("h3");     // Création du l'élément H1 on lui attribue le .name de la réponse Server
                    itemTitre.textContent = response[i].name;
                                
                      const itemLien = document.createElement("a");      // Création de l'élément a qui affiche l'.id de la réponse Server et on utilise son href pour passé sur la page prduit.html
                      itemLien.textContent = "En savoir plus";
                      itemLien.style.color = '#000';
                      itemLien.href = './pages/produit.html?id=' + response[i]._id;
                     

                    const itemPrix = document.createElement("p");                   // Création du l'élément P on lui attribue le .prix de la réponse Server
                    itemPrix.textContent = `Prix: ${response[i].price}€`;

                    const itemImage = document.createElement("img");        // Création du l'élément IMG on lui attribue la .imageUrl de la réponse Server
                    itemImage.src = response[i].imageUrl;
                    
                    
                    txtContainer.appendChild(itemTitre);
                    camera.appendChild(itemImage);                          // On attache les variables à la balise Camera
                    txtContainer.appendChild(itemPrix);
                    txtContainer.appendChild(itemLien);

                    document.querySelector(".items-container").appendChild(camera);  // Injection de CAMERA dans le HTML 
                    document.querySelector(".items-container").appendChild(txtContainer);

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




