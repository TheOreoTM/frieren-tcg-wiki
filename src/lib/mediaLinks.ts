const characterPortraits = {
    edelPortrait:
        "https://static.wikia.nocookie.net/frieren/images/a/ab/Edel_anime_portrait.png/revision/latest?cb=20240119235404",
    frierenPortrait:
        "https://media.discordapp.net/attachments/1346555621952192522/1347399695521026109/Frieren_anime_portrait.webp?ex=67dcd2c0&is=67db8140&hm=0b5f32d66153c8b41d2817170b41b7562e6ef607e9efb1abc220fe5905b7bd77&=&format=webp&width=600&height=600",
} as const;

const vangerisuCards = {
    frierenVangerisuCard:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588253721297007/Frieren_Card_2.png?ex=67e97971&is=67e827f1&hm=84a89d623d2339ff4ff198d0955843a692a39a9154aeee00e03f027eea19e2e6&",
} as const;

const edelCardLinks = {
    telekinesis_gif:
        "https://media.discordapp.net/attachments/1367328754795286599/1368285080606347444/Stone_hurling_spell_EP24.gif?ex=6817aa48&is=681658c8&hm=b41474c8c6b45cfcf6d65a0d1f5586e9633d1d064f0ee1ab4facd0d9b3699a84",
};

const frierenCardLinks = {
    zoltraak_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588256267501888/Offensive_Magic_Analysis_Zoltraak.png?ex=67e97971&is=67e827f1&hm=193fb4668269bd8509f7b4ce4a092c12af7b44ac8fd5264dfac08c5da5a349bf&",
    zoltraak_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364283548789379163/GIF_2604048789.gif?ex=68091b91&is=6807ca11&hm=a7fd85473cc4a8c441193bd990c6517e95d5cc6789023f530c27f4d21e5e70dc&",
    fieldOfFlowers_gif: "https://c.tenor.com/Sd_BDB5kVZ8AAAAd/tenor.gif",
    fieldOfFlowers_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588255269130370/Spell_to_make_a_field_of_flowers_New.png?ex=67e97971&is=67e827f1&hm=b03c906280c5f4f09d212bae40f29b671377145e137dbfe5f4d5da93be130dd7&",
    fieldOfFlowers_image_old:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1352873016660590653/Spell_to_make_a_field_of_flowers_4.png?ex=67df98ae&is=67de472e&hm=e5080e39c9818eee5f9a3d559a829b6f3ecab15be85b9897fb6c28ea27c6e674&",
    judradjim_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588256728748365/Destructive_Lightning_Analysis_Judradjim.png?ex=67e97972&is=67e827f2&hm=15cd0d0ef4df4a3d1559b405c3e8843ecbda4b64b349e2149fb9d22db3c5e817&",
    judradjim_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364225378952020029/GIF_1668382682.gif?ex=6808e564&is=680793e4&hm=2c769b1580a0639d7e83a046cad25ff641b839f91ab7c035b0ae844aae3b551c&",
    vollzanbel_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588255923572736/Hellfire_Summoning_Vollzanbel.png?ex=67e97971&is=67e827f1&hm=c31d35c7ce7820b3d386f7f3119f463538d83576ad2a4f0ed2a83370390ce87c&",
    vollzanbel_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364225342218309674/GIF_1142333080.gif?ex=6808e55b&is=680793db&hm=11bd4be532ecf85eab598b0533e6c5b747d9bb8483c74ec2a86f3ede0fb352aa&",
    barrierAnalysis_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588254463951029/Barrier_Magic_Analysis.png?ex=67e97971&is=67e827f1&hm=d65bb623550e93604fbedbc80cb6638c52b8ead8f1a70114e410a52df1260605&",
    barrierAnalysis_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364275399940378707/GIF_1207512349.gif?ex=680913fa&is=6807c27a&hm=5a7ddf666a159597f0d6978040ba415d4e8e02fca6413ee098f673be9207d099&",
    demonAnalysis_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588254107439245/Demon_Magic_Analysis.png?ex=67e97971&is=67e827f1&hm=8318bc5d0892f966e0bc07d29fd6042ab37cc93cdc86a3d58feb438631b3b354&",
    demonAnalysis_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364282397381890069/GIF_0344215957.gif?ex=68091a7e&is=6807c8fe&hm=6c01215ed6985660a179640f2ed6e22c82e73adc4c581861829f5d4a9b9bc8e8&",
    ordinaryDefensiveMagic_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588255554470018/Ordinary_Defensive_Magic.png?ex=67e97971&is=67e827f1&hm=6e44ae1f09dc7b05f29ddb6a646f9852692ff2427e333e1c0c4562c296918ce9&",
    ordinaryDefensiveMagic_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364275430797873243/GIF_0437404717.gif?ex=68091401&is=6807c281&hm=1f7c1e031326058f4b6d1d45cb7fc27361d2d63f142449411a1f8ff4b5f14f85&",
    heightOfMagic_image:
        "https://cdn.discordapp.com/attachments/1351391350398128159/1355588254866473161/The_Height_of_Magic.png?ex=67e97971&is=67e827f1&hm=0bddcf6c49f763947308ba3e63c58a8727730a9af0ff9c0175e948af704e29b3&",
    heightOfMagic_gif:
        "https://cdn.discordapp.com/attachments/1360969158623232300/1364284928543424652/GIF_0512568585.gif?ex=68091cda&is=6807cb5a&hm=fa96e7031f374a6a962522623b61e81a53133ba49d57583e77d483e379a31edf&",
} as const;

const mediaLinks = {
    ...characterPortraits,
    ...vangerisuCards,

    ...edelCardLinks,
    ...frierenCardLinks,
} as const;

export default mediaLinks;
