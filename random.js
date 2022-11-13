var links = [
  "https://open.spotify.com/album/6qZUya0mkucuxvoIp4akVT",
  "https://twitter.com/NeuralYorker",
  "https://www.reddit.com/r/powerwashingporn/comments/l1ev4x/i_live_for_wednesday/",
  "https://www.therobinlord.com/making-a-digital-clock-in-google-sheets/",
  "https://youtu.be/rvFk8hapDZY",
  "https://interactionmagic.com/UX-LEGO-Interfaces",
  "https://rameznaam.com/2020/05/14/solars-future-is-insanely-cheap-2020/",
  "https://www.ilpost.it/2021/02/18/whisky-invecchiamento-tecnologia/",
  "https://ethics-of-ai.mooc.fi/",
  "https://www.raptitude.com/2020/04/how-to-take-a-break-from-your-mind/",
  "https://gist.github.com/d12frosted/7471e2123f10485d96bb",
  "https://vole.wtf/kilobytes-gambit/",
  "https://avinayak.github.io/algorithms/programming/2021/02/19/finding-mona-lisa-in-the-game-of-life.html",
  "https://www.reddit.com/r/nextfuckinglevel/comments/lyqeju/this_guys_insane_trickshots/",
  "https://www.youtube.com/watch?v=16y1AkoZkmQ",
  "https://www.youtube.com/watch?v=mLRjFWDGs1g",
  "https://www.youtube.com/watch?v=qv6UVOQ0F44",
  "https://cert-agid.gov.it/news/il-ransomware-razzista/",
  "https://www.hackmageddon.com/2021/02/17/the-biggest-data-breaches-of-2021/",
  "https://www.bbc.com/news/technology-56012952",
  "https://imgur.com/iFQ5g1u",
  "https://www.youtube.com/watch?v=MpLFYa-8f_Q",
  "https://deepmind.com/blog/article/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology",
  "https://fold.it/",
  "https://arxiv.org/abs/2012.07532",
  "https://www.youtube.com/watch?v=WXuK6gekU1Y",
  "https://www.reddit.com/r/AbsoluteUnits/comments/l4bv6f/the_bison_that_live_by_my_house_realllllly_like/",
  "https://www.reddit.com/r/HuskyTantrums/comments/l0x56u/i_wuv_you/",
  "https://www.reddit.com/r/powerwashingporn/comments/l1ev4x/i_live_for_wednesday/",
  "https://www.newyorker.com/tech/annals-of-technology/who-should-stop-unethical-ai",
  "https://en.wikipedia.org/wiki/StumbleUpon",
  "https://www.rollingstone.com/culture/culture-features/serial-killers-1970s-2000s-murders-1121705/",
  "https://www.milanoattraverso.it/mappe/",
  "https://en.wikipedia.org/wiki/Rosy_retrospection",
  "https://xkcd.com/1688",
  "http://listen.hatnote.com/",
  "https://www.youtube.com/watch?v=l0xh4qopQpk",
  "https://www.agendadigitale.eu/mercati-digitali/crisi-del-chip-cosa-sta-succedendo-gli-impatti-della-pandemia-e-le-strategie-per-il-rilancio/",
  "http://makeanddo4d.com/spreadsheet/",
  "https://www.youtube.com/channel/UCSju5G2aFaWMqn-_0YBtq5A",
  "https://i.imgur.com/tWq3D7l.gifv",
  "https://i.redd.it/8cpr0uqn69l61.jpg",
  "https://storie.valigiablu.it/robot-e-lavoro/",
  "https://e360.yale.edu/features/water-warning-the-looming-threat-of-the-worlds-aging-dams",
  "https://www.animatedknots.com/",
  "https://mkorostoff.github.io/1-pixel-wealth/",
  "https://pioneerworks.org/broadcast/xenobots-claire-evans/",
  "https://cookieconsentspeed.run/",
  "https://www.youtube.com/watch?v=RXZy8BbMz_U",
  "https://www.youtube.com/watch?v=UNAr5tzZxdk",
  "https://www.scientificamerican.com/article/the-most-accurate-flat-map-of-earth-yet/",
  "https://www.youtube.com/watch?v=dKSB2O2Shts",
  "https://github.com/eyal0/Chicken-story/blob/main/README.md",
  "https://minitokyo3d.com/",
  "https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/",
  "https://jimbly.github.io/regex-crossword/",
  "https://moores.samaltman.com/",
  "https://www.popularmechanics.com/adventure/outdoors/a35340487/how-to-fall-from-a-plane-and-survive/",
  "https://edition.cnn.com/style/article/hong-kong-tunnels-climate-crisis-intl-hnk-dst/index.html",
  "https://training.kalzumeus.com/newsletters/archive/do-not-end-the-week-with-nothing",
  "https://clickclickclick.click/",
  "https://webtransparency.cs.princeton.edu/dark-patterns/",
  "https://deathoftheinfluencer.com/",
  "https://www.improbable.com/2020/05/05/recent-progress-in-automatic-sarcasm-detection/",
  "https://www.youtube.com/embed/p5HH2UfZ2wE",
  "https://www.thedrive.com/the-war-zone/39899/darpa-now-has-ai-controlled-f-16s-working-as-a-team-in-virtual-dogfights",
  "https://futurism.com/boston-dynamics-robot-battery-combat-drill",
  "https://www.google.com/maps/space/iss/@29.5602853,-95.0853914,2a,75y,260h,90t/data=!3m6!1e1!3m4!1szChzPIAn4RIAAAQvxgbyEg!2e0!7i10000!8i5000",
  "https://www.youtube.com/watch?v=Wi7AvXL2n_Q",
  "https://www.outsideonline.com/2414872/how-to-read-surface-weather-maps",
  "https://www.youtube.com/watch?v=QX2XCBH-6zQ",
  "https://edition.cnn.com/interactive/2021/03/cnnix-steership/",
  "https://www.schneier.com/blog/archives/2021/03/illegal-content-and-the-blockchain.html",
  "https://www.youtube.com/watch?v=-N-R2S7TrFk",
  "https://increment.com/frontend/ask-an-expert-why-is-css-the-way-it-is/",
  "https://edition.cnn.com/travel/article/norway-ship-tunnel/index.html",
  "https://www.youtube.com/watch?v=QybSFsIbKPE",
  "https://fake.sale/",
  "https://youtu.be/fTm_-jtRW4g",
  "https://www.museumofeverythingelse.com/",
  "https://www.maritime-executive.com/editorials/ever-given-what-happens-now",
  "https://www.theguardian.com/news/2021/mar/02/wentworth-golf-club-reignwood-yan-bin",
  "https://www.youtube.com/watch?v=baSUO3zjneA",
  "https://collections.louvre.fr/",
  "https://everestpipkin.medium.com/but-the-environmental-issues-with-cryptoart-1128ef72e6a3",
  "https://dinosaurpictures.org/ancient-earth#750",
  "https://www.youtube.com/watch?v=i5SLi-GZ0Z4",
  "http://solarprotocol.net/index.html",
  "https://thebulletin.org/doomsday-clock/datavisualizations",
  "https://www.cnbc.com/2021/03/02/china-bitcoin-mining-hub-to-shut-down-cryptocurrency-projects.html",
  "https://melmagazine.com/en-us/story/when-did-people-start-working-out",
  "https://www.instagram.com/eth_landscapes/",
  "https://www.mic.com/p/what-wine-aged-in-space-tastes-like-apparently-67921652",
  "https://permission.site/",
  "open.spotify.com/user/w2p1oq867ns7jele6g3lw66fk",
  "https://github.com/rbtnn/vim-mario",
  "https://en.wikipedia.org/wiki/Illegal_prime",
  "https://primes.utm.edu/",
  "https://www.youtube.com/watch?v=yKFaGDrOfrI",
  "https://everynoise.com/",
  "https://blogs.scientificamerican.com/observations/unknown-unknowns-the-problem-of-hypocognition/",
  "https://gretchenrubin.com/podcast-episode/little-happier-ordinary-work-behavior-can-be-sabotage/",
  "https://medium.com/@GimmeSerendipi1/the-internet-is-huge-and-search-engines-and-social-media-are-only-showing-you-a-tiny-fraction-of-fef6a333c0c",
  "https://www.youtube.com/watch?v=3SnPlt0Zgss",
  "https://www.iltascabile.com/letterature/tu-robot/",
  "https://www.youtube.com/watch?v=fQTvsM9_Vck",
  "https://www.freethink.com/articles/farming-robot",
  "https://www.newstatesman.com/business/companies/2021/04/ceos-are-hugely-expensive-why-not-automate-them",
  "https://www.marssucks.com/",
  "https://www.notboring.co/p/the-great-online-game",
  "https://www.youtube.com/watch?v=PqiZ_gryYUQ",
  "https://hacked.camera/",
  "https://mitxela.com/projects/console",
  "https://stackoverflow.blog/2021/04/19/how-often-do-people-actually-copy-and-paste-from-stack-overflow-now-we-know/",
  "https://stackoverflow.com/questions/16476924/how-to-iterate-over-rows-in-a-dataframe-in-pandas/",
  "http://www.starringthecomputer.com/features.html",
  "https://youtu.be/iyiOVUbsPcM",
  "https://userweb.cs.txstate.edu/~br02/cs1428/ShortStoryForEngineers.htm",
  "https://www.tandfonline.com/doi/full/10.1080/15230406.2021.1910075",
  "https://www.youtube.com/watch?v=Y7JG63IuaWs",
  "https://spectrum.ieee.org/view-from-the-valley/artificial-intelligence/machine-learning/andrew-ng-xrays-the-ai-hype",
  "https://www.section.io/engineering-education/explainable-ai/",
  "https://github.com/fresheneesz/bitcoinThroughputAnalysis",
  "https://www.newyorker.com/tech/annals-of-technology/the-pastry-ai-that-learned-to-fight-cancer",
  "https://www.theverge.com/22423489/autonomous-vehicle-consolidation-acquisition-lyft-uber",
  "https://www.nytimes.com/2018/11/05/opinion/artificial-intelligence-machine-learning.html",
  "https://en.wikipedia.org/wiki/Technologies_in_Minority_Report",
  "https://www.youtube.com/watch?v=cDWZkXjDYsc",
  "https://github.com/dekuNukem/bob_cassette_rewinder",
  "https://news.lettersofnote.com/p/i-hate-everybody-including-you",
  "https://jvns.ca/blog/2021/05/02/publishing-comics/",
  "https://github.com/daviddao/awful-ai",
  "https://asia.nikkei.com/Spotlight/The-Big-Story/US-China-tech-war-Beijing-s-secret-chipmaking-champions",
  "https://www.youtube.com/watch?v=lGroIrQmwyw",
  "https://xkcd.com/327/",
  "https://www.youtube.com/watch?v=nn3gaeq0zSU",
  "https://www.smashingmagazine.com/2021/04/humble-img-element-core-web-vitals/",
  "https://esd.copernicus.org/articles/9/1191/2018/",
  "https://thereader.mitpress.mit.edu/brief-cultural-history-of-the-parking-lot/",
  "https://www.youtube.com/watch?v=xWtiYXPEbqs",
  "https://www.nationalgeographic.com/animals/article/scientists-plan-to-use-ai-to-try-to-decode-the-language-of-whales",
  "https://orbis.stanford.edu/",
  "https://www.youtube.com/watch?v=7nkiL7_yBIc",
  "https://www.youtube.com/watch?v=n-BZ5-Q48lE",
  "https://www.youtube.com/watch?v=4WTpO9y2Dh4",
  "https://www.youtube.com/watch?v=JXeJANDKwDc",
  "https://youtu.be/4ckjr9x214c",
  "https://youtu.be/hx7BXih7zx8",
  "https://lofi.cafe/",
  "https://solar.lowtechmagazine.com/2020/12/how-and-why-i-stopped-buying-new-laptops.html",
  "http://internet-in-a-box.org/",
  "https://100r.co/site/working_offgrid_efficiently.html",
  "https://jeffhuang.com/designed_to_last/",
  "https://k3tan.com/starting-a-new-digital-identity",
  "https://en.wikipedia.org/wiki/Sturgeon%27s_law",
  "https://radiooooo.com/",
  "https://dood.al/pinktrombone/",
  "https://morse.withgoogle.com/learn/",
  "http://goo.gle/timelapse",
  "https://it.talent.com/tax-calculator",
  "https://impact.ese.ic.ac.uk/ImpactEarth/index.html",
  "http://lalo.li/ddd/",
  "https://www.youtube.com/watch?v=7ftp_JR0KEc",
  "https://copilot.github.com/",
  "https://cset.georgetown.edu/wp-content/uploads/Machine-Learning-and-Cybersecurity.pdf",
  "https://github.com/microsoft/ML-For-Beginners",
  "https://fingerspelling.xyz/",
  "https://playground.tensorflow.org/",
  "https://it.wikipedia.org/wiki/Googol",
  "https://interestingengineering.com/chinas-infinity-loop-sustainable-skyscraper",
  "https://www.youtube.com/watch?v=uLuAZbREZ5U",
  "https://www.okayplayer.com/music/albums-not-on-streaming-services-spotify.html",
  "https://revisualizer.buck.co/",
  "https://www.jefftk.com/p/why-i-work-on-ads",
  "https://dirt.substack.com/p/dirt-the-economics-of-illegal-streaming",
  "https://uxdesign.cc/the-worst-volume-control-ui-in-the-world-60713dc86950",
  "https://github.com/organicmaps/organicmaps",
  "https://museumoffailure.com/",
  "https://www.vidarholen.net/contents/blog/?p=766",
  "https://www.youtube.com/watch?v=o0axUoy4wbQ",
  "https://hristo-georgiev.com/google-turned-me-into-a-serial-killer",
  "https://www.technologyreview.com/2020/12/31/1015552/biggest-technology-failures-2020/",
  "https://www.wired.com/story/the-full-story-of-the-stunning-rsa-hack-can-finally-be-told/",
  "https://longbets.org/",
  "https://www.youtube.com/watch?v=wvUQcnfwUUM",
  "https://thehustle.co/the-thriving-business-of-ikea-hacking/",
  "https://windows96.net/",
  "https://noclip.website/",
  "https://astroanarchy.blogspot.com/2021/03/gigapixel-mosaic-of-milky-way-1250.html",
  "https://greatestadventurers.com/the-amateur-tramp-the-man-who-walked-around-a-continent/",
  "https://www.youtube.com/watch?v=uyn0cLCMKsM",
  "https://www.youtube.com/watch?v=btjvh37h6bM",
  "https://hackaday.com/2021/06/10/a-self-driving-bicycle-is-something-to-marvel-at/",
  "https://systemscue.it/mr-robot-attacchi-1-stagione/11260/",
  "https://www.theguardian.com/lifeandstyle/2021/jun/26/project-cassandra-plan-to-use-novels-to-predict-next-war",
  "https://every.to/cybernaut/linkedins-alternate-universe-21780381-7883",
  "https://accademiadellacrusca.it/it/consulenza/lesatta-grafia-di-qual-e/6",
  "https://www.newyorker.com/magazine/2020/05/25/where-do-eels-come-from",
  "https://www.fast.ai/2021/07/19/copilot/",
  "https://www.youtube.com/watch?v=b2VwSe6iIpQ",
  "https://sombras.app/?a=ZZffyi&b=Z33dhc",
  "https://vaporwaves.netlify.app/",
  "https://www.templatemaker.nl/en/",
  "https://jazzkeys.plan8.co/",
  "http://cyber.dabamos.de/88x31/index.html",
  "https://virtualvacation.us/",
  "https://www.youtube.com/watch?v=3kMaLZna07s&t=2919s",
  "https://precisionforcovid.org/vaccinebarriers.html",
  "https://senseable.mit.edu/desirable-streets/",
  "https://www.visualcapitalist.com/all-the-biomass-of-earth-in-one-graphic/",
  "https://themarkup.org/citizen-browser/2021/03/11/split-screen?feed=biden_trump",
  "https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax",
  "https://www.hudsandguis.com/home/2021/theexpanse",
  "https://www.youtube.com/watch?v=qeMFqkcPYcg",
  "https://www.atrixnet.com/bs-generator.html",
  "https://vadimkravcenko.com/en/how-to-build-remote-teams-properly/",
  "https://writings.stephenwolfram.com/2019/02/seeking-the-productive-life-some-details-of-my-personal-infrastructure/",
  "https://ez.substack.com/p/the-work-from-home-future-is-destroying",
  "https://anthonynsimon.com/blog/one-man-saas-architecture/",
  "https://www.wolframalpha.com/",
  "https://www.youtube.com/watch?v=03xMIcYiB80",
  "https://tilde.show/podcast-17/",
  "http://www.foddy.net/Athletics.html",
  "https://grimtalesbook.com/",
  "https://play.aidungeon.io/main/home",
  "https://github.com/Latitude-Archives/AIDungeon",
  "https://gizmodo.com/an-ai-was-taught-to-play-the-worlds-hardest-video-game-1846388137",
  "https://boredhumans.com/art.php",
  "https://boredhumans.com/dreams.php",
  "https://medium.com/analytics-vidhya/gans-a-brief-introduction-to-generative-adversarial-networks-f06216c7200e",
  "https://zoomquilt.org ",
  "https://www.youtube.com/watch?v=bWcASV2sey0",
  "https://js13kgames.com/entries/q1k3",
  "https://github.com/Python-World/python-mini-projects",
  "https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licences",
  "https://tio.run/",
  "https://deps.dev/",
  "https://xkcd.com/2347/",
  "https://www.nytimes.com/2021/04/15/science/tyrannosaurus-rex-population.html?smtyp=cur",
  "https://www.vice.com/en/article/xgzkek/machines-are-inventing-new-math-weve-never-seen",
  "http://www.ramanujanmachine.com/",
  "https://www.technologyreview.com/2021/01/06/1015779/what-buddhism-can-do-ai-ethics",
  "https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1009303",
  "https://venturebeat.com/2021/02/13/thought-detection-ai-has-infiltrated-our-last-bastion-of-privacy/",
  "https://www.theverge.com/21298762/face-depixelizer-ai-machine-learning-tool-pulse-stylegan-obama-bias",
  "https://www.lesswrong.com/posts/oiuZjPfknKsSc5waC",
  "https://www.nature.com/articles/s41586-021-03229-4.epdf",
  "https://www.youtube.com/watch?v=GdTBqBnqhaQ",
  "https://www.youtube.com/watch?v=TXfltmzRG-g",
  "https://medium.com/nwamaka-imasogie/stand-up-comedy-and-nlp-c7d64002520c",
  "https://sethmbcrider.com/data-projects/stares-at-burger-non-comittally-an-exploration-of-generative-comedy-scripts-and-machine-learning/",
  "https://sequencer.henryfellerhoff.com/",
  "https://github.com/extesy/hoverzoom/discussions/670",
  "https://improbotics.org/",
  "https://hyperallergic.com/671843/neural-yorker-ilan-manouach-ioannis-siglidis/",
  "https://it.wikipedia.org/wiki/Buona_la_prima!",
  "https://www.youtube.com/watch?v=-xKM3mGt2pE",
  "https://www.vice.com/en/article/y3dda7/how-the-personal-computer-broke-the-human-body",
  "https://www.theatlantic.com/technology/archive/2021/06/your-tiktok-feed-embarrassing/619257/",
  "http://cyber.dabamos.de/life-in-late-stage-capitalism/",
  "https://blog.cloudflare.com/october-2021-facebook-outage/",
  "https://www.nytimes.com/2021/05/18/movies/shrek-20th-anniversary.html",
  "http://electronicplastic.com/",
  "https://www.youtube.com/watch?v=oYp5XuGYqqY",
  "https://www.theatlantic.com/technology/archive/2021/08/dead-internet-theory-wrong-but-feels-true/619937/",
  "https://www.wired.co.uk/article/tourettes-youtube-jan-zimmermann",
  "https://www.climatechangecommunication.org/conspiracy-theory-handbook/",
  "https://www.theguardian.com/food/2021/jul/06/caffeine-coffee-tea-invisible-addiction-is-it-time-to-give-up",
  "https://bigtechdetective.net/",
  "https://onezero.medium.com/party-in-a-shared-google-doc-d576c565706e",
  "https://docs.google.com/forms/d/e/1FAIpQLSflNxNM0jzbZJjUqOcXkwhGTfii4CM_CA3kCxImbY8c3AABEA/viewform",
  "https://www.sheet-posting.me/",
  "https://carywalkin.itch.io/arenaxlsm?download",
  "https://carywalkin.ca/2013/09/17/vba4play-making-a-maze-part-1-your-first-maze/",
  "https://potential.app/ios-15-humane",
  "https://www.youtube.com/watch?v=g4mHPeMGTJM",
  "https://www.vice.com/en/article/v7ew98/what-happened-to-ronald-mcdonald",
  "https://noahveltman.com/aimovies/",
  "https://www.ablogtowatch.com/suzuki-kango-plock-wooden-automaton-time-writing-clock/",
  "https://www.cameraoffsetproject.com/",
  "https://www.alvarez.io/posts/living-like-its99/",
  "https://archives.loomcom.com/contraltojs/",
  "https://www.youtube.com/watch?v=hPvN0yfAFrk",
  "https://www.cybersecurityosservatorio.it/it/Services/attacks_map.jsp",
  "https://web.archive.org/web/20211103152439/https://cert-agid.gov.it/news/mappatura-delle-vulnerabilita-della-pubblica-amministrazione-mediante-fonti-osint/",
  "https://edwardsnowden.substack.com/p/ns-oh-god-how-is-this-legal",
  "http://ranum.com/security/computer_security/editorials/dumb/index.html",
  "https://guerredirete.substack.com/about",
  "https://drive.google.com/file/d/15RUB2AgXmOSvU-FOtlbISqv-TZKVgBCS/view",
  "https://www.vulture.com/2021/05/best-online-videos-tiktok-youtube-vine.html",
  "https://www.youtube.com/watch?v=otCpCn0l4Wo",
  "https://www.wolframalpha.com/input/?i=random+pokemon+curve",
  "https://thisartworkdoesnotexist.com/",
  "https://blog.immersed.team/working-from-orbit-39bf95a6d385",
  "https://www.syfy.com/syfy-wire/cancel-columbus-day-sun-storms-pinpoint-europeans-being-in-canada-in-1021-ad",
  "https://www.animalbastards.com/",
  "http://britneyspears.ac/lasers.htm",
  "https://how-i-experience-web-today.com/",
  "https://ml.berkeley.edu/blog/posts/clip-art/",
  "https://www.thirtythreeforty.net/posts/2021/10/ti-calculator-innovation/",
  "https://www.nytimes.com/interactive/2021/upshot/trump-biden-geography-quiz.html",
  "https://www.bloombergquint.com/opinion/debranding-is-the-new-branding-for-burger-king-warner-bros",
  "http://blog.practicalethics.ox.ac.uk/2021/07/what-if-stones-have-souls/",
  "https://www.sefirot.it/it",
  "https://flytestore.eu/",
  "https://m5stack.com/",
  "https://platform.europeanmoocs.eu/courses.php",
  "https://www.wearemuesli.it/",
  "https://read.first1000.co/p/tinder",
  "https://www.youtube.com/watch?v=Vkfpi2H8tOE",
  "https://pudding.cool/2021/10/lenna/",
  "https://tosdr.org/",
  "http://www.quellocheconta.gov.it/it",
  "https://www.my80stv.com/",
  "https://www.mysk.blog/2021/10/24/accelerometer-ios/",
  "https://junkiyoshi.com/openframeworks20211109/",
  "https://www.youtube.com/watch?v=9EcjWd-O4jI",
  "https://github.com/microsoft/ML-For-Beginners",
  "https://github.com/k88hudson/git-flight-rules",
  "https://github.com/github/feedback/discussions/8308",
  "https://github.com/ibraheemdev/modern-unix",
  "http://gitlet.maryrosecook.com/docs/gitlet.html",
  "https://maxread.substack.com/p/90s-dad-thrillers-a-list",
  "https://www.youtube.com/watch?app=desktop&v=y_TlaxmOKqs",
  "https://landscape.cncf.io/",
  "https://aatishb.com/entropy/",
  "https://alumni.berkeley.edu/california-magazine/spring-2016-war-stories/how-berkeley-eccentric-beat-russians-and-then-made",
  "https://www.southampton.ac.uk/~cpd/history.html",
  "https://scottreinhard.com/Mapping-and-Visualization",
  "https://girliemac.com/blog/2017/12/26/git-purr/",
  "https://www.youtube.com/watch?v=Jne9t8sHpUc",
  "https://www.youtube.com/watch?v=vDGrfhJH1P4",
  "https://www.youtube.com/watch?v=9XYBYuByj2c",
  "https://www.youtube.com/watch?v=vBkBS4O3yvY",
  "https://www.youtube.com/watch?v=GhoGTqSfUzs",
  "https://www.youtube.com/watch?v=ww47bR86wSc",
  "https://youtu.be/DEqXNfs_HhY",
  "https://lifehacker.com/20-movies-so-bad-theyre-actually-really-good-1848055270",
  "https://www.youtube.com/watch?v=t1TcDHrkQYg",
  "https://www.arm.com/blogs/blueprint/flexible-processing",
  "https://blog.archive.org/2021/12/08/three-ways-to-celebrate-the-public-domain-in-2022/",
  "https://www.vice.com/en/article/z3xw3x/new-research-vindicates-1972-mit-prediction-that-society-will-collapse-soon",
  "https://www.vox.com/recode/22762596/how-to-fix-facebook-mark-zuckerberg",
  "https://www.technologyreview.com/2021/11/03/1039171/hackers-quantum-computers-us-homeland-security-cryptography/",
  "https://www.youtube.com/watch?v=3EDQBeRx0Iw",
  "https://www.foldnfly.com/#/1-1-1-1-1-1-1-1-2",
  "https://javier.xyz/emoji-to-scale/",
  "https://iknowwhatyoudownload.com/en/peer/",
  "https://vscode.dev",
  "https://www.bmj.com/content/375/bmj-2021-066576",
  "https://slate.com/technology/2014/08/pets-look-like-their-owners-dog-and-their-people-have-similar-eyes.html",
  "https://foreignpolicy.com/2021/11/27/pepsi-navy-soviet-ussr/",
  "https://djmag.com/longreads/ai-futures-how-artificial-intelligence-will-change-music",
  "https://daily.jstor.org/the-early-history-of-human-excreta/",
  "https://www.nayuki.io/page/designing-better-file-organization-around-tags-not-hierarchies",
  "https://www.wired.com/story/why-cant-people-teleport/",
  "https://www.nationalgeographic.co.uk/history-and-civilisation/2021/11/more-than-just-a-mystery-train-the-orient-express-whisked-the-elite-across-europe-in-luxury-and-style",
  "https://www.youtube.com/watch?v=XaqR3G_NVoo ",
  "https://kennethfriedman.org/thoughts/2019/the-2034-website/",
  "https://www.vertiwalk.com/",
  "https://psyche.co/guides/how-to-solve-problems-by-thinking-like-a-detective",
  "https://www.npr.org/2011/03/29/134923863/moby-duck-when-28-800-bath-toys-are-lost-at-sea",
  "https://en.wikipedia.org/wiki/Friendly_Floatees",
  "https://www.polygon.com/interviews/22397934/indie-games-hand-drawn-artists-cozy-grove",
  "https://www.haroldserrano.com/blog/how-do-i-build-a-game-engine",
  "https://blog.robertelder.org/how-to-make-a-cpu/",
  "https://www.nytimes.com/2021/12/05/business/media/tiktok-algorithm.html",
  "https://bam.kalzumeus.com/archive/how-credit-cards-make-money/",
  "https://distill.pub/2021/gnn-intro/",
  "https://gregkarber.com/opera/",
  "https://www.youtube.com/watch?v=WOnQ8CD3v4g",
  "https://onlineprivacy101.info/",
  "https://mapcomplete.osm.be/surveillance.html",
  "https://home.coworker.org/worktech",
  "https://lifehacker.com/how-to-download-everything-amazon-knows-about-you-its-1848412242",
  "https://www.supercluster.com/editorial/meet-the-amateur-astronomers-hunting-for-spy-satellites",
  "https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening",
  "http://matrixmultiplication.xyz/",
  "https://youtu.be/AcNTo0QJnXY",
  "https://thoughtcatalog.com/jeremy-london/2018/09/oldest-websites-on-the-internet/",
  "https://jjpryor.medium.com/are-you-going-crazy-52-examples-of-the-mandela-effect-and-your-missing-memories-7f6337d889d4",
  "https://www.newyorker.com/magazine/2021/12/06/the-science-of-mind-reading",
  "https://www.vice.com/en/article/pkbxp8/grindr-location-data-priest-weaponization-app",
  "https://www.visualcapitalist.com/from-greek-to-latin-visualizing-the-evolution-of-the-alphabet/",
  "https://www.lowtechmagazine.com/2022/01/the-revenge-of-the-hot-water-bottle.html",
  "https://www.youtube.com/watch?v=mLRjFWDGs1g",
  "https://spectrum.ieee.org/how-the-boeing-737-max-disaster-looks-to-a-software-developer",
  "https://computerhistory.org/blog/discovering-dennis-ritchies-lost-dissertation/",
  "https://ligurio.github.io/awesome-ttygames/",
  "https://wittgenstein.app/",
  "https://www.timeout.com/tokyo/news/this-new-tokyo-cafe-has-robot-waiters-controlled-remotely-by-disabled-workers-021621",
  "https://www.theregister.com/2022/01/31/machine_learning_the_hard_way/?mc_cid=f3bd2d8d36&mc_eid=86dda99b77",
  "https://obsidian.md",
  "https://mattferraro.dev/posts/inverse-of-a-circle",
  "https://www.hownormalami.eu/",
  "https://believermag.com/tool-screenshot-kim-beil/",
  "https://www.youtube.com/watch?v=cbI31x3FpS0",
  "https://historicborders.app/",
  "https://y-n10.com/",
  "https://stackoverflow.blog/2017/06/15/developers-use-spaces-make-money-use-tabs/",
  "https://parkmyspaceship.com/",
  "https://www.theatlantic.com/culture/archive/2021/04/hoarding-ae-reality-tv-kate-durbin-poetry/618610/",
  "https://lithub.com/who-is-the-mystery-man-caught-on-google-maps-writing-a-poem-on-the-beach/",
  "https://www.youtube.com/watch?v=CzvQxQYKO88",
  "https://qz.com/2108874/the-maximum-amount-of-money-you-could-have-made-trading-in-2021/",
  "https://marker.medium.com/robert-shiller-says-economics-needs-to-go-viral-to-save-itself-f157eceb4c7d",
  "https://miltonfmr.com/hedge-fund-letters/",
  "https://corporateeurope.org/sites/default/files/2021-08/The%20lobby%20network%20-%20Big%20Tech%27s%20web%20of%20influence%20in%20the%20EU.pdf?",
  "https://dirt.substack.com/p/dirt-reality-bytes",
  "https://yeahpython.github.io/game/game.html",
  "https://www.youtube.com/watch?v=0tZLCCLMws4",
  "https://solar.lowtechmagazine.com/2022/03/how-to-build-bike-generator.html",
  "https://microship.com/winnebiko/",
  "https://wikitrivia.tomjwatson.com/",
  "https://schollz.com/blog/radio/",
  "https://onezero.medium.com/our-ability-to-process-information-is-reaching-a-critical-limit-3c761fee3259",
  "https://mikeshouts.com/slide-view-watch-with-integrated-slide-rule-by-caliper-timepieces/",
  "https://www.youtube.com/watch?v=fCP2-Bfhy04",
  "https://regexone.com/",
  "https://neal.fun/deep-sea/",
  "https://github.com/iaddis/metalnes",
  "http://www.authagraph.com/top/?lang=en",
  "https://spookygeology.com/",
  "https://www.youtube.com/watch?v=Ppy4gGhPHgs",
  "https://animatesql.com/",
  "https://www.worksinprogress.co/issue/why-skyscrapers-are-so-short/",
  "https://aeon.co/essays/how-clothing-and-climate-change-kickstarted-agriculture",
  "https://phys.org/news/2021-05-declassified-cold-war-code-breaking-manual.html",
  "https://macos8.app/",
  "https://disneyanimation.com/process/",
  "https://twitter.com/JohnDiesattheEn/status/1507763197469765634",
  "https://www.youtube.com/watch?v=8rPj30Ts_3c",
  "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/",
  "https://icrazyblaze.github.io/Xash3D-Emscripten/xash-intro.html",
  "https://publicdomainreview.org/collection/zander-gym",
  "https://www.youtube.com/watch?v=vvZA9n3e5pc&list=PLoROMvodv4rMWw6rRoeSpkiseTHzWj6vu",
  "https://www.rivistastudio.com/come-eliminare-zanzare/",
  "https://www.instagram.com/depthsofwikipedia/",
  "https://www.youtube.com/watch?v=aHwzzSYhHrs",
  "https://en.wikipedia.org/wiki/Edward_O._Thorp",
  "https://en.wikipedia.org/wiki/List_of_people_who_have_lived_in_airports",
  "https://xkcd.com/2314/",
  "https://en.wikipedia.org/wiki/Carcinisation",
  "https://en.wikipedia.org/wiki/Unknot",
  "https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe",
  "https://frog.tips/",
  "https://www.youtube.com/watch?v=vbqB6iWRIc8",
  "https://www.objectsmag.it/scrivere-ad-arte-i-typewritten-portraits-di-alvaro-franca/",
  "https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001yB",
  "https://cdm.link/2022/02/artist-uses-ai-to-perfectly-fake-70s-science-fiction-pulp-covers-artwork-and-titles/",
  "https://www.vice.com/en/article/4awqz3/why-are-letters-shaped-the-way-they-are",
  "https://kottke.org/22/03/all-the-fcking-books-you-see-at-the-bookstore",
  "https://www.timeline.watch/category/categories/",
  "https://www.youtube.com/watch?v=WyF8RHM1OCg",
  "https://restofworld.org/2022/documents-reputation-laundering-firm-eliminalia/",
  "https://www.archeoplastica.it/",
  "https://www.joelapompe.net/",
  "https://www.theverge.com/c/23010055/pandemic-ppe-supply-chain-gloves-coronavirus",
  "https://www.nytimes.com/interactive/2022/04/07/magazine/jeff-bezos-net-worth.html",
  "https://www.fleksy.com/blog/how-swipe-typing-works/?_adin=02136062249",
  "https://aeon.co/videos/meet-super-mario-the-man-whos-lived-on-cruise-ships-for-two-decades",
  "https://www.youtube.com/watch?v=zIh5AHxh-Ok",
  "http://www.goosh.org/",
  "https://github.com/IBM/MicroscoPy",
  "https://www.scanofthemonth.com/scans/food-packaging",
  "https://longwelwind.net/blog/networking-turn-based-game/",
  "https://nicole.express/2022/the-nes-as-an-artifact.html",
  "http://lulabs.net/machining/ss-cube/",
  "https://www.youtube.com/watch?v=fQVhppRP4Wo",
  "https://framesynthesis.com/drivingsimulator/maps/",
  "https://backofyourhand.com/",
  "https://rectangles.app/",
  "https://sailorhg.com/home_sweet_homepage/",
  "https://datavizcatalogue.com/",
  "https://www.youtube.com/watch?v=KbmgayX7rrM",
  "https://www.zocalopublicsquare.org/2022/04/01/before-wordle-there-was-cross-word-mania/ideas/culture-class/",
  "https://www.goodreads.com/book/show/23637323-fun",
  "https://pietroppeter.github.io/wordle-it/",
  "https://semantle.novalis.org/",
  "https://www.scientificamerican.com/article/researchers-made-a-new-message-for-extraterrestrials/",
  "https://www.youtube.com/watch?v=RhtiDYLbfF4",
  "https://www.youtube.com/watch?v=fOGdb1CTu5c",
  "https://ig.ft.com/climate-game/",
  "https://medium.com/@ericmigi/why-pebble-failed-d7be937c6232",
  "https://www.abandonedrails.com/",
  "https://oldconceptcars.com/",
  "https://refactoring.guru/design-patterns/catalog",
  "https://www.youtube.com/watch?v=anyWlUK6E-k",
  "https://blog.mozilla.org/en/internet-culture/how-to-delete-instagram-facebook-online-accounts/",
  "https://www.thedrive.com/the-war-zone/34104/nukes-nubs-and-coners-the-unique-social-hierarchy-aboard-a-nuclear-submarine",
  "https://www.youtube.com/watch?v=Zl4SmzIreSs",
  "https://publicdomainreview.org/essay/handy-mnemonics",
  "https://anatomyof.ai/",
  "https://global.canon/en/c-museum/camera-series.html",
  "https://shutupandtakemymoney.com/inflatable-latex-floating-suit/",
  "https://www.youtube.com/watch?v=Epbu2z3o28w ",
  "https://howmanyplants.com/plant-guides",
  "https://ciechanow.ski/mechanical-watch/",
  "https://newscenter.lbl.gov/2022/01/13/dark-energy-spectroscopic-instrument-desi-creates-largest-3d-map-of-the-cosmos/",
  "https://www.morling.dev/blog/whats-in-a-good-error-message/",
  "https://sqlite.org/howtocorrupt.html",
  "https://designyoutrust.com/2022/04/looney-tunes-without-looney-tunes-existential-surreal-and-creepy-backgrounds/",
  "https://www.youtube.com/watch?v=7yFB1iOrw28",
  "https://github.com/lxgr-linux/pokete",
  "https://docs.google.com/spreadsheets/d/1jyukYKG7RX7S9Lw5MccDjeNMHKzM0VH3CMTGu1mSsYo/",
  "https://0hh1.com/",
  "https://astralcodexten.substack.com/p/a-guide-to-asking-robots-to-design",
  "https://theindustryobserver.thebrag.com/the-odd-story-of-how-brian-eno-composed-the-windows-95-startup-sound/",
  "https://youtu.be/RG9TMn1FJzc",
  "https://you-tldr.com/",
  "https://www.wappalyzer.com/",
  "https://animatesql.com/",
  "https://megablock.xyz/",
  "https://emupedia.net/beta/emuos/",
  "https://www.glaielgames.com/adversarialminesweeper",
  "https://www.youtube.com/watch?v=R43k-p9XdIk",
  "https://www.valerionappi.it/brng-en/",
  "https://www.insicurezzadigitale.com/segnali-di-compromissione-del-proprio-smartphone/",
  "https://github.com/sensity-ai/dot",
  "https://z0ccc.github.io/extension-fingerprints/#",
  "https://senseable.mit.edu/space-bubbles/",
  "https://shin.itch.io/elden-ring-gb",
  "https://vimeo.com/451101874",
  "https://github.com/norvig/pytudes/blob/main/ipynb/Wordle.ipynb",
  "https://wiki.postgresql.org/wiki/Sudoku_solver",
  "https://www.youtube.com/watch?v=2XLZ4Z8LpEE",
  "https://theprepared.org/features-feed/stretch-wrap",
  "https://knowablemagazine.org/article/living-world/2022/how-plants-turned-predator",
  "https://melmagazine.com/en-us/story/batman-nipple-suit-creator",
  "https://www.youtube.com/watch?v=OR4N5OhcY9s",
  "https://www.atlasobscura.com/articles/cia-issued-rectal-tool-kit",
  "https://www.vanityfair.com/style/2022/03/the-life-and-confessions-of-mob-chef-david-ruggerio",
  "https://www.wired.com/story/merryl-goldberg-music-encryption-ussr-phantom-orchestra/",
  "https://www.youtube.com/watch?v=5RkzOAlLBg4",
  "https://hacked.camera/",
  "https://calpaterson.com/fraud.html",
  "https://www.youtube.com/watch?v=rncmcI8nqdk",
  "https://framed.wtf/",
  "https://github.com/dzhang314/YouTubeDrive",
  "https://www.youtube.com/watch?v=3acm7j9k_1w",
  "https://github.com/phyver/GameShell",
  "https://www.worldometers.info/",
  "https://devtoys.app/",
  "https://twitter.com/kami_robo_yasui/status/1530019821643243520",
  "https://www.youtube.com/watch?v=xQqGIZUFAw0",
  "https://www.jasondavies.com/maps/transition/",
  "https://thehtml.review/",
  "https://www.datcreativity.com/",
  "https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/",
  "https://jakobgm.com/education/ntnu/",
  "https://medium.com/applied-data-science/the-google-vs-trick-618c8fd5359f",
  "https://www.youtube.com/watch?v=I3hoS_memF8",
  "https://www.youtube.com/watch?v=vkzgcJGdUnA",
  "https://youtu.be/7kw6TdB7hSo",
  "https://piped.kavin.rocks/watch?v=slbnDYFL99g",
  "https://www.youtube.com/watch?v=hF3V-GHiJ78",
  "https://www.youtube.com/watch?v=lpFxmTvpJrM",
  "https://nobody.live/",
  "https://www.yamaha.com/en/about/design/events_topics/stepping_out_of_the_slate/",
  "https://www.fsitaliane.it/content/dam/fsitaliane/Documents/impegno/per-lambiente/progetti/Atlante%20delle%20linee%20ferroviarie%20dismesse.pdf",
  "http://psdoom.sourceforge.net/	",
  "https://en.wikipedia.org/wiki/Trolley_problem",
  "https://neal.fun/absurd-trolley-problems/",
  "https://www.mentalfloss.com/article/560127/why-tigers-find-calvin-kleins-obsession-men-cologne-so-irresistible",
  "https://habr.com/en/company/pvs-studio/blog/443400/",
  "https://www.datagenetics.com/blog/september32012/",
  "https://internalregister.github.io/2019/03/14/Homebrew-Console.html",
  "https://en.wikipedia.org/wiki/Comparative_illusion",
  "https://www.youtube.com/watch?v=kOO31qFmi9A",
  "https://www.youtube.com/watch?v=EvMwNnAtTL8",
  "https://www.gameboycameraman.com/",
  "https://www.youtube.com/watch?v=PJwt2dxx9yg",
  "https://dmitry.gr/?r=05.Projects&proj=33.%20LinuxCard",
  "https://mashable.com/article/pregnancy-test-doom",
  "https://grugbrain.dev/",
  "https://www.youtube.com/watch?v=c6hnQ1RKhbo",
  "https://en.wikipedia.org/wiki/Orange_petunia",
  "https://nbremer.github.io/planet-globe/",
  "https://www.youtube.com/watch?v=9sI7WveN7vk",
  "https://www.youtube.com/watch?v=N3tRFayqVtk",
  "https://it.lmgtfy.app/",
  "https://www.testicdl.com/",
  "https://commoncog.com/g/burnout/",
  "https://probablefutures.org/heat/planetary-balance/",
  "https://www.heinrichhartmann.com/posts/writing/",
  "https://www.youtube.com/watch?v=KLEH8RJsYgI",
  "https://www.youtube.com/watch?v=i98bKRYIZd8",
  "https://areyoutheasshole.com/",
  "https://spectrum.ieee.org/commodore-64",
  "https://zserge.com/posts/post-apocalyptic-programming/",
  "https://tjukanovt.github.io/notable-people",
  "https://www.codex-atlanticus.it/#/",
  "https://www.youtube.com/watch?v=Bd-Dy-hntwQ",
  "https://www.youtube.com/watch?app=desktop&v=ucw0twciNGk",
  "https://scratch.mit.edu/",
  "https://github.com/scratchnative/scratchOS",
  "https://www.sitiarcheologici.palazzochigi.it/",
  "https://www.vintads.it/",
  "https://backgroundchecks.org/justdeleteme/",
  "https://artvee.com/",
  "https://woob.tech/",
  "https://youtu.be/7Gon6yrifDA",
  "https://privacy.sexy/",
  "https://themarkup.org/blacklight",
  "https://www.enforcementtracker.com/",
  "https://www.inverse.com/innovation/blinking-cursor-history",
  "https://howisfelix.today/",
  "https://www.bonappetit.com/story/plates-of-the-future",
  "https://www.youtube.com/watch?v=4F9DxYhqmKw",
  "https://scribehow.com/",
  "https://gpsjam.org/",
  "https://hashes.com/en/decrypt/hash",
  "https://kottke.org/20/12/the-chart-of-doom-ranking-apocalypses",
  "https://kamelrechner.eu/it",
  "https://www.youtube.com/watch?v=hCuMWrfXG4E",
  "http://ronja.twibright.com/optar/",
  "https://pudding.cool/2022/08/censorship/",
  "https://stanleycenter.org/publications/osint-applied-ethics-workbook/",
  "http://canarytokens.org/generate",
  "https://rodneybrooks.com/the-seven-deadly-sins-of-predicting-the-future-of-ai/",
  "https://youtu.be/tl6u2NASUzU",
  "https://doordash.atlasobscura.com/a-wild-west-dish-reimagined-in-silver-lake/p/1",
  "https://www.theatlantic.com/science/archive/2021/05/evolution-butts/618915/",
  "https://explorersweb.com/man-who-bought-tropical-island/",
  "https://github.com/berthubert/googerteller",
  "https://www.hagerty.com/media/automotive-history/jerrycan-design-80-years-no-signs-retirement/",
  "https://www.kickscondor.com/",
  "https://content-parser.com/",
  "https://github.com/nadrad/h-m-m",
  "https://www.smithsonianmag.com/smart-news/what-deaths-more-300-reindeer-teach-us-about-circle-life-180970072/",
  "https://wikispeedruns.com/",
  "https://theforest.link/",
  "https://pointerpointer.com/",
  "https://danlark.org/2022/04/20/changing-stdsort-at-googles-scale-and-beyond/",
  "https://www.motionmountain.net/9lines.html",
  "https://oh-heck.dev/",
  "https://slate.com/culture/2022/07/best-death-scenes-movies-tv-books-theater-songs.html",
  "https://www.vice.com/en/article/akvqgk/why-we-use-lol-so-much",
  "https://www.youtube.com/watch?v=BQI-HwuSATQ",
  "https://www.youtube.com/watch?v=9q-W8JE8npw&list=PLmjRdmuNedkMXyiyJCD86cJ294hrakRu6&index=14",
  "https://en.m.wikipedia.org/wiki/Quine_(computing)",
  "https://github.com/mame/quine-relay",
  "https://allrgb.com/what-a-horrible-carpet",
  "https://www.youtube.com/watch?v=Igh-vBI2LXc",
  "https://github.com/SinaKhalili/Folders.py",
  "https://www.youtube.com/watch?v=-BP7DhHTU-I",
  "https://qntm.org/files/hatetris/hatetris.html",
  "https://kevingal.com/apps/slingshotchess.html",
  "https://www.openra.net/",
  "https://parmen.com/",
  "https://greenchess.net/variants.php?cat=7",
  "https://play.aidungeon.io/main/home",
  "https://hectorsalamanca.com/"
];

var rand = links[Math.floor(Math.random() * links.length)];
function Redirect() {
  window.location = rand;
}
