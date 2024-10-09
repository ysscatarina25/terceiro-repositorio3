const = https://classroom.google.com/c/NjU3MjI4MTAxODg1/p/Njg2MTEyNTYwODY2/details
 
async function visulizarImformaGlobais() {

     const res = await fetch(url);
     const dados = res.json();
    console.log(dados);
}


visulizarImformaGlobais