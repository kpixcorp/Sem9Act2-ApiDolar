$(function() {


		$.ajax({
			url: 'https://mindicador.cl/api',
			method: 'GET',
		}).then(function(data){
			console.log(data);
			$('.table__valordolar').append("$" + data.dolar.valor);
			$('.table__valoreuro').append("$" + data.euro.valor);
			$('.table__valorUF').append("$" + data.uf.valor);
			$('.table__valorUTM').append("$" + data.utm.valor);
		});





	$('.pesodollar__but').on('click', function(){

		var valorpeso = $('.pesodollar__input').val()

		$('.result1').text("");

		$.ajax({
			url: 'https://mindicador.cl/api',
			method: 'GET',
		}).then(function(data){
			$('.result1').append( valorpeso / data.dolar.valor);
			$('.pesodollar__input').val('')
		});
	});

	$('.dollarpeso__but').on('click', function(){

		var valordollar = $('.dollarpeso__input').val()

		$('.result2').text("");

		$.ajax({
			url: 'https://mindicador.cl/api',
			method: 'GET',
		}).then(function(data){
			$('.result2').append(valordollar * data.dolar.valor);
			$('.dollarpeso__input').val('');
		});
	});
	

});