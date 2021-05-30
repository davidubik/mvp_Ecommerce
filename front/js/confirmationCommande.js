window.onload = () => {

    //Récupération des données de l'url de la page panier sur la page confirmation de commande.
   let params = new URLSearchParams (window.location.search);

    let paramId = params.get('id');
    let paramTotal = params.get('total');
    console.log(paramId);
    console.log(paramTotal);

    

    
}