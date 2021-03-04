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
      const produit = JSON.parse(this.responseText);
      
      // const productContainer = document.querySelector('.product-container');
      document.querySelector('.produit-titre').innerText = produit.name;
      document.querySelector('.produit-img').src = produit.imageUrl;
      document.querySelector('.produit-description').innerText = produit.description;
      document.querySelector('.produit-id').innerText = `Code article : ${produit._id}`;
      document.querySelector('.produit-prix').innerText = `Prix: ${produit.price}€`;
      const produitBouton = document.querySelector('.produit-bouton'); 

      //Récupération de la balise select
      const select = document.querySelector('select');

      //POUR CHAQUE LENTILLES JE CRÉER UNE BALISE OPTION   
        
        for(let i = 0; i < produit.lenses.length; i++){
          
            const option = document.createElement('option');
            option.innerHTML = produit.lenses[i];
            select.appendChild(option);

       }    
    
  

        produitBouton.addEventListener('click', (e)=>{

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
            //LocalStorage
            //On récupére le contenue de du produit
            let panier = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier'))  :  []; 
            //On ajoute le produit au panier
            panier.push({
              product : produit,
              selectLense : select.value
            });
            //On sauvegar dans le localStorage
            localStorage.setItem('panier', JSON.stringify(panier));

              // localStorage.setItem('nameOfItem', produit);
              // window.location.href='panier.html';
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

