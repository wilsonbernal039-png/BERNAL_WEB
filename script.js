function downloadPDF(){

    const element=document.querySelector('#pdf-content');
    //console.log("element");
    
    const otp={
        margin: [10, 5, 15, 5], //[arriba,izquierda,abajo,derecha] en nm
        filema: 'oja_de_vida_wilson_bernal_valencia_.pdf',
        image: { type:'jpeg, quality:1'},
        htm12canvas:{
            scale: 2,
            useCORS: true,
            scrolly:0
        },
        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation: 'portrait' //Orientacion vertical
        }
    }

    htm12pdf().set(otp).from(element).save();


}