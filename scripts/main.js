try {
    // === ปรับขีดจำกัดยูนิตสูงสุดเป็น 500 ตัว และเพิ่มความเร็วตัวละครผู้เล่นตามระดับฐาน ===
    if (Blocks.coreShard) {
        Blocks.coreShard.unitCapModifier = 500;
        if (Blocks.coreShard.unitType) Blocks.coreShard.unitType.buildSpeed = 5.0;
    }
    if (Blocks.coreBastion) {
        Blocks.coreBastion.unitCapModifier = 500;
        if (Blocks.coreBastion.unitType) Blocks.coreBastion.unitType.buildSpeed = 5.0;
    }
    if (Blocks.coreFoundation) {
        Blocks.coreFoundation.unitCapModifier = 500;
        if (Blocks.coreFoundation.unitType) Blocks.coreFoundation.unitType.buildSpeed = 7.5;
    }
    if (Blocks.coreCitadel) {
        Blocks.coreCitadel.unitCapModifier = 500;
        if (Blocks.coreCitadel.unitType) Blocks.coreCitadel.unitType.buildSpeed = 7.5;
    }
    if (Blocks.coreNucleus) {
        Blocks.coreNucleus.unitCapModifier = 500;
        if (Blocks.coreNucleus.unitType) Blocks.coreNucleus.unitType.buildSpeed = 10.0;
    }
    if (Blocks.coreAcropolis) {
        Blocks.coreAcropolis.unitCapModifier = 500;
        if (Blocks.coreAcropolis.unitType) Blocks.coreAcropolis.unitType.buildSpeed = 10.0;
    }

    Log.info("=== มอดปรับความเร็วและยูนิตฐาน ทำงานสำเร็จ! ===");

} catch (err) {
    Log.err("Mod Core Error: " + err);
}
