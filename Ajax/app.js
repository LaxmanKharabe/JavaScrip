// Text data AJAX

function onTextBtnClick(){
    // Creating AJAX Request
    let xhr = new XMLHttpRequest();

    // Prepare the Request
    xhr.open('GET', './message.txt', true);

    // Send the request
    xhr.send();

    // Process the request
    xhr.onload = () =>{
        if(xhr.status===200){
            let data = xhr.responseText;
            console.log(data);
            displayTextData(data);
        }
    }
};
let displayTextData = (data) =>{
    document.querySelector('#text-card').innerHTML = `<h4>${data}</h4>`;
}


// JSON Data Ajax

function onJSOnBtnClick(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./mobiles.json', true);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status===200){
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            displayJSONData(mobile);
        };
    };
}
let displayJSONData = (mobile) =>{
    let htmlTemplate = `<ul class="list-group mt-1">
                            <li class="list-group-item">Mobile : ${mobile.id}</li>
                            <li class="list-group-item">Brand  : ${mobile.brand}</li>
                            <li class="list-group-item">Color  : ${mobile.color}</li>
                            <li class="list-group-item">Price  : ${mobile.price}</li>
                       </ul>`;
document.querySelector('#json-card').innerHTML = htmlTemplate;
}

// API Data Ajax

function onAPIBtnClick(){
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET','https://jsonplaceholder.typicode.com/users', true);
    // xhr.send();
    // xhr.onload = () =>{
    //     if(xhr.status === 200){
    //         let data = xhr.responseText;
    //         let users = JSON.parse(data);
    //         displayAPIData(users);
    //     }
    // };
    
    fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json())
    .then(userData => {
        displayAPIData(userData);
    })
};

let displayAPIData = (users) =>{
    let htmlTemplate ='';
    for(let user of users){
        htmlTemplate+=`<ul class="list-group mt-1">
        <li class="list-group-item">ID : ${user.id}</li>
        <li class="list-group-item">Name  : ${user.name}</li>
        <li class="list-group-item">Username  : ${user.username}</li>
        <li class="list-group-item">Street  : ${user.address.street}</li>
        <li class="list-group-item">Mobile No.  : ${user.phone}</li>
        <li class="list-group-item">Website  : ${user.website}</li>
     </ul>`;
    };
    document.querySelector('#api-card').innerHTML = htmlTemplate;
}