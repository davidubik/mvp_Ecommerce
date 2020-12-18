window.onload = () => {





// Récupération de l URL (querystring) 
  let params = new URLSearchParams (window.location.search);
  




  // Récupération du paramètre ID

  let paramsId = params.get('id');

  console.log(paramsId)


// Récupération (parse des paramètres) 

    
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
        const lentille1 = document.createElement('p');
        const lentille2 = document.createElement('p');
        const iD = document.createElement('p');
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const imgUrl = document.createElement('img');
        
        lentille1.innerHTML = response.lenses[0];
        lentille2.innerHTML = response.lenses[1];
        iD.innerHTML = response._id;
        name.innerHTML = response.name;
        description.innerHTML = response.description;
        price.innerHTML = response.price + '€';
        imgUrl.src = response.imageUrl;

        productContainer.appendChild(name);
        productContainer.appendChild(imgUrl);
        productContainer.appendChild(lentille1);
        productContainer.appendChild(lentille2)
        productContainer.appendChild(iD);
        productContainer.appendChild(price);
       

        

      

      }else{
        console.error("Statut: " + this.status);    // Si une erreur avec la requête  
    }

  }

  req.send();
  // Injection dans le HTML
   
  
    



}

