function convertir() {
	var valore = parseInt(document.getElementById("valor").value);
	if (document.getElementById("uno").checked) {
		let dolar = 189;
		resultado = valore / dolar;
		alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
	} else if (document.getElementById("dos").checked) {
		let euro = 203;
		resultado = valore / euro;
		alert("El cambio de Pesos a Euros es: " + resultado.toFixed(2));
	} else {
		alert("tenes que elegir una moneda y ingresar el monto");
	}
}
