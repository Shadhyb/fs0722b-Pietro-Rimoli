fetch ('users.json').then(function (response){
    return response.json();

}).then(function(json){
classe = json; 
console.log(classe)

document.querySelector('#imgUser1').innerHTML = `<img class="bg-secondary bg-opacity-75 border rounded-circle" src ="img/male.png"></img>`
document.querySelector('#user1').innerHTML = classe[0].firstName + " " + classe[0].lastName + " " ;
document.querySelector('#emailUser1').innerHTML = classe[0].email;
document.querySelector('#user2').innerHTML = classe[1].firstName + " " + classe[1].lastName;
document.querySelector('#emailUser2').innerHTML = classe[1].email;
document.querySelector('#imgUser2').innerHTML = `<img class="bg-secondary bg-opacity-75 border rounded-circle" src ="img/female.png"></img>`

}).catch(function(err){
    console.log ('fetch problem: '+ err.message);

});





