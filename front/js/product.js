window.onload = () => {





// Récupération de l URL (querystring) 
  let params = new URLSearchParams (window.location.search);
  




  // Récupération du paramètre ID

  let paramsId = params.get('id');

  console.log(paramsId)


    
  // Construction de URL de API

  const Url = "http://localhost:3000/api/cameras/" + paramsId;

  console.log(Url);

  // Requête API (XMLHttpRequest) 

  const req = new XMLHttpRequest;

  req.open("GET", Url);

  req.onreadystatechange = function(e){

    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(Url);


        const productContainer = document.querySelector('.product_container');
        const iD = document.createElement('p');
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const imgUrl = document.createElement('img');
        const buttonProduit = document.querySelector('.bouton-produit');
        const select = document.querySelector('select');

       

      //POUR CHAQUE LENTILLES JE CRÉER UNE BALISE OPTION


        
        
        for(let i = 0; i < response.lenses.length; i++){

         
          const option = document.createElement('option');
          option.innerHTML = response.lenses[i];
          select.appendChild(option);
      

       }

    
       
        
        
        iD.innerHTML = `Id de la Camera : ${response._id}`;
        name.innerHTML = response.name;
        description.innerHTML = response.description;
        description.style.fontStyle = 'italic';
        price.innerHTML = 'Prix :' + ' ' + response.price + '€';
        imgUrl.src = response.imageUrl;

       
        

        buttonProduit.addEventListener('click', (e)=>{
         
         const objetResponse = response;
          
        let obj = JSON.stringify(objetResponse);
        localStorage.setItem("obj", obj);

        const modal = document.getElementById("myModal");

        // Get the button that opens the modal
        const btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        } 
          
       
          console.log(obj);
        })
        
       
        productContainer.appendChild(name);
        productContainer.appendChild(imgUrl);
        productContainer.appendChild(description);
        productContainer.appendChild(iD);
        productContainer.appendChild(price);
        productContainer.appendChild(buttonProduit);
     
        
        

      

      }else{
        console.error("Statut: " + this.status);    // Si une erreur avec la requête  
    }

  }
   
  req.send();
  // Injection dans le HTML
   
  /* À faire Ajouter le(s) produit(s) à son panier, et stylisé la page */
    

/* Créer le bouton panier sur lequel on place un eventListener avec callbacks et un localStorage */

}

