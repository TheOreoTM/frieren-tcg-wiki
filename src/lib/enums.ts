export enum CharacterName {
    Default = "Default",
    Frieren = "Frieren",
    Sense = "Sense",
    Stille = "Stille",
    Serie = "Serie",
    Linie = "Linie",
    Sein = "Sein",
    Stark = "Stark",
    Laufen = "Laufen",
    Denken = "Denken",
    Himmel = "Himmel",
    Ubel = "Übel",
}

export enum CharacterID {
    Default = "default",
    Frieren = "frieren",
    Sense = "sense",
    Stille = "stille",
    Serie = "serie",
    Linie = "linie",
    Sein = "sein",
    Stark = "stark",
    Laufen = "laufen",
    Denken = "denken",
    Himmel = "himmel",
    Ubel = "ubel",
}

export const CharacterIdToName: Record<CharacterID, CharacterName> = {
    default: CharacterName.Default,
    frieren: CharacterName.Frieren,
    sense: CharacterName.Sense,
    stille: CharacterName.Stille,
    serie: CharacterName.Serie,
    linie: CharacterName.Linie,
    sein: CharacterName.Sein,
    stark: CharacterName.Stark,
    laufen: CharacterName.Laufen,
    denken: CharacterName.Denken,
    himmel: CharacterName.Himmel,
    ubel: CharacterName.Ubel,
};

export enum CharacterEmoji {
    FRIEREN = "https://cdn.discordapp.com/emojis/790429364570423346.webp", // Frieren3
    SENSE = "https://cdn.discordapp.com/emojis/1204637493077610546.webp", // SenseStare
    SERIE = "https://cdn.discordapp.com/emojis/1357814502023758205.webp", // SerieHowCute
    STILLE = "https://discord.com/assets/5fee1a6b95c4c8a8.svg",
    LINIE = "https://cdn.discordapp.com/emojis/1343985694351032393.webp", // LinieBaka
    SEIN = "https://cdn.discordapp.com/emojis/1189748661287137370.webp", // SeinCool
    STARK = "https://cdn.discordapp.com/emojis/1165025263747342386.webp", // StarkPoint
    LAUFEN = "https://cdn.discordapp.com/emojis/1198338042449113190.webp", // LaufenNom
    DENKEN = "https://cdn.discordapp.com/emojis/1198339325436371074.webp", // DenkenOld
    HIMMEL = "https://cdn.discordapp.com/emojis/1185700266452992010.webp", // HimmelCharming
    UBEL = "https://cdn.discordapp.com/emojis/1140592823243112468.webp", // UbelSnipSnip

    STONE_GEISEL = "https://discord.com/assets/a64d26006d97d530.svg",
    FIRE_GOLEM = "https://discord.com/assets/20e498f90ddfc95f.svg",
    STONE_GOLEM = "https://discord.com/assets/be36cac419080d86.svg",
    ANGRY_MIMIC = "https://cdn.discordapp.com/emojis/1244755028741460029.webp?animated=true", // FrierenMimicAnimated
    SHADOW_DRAGON = "https://discord.com/assets/5c526a66447af6d6.svg",
    SPIEGEL_SEIN = "https://cdn.discordapp.com/emojis/782627138808840222.webp", // SeinDissapointed
    SPIEGEL_SERIE = "https://cdn.discordapp.com/emojis/834412553517662219.webp", // SerieSmirk
    SPIEGEL_SENSE = "https://discord.com/assets/8308483404c3e885.svg",
    COSMIC_TON = "https://discord.com/assets/de6728ac385645a5.svg",

    SEIN_SERIE = "https://discord.com/assets/5f20af75bca0b153.svg",
}

export enum CardEmoji {
    HEART = "/emojis/heartCard.webp",
    SHIELD = "/emojis/shieldCard.webp",
    ENERGY = "/emojis/energyCard.webp",
    DICE = "/emojis/diceCard.webp",
    PUNCH = "/emojis/punchCard.webp",
    HOURGLASS = "/emojis/hourglassCard.webp",
    RANDOM = "/emojis/randomCard.webp",
    GENERIC = "/emojis/genericCard.webp",
    WAIT = "/emojis/waitCard.webp",
    RECYCLE = "/emojis/recycleCard.webp",

    FRIEREN_CARD = "/emojis/frierenCard.webp",
    SERIE_CARD = "/emojis/serieCard.webp",
    STILLE_CARD = "/emojis/stilleCard.webp",
    LINIE_CARD = "/emojis/linieCard.webp",
    SEIN_CARD = "/emojis/seinCard.webp",
    STARK_CARD = "/emojis/starkCard.webp",
    LAUFEN_CARD = "/emojis/laufenCard.webp",
    DENKEN_CARD = "/emojis/denkenCard.webp",
    HIMMEL_CARD = "/emojis/himmelCard.webp",
    UBEL_CARD = "/emojis/ubelCard.webp",

    FLOWER_FIELD = "/emojis/flowerFieldCard.webp",
}

export enum Stat {
    HP = "HP",
    ATK = "ATK",
    DEF = "DEF",
    SPD = "SPD",
    Ability = "Ability",
}

export const StatEmoji: Record<Stat, string> = {
    [Stat.HP]: "❤️",
    [Stat.ATK]: "⚔️",
    [Stat.DEF]: "🛡️",
    [Stat.SPD]: "⚡",
    [Stat.Ability]: "✨",
};

export enum CharacterType {
    Hero = "Hero",
    Demon = "Demon",
    Other = "Other",
}

export enum UbelHit {
    SureHit = "sureHit",
    SureMiss = "sureMiss",
    Regular = "regular",
}
