function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}


try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora)
} catch(e) {
    // console.log(e)
} finally {
    console.log('Tenha um bom dia.')
}

// try  {
//     // E excuta quando não ha erros
//     // console.log(a)
//     console.log('Abrir um arquivo');
//     console.log('Manipulei o arquivo e gerou error');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b)
//     } catch {
//         console.log('Deu error')
//     } finally {
//         console.log('Tambem sou finnally')
//     }
// } catch(error) {
//     // E executada quando ha errors
//     console.log('Tratando o erro');
// } finally {
//     // Sempre
//     console.log('FINALLY: Eu sempre sou executado')
// }