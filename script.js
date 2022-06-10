const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado=encriptar(inputTexto.value)
    mensagem.value=textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

function btnDesencriptar() {
    const textoDesencriptado=Desencriptar(inputTexto.value)
    mensagem.value=textoDesencriptado
    mensagem.style.backgroundImage="none"
}

function Desencriptar(stringDesencriptada) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopiar() {
    const textoCopiado = document.querySelector('.mensagem');
    textoCopiado.select();
    document.execCommand('copy');
    alert('Copiado para área de transferência !');
    copiar.style.display = 'none';
    mensagem.value = " ";
}