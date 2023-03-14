/*const url = "https://api.quotable.io/random";

    function citationAleatoire() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const citation = data.content;
                const auteur = data.author;
                const madiv = document.createElement("div");
                madiv.innerHTML = `${citation} - ${auteur}`;
                document.body.appendChild(madiv);
            })
            .catch(error => console.log(error));
    }*/

var quotes = [ 

{
    quote: "La vie est soit une aventure audacieuse, soit rien du tout",
    author: "Helen Keller"
  },
  {
    quote: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.",
    author: "Steve Jobs"
  },
  {
    quote: "Le plus grand bonheur que vous puissiez avoir est de donner aux autres.",
    author: "Lao Tzu"
  },
  {
    quote: "La vraie mesure d'un homme n'est pas de savoir comment il se comporte dans les moments de confort et de convenance, mais comment il se tient dans les moments de contestation et de défi",
    author: "Martin Luther King Jr"
  },
  {
    quote: "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",
    author: "Nelson Mandela"
  },
  {
    quote: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
    author: " Albert Schweitzer"
  },
  {
    quote: "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    author: "Albert Einstein"
  },
  {
    quote: "La meilleure façon de prédire votre avenir est de le créer.",
    author: "Peter Drucker"
  },
  {
    quote: "Le vrai voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    author: "Marcel Proust"
  },
  {
    quote: "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous",
    author: " Dalaï Lama"
  },
  {
    quote: "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.",
    author: "Albert Einstein"
  },
  {
    quote: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Le véritable signe de l'intelligence n'est pas la connaissance mais l'imagination",
    author: "Albert Einstein"
  },
  {
    quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    author: "Gandhi"
  },
  {
    quote: "Le temps est un maître cruel, il nous apprend à perdre ceux que nous aimons.",
    author: "Dante Alighieri"
  },
  {
    quote: "La seule chose dont nous ayons à avoir peur, c'est de la peur elle-même.",
    author: " Franklin D. Roosevelt"
  },
  {
    quote: "La vérité est rarement pure et jamais simple.",
    author: "Oscar Wilde"
  },
  {
    quote: "La sagesse commence dans l'émerveillement.",
    author: "Socrate"
  },
  {
    quote: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte",
    author: "Winston Churchill"
  },
  {
    quote: "La vie est un défi, à relever avec courage.",
    author: "Mère Teresa"
  },
  {
    quote: "La musique est la langue des émotions.",
    author: "Emmanuel Kant"
  },
  {
    quote: "Le plus grand plaisir dans la vie est de faire les choses que les autres disent ne pas pouvoir faire.",
    author: "Walter Bagehot"
  },
  {
    quote: "L'informatique est une science, mais ses résultats sont une technologie.",
    author: "Bertin Mazunze"
  },
  {
    quote: "Le vrai voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    author: " Marcel Proust"
  },
  {
    quote: "Un geek informatique est un fils de boot.",
    author: "Jean-marie Albert"
  },
  {
    quote: "La non-maîtrise de l'informatique est un handicap majeur.",
    author: "Ecrivaintoutpublic"
  },
  {
    quote : "La concurrence est toujours une chose fantastique, et l'industrie informatique est extrêmement concurrentielle.",
    author : "Bill Gates"
  },
  {
    quote : "L'informatique est une science jeune et dynamique, qui se développe à une vitesse vertigineuse.",
    author : "Bill Gates"
  },
  {
    quote : "L'informatique est une science qui permet à une machine de faire ce que l'on ne souhaite pas faire soi-même.",
    author : "Claude Shannon"
  },
  {
    quote : "L'informatique est une science qui peut faire le bien ou le mal, selon celui qui la manie.",
    author : "Ted Nelson"
  },
]
      document.body.style.backgroundImage = "url('img/img4.jpg')"
      document.body.style.backgroundSize = "cover"
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundPosition = "cover"
      document.body.style.backgroundColor ="black"
      const title = document.createElement("div")
      const btn = document.createElement("button")
      const btn2 = document.createElement("button")
      const quote = document.createElement("div")
      const author = document.createElement("div")
      title.innerHTML = "Bienvenue dans mon générateur de citation"
      title.style.fontSize ="30px"
      title.style.display ="flex"
      title.style.color ="black"
      title.style.justifyContent ="center"

      btn.style.width ="100px"
      btn.style.height ="30px"
      btn.innerHTML ="Générer"
      btn.style.background ="white"
      btn.style.color ="black"
      btn.style.borderRadius ="10px"
      btn.style.position ="absolute"
      btn.style.bottom ="120px"
      btn.style.right ="100px"
      
      btn2.style.width ="100px"
      btn2.style.height ="30px"
      btn2.innerHTML ="Partager"
      btn2.style.background ="white"
      btn2.style.color ="black"
      btn2.style.borderRadius ="10px"
      btn2.style.position ="absolute"
      btn2.style.bottom ="120px"
      btn2.style.right ="250px"


      quote.style.fontSize ="25px"
      quote.style.color ="black"
      quote.style.width ="500px"
      quote.style.height ="100px"
      quote.style.position ="absolute";
      quote.style.top = "40%";
      quote.style.left = "50%";
      quote.style.transform = "translate(-50%, -50%)";

      author.style.fontSize ="25px"
      author.style.fontStyle ="italic"
      author.style.color ="white"
      author.style.width ="250px"
      author.style.height ="90px"
      author.style.position ="absolute";
      author.style.top = "60%";
      author.style.left = "70%";
      author.style.transform = "translate(-50%, -50%)";






document.body.appendChild(title)
document.body.appendChild(btn)
document.body.appendChild(btn2)
document.body.appendChild(quote)
document.body.appendChild(author)


btn.addEventListener("click", generateurDeCitation);

function generateurDeCitation(){
  const index = Math.floor(Math.random() * quotes.length)
  quote.innerHTML = quotes[index].quote;
  author.innerHTML = "-" + quotes[index].author
}

function share (){
  if (navigator.share){
    navigator.share({
      title : 'Ma citation',
      text : quote.innerHTML + " " + "Auteur :" + " " + author.innerHTML,
      url : 'https://www.mon-site-web.com/citation',
    })
    .then(() => console.log ('Partage réussi !'))
    .catch((error)=> console.log('erreur de partage', error)) 
  }else{
    alert('Le partage n\'est pas pris en charge sur ce navigateur.')
  }
}
btn2.addEventListener("click", share);


