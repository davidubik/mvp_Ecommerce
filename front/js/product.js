window.onload = () => {


// Récupération de l URL (querystring) 
  let params = new URLSearchParams (window.location.search);

  // Récupération du paramètre ID
  let paramsId = params.get('id');
  console.log(paramsId)


  fetch("http://localhost:3000/api/cameras/" + paramsId)
  .then((produit) => produit.json())
  .then((produit) => {

    document.querySelector('.produit-titre').innerText = produit.name;
    document.querySelector('.produit-img').src = produit.imageUrl;
    document.querySelector('.produit-description').innerText = produit.description;
    document.querySelector('.produit-id').innerText = `Code article : ${produit._id}`;
    document.querySelector('.produit-prix').innerText = `Prix: ${produit.price}€`;
    const produitBouton = document.querySelector('.produit-bouton'); 

     //Récupération de la balise select
      const select = document.querySelector('select');

      //Lentilles création d'un balise option.
        for(let i = 0; i < produit.lenses.length; i++){
             const option = document.createElement('option');
             option.innerHTML = produit.lenses[i];
             select.appendChild(option);
            }
            
            //EventListener sur le Bouton et LocalStorage
            produitBouton.addEventListener('click', (e)=>{
             
            //On récupére le contenue de du produit
             let panier = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier'))  :  []; 
             
             //On ajoute le produit au panier
             panier.push({ product : produit, selectLense : select.value});
           
             //On sauvegar dans le localStorage
              localStorage.setItem('panier', JSON.stringify(panier));
              console.log(panier);
              window.location.href='panier.html';

            })
     console.log(produit);
  })
  .catch(error => console.log('Error : ' + error));

}

