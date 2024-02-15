let alimentos = [["A", "B", "C"], [270, 340, 390]];
let contador = 0;
let opcion = 0;
let bandera = true;
let bandera2 = true;

function compraRealizada(alimentos, bandera2) {
    let pago = 0;
    while (bandera2) {
        while (pago < alimentos[1][opcion]) {
            let valorMoneda = parseInt(prompt("Ingrese una moneda, solo de 10, 50 o 100"));
            if (valorMoneda === 10 || valorMoneda === 50 || valorMoneda === 100) {
                pago += valorMoneda;
                bandera2 = false;
            } else {
                bandera2 = true;
                alert("Asegúrese de ingresar la moneda indicada");
            }
        }
    }
    return pago;
}

function entregaVuelto(alimentos, x, opcion) {
    let vuelto = x - alimentos[1][opcion];
    let monedas = "";
    if (vuelto < 50 && vuelto !== 0) {
        while (vuelto > 0) {
            monedas += `10\n`;
            vuelto -= 10;
        }
    } else if (vuelto === 50) {
        monedas += `${vuetlo}\n`;
    } else if (vuelto > 50) {
        monedas += `50\n`;;
        vuelto -= 50;
        while (vuelto > 0) {
            monedas += `10\n`;;
            vuelto -= 10;
        }
    } else if (vuelto === 0) {
        monedas += `0\n`;;
    }
    alert(`Su vuelto es:\n${monedas}`);
}

while (bandera) {
    let opciones = "";
    for (let i = 0; i < alimentos[0].length; i++) {
        opciones += `${i+1}. Producto ${alimentos[0][i]}: Precio $${alimentos[1][i]}\n`;
    }
    opcion = parseInt(prompt(`Elegir el producto\n${opciones}`));
    if (opcion <= alimentos[0].length && opcion > 0) {
        bandera = false;
        alert(`Ha elegido el producto ${alimentos[0][opcion-1]}: valor ${alimentos[1][opcion-1]}`);
    } else if (isNaN(opcion)) {
        alert("No selecciono una opcion correcta")
        break;
    }
    else {
        alert("Por favor, elija una opción válida.")
        bandera = true;
    }

}

opcion -= 1;
let x = compraRealizada(alimentos, bandera2);
entregaVuelto(alimentos, x, opcion);
