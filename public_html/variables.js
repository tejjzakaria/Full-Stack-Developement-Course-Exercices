// declaration des variables
// l'instruction "var" est une reservation de l'espace 

var nom=prompt("Entrez le nom de la personne : ");
var matricule=parseInt(prompt("Entrez le matricule : "));
var note1=parseFloat(prompt("Entrez la note 1 : "));
var note2=parseFloat(prompt("Entrez la note 2 : "));
var note3=parseFloat(prompt("Entrez la note 3 : "));
var note4=parseFloat(prompt("Entrez la note 4 : "));
// calcul de la moyenne 
var moy = (note1+note2+note3+note4)/4;
// test conditionel sur la moyenne pour afficher la mention
if(moy<10){
    men="Faible";
}
else if(moy>=10 && moy<14){
    men="Passable";
}
else if(moy>=12 && moy<14){
    men="Assez bien";
}
else if(moy>=14 && moy<16){
    men="Bien";
}
else if(moy>=16 && moy<18){
    men="Tres Bien";
}
else if(moy>=18 && moy<20){
    men="Excellent";
}
// affichage des variables

console.log("le nom est : "+nom);
console.log("le matricule est : "+matricule);
console.log("la note 1 est : "+note1);
console.log("la note 2 est : "+note2);
console.log("la note 3 est : "+note3);
console.log("la note 4 est : "+note4);
console.log("la moyenne est : "+moy);
console.log("la mention: "+men);
