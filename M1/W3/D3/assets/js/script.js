
document.querySelector('#add')
.addEventListener('click', function(){

    let testo = document.querySelector('#testoTask');
  
    let div = document.createElement('div');
    div.classList.add('todo')
    
    
    let span = document.createElement('span');
    span.textContent = testo.value;

    let completa = document.createElement('button');
    completa.textContent = '';
    completa.classList.add('completa')
   
    
   
    completa.addEventListener('click', ()=> {
        div.classList.add('completato');
        document.querySelector('#done')
        .append(div);
    })

    div.append(span, completa);
    document.querySelector('#toDo').append(div);
   
    testo.value = '';
          
});

