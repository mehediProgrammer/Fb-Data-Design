const posts = [
  {
    id: 1,
    image:
      "https://storage.googleapis.com/buro-malaysia-storage/beta.toffeetest.com/buro/2021/10/e25798ce-images_ca-ghost-2021-2.png",
    content:
      "আজকে শুক্রবার উপলক্ষে Bhoot FM স্পেশাল এপিসোড লাইভ শুরু হবে রাত ১১ টায়, এবং আজকের ঘটনাগুলো একদম স্পেশাল ইমেইল এপিসোড তাই সবাই এই Bhoot FM পেজটি ফলো করুন। ধন্যবাদ সবাইকে",
    like: 990,
    coment: 19,
    timeAgo: "16h",
    author: {
      name: "Osama Workout",
      photo:
        "https://gumlet.assettype.com/filmcompanion%2F2022-11%2Fa75255cd-9442-4423-a0f6-fa10f56108d6%2Flead_2.jpg?format=auto",
    },
  },
  {
    id: 2,
    image:
      "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/344242575_931075781679330_6661909936249963260_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeEDJ1twN4XOH0HNsPCLFMe5sxsXTVTqq06zGxdNVOqrTsTC3FpNQyhCga4_fIDREZj2Yg3CJht8z4rRXXHcdXJk&_nc_ohc=7r_KW_UWjaMAX9do4N_&_nc_ht=scontent.fdac13-1.fna&oh=00_AfBDByu6K3I8uquck1QmNyiZ9fD7H10LG1rbw1EVbbhDDg&oe=64A8D39D",
    content: `পরকালকে বাদ দিয়ে দুনিয়া নিয়ে ব্যস্ত হয়ে যাওয়া মানুষকে উদ্দেশ্য করে মহান আল্লাহ তাআলা বলেন-
      کُلُّ نَفۡسٍ ذَآئِقَۃُ الۡمَوۡتِ ؕ وَ اِنَّمَا تُوَفَّوۡنَ اُجُوۡرَکُمۡ یَوۡمَ الۡقِیٰمَۃِ ؕ فَمَنۡ زُحۡزِحَ عَنِ النَّارِ وَ اُدۡخِلَ الۡجَنَّۃَ فَقَدۡ فَازَ ؕ وَ مَا الۡحَیٰوۃُ الدُّنۡیَاۤ اِلَّا مَتَاعُ الۡغُرُوۡر
      ‘প্রতিটি প্রাণী মৃত্যুর স্বাদ গ্রহণ করবে। আর অবশ্যই কেয়ামতের দিনে তাদের প্রতিদান পরিপূর্ণভাবে দেয়া হবে। সুতরাং যাকে জাহান্নাম থেকে দূরে রাখা হবে এবং জান্নাতে প্রবেশ করানো হবে সে-ই সফলতা পাবে। আর দুনিয়ার জীবন শুধুই ধোঁকার সামগ্রী।’ (সুরা আল-ইমরান : আয়াত ১৮৫`,
    like: "5k",
    coment: "2k",
    timeAgo: "Yesterday",
    author: {
      name: "Mawlana Salman Nadvi",
      photo: "https://hydnews.net/wp-content/uploads/2018/02/Salman-Nadvi.jpg",
    },
  },
  {
    id: 3,
    image:
      "https://images.cnbctv18.com/wp-content/uploads/2021/09/Iran-Israel-1019x573.jpg",
    content:
      "সিরিয়ার মি সা ই ল রুখতে ব্যর্থ অত্যাধুনিক আয়রন ডোম | Syria Israel | Desh TV",
    like: "35k",
    coment: "41k",
    timeAgo: "11 min",
    author: {
      name: " Desh TV News",
      photo:
        "https://yt3.googleusercontent.com/wT9wHJAMP0XdxdFRbG2J7EPXbWZZ6UGfSVgc2MnwCMqnoZJ_EJXOEUb7eubZdUIKUe7zfduHpQ=s176-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 4,
    image:
      "https://banglatv.tv/wp-content/uploads/2019/07/7036-kobor-725x405.jpg",
    content: `১. হায়! আমি যদি মাটি হয়ে যেতাম
    মৃত্যুর পর নিজেদের কৃতকর্ম দেখে অবাধ্যতাকারীরা ভয় পেয়ে যাবে। আর মৃত্যু যন্ত্রণা ও আজাব থেকে বাঁচতে আকাঙ্ক্ষা করবে-
    ذَلِكَ الْيَوْمُ الْحَقُّ فَمَن شَاء اتَّخَذَ إِلَى رَبِّهِ مَآبًا - إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا
    ‘এই দিবস (পরকাল) সত্য। অতপর যার ইচ্ছা, সে তার পালনকর্তার কাছে ঠিকানা তৈরি করুক। আমি তোমাদেরকে আসন্ন শাস্তি সম্পর্কে সতর্ক করলাম, যেদিন মানুষ প্রত্যেক্ষ করবে যা সে সামনে (মৃত্যুর আগে) পাঠিয়েছে। আর (সেদিন তা দেখে) কাফেররা বলবে- ‘হায়, আফসোস! আমি যদি মাটি হয়ে যেতাম।’ (সুরা নাবা : আয়াত ৩৯-৪০)`,
    like: "74k",
    coment: "43k",
    timeAgo: "41 min",
    author: {
      name: "Huzaifa Islam",
      photo:
        "https://i.pinimg.com/550x/80/f9/da/80f9da3fc0a2cccdeb45690da86ca998.jpg",
    },
  },
  {
    id: 5,
    image:
      "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/347416439_3191213461175114_6745014827876773521_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH8oauZbGPXFh3RQC7uiWAsOuLe4Ah-FGQ64t7gCH4UZANILvGwkOXuX6Fl5l0KMHsfHPPHB6RDvI5pqhVXKfRd&_nc_ohc=3GB1jvqv0ooAX-dAI1m&_nc_ht=scontent.fdac13-1.fna&oh=00_AfC2HhAzCNRUkoi9VBpWKS9cG9Om530JyvtkFiA9JQZz6w&oe=64A8D98A",
    content: "لن نترك نهج القران  نعم نعم للقران",
    like: "2B",
    coment: "204k",
    timeAgo: "21 min",
    author: {
      name: "ليث فراس (أبو آيلين)",
      photo:
        "https://i.pinimg.com/736x/00/10/e3/0010e3023993de50981089d534aca9bf.jpg",
    },
  },
  {
    id: 6,
    image:
      "https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-9/42379387_682689662111788_4439503712993411072_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFcRyvAfIeAhKCTlRDzwbt2wPtv5UxXFaXA-2_lTFcVpb7-ZT4JO3QeAu4Ej_wEO0gPfHfn4xBuhsLHNyFHLnXv&_nc_ohc=BE9C5JILfqYAX_YDDxl&_nc_ht=scontent.fdac13-1.fna&oh=00_AfCaKlscqlhkc3Zhbmupd90AAgFtFL4E5lD_lZ7qhQI1dw&oe=64CB640D",
    content:
      "রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন, “প্রত্যেক নরম মন ভদ্র এবং মিশুক লোকদের জন্য জাহান্নাম হারাম।[মুসনাদে আহমদ-৩৯৩৮]",
    like: "75",
    coment: "4",
    timeAgo: "19 min",
    author: {
      name: "Samiya Islam Ishani",
      photo:
        "https://i.pinimg.com/originals/00/b8/0b/00b80b128bbe2e934a1b266feb7512e2.jpg",
    },
  },
  {
    id: 7,
    image:
      "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/357781406_3352893318355167_2518835967166925758_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGtNe2LxffgNataCp4qs0LYJCK4VddgoakkIrhV12ChqcoJf0w_xTFCQbWFG-cRTHKrQfiBv1RaDtdTZrImdFup&_nc_ohc=eyNuJogsnUAAX_GF7DX&_nc_ht=scontent.fdac13-1.fna&oh=00_AfAIrDFdfiogAz5S-qQvY7C1278_FgULn7PJ0ur1MtxTaA&oe=64A8CCB4",
    content:
      "আজমল ব্রান্ডের পপুলার আতর 1001 Nights আমাদের কালেকশনে। ঘ্রাণ, প্রজেকশন এবং লাস্টিং অমায়িক। এটি ৩/৬/১২ মিলি পর্যন্ত ডিকেন্ট নিতে পারবেন। তা'ছাড়া, সম্পূর্ণ ৩০ মিলি ফুল প্রেজেন্টেশন সহ নিলে তো থাকছে ডিসকাউন্ট। Notes:spicy,floral,Woody,Musky.সারা দেশে পাবেন হোম ডেলিভারির সুবিধা।",
    like: "50",
    coment: "1k",
    timeAgo: "11 min",
    author: {
      name: "Didarul Karim",
      photo:
        "https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-9/131014479_1297081977317971_906131911199706959_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeENRsAKpEMcPLGF7tt68p2vp35wVFDHa_qnfnBUUMdr-u4GMfXMrRlYsIKsWCM3FXJUTgzv6CPuDOUij9T_RVxA&_nc_ohc=CXHP5-0bib4AX93ZA5M&_nc_ht=scontent.fdac13-1.fna&oh=00_AfDRtyDZki--JQMmO5xaQkrQ8GYTeI4qp7j49qDxaz79Dw&oe=64CB43D0",
    },
  },
  {
    id: 8,
    image:
      "https://i.tribune.com.pk/media/images/Maulana-Tariq-Jameel-apologized-to-women-nation-af1607851465-0/Maulana-Tariq-Jameel-apologized-to-women-nation-af1607851465-0.jpg",
    content:
      " “সুবাহানাল্লহী ওয়া বিহামদীহি সুবাহানাল্লহীল আজীমী ওয়া বিহামদীহি আসতাগফিরুল্লাহ ”।  অর্থ: মহান আল্লাহ তা’আলার পবিত্রতা বর্ণনা করছি এবং তার প্রশংসা বর্ণনার সাথে আল্লহ্ তাআ’লার নিকট ক্ষমা প্রার্থনা করছি।  এ দুআ প্রতিদিন ফজরের নামাজের আগে কিংবা পরে একশত বার করে পড়তে হবে, হেটে হেটে বা এদিক সেদিক দুনিয়াবি ধ্যান নিয়ে পড়া যাবেনা।  বরং এক যায়গাতে বসে পড়তে হবে, তাহলে সংসার, দুনিয়া আপনা আপনি আপনার দিকে ফিরবে, অর্থাৎ দুনিয়া আপনার কাছে হেয় ও লাঞ্ছিত অবস্থায় ধরা দেবে। এবং আল্লাহ তাআ’লার এর এক একটি শব্দ হতে এক একজন ফেরেশতা সৃষ্টি করে কিয়ামত দিবস পর্যন্ত তাসবীহ পাঠে নিযুক্ত করে দেবেন এবং উহার সমুদয় সওয়াব আপনি পাবেন ।",
    like: "3M",
    coment: "41k",
    timeAgo: "9 min",
    author: {
      name: "Tariq Jamil",
      photo:
        "https://yt3.googleusercontent.com/IFkpsjmykOu8U2hKtz_eKjrjYuDoXGpexGIZe-Oom0VJm7t-ud7EQdRpnNJyorTtcxMHcEYoZwQ=s900-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 9,
    image:
      "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/339999336_1285021918803042_3769223743695073227_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEmMeaBuFqfuoBR5Wag1kXTU6Mn6Wvx73JToyfpa_HvctMCOhaDL_BL_zpMMXyVs9kae2DptRzaslWeNPnTUxTm&_nc_ohc=PXRTX8LuvA4AX8Bh9Bq&_nc_ht=scontent.fdac13-1.fna&oh=00_AfCskrl55iB8X5nt5ehACAmK2tnv6mGld3B03Sx5-BFG5A&oe=64A895CB",
    content:
      " বাংলাদেশেও আল্লামা তাক্বী উসমানীর মতো বড় বড় আলেম জন্মায় কিন্তু মূল্যায়ন হয়না!-মাওলানা মুহাম্মাদ সালমানমুহতামিম, মাদরাসা দারুর রাশাদ মিরপুর",
    like: "25k",
    coment: "4k",
    timeAgo: "3 min",
    author: {
      name: "মাওলানা মুহাম্মাদ সালমান",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Abul_Hasan_Ali_Hasani_Al-Nadwi.jpg/200px-Abul_Hasan_Ali_Hasani_Al-Nadwi.jpg",
    },
  },
  {
    id: 10,
    image: "https://www.commisceo-global.com/images/salahmanesujud.jpg",
    content:
      " The beauty of Islam ❤️.Babar Azam, the captain of the Pakistan national cricket 🏏 team #Babarazam #cricketer",
    like: "2M",
    coment: "123k",
    timeAgo: "Just now",
    author: {
      name: "World Sports",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zeqx5OpH0UPrFCGpXYarYKPNiD9_ZA-OfEi7Gx52AlRZf0rG4nrcU5tqXc95ceRetKM&usqp=CAU",
    },
  },
];
