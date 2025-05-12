export const AUTHORIZED_DISCORD_IDS = [
    "600707283097485322",
    "139757382375833600",
    "1206295979918106705",
    "391002488737628161",
    "779693773256130591", // paup tuah
];

export function isAuthorizedAdmin(discordId?: string): boolean {
    if (!discordId) return false;
    return AUTHORIZED_DISCORD_IDS.includes(discordId);
}
