/* ============================================================
   PAWAN ENTERPRISE — i18n Engine
   Pure JavaScript · No dependencies · EN / HI
   ============================================================ */

(function () {
  'use strict';

  /* ── DICTIONARY ──────────────────────────────────────────── */
  const dict = {

    /* ── SHARED NAV ─────────────────────────────────────────── */
    'nav.about':          { en: 'About',           hi: 'हमारे बारे में' },
    'nav.businesses':     { en: 'Our Businesses',  hi: 'हमारे व्यवसाय' },
    'nav.clients':        { en: 'Clients',          hi: 'ग्राहक' },
    'nav.see-businesses': { en: 'See Our Businesses', hi: 'व्यवसाय देखें' },
    'nav.back-home':      { en: '← Back to Pawan Enterprise', hi: '← पवन एंटरप्राइज पर वापस' },
    'nav.our-bricks':     { en: 'Our Bricks',      hi: 'हमारी ईंटें' },
    'nav.how-we-work':    { en: 'How We Work',     hi: 'हम कैसे काम करते हैं' },
    'nav.photos':         { en: 'Photos',           hi: 'तस्वीरें' },
    'nav.enquire':        { en: 'Enquire',          hi: 'पूछताछ' },
    'nav.get-price':      { en: 'Get a Price',      hi: 'कीमत जानें' },
    'nav.fuel-services':  { en: 'Fuel & Services',  hi: 'ईंधन और सेवाएं' },
    'nav.get-in-touch':   { en: 'Get in Touch',     hi: 'संपर्क करें' },
    'nav.setup-account':  { en: 'Set Up an Account', hi: 'खाता बनाएं' },

    /* ── INDEX: HERO ─────────────────────────────────────────── */
    'hero.eyebrow':        { en: 'Brick Field · HP Fuel Pump · Aliganj, Sultanpur', hi: 'ईंट भट्ठा · HP पेट्रोल पंप · अलीगंज, सुल्तानपुर' },
    'hero.h1.line1':       { en: 'Built From',    hi: 'बना है' },
    'hero.h1.line2':       { en: 'The Ground',    hi: 'ज़मीन से' },
    'hero.h1.line3':       { en: 'Up.',            hi: 'ऊपर तक।' },
    'hero.desc':           { en: 'We make bricks. We sell fuel. Two businesses running in Sultanpur for decades — supplying what UP builds and drives with. No frills. Just reliable supply.', hi: 'हम ईंटें बनाते हैं। हम ईंधन बेचते हैं। दशकों से सुल्तानपुर में चल रहे दो व्यवसाय — यूपी के निर्माण और परिवहन की जरूरत पूरी करते हैं। कोई दिखावा नहीं। बस भरोसेमंद आपूर्ति।' },
    'hero.scroll':         { en: 'Scroll',         hi: 'नीचे जाएं' },

    /* ── INDEX: HUB CARDS ───────────────────────────────────── */
    'card.bricks.tag':   { en: 'Business 01',      hi: 'व्यवसाय 01' },
    'card.bricks.title': { en: 'Gramin Brick Field', hi: 'ग्रामीण ईंट भट्ठा' },
    'card.bricks.desc':  { en: 'Strong, reliable bricks fired in our kiln. Three grades. Delivered to your site within 60km. We also work with builders who need large orders.', hi: 'हमारे भट्ठे में पकी हुई मजबूत और भरोसेमंद ईंटें। तीन श्रेणियां। 60 किमी के अंदर आपकी साइट पर डिलीवरी। बड़े ऑर्डर वाले ठेकेदारों के साथ भी काम करते हैं।' },
    'card.bricks.cta':   { en: 'Visit Brick Field', hi: 'ईंट भट्ठा देखें' },

    'card.fuel.tag':     { en: 'Business 02',       hi: 'व्यवसाय 02' },
    'card.fuel.title':   { en: 'Pawan Filling Station', hi: 'पवन फिलिंग स्टेशन' },
    'card.fuel.desc':    { en: 'Official HP fuel pump. Open 6:00 AM – 10:00 PM. Petrol and diesel. Lower prices for businesses with delivery vehicles.', hi: 'आधिकारिक HP पेट्रोल पंप। सुबह 6:00 से रात 10:00 तक खुला। पेट्रोल और डीजल। डिलीवरी वाहन चलाने वाले व्यवसायों के लिए कम कीमत।' },
    'card.fuel.cta':     { en: 'Visit Filling Station', hi: 'पेट्रोल पंप देखें' },

    /* ── INDEX: TICKER ──────────────────────────────────────── */
    'ticker.index.1': { en: 'Brick Supply',               hi: 'ईंट आपूर्ति' },
    'ticker.index.2': { en: 'Official HP Fuel',           hi: 'आधिकारिक HP ईंधन' },
    'ticker.index.3': { en: 'Open 6:00 AM – 10:00 PM',    hi: 'सुबह 6:00 से रात 10:00 तक खुला' },
    'ticker.index.4': { en: 'Sultanpur, UP',             hi: 'सुल्तानपुर, यूपी' },
    'ticker.index.5': { en: 'We Also Work With Businesses', hi: 'व्यवसायों के साथ भी काम करते हैं' },

    /* ── INDEX: FOUNDER ─────────────────────────────────────── */
    'founder.photo-soon':    { en: 'Photo Coming Soon',  hi: 'फोटो जल्द आ रही है' },
    'founder.title-label':   { en: 'Founder · Pawan Enterprise', hi: 'संस्थापक · पवन एंटरप्राइज' },
    'founder.section-tag':   { en: 'About the Founder',  hi: 'संस्थापक के बारे में' },
    'founder.name':          { en: 'Shri Pawan Kumar Jaiswal', hi: 'श्री पवन कुमार जायसवाल' },
    'founder.quote.line1':   { en: 'Built on',             hi: 'बना है' },
    'founder.quote.em':      { en: 'Integrity.',           hi: 'ईमानदारी पर।' },
    'founder.quote.line2':   { en: 'Sustained by',         hi: 'टिका है' },
    'founder.quote.line3':   { en: 'Hard Work.',           hi: 'मेहनत से।' },
    'founder.bio1':          { en: 'A well-known figure in Sultanpur\'s civic and business life, the founder of Pawan Enterprise has deep roots in Aliganj. He started this business not for profit alone — but as a way to give back to the region he calls home.', hi: 'सुल्तानपुर के नागरिक और व्यावसायिक जीवन में एक जाना-माना नाम, पवन एंटरप्राइज के संस्थापक की अलीगंज में गहरी जड़ें हैं। उन्होंने यह व्यवसाय सिर्फ लाभ के लिए नहीं — बल्कि अपने क्षेत्र को कुछ वापस देने के लिए शुरू किया।' },
    'founder.bio2':          { en: 'From growing the Gramin Brick Field to serve Sultanpur\'s building boom, to running one of the area\'s most trusted HP fuel pumps — every decision has followed one rule: do what you say you will. That reputation keeps clients coming back year after year.', hi: 'ग्रामीण ईंट भट्ठे को सुल्तानपुर के निर्माण-उछाल के लिए बढ़ाने से लेकर, इलाके के सबसे भरोसेमंद HP पेट्रोल पंप को चलाने तक — हर फैसला एक नियम से हुआ: जो कहो, वो करो। यही साख ग्राहकों को साल-दर-साल वापस लाती है।' },
    'founder.stat1':         { en: 'Businesses Running',  hi: 'चलते व्यवसाय' },
    'founder.stat2':         { en: 'Brick Delivery Range', hi: 'ईंट डिलीवरी दायरा' },
    'founder.stat3':         { en: 'Repeat Clients',       hi: 'नियमित ग्राहक' },

    /* ── INDEX: BUSINESS BRIEF ──────────────────────────────── */
    'brief.tag':             { en: 'Our Two Businesses',   hi: 'हमारे दो व्यवसाय' },
    'brief.headline.1':      { en: 'We Make Bricks.',      hi: 'हम ईंटें बनाते हैं।' },
    'brief.headline.2':      { en: 'We Sell Fuel.',        hi: 'हम ईंधन बेचते हैं।' },
    'brief.bricks.tag':      { en: 'Brick Supply',         hi: 'ईंट आपूर्ति' },
    'brief.bricks.body':     { en: 'Strong, reliable bricks fired in our own kiln. Three grades to choose from. 8,00,000+ bricks per firing round. Checked for quality before they leave the yard. Delivered to your site.', hi: 'हमारे अपने भट्ठे में पकी हुई मजबूत और भरोसेमंद ईंटें। तीन श्रेणियों में से चुनें। हर राउंड में 8,00,000+ ईंटें। गुणवत्ता जांच के बाद ही यार्ड से निकलती हैं। आपकी साइट पर डिलीवरी।' },
    'brief.bricks.link':     { en: 'Go to Brick Field',   hi: 'ईंट भट्ठे पर जाएं' },
    'brief.fuel.tag':        { en: 'Official HP Fuel Pump', hi: 'आधिकारिक HP पेट्रोल पंप' },
    'brief.fuel.body':       { en: 'Licensed HP fuel station. Petrol and diesel. Open 6:00 AM to 10:00 PM daily. Set up an account if you run delivery vehicles — we offer lower prices for regular business customers.', hi: 'लाइसेंस प्राप्त HP ईंधन स्टेशन। पेट्रोल और डीजल। प्रतिदिन सुबह 6:00 से रात 10:00 तक खुला। डिलीवरी वाहन चलाने वाले खाता खुलवाएं — नियमित व्यावसायिक ग्राहकों के लिए कम कीमत।' },
    'brief.fuel.link':       { en: 'Go to Filling Station', hi: 'पेट्रोल पंप पर जाएं' },

    /* ── INDEX: TESTIMONIALS ────────────────────────────────── */
    'test.tag':              { en: 'What Clients Say',     hi: 'ग्राहक क्या कहते हैं' },
    'test.h2.1':             { en: 'They Don\'t',          hi: 'वे बदलते' },
    'test.h2.2':             { en: 'Switch.',              hi: 'नहीं।' },
    'test.h2.em':            { en: 'Ever.',                hi: 'कभी नहीं।' },
    'test.intro':            { en: 'Our clients aren\'t just customers — they\'ve been using us for years. Builders who\'ve sourced every single brick from us. Transport businesses who fill up nowhere else. That\'s what real trust looks like.', hi: 'हमारे ग्राहक सिर्फ खरीदार नहीं — वे वर्षों से हमारा उपयोग कर रहे हैं। ठेकेदार जो हर एक ईंट हमसे लेते हैं। परिवहन व्यवसाय जो कहीं और तेल नहीं भरवाते। यही असली भरोसा है।' },

    'test.1.tenure':         { en: 'Builder · Using Us Since 2009', hi: 'ठेकेदार · 2009 से हमारे ग्राहक' },
    'test.1.quote':          { en: '"Fifteen years. Three hundred projects. Every brick from Gramin Brick Field. When your supplier never lets you down, you don\'t look for another one."', hi: '"पंद्रह साल। तीन सौ प्रोजेक्ट। हर ईंट ग्रामीण ईंट भट्ठे से। जब सप्लायर कभी निराश न करे, तो दूसरा क्यों ढूंढें।"' },
    'test.1.role':           { en: 'Contractor · Sultanpur',          hi: 'ठेकेदार · सुल्तानपुर' },

    'test.2.tenure':         { en: 'School Fleet Owner · Refueling Since Opening Day', hi: 'स्कूल बेड़ा मालिक · स्थापना के पहले दिन से ग्राहक' },
    'test.2.quote':          { en: '"We run our entire fleet of school buses and vans through Pawan Filling Station. When transporting children every single morning, fuel purity and vehicle reliability are non-negotiable. From day one, their pure HP fuel, prompt service, and transparent billing have made them our trusted refueling partner."', hi: '"हम अपनी स्कूल बसों और वैनों के पूरे बेड़े के लिए पवन फिलिंग स्टेशन पर निर्भर हैं। हर सुबह बच्चों को ले जाते समय ईंधन की शुद्धता और वाहन की विश्वसनीयता से समझौता नहीं किया जा सकता। पहले दिन से ही उनका शुद्ध HP ईंधन और पारदर्शी बिलिंग हमें पूर्ण भरोसा देता है।"' },
    'test.2.role':           { en: 'Founder · Nirmaan Public School ↗', hi: 'संस्थापक · निर्माण पब्लिक स्कूल ↗' },

    'test.3.tenure':         { en: 'Brick Kiln & Fleet Owner · Refueling Since Opening Day', hi: 'ईंट भट्ठा व बेड़ा मालिक · स्थापना के पहले दिन से ग्राहक' },
    'test.3.quote':          { en: '"We buy fuel for our brick field delivery tractors and personal vehicles from Pawan Filling Station right from the start. Having a dedicated business account setup makes monthly billing and operations smooth, transparent, and completely hassle-free."', hi: '"हम शुरुआत से ही अपने ईंट भट्ठे के डिलीवरी ट्रैक्टरों और व्यक्तिगत वाहनों के लिए पवन फिलिंग स्टेशन से ईंधन खरीदते हैं। एक समर्पित व्यावसायिक खाता सेटअप होने से मासिक बिलिंग और संचालन सुचारू, पारदर्शी और पूरी तरह परेशानी मुक्त हो जाता है।"' },
    'test.3.role':           { en: 'Proprietor · AKJ Brick Field',   hi: 'प्रोप्राइटर · AKJ ईंट भट्ठा' },

    'test.4.tenure':         { en: 'Regular Customer · Pawan Filling Station · Refueling Since Day One', hi: 'नियमित ग्राहक · पवन फिलिंग स्टेशन · पहले दिन से ग्राहक' },
    'test.4.quote':          { en: '"Open daily from 6am to 10pm, easy to pay, HP-quality fuel every time. Pawan Filling Station has never disappointed us when we needed it. That matters when your fleet is on the road every day."', hi: '"प्रतिदिन सुबह 6 से रात 10 बजे तक खुला, आसान भुगतान, हर बार HP-गुणवत्ता का ईंधन। जब भी जरूरत पड़ी, पवन फिलिंग स्टेशन ने कभी निराश नहीं किया।"' },
    'test.4.role':           { en: 'Owner · Tiwari Transport Co.',   hi: 'मालिक · तिवारी ट्रांसपोर्ट कं.' },

    /* ── INDEX: FOOTER ──────────────────────────────────────── */
    'footer.index.brand-tag':  { en: 'Sultanpur, UP · Est. Since Generations', hi: 'सुल्तानपुर, यूपी · पुराना घराना' },
    'footer.index.brand-desc': { en: 'Two businesses, one name. Bricks and fuel for Sultanpur\'s builders and drivers.', hi: 'दो व्यवसाय, एक नाम। सुल्तानपुर के निर्माताओं और ड्राइवरों के लिए ईंट और ईंधन।' },
    'footer.col.businesses':   { en: 'Our Businesses',    hi: 'हमारे व्यवसाय' },
    'footer.col.contact':      { en: 'Contact',            hi: 'संपर्क' },
    'footer.link.about-founder': { en: 'About the Founder', hi: 'संस्थापक के बारे में' },
    'footer.link.what-clients': { en: 'What Clients Say',  hi: 'ग्राहक क्या कहते हैं' },
    'footer.hp-disclaimer':    { en: 'HP is a registered brand of', hi: 'HP, हिंदुस्तान पेट्रोलियम कार्पोरेशन लि. का पंजीकृत ब्रांड है।' },

    /* ── BRICKS: HERO ───────────────────────────────────────── */
    'bricks.hero.parent':    { en: 'Pawan Enterprise — Business 01', hi: 'पवन एंटरप्राइज — व्यवसाय 01' },
    'bricks.hero.eyebrow':   { en: 'Gramin Brick Field · Hakuha kokhipur, Sultanpur', hi: 'ग्रामीण ईंट भट्ठा · हकूहा कोखीपुर, सुल्तानपुर' },
    'bricks.hero.h1.1':      { en: 'Fired',        hi: 'पकाई गई' },
    'bricks.hero.h1.2':      { en: 'Hard.',         hi: 'मजबूत।' },
    'bricks.hero.h1.3':      { en: 'Delivered',     hi: 'पहुंचाई गई' },
    'bricks.hero.h1.4':      { en: 'Fast.',          hi: 'जल्दी।' },
    'bricks.hero.desc':      { en: 'Our kiln runs continuously. Three brick grades. 8,00,000+ bricks per round. Every batch is checked before it leaves — no rejects reach your site.', hi: 'हमारा भट्ठा लगातार चलता है। तीन ईंट श्रेणियां। हर राउंड में 8,00,000+ ईंटें। हर बैच की जांच होती है जाने से पहले — कोई खराब ईंट आपकी साइट तक नहीं पहुंचती।' },
    'bricks.stat.1':         { en: 'Bricks per Round',  hi: 'प्रति राउंड ईंटें' },
    'bricks.stat.2':         { en: 'Brick Grades',       hi: 'ईंट श्रेणियां' },
    'bricks.stat.3':         { en: 'Delivery Range',     hi: 'डिलीवरी दायरा' },
    'bricks.stat.4':         { en: 'Quality Checked',    hi: 'गुणवत्ता जाँची' },

    /* ── BRICKS: TICKER ─────────────────────────────────────── */
    'ticker.bricks.1': { en: 'Awwal Bricks',       hi: 'अव्वल ईंटें' },
    'ticker.bricks.2': { en: 'Doma Bricks',        hi: 'दोमा ईंटें' },
    'ticker.bricks.3': { en: 'Pela Bricks',        hi: 'पीला ईंटें' },
    'ticker.bricks.4': { en: 'Tamda Bricks',       hi: 'टामड़ा ईंटें' },
    'ticker.bricks.5': { en: 'Large Orders Welcome', hi: 'बड़े ऑर्डर का स्वागत' },
    'ticker.bricks.6': { en: 'Delivered Within 60km', hi: '60 किमी में डिलीवरी' },

    /* ── BRICKS: PRODUCTS ───────────────────────────────────── */
    'bricks.prod.tag':         { en: 'Our Bricks',     hi: 'हमारी ईंटें' },
    'bricks.prod.h2.1':        { en: 'Grade.',          hi: 'श्रेणी।' },
    'bricks.prod.h2.2':        { en: 'Strength.',       hi: 'मजबूती।' },
    'bricks.prod.h2.3':        { en: 'Reliability.',    hi: 'भरोसा।' },
    'bricks.prod.body':        { en: 'Every brick here is made from good clay, fired properly, and checked before it leaves the yard. We don\'t sell rejects. Whether you\'re building a home or a multi-storey block, we have a grade to match.', hi: 'यहाँ की हर ईंट अच्छी मिट्टी से बनती है, सही तरह से पकती है, और यार्ड छोड़ने से पहले जांची जाती है। हम खराब माल नहीं बेचते। घर हो या बहुमंजिली इमारत — हमारे पास आपकी जरूरत की श्रेणी है।' },
    'bricks.spec.1.label':     { en: 'Bricks per Round', hi: 'प्रति राउंड ईंटें' },
    'bricks.spec.1.desc':      { en: 'High output so we can meet large project orders without delay.', hi: 'अधिक उत्पादन ताकि बड़े प्रोजेक्ट के ऑर्डर बिना देरी के पूरे हो सकें।' },
    'bricks.spec.2.label':     { en: 'Brick Grades',     hi: 'ईंट श्रेणियां' },
    'bricks.spec.2.desc':      { en: 'Standard, First Class, and Heavy Duty — pick what your job needs.', hi: 'सामान्य, प्रथम श्रेणी और भारी-ड्यूटी — अपने काम के अनुसार चुनें।' },
    'bricks.spec.3.label':     { en: 'Delivery Range',   hi: 'डिलीवरी दायरा' },
    'bricks.spec.3.desc':      { en: 'We deliver to Sultanpur and nearby areas.', hi: 'हम सुल्तानपुर और आसपास के क्षेत्रों में डिलीवरी करते हैं।' },
    'bricks.spec.4.label':     { en: 'Quality Checked',  hi: 'गुणवत्ता जाँची' },
    'bricks.spec.4.desc':      { en: 'Every batch is inspected before loading. No substandard bricks leave the yard.', hi: 'लोडिंग से पहले हर बैच की जांच होती है। कोई घटिया ईंट यार्ड से नहीं निकलती।' },

    'bricks.type.1.title':     { en: 'Awwal Bricks (First Class / Grade-A)',   hi: 'अव्वल ईंटें (प्रथम श्रेणी / ग्रेड-A)' },
    'bricks.type.1.desc':      { en: 'The premium choice for structural strength. Perfect rectangular shape, deep copper-red color, and highly moisture resistant. Best for load-bearing walls and exposed brickwork.', hi: 'मजबूती के लिए प्रीमियम विकल्प। तीखे किनारों के साथ परफेक्ट आयताकार आकार। गहरा तांबे जैसा लाल रंग। नमी प्रतिरोधी। लोड-बेयरिंग दीवारों और खुली ईंट की चिनाई के लिए सर्वोत्तम।' },
    'bricks.type.2.title':     { en: 'Doma Bricks (Second Class / Grade-B)', hi: 'दोमा ईंटें (द्वितीय श्रेणी / ग्रेड-B)' },
    'bricks.type.2.desc':      { en: 'The smart choice for cost-effective strength. Slightly irregular shape but excellent structural durability. Best for interior partition walls and plastered masonry.', hi: 'किफायती मजबूती के लिए स्मार्ट विकल्प। थोड़ा अनियमित आकार, लेकिन बेहतरीन संरचनात्मक टिकाऊपन। भीतरी विभाजन दीवारों और प्लास्टर वाली चिनाई के लिए सर्वोत्तम।' },
    'bricks.type.3.title':     { en: 'Pela Bricks (Third Class / Under-Burnt)', hi: 'पीला ईंटें (तृतीय श्रेणी / कम पकी)' },
    'bricks.type.3.desc':      { en: 'The budget option for non-load bearing work. Yellowish-orange color with high water absorption. Best for temporary structures, flooring bases, or ground leveling.', hi: 'बिना लोड वाले काम के लिए बजट विकल्प। पीला-नारंगी रंग और उच्च जल अवशोषण। अस्थायी संरचनाओं, फर्श के आधार या ज़मीन समतल करने के लिए सर्वोत्तम।' },
    'bricks.type.4.title':     { en: 'Tamda Bricks (Over-Burnt / Vitrified)', hi: 'टामड़ा ईंटें (अधिक पकी / विट्रीफाइड)' },
    'bricks.type.4.desc':      { en: 'The heavy-duty water-resistant material. Dark purplish-black, extremely hard and dense. Best for foundations, waterlogged areas, and road aggregate.', hi: 'अत्यधिक मजबूत और जल प्रतिरोधी सामग्री। गहरा बैंगनी-काला, बेहद सख्त और घना। लगभग शून्य जल अवशोषण। नींव, जलभराव वाले क्षेत्रों और सड़क गिट्टी के लिए सर्वोत्तम।' },
    
    'bricks.table.title':      { en: 'Quick Comparison Guide', hi: 'त्वरित तुलना गाइड' },
    'bricks.table.h.type':     { en: 'Brick Type', hi: 'ईंट का प्रकार' },
    'bricks.table.h.strength': { en: 'Strength', hi: 'मजबूती' },
    'bricks.table.h.water':    { en: 'Water Resistance', hi: 'जल प्रतिरोध' },
    'bricks.table.h.finish':   { en: 'Surface Finish', hi: 'सतह की बनावट' },
    'bricks.table.h.ideal':    { en: 'Ideal Application', hi: 'आदर्श उपयोग' },
    
    'bricks.table.r1.type':    { en: 'Awwal', hi: 'अव्वल' },
    'bricks.table.r1.strength':{ en: 'Excellent', hi: 'उत्कृष्ट' },
    'bricks.table.r1.water':   { en: 'Excellent', hi: 'उत्कृष्ट' },
    'bricks.table.r1.finish':  { en: 'Smooth & Sharp', hi: 'चिकनी और तीखी' },
    'bricks.table.r1.ideal':   { en: 'Main Walls & Pillars', hi: 'मुख्य दीवारें और खंभे' },
    
    'bricks.table.r2.type':    { en: 'Doma', hi: 'दोमा' },
    'bricks.table.r2.strength':{ en: 'Good', hi: 'अच्छी' },
    'bricks.table.r2.water':   { en: 'Good', hi: 'अच्छी' },
    'bricks.table.r2.finish':  { en: 'Slightly Rough', hi: 'थोड़ी खुरदरी' },
    'bricks.table.r2.ideal':   { en: 'Plastered Walls', hi: 'प्लास्टर वाली दीवारें' },
    
    'bricks.table.r3.type':    { en: 'Pela', hi: 'पीला' },
    'bricks.table.r3.strength':{ en: 'Low', hi: 'कम' },
    'bricks.table.r3.water':   { en: 'Poor', hi: 'खराब' },
    'bricks.table.r3.finish':  { en: 'Soft & Dull', hi: 'नरम और फीकी' },
    'bricks.table.r3.ideal':   { en: 'Flooring Base Only', hi: 'केवल फर्श का आधार' },
    
    'bricks.table.r4.type':    { en: 'Tamda', hi: 'टामड़ा' },
    'bricks.table.r4.strength':{ en: 'Extreme', hi: 'अत्यधिक' },
    'bricks.table.r4.water':   { en: 'Waterproof', hi: 'वाटरप्रूफ' },
    'bricks.table.r4.finish':  { en: 'Irregular/Twisted', hi: 'अनियमित/मुड़ी हुई' },
    'bricks.table.r4.ideal':   { en: 'Foundations & Roads', hi: 'नींव और सड़कें' },

    /* ── BRICKS: PROCESS ────────────────────────────────────── */
    'process.tag':       { en: 'How We Work',              hi: 'हम कैसे काम करते हैं' },
    'process.h2':        { en: 'Clay to Building Site.',   hi: 'मिट्टी से निर्माण स्थल तक।' },
    'process.sub':       { en: 'From digging the clay to dropping bricks at your gate — the whole process, explained simply.', hi: 'मिट्टी खोदने से लेकर आपके गेट पर ईंटें पहुंचाने तक — पूरी प्रक्रिया, सरल भाषा में।' },
    'process.1.title':   { en: 'We Start With Good Clay',  hi: 'हम अच्छी मिट्टी से शुरू करते हैं' },
    'process.1.desc':    { en: 'We source high-quality clay from controlled sites nearby. It\'s mixed and prepared until it has the right consistency for shaping.', hi: 'हम नज़दीकी नियंत्रित स्थलों से उच्च गुणवत्ता की मिट्टी लाते हैं। इसे तब तक मिलाया और तैयार किया जाता है जब तक इसमें सही स्थिरता न आ जाए।' },
    'process.2.title':   { en: 'We Shape Every Brick the Same', hi: 'हम हर ईंट एक जैसी बनाते हैं' },
    'process.2.desc':    { en: 'Clay goes through a machine press that cuts each brick to exactly the same size. Consistency here means easier building for you later.', hi: 'मिट्टी मशीन प्रेस से गुज़रती है जो हर ईंट को बिल्कुल एक ही आकार में काटती है। यहाँ की एकरूपता बाद में आपके निर्माण को आसान बनाती है।' },
    'process.3.title':   { en: 'We Fire Them Properly',    hi: 'हम उन्हें सही तरह से पकाते हैं' },
    'process.3.desc':    { en: 'Bricks go into our continuous kiln and are fired at 900–1100°C for 48 to 72 hours. Temperature is watched closely throughout for even strength.', hi: 'ईंटें हमारे निरंतर भट्ठे में जाती हैं और 48 से 72 घंटों तक 900–1100°C पर पकाई जाती हैं। एकसमान मजबूती के लिए तापमान पूरे समय करीब से देखा जाता है।' },
    'process.4.title':   { en: 'We Check, Then Deliver',   hi: 'हम जांचते हैं, फिर पहुंचाते हैं' },
    'process.4.desc':    { en: 'Once cooled, bricks are inspected, sorted by grade, and loaded onto trucks. Delivered directly to your site within the time we agreed.', hi: 'ठंडा होने के बाद, ईंटों की जांच की जाती है, श्रेणी के अनुसार छांटी जाती हैं और ट्रकों पर लोड की जाती हैं। तय समय के भीतर सीधे आपकी साइट पर पहुंचाई जाती हैं।' },

    /* ── BRICKS: GALLERY ────────────────────────────────────── */
    'bricks.gallery.tag':       { en: 'Field Photos',                  hi: 'भट्ठे की तस्वीरें' },
    'bricks.gallery.h2.1':      { en: 'The Yard.',                     hi: 'यार्ड।' },
    'bricks.gallery.h2.2':      { en: 'The Kiln.',                     hi: 'भट्ठा।' },
    'bricks.gallery.h2.3':      { en: 'The Work.',                     hi: 'काम।' },
    'bricks.gallery.sub':       { en: 'Real photos from the field. No stock images. This is where your bricks come from.', hi: 'भट्ठे की असली तस्वीरें। कोई स्टॉक इमेज नहीं। यहीं से आपकी ईंटें आती हैं।' },
    'bricks.gallery.1.label':   { en: 'Kiln in Operation',            hi: 'भट्ठा चालू' },
    'bricks.gallery.1.sub':     { en: '900–1100°C · Continuous Fire', hi: '900–1100°C · निरंतर आग' },
    'bricks.gallery.2.label':   { en: 'Storage Yard',                 hi: 'भंडारण यार्ड' },
    'bricks.gallery.2.sub':     { en: 'Sorted by Grade · Ready to Ship', hi: 'श्रेणी अनुसार · भेजने को तैयार' },
    'bricks.gallery.3.label':   { en: 'Shaping Equipment',            hi: 'आकार देने का उपकरण' },
    'bricks.gallery.3.sub':     { en: 'Every Brick Cut the Same Size', hi: 'हर ईंट एक ही आकार में' },
    'bricks.gallery.4.label':   { en: 'Ready for Delivery',           hi: 'डिलीवरी के लिए तैयार' },
    'bricks.gallery.4.sub':     { en: 'Direct to Your Site · Up to 60km', hi: 'सीधे आपकी साइट · 60 किमी तक' },

    /* ── SHARED: ENQUIRY / FORM ─────────────────────────────── */
    'form.section-tag':        { en: 'Get in Touch',        hi: 'संपर्क करें' },
    'form.bricks.heading.em':  { en: 'Bricks.',             hi: 'ईंटें।' },
    'form.bricks.note':        { en: 'Builder, contractor, or developer — tell us what you need and we\'ll get back to you within one working day.', hi: 'ठेकेदार, निर्माणकर्ता, या डेवलपर — हमें बताएं कि आपको क्या चाहिए और हम एक कार्यदिवस के भीतर जवाब देंगे।' },
    'form.fuel.heading.em':    { en: 'Fuel.',               hi: 'ईंधन।' },
    'form.fuel.note':          { en: 'Want to set up an account for your business vehicles? Or just have a question? Fill in the form and we\'ll get back to you fast.', hi: 'अपने व्यावसायिक वाहनों के लिए खाता खुलवाना चाहते हैं? या कोई सवाल है? फॉर्म भरें और हम जल्द जवाब देंगे।' },
    'form.label.phone':        { en: 'Phone',               hi: 'फोन' },
    'form.label.location':     { en: 'Location',            hi: 'पता' },
    'form.label.email-addr':   { en: 'Email',               hi: 'ईमेल' },
    'form.label.home':         { en: 'Home',                hi: 'होमपेज' },
    'form.inp.name':           { en: 'Your Name',           hi: 'आपका नाम' },
    'form.inp.company':        { en: 'Company / Firm (if any)', hi: 'कंपनी / फर्म (यदि हो)' },
    'form.inp.phone':          { en: 'Phone Number',        hi: 'फोन नंबर' },
    'form.inp.email':          { en: 'Email Address (optional)', hi: 'ईमेल पता (वैकल्पिक)' },
    'form.inp.delivery-loc':   { en: 'Delivery Location',   hi: 'डिलीवरी स्थान' },
    'form.inp.when':           { en: 'When Do You Need Them?', hi: 'कब चाहिए?' },
    'form.inp.brick-type':     { en: 'Which Type of Brick?', hi: 'कौन सी ईंट चाहिए?' },
    'form.inp.how-many':       { en: 'How Many Bricks?',    hi: 'कितनी ईंटें?' },
    'form.inp.message.bricks': { en: 'Tell Us About Your Project', hi: 'अपने प्रोजेक्ट के बारे में बताएं' },
    'form.inp.message.fuel':   { en: 'Your Message',        hi: 'आपका संदेश' },
    'form.inp.enquiry-type':   { en: 'What\'s Your Enquiry About?', hi: 'किस बारे में पूछना है?' },
    'form.inp.vehicle-count':  { en: 'How Many Vehicles? (if applicable)', hi: 'कितने वाहन? (यदि लागू हो)' },
    'form.inp.vehicle-type':   { en: 'What Type of Vehicles Do You Operate? (optional)', hi: 'आप किस तरह के वाहन चलाते हैं? (वैकल्पिक)' },
    'form.check.label.bricks': { en: 'I\'d also like to know about:', hi: 'मैं यह भी जानना चाहूँगा/चाहूँगी:' },
    'form.check.pricing':      { en: 'Current prices',      hi: 'मौजूदा कीमतें' },
    'form.check.delivery':     { en: 'Delivery schedule',   hi: 'डिलीवरी समय-सारणी' },
    'form.check.grades':       { en: 'Brick types and sizes', hi: 'ईंट के प्रकार और आकार' },
    'form.check.bulk':         { en: 'Pricing for large orders', hi: 'बड़े ऑर्डर के लिए कीमत' },
    'form.check.label.fuel':   { en: 'I\'d also like to know about:', hi: 'मैं यह भी जानना चाहूँगा/चाहूँगी:' },
    'form.check.fuel-rates':   { en: 'Lower prices for business owners', hi: 'व्यवसाय मालिकों के लिए कम कीमत' },
    'form.check.rewards':      { en: 'Rewards for regular customers', hi: 'नियमित ग्राहकों के लिए इनाम' },
    'form.check.billing':      { en: 'Digital billing setup',  hi: 'डिजिटल बिलिंग व्यवस्था' },
    'form.check.24hr':         { en: 'Confirming operating hours (6:00 AM – 10:00 PM)', hi: 'कार्य समय की पुष्टि (सुबह 6:00 – रात 10:00)' },
    'form.select.brick.awwal': { en: 'Awwal Bricks',       hi: 'अव्वल ईंट' },
    'form.select.brick.doma':  { en: 'Doma Bricks',        hi: 'दोमा ईंट' },
    'form.select.brick.pela':  { en: 'Pela Bricks',        hi: 'पीला ईंट' },
    'form.select.brick.tamda': { en: 'Tamda Bricks',       hi: 'टामड़ा ईंट' },
    'form.select.brick.mixed': { en: 'More Than One Type', hi: 'एक से अधिक प्रकार' },
    'form.select.vol.u10k':    { en: 'Under 10,000',         hi: '10,000 से कम' },
    'form.select.vol.10k50k':  { en: '10,000 – 50,000',      hi: '10,000 – 50,000' },
    'form.select.vol.50k1L':   { en: '50,000 – 1,00,000',    hi: '50,000 – 1,00,000' },
    'form.select.vol.1L':      { en: 'More Than 1,00,000',   hi: '1,00,000 से अधिक' },
    'form.select.when.urgent': { en: 'Very soon (within 1 week)', hi: 'बहुत जल्द (1 हफ्ते के अंदर)' },
    'form.select.when.2w':     { en: 'Within 2 weeks',       hi: '2 हफ्तों के अंदर' },
    'form.select.when.1m':     { en: 'Within 1 month',       hi: '1 महीने के अंदर' },
    'form.select.when.flex':   { en: 'I\'m flexible',        hi: 'कोई जल्दी नहीं' },
    'form.select.fuel.account':{ en: 'Set up a business account', hi: 'व्यावसायिक खाता खोलना' },
    'form.select.fuel.bulk':   { en: 'Bulk diesel for multiple vehicles', hi: 'कई वाहनों के लिए बल्क डीजल' },
    'form.select.fuel.general':{ en: 'General question', hi: 'सामान्य प्रश्न' },
    'form.select.fuel.prices': { en: 'Today\'s fuel prices', hi: 'आज की ईंधन कीमतें' },
    'form.select.fuel.timings':{ en: 'Station timings', hi: 'स्टेशन का समय' },
    'form.select.fuel.other':  { en: 'Something else',       hi: 'कुछ और' },
    'form.select.veh.1-5':     { en: '1–5 vehicles',         hi: '1–5 वाहन' },
    'form.select.veh.6-20':    { en: '6–20 vehicles',        hi: '6–20 वाहन' },
    'form.select.veh.21-50':   { en: '21–50 vehicles',       hi: '21–50 वाहन' },
    'form.select.veh.50plus':  { en: 'More than 50 vehicles', hi: '50 से अधिक वाहन' },
    'form.select.veh.na':      { en: 'Not applicable',       hi: 'लागू नहीं' },
    'form.btn.send-enquiry':   { en: 'Send Enquiry',         hi: 'पूछताछ भेजें' },
    'form.btn.send-msg':       { en: 'Send Message',         hi: 'संदेश भेजें' },
    'form.reply-note':         { en: 'We reply within one working day.', hi: 'हम एक कार्यदिवस में जवाब देते हैं।' },
    'form.success.h3':         { en: 'Message Received.',    hi: 'संदेश मिल गया।' },
    'form.success.bricks.p':   { en: 'We\'ll get back to you within one working day.\nThank you for reaching out to Gramin Brick Field.', hi: 'हम एक कार्यदिवस के भीतर आपसे संपर्क करेंगे।\nग्रामीण ईंट भट्ठे से संपर्क करने के लिए धन्यवाद।' },
    'form.success.fuel.p':     { en: 'We\'ll get back to you within one working day.\nThank you for reaching out to Pawan Filling Station.', hi: 'हम एक कार्यदिवस के भीतर आपसे संपर्क करेंगे।\nपवन फिलिंग स्टेशन से संपर्क करने के लिए धन्यवाद।' },

    /* ── BRICKS: FOOTER ─────────────────────────────────────── */
    'bricks.footer.brand-tag': { en: 'A Pawan Enterprise Business · Sultanpur, UP', hi: 'पवन एंटरप्राइज का व्यवसाय · सुल्तानपुर, यूपी' },
    'bricks.footer.brand-desc':{ en: 'Reliable kiln-fired bricks in three grades. Delivered to your site within 60km.', hi: 'तीन श्रेणियों में भरोसेमंद भट्ठे की ईंटें। 60 किमी के अंदर आपकी साइट पर डिलीवरी।' },
    'footer.col.quick-links':  { en: 'Quick Links',          hi: 'त्वरित लिंक' },
    'footer.col.je':           { en: 'Pawan Enterprise',  hi: 'पवन एंटरप्राइज' },
    'footer.link.back-home':   { en: '← Back to Home',      hi: '← होमपेज पर वापस' },
    'footer.link.about-founder2': { en: 'About the Founder', hi: 'संस्थापक के बारे में' },

    /* ── FUEL: HERO ─────────────────────────────────────────── */
    'fuel.hero.parent':    { en: 'Pawan Enterprise — Business 02', hi: 'पवन एंटरप्राइज — व्यवसाय 02' },
    'fuel.hero.eyebrow':   { en: 'Pawan Filling Station · Official HP Pump · Sultanpur', hi: 'पवन फिलिंग स्टेशन · आधिकारिक HP पंप · सुल्तानपुर' },
    'fuel.hero.h1.1':      { en: 'HP',          hi: 'HP' },
    'fuel.hero.h1.2':      { en: 'Fuel.',        hi: 'ईंधन।' },
    'fuel.hero.h1.3':      { en: 'Daily',        hi: 'दैनिक' },
    'fuel.hero.h1.4':      { en: 'Service.',     hi: 'सेवा।' },
    'fuel.hero.desc':      { en: 'Official HP fuel station. Petrol and diesel. Open daily from 6:00 AM to 10:00 PM. If you run delivery vehicles, talk to us about an account — we offer lower prices for regular business customers.', hi: 'आधिकारिक HP ईंधन स्टेशन। पेट्रोल और डीजल। प्रतिदिन सुबह 6:00 से रात 10:00 तक खुला। डिलीवरी वाहन चलाने वाले खाते के बारे में बात करें — नियमित व्यावसायिक ग्राहकों के लिए कम कीमत।' },
    'fuel.stat.1':         { en: '6:00 AM – 10:00 PM Daily', hi: 'प्रतिदिन सुबह 6:00 – रात 10:00' },
    'fuel.stat.2':         { en: 'Fuel Types',        hi: 'ईंधन के प्रकार' },
    'fuel.stat.3':         { en: 'HP Franchise',      hi: 'HP फ्रेंचाइजी' },
    'fuel.stat.4':         { en: 'HP Quality Guarantee', hi: 'HP गुणवत्ता गारंटी' },

    /* ── FUEL: TICKER ───────────────────────────────────────── */
    'ticker.fuel.1': { en: 'Diesel Always Available',   hi: 'डीजल हमेशा उपलब्ध' },
    'ticker.fuel.2': { en: 'Petrol Always Available',   hi: 'पेट्रोल हमेशा उपलब्ध' },
    'ticker.fuel.3': { en: 'Open 6:00 AM – 10:00 PM',    hi: 'सुबह 6:00 से रात 10:00 तक खुला' },
    'ticker.fuel.4': { en: 'Lower Prices for Businesses', hi: 'व्यवसायों के लिए कम कीमत' },
    'ticker.fuel.5': { en: 'Rewards for Regular Customers', hi: 'नियमित ग्राहकों के लिए इनाम' },

    /* ── FUEL: SERVICES ─────────────────────────────────────── */
    'fuel.badge':          { en: 'Official HP Fuel Pump · Sultanpur, UP', hi: 'आधिकारिक HP पेट्रोल पंप · सुल्तानपुर, यूपी' },
    'fuel.h2.1':           { en: 'HP',            hi: 'HP' },
    'fuel.h2.2':           { en: 'Quality.',       hi: 'गुणवत्ता।' },
    'fuel.h2.3':           { en: 'Every',          hi: 'हर' },
    'fuel.h2.4':           { en: 'Fill.',          hi: 'भराई।' },
    'fuel.body':           { en: 'Pawan Filling Station is a licensed HP pump serving private cars, commercial trucks, and business vehicles. Same fuel quality as any HP station in India — backed by regular HP testing. Run by a local name you can trust.', hi: 'पवन फिलिंग स्टेशन एक लाइसेंस प्राप्त HP पंप है जो निजी कारों, व्यावसायिक ट्रकों और व्यावसायिक वाहनों की सेवा करता है। भारत के किसी भी HP स्टेशन जैसी ईंधन गुणवत्ता — नियमित HP जांच द्वारा समर्थित। एक स्थानीय नाम द्वारा संचालित जिस पर आप भरोसा कर सकते हैं।' },
    'fuel.amenity.1':      { en: 'Open 6:00 AM – 10:00 PM',     hi: 'सुबह 6:00 से रात 10:00 तक खुला' },
    'fuel.amenity.2':      { en: 'Pay via HP Pay / DT Plus',     hi: 'HP Pay / DT Plus से भुगतान' },
    'fuel.amenity.3':      { en: 'Air and water point',          hi: 'हवा और पानी उपलब्ध' },
    'fuel.amenity.4':      { en: 'Pay by card or UPI',           hi: 'कार्ड या UPI से भुगतान' },
    'fuel.amenity.5':      { en: 'Rewards for regular customers', hi: 'नियमित ग्राहकों के लिए इनाम' },
    'fuel.amenity.6':      { en: 'Accounts for businesses',      hi: 'व्यवसायों के लिए खाते' },
    'fuel.diesel.title':   { en: 'Diesel',                 hi: 'डीजल' },
    'fuel.diesel.desc':    { en: 'HP\'s premium diesel, designed for trucks, heavy machinery, and long-distance drivers. Available for business accounts at lower rates.', hi: 'HP का प्रीमियम डीजल, ट्रकों, भारी मशीनरी और लंबी दूरी के चालकों के लिए। व्यावसायिक खातों के लिए कम दरों पर उपलब्ध।' },
    'fuel.petrol.title':   { en: 'Petrol',                 hi: 'पेट्रोल' },
    'fuel.petrol.desc':    { en: 'HP\'s premium petrol for cars and bikes. Clean-burning formula that\'s easier on your engine and improves fuel economy over time.', hi: 'कारों और बाइकों के लिए HP का प्रीमियम पेट्रोल। स्वच्छ जलने वाला फॉर्मूला जो इंजन के लिए बेहतर है और समय के साथ ईंधन दक्षता में सुधार करता है।' },
    'fuel.lubricants.title': { en: 'HP Lubricants',        hi: 'HP लुब्रिकेंट्स' },
    'fuel.lubricants.desc':  { en: 'High-quality engine oils, greases, and coolants for all vehicle types. Keep your engine running smoothly and extend its lifespan.', hi: 'सभी प्रकार के वाहनों के लिए उच्च गुणवत्ता वाले इंजन तेल, ग्रीस और कूलेंट। अपने इंजन को सुचारू रूप से चालू रखें और इसका जीवनकाल बढ़ाएं।' },
    'fuel.hp-brand.strong':{ en: 'Authorised HP Petroleum Outlet', hi: 'अधिकृत HP पेट्रोलियम आउटलेट' },
    'fuel.hp-brand.p':     { en: 'This station is licensed under the Hindustan Petroleum Retailer Agreement. All fuel meets the Bureau of Indian Standards quality specifications and is regularly tested by HP\'s quality team.', hi: 'यह स्टेशन हिंदुस्तान पेट्रोलियम रिटेलर समझौते के तहत लाइसेंस प्राप्त है। सभी ईंधन भारतीय मानक ब्यूरो की गुणवत्ता विशिष्टताओं को पूरा करता है और HP की गुणवत्ता टीम द्वारा नियमित रूप से परीक्षण किया जाता है।' },

    /* ── FUEL: GALLERY ──────────────────────────────────────── */
    'fuel.gallery.tag':       { en: 'Station Photos',              hi: 'स्टेशन की तस्वीरें' },
    'fuel.gallery.h2.1':      { en: 'The Station.',                hi: 'स्टेशन।' },
    'fuel.gallery.h2.2':      { en: 'Day & Night.',                hi: 'दिन और रात।' },
    'fuel.gallery.sub':       { en: 'Daily 6:00 AM to 10:00 PM. Here\'s what Pawan Station looks like.', hi: 'प्रतिदिन सुबह 6:00 से रात 10:00 तक। पवन स्टेशन ऐसा दिखता है।' },
    'fuel.gallery.1.label':   { en: 'During the Day',             hi: 'दिन के समय' },
    'fuel.gallery.1.sub':     { en: 'Pawan Filling Station · Sultanpur', hi: 'पवन फिलिंग स्टेशन · सुल्तानपुर' },
    'fuel.gallery.2.label':   { en: 'Through the Night',          hi: 'रात के दौरान' },
    'fuel.gallery.2.sub':     { en: '6:00 AM – 10:00 PM · Daily Service', hi: 'सुबह 6:00 – रात 10:00 · दैनिक सेवा' },
    'fuel.gallery.3.label':   { en: 'Trucks & Businesses',        hi: 'ट्रक और व्यवसाय' },
    'fuel.gallery.3.sub':     { en: 'Wide lanes · Easy access',   hi: 'चौड़ी लेन · आसान पहुँच' },
    'fuel.gallery.4.label':   { en: 'HP Branded',                 hi: 'HP ब्रांडेड' },
    'fuel.gallery.4.sub':     { en: 'Official Franchise · Verified', hi: 'आधिकारिक फ्रेंचाइजी · सत्यापित' },

    /* ── FUEL: FOOTER ───────────────────────────────────────── */
    'fuel.footer.brand-tag':  { en: 'A Pawan Enterprise Business · Official HP Fuel Pump', hi: 'पवन एंटरप्राइज का व्यवसाय · आधिकारिक HP पेट्रोल पंप' },
    'fuel.footer.brand-desc': { en: 'HP petrol and diesel. Open 6:00 AM – 10:00 PM daily. Accounts for businesses with delivery vehicles.', hi: 'HP पेट्रोल और डीजल। सुबह 6:00 से रात 10:00 तक खुला।' },
    'fuel.footer.link.setup': { en: 'Set Up an Account',         hi: 'खाता बनाएं' },
  };

  /* ── ENGINE ─────────────────────────────────────────────── */
  const STORAGE_KEY = 'je_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function translate(lang) {
    document.documentElement.lang = lang;
    const els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      const text = dict[key][lang];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    });
    /* Update toggle button label */
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Hindi' : 'Switch to English');
      btn.querySelector('.lang-toggle-active').textContent = lang.toUpperCase();
      btn.querySelector('.lang-toggle-inactive').textContent = lang === 'en' ? 'HI' : 'EN';
    }
  }

  /* ── BUTTON ─────────────────────────────────────────────── */
  function createToggleButton() {
    const btn = document.createElement('button');
    btn.id = 'langToggleBtn';
    btn.className = 'lang-toggle';
    btn.setAttribute('aria-label', 'Switch to Hindi');
    btn.innerHTML =
      '<span class="lang-toggle-active">EN</span>' +
      '<span class="lang-toggle-sep">|</span>' +
      '<span class="lang-toggle-inactive">HI</span>';
    btn.addEventListener('click', function () {
      const current = getLang();
      const next = current === 'en' ? 'hi' : 'en';
      setLang(next);
      translate(next);
    });
    document.body.appendChild(btn);
  }

  /* ── INIT ────────────────────────────────────────────────── */
  function init() {
    createToggleButton();
    translate(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
