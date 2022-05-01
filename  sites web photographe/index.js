let x = document.getElementsByClassName('image');

for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element);
    // Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
element.addEventListener("mouseenter", function( event ) {
    const original_width = event.target.width;
    console.log(`original_width : ${original_width}`);
    const original_height = event.target.height;
    console.log(`original_height : ${original_height}`);
    // on met l'accent sur la cible de mouseenter
    // event.target.style.width="500px";
    const new_width = 500;
    const new_height = new_width / original_width * original_height;
    event.target.style.width=new_width + "px";
    event.target.style.height=new_height + "px";
    // on réinitialise la couleur après quelques instants
 
  });
    
}