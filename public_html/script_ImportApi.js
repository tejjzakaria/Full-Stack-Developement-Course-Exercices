// la premiere etape de l'importation d'une API est la sychronisation avec le serveur de ce site
// L'instruction JavaScript qui va nous permettre de se sychroniser avec ce serveur est async

async function get(){
    // declaration de la premiere constante reponse qui va etre envoyer a travers la fonction async

    // attendre la reponse qui va etre envoyer par le serveur du site de destination
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
    // declaration d'une deuxieme fonction data qui va recevoir les donnees de l'API
    const data = await response.json();
    console.log(data);
}

get();