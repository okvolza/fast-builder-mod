try {
    // === 1. ปรับขีดจำกัดยูนิตสูงสุดเป็น 500 ตัว และเพิ่มความเร็วตัวละครผู้เล่นตามระดับฐาน ===
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

    // === 2. บังคับแก้ไขระยะสะพานไอเทมและของเหลวตอนเปิดเกม (เกมไม่ค้างชัวร์) ===
    
    // ดึงค่าบล็อกสะพานปกติมาเปลี่ยนตัวเลขในระดับโครงสร้างลึก
    var bridge = Blocks.bridgeConveyor;
    if (bridge != null) {
        bridge.range = 10;
    }

    var phaseBridge = Blocks.phaseConveyor;
    if (phaseBridge != null) {
        phaseBridge.range = 10;
    }

    var liquidBridge = Blocks.bridgeConduit;
    if (liquidBridge != null) {
        liquidBridge.range = 10;
    }

    var phaseLiquid = Blocks.phaseConduit;
    if (phaseLiquid != null) {
        phaseLiquid.range = 10;
    }

    Log.info("=== มอดปรับความเร็วและยูนิตฐาน + สะพาน 10 บล็อก ทำงานสำเร็จ! ===");

} catch (err) {
    Log.err("Mod Core Error: " + err);
}
