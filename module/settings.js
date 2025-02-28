export const registerSettings = () => {
    game.settings.register("plerion", "max-equip-slots", {
        name: game.i18n.localize("CAIRN.Settings.MaxEquipSlots.label"),
        hint: game.i18n.localize("CAIRN.Settings.MaxEquipSlots.hint"),
        scope: "world",
        config: true,
        type: Number,
        default: 10,
        requiresReload: true,
    });

    game.settings.register("plerion", "use-gold-threshold", {
        name: game.i18n.localize("CAIRN.Settings.UseGoldThreshold.label"),
        hint: game.i18n.localize("CAIRN.Settings.UseGoldThreshold.hint"),
        scope: "world",
        config: true,
        type: Number,
        default: 0,
        requiresReload: true,
    });

    game.settings.register("plerion", "use-panic", {
        name: game.i18n.localize("CAIRN.Settings.UsePanic.label"),
        hint: game.i18n.localize("CAIRN.Settings.UsePanic.hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true,
    });
}