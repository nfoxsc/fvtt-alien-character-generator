const nameList = {
  "First": ["Orlando", "Kai", "Marely", "Daniela", "Alfredo", "Serenity", "Rashad", "Peyton", "Selena", "Sydney", "Armani", "Kasey", "Skylar", "Dashawn", "Ismael", "Isai", "Zariah", "Amy", "Elena", "Theresa", "Sylvia", "Teresa", "Jovany", "Yoselin", "Magdalena", "Janet", "Kennedi", "Micheal", "Jakobe", "Genesis", "Brett", "Jazlynn", "Kaylyn", "Elian", "Omari", "Livia", "George", "Marley", "Shyla", "Cael", "Jacqueline", "Rebekah", "Elianna", "Deacon", "Joyce", "Brian", "Adison", "Isabell", "Emanuel", "Cailyn", "Sarah", "Emilia", "Zayden", "Kaylynn", "Lillianna", "Cameron", "Jordyn", "Tania", "Emerson", "Maria", "Lilliana", "Nelson", "Natalie", "Gavin", "Michael", "Kate", "Violet", "Chloe", "Roland", "Quentin", "Lena", "Nikolas", "Charity", "Amani", "Asher", "Trevon", "Melina", "Nataly", "Mohamed", "Asia", "Karley", "Dario", "Carmelo", "Reginald", "Rory", "Coleman", "Sanaa", "Ayaan", "Sean", "Boston", "Maximus", "Cortez", "Colten", "Mackenzie", "Jeremiah", "Adalyn", "Allyson", "Malachi", "Easton", "Jaeden", "Evelin", "Arnav", "Virginia", "Kyan", "Dylan", "Mercedes", "Mariah", "Madden", "Isaac", "Kelsie", "Annabella", "King", "Gauge", "Amiya", "Nicole", "Elizabeth", "Layton", "Angelique", "Allie", "Andrew", "Lamont", "Marisa", "Clare", "Jackson", "Averie", "Brielle", "Mark", "Hana", "Ximena", "Stella", "Jairo", "Draven", "Emma", "Luciana", "Anastasia", "Jaqueline", "Toby", "Josh", "Emely", "Cali", "Marie", "Aubrie", "Jaydan", "Maxwell", "Pedro", "Brooklynn", "Bo", "Susan", "Jaidyn", "Reese", "Mikayla", "Juliana", "Jazlyn", "Kamari", "Adolfo", "River", "Marina", "Kaydence", "Jasper", "Saul", "Noelle", "Ashlynn", "Kylee", "Sariah", "Felicity", "Aron", "Tiana", "Cody", "Payton", "Julius", "Teagan", "Saige", "Roderick", "Arianna", "Marvin", "Cornelius", "Abbey", "Rohan", "Nasir", "Natasha", "Paisley", "Darwin", "Tomas", "Reece", "Jocelynn", "Case", "Camryn", "Melody", "Ignacio", "Alina", "Seth", "Fletcher", "Penelope", "Nora", "Jillian", "Kian", "Carina", "Ezra", "Kinsley", "Immanuel", "Jayvion", "Noel", "Maximo", "Dahlia", "Colin", "Serena", "Meredith", "Nikolai", "Ruben", "Bryce", "Taylor", "Kendall", "Gabriela", "Abbie", "Ulises", "Simon", "Kassandra", "Franklin", "Amber", "Catalina", "Hadley", "Evangeline", "Hunter", "Clinton", "Jaden", "Jake", "Titus", "Kailyn", "Bobby", "Ellie", "Malakai", "Ty", "Santino", "Carmen", "Kayden", "Rachel", "Ryann", "Isla", "Wayne", "Deegan", "Gavyn", "Finn", "Adonis", "Sofia", "Ansley", "Adriana", "Edward", "Teagan", "Conor", "Makenna", "Crystal", "Matias", "Chad", "Brenda", "Kellen", "Jesse", "Juliette", "Mckayla", "Kenna", "Luciano", "Dawson", "Savannah", "Paulina", "Piper", "Mike", "Shyann", "Hanna", "Maya", "Sage", "Kendal", "Janiya", "Jaylen", "Lawrence", "Aspen", "Destinee", "Khloe", "Declan", "Audrina", "Abby", "Deven", "Ricky", "Valerie", "Maribel", "Abram", "August", "Campbell", "Alexandria", "Alexus", "Riya", "Riley", "Jeffery", "Jazmin", "Hugo", "David", "Hudson", "Sonny", "Aidyn", "Grady", "Rhianna", "Dante", "Brooks", "Morgan", "Kendall", "Chelsea", "Giovanni", "Beckham", "Ashleigh", "Colt", "Krystal", "Ruth", "Heidi", "Jane", "Humberto", "Madelyn", "Ronnie", "Antwan", "Regan", "Bianca", "Lily", "Mya", "Levi", "Heidy", "Sullivan", "Kristina", "Melvin", "Ryan", "Jordon", "Dalton", "Joselyn", "Lina", "Lance", "Jerimiah", "Malia", "Demetrius", "Desirae", "Lexie", "Janessa", "Kayleigh", "Gia", "Kyle", "Jovani", "Layla", "Anabel", "Moises", "Justin", "Albert", "Jaime", "Amara", "Marc", "Libby", "Marlie", "Trace", "Johnathan", "Jessie", "Kendrick", "Amare", "Abril", "James", "Armando", "Kody", "Maryjane", "Jayda", "Karly", "Sara", "Jimena", "Jordan", "Kolby", "Helena", "Kylan", "Nicholas", "Alani", "Kaleb", "Mireya", "Jaslene", "Amira", "Makhi", "Miranda", "Makaila", "Lana", "Prince", "Andrea", "Izabella", "Roberto", "Ruby", "Michaela", "Kyson", "Kristian", "Uriel", "Evelyn", "Shiloh", "Zoey", "Corbin", "Matthew", "Madison", "Bruce", "Daisy", "Gaven", "Dixie", "Ronald", "Cherish", "Emiliano", "Mauricio", "Luz", "Dennis", "Cedric", "Hugh", "Charles", "Silas", "Turner", "Caiden", "Bailee", "Reagan", "Amirah", "Cindy", "Kassidy", "Bradyn", "Braedon", "Jacob", "Lyric", "Alannah", "Joslyn", "Miya", "Amari", "Alia", "Talan", "Amiah", "Gideon", "Jamison", "Wyatt", "Rylee", "Devan", "Talia", "Damion", "Kenzie", "Rose", "Porter", "Brycen", "Bryan", "Dana", "Maleah", "Alvin", "Angelina", "Lee", "Casey", "Sheldon", "Alfonso", "Garrett", "Jamari", "Ayla", "Charlie", "Dillan", "Anika", "Trenton", "Damari", "Lauryn", "Sam", "Colton", "Brianna", "Cordell", "Kamora", "Renee", "Donte", "Daniella", "Mohammed", "Elaina", "Grant", "Zayne", "Lilly", "Madalynn", "Rylie", "Julianne", "Alanna", "Raiden", "Reagan", "Tamara", "Kailee", "Rafael", "Jolie", "Keyla", "Jenny", "Steve", "Raphael", "Nathanial", "Marquis", "Christopher", "Kara", "Katherine", "Mario", "Nathanael", "Deandre", "Ryan", "Rebecca", "Eleanor", "Sloane", "Jaiden", "Amari", "Randy", "Janiah", "Denzel", "Efrain", "Sydnee", "Greta", "Madyson", "Branden", "Emmalee", "Lane", "Mekhi", "Julian", "Deshawn", "Kamila", "Cecilia", "Ramon", "Kali", "Zechariah", "Maia", "Gillian", "Markus", "Hadassah", "Reyna", "Elsie", "Azul", "Mariana", "Anahi", "Londyn", "Monica", "Marley", "Kyra", "Amanda", "Leanna", "Eduardo", "Rayan", "Kareem", "Kaylah", "Kayley", "Shane", "Ean", "Skyler", "Brisa", "Trey", "Essence", "Phoebe", "Wilson", "Glenn", "Ernest", "Lamar", "Harper", "Claire", "Zaria", "Nayeli", "Janelle", "Alisson", "Evie", "Meadow", "Leticia", "Quinn", "Gracelyn", "Cloe", "Cassius", "Noah", "Payton", "Marquise", "Hayley", "Aimee", "Nia", "Lucille", "Ada", "Felipe", "Lara", "Alison", "Chaim", "Rhett", "Taliyah", "Jessica", "Cannon", "Adalynn", "Ashlyn", "Marlene", "Bennett", "Lorenzo", "Marshall", "Estrella", "Giovanna", "Roselyn", "Ernesto", "Nikhil", "Frances", "Cruz", "Rylan", "Mikaela", "Sincere", "Erik", "Ross", "Andy", "Asa", "Anna", "Darion", "Russell", "Aliyah", "Amaris", "Hector", "Thaddeus", "Alonzo", "Logan", "Haven", "Aaden", "Jovanny", "Martin", "Camryn", "Rhys", "Harley", "Bailey", "Skye", "Adan", "Lyric", "Miley", "Iliana", "Chaz", "Litzy", "Cash", "Mayra", "Todd", "Maci", "Israel", "Grayson", "Victoria", "Dulce", "Luke", "Ashanti", "Ramiro", "Bruno", "Lucian", "Brandon", "Dorian", "Mathias", "Jefferson", "Bridget", "Cassidy", "John", "Lisa", "Terrance", "Lila", "Kiersten", "Ben", "Zoie", "Semaj", "Riley", "Deborah", "Paula", "Luka", "Joe", "Celia", "Ellen", "Moses", "Melany", "Fernanda", "Holly", "Isaiah", "Miriam", "Anabelle", "Zaniyah", "Briley", "Dexter", "Abel", "Tristian", "Aydan", "Ibrahim", "Davon", "Ishaan", "Zion", "Lainey", "Frida", "Leland", "Lacey", "Scarlet", "Izaiah", "Dominique", "Cayden", "Xzavier", "Christina", "Yandel", "Irvin", "Davion", "Julie", "Karlie", "Jair", "Reilly", "Kinley", "Jaylen", "Shayla", "Elyse", "Rayna", "Augustus", "Justice", "Gretchen", "Ciara", "Wesley", "Raelynn", "Leyla", "Maggie", "Giovanny", "Abdiel", "Zane", "Cale", "Jabari", "Weston", "Maddox", "Jakob", "Jensen", "Aiden", "Ahmed", "Andreas", "Alexzander", "Adrianna", "Sawyer", "Morgan", "Zaiden", "Adrien", "Blake", "Tatum", "Desmond", "Kenley", "Fiona", "Yasmin", "Alexis", "Brody", "Mateo", "Tripp", "Amaya", "Ariel", "Marcel", "Duncan", "London", "Cierra", "Dalia", "Felix", "Trevor", "Angel", "Alberto", "Belen", "Jaelynn", "Selina", "Johnny", "Cadence", "Ryleigh", "Hassan", "Jace", "Keenan", "Quinn", "Naima", "Abraham", "Miles", "Faith", "Nylah", "Danny", "Samara", "Spencer", "Brennan", "Coby", "Jan", "Kira", "Jaycee", "Camren",
"Paola"],
  "Last": ["Achard", "Addinell", "Adeney", "Aguilon", "Albelin", "Alevi", "Alis", "Altard", "Ansgot", "Anzeray", "Arundel", "Aschuill", "Asselin", "Auber", "Aubert", "Auffrye", "Aungier", "Auvray", "Azor", "Bachiler", "Baignard", "Bailleul", "Bainard", "Baliol", "Ballard", "Barkentin", "Basnage", "Basset", "Baudry", "Baujot", "Bauldry", "Bauquemare", "Bavent", "Beaumanoir", "Beaumarchais", "Beaumont", "Beauvallet", "Becdelièvre", "Bele", "Belet", "Bellecote", "Belmis", "Benoist", "Beringar", "Berners", "Bernières", "Bertran", "Bigot", "Blancbaston", "Blangi", "Blosbeville", "Blouet", "Bohon", "Boisivon", "Boislevesque", "Boissel", "Boivin", "Bolam", "Bolbec", "Bondeville", "Bonel", "Bonenffant", "Boneth", "Bonvalet", "Bordel", "Bosanquet", "Bosc", "Bosiet", "Bossard", "Bostel", "Boteler", "Boterel", "Botin", "Bouchard", "Bourchier", "Bourdekin", "Bourdet", "Bourneville", "Bradwardine", "Brai", "Braund", "Brebeuf", "Brereton", "Bretel", "Breteuil", "Bretteville", "Brèvedent", "Brimou", "Brinon", "Briouse", "Briqueville", "Brix", "Buci", "Budi", "Bulli", "Burci", "Burguet", "Buron", "Bursigni", "Busnois", "Busquent", "Caen", "Cailli", "Caillot", "Cairon", "Calmette", "Cambrai", "Campion", "Canaigres", "Canouville", "Caradas", "Carbonnel", "Cardon", "Cardonell", "Carnet", "Carteret", "Castillon", "Caunter", "Cavelier", "Ceauce", "Cely", "Challenge", "Chandos", "Chartres", "Chauncy", "Cheney", "Cherbourg", "Cioches", "Claville", "Clerinell", "Clinchamps", "Coliar", "Colleville", "Colombelles", "Colombieres", "Comyn", "Conteville", "Corbet", "Corbière", "Corbon", "Cormeilles", "Corneilles", "Corviser", "Cosin", "Couci", "Couer", "Courcelle", "Courcelles", "Courci", "Courcon", "Courcy", "Courseume", "Craon", "Crevecoeur", "Croc", "Cruel", "Cugey", "Cul", "Louf", "Culai", "Cumin", "Curteys", "d'Ouilli", "d'Adreci", "d'Aguillon", "d'Albert", "d'Alencon", "Dalyngridge", "d'Amboise", "d'Ambray", "Damours", "d'Andeli", "d'Andre", "d'Angers", "d'Angerville", "d'Angleville", "Danneville", "d'Ansleville", "Danvers", "Darcy", "Darell", "d'Argentan", "D'Argouges", "d'Argues", "d'Armentieres", "d'Arques", "d'Athenous", "d'Aubernon", "d'Auberville", "d'Audrieu", "d'Aufai", "d'Aumale", "Daunger", "d'Aunon", "D'Auvay", "D'Auvrecher", "d'Avranches", "d'Avre", "Bailleul", "Balon", "Bans", "Bapaumes", "Barbes", "Beauchamp", "Beaufou", "Beaumais", "Beaumont", "Beauvais", "Bellehache", "Bellemare", "Bellièvre", "Belmeis", "Berchelai", "Bercheres", "Bernai", "Bernieres", "Berranger", "Berville", "Bethencourt", "Bienfaite", "Biville", "Blays", "Blundville", "Bouilon", "Bourgueville", "Breos", "Cahaihnes", "Calmesnil", "Caulmont", "Caux", "Challon", "Chefderue", "Civille", "Corbeil", "Cormeilles", "Coucy", "Courseilles", "Croismare", "Faicterau", "Felius", "Fry", "Genville", "Gosbeck", "Grieu", "Hanivel", "Hattes", "Herle", "Ireby", "Champagne", "Hay", "Mare", "Noue", "Place", "Porte", "Reue", "Roche", "Lampérière", "Lombelon", "Lorraine", "Malhortye", "Maromme", "Massard", "Mesniel", "Mesnildo", "Monchy", "Monluc", "Montchrestien", "Montfault", "Montgomery", "Moustiers", "Moy", "Munchesney", "Pardieu", "Perronet", "Pinchemont", "Recusson", "Rely", "Reymes", "Roncherolles", "Salynges", "Saussay", "Savage", "Seguzzo", "Servian", "Seyssel", "Tanie", "Tocni", "Toeni", "Valles", "Vandes", "Vaux", "Vesci", "Villy", "Viuepont", "Vymont", "d'Ecouis", "d'Engagne", "d'Eresby", "Moutiers", "Vaux", "d'Escalles", "Deschamps", "Desmares", "d'Espagne", "Destain", "d'Eu", "d'Evreux", "d'Helion", "d'Hericy", "d'Houdetot", "Digby", "d'Incourt", "Ditton", "Dive", "Beugelin", "d'Ivri", "Dol", "Hugue", "d'Olgeanc", "d'Orbec", "d'Orglande", "d'Ornontville", "Douai", "Dreux", "Droullin", "Druel", "Bec", "Bois-Hebert", "Bosc-Roard", "Breuil", "Buisson", "Gouey", "Merle", "Moucel", "Perche", "Perron", "Quesnai", "Saussai", "Theil", "Tilleul", "Dubosc", "Dufay", "Dufour", "Duhamel", "Dumont", "d'Unepac", "Dupasquier", "Duquesne", "Durandal", "Durerie", "Durjardin", "Durville", "Duval", "Dyel", "Ecouland", "Elers", "Emory", "Engerrand", "Erquemboure", "Espec", "Esteney", "Evelyn", "Eveque", "Faceby", "Faintree", "Falaise", "Fantosme", "Faucon", "Fecamp", "Fergant", "Ferrieres", "Feu", "Fitzalan", "Fitzherbert", "Fitzhugh", "Fitzroy", "Flambard", "Folet", "Foliot", "Fonnereau", "Fontemai", "Fossard", "Fougeres", "Fourneaux", "Framan", "Fresle", "Fribois", "Froissart", "Fromentin", "Furnival", "Gael", "Gand", "Garin", "Gaveston", "Gibard", "Giffard", "Gillain", "Gilpin", "Giscard", "Glanville", "Godart", "Godefroy", "Gomboult", "Gouel", "Goulaffre", "Gournai", "Grai", "Grancourt", "Grentemesnil", "Grenteville", "Greslet", "Griffin", "Grimoult", "Grouchet", "Groulart", "Guéribout", "Guernon", "Gueron", "Guideville", "Guiffart", "Guildersleeve", "Guinand", "Gurney", "Guyot", "Hachet", "Halacre", "Hallé", "Hamage", "Harcourt", "Haute", "Hauville", "Hédiart", "Hendry", "Herbard", "Heriet", "Heuzé", "Hewse", "Hodenc", "Holland", "Hotot", "Hue", "Hugonin", "Hynde", "Ide", "Jolland", "Jubert", "Berviere", "Bruiere", "Cleve", "Foret", "Guierche", "Mare", "Pommeraie", "Riviere", "Vache", "Verrier", "Labbé", "Laci", "l'Adoube", "l'Aigle", "Lallement", "l'Ane", "Lanquetot", "l'Appeville", "l'Archer", "l'Aune", "Barge", "Berruier", "Blanc", "Blond", "Bouguignon", "Breton", "Chandelier", "Clerc", "Conte", "Cordier", "Cornu", "Despensier", "Doulcet", "Flamand", "Gaucher", "Goix", "Grant", "Gras", "Jumel", "Lieur", "Maistre", "Marchant", "Marechal", "Marinier", "Masson", "Paulmier", "Pelletier", "Pesant", "Poitevin", "Prévost", "Roux", "Roux", "Seigneur", "Senechal", "Sueur", "Tellier", "Vicomte", "Lefebre", "l'Estourmi", "Letre", "Levasseur", "Lhuillier", "Libourg", "Ligonier", "L'ile", "Linesi", "Lisieux", "Loges", "Lorz", "Loucelles", "Louet", "Louvet", "Lovet", "Lucy", "Ludel", "Lynom", "Machault", "Machel", "Maci", "Maignart", "Malet", "Mallebisse", "Malleville", "Mallilie", "Mallory", "Malvallet", "Malveisin", "Maminot", "Mandeville", "Manneilli", "Mansel", "Mantel", "Marchés", "Marchmain", "Marci", "Marescot", "Margas", "Mariage", "Marillac", "Marisco", "Martel", "Mathan", "Maubenc", "Maudit", "Mauduit", "Maunsell", "Maurouard", "Mautravers", "Maynet", "Medley", "Mercier", "Meri", "Merteberge", "Mesnage", "Meulan", "Meules", "Meverel", "Middleton", "Mobec", "Moion", "Monceaux", "Montacute", "Montaigu", "Montbrai", "Mont-Canisi", "Montfiquet", "Montfort", "Montgomery", "Montgommeri", "Moron", "Morphew", "Mortagne", "Mortain", "Mortemer", "Mortmain", "Moyaux", "Mucedent", "Munneville", "Murdac", "Musard", "Musart", "Mussegros", "Mustel", "Nelond", "Neot", "Nesdin", "Neufmarche", "Neuville", "Noyers", "Omand", "Orlebar", "Ormond", "Osmond", "Osmont", "Ouistreham", "Painel", "Paixdecouer", "Pancevolt", "Pantoul", "Papelion", "Papon", "Paris", "Parry", "Parthenai", "Paschal", "Pasquier", "Pastforeire", "Patris", "Paumera", "Peccoth", "Peche", "Peis", "Pennant", "Perci", "Péricard", "Perroy", "Petremol", "Peveril", "Pevrel", "Picard", "Picot", "Picvini", "Pierrepont", "Pinel", "Pipin", "Pippery", "Piquiri", "Pistres", "Pithou", "Plucknet", "Poer", "Poignant", "Poillei", "Pointel", "Pont", "Pont", "l'Arche", "Pontchardon", "Port", "Postel", "Poussin", "Prestcote", "Puchot", "Quesnel", "Quièvremont", "Quincarnon", "Raimbeaucourt", "Rainecourt", "Raleigh", "Rames", "Raoullin", "Rassent", "Ravenot", "Rennes", "Renold", "Restault", "Reviers", "Riebou", "Rivière", "Roard", "Rocque", "Roger", "Romé", "Romenel", "Ros", "Rosai", "Rou", "Roussel", "Runeville", "Sacquerville", "Saint-Clair", "Sainte-d'Aignaux", "Saint-Germain", "Saint-Helene", "Saint-Leger", "Saint-Ouen", "Saint-Quentin", "Saint-Sanson", "Saint-Valeri", "Saint-Waleri", "Saisset", "Sauvigni", "Scolland", "Séguier", "Senarpont", "Senlis", "Sept-Meules", "Simnel", "Sollers", "Somneri", "Sourdeval", "Strivelyn", "Stukely", "Tabraham", "Taillebois", "Taillepied", "Talvace", "Tessel", "Thaon", "Theroulde", "Thibault", "Thiboust", "Thorel", "Tibon", "Tilly", "Tinel", "Tirel", "Toclive", "Torteval", "Touchet", "Tourlaville", "Tourmente", "Tournai", "Tournebulle", "Tournebut", "Tourneville", "Toustain", "Tranchant", "Trelli", "Tulles", "Urry", "Valance", "Valognes", "Vastel", "Vatteville", "Vaubadon", "Vauville", "Vaux", "Vavassour", "Veci", "Venois", "Ventris", "Ver", "Verdun", "Vernold", "Vernon", "Verrall", "Vesci", "Vesli", "Veteripont", "Vieuxpont", "Villehardain", "Villon", "Vipont", "Vis-de-Louf", "Vis-de-Loup", "Vitalis", "Vivers", "Viville", "Voisin", "Wadard", "Warci", "Watteau", "Werables", "Willoughby", "Wissant", "Ygou"]
}

const careerList = {
    "COLONIAL MARINE": {
        "menuItemNumber": 1,
        "keyAttribute": "Strength",
        "keySkills": ["closeCbt", "stamina", "rangedCbt"],
        "careerTalents": ["Banter", "Overkill", "Past the Limit"],
        "agenda": ["You are a decorated hero, you need to defend your reputation. At all costs.", "You once helped cover up a war crime—no-one must ever know.", "The death of your buddy has spooked you — now you secretly fear combat and confrontation. You need to overcome your fear."],
        "appearance": ["Crew cut", "Arm tattoo", "Scar", "Cold eyes", "Cocky grin", "Personalized body armor"],
        "signatureItem": ["Bullet that you survived", "Lost friend’s dog tags", "Trophy from a defeated enemy"],
        "gear":
        {
            "item1": ["M41A Pulse Rifle", "M56A2 Smart Gun"],
            "item2": ["M314 Motion Tracker", "2 G2 Electroshock Grenades"],
            "item3": ["IRC MK.35 Pressure Suit", "M3 Personnel Armor"],
            "item4": ["Signal Flare", "Deck of cards"]
        }
    },
    "COLONIAL MARSHAL": {
        "menuItemNumber": 2,
        "keyAttribute": "Wits",
        "keySkills": ["observation", "manipulation", "rangedCbt"],
        "careerTalents": ["Authority", "Investigator", "Subdue"],
        "agenda": ["Your longtime partner betrayed you and defected to a crime syndicate. Get even.", "You dream of turning in the badge and settling down in peace. Work towards it.", "You did a bad thing in the past and it has come back to haunt you. You need to decide what you are made of"],
        "appearance": ["Chewing a toothpick", "Cigarette in mouth", "Impressive mustache", "Worn cap", "Scar across face", "Graying hair", "Crew cut", "Inquisitive gaze", "Old leather jacket"],
        "signatureItem": ["Photo of a loved one", "Dented flask with an inscription on the front", "News clipping of an unsolved case"],
        "gear":
        {
            "item1": [".357 Magnum Revolver", "Armat Model 37A2 12 gauge pump-action"],
            "item2": ["Binoculars", "Hi-beam flashlight"],
            "item3": ["Personal medkit", "Stun baton"],
            "item4": ["D6 doses Neversleep pills", "Hand radio"]
        }
    },
    "COMPANY AGENT": {
        "menuItemNumber": 3,
        "keyAttribute": "Wits",
        "keySkills": ["comtech", "observation", "manipulation  "],
        "careerTalents": ["Cunning", "Personal Safety", "Take Control"],
        "agenda": ["You are greedy for power and never miss an opportunity to get ahead.", "The Company is holding back information from you. What? And why?", "You are a nice guy, but the Company is blackmailing you to do its dirty work. Get even."],
        "appearance": ["Icy glare", "Disarming smile", "Expensive Rolex", "Unique signet ring", "Tanned", "Elaborate hairstyle", "Emotionless stare", "Monogrammed silk tie"],
        "signatureItem": ["Letter of corporate authorization", "Divorce papers", "Employee of the Year award"],
        "gear":
        {
            "item1": ["Leather briefcase", "Chrome briefcase"],
            "item2": ["Gold-plated pen", "Rolex watch"],
            "item3": ["Data transmitter card with corporate clearance level", "M4A3 Service Pistol"],
            "item4": ["D6 doses Neversleep", "D6 doses Naproleve"]
        }
    },
    "MEDIC": {
        "menuItemNumber": 5,
        "keyAttribute": "Empathy",
        "keySkills": ["mobility", "observation", "medicalAid"],
        "careerTalents": ["Calming Presence", "Compassion", "Field Surgeon"],
        "agenda": ["You are addicted to a strong painkiller. Protect your stash—and your secret.", "You have some unusual (but classified) medical reports that the Company is looking for. Find out why they are so important.", "You’ve sworn an oath never to take a life and you mean it."],
        "appearance": ["Sympathetic smile", "Short", "tidy hair", "Warm", "caring eyes", "Dark bags under eyes", "Fidgeting hands", "Calm and gentle voice", "Cold", "unsympathetic stare", "Spectacles", "White coat"],
        "signatureItem": ["Framed medical certificate.", "Letter from son or daughter.", "Last psych evaluation: (All clear at last.)"],
        "gear":
        {
            "item1": ["Surgical kit", "IRC MK.50 compression suit"],
            "item2": ["D6 doses Naproleve", "D6 doses Neversleep"],
            "item3": ["Personal medkit", "D6 doses experimental X-Drugs"],
            "item4": ["Samani E-Series watch", "Hand radio"]
        }
    },
    "KID": {
        "menuItemNumber": 4,
        "keyAttribute": "Agility",
        "keySkills": ["mobility", "survival", "observation"],
        "careerTalents": ["Beneath Notice", "Dodge", "Nimble"],
        "agenda": ["You want to find an adult you can trust—really trust.", "You have no family left. Make sure you never end up alone again.", "No one gives you anything to do, so explore, try things out, make your own entertainment."],
        "appearance": ["Grubby and unkempt", "Trendy sneakers that light up", "Denim jeans", "torn at the knees", "T-Shirt with band logo", "Cargo shorts", "Ponytail", "Bored expression", "Baseball cap"],
        "signatureItem": ["Lunchbox covered in stickers", "Favorite doll", "action figure", "Bracelet made by older sibling"],
        "gear":
        {
            "item1": ["Fishing line", "Laser pointer"],
            "item2": ["Magnet", "Radio-controlled car"],
            "item3": ["Yo-yo", "Electronic handheld game"],
            "item4": ["Personal locator beacon", "Coloring pens"]
        }
    },
    "OFFICER": {
        "menuItemNumber": 7,
        "keyAttribute": "Empathy",
        "keySkills": ["rangedCbt", "command", "manipulation"],
        "careerTalents": ["Field commander", "Influence", "Pull Rank"],
        "agenda": ["You come from an officer family. You need to gain promotion an award—soon.", "You messed up in the past. Avoid taking the blame for any more mission screw-ups.", "Mistakes are deadly so don’t let anyone under your watch screw up. Make sure they understand why."],
        "appearance": ["Hair in a crew cut", "or tied-back", "Serious", "intense expression", "Spotless uniform", "Overworked and “strung-out”", "Stiff body posture", "Relaxed and soothing voice", "Jumpsuit with mission patch", "Impatiently taps a foot"],
        "signatureItem": ["Ship’s cat", "Letter of recommendation", "ICC Commercial Flight Officer license"],
        "gear":
        {
            "item1": ["M4A3 Service Pistol", "Rexim RXF-M5 EVA Pistol"],
            "item2": ["Samani E-Series watch", "Binoculars"],
            "item3": ["M314 motion tracker", "IRC MK.50 compression suit"],
            "item4": ["Seegson P-DAT", "IFF transponder"]
        }
    },
    "PILOT": {
        "menuItemNumber": 8,
        "keyAttribute": "Agility",
        "keySkills": ["piloting", "rangedCbt", "comtech "],
        "careerTalents": ["Full Throttle", "Like the Back of Your Hand", "Reckless"],
        "agenda": ["It’s about pushing the limit. Taking a chance. Taking risks—so take a risk.", "You’re stubborn and don’t like to back down even if your friends might get hurt.", "You’re a loner always happier when you can do a task without relying on others."],
        "appearance": ["Arrogant walk", "Steely blue eyes", "Multi-pocket flight suit", "Sunglasses", "Previous mission patches", "Deadpan expression", "Chews gum", "Skeptical look"],
        "signatureItem": ["Dashboard dancer", "Pilot’s logbook", "Pilot shades"],
        "gear":
        {
            "item1": ["M4A3 service pistol", "PR-PUT uplink terminal"],
            "item2": ["Hand radio", "D6 flares"],
            "item3": ["Maintenance jack", "Seegson P-DAT"],
            "item4": ["Seegson system diagnostic device", "IRC MK.50 compression suit"]
        }
    },
    "ROUGHNECK": {
        "menuItemNumber": 9,
        "keyAttribute": "Strength",
        "keySkills": ["heavyMach", "stamina", "closeCbt"],
        "careerTalents": ["Resilient", "The Long Haul", "True Grit"],
        "agenda": ["You are a compulsive thrill-seeker. If there is a risk to take you’ll step up and try it.", "You once sacrificed your family for the job. Now you won’t let your friends down—ever.", "Downtime matters. If you can grab a can of Aspen beer (or even Souta Dry though only if you’re desperate) and some time alone you’re happy."],
        "appearance": ["Tattoos", "Scar", "Broken nose", "Mirthless eyes", "Smirking face", "Loud laugh", "Bruised and calloused hands", "Eyes hidden behind safety goggles", "Filthy boots that clomp loudly when you walk", "Wild hair"],
        "signatureItem": ["Tool belt", "Photo of partner", "Crucifix", "other religious symbol"],
        "gear":
        {
            "item1": ["Cutting torch", "Watsumi DV-303 bolt gun"],
            "item2": ["D6 doses Hydr8tion", "Maintenance jack"],
            "item3": ["Stash of hard liquor", "IRC MK.50 compression suit"],
            "item4": ["Hi-beam flashlight", "Seegson C-Series magnetic tape recorder"]
        }
    },
    "SCIENTIST": {
        "menuItemNumber": 10,
        "keyAttribute": "Wits",
        "keySkills": ["observation", "survival", "comtech"],
        "careerTalents": ["Analysis", "Breakthrough", "Inquisitive"],
        "agenda": ["Your last project was stolen from you. Now you keep many of your findings secret.", "You hate authority and go out of your way to be uncooperative if possible.", "You find it hard to delegate to others even if it means taking on extra work."],
        "appearance": ["Unkempt", "untidy appearance", "Stained lab coat", "Nervous manner", "Hands constantly shoved in pockets", "Tidy", "well-trimmed hair", "Thoughtful gaze", "Clears throat before speaking", "Bleary", "overworked eyes"],
        "signatureItem": ["Albert Einstein Award", "Unfinished scientific paper", "Blackmail letters"],
        "gear":
        {
            "item1": ["Digital video camera", "Hand radio"],
            "item2": ["Seegson P-DAT", "Neuro visor"],
            "item3": ["Seegson System Diagnostic Device", "Personal Data Transmitter"],
            "item4": ["M314 motion tracker", "Personal medkit"]
        }
    }
};

const raceList = ["character", "synthetic"];

let skillList = {
    "heavyMach": {
        "label": "Heavy Machinery",
        "value": 0,
        "mod": 1,
        "ability": "str"
    },
    "closeCbt": {
        "label": "Close Combat",
        "value": 0,
        "mod": 1,
        "ability": "str"
    },
    "stamina": {
        "label": "Stamina",
        "value": 0,
        "mod": 1,
        "ability": "str"
    },
    "observation": {
        "label": "Observation",
        "value": 0,
        "mod": 2,
        "ability": "wit"
    },
    "survival": {
        "label": "Survival",
        "value": 0,
        "mod": 2,
        "ability": "wit"
    },
    "comtech": {
        "label": "Comtech",
        "value": 0,
        "mod": 2,
        "ability": "wit"
    },
    "rangedCbt": {
        "label": "Ranged Combat",
        "value": 0,
        "mod": 3,
        "ability": "agl"
    },
    "mobility": {
        "label": "Mobility",
        "value": 0,
        "mod": 3,
        "ability": "agl"
    },
    "piloting": {
        "label": "Piloting",
        "value": 0,
        "mod": 3,
        "ability": "agl"
    },
    "command": {
        "label": "Command",
        "value": 0,
        "mod": 4,
        "ability": "emp"
    },
    "manipulation": {
        "label": "Manipulation",
        "value": 0,
        "mod": 4,
        "ability": "emp"
    },
    "medicalAid": {
        "label": "Medical Aid",
        "value": 0,
        "mod": 4,
        "ability": "emp"
    }
};

// Random Key from Dictionary
function dictRandomKey(dict) {
    const keys = Object.keys(dict)
    const job = keys[Math.floor(Math.random() * keys.length)]
    return job;
};

// Random Value from Dictionary
function dictRandomValue(dict) {
    const values = Object.values(dict)
    const primeStat = values[Math.floor(Math.random() * values.length)]
    return primeStat
};

// Random Item From List
function listRandom(list) {
    return list[Math.floor((Math.random() * list.length))];
};

function nameGenerator() {
  name = listRandom(nameList["First"]).concat(" ", listRandom(nameList["Last"]));
  return name;
};

// Roll Attributes
function rollAttributes(stat) {
    if (charAttributes.length >= 2 && charAttributes.length <= 3 && parseInt(statTotal) <= 8) {
        roll = 10 - parseInt(statTotal);
        statTotal += roll;
        charAttributes.push(roll);
        attributesScores[stat] = roll;
        attributesList.shift(stat);
    } else if (charAttributes.length >= 3 && parseInt(statTotal) < 14) {
        roll = 14 - parseInt(statTotal);
        statTotal += roll;
        charAttributes.push(roll);
        attributesScores[stat] = roll;
        attributesList.shift(stat);
    } else {
        let roll = Math.floor(Math.random() * 3) + 2;
        statTotal += roll;
        charAttributes.push(roll);
        attributesScores[stat] = roll;
        attributesList.shift(stat);
    }
};

function assignPrimeStat(stat, race) {
    if (race == "character") {
        roll = 4;
        statTotal += roll;
        charAttributes.push(4);
        attributesScores[stat] = 4;
        let primeStat = attributesList.indexOf(stat);
        attributesList.splice(primeStat, 1);
        return roll;
    } else {
        roll = 5;
        statTotal += roll;
        charAttributes.push(5);
        attributesScores[stat] = 5;
        let primeStat = attributesList.indexOf(stat);
        attributesList.splice(primeStat, 1);
        return roll;
    }
};

// Random Skills
function rollSkills(skill) {
    skillsTotal += 1;
    skillList[skill]["value"] += 1;
};

function rollCareerSkills(skill) {
    let skillRoll = Math.floor(Math.random() * 2) + 1;
    skillsTotal += skillRoll;
    skillList[skill]["value"] += skillRoll;
};

function cash(career) {
    const upper = ["COMPANY AGENT", "OFFICER"]
    const middle = ["COLONIAL MARINE", "COLONIAL MARSHAL", "MEDIC", "PILOT", "ROUGHNECK", "SCIENTIST"]

    if (upper.includes(career)) {
        let money = ((Math.floor(Math.random() * 5) + 1) + (Math.floor(Math.random() * 5) + 1)) * 100;
        return money;
    } else if (middle.includes(career)) {
        let money = (Math.floor(Math.random() * 5) + 1) * 100;
        return money;
    } else {
        let money = (Math.floor(Math.random() * 5) + 1);
        return money;
    }
};


// Career
const charCareer = dictRandomKey(careerList);
const charPrimeStat = careerList[charCareer]["keyAttribute"];
const menuItemNumber = careerList[charCareer]["menuItemNumber"]
// Race
const charRace = listRandom(raceList);

// Name
const charName = nameGenerator();

// Appearance
const charAppearance = dictRandomValue(careerList[charCareer]["appearance"]);

// Agenda
const charAgenda = dictRandomValue(careerList[charCareer]["agenda"]);

// Items
const charSignatureItem = dictRandomValue(careerList[charCareer]["signatureItem"]);
let charItems = []
for (var i = 1; i <= 4; i++) {
    itemList = "item" + i;
    charItems.push(dictRandomValue(careerList[charCareer]["gear"][itemList]));
};
let adHocItems = `
  <p> - ${charItems[0]}</p>
  <p> - ${charItems[1]}</p>
  <p> - ${charItems[2]}</p>
  <p> - ${charItems[3]}</p>
`;

// Cash
const charCash = cash(charCareer);

// Talents
let careerTalentList = `
  <p> - ${careerList[charCareer]["careerTalents"][0]}</p>
  <p> - ${careerList[charCareer]["careerTalents"][1]}</p>
  <p> - ${careerList[charCareer]["careerTalents"][2]}</p>
`;


// Skills
let skillsTotal = 0;

for (var i = 0; i < 3; i++) {
    rollCareerSkills(careerList[charCareer]["keySkills"][i]);
};

for (var s in skillList) {
    if (skillsTotal < 10) {
        rollSkills(s);
    } else {
        skillsTotal += 0;
        skillList[s]["value"] += 0;
    }
};

//  Attributes
let attributesList = ["Strength", "Wits", "Agility", "Empathy"]
let attributesScores = [];
let charAttributes = [];
let statTotal = 0;

assignPrimeStat(charPrimeStat, charRace);
for (var i = 0; i < 3; i++) {
    rollAttributes(attributesList[0]);
};

//
// Set up the array to create the character
//

// Now set up the base array
let newValues = {
    name: charName,
    type: charRace,
    folder: null,
    sort: 12000,
    system: {},
    token: {},
    items: [],
    flags: {},
};
// build out the array with the derived data
setProperty(newValues, 'system.attributes.str.value', `${attributesScores["Strength"]}`);
setProperty(newValues, 'system.attributes.wit.value', `${attributesScores["Wits"]}`);
setProperty(newValues, 'system.attributes.agl.value', `${attributesScores["Agility"]}`);
setProperty(newValues, 'system.attributes.emp.value', `${attributesScores["Empathy"]}`);

for (s in skillList) {
    setProperty(newValues, `system.skills.${s}.value`, `${skillList[s]["value"]}`);
    setProperty(newValues, `system.skills.${s}.label`, `${skillList[s]["label"]}`);
    setProperty(newValues, `system.skills.${s}.ability`, `${skillList[s]["ability"]}`);
    setProperty(newValues, `system.skills.${s}.description`, `${skillList[s]["label"]}`);
    setProperty(newValues, `system.skills.${s}.mod`, `${skillList[s]["mod"]}`);
};

setProperty(newValues, 'system.general.career.value', `${menuItemNumber}`);
setProperty(newValues, 'system.general.agenda.value', `${charAgenda}`);
setProperty(newValues, 'system.general.appearance.value', `${charAppearance}`);
setProperty(newValues, 'system.general.cash.value', `${charCash}`);
setProperty(newValues, 'system.general.sigItem.value', `${charSignatureItem}`);

setProperty(newValues, 'system.adhocitems', `${adHocItems}`);
setProperty(newValues, 'system.notes', `${careerTalentList}`);

// Create the actor
let newNPC = await Actor.create(newValues);

// and display it
newNPC.sheet.render(true);

let messageContent = `
  <p>New CPlayer Sheet: ${charName}</p>
`

// create the message
let chatData = {
  content: messageContent,
};
ChatMessage.create(chatData, {});