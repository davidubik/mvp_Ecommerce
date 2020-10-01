
const parentSection1 = document.querySelector('.section1');
const img1 = new Image();
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();
const img5 = new Image();

img1.classList.add('img');
img2.classList.add('img');
img3.classList.add('img');
img4.classList.add('img');
img5.classList.add('img');

img1.src = "../back/images/vcam_1.jpg";
img2.src ="../back/images/vcam_2.jpg"
img3.src ="../back/images/vcam_3.jpg"
img4.src ="../back/images/vcam_4.jpg"
img5.src ="../back/images/vcam_5.jpg"

parentSection1.appendChild(img1);
parentSection1.appendChild(img2);
parentSection1.appendChild(img3);
parentSection1.appendChild(img4);
parentSection1.appendChild(img5);


