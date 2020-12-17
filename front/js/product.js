window.onload = () => {


// Récupération de l URL (querystring) 
  let params = new URLSearchParams (window.location.search);
  




  // Récupération du paramètre ID

  let paramsId = params.get('id');

  console.log(paramsId)


// Récupération (parse des paramètres) 

    
  // Construction de URL de API

  const Url = "http://localhost:3000/api/cameras" + paramsId;

  console.log(Url);

  // Requête API (XMLHttpRequest) 

  const req = new XMLHttpRequest;

  req.open("GET", Url);

  req.onreadystatechange = function(e){

    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      
      


    }else{
      console.error("Statut: " + this.status);    // Si une erreur avec la requête  
  }

  }

  // Injection dans le HTML
   

    



}

