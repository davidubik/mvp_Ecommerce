window.onload = () =>{

    //Récupérer le LS
    
       localStorage.getItem('panier'); 
       const panier = JSON.parse(localStorage.getItem('panier')); 
    
   // Inject éléments dans le html
    const injectionEltHtml = () =>{
        for(let i = 0; i < panier.length; i++){
            
                document.querySelector('.panier-titre').innerText = panier[i].product.name;
                document.querySelector('.panier-img').src = panier[i].product.imageUrl; 
                document.querySelector('.panier-description').innerText = panier[i].product.description;
                document.querySelector('.panier-id').innerText = `Code article : ${panier[i].product._id}`;  
                document.querySelector('.panier-lentille').innerText = `Lentille selectioner : ${panier[i].product.lenses}`;
                document.querySelector('.panier-prix').innerText = `Prix : ${panier[i].product.price}€`;
                
            
            }
    }
    injectionEltHtml();
    
   
    const form = document.querySelector('form');
    const regexEmail = /\S+@\S+\.\S+/;
    const regexNom = /^[a-zA-Z]+$/i;
    const regexAdresse = /^[0-9]+ ([a-zA-Z]+ ?)+$/;
    let arrayId = [];
    let total = 0;

        const formRegexTest = (contact) =>{//Clean message else!!!!!
            
            if(regexNom.test(contact.prenom)){
                console.log('ok');
            }else {
                alert('Merci de remplire correctement espèce d enculé !!');
            }

            if (regexEmail.test(contact.email)) {
                console.log('Yes');
            }else{
                alert('Bück Dich!!');

            }

            if (regexNom.test(contact.nom)) {
                console.log('Nom est ok');  
            }else{
                console.log('Fuck Off!!!');
            }
        
            if(regexAdresse.test(contact.adresse)){
                console.log('Adresse Ok.')
            }else{
                console.log('Adresse pas Ok');
            }   

            if (regexNom.test(contact.ville)) {
                console.log('Ville ok');  
            }else{
                console.log('Tête de bite!!!');
            }
        }

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
                
                 for(let i = 0; i< arrayId.length; i++){
                    products.push(arrayId[i]); 
                    console.log(products);
                 }
                 console.log(products);

                 const commande = {
                     contact : contact,
                    products : products
                 }
                 const commandeJson = JSON.stringify(commande);
                 console.log(commandeJson);

                 //REQUÊTE POST
                 fetch('http://localhost:3000/api/cameras/order', {
                     method: 'POST',
                     headers: new Headers({'content-type':'application/json'}),
                     body: commandeJson
                 }).then(response => {
                     console.log(response)
                        const responseJsonPost = response.json().then(data =>{
                           
                            for(let i = 0; i< data.products.length; i++){   
                                  let price = data.products[i].price;
                                  total += price;
                                  console.log(price);
                                  console.log(total);                                 
                            } 
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