# _Post-evaluación: Autoevaluación_
### Este apartado es una crítica personal, creo que puede ser de ayuda tanto para aquellas personas que vean esto como para mi, para profundizar un poco en cómo ha sido y cómo puedo mejorar (o al menos intentarlo).

Según los objetivos marcados en este readme, estaría aprobado: la web funciona, la usuaria puede elegir entre 3 opciones, se compara dicha opción con la de la máquina -basándose en un número aleatorio- y posteriormente se pinta el resultado de la partida en la web, pero **no se sabe qué escogió la máquina ni el número de victorias que lleva uno ni del otro**.  
  
**Personalmente, es un aprobado agridulce.**
  
  
El principal problema es que no es el primer Piedra, Papel o Tijera que hago con código, hace tiempo probé a hacer uno y busqué la manera de que no hicieran falta tantos ifs y else y quedó de la siguiente manera:

```
const game = function(player, cpu) {
    const options = {
        Piedra: "Tijeras",
        Papel: "Piedra",
        Tijeras: "Papel",                  
    /* (clave): "(valor)" */              
    };                                    

    if (player == cpu) {                  
        return "Empate";                
    }                                     
    else if (options[player]== cpu) {      // options[player] devuelve un valor según una clave, por lo que si el
        return "Ganas!";                   // user escribió Piedra, opciones[user] devolverá el valor "Tijeras". 
    }                                      // Si es el mismo valor que el de la cpu, gana!
    else {
        return "Pierdes";
    }
}
```

Como os habréis dado cuenta, esta forma es corta y bonita, usando un objeto que almacena las diferentes opciones, pero es muy enrevesada (sobre todo si habéis hecho el ejercicio) y yo no lo vi hasta que fue demasiado tarde :')
Cuando fui a elaborar el número de victorias que llevaba cada uno, quise que en la web se viese también lo que había escogido la máquina, pero aunque los console.log me mostraban el valor correcto, en la web se mostraba su contrario, por ejemplo, si escogía Papel, luego en el innerHTML mostraba "Piedra" y para más desquiciamiento, si quería ver el valor de opciones[player] que había usado para comparar con la cpu, me decía que era "Tijeras". Me salía humo por las orejas intentando comprenderlo.

Pero bueno, esto me ha servido como lección porque cuando hemos repetido el ejercicio en clase me he dado cuenta de que es mejor ir sobre seguro, aunque haya que escribir más o repetir un poco de código, que intentar innovar en terrenos que no conoces y acabar de fango hasta el cuello.

El código corregido está en la rama ["Corrections"](https://github.com/Adalab/modulo-2-evaluacion-intermedia-dianaString/tree/corrections)

&nbsp;
&nbsp;
&nbsp;
&nbsp;

---

# Módulo 2: Ejercicio de evaluación intermedia

Este proyecto consiste en la realización de una aplicación web para crear tarjetas de visita personalizadas. Deberemos poder introducir nuestros datos profesionales y obtener una vista maquetada con esta información.

### Descripción
El programa genera un movimiento **al azar** entre papel, piedra y tijera.  
Posteriormente la usuaria juega, el programa compara los movimientos y decide si la usuaria ha **ganado, perdido o empatado** contra el ordenador.  
A su vez, se va contabilizando el **número de puntos del jugador y del ordenador**.  
El juego se acaba cuando se realicen **10 movimientos**.

### Indicaciones
- [x] En la parte superior, la jugadora selecciona la jugada del desplegable. Las opciones son Piedra, Papel y Tijera y le da clic en el botón Jugar.  
- [x] Debajo, en el próximo apartado aparecen los siguientes textos:
Al arrancar la página: ¡Vamos a Jugar!.
   - [x] Cuando la jugadora introduzca un movimiento que coincida con al movimiento aleatorio se muestra el mensaje: Empate.
   - [x] Cuando la jugadora introduzca un movimiento que gane al movimiento aleatorio se muestra el mensaje: ¡Has Ganado!.
   - [x] Cuando la jugadora introduzca un movimiento que falle al movimiento aleatorio se muestra el mensaje: ¡Has perdido!

### Pasos 
- [x] Crear una maquetación mínima con el select, el botón y el espacio para el resultado.
- [x] Generar un número aleatorio entre 1 y 9 con la ayuda de Math.random y Math.ceil.
- [x] Generar un movimiento aleatorio y para eso puedes seguir las siguientes indicaciones:
   - [x] Si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es piedra
   - [x] Si el número aleatorio generado es mayor o igual que 7 el movimiento es papel y sino, el movimiento generado es tijera
- [x] Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la computadora y pintar las pistas correspondientes en la pantalla.

### Bonus
- [x] Saca tu lado creativo y maqueta y decora tu página con estilo.
- [ ] En la parte inferior debe aparecer los puntos de cada jugadora. Agrega el código necesario para contar los puntos del jugador y del ordenador.
- [ ] El juego finaliza cuando llega a 10 movimientos, agrega el código necesario para que se muestre un botón Reiniciar Juego que vuelva a iniciar el juego cuando se cumpla esta condición y desaparezca el botón de Jugar.
- [ ] Cuando le demos click a al botón Reiniciar Juego desaparece este botón, poner todos los contadores a cero y vuelve a aparecer el botón Jugar.
- [ ] Cuando finalice el juego, muestra quién ha ganado la partida: la computadora o la usuaria.

### Entrega
La evaluación solo se considerará terminada cuando:
- [x] Esté publicada en GitHub Pages (apuntando a la rama main/master) y esté funcionando.
- [x] El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al lado de la descripción.

### *¡A jugar!*
