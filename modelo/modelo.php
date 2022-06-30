<!-- Concatenação dos elementos -->
<?php 
    $var1 = $elemento['nome'];
    $var2 = $elemento['sobreNome'];
    $nCompleto = sprintf('%s %s', $var1, $var2);

    $var3 = $elemento['nat'];
    $var4 = "-";
    $var5 = $elemento['sexo'];
    $linha1 = sprintf('%s %s %s', $var3, $var4, $var5);
    
    $var6 = $elemento['civil'];
    $var7 = "-";
    $var8 = $elemento['idade'];
    $linha2 = sprintf('%s %s %s', $var6, $var7, $var8);

    $var9 = $elemento['endereco'];
    $var10 = "-";
    $var11 = "Nº";
    $var12 = $elemento['enderecoNum'];
    $var13 = "-";
    $var14 = $elemento['enderecoComp'];
    $var15 = "-";
    $var16 = $elemento['cep'];
    $cEndereco = sprintf('%s %s %s %s %s %s %s %s', $var9, $var10, $var11, $var12, $var13, $var14, $var15, $var16);
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Curriculo | PDF</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href="style/modelo.css">
</head>
<body>

    <div class="visualiza">
        <section class="cabecalio">
            <div class="box">
                <div class="nome">
                    <h1><?= $nCompleto; ?></h1>
                    <p><b><?= $linha1; ?></b></p>
                </div>
                <div class="info">
                    <p><b><?= $linha2; ?><span> anos.</b></span></p>
                    <p><span><b>Contato: </b></span><?= $elemento['phone']; ?></p>
                    <p><span><b>E-mail: </b></span><?= $elemento['email']; ?></p>
                    <p><span><b>Linkedin: </b></span><?= $elemento['linkedin']; ?></p>
                    <p><span><b>Endereço: </b></span><?= $cEndereco; ?>.</p>
                    <p><span><b>Cidade: </b></span><?= $elemento['cidade']; ?></p>
                    <p><span><b>Estado: </b></span><span id="uf"><?=$elemento['uf'];?></span></p>
                </div>
            </div>    
        </section>

        <section class="dadosIncluidos">

            <div class="obj">
                <h3>Objetivo</h3>
                <p style="text-align: justify;"><?= $elemento['textObj']; ?></p>
            </div>

            <?php if($elemento['formacao']) { ?>
                <h3>Formações</h3>

                <ul class="lista-formacao">                
                    <?php for($i = 0; $i < sizeof($elemento['formacao']['curso']); $i++) { ?>
                        <li>
                            <div class="formList">
                                <h4><?= $elemento['formacao']['curso'][$i] ?></h4>
                                <p><span>Instituição: </span><?= $elemento['formacao']['inst'][$i] ?></p>
                                <p id="tpCurso"><?= $elemento['formacao']['tpCurso'][$i] ?></p>
                                <p id="status"><span>Status: </span><?= $elemento['formacao']['status'][$i] ?></p>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>

            <?php if($elemento['formacao']) { ?>
                <h3>Experiencia Profissional</h3>

                <ul class="lista-experiencia">                
                    <?php for($i = 0; $i < sizeof($elemento['exp']['func']); $i++) { ?>
                        <li>
                            <div class="expList">
                                <h4><?= $elemento['exp']['func'][$i] ?></h4>
                                <p><span>Empresa: </span><?= $elemento['exp']['empresa'][$i] ?></p>
                                <p><span>Data inicio: </span><?= $elemento['exp']['dtIni'][$i] ?></p>
                                <p><span>Data Fim: </span><?= $elemento['exp']['dtFim'][$i] ?></p>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </div>                
    </section>

    <script>
        window.print();
    </script>
</body>
</html>

