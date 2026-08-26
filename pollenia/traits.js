const traits = [
  {
    "id": "region",
    "category": "location",
    "title": "Region",
    "weight": 10,
    "link": "",
    "options": []
  },
  {
    "id": "fronshape",
    "category": "head",
    "title": "Frons width (to separate males and females)",
    "weight": 9,
    "link": "https://edankow.github.io/identify/lucilia/lucilia_us_canada.pdf#page=9",
    "options": [
      {
        "label": "very narrow, <10% head width at narrowest point",
        "description": "The frons is very narrow, <10% head width at narrowest point."
      },
      {
        "label": "very wide, >20% head width at narrowest point",
        "description": "The frons is very wide, >20% head width at narrowest point."
      }
    ]
  },
  {
    "id": "facialcarina",
    "category": "head",
    "title": "Facial carina between antennae",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=5",
    "options": [
      {
        "label": "reduced or absent",
        "description": "Facial carina reduced or absent."
      },
      {
        "label": "well-developed",
        "description": "Facial carina well-developed."
      }
    ]
  },
  {
    "id": "palpuscolor",
    "category": "head",
    "title": "Palpus color",
    "weight": 2,
    "link": "",
    "options": [
      {
        "label": "dark brown or black",
        "description": "Palpus dark brown or black."
      },
      {
        "label": "orange, light brown, or medium brown",
        "description": "Palpus orange, light brown, or medium brown"
      }
    ]
  },
  {
    "id": "thoracicStripe",
    "category": "bodycolor",
    "title": "Anterior scutum markings?",
    "weight": 6,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=3",
    "options": [
      {
        "label": "two pale stripes divided by a single wide black median stripe",
        "description": "Anterior scutum with two pale stripes divided by a single wide black median stripe."
      },
      {
        "label": "three pale markings divided by two narrow, off-center black stripes",
        "description": "Anterior scutum with three pale markings divided by two narrow, off-center black stripes."
      }
    ]
  },
  {
    "id": "PostpronotalLobe",
    "category": "upperthorax",
    "title": "Postpronotal lobe with anterior setae?",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=3",
    "options": [
      {
        "label": "with anterior setae",
        "description": "Postpronotal lobe with anterior setae"
      },
      {
        "label": "without anterior setae",
        "description": "Postpronotal lobe without anterior setae"
      }
    ]
  },
  {
    "id": "PresuturalIntraAlar",
    "category": "upperthorax",
    "title": "Presutural intra-alar setae?",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=3",
    "options": [
      {
        "label": "2 pre-sutural intra-alar setae",
        "description": "2 pre-sutural intra-alar setae present."
      },
      {
        "label": "1 pre-sutural intra-alar setae",
        "description": "Only 1 pre-sutural intra-alar setae present."
      }
    ]
  },
  {
    "id": "PresuturalSupraAlar",
    "category": "upperthorax",
    "title": "Presutural anterior supra-alar seta?",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=5",
    "options": [
      {
        "label": "Present",
        "description": "Presutural anterior supra-alar seta present."
      },
      {
        "label": "Absent",
        "description": "Presutural anterior supra-alar seta absent."
      }
    ]
  },
  {
    "id": "paleSetulae",
    "category": "wings",
    "title": "Underside of wing with tuft of pale setulae at intersection of subcosta and humeral crossvein?",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=2",
    "options": [
      {
        "label": "With tuft of pale setulae",
        "description": "Underside of wing with tuft of pale setulae at intersection of subcosta and humeral crossvein."
      },
      {
        "label": "Without tuft of pale setulae",
        "description": "Underside of wing without tuft of pale setulae at intersection of subcosta and humeral crossvein."
      }
    ]
  },
  {
    "id": "basicosta",
    "category": "wings",
    "title": "Basicosta color?",
    "weight": 3,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=4",
    "options": [
      {
        "label": "dark brown to black.",
        "description": "Basicosta dark brown to black."
      },
      {
        "label": "light brown or medium brown, not dark brown",
        "description": "Basicosta light brown or medium brown, not dark brown."
      }
    ]
  },
  {
    "id": "posteriorspiracle",
    "category": "wings",
    "title": "Posterior spiracle lappet color?",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=4",
    "options": [
      {
        "label": "light brown, yellow, or orange",
        "description": "Lappets of posterior thoracic spiracle light brown, yellow, or orange."
      },
      {
        "label": "dark brown",
        "description": "Lappets of posterior thoracic spiracle dark brown or black."
      }
    ]
  },
  {
    "id": "MidTibia",
    "category": "legs",
    "title": "Anterodorsal setae on mid tibia?",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=6",
    "options": [
      {
        "label": "Two to three",
        "description": "Two to three anterodorsal setae present on mid tibia."
      },
      {
        "label": "One",
        "description": "One anterodorsal setae present on mid tibia."
      }
    ]
  },
  {
    "id": "FemorVestiture",
    "category": "legs",
    "title": "Setulae on posteroventral surface of mid and hind femora?",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=6",
    "options": [
      {
        "label": "with pale yellowish setulae",
        "description": "Posteroventral surface of mid and hind femora with pale yellowish setulae."
      },
      {
        "label": "no pale yellowish setulae; may have dark brown setulae",
        "description": "Posteroventral surface of mid and hind femora with dark brown setulae but no pale yellowish setulae."
      }
    ]
  },
  {
    "id": "Ventralabdomen",
    "category": "abdomen",
    "title": "Density of setulae on ventral abdomen?",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=6",
    "options": [
      {
        "label": "Densely spaced (compare P. angustigena)",
        "description": "Setulae on ventral abdomen densely spaced (see Jewiss-Gaines et al., 2012)."
      },
      {
        "label": "Sparsely spaced (compare P. rudis)",
        "description": "Setulae on ventral abdomen sparsely spaced (see Jewiss-Gaines et al., 2012)."
      }
    ]
  },
  {
    "id": "Terminaliashape",
    "category": "terminalia",
    "title": "Male terminalia: angustigena vs griseotomentosa",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2022/07/jmw_19.pdf#page=22",
    "options": [
      {
        "label": "matching P. angustigena; surstyli straighter and cerci broader",
        "description": "Male terminalia match P. angustigena; surstyli straighter and cerci broader (see Jewiss-Gaines et al., 2012)."
      },
      {
        "label": "matching P. griseotomentosa; surstyli hook-shaped and cerci more slender",
        "description": "Male terminalia match P. griseotomentosa; surstyli hook-shaped and cerci more slender (see Jewiss-Gaines et al., 2012)."
      }
    ]
  },
  {
    "id": "Vagabundaterminalia",
    "category": "terminalia",
    "title": "Male terminalia: vagabunda vs others",
    "weight": 1,
    "link": "https://bhl-open-data.s3.us-east-2.amazonaws.com/web/proceedingsofent1082006ento/proceedingsofent1082006ento_0727_large.webp",
    "options": [
      {
        "label": "broad and flattened when viewed from posterior (see fig. 77 in Whitworth, 2006)",
        "description": "Male cerci broad and flattened when viewed from posterior (see fig. 77 in Whitworth, 2006)."
      },
      {
        "label": "not broad and flattened when viewed from posterior (see fig. 79b in Whitworth, 2006)",
        "description": "Male cerci not broad and flattened when viewed from posterior (see fig. 79b in Whitworth, 2006)."
      }
    ]
  }
];
