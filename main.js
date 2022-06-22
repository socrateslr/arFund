
// Criação das variaveis

var btn_add = document.getElementById('add');
var boxForm = document.getElementById('boxForm');
var btn_addE = document.getElementById('addE');
var boxExp = document.getElementById('boxExp');

// Criação de eventos para o button "+ FORMAÇÃO"

btn_add.addEventListener('click', function(){
    createLineFo();
})

function createLineFo(){


    // BorderTop para divisão de cada adição

    {
        var animacaoForm = document.createElement('div');
        animacaoForm.setAttribute('id', 'animacao');
        animacaoForm.style.borderTop = 'solid 2px';
        animacaoForm.style.marginTop ='15px';
        animacaoForm.style.marginBottom ='15px';

        boxForm.appendChild(animacaoForm);
    }

    // Criação do campo curso

    {var elemento = document.createElement('label');
    elemento.setAttribute('id', 'curso1');
    elemento.textContent = 'Curso:';

    boxForm.appendChild(elemento);
        {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'text');
        elemento.setAttribute('id', 'curso1');
        elemento.setAttribute('name', 'curso1');
        elemento.setAttribute('placeholder', 'Curso');
    
        boxForm.appendChild(elemento);
    }

    {var elemento = document.createElement('br');

    boxForm.appendChild(elemento);{
        var elemento = document.createElement('br');

        boxForm.appendChild(elemento);
    }
    }

    }
    
    // criação do campo instituição
    
    {
        var elemento = document.createElement('label');
        elemento.setAttribute('id', 'inst1');
        elemento.textContent = 'Instituição:';
            
        boxForm.appendChild(elemento);
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'text');
            elemento.setAttribute('id', 'inst1');
            elemento.setAttribute('name', 'inst1');
            elemento.setAttribute('placeholder', 'Instituição de formação');
        
            boxForm.appendChild(elemento);
        }
    }

    {var elemento = document.createElement('br');

    boxForm.appendChild(elemento);
    }    

    // criação do campo Tipo de curso

    {
        var elemento = document.createElement('p');
        elemento.textContent = 'Tipo de curso:';
        
        var container = document.querySelector("#boxForm");

        container.appendChild(elemento);
    }

    {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'radio');
        elemento.setAttribute('id', 'tpCurso1');
        elemento.setAttribute('name', 'tpCurso1');
        elemento.setAttribute('value', 'bacharelado');
        elemento.style.marginLeft = '8%';
        elemento.style.width = '20px';
        
    
        boxForm.appendChild(elemento);
        {
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'tpCurso1');
            elemento.setAttribute('for', 'bacharelado');
            elemento.textContent = 'Bacharelado';
            elemento.style.marginLeft ='5px';           
            
                        
            boxForm.appendChild(elemento);
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'tpCurso1');
            elemento.setAttribute('name', 'tpCurso1');
            elemento.setAttribute('value', 'licenciatura');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'tpCurso1');
                elemento.setAttribute('for', 'licenciatura');
                elemento.textContent = 'Licenciatura';
                elemento.style.marginLeft ='5px';
                
                            
                boxForm.appendChild(elemento);
            }
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'tpCurso1');
            elemento.setAttribute('name', 'tpCurso1');
            elemento.setAttribute('value', 'tecnologo');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'tpCurso1');
                elemento.setAttribute('for', 'tecnologo');
                elemento.textContent = 'Tecnólogo';
                elemento.style.marginLeft ='5px';
                
                            
                boxForm.appendChild(elemento);
            }
        }
    }
    

    // criação do campo Tipo de curso

    {var elemento = document.createElement('br');

    boxForm.appendChild(elemento);
    }

    {
        var elemento = document.createElement('p');
        elemento.textContent = 'Status:';
        
        var container = document.querySelector("#boxForm");

        container.appendChild(elemento);
    }

    {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'radio');
        elemento.setAttribute('id', 'status1');
        elemento.setAttribute('name', 'status1');
        elemento.setAttribute('value', 'concluido');
        elemento.style.marginLeft = '8%';
        elemento.style.width = '20px';
        
    
        boxForm.appendChild(elemento);
        {
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'status1');
            elemento.setAttribute('for', 'concluido');
            elemento.textContent = 'Concluído';
            elemento.style.marginLeft ='5px';
            
                        
            boxForm.appendChild(elemento);
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'status1');
            elemento.setAttribute('name', 'status1');
            elemento.setAttribute('value', 'cursando');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'status1');
                elemento.setAttribute('for', 'cursando');
                elemento.textContent = 'Cursando';
                elemento.style.marginLeft ='5px';
                
                            
                boxForm.appendChild(elemento);
            }
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'status1');
            elemento.setAttribute('name', 'status1');
            elemento.setAttribute('value', 'paralisado');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'status1');
                elemento.setAttribute('for', 'paralisado');
                elemento.textContent = 'Paralisado';
                elemento.style.marginLeft ='5px';
                
                            
                boxForm.appendChild(elemento);
            }
        }
    }
}
  
// Criação de eventos para o button "+ EXPERIENCIAS"

btn_addE.addEventListener('click', function(){
    createLineEx();
})

function createLineEx(){


    // BorderTop para divisão de cada adição

    {
        var animacaoExp = document.createElement('div');
        animacaoExp.setAttribute('id', 'animacao');
        animacaoExp.style.borderTop = 'solid 2px';
        animacaoExp.style.marginTop ='15px';
        animacaoExp.style.marginBottom ='15px';

        boxExp.appendChild(animacaoExp);
    }
    
    // Criação do campo Data Inicio
    
    var elemento = document.createElement('label');
    elemento.setAttribute('id', 'dtIni1');
    elemento.textContent = 'Data Inicio:';

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'date');
        elemento.setAttribute('id', 'dtIni1');
        elemento.setAttribute('name', 'dtIni1');
        elemento.style.width = '100px';

        boxExp.appendChild(elemento);
    }

    {var elemento = document.createElement('br');

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        boxExp.appendChild(elemento);
    }
    }

    // Criação do campo Data Fim

    {
        var elemento = document.createElement('label');
        elemento.setAttribute('id', 'dtFim1');
        elemento.textContent = 'Data Fim:';

        boxExp.appendChild(elemento);{
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'date');
            elemento.setAttribute('id', 'dtFim1');
            elemento.setAttribute('name', 'dtFim1');
            elemento.style.width = '100px';

            boxExp.appendChild(elemento);
        }
    }

    {var elemento = document.createElement('br');

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        boxExp.appendChild(elemento);
    }
    }
    
    // Criação do campo Até o momento

    {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'checkbox');
        elemento.setAttribute('id', 'ateMomento');
        elemento.setAttribute('name', 'ateMomento');
        elemento.style.marginLeft = '8%';
        elemento.style.width = '15px';

        boxExp.appendChild(elemento);{
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'ateMomento');
            elemento.textContent = 'Até o momento.';
            elemento.style.margin = '5px';
            
            boxExp.appendChild(elemento);
        }
    }

    {var elemento = document.createElement('br');

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        boxExp.appendChild(elemento);
    }
    }

    // Criação do campo Empresa

    {
        var elemento = document.createElement('label');
        elemento.setAttribute('id', 'empresa1');
        elemento.textContent = 'Empresa:';        

        boxExp.appendChild(elemento);{
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'text');
            elemento.setAttribute('id', 'empresa1');
            elemento.setAttribute('name', 'empresa1');
            elemento.setAttribute('placeholder', 'Ex: Empresa LTDA');

            boxExp.appendChild(elemento);
        }
    }

    {var elemento = document.createElement('br');

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        boxExp.appendChild(elemento);
    }
    }

    // Criação do campo Função

    {
        var elemento = document.createElement('label')
        elemento.setAttribute('id', 'func1');
        elemento.textContent = 'Função:';

        boxExp.appendChild(elemento);{
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'text');
            elemento.setAttribute('id', 'func1');
            elemento.setAttribute('name', 'func1');
            elemento.setAttribute('placeholder', 'Ex: Aux. Administrativo');
            

            boxExp.appendChild(elemento);
        }
    }
    
    {var elemento = document.createElement('br');

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        boxExp.appendChild(elemento);
    }
    }
}


// Jquery textarea

$('#textObj').on('input', function(){
    this.style.height = 'auto';

    this.style.height = 
            (this.scrollHeight) + 'px';
});

$('textarea').resizable();



