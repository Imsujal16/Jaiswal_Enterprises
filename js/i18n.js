/* ============================================================
   JAISWAL ENTERPRISES — i18n Engine
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
    'nav.back-home':      { en: '← Back to Jaiswal Enterprises', hi: '← जायसवाल एंटरप्राइजेज़ पर वापस' },
    'nav.our-bricks':     { en: 'Our Bricks',      hi: 'हमारी ईंटें' },
    'nav.how-we-work':    { en: 'How We Work',     hi: 'हम कैसे काम करते हैं' },
    'nav.photos':         { en: 'Photos',           hi: 'तस्वीरें' },
    'nav.enquire':        { en: 'Enquire',          hi: 'पूछताछ' },
    'nav.get-price':      { en: 'Get a Price',      hi: 'कीमत जानें' },
    'nav.fuel-services':  { en: 'Fuel & Services',  hi: 'ईंधन और सेवाएं' },
    'nav.get-in-touch':   { en: 'Get in Touch',     hi: 'संपर्क करें' },
    'nav.setup-account':  { en: 'Set Up an Account', hi: 'खाता बनाएं' },

    /* ── INDEX: HERO ─────────────────────────────────────────── */
    'hero.eyebrow':        { en: 'Brick Field · HP Fuel Pump · Chhapra, Bihar', hi: 'ईंट भट्ठा · HP पेट्रोल पंप · छपरा, बिहार' },
    'hero.h1.line1':       { en: 'Built From',    hi: 'बना है' },
    'hero.h1.line2':       { en: 'The Ground',    hi: 'ज़मीन से' },
    'hero.h1.line3':       { en: 'Up.',            hi: 'ऊपर तक।' },
    'hero.desc':           { en: 'We make bricks. We sell fuel. Two businesses running in Chhapra for decades — supplying what Bihar builds and drives with. No frills. Just reliable supply.', hi: 'हम ईंटें बनाते हैं। हम ईंधन बेचते हैं। दशकों से छपरा में चल रहे दो व्यवसाय — बिहार के निर्माण और परिवहन की जरूरत पूरी करते हैं। कोई दिखावा नहीं। बस भरोसेमंद आपूर्ति।' },
    'hero.scroll':         { en: 'Scroll',         hi: 'नीचे जाएं' },

    /* ── INDEX: HUB CARDS ───────────────────────────────────── */
    'card.bricks.tag':   { en: 'Business 01',      hi: 'व्यवसाय 01' },
    'card.bricks.title': { en: 'Gramin Brick Field', hi: 'ग्रामीण ईंट भट्ठा' },
    'card.bricks.desc':  { en: 'Strong, reliable bricks fired in our kiln. Three grades. Delivered to your site within 60km. We also work with builders who need large orders.', hi: 'हमारे भट्ठे में पकी हुई मजबूत और भरोसेमंद ईंटें। तीन श्रेणियां। 60 किमी के अंदर आपकी साइट पर डिलीवरी। बड़े ऑर्डर वाले ठेकेदारों के साथ भी काम करते हैं।' },
    'card.bricks.cta':   { en: 'Visit Brick Field', hi: 'ईंट भट्ठा देखें' },

    'card.fuel.tag':     { en: 'Business 02',       hi: 'व्यवसाय 02' },
    'card.fuel.title':   { en: 'Pawan Filling Station', hi: 'पवन फिलिंग स्टेशन' },
    'card.fuel.desc':    { en: 'Official HP fuel pump. Open 24 hours. Petrol and diesel. Lower prices for businesses with delivery vehicles.', hi: 'आधिकारिक HP पेट्रोल पंप। 24 घंटे खुला। पेट्रोल और डीजल। डिलीवरी वाहन चलाने वाले व्यवसायों के लिए कम कीमत।' },
    'card.fuel.cta':     { en: 'Visit Filling Station', hi: 'पेट्रोल पंप देखें' },

    /* ── INDEX: TICKER ──────────────────────────────────────── */
    'ticker.index.1': { en: 'Brick Supply',               hi: 'ईंट आपूर्ति' },
    'ticker.index.2': { en: 'Official HP Fuel',           hi: 'आधिकारिक HP ईंधन' },
    'ticker.index.3': { en: 'Open 24 Hours',              hi: '24 घंटे खुला' },
    'ticker.index.4': { en: 'Chhapra, Bihar',             hi: 'छपरा, बिहार' },
    'ticker.index.5': { en: 'We Also Work With Businesses', hi: 'व्यवसायों के साथ भी काम करते हैं' },

    /* ── INDEX: FOUNDER ─────────────────────────────────────── */
    'founder.photo-soon':    { en: 'Photo Coming Soon',    hi: 'फोटो जल्द आएगी' },
    'founder.title-label':   { en: 'Founder · Jaiswal Enterprises', hi: 'संस्थापक · जायसवाल एंटरप्राइजेज़' },
    'founder.section-tag':   { en: 'About the Founder',   hi: 'संस्थापक के बारे में' },
    'founder.quote.line1':   { en: 'Built on',             hi: 'बना है' },
    'founder.quote.em':      { en: 'Integrity.',           hi: 'ईमानदारी पर।' },
    'founder.quote.line2':   { en: 'Sustained by',         hi: 'टिका है' },
    'founder.quote.line3':   { en: 'Hard Work.',           hi: 'मेहनत से।' },
    'founder.bio1':          { en: 'A well-known figure in Chhapra\'s civic and business life, the founder of Jaiswal Enterprises has deep roots in Saran district. He started this business not for profit alone — but as a way to give back to the region he calls home.', hi: 'छपरा के नागरिक और व्यावसायिक जीवन में एक जाना-माना नाम, जायसवाल एंटरप्राइजेज़ के संस्थापक की सारण जिले में गहरी जड़ें हैं। उन्होंने यह व्यवसाय सिर्फ लाभ के लिए नहीं — बल्कि अपने क्षेत्र को कुछ वापस देने के लिए शुरू किया।' },
    'founder.bio2':          { en: 'From growing the Gramin Brick Field to serve Bihar\'s building boom, to running one of the area\'s most trusted HP fuel pumps — every decision has followed one rule: do what you say you will. That reputation keeps clients coming back year after year.', hi: 'ग्रामीण ईंट भट्ठे को बिहार के निर्माण-उछाल के लिए बढ़ाने से लेकर, इलाके के सबसे भरोसेमंद HP पेट्रोल पंप को चलाने तक — हर फैसला एक नियम से हुआ: जो कहो, वो करो। यही साख ग्राहकों को साल-दर-साल वापस लाती है।' },
    'founder.stat1':         { en: 'Businesses Running',  hi: 'चलते व्यवसाय' },
    'founder.stat2':         { en: 'Brick Delivery Range', hi: 'ईंट डिलीवरी दायरा' },
    'founder.stat3':         { en: 'Repeat Clients',       hi: 'नियमित ग्राहक' },

    /* ── INDEX: BUSINESS BRIEF ──────────────────────────────── */
    'brief.tag':             { en: 'Our Two Businesses',   hi: 'हमारे दो व्यवसाय' },
    'brief.headline.1':      { en: 'We Make Bricks.',      hi: 'हम ईंटें बनाते हैं।' },
    'brief.headline.2':      { en: 'We Sell Fuel.',        hi: 'हम ईंधन बेचते हैं।' },
    'brief.bricks.tag':      { en: 'Brick Supply',         hi: 'ईंट आपूर्ति' },
    'brief.bricks.body':     { en: 'Strong, reliable bricks fired in our own kiln. Three grades to choose from. 50,000+ bricks per firing round. Checked for quality before they leave the yard. Delivered to your site.', hi: 'हमारे अपने भट्ठे में पकी हुई मजबूत और भरोसेमंद ईंटें। तीन श्रेणियों में से चुनें। हर राउंड में 50,000+ ईंटें। गुणवत्ता जांच के बाद ही यार्ड से निकलती हैं। आपकी साइट पर डिलीवरी।' },
    'brief.bricks.link':     { en: 'Go to Brick Field',   hi: 'ईंट भट्ठे पर जाएं' },
    'brief.fuel.tag':        { en: 'Official HP Fuel Pump', hi: 'आधिकारिक HP पेट्रोल पंप' },
    'brief.fuel.body':       { en: 'Licensed HP fuel station. Petrol and diesel. Open 24 hours, every day. Set up an account if you run delivery vehicles — we offer lower prices for regular business customers.', hi: 'लाइसेंस प्राप्त HP ईंधन स्टेशन। पेट्रोल और डीजल। हर दिन 24 घंटे खुला। डिलीवरी वाहन चलाने वाले खाता खुलवाएं — नियमित व्यावसायिक ग्राहकों के लिए कम कीमत।' },
    'brief.fuel.link':       { en: 'Go to Filling Station', hi: 'पेट्रोल पंप पर जाएं' },

    /* ── INDEX: TESTIMONIALS ────────────────────────────────── */
    'test.tag':              { en: 'What Clients Say',     hi: 'ग्राहक क्या कहते हैं' },
    'test.h2.1':             { en: 'They Don\'t',          hi: 'वे बदलते' },
    'test.h2.2':             { en: 'Switch.',              hi: 'नहीं।' },
    'test.h2.em':            { en: 'Ever.',                hi: 'कभी नहीं।' },
    'test.intro':            { en: 'Our clients aren\'t just customers — they\'ve been using us for years. Builders who\'ve sourced every single brick from us. Transport businesses who fill up nowhere else. That\'s what real trust looks like.', hi: 'हमारे ग्राहक सिर्फ खरीदार नहीं — वे वर्षों से हमारा उपयोग कर रहे हैं। ठेकेदार जो हर एक ईंट हमसे लेते हैं। परिवहन व्यवसाय जो कहीं और तेल नहीं भरवाते। यही असली भरोसा है।' },

    'test.1.tenure':         { en: 'Builder · Using Us Since 2009', hi: 'ठेकेदार · 2009 से हमारे ग्राहक' },
    'test.1.quote':          { en: '"Fifteen years. Three hundred projects. Every brick from Gramin Brick Field. When your supplier never lets you down, you don\'t look for another one."', hi: '"पंद्रह साल। तीन सौ प्रोजेक्ट। हर ईंट ग्रामीण ईंट भट्ठे से। जब सप्लायर कभी निराश न करे, तो दूसरा क्यों ढूंढें।"' },
    'test.1.role':           { en: 'Contractor · Chhapra',          hi: 'ठेकेदार · छपरा' },

    'test.2.tenure':         { en: 'Transport Business Owner · Using Pawan Station · 8 Years', hi: 'ट्रांसपोर्ट व्यवसाय मालिक · पवन स्टेशन के ग्राहक · 8 साल' },
    'test.2.quote':          { en: '"We run forty trucks from Chhapra. Every truck fills up at Pawan Station. The billing is easy, the staff knows our routine, and we\'ve never had a problem with the fuel quality. Not once. That\'s why we don\'t change."', hi: '"हम छपरा से चालीस ट्रक चलाते हैं। हर ट्रक पवन स्टेशन पर भरता है। बिलिंग आसान है, स्टाफ हमारी दिनचर्या जानता है, और ईंधन की गुणवत्ता में कभी कोई परेशानी नहीं हुई। एक बार भी नहीं। इसीलिए हम नहीं बदलते।"' },
    'test.2.role':           { en: 'Director · Prasad Logistics Pvt. Ltd.', hi: 'निदेशक · प्रसाद लॉजिस्टिक्स प्रा. लि.' },

    'test.3.tenure':         { en: 'Builder · Large Orders · Since 2014', hi: 'ठेकेदार · बड़े ऑर्डर · 2014 से' },
    'test.3.quote':          { en: '"I build multi-storey housing. I always ask for First Class brick. I\'ve tried two other suppliers over ten years — both times I came straight back to Jaiswal\'s yard. No one else in this area delivers the same consistency and quality."', hi: '"मैं बहुमंजिला आवास बनाता हूँ। मैं हमेशा प्रथम श्रेणी की ईंट माँगता हूँ। दस साल में दो अन्य सप्लायर आजमाए — दोनों बार सीधे जायसवाल के यार्ड पर वापस आया। इस क्षेत्र में कोई दूसरा ऐसी एकरूपता और गुणवत्ता नहीं देता।"' },
    'test.3.role':           { en: 'Builder · Siwan',                hi: 'ठेकेदार · सिवान' },

    'test.4.tenure':         { en: 'Regular Customer · Pawan Station · Since 2017', hi: 'नियमित ग्राहक · पवन स्टेशन · 2017 से' },
    'test.4.quote':          { en: '"Always open, easy to pay, HP-quality fuel every time. Pawan Station has never been shut when I needed it. That matters when you\'re on the road at 3am."', hi: '"हमेशा खुला, भुगतान आसान, हर बार HP-गुणवत्ता का ईंधन। पवन स्टेशन कभी बंद नहीं मिला जब मुझे जरूरत थी। यह तब मायने रखता है जब आप रात 3 बजे सड़क पर हों।"' },
    'test.4.role':           { en: 'Owner · Tiwari Transport Co.',   hi: 'मालिक · तिवारी ट्रांसपोर्ट कं.' },

    /* ── INDEX: FOOTER ──────────────────────────────────────── */
    'footer.index.brand-tag':  { en: 'Chhapra, Bihar · Est. Since Generations', hi: 'छपरा, बिहार · पुराना घराना' },
    'footer.index.brand-desc': { en: 'Two businesses, one name. Bricks and fuel for Bihar\'s builders and drivers.', hi: 'दो व्यवसाय, एक नाम। बिहार के निर्माताओं और ड्राइवरों के लिए ईंट और ईंधन।' },
    'footer.col.businesses':   { en: 'Our Businesses',    hi: 'हमारे व्यवसाय' },
    'footer.col.contact':      { en: 'Contact',            hi: 'संपर्क' },
    'footer.link.about-founder': { en: 'About the Founder', hi: 'संस्थापक के बारे में' },
    'footer.link.what-clients': { en: 'What Clients Say',  hi: 'ग्राहक क्या कहते हैं' },
    'footer.hp-disclaimer':    { en: 'HP is a registered brand of', hi: 'HP, हिंदुस्तान पेट्रोलियम कार्पोरेशन लि. का पंजीकृत ब्रांड है।' },

    /* ── BRICKS: HERO ───────────────────────────────────────── */
    'bricks.hero.parent':    { en: 'Jaiswal Enterprises — Business 01', hi: 'जायसवाल एंटरप्राइजेज़ — व्यवसाय 01' },
    'bricks.hero.eyebrow':   { en: 'Gramin Brick Field · Chhapra, Bihar', hi: 'ग्रामीण ईंट भट्ठा · छपरा, बिहार' },
    'bricks.hero.h1.1':      { en: 'Fired',        hi: 'पकाई गई' },
    'bricks.hero.h1.2':      { en: 'Hard.',         hi: 'मजबूत।' },
    'bricks.hero.h1.3':      { en: 'Delivered',     hi: 'पहुंचाई गई' },
    'bricks.hero.h1.4':      { en: 'Fast.',          hi: 'जल्दी।' },
    'bricks.hero.desc':      { en: 'Our kiln runs continuously. Three brick grades. 50,000+ bricks per round. Every batch is checked before it leaves — no rejects reach your site.', hi: 'हमारा भट्ठा लगातार चलता है। तीन ईंट श्रेणियां। हर राउंड में 50,000+ ईंटें। हर बैच की जांच होती है जाने से पहले — कोई खराब ईंट आपकी साइट तक नहीं पहुंचती।' },
    'bricks.stat.1':         { en: 'Bricks per Round',  hi: 'प्रति राउंड ईंटें' },
    'bricks.stat.2':         { en: 'Brick Grades',       hi: 'ईंट श्रेणियां' },
    'bricks.stat.3':         { en: 'Delivery Range',     hi: 'डिलीवरी दायरा' },
    'bricks.stat.4':         { en: 'Quality Checked',    hi: 'गुणवत्ता जाँची' },

    /* ── BRICKS: TICKER ─────────────────────────────────────── */
    'ticker.bricks.1': { en: 'Standard Brick',       hi: 'सामान्य ईंट' },
    'ticker.bricks.2': { en: 'First Class Brick',    hi: 'प्रथम श्रेणी ईंट' },
    'ticker.bricks.3': { en: 'Heavy & Hollow Brick', hi: 'भारी और खोखली ईंट' },
    'ticker.bricks.4': { en: 'Large Orders Welcome', hi: 'बड़े ऑर्डर का स्वागत' },
    'ticker.bricks.5': { en: 'Delivered Within 60km', hi: '60 किमी में डिलीवरी' },

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
    'bricks.spec.3.desc':      { en: 'We deliver to Chhapra, Saran, Siwan and nearby areas.', hi: 'हम छपरा, सारण, सिवान और आसपास के क्षेत्रों में डिलीवरी करते हैं।' },
    'bricks.spec.4.label':     { en: 'Quality Checked',  hi: 'गुणवत्ता जाँची' },
    'bricks.spec.4.desc':      { en: 'Every batch is inspected before loading. No substandard bricks leave the yard.', hi: 'लोडिंग से पहले हर बैच की जांच होती है। कोई घटिया ईंट यार्ड से नहीं निकलती।' },

    'bricks.type.1.title':     { en: 'Standard Brick',   hi: 'सामान्य ईंट' },
    'bricks.type.1.desc':      { en: '9×4.5×2.75 inches. Every brick is the same size — so your walls go up straight and your mortar stays consistent. Our most-used grade.', hi: '9×4.5×2.75 इंच। हर ईंट एक ही आकार की — ताकि दीवारें सीधी उठें और मसाला एकसमान रहे। हमारी सबसे ज्यादा बिकने वाली श्रेणी।' },
    'bricks.type.2.title':     { en: 'First Class Brick', hi: 'प्रथम श्रेणी ईंट' },
    'bricks.type.2.desc':      { en: 'Fired longer for a harder, denser brick. Very low water absorption and clean, sharp edges. Right for multi-storey buildings, columns, and exposed walls.', hi: 'ज्यादा देर पकाई गई — सख्त और घनी ईंट। बहुत कम पानी सोखती है और किनारे साफ और तीखे होते हैं। बहुमंजिली इमारतों, स्तंभों और खुली दीवारों के लिए सही।' },
    'bricks.type.3.title':     { en: 'Heavy & Hollow Brick', hi: 'भारी और खोखली ईंट' },
    'bricks.type.3.desc':      { en: 'For walls that need extra strength or better insulation. Available on larger orders. Ask us about minimum quantities and lead time.', hi: 'उन दीवारों के लिए जिन्हें अतिरिक्त मजबूती या बेहतर इन्सुलेशन चाहिए। बड़े ऑर्डर पर उपलब्ध। न्यूनतम मात्रा और लीड टाइम के बारे में हमसे पूछें।' },
    'bricks.type.4.title':     { en: 'Large Orders for Builders', hi: 'ठेकेदारों के लिए बड़े ऑर्डर' },
    'bricks.type.4.desc':      { en: 'If you need 50,000+ bricks, we can arrange phased delivery to fit your project schedule. Call us to talk through the details.', hi: 'अगर आपको 50,000+ ईंटें चाहिए, तो हम आपके प्रोजेक्ट शेड्यूल के अनुसार चरणबद्ध डिलीवरी की व्यवस्था कर सकते हैं। विवरण के लिए हमें फोन करें।' },

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
    'form.inp.vehicle-type':   { en: 'What Type of Vehicles Do You Operate?', hi: 'आप किस तरह के वाहन चलाते हैं?' },
    'form.check.label.bricks': { en: 'I\'d also like to know about:', hi: 'मैं यह भी जानना चाहूँगा/चाहूँगी:' },
    'form.check.pricing':      { en: 'Current prices',      hi: 'मौजूदा कीमतें' },
    'form.check.delivery':     { en: 'Delivery schedule',   hi: 'डिलीवरी समय-सारणी' },
    'form.check.grades':       { en: 'Brick types and sizes', hi: 'ईंट के प्रकार और आकार' },
    'form.check.bulk':         { en: 'Pricing for large orders', hi: 'बड़े ऑर्डर के लिए कीमत' },
    'form.check.label.fuel':   { en: 'I\'d also like to know about:', hi: 'मैं यह भी जानना चाहूँगा/चाहूँगी:' },
    'form.check.fuel-rates':   { en: 'Lower prices for business owners', hi: 'व्यवसाय मालिकों के लिए कम कीमत' },
    'form.check.rewards':      { en: 'Rewards for regular customers', hi: 'नियमित ग्राहकों के लिए इनाम' },
    'form.check.billing':      { en: 'Digital billing setup',  hi: 'डिजिटल बिलिंग व्यवस्था' },
    'form.check.24hr':         { en: 'Confirming 24-hour access', hi: '24 घंटे उपलब्धता की पुष्टि' },
    'form.select.brick.std':   { en: 'Standard Brick',       hi: 'सामान्य ईंट' },
    'form.select.brick.first': { en: 'First Class Brick',    hi: 'प्रथम श्रेणी ईंट' },
    'form.select.brick.heavy': { en: 'Heavy / Hollow Brick', hi: 'भारी / खोखली ईंट' },
    'form.select.brick.mixed': { en: 'More Than One Type',   hi: 'एक से अधिक प्रकार' },
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
    'bricks.footer.brand-tag': { en: 'A Jaiswal Enterprises Business · Chhapra, Bihar', hi: 'जायसवाल एंटरप्राइजेज़ का व्यवसाय · छपरा, बिहार' },
    'bricks.footer.brand-desc':{ en: 'Reliable kiln-fired bricks in three grades. Delivered to your site within 60km.', hi: 'तीन श्रेणियों में भरोसेमंद भट्ठे की ईंटें। 60 किमी के अंदर आपकी साइट पर डिलीवरी।' },
    'footer.col.quick-links':  { en: 'Quick Links',          hi: 'त्वरित लिंक' },
    'footer.col.je':           { en: 'Jaiswal Enterprises',  hi: 'जायसवाल एंटरप्राइजेज़' },
    'footer.link.back-home':   { en: '← Back to Home',      hi: '← होमपेज पर वापस' },
    'footer.link.about-founder2': { en: 'About the Founder', hi: 'संस्थापक के बारे में' },

    /* ── FUEL: HERO ─────────────────────────────────────────── */
    'fuel.hero.parent':    { en: 'Jaiswal Enterprises — Business 02', hi: 'जायसवाल एंटरप्राइजेज़ — व्यवसाय 02' },
    'fuel.hero.eyebrow':   { en: 'Pawan Filling Station · Official HP Pump · Chhapra', hi: 'पवन फिलिंग स्टेशन · आधिकारिक HP पंप · छपरा' },
    'fuel.hero.h1.1':      { en: 'HP',          hi: 'HP' },
    'fuel.hero.h1.2':      { en: 'Fuel.',        hi: 'ईंधन।' },
    'fuel.hero.h1.3':      { en: 'Always',       hi: 'हमेशा' },
    'fuel.hero.h1.4':      { en: 'Open.',         hi: 'खुला।' },
    'fuel.hero.desc':      { en: 'Official HP fuel station. Petrol and diesel. Open around the clock. If you run delivery vehicles, talk to us about an account — we offer lower prices for regular business customers.', hi: 'आधिकारिक HP ईंधन स्टेशन। पेट्रोल और डीजल। चौबीसों घंटे खुला। डिलीवरी वाहन चलाने वाले खाते के बारे में बात करें — नियमित व्यावसायिक ग्राहकों के लिए कम कीमत।' },
    'fuel.stat.1':         { en: 'Always Open',      hi: 'हमेशा खुला' },
    'fuel.stat.2':         { en: 'Fuel Types',        hi: 'ईंधन के प्रकार' },
    'fuel.stat.3':         { en: 'HP Franchise',      hi: 'HP फ्रेंचाइजी' },
    'fuel.stat.4':         { en: 'HP Quality Guarantee', hi: 'HP गुणवत्ता गारंटी' },

    /* ── FUEL: TICKER ───────────────────────────────────────── */
    'ticker.fuel.1': { en: 'Diesel Always Available',   hi: 'डीजल हमेशा उपलब्ध' },
    'ticker.fuel.2': { en: 'Petrol Always Available',   hi: 'पेट्रोल हमेशा उपलब्ध' },
    'ticker.fuel.3': { en: 'Open 24 Hours',             hi: '24 घंटे खुला' },
    'ticker.fuel.4': { en: 'Lower Prices for Businesses', hi: 'व्यवसायों के लिए कम कीमत' },
    'ticker.fuel.5': { en: 'Rewards for Regular Customers', hi: 'नियमित ग्राहकों के लिए इनाम' },

    /* ── FUEL: SERVICES ─────────────────────────────────────── */
    'fuel.badge':          { en: 'Official HP Fuel Pump · Chhapra, Bihar', hi: 'आधिकारिक HP पेट्रोल पंप · छपरा, बिहार' },
    'fuel.h2.1':           { en: 'HP',            hi: 'HP' },
    'fuel.h2.2':           { en: 'Quality.',       hi: 'गुणवत्ता।' },
    'fuel.h2.3':           { en: 'Every',          hi: 'हर' },
    'fuel.h2.4':           { en: 'Fill.',          hi: 'भराई।' },
    'fuel.body':           { en: 'Pawan Filling Station is a licensed HP pump serving private cars, commercial trucks, and business vehicles every hour of the day. Same fuel quality as any HP station in India — backed by regular HP testing. Run by a local name you can trust.', hi: 'पवन फिलिंग स्टेशन एक लाइसेंस प्राप्त HP पंप है जो दिन के हर घंटे निजी कारों, व्यावसायिक ट्रकों और व्यावसायिक वाहनों की सेवा करता है। भारत के किसी भी HP स्टेशन जैसी ईंधन गुणवत्ता — नियमित HP जांच द्वारा समर्थित। एक स्थानीय नाम द्वारा संचालित जिस पर आप भरोसा कर सकते हैं।' },
    'fuel.amenity.1':      { en: 'Open 24 hours, 7 days',        hi: '24 घंटे, 7 दिन खुला' },
    'fuel.amenity.2':      { en: 'Trucks welcome',               hi: 'ट्रक भी आ सकते हैं' },
    'fuel.amenity.3':      { en: 'Air and water point',          hi: 'हवा और पानी उपलब्ध' },
    'fuel.amenity.4':      { en: 'Pay by card or UPI',           hi: 'कार्ड या UPI से भुगतान' },
    'fuel.amenity.5':      { en: 'Rewards for regular customers', hi: 'नियमित ग्राहकों के लिए इनाम' },
    'fuel.amenity.6':      { en: 'Accounts for businesses',      hi: 'व्यवसायों के लिए खाते' },
    'fuel.diesel.title':   { en: 'SPEED Diesel',                 hi: 'SPEED डीजल' },
    'fuel.diesel.desc':    { en: 'HP\'s premium diesel, designed for trucks, heavy machinery, and long-distance drivers. Available for business accounts at lower rates.', hi: 'HP का प्रीमियम डीजल, ट्रकों, भारी मशीनरी और लंबी दूरी के चालकों के लिए। व्यावसायिक खातों के लिए कम दरों पर उपलब्ध।' },
    'fuel.petrol.title':   { en: 'Power Petrol',                 hi: 'Power पेट्रोल' },
    'fuel.petrol.desc':    { en: 'HP\'s premium petrol for cars and bikes. Clean-burning formula that\'s easier on your engine and improves fuel economy over time.', hi: 'कारों और बाइकों के लिए HP का प्रीमियम पेट्रोल। स्वच्छ जलने वाला फॉर्मूला जो इंजन के लिए बेहतर है और समय के साथ ईंधन दक्षता में सुधार करता है।' },
    'fuel.hp-brand.strong':{ en: 'Authorised HP Petroleum Outlet', hi: 'अधिकृत HP पेट्रोलियम आउटलेट' },
    'fuel.hp-brand.p':     { en: 'This station is licensed under the Hindustan Petroleum Retailer Agreement. All fuel meets the Bureau of Indian Standards quality specifications and is regularly tested by HP\'s quality team.', hi: 'यह स्टेशन हिंदुस्तान पेट्रोलियम रिटेलर समझौते के तहत लाइसेंस प्राप्त है। सभी ईंधन भारतीय मानक ब्यूरो की गुणवत्ता विशिष्टताओं को पूरा करता है और HP की गुणवत्ता टीम द्वारा नियमित रूप से परीक्षण किया जाता है।' },

    /* ── FUEL: GALLERY ──────────────────────────────────────── */
    'fuel.gallery.tag':       { en: 'Station Photos',              hi: 'स्टेशन की तस्वीरें' },
    'fuel.gallery.h2.1':      { en: 'The Station.',                hi: 'स्टेशन।' },
    'fuel.gallery.h2.2':      { en: 'Day & Night.',                hi: 'दिन और रात।' },
    'fuel.gallery.sub':       { en: 'We don\'t close. Here\'s what Pawan Station looks like around the clock.', hi: 'हम बंद नहीं होते। पवन स्टेशन 24 घंटे ऐसा दिखता है।' },
    'fuel.gallery.1.label':   { en: 'During the Day',             hi: 'दिन के समय' },
    'fuel.gallery.1.sub':     { en: 'Pawan Filling Station · Chhapra', hi: 'पवन फिलिंग स्टेशन · छपरा' },
    'fuel.gallery.2.label':   { en: 'Through the Night',          hi: 'रात के दौरान' },
    'fuel.gallery.2.sub':     { en: '24 Hours · No Downtime',     hi: '24 घंटे · बिना रुके' },
    'fuel.gallery.3.label':   { en: 'Trucks & Businesses',        hi: 'ट्रक और व्यवसाय' },
    'fuel.gallery.3.sub':     { en: 'Wide lanes · Easy access',   hi: 'चौड़ी लेन · आसान पहुँच' },
    'fuel.gallery.4.label':   { en: 'HP Branded',                 hi: 'HP ब्रांडेड' },
    'fuel.gallery.4.sub':     { en: 'Official Franchise · Verified', hi: 'आधिकारिक फ्रेंचाइजी · सत्यापित' },

    /* ── FUEL: FOOTER ───────────────────────────────────────── */
    'fuel.footer.brand-tag':  { en: 'A Jaiswal Enterprises Business · Official HP Fuel Pump', hi: 'जायसवाल एंटरप्राइजेज़ का व्यवसाय · आधिकारिक HP पेट्रोल पंप' },
    'fuel.footer.brand-desc': { en: 'HP petrol and diesel. Open 24 hours. Accounts for businesses with delivery vehicles.', hi: 'HP पेट्रोल और डीजल। 24 घंटे खुला। डिलीवरी वाहन वाले व्यवसायों के लिए खाते।' },
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
