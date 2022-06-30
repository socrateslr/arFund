<?php



// Geração dos dados array que serão enviados para o PDF
// Variaveis do array

$elemento = array(
    'nome' => $_POST['nome'],
    'sobreNome' => $_POST['sobreNome'],
    'idade' => $_POST['idade'],
    'nat' => $_POST['nat'],
    'sexo' => $_POST['sexo'],
    'civil' => $_POST['civil'],
    'endereco' => $_POST['endereco'],
    'enderecoNum' => $_POST['enderecoNum'],
    'enderecoComp' => $_POST['enderecoComp'],
    'cep' => $_POST['cep'],
    'cidade' => $_POST['cidade'],
    'uf' => $_POST['uf'],
    'phone' => $_POST['phone'],
    'email' => $_POST['email'],
    'linkedin' => $_POST['linkedin'],
    'textObj' => $_POST['textObj'],
    'formacao' => isset($_POST['curso']) ?
                    array(
                        'curso' => $_POST['curso'],
                        'inst' => $_POST['inst'],
                        'tpCurso' => $_POST['tpCurso'],
                        'status' => $_POST['status']
                    ) : null,
    'exp' => isset($_POST['func']) ?
                    array(
                        'dtIni' => $_POST['dtIni'],
                        'dtFim' => $_POST['dtFim'],
                        'empresa' => $_POST['empresa'],                        
                        'func' => $_POST['func']
                    ) : null,
);

require('modelo/modelo.php');