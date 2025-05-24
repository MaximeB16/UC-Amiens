document.addEventListener('DOMContentLoaded', () => {
    const popUp = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const boxes = document.querySelectorAll('.Sorties');

    const contenuPopups = [
        [
            { type: 'text' , value: `Flora est une femme âgée de 76 ans, née le 18 juillet 1948 dans une famille de 5 enfants. Elle a eu 2 garçons : Franck, chauffeur de train, et Olivier, directeur de parade au parc Disneyland.

Flora aime la pâtisserie qu'elle a apprise très tôt, elle connaît bien la culture culinaire de l’Italie, de la Thaïlande et de la Suisse du fait de ses nombreux voyages. Flora est aussi passionnée de sport, lors de sa jeunesse elle a pu en tester un bon nombre: le basket, le parapente, le ski, etc... Mais celui sortant du lot c’est le tennis, son préféré.

Pleine de courage et de résilience, elle lutte contre sa maladie: la sclérose en plaque. Elle se déplace aujourd’hui en fauteuil roulant dû à la perte de l’usage de ses jambes. 
Flora a toujours su qui elle était. Dès l’âge de 5 ans, elle se reconnaissait comme une fille, même si son corps ne reflétait pas cette réalité. Ce n’est qu’à l’âge de 60 ans qu’elle a fait le choix affirmé de vivre pleinement en tant que femme. Avant sa transition, elle s’appelait Jean-Robert Claudepierre. Elle a alors entamé un parcours médical important, incluant plusieurs interventions comme une chirurgie mammaire et une modification des cordes vocales.

Ce chemin de vie, parfois difficile, Flora l’a raconté dans son livre "Moi, Flora, née pour devenir la femme que j’ai toujours été". Elle y partage avec sincérité les étapes marquantes de sa transition : le coming-out auprès de ses proches, les séjours à l’hôpital, les opérations, et surtout ses émotions tout au long de cette transformation. Son objectif : se faire entendre, briser les tabous et soutenir celles et ceux qui traversent des expériences similaires.

` },
            { type: 'image', value: "../EXPOSITION/Mme_Claudepierre/Mme_Claudepierre.png" },
            { type: 'image', value: "../EXPOSITION/Mme_Claudepierre/Mme_Claudepierre_Objet.jpg" }
        ],
        [
            { type: 'text',  value: `Liliane est une femme de 93 ans, pleine d’énergie et de caractère. Elle a traversé de nombreuses époques marquantes, notamment la libération de Paris, où elle vivait à l’époque avec son mari et sa mère, gravement malade d’un cancer.

Après plusieurs années passées dans la capitale, elle quitte Paris avec son mari pour acheter une maison. Malheureusement, ce bonheur est de courte durée, car il décède peu de temps après. Liliane vend alors la maison et s’installe dans un petit appartement à Amiens, où elle vit désormais seule.

Même si la solitude est présente, elle garde un cercle fidèle d’amies qui viennent la voir dès qu’elles le peuvent. Autrefois, Liliane aimait sortir, aller au cinéma ou assister à des spectacles à la Maison de la Culture.

Elle garde un souvenir ému de sa participation à une chorale, une activité qui l’a profondément marquée. Aujourd’hui, elle n’en fait plus partie, mais elle continue d’assister aux concerts du groupe avec grand plaisir, admirative de l’énergie qui s’en dégage.

Liliane a connu les difficultés de la guerre : les pénuries de nourriture, les restrictions, le manque d’argent. Elle se souvient que les tickets de rationnement n’étaient pas suffisants pour nourrir toute sa famille, et que seuls les plus gros travailleurs pouvaient en obtenir davantage. "C’était la guerre, ce n’était pas facile", dit-elle simplement.

Elle a également passé vingt années aux côtés de son mari, très malade, qu’elle a soigné et accompagné jusqu’à la fin. Une épreuve qu’elle a affrontée avec courage et dévouement, à l’image de sa vie entière.

Liliane est une femme indépendante, qui a toujours su se débrouiller seule. Encore aujourd’hui, elle lit, écoute de la musique, entretient son appartement et n’hésite pas à bricoler lorsque c’est nécessaire. Elle aime aussi cuisiner de bons petits plats pour ses amies lors de leurs visites, qui lui apportent chaleur et réconfort.

Lucide, volontaire et généreuse, Liliane continue de savourer chaque instant de vie avec force et dignité.


`},
            { type: 'image', value: "../EXPOSITION/Mme_Coquet/Mme_Coquet.png"}
        ],
        [
            { type: 'text',  value: `Parine a grandi à Madagascar, où elle a vécu une enfance ponctuée de petits bonheurs et de grandes émotions. Elle se souvient encore de son tout premier jour de ramadan : une journée marquante, au bout de laquelle sa mère lui offrit un simple collier en toc. Ce n'était pas de l'or, mais pour la petite fille qu'elle était, c'était un trésor inestimable.

Parmi ses souvenirs d'enfance, un moment lui revient toujours en mémoire. Son frère avait décidé de se séparer de leur chien, Whisky. Bouleversée, elle pleura pendant plusieurs jours, inconsolable. Puis, un matin, à l'aube, elle sortit dans la cour… Et là, contre toute attente, Whisky était revenu. Il lui sauta dessus avec l'enthousiasme des retrouvailles, et elle, submergée de joie, le serra fort contre elle. Ce fut l'un des plus beaux instants de son enfance.

En 1980, Parine arriva en France dans le cadre d'un rapatriement. Elle débuta un stage à l'AFPA et trouva rapidement un emploi pour subvenir à ses besoins. Mais dans son cœur, un rêve persistait : devenir infirmière. Elle aurait voulu étudier, mais le coût des formations et du logement rendait ce projet inaccessible.

Chaque été, elle se rendait dans le Sud, au bord de la mer, à Le Trayas, pour travailler avec une amie dans un hôtel en pension complète, installé dans un ancien bâtiment de l’armée (IGESA). Elle passait aussi du temps à Aime-La-Plagne, dans les Alpes. De 2006 à 2012, elle y est retournée de nombreuses années de suite. Ces lieux lui ont laissé de merveilleux souvenirs, entre paysages marins et panoramas alpins à couper le souffle.

Les années passèrent et, malgré sa détermination, les opportunités lui échappèrent. Lorsqu'elle voulut entreprendre une formation, son employeur refusa de la soutenir. Puis, faute de travail, il finit par la licencier. Pour s'en sortir, elle fit du ménage, affrontant chaque difficulté avec courage.

Ainsi, la vie suit son cours, parsemée d'épreuves, mais aussi de ces souvenirs qui lui rappellent d'où elle vient et tout ce qu'elle a traversé.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Habibo/Mme_Habibo.jpg"},
            { type: 'image', value: "../EXPOSITION/Mme_Habibo/Mme_Habibo_Objet.png"}
        ],
        [
            { type: 'text',  value: `Josiane, 90 ans, a toujours vécu à Amiens. Elle a grandi dans une famille nombreuse avec cinq frères et sœurs. Son père, marin, est décédé en mission, ce qui fait d’elle une pupille de la Nation. Aujourd’hui, elle vit seule ; son mari est hospitalisé à la clinique Saint-Victor, atteint de la maladie d’Alzheimer.

Très proche de sa fille et de sa petite-fille, elle reçoit leur visite chaque semaine. Pour Noël, sa petite-fille lui a fait confectionner un grand plaid qu’elle garde toujours à portée de main, posé sur son fauteuil, comme un lien affectif permanent avec elles.
Josiane a une routine bien installée. Chaque matin, sa voisine de 80 ans vient lui rendre visite, une présence qui lui apporte un peu de réconfort. Ensuite, elle allume la radio et s’adonne à sa passion : le tricot. Elle tricote du matin au soir avec une énergie inépuisable.

Autrefois, Josiane adorait sortir. Elle se déplaçait d’abord à vélo, parcourant jusqu’à 36 kilomètres par jour entre son travail et l’école de son fils. Puis elle a eu une mobylette, et enfin une voiture, qui lui a offert encore plus de liberté. Elle en profitait pleinement.
Avec son mari, elle entretenait un jardin aux hortillonnages d’Amiens, où ils passaient leurs week-ends pendant plus de vingt ans. Aujourd’hui, elle regrette de ne plus pouvoir sortir à cause de douleurs dans le dos et les jambes, mais elle garde en mémoire ces moments simples et heureux.

Elle nous parle souvent de ses enfants, qu’elle aime profondément. Elle a malheureusement perdu une petite fille de 18 mois et un fils à l’âge de 40 ans, des épreuves douloureuses qu’elle évoque avec pudeur. Elle se souvient aussi de "La Cheminote", une piscine de quartier pleine de souvenirs, aujourd’hui en ruine, mais qui renaît en partie sous une nouvelle forme.

Josiane est une femme forte et généreuse, qui, malgré les pertes et les années, continue de transmettre sa tendresse, sa mémoire et son amour des choses simples à ceux qui l’entourent.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Jacque/Mme_Jacque.png"},
            { type: 'image', value: "../EXPOSITION/Mme_Jacque/Mme_Jacque_Objet.png"}
        ],
        [
            { type: 'text',  value: `Catherine est une femme de 65 ans, au parcours riche et rempli de douceur. Aujourd'hui installée à Amiens, elle partage avec nous les grandes étapes de sa vie, ses souvenirs et ce qui la rend heureuse au quotidien.

Dès sa jeunesse, Catherine s’oriente vers le domaine administratif. Elle suit d’abord une formation de CAP Secrétariat et effectue son stage dans les bureaux du lycée Saint-Rémi à Amiens. Passionnée et motivée, elle poursuit avec un BEP Employé de bureau dans le même établissement. Par la suite, grâce à l’accompagnement de Pôle emploi, elle intègre un contrat en alternance : une semaine à l’hôpital Nord d’Amiens, une semaine en cours. Ce rythme lui permet d’allier théorie et pratique, et de prendre ses marques dans le monde professionnel.

Mais sa vie prend un tournant lorsqu’elle choisit de mettre sa carrière entre parenthèses pour se consacrer pleinement à l’éducation de ses trois enfants : Émilie, Romain et Virginie. Un choix du cœur qu’elle ne regrettera jamais.
Quelques années plus tard, portée par son amour des enfants et son intérêt pour la couture et les activités manuelles, Catherine se lance dans une nouvelle aventure : elle suit une formation d’assistante maternelle. En septembre 2013, elle débute officiellement dans ce nouveau métier qui lui correspond si bien.

En décembre 2024, une amie de l’hôpital lui parle du dispositif Solidarité Seniors, qu’elle rejoint avec plaisir. Ce programme lui offre un nouveau souffle et lui permet de rester active socialement. Elle aime les visites et les moments d’échange. Originaire d’Ailly-sur-Somme, Catherine a toujours été entourée d’une famille investie. Son père était gardien à l’hôpital d’Amiens et sa mère s’occupait du foyer avant de travailler en cuisine, également à l’hôpital. Son frère est devenu facteur, tandis que sa sœur, une fois ses enfants devenus grands, a embrassé le métier d’assistante de vie.

Le parcours de Catherine illustre avec tendresse et détermination une vie faite de choix sincères, d’engagement familial et d’une volonté constante de rester tournée vers les autres.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Letoile/Mme_Letoile.png"},
            { type: 'image', value: "../EXPOSITION/Mme_Letoile/Mme_Letoile_Objet.png"}
        ],
        [
            { type: 'text',  value: `Véronique a 65 ans. Elle a longtemps travaillé dans le prêt-à-porter à Paris, un univers qui lui a permis de cultiver son goût pour la mode et l’esthétique. Maman de deux enfants, Hugo, 27 ans, qui vit à Paris, et Sophia, 22 ans, installée en Irlande, elle est aussi très proche de sa sœur Sandrine.

Passionnée par les animaux et attentive à son bien-être, Véronique aime tout ce qui touche à la beauté, à la relaxation et à la détente. Les balades au soleil, surtout quand le temps est doux, lui procurent un vrai bonheur. Elle aime marcher, respirer l’air frais et profiter du moment présent.
Grande voyageuse, elle a exploré de nombreux pays au fil des années : l’Espagne, l’Italie, l’Angleterre, la Turquie et la Grèce. Ces expériences lui ont permis de s’ouvrir à d’autres cultures et de nourrir sa curiosité.

Végétarienne et passionnée de cuisine, elle prend plaisir à préparer de bons plats. Elle adore aussi sortir, rencontrer du monde et aller voir des expositions de peinture, une autre de ses grandes passions. Très proche de ses amies — Delphine, Sarah, Valérie et Catherine —, elle aime partager avec elles des moments simples, des rires et beaucoup d’affection. Elle envoie souvent des photos d’elle à sa famille et à ses copines, pour garder ce lien vivant et joyeux.

La musique occupe aussi une place importante dans sa vie : elle l’accompagne au quotidien et nourrit son énergie. Depuis cette année, elle participe aux visites de convivialité avec Unis-Cité, une expérience qu’elle adore. Cela lui permet de rencontrer des jeunes, d’échanger, de discuter de sujets variés et de transmettre son vécu avec bienveillance.

Son objet préféré, c’est un petit panda qu’elle garde précieusement. Ce n’est peut-être qu’un simple objet pour les autres, mais pour Véronique, il a une grande valeur sentimentale. Il lui rappelle des souvenirs tendres, des moments heureux, et il symbolise pour elle la douceur, la tendresse.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Loron/Mme_Loron.png"},
            { type: 'image', value: "../EXPOSITION/Mme_Loron/Mme_Loron_Objet.png"}
        ],
        [
            { type: 'text',  value: `Dans un petit appartement d’un immeuble un peu vieilli vit Gilberte. Elle a 86 ans. Son visage raconte une histoire que peu de gens prennent encore le temps d’écouter.

Gilberte n’a jamais su rester en place. Elle était la voisine que tout le monde connaissait, toujours en train de bricoler quelque chose : une étagère à redresser, un mur à repeindre, une plante à rempoter. Son endroit préféré est le jardin collectif de l’immeuble. Elle veille à ce que chaque rosier trouve sa place sans faire le malin. Ce coin de verdure, c’était son petit refuge au cœur du béton.

La maladie est arrivée doucement. La sclérose en plaques a ralenti ses gestes, et son fidèle déambulateur – un peu trop petit pour elle mais toujours utile – l’accompagne désormais dans ses déplacements. Mais Gilberte ne râle pas, elle n’a jamais été du genre à se plaindre. Elle fait avec, comme toujours.

Son fils, qu’elle adorait, est parti trop tôt. Reste son petit-fils, un jeune homme débordé de projets à Paris. Il vient la voir de temps en temps, et même si c’est rare, Gilberte ne lui en veut pas, elle comprend que la vie file pour chacun. 
Les journées sont longues, c’est vrai. Mais il y a encore des petits plaisirs : le passage de son aide ménagère une fois par semaine, un petit peu de compagnie. Elle écoute la radio, suit les infos, laisse ses pensées voyager loin, parfois jusque dans les champs de blé doré de son enfance à la campagne.

Le jardin de l’immeuble, qu’elle soignait avec amour, est à l’abandon maintenant. Les mauvaises herbes ont tout repris. Elle ferme souvent les yeux quand elle passe devant. "Mieux vaut garder le souvenir des tulipes en fleur", se dit-elle. Elle sort rarement. Juste pour les grosses courses et les rendez-vous médicaux. Avant, c’était elle qui montait les sacs pour les voisins ; aujourd’hui, elle aimerait bien qu’on pense à elle de temps en temps.

Parce qu’au fond, même les âmes les plus indépendantes ont besoin d’un peu de chaleur humaine pour continuer à avancer.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Menssion/Mme_Menssion.jpg"},
            { type: 'image', value: "../EXPOSITION/Mme_Menssion/Mme_Menssion_Objet.jpg"}
        ],
        [
            { type: 'text',  value: `Née en 1958 dans la Creuse, Maryse s’est installée à Amiens, où elle a vécu toute sa vie. Son parcours a été marqué par de nombreuses épreuves : une famille qui ne la comprenait pas, un premier mari peu bienveillant, une santé fragile. Mais malgré cela, elle est restée debout, portée par l’amour qu’elle porte à ses enfants et à son mari actuel, Hubert.

Maryse est mère de deux enfants : Pierre, qui travaille comme second dans une chaîne de magasins, et Anaïs, avec qui elle n’a malheureusement plus de contact. Pierre, bien que très occupé, prend régulièrement de ses nouvelles.
Maryse et Hubert se sont mariés et vivent depuis une belle histoire d’amour, malgré les difficultés. Hubert ne peut plus parler, mais leur amour n’a jamais faibli. Chaque jour, il lui montre son affection par des gestes simples : il fait la vaisselle, prépare parfois les repas. Leur complicité est émouvante, preuve que l’amour véritable peut durer au-delà des épreuves.

Ensemble, ils ont travaillé comme boulangers pour subvenir aux besoins de leur famille. Maryse a toujours veillé à offrir le meilleur à ses enfants, les entourant de soins et d’amour. C’est une femme dévouée, passionnée et pleine de ressources.
Ses passions sont nombreuses : la lecture, la musique, le Scrabble. Elle possède une impressionnante collection de livres : polars, ouvrages scientifiques, livres de cuisine… Elle est aussi fan du chanteur italien Franco Battiato, et affectionne particulièrement la chanson “E ti vengo a cercare”.

Atteinte de sclérose en plaques (SEP) et souffrant d’autres problèmes de santé, Maryse se déplace peu et reçoit peu de visites. C’est dans ce contexte qu’elle a fait appel aux visites de convivialité d’Unis-Cité, où j’ai eu la chance de la rencontrer. Rapidement, un lien fort s’est créé entre nous. Maryse me rappelle ma grand-mère : son hospitalité me fait me sentir chez moi. C’est une femme douce, agréable, au grand cœur, toujours prête à partager ses expériences de vie.

Ce que je retiens de Maryse, c’est sa force, sa générosité et sa capacité à continuer à sourire malgré les difficultés. Sa vie mérite d’être lue et entendue. Comme tant d’autres aînés, elle nous rappelle que l’amour, l’entraide et la bienveillance sont les clés pour surmonter les épreuves et vivre avec sérénité.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Rossard/Mme_Rossard.jpg"},
            { type: 'image', value: "../EXPOSITION/Mme_Rossard/Mme_Rossard_Objet.jpg"}
        ],
        [
            { type: 'text',  value: `Fernande, à 78 ans, a grandi dans le Pas-de-Calais, dans une famille où l’amour et la tendresse étaient absents. Dès son plus jeune âge, elle a dû travailler à l’usine en tant que bobineuse. Dans sa famille, il n’y avait ni jeux, ni Noël, ni moments de repos. Chaque jour, elle partait tôt pour l’usine et, en rentrant, son sac l’attendait déjà devant la porte pour aller faire des courses. Très jeune, elle a rencontré Marcel, son premier amour.
Par un hasard du destin : en se rendant au cimetière, en se recueillant tous les deux sur la tombe de leur proche. Ils se connaissaient déjà et, de fil en aiguille, un amour est né. Mais sa mère ne l’accepta pas. Le jour où Fernande lui a annoncé leur relation, elle a reçu une gifle. Lorsqu’elle a présenté Marcel à sa famille, sa mère s’est immédiatement opposée : "Ici, c’est moi le chef, tu ne l’auras pas", avait-elle dit. Marcel, déterminé, lui a tenu tête : "Je l’aurai quand même." Malgré les obstacles, Fernande et Marcel se sont mariés, mais leur union fut difficile. Les tensions avec sa mère n’ont fait qu’empirer. Quand Fernande a divorcé de Marcel, sa mère lui a posé un ultimatum : elle ne pourrait revenir à la maison qu’à condition de rester auprès d’elle à vie. Sa mère avait toujours voulu qu’elle devienne “bonne sœur”, influencée par sa propre foi, bien que Fernande ne soit pas croyante.
Puis Fernande a rencontré Claude qui allait devenir son second mari. C’est à ce moment-là que les véritables conflits ont éclaté. Dès qu’elle a commencé à parler à Claude, sa mère a changé de comportement, devenant plus dure et hostile envers elle. En 1994, sa mère l’a mise à la porte. Pire encore, elle a jeté toutes ses affaires par la fenêtre du square. Heureusement, Claude est venu tout récupérer. Ne sachant où aller, Fernande a trouvé refuge chez une amie à Vion, qui refusait de la laisser vivre dehors. Le jour de son expulsion, elle a dû appeler son travail pour expliquer qu’elle ne pouvait plus venir. Elle a été licenciée. Son frère, qui ne l’avait jamais aimé par jalousie depuis sa naissance, a pourtant joué un rôle clé à ce moment-là. Alors que Fernande remontait les escaliers pour récupérer ses affaires, sa mère, dans une ultime explosion de violence, l’a suivie un couteau à la main. Son frère a vu la scène juste à temps et, d’un geste rapide, il a repoussé Fernande sur le lit. Le couteau s’est planté dans le battant de la porte, évitant le drame de justesse.
Plus tard, son frère l'aide à déménager dans sa première maison. À la mort de leur mère, il lui a même donné des biens, contrairement à sa belle-sœur qui lui a affirmé avec mépris : "Si ça ne tenait qu’à moi, tu n’aurais rien eu." Après la perte de Claude, Fernande se sentait seule, mais grâce à nos visites régulières et à celles de sa voisine, elle a commencé à retrouver un peu de joie. Petit à petit, elle s’est ouverte à de nouvelles amitiés et a redécouvert des activités qu’elle avait mises de côté, comme la couture et le jardinage. Ensemble, ses proches l’ont aidée à reconstruire sa vie. Aujourd'hui, elle peut dire avec sérénité : "Ma vie a été difficile, mais aujourd’hui, elle est belle."
`},
            { type: 'image', value: "../EXPOSITION/Mme_Sanson/Mme_Sanson.jpg"}
        ],
        [
            { type: 'text',  value: `Jeanne a 92 ans, et quand on pousse la porte de chez elle, c’est un peu comme si on entrait dans un cocon. Le jeudi après-midi, c’est un rendez-vous qu’elle ne raterait pour rien au monde : Chamou et Chloé, deux volontaires d’Unis-Cité, viennent lui tenir compagnie. Entre une partie de jeu de société et des discussions qui vont de souvenirs de jeunesse à l’actualité, Jeanne s’illumine. Et si vous avez de la chance, elle vous fera goûter ses fameuses roses des sables, croustillantes et sucrées comme son cœur.

L’histoire de Jeanne commence bien avant sa naissance, lorsque ses parents fuient la Pologne occupée pendant la Première Guerre mondiale pour chercher refuge en France. Son père devient cordonnier, sa mère travaille dans une ferme. Peu après sa naissance, Jeanne est confiée à une nourrice, Rosalie, une femme simple, illettrée mais aimante, chez qui elle restera pendant huit ans.

Chaque soir, sa mère venait après 22 heures, mais Jeanne, déjà endormie, ne la voyait jamais. Le jour où sa mère décide de la reprendre, Jeanne tombe dans l’anorexie : elle ne reconnaît pas cette femme qu’on lui présente comme sa maman. Alors, elle retourne chez Rosalie, son seul repère. En 1940, les bombardements frappent Amiens. Jeanne, encore jeune, est évacuée. Elle traverse la France à pied, direction la Bretagne. Elle dort dans les champs près de Quimper, le ciel comme couverture, la peur en fond sonore.

Ses parents, pourtant mariés, vivent dans la douleur. Son père ne l’a jamais reconnue légalement. Tombé dans l’alcool, il s’absente souvent pour aller boire, jusqu’au jour où il ne revient pas. Jeanne, bouleversée, le cherche pendant plus de six semaines. En 1954, elle le retrouve sans vie, noyé dans une écluse. Il s’était suicidé. Quelques années plus tard, en 1960, c’est sa mère qui s’éteint, emportée par un cancer.
Malgré tout cela, Jeanne a choisi la force. Avec son mari, elle organise pendant plus de dix ans une collecte humanitaire pour la Pologne, comme pour boucler un cercle, tendre la main vers ses racines.

Aujourd’hui, quand elle raconte son histoire, l’émotion est là, les larmes parfois aussi. Mais il y a surtout cette force tranquille dans sa voix. Jeanne a traversé les douleurs du siècle, mais elle continue de rire, de cuisiner, de jouer et de partager. Parce que pour elle, la vie mérite d’être vécue et racontée.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Taragon/Mme_Taragon.png"},
            { type: 'image', value: "../EXPOSITION/Mme_Taragon/Mme_Taragon_Objet.png"}
        ],
        [
            { type: 'text',  value: `Marie-Edith est née le 19 octobre 1944 et a passé ses premières années dans une petite maison d'accueil après avoir été abandonnée. Après avoir obtenu son certificat d'études à 14 ans, elle a brièvement travaillé en usine avant de se rendre dans un camp de jeunes filles à Ault, où elle s'occupait d'enfants pendant les vacances.

À 18 ans, après une remise à niveau et un concours, elle a décidé de devenir aide-soignante, un métier qu'elle a exercé jusqu'à ses 22 ans. Elle s'est ensuite mariée et a dû jongler entre son travail de nuit et les week-ends. Elle a finalement quitté ce poste pour retourner à l'usine, où elle est tombée enceinte. Élever son enfant s'est avéré très difficile, elle n’entretient plus aucune relation avec ce dernier aujourd’hui.

Après 30 ans de mariage, Marie-Edith a divorcé et a vendu sa maison. Depuis 1997, elle vit seule dans un appartement à Amiens. Là, elle a noué des liens forts avec ses voisins avec qui elle entretient une relation très familiale, et pour qui elle gardait les enfants. Ces derniers ont déménagé, ce qui l’a rendue très triste, mais elle garde une très bonne relation avec eux, les enfants viennent la voir de temps en temps.

Malgré les épreuves, Marie-Edith a su trouver des moments de bonheur entourée de ses voisins. C’est pourquoi elle a choisi les dessins des enfants comme objet lui tenant à cœur. C’est une personne très souriante, qui aime partager des moments avec nous, les volontaires, elle aime jouer au scrabble en buvant le café et nous raccompagne toujours à la porte de l’immeuble pour nous dire au revoir.
`},
            { type: 'image', value: "../EXPOSITION/Mme_Viez/Mme_Viez.png"},
            { type: 'image', value: "../EXPOSITION/Mme_Viez/Mme_Viez_Objet.png"}
        ],
        [
            { type: 'text',  value: `Christian, 85 ans, est un ancien militaire au parcours aussi riche qu'intense. Né le 4 avril 1940, il a consacré une partie de sa vie à l'armée, une expérience qui l'a profondément marquée. Passionné de tarot, il joue depuis des décennies, développant un talent impressionnant – qu'il est presque imbattable !
Christian est aussi un grand amateur de pipes et de cigares, à tel point que son appartement a une odeur particulière qui prend au nez. Il est aussi fan de films d’action (western, documentaire historique et film de guerre).

Engagé dans l'armée, il a été envoyé en Algérie pour ce qui devait être une mission de six mois. Il y restera finalement plus de trois ans. Là-bas, il a vécu des moments décisifs, notamment grâce à son camarade Osnie, qui lui sauva la vie à deux reprises : une première fois en neutralisant un ennemi prêt à l'attaquer par-derrière, puis une seconde fois en neutralisant un sniper qu'il n'avait pas repéré. Après 36 mois sur le terrain, il est finalement rapatrié, mais cette mission restera gravée en lui à jamais. Après l’armée, il fut peintre pour une entreprise, puis il partit à la retraite.

Aujourd'hui, Christian vit à Amiens, est casanier. Il avait trois perruches, mais malheureusement il n’en reste plus qu’une qui aime bien s’incruster dans nos discussions lors de nos parties de tarot. Elle n’a pas de prénom, mais il l’aime bien. Chaque visite commence par une pâtisserie, c’est un rituel qu’il a instauré depuis le début de l’année, avant de s'installer autour de la table de 14 h à 16 h 45 pour jouer. Auparavant, Claude, son voisin et ami, faisait partie de ces moments, mais des problèmes de santé l'empêchaient désormais de participer. Fidèle en amitié, Christian lui rend régulièrement visite, que ce soit à l'hôpital ou chez lui, pour lui tenir compagnie et prendre de ses nouvelles.

Christian est un homme attachant, marqué par une vie bien remplie, qui continue de profiter des petits plaisirs du quotidien entouré de ses souvenirs et de ses amis.`},
            { type: 'image', value: "../EXPOSITION/Mr_Brunel/Mr_Brunel.jpg"},
            { type: 'image', value: "../EXPOSITION/Mr_Brunel/Mr_Brunel_Objet.jpg"}
        ],
        [
            { type: 'text',  value: `Jean-Pierre, âgé de 77 ans, a grandi à Amiens, ville où il a passé toute sa vie. Très tôt, il commence l’école militaire, où il y reste 4 ans, forgeant ainsi sa rigueur et son sens du devoir. Il réalise ensuite son service militaire pendant 18 mois.

Suite à cette expérience marquante, il choisit de poursuivre ses études avec détermination, obtenant un diplôme de niveau bac+10 en comptabilité. Fort de ce parcours académique impressionnant, il embrasse une carrière d’expert-comptable, métier qu’il exercera avec passion et expertise durant 35 ans. Son parcours illustre une vie guidée par la discipline, le travail et l’ambition.

Il bénéficie des visites de convivialité par les volontaires d’Unis Cité depuis 8 ans.
Il a connu Unis Cité grâce à son fils (volontaire à ce moment-là en Solidarité Seniors) qui voyait Jeanne (une autre personne âgée) bénéficiant toujours des visites de convivialité.

Jean-Pierre, animé d’une passion débordante pour l’histoire, ne manque jamais une occasion d’évoquer avec enthousiasme les grandes figures du passé, les événements marquants et les récits oubliés, captivant souvent son entourage par la richesse de ses connaissances et la vivacité avec laquelle il partage ses découvertes historiques.

Jean-Pierre, véritable passionné de l’univers LEGO, consacre des heures entières à assembler avec patience et créativité des constructions toujours plus impressionnantes, trouvant dans chaque petite brique un moyen d’exprimer son imagination débordante et un plaisir infini à redonner vie à des mondes miniatures où chaque détail compte. C’est également une manière pour lui d’entretenir sa vivacité d’esprit.

À travers ce double amour pour l’histoire et les LEGO, Jean-Pierre nous montre que la curiosité n’a pas d’âge et que la créativité peut s’exprimer à tout moment de la vie. Il incarne à merveille cette génération de seniors actifs, cultivés, engagés, qui ne cessent jamais d’apprendre, de créer et de transmettre.

`},
            { type: 'image', value: "../EXPOSITION/Mr_Leban/Mr_Leban.jpg"},
            { type: 'image', value: "../EXPOSITION/Mr_Leban/Mr_Leban_Objet.jpg"}
        ],
        [
            { type: 'text',  value: `André est né au début de la guerre civile espagnole, en 1936. D’après ses souvenirs, L’Espagne a été dévastée, le régime en place a détruit la culture, démoli les bâtiments et délogé de nombreuses familles. La situation variait d’une région à l’autre, mais à Madrid, la destruction fut totale, et l’Espagne se retrouva isolée de l’Europe.

Durant cette période, André n'avait rien à manger. Ils étaient à cinq dans une petite maison. Ils ont décidé de partir, car il y avait un régime de dictature proche d’Hitler : « Il y’avait toujours des gardes dans les rues, on ne pouvait même pas s’exprimer. » Un jour, au bar, la police arriva. Cette fois, André n’avait pas ses papiers, il a donc été emmené au poste où il est resté 48 heures. Son père lui avait toujours dit : « Ne discute de rien avec la police, si tu es en tort, tu te rends » sous risque d’être emmené au front en Allemagne.

À 20 ans, il a rencontré Jeanne, sa femme, dans un marché en Espagne : « Je la vois encore, avec nos petits clins d’œil par-ci par-là. » Puis elle est repartie en France. Quelque temps plus tard, André a pris le train de Paris pour aller la voir. En revenant au pays, André a voulu le quitter, donc il l'a fait. Il est parti à 21 ans à bord de sa voiture, accompagné de sa femme. En arrivant, ils ont eu un grave accident de voiture. Clavicule et mâchoire déplacées, ils sont tous les deux restés une quinzaine de jours à l'hôpital.

À l’ouverture de Dunlop, usine de pneumatiques à Amiens, André a été embauché pour la confection de pneus pendant une quinzaine d’années, accompagné de Liberto, un collègue, avec qui il est resté jusqu’à la fermeture de l’usine. Suite à cette fermeture, c’est vers la confection de joints d’aviation qu’il s’est tourné.

Avec sa femme ils ont visité toute la côte espagnole, l’Amérique, l'Italie, le Nord de la France, notamment à Berck où ils avaient un appartement. Sa famille est très importante pour lui, il aurait aimé avoir plusieurs enfants mais ils n’ont eu qu’un fils, qui a fait d’eux les grands-parents d’une fille et d’un garçon.

André est quelqu’un qui aime beaucoup jouer au Rami, aux Dominos et à beaucoup de jeux en général, c’est quelqu’un d’agréable qui aime dessiner et faire des sculptures. Il aime nous apprendre à jouer correctement et apprécie les personnes qui savent jouer à plusieurs jeux différents. Toutes les semaines nous avons le droit à quelques anecdotes sur son passé auxquelles on rigole beaucoup.

Il n’a pas souhaité choisir d’objet le représentant car tout ce qui le représente, ce sont les photos de sa famille, qu’il ne veut pas partager.
`},
            { type: 'image', value: "../EXPOSITION/Mr_Molina/Mr_Molina.png"}
        ],
        [
            { type: 'text' , value: `Paul est né en 1949 à Casablanca, au Maroc, où il a vécu jusqu’à l’âge de 14 ans. Aujourd’hui, il a 75 ans.

À cette époque, le Maroc était sous protectorat français depuis 1912.
Le 14 janvier 1963, il quitte sa ville natale, un départ qui restera gravé dans sa mémoire. Il se rappelle encore de la couleur bleu ciel de l’océan dans lequel il avait appris à nager, juste avant d’embarquer sur le bateau. Alors qu’il s’apprêtait à partir, il garde en souvenir l’image des habitants disant au revoir à leurs proches.
Sa destination : Amiens.
Quitter son pays n’a pas été facile. Il a perdu le contact avec ses amis d’enfance et a eu du mal à rattraper son retard scolaire, ce qui l’a empêché d’obtenir son CEP, l’équivalent du brevet aujourd’hui.

Paul a exercé plusieurs métiers au cours de sa vie, mais il a principalement travaillé comme agent d’entretien à l’usine Verto, située dans la zone industrielle Nord, où il est resté pendant neuf ans.
À 41 ans, il quitte Amiens pour Avignon, suite au décès de son père. Initialement, il ne devait y rester que quelques mois, mais il y a finalement passé 25 ans, jusqu’en 2015.
C’est à Avignon qu’il s’est construit un cercle social, notamment grâce à son travail au sein du CCAS, où il occupait toujours un poste d’agent d’entretien.
En 2015, après le décès de sa mère, il décide de revenir à Amiens pour se rapprocher de son frère et de sa nièce. 

Cependant, il trouve que le Nord est bien moins chaleureux que le Sud. En dehors de ses proches, il ne fréquente presque personne. Pour maintenir un minimum de lien social et rompre la monotonie, il participe aux événements organisés par le CCAS d’Amiens et aime se promener régulièrement.

Malgré cela, l’ennui et l’isolement persistent. Il décide alors de contacter Unis Cité, une initiative qui lui apporte du réconfort. Depuis maintenant neuf ans, des volontaires lui rendent visite régulièrement.`},
            { type: 'image', value: "../EXPOSITION/Mr_Ramon/Mr_Ramon.jpg" }
        ],
        [
            { type: 'text' , value: `Hugues est né à Lille, où il a grandi entouré de ses sept frères et sœurs. Très jeune, il développe une passion pour la moto, influencé par son cousin. À 16 ans, il demande un scooter à sa mère, mais reçoit une bicyclette pour se rendre au lycée. Il attendra ses 18 ans pour enfin acquérir son premier deux-roues motorisé.

Un déménagement à Amiens bouleverse sa jeunesse : son père trouve un emploi dans l’industrie de velours Cosserat, et toute la famille suit. Hugues quitte ses amis d’enfance à contrecœur, mais finit par s’adapter à sa nouvelle vie.

Soudeur de métier, il imagine et conçoit notamment une barrière amovible pour prévenir les chutes. Il effectue chaque semaine des allers-retours entre son travail à Amiens et sa famille à Lille, souvent à scooter, par tous les temps. Père de deux filles, aujourd’hui divorcé, Hugues reste profondément attaché à ses proches.

Malgré la perte progressive de la vue, il continue de voyager : Italie, Belgique, Angleterre, et même la Corée du Sud pour rendre visite à sa fille. Il aime découvrir d’autres cultures, que ce soit à moto, en bateau ou en avion.

Sa passion pour la moto a laissé des traces. Il a connu plusieurs accidents, dont un en Italie qui lui a valu une épaule démise et des côtes cassées. Plus tard, un autre accident plus grave lui a causé une fracture du fémur. Il garde de cette épreuve une broche qu’il considère aujourd’hui comme une relique.

Hugues fréquente aujourd’hui l’Association Valentin Haüy à Saint-Victor, où il a trouvé une véritable communauté. Il y découvre des histoires de vie différentes, et comprend qu’il n’est pas seul. Depuis plus de cinq ans, il bénéficie aussi des visites de convivialité d’Unis Cité, qui rythment son quotidien.

Le parcours de Hugues témoigne d’une vie marquée par la passion, la résilience et l’envie constante d’aller de l’avant, malgré les épreuves.`},
            { type: 'image', value: "../EXPOSITION/Mr_Spriet/Mr_Spriet.jpg" },
            { type: 'image', value: "../EXPOSITION/Mr_Spriet/Mr_Spriet_Objet.png" }
        ]
    ];

    const afficherContenuPopup = (contenu) => {
        popupContent.innerHTML = '';
    
        const closeButton = document.createElement('span');
        closeButton.id = 'closePopup';
        closeButton.className = 'close-button';
        closeButton.innerHTML = '<strong>&times;</strong>';
        popupContent.appendChild(closeButton);
    
        const textSection = document.createElement('div');
        textSection.className = 'popup-text-section';
    
        const mediaSection = document.createElement('div');
        mediaSection.className = 'popup-media-section';
    
        contenu.forEach(item => {
            if (item.type === 'text') {
                const p = document.createElement('p');
                // Garde les retours à la ligne en les transformant en <br>
                p.innerHTML = item.value.replace(/\n/g, '<br>');
                textSection.appendChild(p);
            } else if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.value;
                mediaSection.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.value;
                video.controls = true;
                mediaSection.appendChild(video);
            }
        });
    
        popupContent.appendChild(textSection);
        popupContent.appendChild(mediaSection);
    
        closeButton.addEventListener('click', fermerPopup);
    };

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            afficherContenuPopup(contenuPopups[index]);
            popUp.classList.remove('hidden');
        });
    });

    const fermerPopup = () => {
        popUp.style.opacity = '0';
        setTimeout(() => {
            popUp.classList.add('hidden');
            popUp.style.opacity = '';
        }, 300);
    };

    popUp.addEventListener('click', (event) => {
        if (event.target === popUp) fermerPopup();
    });
});
