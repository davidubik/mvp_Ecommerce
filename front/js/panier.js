window.onload = () =>{

    //Récupérer le LS
    
         localStorage.getItem('panier'); 
    
       const panier = JSON.parse(localStorage.getItem('panier')); 
       

   // Inject éléments dans le html
    for(let i = 0; i < panier.length; i++){
    
        document.querySelector('.panier-titre').innerText = panier[i].product.name;
        document.querySelector('.panier-img').src = panier[i].product.imageUrl; 
        document.querySelector('.panier-description').innerText = panier[i].product.description;
        document.querySelector('.panier-id').innerText = `Code article : ${panier[i].product._id}`;  
        document.querySelector('.panier-lentille').innerText = `Lentille selectioner : ${panier[i].product.lenses}`;
        document.querySelector('.panier-prix').innerText = `Prix : ${panier[i].product.price}€`;
    
    }

    //Formulaire 

    //Submit empècher la propagation du form.
    
   
    //Variable requêtte AJAX 
    const req = new XMLHttpRequest();
    const form = document.querySelector('form');
    const regexEmail = /\S+@\S+\.\S+/;
    const regexNom = /^[a-zA-Z]+$/i;
    const regexAdresse = /^[0-9][a-zA-Z]$/;
    let arrayId = [];

    // const formRegexTest = () =>{
    //     console.log(comande);
    // }
       

        
        form.addEventListener('submit', (event)=> {
            event.preventDefault();

           
            const data = new FormData(form);
            let responseData;

                //Objet récuparation info comande 
                    let comande = {
                prenom :"" ,
                nom : "",
                adresse : "",
                ville : "",
                email : "",
                products : ""
                };

                
                //Récup de la saisie du form envoyer dans l'objet comande
                comande.prenom = data.get('user_first_name');
                comande.nom = data.get('user_last_name');
                comande.adresse = data.get('user_adresse');
                comande.email = data.get('user_mail');
                comande.ville = data.get('user_ville');
                console.log(comande);
                console.log(panier);

                

                //Vérification du form avec des ReGex

                if(regexNom.test(comande.prenom)){
                    console.log('ok');
                }else {
                    alert('Merci de remplire correctement espèce d enculé !!');
                }

                if (regexEmail.test(comande.email)) {
                    console.log('Yes');
                }else{
                    alert('Bück Dich!!');
                }

                if (regexNom.test(comande.nom)) {
                    console.log('Nom est ok');  
                }else{
                    console.log('Fuck Off!!!');
                }
            
                if(regexAdresse.test(comande.adresse)){
                    console.log('Adresse Ok.')
                }else{
                    console.log('Adresse pas Ok');
                }   

                if (regexNom.test(comande.ville)) {
                    console.log('Ville ok');  
                }else{
                    console.log('Tête de bite!!!');
                }
                
                

                //Parse Comande en JSON

               comandeJson = JSON.stringify(comande);
               console.log(comandeJson);

               for(let i = 0; i < panier.length; i++){
                arrayId.push(panier[i].product._id);
                  
                  
               }
                console.log(arrayId);

                
                req.open("POST", "http://localhost:3000/api/cameras/order");
                req.onreadystatechange = (event) => {
                    if(this.readyState === XMLHttpRequest.DONE){
                        if(this.status === 201){//ajout JSON
                          responseData = JSON.parse(this.responseText);                              
                            }else{
                                console.log("Status :" + this.status);
                            }
                    }
                }

                req.send(comande);

                
        
            
    });
    
    
       
    
     



}