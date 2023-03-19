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
    author: "Helen Keller",
    image : "https://assets.titleleaf.com/abdopub/product/cover/xl_9781680782998_fc.jpg"
  },
  {
    quote: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.",
    author: "Steve Jobs",
    image : "https://www.macworld.com/wp-content/uploads/2023/01/steve-jobs-2.jpg?quality=50&strip=all"
  },
  {
    quote: "Le plus grand bonheur que vous puissiez avoir est de donner aux autres.",
    author: "Lao Tzu",
    image : "https://www.organism.earth/library/docs/lao-tzu/headshot.webp"
  },
  {
    quote: "La vraie mesure d'un homme n'est pas de savoir comment il se comporte dans les moments de confort et de convenance, mais comment il se tient dans les moments de contestation et de défi",
    author: "Martin Luther King Jr",
    image : "https://www.uky.edu/mlk/sites/www.uky.edu.mlk/files/MLK.jpg"
  },
  {
    quote: "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",
    author: "Nelson Mandela",
    image : "https://www.unesco.org/sites/default/files/2021-10/mandela.jpg"
  },
  {
    quote: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
    author: " Albert Schweitzer",
    image : "https://karsh.org/wordpress/wp-content/uploads/2016/10/Yousuf-Karsh-Albert-Schweitzer-1954-1567x1960.jpg"
  },
  {
    quote: "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    author: "Albert Einstein",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/1200px-Albert_Einstein_1947.jpg"
  },
  {
    quote: "La meilleure façon de prédire votre avenir est de le créer.",
    author: "Peter Drucker",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Drucker5789.jpg/1200px-Drucker5789.jpg"
  },
  {
    quote: "Le vrai voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    author: "Marcel Proust",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Otto_Wegener_Proust_vers_1895_bis.jpg/260px-Otto_Wegener_Proust_vers_1895_bis.jpg"
  },
  {
    quote: "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous",
    author: " Dalaï Lama",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dalai_Lama_w_Sejmie_w_2009.jpg/200px-Dalai_Lama_w_Sejmie_w_2009.jpg"
  },
  {
    quote: "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.",
    author: "Albert Einstein",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/1200px-Albert_Einstein_1947.jpg"
  },
  {
    quote: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
    author: "Eleanor Roosevelt",
    image : "https://upload.wikimedia.org/wikipedia/commons/2/22/Eleanor_Roosevelt_portrait_1933.jpg"
  },
  {
    quote: "Le véritable signe de l'intelligence n'est pas la connaissance mais l'imagination",
    author: "Albert Einstein",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/1200px-Albert_Einstein_1947.jpg"
  },
  {
    quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    author: "Gandhi",
    image : "https://www.babelio.com/users/AVT_Mahatma-Gandhi_1341.jpg"
  },
  {
    quote: "Le temps est un maître cruel, il nous apprend à perdre ceux que nous aimons.",
    author: "Dante Alighieri",
    image : "https://cdn.britannica.com/57/139457-050-BF830186/Dante.jpg"
  },
  {
    quote: "La seule chose dont nous ayons à avoir peur, c'est de la peur elle-même.",
    author: " Franklin D. Roosevelt",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/1200px-FDR_1944_Color_Portrait.jpg"
  },
  {
    quote: "La vérité est rarement pure et jamais simple.",
    author: "Oscar Wilde",
    image : "https://cdn.britannica.com/21/94621-050-58D29508/Oscar-Wilde-1882.jpg"
  },
  {
    quote: "La sagesse commence dans l'émerveillement.",
    author: "Socrate",
    image : "https://medias.psychologies.com/storage/images/culture/maitres-de-vie/socrate/708017-8-fre-FR/Socrate.jpg"
  },
  {
    quote: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte",
    author: "Winston Churchill",
    image : "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg"
  },
  {
    quote: "La vie est un défi, à relever avec courage.",
    author: "Mère Teresa",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfF0Tu0P4rnCTQhCPhDKJ_HC76Ltblb1Sjw&usqp=CAU"
  },
  {
    quote: "La musique est la langue des émotions.",
    author: "Emmanuel Kant",
    image : "https://www.litteratureaudio.com/wp-content/uploads/Emmanuel-Kant-jeune-e1661371054604.jpeg"
  },
  {
    quote: "Le plus grand plaisir dans la vie est de faire les choses que les autres disent ne pas pouvoir faire.",
    author: "Walter Bagehot",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Walter_Bagehot_NPG_cropped.jpg/260px-Walter_Bagehot_NPG_cropped.jpg"
  },
  {
    quote: "L'informatique est une science, mais ses résultats sont une technologie.",
    author: "Ecrivaintoutpublic",
    image : "https://exob2b.com/wp-content/uploads/2014/05/web-development.jpg"
  },
  {
    quote: "Le vrai voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    author: " Marcel Proust",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Otto_Wegener_Proust_vers_1895_bis.jpg/260px-Otto_Wegener_Proust_vers_1895_bis.jpg"
  },
  {
    quote: "Un geek informatique est un fils de boot.",
    author: "Atigou Bah (Moi) ",
    image : "img/Picture.jpg"
  },
  {
    quote: "La non-maîtrise de l'informatique est un handicap majeur.",
    author: "Atigou Bah (Moi)",
    image : "img/Picture.jpg"
  },
  {
    quote : "La concurrence est toujours une chose fantastique, et l'industrie informatique est extrêmement concurrentielle.",
    author : "Bill Gates",
    image : "https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg"
  },
  {
    quote : "L'informatique est une science jeune et dynamique, qui se développe à une vitesse vertigineuse.",
    author : "Bill Gates",
    image : "https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg"
  },
  {
    quote : "L'informatique est une science qui permet à une machine de faire ce que l'on ne souhaite pas faire soi-même.",
    author : "Claude Shannon",
    image : "https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/12/MIT-Claude-Portrait_v0.jpg"
  },
  {
    quote : "L'informatique est une science qui peut faire le bien ou le mal, selon celui qui la manie.",
    author : "Ted Nelson",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ted_Nelson_cropped.jpg/1200px-Ted_Nelson_cropped.jpg"
  },

]

      const btn = document.getElementById('btn1')
      const btn2 = document.getElementById('btn2')
      const quote = document.getElementById('qte')
      const author = document.getElementById('atr')




btn.addEventListener("click", generateurDeCitation);
const image = document.createElement("img");
function generateurDeCitation(){
  const index = Math.floor(Math.random() * quotes.length)
  quote.innerHTML = ' " ' + quotes[index].quote + ' " '
  author.innerHTML = "-" + quotes[index].author
  image.src = quotes[index].image;
  document.getElementById('picture').appendChild(image);
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


