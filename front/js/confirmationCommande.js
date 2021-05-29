window.onload = () => {


   let params = new URLSearchParams (window.location.search);

    let paramId = params.get('id');
    let paramTotal = params.get('total');
    console.log(paramId);
    console.log(paramTotal);

    

    
}