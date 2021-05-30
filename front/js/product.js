window.onload = () => {

//Utilisation du paramètre QueryString
// Récupération de l URL (querystring) 
  let params = new URLSearchParams (window.location.search);

  // Récupération du paramètre ID
  let paramsId = params.get('id');
  console.log(paramsId)

  //Fonction qui itére sur les lentilles des apparareils, qui à chaque itération crée une nouvelle balise <option>
  const recupLentilles = (produit, select) =>{

    for(let i = 0; i < produit.lenses.length; i++){
      const option = document.createElement('option');
      option.innerHTML = produit.lenses[i];
      select.appendChild(option);
     }

  }

  //Utilisation de la méthode Fetch pour récupérer les données du Serveur.
  //Injection des éléments dans une template html.
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
       recupLentilles(produit, select);
            
            //EventListener sur le Bouton et LocalStorage
            produitBouton.addEventListener('click', (e)=>{
             
            //On récupére le contenue du produit
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

