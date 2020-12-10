window.onload = () => {


// Récupération de l URL (querystring) 
  let params = new URLSearchParams (window.location.search);
  
    console.log(params.get('id'));



  // Récupération du paramètre ID

  let paramsId = params.get('id');

  console.log(paramsId)


// Récupération (parse des paramètres) 


  // Construction de URL de API
  // Requête API (XMLHttpRequest) 
  // Injection dans le HTML
   

    // const req = new XMLHttpRequest();
    // 

    // req.open("GET", Url);
    
    // req.onreadystatechange = function(e){

    //     if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
    //         const response = JSON.parse(this.responseText);
           

    //        console.log(response);
    //     }else{
    //         console.error("Statut: " + this.status);
    //     }

    // }

    
   

    // req.send();
    // console.log(response);





}

