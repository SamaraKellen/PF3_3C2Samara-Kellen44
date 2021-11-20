var calcular = document.getElementById('calcular');

function juros () {
    var nome = document.getElementById('nome').value;
    var valor_mensalmente = parseFloat(document.getElementById('valor_mensalmente').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var parcelas = parseFloat(document.getElementById('parcelas').value);
    var resultado = document.getElementById('resultado');
    var resultado='';
   
   resultado = valor_mensalmente * ((((1 + (taxa/100))** parcelas) - 1) / (taxa/100)).toFixed(1);
    
   resultado.textContent = `Olá ${nome}, se você aplicar ${valor_mensalmente} reais por mês, à taxa de ${taxa/100}% ao mês, durante ${parcelas} meses, acumulará uma poupança de ${resultado.toFixed(2)} reais`;
}
resultado.addEventListener('click', juros);
