
        function logar() {
            var senha1 = document.getElementById("senha1").value;
            var senha2 = document.getElementById("senha2").value;

            
            if ((senha1 == "Guilherme_32689497" && senha2 == "Julia_34644644") ||
                (senha1 == "Julia_34644644" && senha2 == "Guilherme_32689497")) {
                document.getElementById("escrever").innerHTML = "Nome dos integrantes ok";
            } else {
                if (verificarRequisitos(senha1)) {
                    document.getElementById("escrever").innerHTML = "Senha criada com sucesso!";
                } else {
                    document.getElementById("escrever").innerHTML = "Senha inválida, tente novamente!";
                }
            }
        }
        function verificarRequisitos(senha) {
        }
    