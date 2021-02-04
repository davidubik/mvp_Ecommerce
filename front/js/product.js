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
        const lentilles = document.createElement('p');
        const iD = document.createElement('p');
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const imgUrl = document.createElement('img');
        const buttonProduit = document.querySelector('.bouton-produit');

       

      //POUR CHAQUE LENTILLES JE CRÉER UNE BALISE OPTION


        //MODAL
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        const close = document.createElement('span');
        close.classList.add('close');
        close.innerText = 'x';
        const modalTxt = document.createElement('p');

        modal.appendChild(modalContent);
        modalContent.appendChild(close);
        modalContent.appendChild(modalTxt);
        
        
        
        for(let i = 0; i < response.lenses.length; i++){

          lentilles.innerHTML = response.lenses[i];
          // const liste = document.createElement('select');
          const option = document.createElement('option');
          option.innerHTML = response.lenses[i];
          // liste.appendChild(option);
          // option.appendChild(lentilles);
         

       }


       
        
        lentilles.innerHTML = response.lenses;
        iD.innerHTML = response._id;
        name.innerHTML = response.name;
        description.innerHTML = response.description;
        price.innerHTML = response.price + '€';
        imgUrl.src = response.imageUrl;

       
        

        buttonProduit.addEventListener('click', (e)=>{
         
         const objetResponse = response;
          
        let obj = JSON.stringify(objetResponse);
        localStorage.setItem("obj", obj);
        modal.style.display = "block";
        // modal.style.display = "none";

       
          console.log(obj);
        })
        
       
        productContainer.appendChild(name);
        productContainer.appendChild(imgUrl);
        // productContainer.appendChild(selectLentilles);
        // productContainer.append(liste);
        productContainer.appendChild(lentilles);
        productContainer.appendChild(description);
        productContainer.appendChild(iD);
        productContainer.appendChild(price);
        productContainer.appendChild(buttonProduit);
        productContainer.appendChild(modal);
        
        

      

      }else{
        console.error("Statut: " + this.status);    // Si une erreur avec la requête  
    }

  }
   
  req.send();
  // Injection dans le HTML
   
  /* À faire Ajouter le(s) produit(s) à son panier, et stylisé la page */
    

/* Créer le bouton panier sur lequel on place un eventListener avec callbacks et un localStorage */

}

