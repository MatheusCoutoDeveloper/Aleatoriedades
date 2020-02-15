function validaPedido() {
    $("#tc, #tt, #ts").empty();
    if ($("#nome").val() == "" || $("#telefone").val() == "" || $("#endereco").val() == "") {
        $("#tc").html("Preencha os dados do cliente corretamente!");
        return false;
    }
    else{
        
    }
    var tam = $("input[name=tamanho]:checked").val();
    if (tam != "20" && tam != "25" && tam != "30") {
        $("#tt").html("Escolha o tamanho da pizza!");
        return false;
    } else if ($("#sabores").val() == "") {
        $("#ts").html("Escolha pelo menos um sabor!");
        return false;
    }
    return true;
}