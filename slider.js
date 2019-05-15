let pageNumber = 0; //"var" initial page is 0 NOT WORKING

//hold the content of the "pages" array
const pages = [
  {name:"Jasper van Doorn",
  text:"Jasper van Doorn (1993, NL) is een grafisch ontwerper. In zijn werk maakt hij gebruik van verschillende digitale en analoge technieken om impact te creëren. Vaak komt zijn inspiratie vanuit alledaagse objecten die normaal over het hoofd worden gezien. Met technieken als 3D rendering, belettering, illustratie en typografie focust van Doorn zich op het creëren van een hoge impact met een visuele spanning waardoor je getriggerd wordt.",
  circle:"#3e78ed",
  interview:"<p><b><i>Wat was de inspiratie voor ’Attentiewaarde’?</b></i><br>    Verkeersborden worden voornamelijk gewaardeerd vanwege hun functie, net als de rest van het netwerk van functionele objecten in de openbare ruimte zoals wegbelijning, stoplichten, verkeerspalen, etc. Echter zijn de kleuren, vormen, composities en materialen eindeloos; waarom zouden we niet verder kijken dan enkel de functie? Ik ben gaan kijken hoe ik functionele objecten als medium kan inzetten en de huidige functie achterwege kan laten.</p>     <p><b><i>Waarom heb je juist voor deze locatie gekozen?</b></i><br>    De drukte van de stad is iets wat mij aantrekt, maar ook wegduwt. Ik kom graag in het Nassauhavenpark, er is hier veel ruimte en rust – een soort balans tussen stad en natuur. Niet oer-natuur, maar gewoon wind, eb en vloed, een paar bomen, wat gras en heel veel eenden, meeuwen, en ganzen. Het park heeft een aantal bankjes waar zelden mensen op zitten, er komen hier eigenlijk alleen mensen die een rondje lopen met de hond. Zelf kom ik graag om naar de eendjes te kijken.</p>       <p><b><i>Op welke manier heeft deze locatie invloed gehad op je proces?</b></i><br>        De haven wordt al jaren niet meer gebruikt en door de brede opening richting de Nieuwe Maas heeft de wind er vrij spel. Het idee is dat de werken onderdeel worden van het park en speels meedraaien met de wind, misschien als een soort van voorbeeldfunctie voor hoe het park te gebruiken.</p>     <p><b><i>Welke invloed heeft je werk op deze locatie?</b></i><br>     Dat weet ik niet, maar ik hoop dat de bewoners de verandering in het park waarderen en even op een bankje gaan zitten om misschien maar even niets te doen.</p>     <p><b><i>Hoe zie jij Rotterdam het liefst?</b></i><br>Beetje groen, beetje beton.<p>",
  liweight: "<b>Lloydkwartier</b><i>Off-side</i>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/jasper-portret2.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/jasper-portret3.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/jasper-portret4.jpg"></div>'
},

  {name:"Nazif",
  text:"Nazif Lopulissa (1990, NL) onderzoekt de vormstructuur van objecten en plaatsen uit het dagelijkse leven. Door herkenbare vormen te verwerken tot kleurrijke composities in verschillende materialen en technieken, balanceert zijn werk altijd tussen speelse vrijheid en de manier waarop vormen, symbolen en materialen betekenis krijgen. Zo bieden ze reflectie op de tegenstrijdigheden tussen vorm, functie, ontwerp en betekenis, en de manier waarop wij beeldend en materieel invulling geven aan de wereld om ons heen. Lopulissa’s werk verwijst naar de tijd waarin het gewicht van het volwassen leven nog geen beperkingen oplegt.",
  circle:"#e34a47",
  interview:"Interview 2",
  liweight: "<b>Zuidplein</b><i>Playdoh</i>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/nazif-portret1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/nazif-portret2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/nazif-portret3.jpg"></div>'
},

  {name:"Pip Passchier",
  text:"Pip Passchier (1995, NL) is een autonoom beeldend kunstenaar. In haar werk onderzoekt ze het grensgebied van sport en kunst waarbij ze speelt met de herkenbaarheid en de regels binnen sport en spel. Wat doet de visuele beeldtaal van sport met mensen en wat gebeurt er als spelregels vervagen?",
  circle:"#f7fe00",
  interview:"<b>Wat was de inspiratie voor ‘Off-Side’?</b><br>Ik onderzoek de openbare ruimte door deze te bekijken als speelveld. Daarin ben ik me bewust van bestaande vormen en lijnen, vaak gedirigeerd door ingrepen van de mens. De vormgeving van de gekozen locatie, bekeken als speelveld, is hierbij mijn inspiratiebron.<br><b>Waarom heb je juist voor deze locatie gekozen?</b> <br>De grote loze lege ruimte tussen de gebouwen prikkelde mij om er beweging en kleur in te brengen. <br><b>Welke invloed heeft je werk op deze locatie?</b><br> Mijn werk heeft als doel dat je anders kunt gaan kijken en reageren op en naar de inrichting van de publieke ruimte. Het werk reageert op de verdichting van de stad, kan de inrichting van de openbare ruimte een dubbele functie hebben? Hoe kunnen we de groenstrook alssportveld gebruiken?<br><b>Wat is jouw toekomstdroom voor de stad Rotterdam?</b><br>Rotterdam als speeltuin, met ruimte voor experiment.",
  liweight: "<b>Nassauhavenpark</b><i>Attentiewaarde</i>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/pip-portret1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/pip-portret2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/pip-portret3.jpg"></div>'
},

  {name:"Studio Bureau",
  text:"Studio Bureau is een concept- en ontwerpbureau opgericht door Thijs van Dalen (1995, NL) en Frans van Ditzhuijzen (1995, NL). Ze staan bekend om projecten die zich bevinden op het snijvlak van grafisch ontwerp, ruimtelijk ontwerp en kunst, vaak in de alledaagse ruimte om ons heen. Zo ontstaan er interdisciplinaire ontwerpen met een verrassend resultaat. “In de eerste plaats maken wij ons werk voor mensen, het publiek maakt ons werk compleet.”",
  circle:"#b472e6",
  interview:"Interview 4",
  liweight: "<b>De Esch</b><i>De maan</i>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/studiobureau-portret1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/studiobureau-portret2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/studiobureau-portret3.jpg"></div>'
}
]

//define all tags
const nextTag = document.querySelector("div.circle2") //finds circle / now next

const slideTag = document.querySelector("#carousel") //finds div.circle

//const fontTag = document.querySelector("#info") //finds div.circle


const titleTag = document.querySelector("h2.name") // title
const bioTag = document.querySelector("p.bio") // bio
const interTag = document.querySelector("p.interview") // interview

const li1Tag = document.querySelector("li.item1")
const li2Tag = document.querySelector("li.item2")
const li3Tag = document.querySelector("li.item3")
const li4Tag = document.querySelector("li.item4")

const sliderTag = document.querySelector("#innerslide")//finds flex section of slide

const circleTag = document.querySelector("div.circle") //finds second circle

//clarify that "next" is moving +1 down in the array and >then run updateSection
const next = function(){
  pageNumber = pageNumber + 1
    if (pageNumber > pages.length - 1){pageNumber = 0} //checks if page number is the final one
    updateSection()
}


// What does it mean to update the section and what elements are involved
const updateSection = function(){
  titleTag.innerHTML = pages[pageNumber].name
  bioTag.innerHTML = pages[pageNumber].text
  interTag.innerHTML = pages[pageNumber].interview

  sliderTag.innerHTML = pages[pageNumber].slider

  li1Tag.innerHTML = pages[0].liweight
  li2Tag.innerHTML = pages[1].liweight
  li3Tag.innerHTML = pages[2].liweight
  li4Tag.innerHTML = pages[3].liweight

  l1Tag.style.color = pages[pageNumber].circle


  circleTag.style.backgroundColor = pages[pageNumber].circle
}

// //if statements HERE
// if pageNumber = 0 {
//  li1Tag.style.fontWeight = 900
//  li1tag.style.color = "blue"
// }


//addEventListener runs on load, listening for a "click"
//when we run a click, we want to run something
nextTag.addEventListener("click", function(){
  next()
})


//addEventListener vs onclick + console error
//it needs to be specified that once "next" is clicked again, the content of <li> is reseted
// li.item# only changes when it is the correct page
// so if page = 1 then li1tag = updated to 1

li1Tag.addEventListener("click", function(){
  next()
})

li2Tag.addEventListener("click", function(){
  next()
})

li3Tag.addEventListener("click", function(){
  next()
})

li4Tag.addEventListener("click", function(){
  next()
})


updateSection()
