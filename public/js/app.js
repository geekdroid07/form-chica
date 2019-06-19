var modelo = new Array() 
modelo [1] = ["Elige modelo...","Interior color","Blanca","Cucharita","Magica","Luminica","Color exterior"]//Tazas
modelo [2] = ["Elige modelo...","Double Summit","Wide Mouth"]//Termo
modelo[3] = ["Elige modelo...","Acrilico","Skinny tumbler",""]//Vaso
modelo[4] = ["Elige modelo...","Redondo transparente","Redondo blanco","Jar","",""]//Llaveros

var colores = new Array()
colores[1] = new Array() //taza
colores[1][1] = ["elige color","Rosado","Azul","Negro","Amarillo",""]//Interior color
colores[1][2] = ["elige color","Rosado","Aqua",""]//blanca
colores[1][3] = ["elige color","prueba",".."]//Cucharita
colores[1][3] = ["elige color","prueba",".."]//Magica
colores[1][3] = ["elige color","prueba",".."]//Luminica
colores[1][3] = ["elige color","prueba",".."]//Color exterior
colores[2] = new Array()//termo
colores[2][1] = ["elige color","Fucsia","Aqua","Mint","Lavender","Navy"]
colores[2][2] = ["elige color","Rojo","Midgnight","Clear","","Navy"]

function ponModelo(formu) {
    var elArticulo = formu.articulo.selectedIndex
    formu.modelo.length = modelo[elArticulo].length
    for (i=0; i<formu.modelo.length; i++) {
        formu.modelo.options[i].text = modelo[elArticulo][i]
    }
}


function ponColores(formu) {
    var elArticulo = formu.articulo.selectedIndex
    var elModelo = formu.modelo.selectedIndex
    formu.colores.length = colores[elArticulo][elModelo].length
    for (i=0; i<formu.colores.length; i++) {
        formu.colores.options[i].text = colores[elArticulo][elModelo][i]
    }
}
