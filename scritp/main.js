
// Criação das variaveis

var btn_add = document.getElementById('add');
var boxForm = document.getElementById('boxForm');
var btn_addE = document.getElementById('addE');
var boxExp = document.getElementById('boxExp');
var btn_rem = document.getElementById('rem');

// Criação de eventos para o input button "+ FORMAÇÃO"

btn_add.addEventListener('click', function(){
    createLineFo();
});

function createLineFo(){

    // Criação da div
    
    {
        var divForm = document.createElement('div');
        divForm.setAttribute('id', 'divForm');
        divForm.style.borderBottom = 'solid 2px';
        divForm.style.marginTop ='15px';
        divForm.style.paddingBottom ='15px';
        
        
        boxForm.appendChild(divForm);
    }


    // Criação do campo curso

    {var elemento = document.createElement('label');
    elemento.setAttribute('id', 'curso[]');
    elemento.textContent = 'Curso:';

    divForm.appendChild(elemento);
        {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'text');
        elemento.setAttribute('id', 'curso[]');
        elemento.setAttribute('name', 'curso[]');
        elemento.setAttribute('placeholder', 'Curso');
    
        divForm.appendChild(elemento);
    }

    {var elemento = document.createElement('br');

    divForm.appendChild(elemento);{
        var elemento = document.createElement('br');

        divForm.appendChild(elemento);
    }
    }

    }
    
    // criação do campo instituição
    
    {
        var elemento = document.createElement('label');
        elemento.setAttribute('id', 'inst[]');
        elemento.textContent = 'Instituição:';
            
        divForm.appendChild(elemento);
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'text');
            elemento.setAttribute('id', 'inst[]');
            elemento.setAttribute('name', 'inst[]');
            elemento.setAttribute('placeholder', 'Instituição de formação');
        
            divForm.appendChild(elemento);
        }
    }

    {var elemento = document.createElement('br');

    divForm.appendChild(elemento);
    }    

    // criação do campo Tipo de curso

    {
        var elemento = document.createElement('p');
        elemento.textContent = 'Tipo de curso:';
        
        var container = document.querySelector("#divForm");

        divForm.appendChild(elemento);
    }

    {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'checkbox');
        elemento.setAttribute('id', 'tpCurso[]');
        elemento.setAttribute('name', 'tpCurso[]');
        elemento.setAttribute('value', 'bacharelado');
        elemento.style.marginLeft = '8%';
        elemento.style.width = '20px';
        
    
        divForm.appendChild(elemento);
        {
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'tpCurso[]');
            elemento.setAttribute('for', 'bacharelado');
            elemento.textContent = 'Bacharelado';
            elemento.style.marginLeft ='5px';           
            
                        
            divForm.appendChild(elemento);
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'checkbox');
            elemento.setAttribute('id', 'tpCurso[]');
            elemento.setAttribute('name', 'tpCurso[]');
            elemento.setAttribute('value', 'licenciatura');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            divForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'tpCurso[]');
                elemento.setAttribute('for', 'licenciatura');
                elemento.textContent = 'Licenciatura';
                elemento.style.marginLeft ='5px';
                
                            
                divForm.appendChild(elemento);
            }
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'checkbox');
            elemento.setAttribute('id', 'tpCurso[]');
            elemento.setAttribute('name', 'tpCurso[]');
            elemento.setAttribute('value', 'tecnologo');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            divForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'tpCurso[]');
                elemento.setAttribute('for', 'tecnologo');
                elemento.textContent = 'Tecnólogo';
                elemento.style.marginLeft ='5px';
                
                            
                divForm.appendChild(elemento);
            }
        }
    }
    

    // criação do campo Status

    {var elemento = document.createElement('br');

    divForm.appendChild(elemento);
    }

    {
        var elemento = document.createElement('p');
        elemento.textContent = 'Status:';
        
        var container = document.querySelector("#divForm");

        divForm.appendChild(elemento);
    }

    {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'checkbox');
        elemento.setAttribute('id', 'status[]');
        elemento.setAttribute('name', 'status[]');
        elemento.setAttribute('value', 'concluido');
        elemento.style.marginLeft = '8%';
        elemento.style.width = '20px';
        
    
        divForm.appendChild(elemento);
        {
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'status[]');
            elemento.setAttribute('for', 'concluido');
            elemento.textContent = 'Concluído';
            elemento.style.marginLeft ='5px';
            
                        
            divForm.appendChild(elemento);
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'checkbox');
            elemento.setAttribute('id', 'status[]');
            elemento.setAttribute('name', 'status[]');
            elemento.setAttribute('value', 'cursando');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            divForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'status[]');
                elemento.setAttribute('for', 'cursando');
                elemento.textContent = 'Cursando';
                elemento.style.marginLeft ='5px';
                
                            
                divForm.appendChild(elemento);
            }
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'checkbox');
            elemento.setAttribute('id', 'status[]');
            elemento.setAttribute('name', 'status[]');
            elemento.setAttribute('value', 'paralisado');
            elemento.style.marginLeft = '8%';
            elemento.style.width = '20px';
            
        
            divForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'status[]');
                elemento.setAttribute('for', 'paralisado');
                elemento.textContent = 'Paralisado';
                elemento.style.marginLeft ='5px';
                
                            
                divForm.appendChild(elemento);
            }
        }     
    }
};

// Criação de eventos para o input button "+ EXPERIENCIAS"

btn_addE.addEventListener('click', function(){
    createLineEx();
});

function createLineEx(){


    // Criação da div

    {
        var divExp = document.createElement('div');
        divExp.setAttribute('id', 'divExp');
        divExp.style.borderBottom = 'solid 2px';
        divExp.style.marginTop ='15px';
        divExp.style.paddingBottom ='15px';
        
        
        boxExp.appendChild(divExp);
    }


    // Criação do campo Data Inicio
    
    {var elemento = document.createElement('label');
    elemento.setAttribute('id', 'dtIni[]');
    elemento.textContent = 'Data Inicio:';

    divExp.appendChild(elemento);{
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'date');
        elemento.setAttribute('id', 'dtIni[]');
        elemento.setAttribute('name', 'dtIni[]');
        elemento.style.width = '100px';

        divExp.appendChild(elemento);
    }
    } 

    {var elemento = document.createElement('br');

    divExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        divExp.appendChild(elemento);
    }
    }

    // Criação do campo Data Fim

    {
        var elemento = document.createElement('label');
        elemento.setAttribute('id', 'dtFim[]');
        elemento.textContent = 'Data Fim:';

        divExp.appendChild(elemento);{
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'date');
            elemento.setAttribute('id', 'dtFim[]');
            elemento.setAttribute('name', 'dtFim[]');
            elemento.style.width = '100px';

            divExp.appendChild(elemento);
        }
    }
    
    {var elemento = document.createElement('br');

    divExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        divExp.appendChild(elemento);
    }
    }

    // Criação do campo Empresa

    {
        var elemento = document.createElement('label');
        elemento.setAttribute('id', 'empresa[]');
        elemento.textContent = 'Empresa:';        

        divExp.appendChild(elemento);{
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'text');
            elemento.setAttribute('id', 'empresa[]');
            elemento.setAttribute('name', 'empresa[]');
            elemento.setAttribute('placeholder', 'Ex: Empresa LTDA');

            divExp.appendChild(elemento);
        }
    }

    {var elemento = document.createElement('br');

    divExp.appendChild(elemento);{
        var elemento = document.createElement('br');

        divExp.appendChild(elemento);
    }
    }

    // Criação do campo Função

    {
        var elemento = document.createElement('label')
        elemento.setAttribute('id', 'func[]');
        elemento.textContent = 'Função:';

        divExp.appendChild(elemento);{
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'text');
            elemento.setAttribute('id', 'func[]');
            elemento.setAttribute('name', 'func[]');
            elemento.setAttribute('placeholder', 'Ex: Aux. Administrativo');
            

            divExp.appendChild(elemento);
        }
    }
};

// Jquery textarea

$('#textObj').on('input', function(){
    this.style.height = 'auto';

    this.style.height = 
            (this.scrollHeight) + 'px';
});

$('textarea').resizable();


// Jquery para botão de remover

$('#removeForm').click(()=>{
    $('#divForm').remove()
});

$('#removeExp').click(()=>{
    $('#divExp').remove()
});




