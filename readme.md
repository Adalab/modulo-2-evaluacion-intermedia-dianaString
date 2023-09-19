# Módulo 2: Ejercicio de evaluación intermedia

Este proyecto consiste en la realización de una aplicación web para crear tarjetas de visita personalizadas. Deberemos poder introducir nuestros datos profesionales y obtener una vista maquetada con esta información.

## Descripción
El programa genera un movimiento **al azar** entre papel, piedra y tijera.  
Posteriormente la usuaria juega, el programa compara los movimientos y decide si la usuaria ha **ganado, perdido o empatado** contra el ordenador.  
A su vez, se va contabilizando el **número de puntos del jugador y del ordenador**.  
El juego se acaba cuando se realicen **10 movimientos**.

## Indicaciones
- [ ] En la parte superior, la jugadora selecciona la jugada del desplegable. Las opciones son Piedra, Papel y Tijera y le da clic en el botón Jugar.  
- [ ] Debajo, en el próximo apartado aparecen los siguientes textos:
Al arrancar la página: ¡Vamos a Jugar!.
   - [ ] Cuando la jugadora introduzca un movimiento que coincida con al movimiento aleatorio se
muestra el mensaje: Empate.
   - [ ] Cuando la jugadora introduzca un movimiento que gane al movimiento aleatorio se muestra el mensaje: ¡Has Ganado!.
   - [ ] Cuando la jugadora introduzca un movimiento que falle al movimiento aleatorio se muestra el mensaje: ¡Has perdido!

## Pasos 
- [x] Crear una maquetación mínima con el select, el botón y el espacio para el resultado.
- [ ] Generar un número aleatorio entre 1 y 9 con la ayuda de Math.random y Math.ceil.
- [ ] Generar un movimiento aleatorio y para eso puedes seguir las siguientes indicaciones:
   - [ ] Si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es piedra
   - [ ] Si el número aleatorio generado es mayor o igual que 7 el movimiento es papel y sino, el movimiento generado es tijera
- [ ] Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la
computadora y pintar las pistas correspondientes en la pantalla.

## Bonus
- [ ] Saca tu lado creativo y maqueta y decora tu página con estilo.
- [ ] En la parte inferior debe aparecer los puntos de cada jugadora. Agrega el código necesario para contar los puntos del jugador y del ordenador.
- [ ] El juego finaliza cuando llega a 10 movimientos, agrega el código necesario para que se muestre un botón Reiniciar Juego que vuelva a iniciar el juego cuando se cumpla esta condición y desaparezca el botón de Jugar.
- [ ] Cuando le demos click a al botón Reiniciar Juego desaparece este botón, poner todos los contadores a cero y vuelve a aparecer el botón Jugar.
- [ ] Cuando finalice el juego, muestra quién ha ganado la partida: la computadora o la usuaria.

## Entrega
La evaluación solo se considerará terminada cuando:
- [ ] Esté publicada en GitHub Pages (apuntando a la rama main/master) y esté funcionando.
- [ ] El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al lado de la descripción.

### *¡A jugar!*