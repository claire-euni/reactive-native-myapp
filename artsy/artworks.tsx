const data = [
  {
    id: 1,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/AS-xGWtzlftX04i-WGRJZw/medium.jpg',
    artist: 'Andy Warhol',
    title: 'Ladies and Gentlemen (Feldman & Schellmann 130),1975',
    price: '£6,000',
  },

  {
    id: 2,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/P5Vlhl9ucHPzk3sKHplcZg/medium.jpg',
    artist: 'Robert Longo',
    title: 'Black Flag,1999',
    price: '£6,500',
  },
  {
    id: 3,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/YvSlsAyUHM74EWWvDX-YYg/medium.jpg',
    artist: 'Keith Haring',
    title: 'Apocalypse (Littmann p.102),1988',
    price: '£6,500',
  },
  {
    id: 4,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/gy_MzBk4V9SYQRF5XVGIdw/medium.jpg',
    artist: 'Keith Haring',
    title: 'Apocalypse (Littmann p.102),1988',
    price: '£6,500',
  },
  {
    id: 5,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/6SkDkk_fDM_BHH7byVZf-Q/medium.jpg',
    artist: 'Christo and Jeanne-Claude',
    title:
      'Wrapped Telephone, Project for L.M. Ericsson Model (Schellmann 119),1985',
    price: '£3,800',
  },
  {
    id: 6,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/MzlxxLBAPN79KL6ODyZ8qg/medium.jpg',
    artist: 'Alexander Calder',
    title: 'Flying Colours, 3 works,1974',
    price: '£650',
  },
  {
    id: 7,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/0hojWBkBxxWbbxTqbxl2Tw/medium.jpg',
    artist: 'Julian Opie',
    title: 'Statuettes,2018',
    price: '£850',
  },
  {
    id: 8,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/FkI4poa5vdJfoRST_hEzPA/medium.jpg',
    artist: 'Julian Opie',
    title: "Woman taking off man's shirt (Cristea p.244),2013",
    price: '£420',
  },
  {
    id: 9,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/cAl7ClaU8kvrn4jcEiCmCw/medium.jpg',
    artist: 'Julian Opie',
    title: 'New York Couple 2,2019',
    price: '£5,500',
  },
  {
    id: 10,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/Q6Dig_bFzN0DWV6tPQLAWw/medium.jpg',
    artist: 'Julian Opie',
    title: 'New York Couple 6,2019',
    price: '£5,500',
  },
  {
    id: 11,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/3vPpyuQNrIyJui9e7RYr3g/medium.jpg',
    artist: 'George Condo',
    title: 'Droopy Dog Abstraction,2017',
    price: '£15,000',
  },
  {
    id: 12,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/luTJpfxBgjJ-_zvydSZGtg/medium.jpg',
    artist: 'Damien Hirst',
    title:
      'Like a Snowball Down a Mountain (from In a Spin, The Action of the World on Things I),2002',
    price: '£1,100',
  },
  {
    id: 13,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/zP7bzs6EAJiwcd5iPci4lg/medium.jpg',
    artist: 'Louise Bourgeois',
    title: 'Be Calm,2005',
    price: '£1,800',
  },
  {
    id: 14,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/hV4fcIEV-LjpNoAtBOyCQw/medium.jpg',
    artist: 'Andy Warhol',
    title: 'Mao (Feldman and Schellmann II.125A)',
    price: '£1,800',
  },
  {
    id: 15,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/8prrcELyWpfueawgipXLTg/medium.jpg',
    artist: 'Robert Indiana',
    title: 'Numbers. 8 (Sheehan 53),1968',
    price: '£1,900',
  },
  {
    id: 16,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/wKVle0V18fh_9_41iYSZkw/medium.jpg',
    artist: 'Robert Indiana',
    title: 'Numbers. 9 (Sheehan 54),1968',
    price: '£1,900',
  },
  {
    id: 17,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/kGMYGtRN-P0kmSL1OZkuzQ/medium.jpg',
    artist: 'Robert Indiana',
    title: 'The American Dream 2 (Sheehan 125),1982',
    price: '£2,800',
  },
  {
    id: 18,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/6ddWeGi9bL44nIQnsC-_oQ/medium.jpg',
    artist: 'Roy Lichtenstein',
    title: 'Landscape 10 (Corlett 56),1967',
    price: '£4,200',
  },
  {
    id: 19,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/dLVhvcMuIB_IH_sqUldVKQ/medium.jpg',
    artist: 'Agnes Martin',
    title: 'Paintings and Drawings 1974-1990 (suite of 10),1991',
    price: '£2,400',
  },
  {
    id: 20,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/M6Sj9eccqawNYjuCietraw/medium.jpg',
    artist: 'David Hockney',
    title: 'Landscape with a plant (Tokyo 293),1986',
    price: '£6,500',
  },
  {
    id: 21,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/LV4C94rj5wzD-IuK3iXV3A/medium.jpg',
    artist: 'Richard Hamilton',
    title: 'Bathers (b) (Lullin 74),1969',
    price: '£2,800',
  },
  {
    id: 22,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/We5BgerDbxU3Z4NysT0CPw/medium.jpg',
    artist: 'KAWS',
    title: 'Untitled (Blue),2019',
    price: '£1,700',
  },
  {
    id: 23,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/aQVDN5cjctCaFrUWAT67-A/medium.jpg',
    artist: 'The Connor Brothers',
    title:
      'There Are No Extraordinary People Only Ordinary People Who Do Extraordinary Things,2020',
    price: '£900',
  },
  {
    id: 24,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/vzXNCjS6AETALXO9N4v9pA/medium.jpg',
    artist: 'The Connor Brothers',
    title: "I've Had the Sort of Day That Would Make Jesus Kick a Puppy,2018",
    price: '£2,200',
  },
  {
    id: 25,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/bPSvzE5MXmQAvYnOEGwGDA/medium.jpgg',
    artist: 'Marcel Duchamp',
    title: 'The Large Glass and Related Works Volume II,1969',
    price: '£2,800',
  },
  {
    id: 26,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/qvFKgo0RKKFjK30STwYLjw/medium.jpg',
    artist: 'After Pablo Picasso',
    title: 'Femme Faune,1960',
    price: '£1,600',
  },
  {
    id: 27,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/DNyyBRq1xOXvrBDt1RL3hg/medium.jpg',
    artist: 'After Raoul Dufy',
    title: 'Le Casino de la Jetée a Nice,1950',
    price: '£1,400',
  },
  {
    id: 28,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/mXRTSW8OcoEnJADKcn872A/medium.jpg',
    artist: 'Le Corbusier',
    title: 'Femme Unicorn et Taureau Noir (Licorne Ailée),1960',
    price: '£550',
  },
  {
    id: 29,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/vaIi76sfkSK08PCybCWlpQ/medium.jpg',
    artist: 'Le Corbusier',
    title: 'The Open Hand,1963',
    price: '£550',
  },
  {
    id: 30,
    imgUrl:
      'https://d32dm0rphc51dk.cloudfront.net/h-suMNDRJL1WPZVgyrK6hw/medium.jpg',
    artist: 'Le Corbusier',
    title: 'Affiche pour la Tapisseries,1963',
    price: '£280',
  },
];
export default data;
