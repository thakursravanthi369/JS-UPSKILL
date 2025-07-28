const img1 = new Image();
img1.src = 'images/drycleaning.jpeg';
const img2 = new Image();
img2.src = 'images/leather.jpeg';
const img3 = new Image();
img3.src = 'images/ironing.jpg';
const img4 = new Image();
img4.src = 'images/dress.jpeg';
const img5 = new Image();
img5.src = 'images/washfold.jpeg';
const img6 = new Image();
img6.src = 'images/stain.webp';

const addbtn = document.getElementById('add');
const skipbtn = document.getElementById('skip');
const imageList = document.querySelector('.imagesList');
const itemList = document.getElementById('itemList');
let itemsList = [];
let items = document.getElementById('items');
let total = document.getElementById('price');
let booknow = document.getElementById('booknow');
let notadded = document.getElementById('notadded');
const loader = document.getElementById('loader');


let totamount = 0;

const serviceList = [
    {image:img1, service_name: 'Dry Cleaning', service_price: '200.00'},
    {image:img2, service_name: 'Leather & Suede Cleaning', service_price: '999.00'},
    {image:img3, service_name: 'Ironing', service_price: '30.00'},
    {image:img4, service_name: 'Wedding Dress Cleaning', service_price: '2400.00'},
    {image:img5, service_name: 'Wash and Fold', service_price: '140.00'},
    {image:img6, service_name: 'Stain Removal', service_price: '500.00'}
];


let currentIndex = 0;

const displayService = (index) => {
    const service = serviceList[index];

    imageList.innerHTML = `
        <div class="images">
            <img src="${service.image.src}">
        </div>
        <div class="serviceList">
            <h3 id="servicename">${service.service_name}</h3>
            <h2 id="serviceprice">&#x20b9; ${service.service_price}</h2>
        </div>            
                    
    `;
  
};

let i=0;

const addItem = (index) => {
    notadded.style.display = 'none';
    
    const service = serviceList[index];
    const newItem = document.createElement('div');
    i++;
    newItem.innerHTML = `
    <pre>${i}             ${service.service_name}</pre>
    <p>&#x20b9; ${service.service_price}</p>
    `;
    newItem.classList.add('item');
    itemList.appendChild(newItem);
    itemsList.push(service.service_name);
    totamount += parseInt(service.service_price, 10);
    total.innerHTML = `&#x20b9; ${totamount}.00`;
};



displayService(currentIndex);


addbtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % serviceList.length;
    displayService(currentIndex);
    items.style.display = 'none';
    itemList.style.display = 'block';
    addItem((currentIndex === 0 ? serviceList.length : currentIndex) - 1);
});

skipbtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % serviceList.length;
    displayService(currentIndex);
});
      
booknow.addEventListener('click', ()=>{
    if(itemsList.length > 0){
        while(itemsList.length>0){
            itemsList.pop();
        }
        notadded.innerHTML='<p>Thank You for Contacting. We will get back to you soon</p>';
        notadded.style.display = 'flex';
        notadded.style.color = '#12b820';
        
        loader.style.display = 'inline-block';

        setTimeout(()=>{
            itemList.innerHTML = '';
            items.style.display = 'flex';
            totamount = 0;
             total.innerHTML = `&#x20b9; ${totamount}.00`;
             document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
             notadded.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                    <p>Please select items from the list first.</p>`;
                                    notadded.style.display = 'none';
                                    notadded.style.color = '#e40707';
            currentIndex = 0;
            i=0;
            displayService(currentIndex);
            loader.style.display = 'none';
        },3000);
       
        
        
    }
    else{
        notadded.style.display = 'flex';
    }
});
               