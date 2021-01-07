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

        for(let i = 0; i < lentilles.length; i++){

           lentilles.innerHTML = response.lenses[i];

        }
        
        lentilles.innerHTML = response.lenses;
        iD.innerHTML = response._id;
        name.innerHTML = response.name;
        description.innerHTML = response.description;
        price.innerHTML = response.price + '€';
        imgUrl.src = response.imageUrl;


        

          

        productContainer.appendChild(name);
        productContainer.appendChild(imgUrl);
        productContainer.appendChild(lentilles);
        productContainer.appendChild(iD);
        productContainer.appendChild(price);
       
        
       
        
     
      

      }else{
        console.error("Statut: " + this.status);    // Si une erreur avec la requête  
    }

  }
   
  req.send();
  // Injection dans le HTML
   
  /* À faire Ajouter le(s) produit(s) à son panier, et stylisé la page */
    



}

