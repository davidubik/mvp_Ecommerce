
// const parentSection1 = document.querySelector('.section1');
// const img1 = new Image();
// const img2 = new Image();
// const img3 = new Image();
// const img4 = new Image();
// const img5 = new Image();

// // img1.classList.add('img');
// // img2.classList.add('img');
// // img3.classList.add('img');
// // img4.classList.add('img');
// // img5.classList.add('img');

// // img1.src = "../back/images/vcam_1.jpg";
// // img2.src ="../back/images/vcam_2.jpg"
// // img3.src ="../back/images/vcam_3.jpg"
// // img4.src ="../back/images/vcam_4.jpg"
// // img5.src ="../back/images/vcam_5.jpg"

// parentSection1.appendChild(img1);
// parentSection1.appendChild(img2);
// parentSection1.appendChild(img3);
// parentSection1.appendChild(img4);
// parentSection1.appendChild(img5);

window.onload = function(){

    const req = new XMLHttpRequest();
    // const method = "GET";
    const url = "​http://localhost:3000/api/cam";
    
    req.open("GET", url);
    
    req.onreadystatechange = function(e){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200){
                const response = (JSON.parse(this.responseText));
                for(i = 0; i < image.length; i++){
                    console.log(response[i].url);
                    const image = document.createElement('img');
                    image.src = response[i].url;
                    document.body.appendChild(image);
                }
            } else{
                console.log("Statut: " + this.status);
            }
        }
    }
    
    
    req.send();

}




