let commande;

commande = 1;


if (commande >= 0) {
    console.log('Vous n\'avez pas encore commandé de produit');
}else{
    console.log('Vous avez commandé ! Félicitations !');
} 


let produit1 = {
    id: 0,
    nom: 'Coma',
    price:8,
    qty: 0
    };

let produit2 = {
    id: 1,
    nom: 'Bacon',
    price:9,
    qty: 0
    };

let produit3 = {
    id: 2,
    nom: 'Nightmare',
    price:10,
    qty: 0
    };

let produit4 = {
    id: 3,
    nom: 'Knife',
    price:11,
    qty: 0
    };

let produits = [produit1, produit2, produit3, produit4];

console.log(produits);


let nbProduits = 0;

let prixTotal = 0;


function addSingleProduct(productId) {
    produits[productId].qty += 1;
    nbProduits++;

    prixTotal = 0;


for (let i = 0; i < produits.length; i++) {

    prixTotal += produits[i].qty * produits[i].price;
}

document.getElementById('message').innerHTML = getMessage(nbProduits, prixTotal);

}

function getMessage(nbProd, prix){

  if(nbProd > 0){
    msg = 'Vous avez commandé ' + nbProd + ' produit(s) pour un total de ' + prix.toFixed(2) + ' €';
  }
  return msg;
}