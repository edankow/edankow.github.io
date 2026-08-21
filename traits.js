const traits = [
  {
    "id": "Headlength",
    "category": "head",
    "title": "How long is head? (difficult to assess; character taken from Whitworth 2006)",
    "weight": 1,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=17",
    "options": [
      {
        "label": "Head shorter; length of head at level of lunule less than half head height (Whitworth 2006)",
        "description": "Head shorter; length of head at level of lunule less than half head height (Whitworth 2006)."
      },
      {
        "label": "Head longer; length of head at level of lunule more than half head height (Whitworth 2006)",
        "description": "Head longer; length of head at level of lunule more than half head height (Whitworth 2006)."
      }
    ]
  },
  {
    "id": "Fronsnarrowing",
    "category": "frons",
    "title": "Frons shape (to separate males and females)",
    "weight": 9,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=5",
    "options": [
      {
        "label": "conspicuously narrowed above antennal bases",
        "description": "The frons is conspicuously narrowed above antennal bases."
      },
      {
        "label": "more or less parallel-sided; the frons width is significantly more than 20% of the head width at narrowest point",
        "description": "The frons is more or less parallel-sided; the frons width is significantly more than 20% of the head width at narrowest point."
      }
    ]
  },
  {
    "id": "Frontoorbitalplatesformaleswithnarrowfrons",
    "category": "frons",
    "title": "Are fronto-orbital plates separated?",
    "weight": 5,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=167",
    "options": [
      {
        "label": "separated. See figures in Jones et al. 2019, p.167, 174, 180",
        "description": "The fronto-orbital plates are separated. See figures in Jones et al. 2019, p.167, 174, 180."
      },
      {
        "label": "almost touching. See figures in Jones et al. 2019, p.167, 174, 180",
        "description": "The fronto-orbital plates are almost touching. See figures in Jones et al. 2019, p.167, 174, 180."
      }
    ]
  },
  {
    "id": "FronswidthatnarrowesttohelpIDmales",
    "category": "frons",
    "title": "Frons at narrowest point more than 7% of head?",
    "weight": 5,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=9",
    "options": [
      {
        "label": "at least 7% of the head width",
        "description": "The frons at narrowest is at least 7% of the head width."
      },
      {
        "label": "less than 7% of head width",
        "description": "The frons at narrowest is less than 7% of head width."
      }
    ]
  },
  {
    "id": "FronsWidthVersusEleven",
    "category": "frons",
    "title": "Frons at narrowest point more than 11% of head?",
    "weight": 2,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=9",
    "options": [
      {
        "label": "at least 11% of head width",
        "description": "The frons at narrowest is at least 11% of the head width."
      },
      {
        "label": "less than 11% of head width",
        "description": "The frons at narrowest is less than 11% of the head width."
      }
    ]
  },
  {
    "id": "fronswidthvscuprinamale",
    "category": "frons",
    "title": "Frons at narrowest point more than 15% of head width?",
    "weight": 5,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=9",
    "options": [
      {
        "label": "at least about 20% head width",
        "description": "The frons at narrowest is at least about 20% head width."
      },
      {
        "label": "at most about 15% head width",
        "description": "The frons at narrowest is at most about 15% head width."
      }
    ]
  },
  {
    "id": "Fronswidthatnarrowestabout",
    "category": "frons",
    "title": "Frons at narrowest point more than 25% of head width?",
    "weight": 4,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=7",
    "options": [
      {
        "label": "less than 25% head width",
        "description": "The frons at narrowest is less than 25% head width."
      },
      {
        "label": "at least 25% of head width",
        "description": "The frons at narrowest is at least 25% of head width."
      }
    ]
  },
  {
    "id": "Fronswidthversusthirty",
    "category": "frons",
    "title": "Frons at narrowest point more than 30% of head width?",
    "weight": 2,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=7",
    "options": [
      {
        "label": "less than 30% head width",
        "description": "The frons at narrowest is less than 30% head width."
      },
      {
        "label": "at least 30% head width",
        "description": "The frons at narrowest is at least 30% head width."
      }
    ]
  },
  {
    "id": "FronswidthatnarrowesttohelpIDfemales",
    "category": "frons",
    "title": "Frons at narrowest point more than 35% of head width?",
    "weight": 3,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=11",
    "options": [
      {
        "label": "less than 35% head width",
        "description": "The frons at narrowest is less than 35% head width."
      },
      {
        "label": "at least 35% of head width",
        "description": "The frons at narrowest is at least 35% of head width."
      }
    ]
  },
  {
    "id": "Ocellartriangle",
    "category": "frons",
    "title": "Ocellar triangle size (see p141 in Jones et al. 2019).",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=141",
    "options": [
      {
        "label": "relatively small, with basal swelling extending less than halfway to lunule",
        "description": "The ocellar triangle is relatively small, with basal swelling extending less than halfway to lunule."
      },
      {
        "label": "large, with base extending more than halfway to lunule",
        "description": "The ocellar triangle is large, with base extending more than halfway to lunule."
      }
    ]
  },
  {
    "id": "IVSorientation",
    "category": "frons",
    "title": "Do inner vertical setae converge?",
    "weight": 2,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=30",
    "options": [
      {
        "label": "nearly parallel in dorsal view",
        "description": "Inner vertical setae are nearly parallel in dorsal view."
      },
      {
        "label": "convergent in dorsal view",
        "description": "Inner vertical setae are convergent in dorsal view."
      }
    ]
  },
  {
    "id": "Parafacialwidthatleveloflunule",
    "category": "frons",
    "title": "Parafacial width at level of lunule.",
    "weight": 3,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=179",
    "options": [
      {
        "label": "broader than the width of the first flagellomere",
        "description": "The parafacial width at the level of the lunule is broader than the width of the first flagellomere."
      },
      {
        "label": "narrower than the width of the first flagellomere",
        "description": "The parafacial width at the level of the lunule is narrower than the width of the first flagellomere."
      }
    ]
  },
  {
    "id": "Parafacialcolor",
    "category": "frons",
    "title": "Parafacial color? (figure on p.167 of Jones et al 2019)",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=167",
    "options": [
      {
        "label": "silvery (Whitworth 2014)",
        "description": "Parafacials are silvery (Whitworth 2014)."
      },
      {
        "label": "orange (Whitworth 2014)",
        "description": "Parafacials are orange (Whitworth 2014)."
      }
    ]
  },
  {
    "id": "Genae",
    "category": "head",
    "title": "Genae (be careful not to confuse genae with postgenae).",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=173",
    "options": [
      {
        "label": "with dark setae only",
        "description": "Genae with dark setae only."
      },
      {
        "label": "posterior third with many pale setae",
        "description": "Genae posterior third with many pale setae."
      }
    ]
  },
  {
    "id": "Genaldilation",
    "category": "head",
    "title": "Genal dilation (figure on p.167 of Jones et al 2019).",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=167",
    "options": [
      {
        "label": "greyish-white (with dark setae)",
        "description": "Genal dilation greyish-white (with dark setae)."
      },
      {
        "label": "orangeish-white (with lighter brown setae)",
        "description": "Genal dilation orangeish-white (with lighter brown setae)."
      }
    ]
  },
  {
    "id": "Angleformedbyverticalsetae",
    "category": "frons",
    "title": "What angle do the three vertical setae form?",
    "weight": 1,
    "link": "https://zookeys.pensoft.net/article/3908/element/2/11//",
    "options": [
      {
        "label": "a right angle",
        "description": "The three vertical setae form a right angle."
      },
      {
        "label": "an obtuse angle",
        "description": "The three vertical setae form an obtuse angle."
      }
    ]
  },
  {
    "id": "Occipitalsetae",
    "category": "head",
    "title": "Setae below and behind postocular setae (see figures of mexicana and eximia, e.g. in Jones et al. 2019).",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=166",
    "options": [
      {
        "label": "stout and black",
        "description": "Setae below and behind postocular setae (Whitworth 2014) are stout and black."
      },
      {
        "label": "pale and weak",
        "description": "Setae below and behind postocular setae (Whitworth 2014) are pale and weak."
      }
    ]
  },
  {
    "id": "Occipitalsetaebehindinnerverticalseta",
    "category": "head",
    "title": "Occipital setae behind inner vertical seta (see figures in Jones et al. 2019)",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=184",
    "options": [
      {
        "label": "a single seta.",
        "description": "The number of occipital setae behind the inner vertical seta (see figures, e.g. in Jones et al. 2019) is a single seta.."
      },
      {
        "label": "two to five setae",
        "description": "The number of occipital setae behind the inner vertical seta (see figures, e.g. in Jones et al. 2019) is two to five setae."
      }
    ]
  },
  {
    "id": "stflagellomerelengthrelativetoeyelength",
    "category": "head",
    "title": "How long is the first flagellomere relative to the height of the eye?",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=147",
    "options": [
      {
        "label": "in length, less than half of the height of eye in lateral view",
        "description": "The first flagellomere is, in length, less than half of the height of eye in lateral view."
      },
      {
        "label": "in length, more than half of the height of eye in lateral view",
        "description": "The first flagellomere is, in length, more than half of the height of eye in lateral view."
      }
    ]
  },
  {
    "id": "Palpscolor",
    "category": "head",
    "title": "Palps color.",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=144",
    "options": [
      {
        "label": "at least partially dark brown to black",
        "description": "The palps are at least partially dark brown to black."
      },
      {
        "label": "entirely yellow-orange",
        "description": "The palps are entirely yellow-orange."
      }
    ]
  },
  {
    "id": "Bodycolorreddish",
    "category": "bodycolor",
    "title": "Color of thorax or abdomen",
    "weight": 9,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=27",
    "options": [
      {
        "label": "orangish green, reddish-orange brown, or coppery brown",
        "description": "Thorax or abdomen are orangish green, reddish-orange brown, or coppery brown."
      },
      {
        "label": "yellowish green, emerald green, or bluish",
        "description": "Thorax or abdomen are yellowish green, emerald green, or bluish, without orange/red/brown coloration on both thorax and abdomen."
      },
      {
        "label": "shining black",
        "description": "Thorax and abdomen are shining black."
      }
    ]
  },
  {
    "id": "Bodycolorcopper",
    "category": "bodycolor",
    "title": "Thorax or abdomen coppery?",
    "weight": 6,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=27",
    "options": [
      {
        "label": "extensively and rather uniformly coppery brown (unique to Lucilia cuprina)",
        "description": "Thorax or abdomen are extensively and rather uniformly coppery brown."
      },
      {
        "label": "not extensively and rather uniformly coppery brown (may be other shades of brown, or other colors altogether)",
        "description": "Thorax and abdomen are not both extensively and rather uniformly coppery brown."
      }
    ]
  },
  {
    "id": "Bodycolorblack",
    "category": "bodycolor",
    "title": "Thorax and abdomen entirely black?",
    "weight": 9,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=37",
    "options": [
      {
        "label": "shining black",
        "description": "Thorax and abdomen are shining black."
      },
      {
        "label": "not shining black",
        "description": "Thorax and abdomen are not shining black."
      }
    ]
  },
  {
    "id": "presuturalacrostichalsetaeposteriorpairfirst",
    "category": "thorax",
    "title": "Posterior presutural acrostichal setae separation",
    "weight": 2,
    "link": "https://www.researchgate.net/profile/Terry-Whitworth/publication/270220615_First_record_of_Lucilia_bufonivora_Moniez_1876_Diptera_Calliphoridae_from_North_America_and_key_to_North_American_species_of_the_L_bufonivora_species_group/links/570faf7408aec95f06158813/First-record-of-Lucilia-bufonivora-Moniez-1876-Diptera-Calliphoridae-from-North-America-and-key-to-North-American-species-of-the-L-bufonivora-species-group.pdf#page=9",
    "options": [
      {
        "label": "The posterior pair of presutural acrostichal setae are NOT much closer together to one another than they are to the posterior dorsocentral setae",
        "description": "The posterior pair of presutural acrostichal setae are NOT much closer together to one another than they are to the posterior dorsocentral setae."
      },
      {
        "label": "The posterior pair of presutural acrostichal setae are much closer together to one another than they are to the posterior dorsocentral setae",
        "description": "The posterior pair of presutural acrostichal setae are much closer together to one another than they are to the posterior dorsocentral setae."
      }
    ]
  },
  {
    "id": "presuturalacrostichalsetaeposteriorpairsecond",
    "category": "thorax",
    "title": "Posterior presutural acrostichal-dorsocentral setae separation",
    "weight": 1,
    "link": "https://www.researchgate.net/profile/Terry-Whitworth/publication/270220615_First_record_of_Lucilia_bufonivora_Moniez_1876_Diptera_Calliphoridae_from_North_America_and_key_to_North_American_species_of_the_L_bufonivora_species_group/links/570faf7408aec95f06158813/First-record-of-Lucilia-bufonivora-Moniez-1876-Diptera-Calliphoridae-from-North-America-and-key-to-North-American-species-of-the-L-bufonivora-species-group.pdf#page=9",
    "options": [
      {
        "label": "The distance between the posterior pair of presutural acrostichal setae is NOT equal to the distance between them and the posterior-most presutural dorsocentral setae, but rather at least slightly less than that distance",
        "description": "The distance between the posterior pair of presutural acrostichal setae is NOT equal to the distance between them and the posterior-most presutural dorsocentral setae, but rather at least slightly less than that distance."
      },
      {
        "label": "The distance between the posterior pair of presutural acrostichal setae is equal to the distance between them and the posterior-most presutural dorsocentral setae, and not at least slightly less than that distance",
        "description": "The distance between the posterior pair of presutural acrostichal setae is equal to the distance between them and the posterior-most presutural dorsocentral setae, and not at least slightly less than that distance."
      }
    ]
  },
  {
    "id": "Setulaeonposteriorpostpronotum",
    "category": "thorax",
    "title": "Setae on posterior postpronotum (see figures, e.g. in Jones et al. 2019)",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=185",
    "options": [
      {
        "label": "small and number 2-3",
        "description": "The setulae on the posterior half of the postpronotum are small and number 2-3."
      },
      {
        "label": "larger and number 6-8",
        "description": "The setulae on the posterior half of the postpronotum are larger and number 6-8."
      }
    ]
  },
  {
    "id": "Setulaeonposteriornotopleuron",
    "category": "thorax",
    "title": "Setulae on posterior notopleuron (see figures, e.g. in Jones et al. 2019)",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=185",
    "options": [
      {
        "label": "small and number 2-3",
        "description": "The setulae on the posterior margin of the notopleuron are small and number 2-3."
      },
      {
        "label": "larger and number 6-8",
        "description": "The setulae on the posterior margin of the notopleuron are larger and number 6-8."
      }
    ]
  },
  {
    "id": "acrostichalspostsutural",
    "category": "thorax",
    "title": "# of post-sutural acrostichal pairs.",
    "weight": 5,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=19",
    "options": [
      {
        "label": "three",
        "description": "The number of pairs of post-sutural acrostichal setae is three."
      },
      {
        "label": "two",
        "description": "The number of pairs of post-sutural acrostichal setae is two."
      }
    ]
  },
  {
    "id": "intraalarsetaepresutural",
    "category": "thorax",
    "title": "Is a pre-sutural intra-alar seta present?",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=146",
    "options": [
      {
        "label": "not present",
        "description": "A pre-sutural intra-alar seta is not present."
      },
      {
        "label": "present",
        "description": "A pre-sutural intra-alar seta is present."
      }
    ]
  },
  {
    "id": "intraalarsetaePostsutural",
    "category": "thorax",
    "title": "# of postsutural intra-alar setae",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=146",
    "options": [
      {
        "label": "three",
        "description": "The number of pairs of post-sutural intra-alar setae is three."
      },
      {
        "label": "two",
        "description": "The number of pairs of post-sutural intra-alar setae is two."
      }
    ]
  },
  {
    "id": "Subcostalscleritesetae",
    "category": "wings",
    "title": "Does the subcostal sclerite (ventral wing base) have setae?",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=140",
    "options": [
      {
        "label": "no setae",
        "description": "The subcostal sclerite has no setae."
      },
      {
        "label": "1-5 black setae",
        "description": "The subcostal sclerite has 1-5 black setae."
      }
    ]
  },
  {
    "id": "Basicostacolor",
    "category": "wings",
    "title": "How visibly light is the basicosta in field photos? (the basicosta sometimes looks darker in field photos from certain angles than it would microscopically)",
    "weight": 4,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=21",
    "options": [
      {
        "label": "orange, yellow, or whitish",
        "description": "The basicosta appears orange, yellow, or whitish."
      },
      {
        "label": "brown or black",
        "description": "The basicosta appears brown or black."
      }
    ]
  },
  {
    "id": "TrueBasicostaColor",
    "category": "wings",
    "title": "What is the true color of the basicosta microscopically? (only fully reliable when looking at specimens, or in photos of live flies taken from a lateral angle",
    "weight": 2,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=24",
    "options": [
      {
        "label": "at least partially orange, yellow, or whitish.",
        "description": "The basicosta is at least partially orange, yellow, or whitish."
      },
      {
        "label": "entirely brown or black",
        "description": "The basicosta is entirely brown or black."
      }
    ]
  },
  {
    "id": "Lowercalyptercolor",
    "category": "wings",
    "title": "What color is the lower calypter?",
    "weight": 2,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=152",
    "options": [
      {
        "label": "pale, similar to upper calypter",
        "description": "The lower calypter is pale, similar to upper calypter."
      },
      {
        "label": "light brown, somewhat darker than upper calypter",
        "description": "The lower calypter is light brown, somewhat darker than upper calypter."
      }
    ]
  },
  {
    "id": "Abdominalpubescence",
    "category": "bodycolor",
    "title": "Abdomen with extensive areas of whitish pubescence patterning? (This trait is often helpful for photos of females, but the presence of the pubescence is typically harder to detect for males)",
    "weight": 3,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=34",
    "options": [
      {
        "label": "with extensive areas of abdominal pubescence oriented outward from the abdomen’s line of symmetry. See reference images if explanation needed.",
        "description": "Abdomen with extensive areas of abdominal pubescence oriented outward from the abdomen’s line of symmetry."
      },
      {
        "label": "without extensive areas of abdominal pubescence that appear white-dusted",
        "description": "Abdomen without extensive areas of abdominal pubescence that appear white-dusted."
      }
    ]
  },
  {
    "id": "ThirdTergiteDiscalSetae",
    "category": "abdomen",
    "title": "Are there long, erect setae in the middle of tergite 3, anterior to the posterior margin of the tergite?",
    "weight": 2,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=31",
    "options": [
      {
        "label": "With long, erect discal setae on tergite 3",
        "description": "Tergite 3 with long, erect discal setae"
      },
      {
        "label": "Without long, erect discal setae on tergite 3",
        "description": "Tergite 3 without long, erect discal setae"
      }
    ]
  },
  {
    "id": "FourthTergiteDiscalSetae",
    "category": "abdomen",
    "title": "Are there long, erect setae in the middle of tergite4 , anterior to the posterior margin of the tergite?",
    "weight": 2,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=31",
    "options": [
      {
        "label": "with long, erect discal setae on tergite 4",
        "description": "Tergite 4 with long, erect discal setae"
      },
      {
        "label": "without long, erect discal setae on tergite 4",
        "description": "Tergite 4 without long, erect discal setae"
      }
    ]
  },
  {
    "id": "ThirdTergiteMarginalSetae",
    "category": "abdomen",
    "title": "Are there long, erect setae in the middle of the posterior margin of tergite 3 (the first abdominal segment beyond the scutellum)? Note that if there are no long, erect median setae on tergite 4, then there are definitely not any on tergite 3 either.",
    "weight": 3,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=32",
    "options": [
      {
        "label": "without especially strong or erect median marginal setae",
        "description": "The posterior margin of tergite 3 without especially strong or erect median marginal setae."
      },
      {
        "label": "with 1-2 pairs of long, erect median marginal setae",
        "description": "The posterior margin of tergite 3 with 1-2 pairs of long, erect median marginal setae."
      }
    ]
  },
  {
    "id": "FourthTergiteMarginalSetae",
    "category": "abdomen",
    "title": "Are the long setae on the posterior margin of tergite 4 erect or reclinate?",
    "weight": 5,
    "link": "https://edankow.github.io/identify/lucilia_us_canada.pdf#page=33",
    "options": [
      {
        "label": "erect",
        "description": "The long setae on the posterior margin of tergite 4 are erect."
      },
      {
        "label": "reclinate",
        "description": "The long setae on the posterior margin of tergite 4 are reclinate."
      }
    ]
  },
  {
    "id": "Tergitepubescence",
    "category": "bodycolor",
    "title": "Tergite 5 pubescence? (may just appear as faint white-dusting along edges of visible region, even if extensive)",
    "weight": 3,
    "link": "\n",
    "options": [
      {
        "label": "extensively pubescent",
        "description": "Tergite 5 is extensively pubescent."
      },
      {
        "label": "more or less entirely polished",
        "description": "Tergite 5 is more or less entirely polished."
      }
    ]
  },
  {
    "id": "Malecercusinlateralview",
    "category": "terminalia",
    "title": "Male cercus, in lateral view",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=153",
    "options": [
      {
        "label": "with apical hook",
        "description": "Male cercus, in lateral view, with apical hook."
      },
      {
        "label": "without apical hook",
        "description": "Male cercus, in lateral view, without apical hook."
      }
    ]
  },
  {
    "id": "Femaleovipositorinventralview",
    "category": "terminalia",
    "title": "Female ovipositor, in ventral view",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=154",
    "options": [
      {
        "label": "with ST7 narrowing posteriorly, and ST8 elongate and parallel-sided",
        "description": "Female ovipositor, in ventral view, with ST7 narrowing posteriorly, and ST8 elongate and parallel-sided."
      },
      {
        "label": "with ST7 and ST8 gradually widened posteriorly",
        "description": "Female ovipositor, in ventral view, with ST7 and ST8 gradually widened posteriorly."
      },
      {
        "label": "with ST7 and ST8 widened posteriorly after a sudden subapical constriction",
        "description": "Female ovipositor, in ventral view, with ST7 and ST8 widened posteriorly after a sudden subapical constriction."
      }
    ]
  },
  {
    "id": "Malesurstylus",
    "category": "terminalia",
    "title": "Male surstylus",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=157",
    "options": [
      {
        "label": "bufonivora has distinct male terminalia. See Jones et al. (2019) or Tantawy+Whitworth (2014)",
        "description": "bufonivora has distinct male terminalia. See Jones et al. (2019) or Tantawy+Whitworth (2014)."
      },
      {
        "label": "elongata has distinct male terminalia. See Jones et al. (2019) or Tantawy+Whitworth (2014)",
        "description": "elongata has distinct male terminalia. See Jones et al. (2019) or Tantawy+Whitworth (2014)."
      }
    ]
  },
  {
    "id": "Maleterminalia",
    "category": "terminalia",
    "title": "Male cerci",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=168",
    "options": [
      {
        "label": "posteriorly divergent; see Jones et al. 2019",
        "description": "Male cerci posteriorly divergent; see Jones et al. 2019."
      },
      {
        "label": "posteriorly parallel; see Jones et al. 2019",
        "description": "Male cerci posteriorly parallel; see Jones et al. 2019."
      }
    ]
  },
  {
    "id": "Morphometricsbufonivoraelongata",
    "category": "head",
    "title": "Morphometrics: antenna size bufonivora-elongata",
    "weight": 1,
    "link": "https://cjai.biologicalsurvey.ca/wp-content/uploads/2021/01/jwm_39.pdf#page=158",
    "options": [
      {
        "label": "bufonivora has distinct morphometrics of the antennae and frons that distinguish it from elongata. See Jones et al. 2019",
        "description": "bufonivora has distinct morphometrics of the antennae and frons that distinguish it from elongata. See Jones et al. 2019."
      },
      {
        "label": "elongata has distinct morphometrics of the antennae and frons that distinguish it from bufonivora. See Jones et al. 2019",
        "description": "elongata has distinct morphometrics of the antennae and frons that distinguish it from bufonivora. See Jones et al. 2019."
      }
    ]
  }
];
