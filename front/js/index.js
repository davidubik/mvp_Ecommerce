window.onload = () => {

    //FETCH
    fetch("http://localhost:3000/api/cameras")
    .then((response) => response.json())
    .then((response) => {
 
        //Récupération des élements depuis la réponse du server            
        for(i = 0; i < response.length; i++){      
        console.log(response[i].imageUrl);

        //Injection des élémnents dans le HTML
        const camera = document.createElement("div");   
        camera.classList.add("camera");
        document.querySelector(".items-container").appendChild(camera);

       
        const itemTitre = document.createElement("h3"); 
        itemTitre.textContent = response[i].name;
        

         const txtContainer = document.createElement('div');
        txtContainer.classList.add('txt-container');
        txtContainer.append(itemTitre);
        const itemImage = document.createElement("img");       
        itemImage.src = response[i].imageUrl;
        camera.append(itemImage);

        const itemLien = document.createElement("a");      
        itemLien.textContent = "En savoir plus";
        itemLien.style.color = '#000';
        itemLien.href = './pages/produit.html?id=' + response[i]._id; 

        const itemPrix = document.createElement("p");                  
        itemPrix.textContent = `Prix: ${response[i].price}€`;
                                                            
        txtContainer.appendChild(itemPrix);
        txtContainer.appendChild(itemLien);
                           
        document.querySelector(".items-container").appendChild(txtContainer);
        
    }
    console.log(response)
})
    .catch(error => console.log('Error : ' + error));
 
    }




