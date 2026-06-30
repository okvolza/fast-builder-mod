try {
    // === ปรับขีดจำกัดยูนิตสูงสุดเป็น 500 ตัว และเพิ่มความเร็วตัวละครผู้เล่นตามระดับฐาน ===

    // [ระดับเล็ก] ฐาน Shard และ ฐาน Bastion -> ความเร็วสร้าง 5.0
    if (Blocks.coreShard) {
        Blocks.coreShard.unitCapModifier = 500;
        if (Blocks.coreShard.unitType) Blocks.coreShard.unitType.buildSpeed = 5.0;
    }
    if (Blocks.coreBastion) {
        Blocks.coreBastion.unitCapModifier = 500;
        if (Blocks.coreBastion.unitType) Blocks.coreBastion.unitType.buildSpeed = 5.0;
    }

    // [ระดับกลาง] ฐาน Foundation และ ฐาน Citadel -> ความเร็วสร้าง 7.5
    if (Blocks.coreFoundation) {
        Blocks.coreFoundation.unitCapModifier = 500;
        if (Blocks.coreFoundation.unitType) Blocks.coreFoundation.unitType.buildSpeed = 7.5;
    }
    if (Blocks.coreCitadel) {
        Blocks.coreCitadel.unitCapModifier = 500;
        if (Blocks.coreCitadel.unitType) Blocks.coreCitadel.unitType.buildSpeed = 7.5;
    }

    // [ระดับใหญ่] ฐาน Nucleus และ ฐาน Acropolis -> ความเร็วสร้าง 10.0
    if (Blocks.coreNucleus) {
        Blocks.coreNucleus.unitCapModifier = 500;
        if (Blocks.coreNucleus.unitType) Blocks.coreNucleus.unitType.buildSpeed = 10.0;
    }
    if (Blocks.coreAcropolis) {
        Blocks.coreAcropolis.unitCapModifier = 500;
        if (Blocks.coreAcropolis.unitType) Blocks.coreAcropolis.unitType.buildSpeed = 10.0;
    }

    // === ปรับความยาวสะพานไอเทมและของเหลวเป็น 10 บล็อก ===
    if (Blocks.bridgeConveyor) {
        Blocks.bridgeConveyor.range = 10;
    }
    if (Blocks.phaseConveyor) {
        Blocks.phaseConveyor.range = 10;
    }
    if (Blocks.bridgeConduit) {
        Blocks.bridgeConduit.range = 10;
    }
    if (Blocks.phaseConduit) {
        Blocks.phaseConduit.range = 10;
    }

    Log.info("=== มอดปรับความเร็วและยูนิตฐาน (เวอร์ชันรีเฟรช) ทำงานสำเร็จ! ===");

} catch (err) {
    Log.err("Mod Core Error: " + err);
}

