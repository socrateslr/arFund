
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
    
    // Criação do campo curso

    var elemento = document.createElement('label');
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
        
    
        boxForm.appendChild(elemento);
        {
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'tpCurso1');
            elemento.setAttribute('for', 'bacharelado');
            elemento.textContent = 'Bacharelado';
            
                        
            boxForm.appendChild(elemento);
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'tpCurso1');
            elemento.setAttribute('name', 'tpCurso1');
            elemento.setAttribute('value', 'licenciatura');
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'tpCurso1');
                elemento.setAttribute('for', 'licenciatura');
                elemento.textContent = 'Licenciatura';
                
                            
                boxForm.appendChild(elemento);
            }
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'tpCurso1');
            elemento.setAttribute('name', 'tpCurso1');
            elemento.setAttribute('value', 'tecnologo');
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'tpCurso1');
                elemento.setAttribute('for', 'tecnologo');
                elemento.textContent = 'Tecnólogo';
                
                            
                boxForm.appendChild(elemento);
            }
        }
    }

    // criação do campo Tipo de curso

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
        
    
        boxForm.appendChild(elemento);
        {
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'status1');
            elemento.setAttribute('for', 'concluido');
            elemento.textContent = 'Concluído';
            
                        
            boxForm.appendChild(elemento);
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'status1');
            elemento.setAttribute('name', 'status1');
            elemento.setAttribute('value', 'cursando');
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'status1');
                elemento.setAttribute('for', 'cursando');
                elemento.textContent = 'Cursando';
                
                            
                boxForm.appendChild(elemento);
            }
        }
        {
            var elemento = document.createElement('input');
            elemento.setAttribute('type', 'radio');
            elemento.setAttribute('id', 'status1');
            elemento.setAttribute('name', 'status1');
            elemento.setAttribute('value', 'paralisado');
            
        
            boxForm.appendChild(elemento);
            {
                var elemento = document.createElement('label');
                elemento.setAttribute('id', 'status1');
                elemento.setAttribute('for', 'paralisado');
                elemento.textContent = 'Paralisado';
                
                            
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
    
    // Criação do campo Data Inicio
    
    var elemento = document.createElement('label');
    elemento.setAttribute('id', 'dtIni1');
    elemento.textContent = 'Data Inicio:';

    boxExp.appendChild(elemento);{
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'date');
        elemento.setAttribute('id', 'dtIni1');
        elemento.setAttribute('name', 'dtIni1');

        boxExp.appendChild(elemento);
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

            boxExp.appendChild(elemento);
        }
    }
    
    // Criação do campo Até o momento

    {
        var elemento = document.createElement('input');
        elemento.setAttribute('type', 'checkbox');
        elemento.setAttribute('id', 'ateMomento');
        elemento.setAttribute('name', 'ateMomento');

        boxExp.appendChild(elemento);{
            var elemento = document.createElement('label');
            elemento.setAttribute('id', 'ateMomento');
            elemento.textContent = 'Até o momento.';
            
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
}