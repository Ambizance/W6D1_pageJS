
// --------------------------------------------------------------------------------------------------------------------------------------------


// Fonctionnalité 1 :
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇


//Selection de l'élément à modifier
function function1(){
let footer = document.getElementsByTagName("footer")[0] ;
footer.addEventListener("click", function(){console.log("clique")}) ;
}
// --------------------------------------------------------------------------------------------------------------------------------------------


// Fonctionnalité 1-bis :
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

function function1bis(){
    let footer = document.getElementsByTagName("footer")[0] ;
    console.log(footer)
    let i = 1 ;
    function count_click(){
        console.log("Clique numéro : " + i ) ;
        i ++ ;
    }
    footer.addEventListener("click", count_click()) ;    
}


// --------------------------------------------------------------------------------------------------------------------------------------------

// Fonctionnalité 2 :
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

function function2() {
    let hamburger = document.querySelector(".navbar-toggler") ; 
    let header = document.querySelector("#navbarHeader") ;
    function deleteCollapse(){
            header.classList.toggle("collapse") ;
    } ;
    hamburger.addEventListener("click", deleteCollapse() )
}


//NE SAIS PAS POURQUOI NE FONCTIONNE PAS --> 
// // Fonctionnalité 2 :
// // On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
// // Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

// let hamburger = document.getElementsByClassName("navbar-toggler")[0] ; 
// // console.log(hamburger)
// let element = document.getElementById("navbarHeader") ;
// // console.log(element)
// console.log(element.classList)

// let navbar_status = false ; 
// // console.log("1")

// function delete_collapse(){
//     if (navbar_status == false) {
//         // console.log("passé par le if")
//         // console.log(element.classList)
//         element.classList.remove("collapse") ;
//         navbar_status = true ; 
//         // console.log("sort du if")
//         // console.log("2if")
//     }
//     else if(navbar_status === true) {
//         // console.log("passé par le else")
//         element.classList.add("collapse") ;
//         navbar_status = false ;
//         // console.log("sort du else")
//         // console.log("2else")

//     }
// }
// // console.log("3")
// hamburger.addEventListener("click", delete_collapse() )
// // console.log("4")



// Indice : Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")

// --------------------------------------------------------------------------------------------------------------------------------------------



// Fonctionnalité 3 :
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

function function3() {
    let card = document.querySelector(".card") ;
    console.log(card)
    let edit_btn = document.querySelectorAll(".btn-outline-secondary")[0] ;
    console.log(edit_btn)
    
    function redText() {
        card.style.color = "red"
    }
    edit_btn.addEventListener("click" , redText()) ;
   }




// Indice : Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).
// Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
// Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

// --------------------------------------------------------------------------------------------------------------------------------------------

// Fonctionnalité 4 :
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

    function function4() {
        let card2 = document.querySelectorAll(".card")[1];
        console.log(card2)
        let edit_btn2 = document.querySelectorAll(".btn-outline-secondary")[1] ;
        console.log(edit_btn2)

        function redText() {
            if (card2.style.color === 'green'){
            secondCard.style.color = '' ;
            }else
            card2.style.color = "green"
        }
        edit_btn2.addEventListener("click" , redText()) ;
    }





// Indice : Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).
// Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :
// if (secondCard.style.color === 'green'){
// secondCard.style.color = '' ;
// }else …





// --------------------------------------------------------------------------------------------------------------------------------------------

// Fonctionnalité 5 :
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… 
// Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. 
// Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

function function5() {
var navbar = document.querySelector(".navbar") ;
var bootstrap = document.querySelector("link") ;
var bootstrap_status = true ; 
function bye_bootstrap(){

    if(bootstrap_status === true){
    bootstrap.setAttribute("href", "javascript:;")
    }
    else if(bootstrap_status === false){
    bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
    }
}
navbar.addEventListener("dblclick", bye_bootstrap()) ;
}


// --------------------------------------------------------------------------------------------------------------------------------------------

