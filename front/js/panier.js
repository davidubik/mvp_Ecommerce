window.onload = () =>{

    //Récupérer le LS
       localStorage.getItem('panier'); 
       const panier = JSON.parse(localStorage.getItem('panier')); 
        console.log(panier);

   // Inject éléments dans une template HTML
    const injectionEltHtml = (panier) =>{
        for(let i = 0; i < panier.length; i++){
            //Crée les éléments en js
        
            //Panier Container
          const panierContainer = document.querySelector('.panier-container');
          //Img Container
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('img-container');
          panierContainer.append(imgContainer);

          const panierTitre = document.createElement('h2');
          panierTitre.classList.add('panier-titre')
          panierTitre.innerText = panier[i].product.name;
          imgContainer.append(panierTitre);

          const panierImg = document.createElement('img');
          panierImg.classList.add('panier-img');
          panierImg.src = panier[i].product.imageUrl; 
          imgContainer.append(panierImg); 
        
          //Txt Container
         const txtContainer = document.createElement('div');
         txtContainer.classList.add('txt-container');
         imgContainer.append(txtContainer);

         const panierDescription = document.createElement('p');
         panierDescription.classList.add('panier-description');
         panierDescription.innerText = panier[i].product.description;
         imgContainer.append(panierDescription);

         const panierId = document.createElement('p');
         panierId.classList.add('panier-id');
         panierId.innerText = `Code article : ${panier[i].product._id}`;  
         imgContainer.append(panierId);   

        const panierLentille = document.createElement('p');
        panierLentille.classList.add('panier-lentille');
        panierLentille.innerText = `Lentille selectioner : ${panier[i].product.lenses}`;
        imgContainer.append(panierLentille);
                
        const panierPrix = document.createElement('p');
        panierPrix.classList.add('panier-prix');
        panierPrix.innerText = `Prix : ${panier[i].product.price}€`;       
        imgContainer.append(panierPrix);       
                
            
            }
    }
    injectionEltHtml(panier);
    
   //Regex pour vérifier que les champs du formulaire correspondent bien à ce qui est demandé à l'utilisateur
    const form = document.querySelector('form');
    const regexEmail = /\S+@\S+\.\S+/;
    const regexNom = /^[a-zA-Z]+$/i;
    const regexAdresse = /^[0-9]+ ([a-zA-Z]+ ?)+$/;
    let arrayId = [];
    let total = 0;

        const formRegexTest = (contact) =>{
            
            if(regexNom.test(contact.prenom)){
                console.log('Prenom ok');
            }else {
                alert('Merci de remplire correctement le champ.');
            }

            if (regexEmail.test(contact.email)) {
                console.log('Email Ok');
            }else{
                alert('Merci de remplire correctement le champ.');

            }

            if (regexNom.test(contact.nom)) {
                console.log('Nom ok');  
            }else{
                console.log('Merci de remplire correctement le champ.');
            }
        
            if(regexAdresse.test(contact.adresse)){
                console.log('Adresse Ok.')
            }else{
                console.log('Merci de remplire correctement le champ.');
            }   

            if (regexNom.test(contact.ville)) {
                console.log('Ville ok');  
            }else{
                console.log('Merci de remplire correctement le champ.');
            }
        }
        //Fonction qui itére sur le panier de l'utilisateur, et en récupère l' ID
        const extractPanierId = (panier) =>{

            for(let i = 0; i < panier.length; i++){
                arrayId.push(panier[i].product._id);
               }

        }

       
        form.addEventListener('submit', (event)=> {
            event.preventDefault();
            const data = new FormData(form);
            let responseData;
            let orderId;
            

                //Objet récuparation info contact   
            let contact = {    
                firstName :"" ,
                lastName : "",
                address : "",
                city : "",
                email : ""
            };
                let products = [];
                //Récup de la saisie du form envoyer dans l'objet contact
                contact.firstName = data.get('user_first_name');
                contact.lastName = data.get('user_last_name');
                contact.address = data.get('user_adresse');
                contact.email = data.get('user_mail');
                contact.city = data.get('user_ville');
                console.log(contact);
                console.log(panier);

                //Vérification du form avec des ReGex
                formRegexTest(contact);

                extractPanierId(panier);
               
                console.log(arrayId);
                
                //Itérarion  sur le tableau des id des produits.
                 for(let i = 0; i< arrayId.length; i++){
                    products.push(arrayId[i]); 
                    console.log(products);
                 }
                 console.log(products);

                 //Objet qui contiendra les données du form et le produit sélectioné.
                 const commande = {
                     contact : contact,
                    products : products
                 }
                 const commandeJson = JSON.stringify(commande);
                 console.log(commandeJson);

                 //Utilisation de le method Fetch mais cette fois avec une requête POST pour envoyer les données au Serveur
                 fetch('http://localhost:3000/api/cameras/order', {
                     method: 'POST',
                     headers: new Headers({'content-type':'application/json'}),
                     body: commandeJson
                 }).then(response => {
                     console.log(response)
                     
                     //Fonction  pour additioner le prix de plusieurs produits.
                        const responseJsonPost = response.json().then(data =>{
                            for(let i = 0; i< data.products.length; i++){   
                                  let price = data.products[i].price;
                                  total += price;
                                  console.log(price);
                                  console.log(total);                                 
                            }
                            //Utilisation du paramètre Query string pour passer l'id et le total dans l url et permet de passer
                            // les données d'une page à l'autre. 
                            window.location.href='confirmation.html?id=' + data.orderId + '&total=' + total;
                            console.log(data) 
                            console.log(data.orderId);
                            console.log(total);
                        });
                 }).catch(err => {
                     console.log(err)
                 })          
    
    });
}


