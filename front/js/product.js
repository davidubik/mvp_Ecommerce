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
         const name = document.querySelector('.name').innerText = response.name;
         const imgUrl = document.querySelector('.img-url').src = response.imageUrl;
         const description = document.querySelector('.description').innerText = response.description;
         const iD = document.querySelector('.id').innerText = response._id;
         const price = document.querySelector('.price').innerText = response.price + '€';
         const select = document.querySelector('select');
         const buttonProduit = document.querySelector('.bouton-produit');
        
        

       

      //POUR CHAQUE LENTILLES JE CRÉER UNE BALISE OPTION


        
        
        for(let i = 0; i < response.lenses.length; i++){

          const option = document.createElement('option');
          option.innerHTML = response.lenses[i];
          select.appendChild(option);
      

       }        

        buttonProduit.addEventListener('click', (e)=>{
         
         window.location.href='panier.html';
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
        window.location.href='panier.html';
       
          console.log(obj);
        })
      
      }else{
        console.error("Statut: " + this.status);    // Si une erreur avec la requête  
    }

  }
   
  req.send();
  // Injection dans le HTML
   
  /* À faire Ajouter le(s) produit(s) à son panier, et stylisé la page */
    

/* Créer le bouton panier sur lequel on place un eventListener avec callbacks et un localStorage */

}

