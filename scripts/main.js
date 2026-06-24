try {
    // === ข้อ 1 และ ข้อ 3: เพิ่มความเร็วตัวละครผู้เล่นตามระดับฐาน และขีดจำกัดยูนิตสูงสุด 500 ตัว (ส่วนนี้ทำงานได้ดีอยู่แล้ว) ===

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


    // === ข้อ 2: แก้ไขสะพานให้ยาว 50 ช่อง (เปลี่ยนแบบเจาะจงรายตัว ไม่ผ่านลูป ป้องกันระบบเอ๋อ) ===

    if (Blocks.bridgeConveyor) {
        Blocks.bridgeConveyor.range = 50;       // สะพานสายพานปกติ (Serpulo)
    }
    if (Blocks.phaseBridgeConveyor) {
        Blocks.phaseBridgeConveyor.range = 50;  // สะพานสายพานเฟส (Serpulo)
    }
    if (Blocks.ductBridge) {
        Blocks.ductBridge.range = 50;           // สะพานท่อลำเลียงไอเทม (Erekir)
    }
    if (Blocks.bridgeConduit) {
        Blocks.bridgeConduit.range = 50;        // สะพานท่อน้ำ/ของเหลวปกติ (Serpulo)
    }
    if (Blocks.phaseConduit) {
        Blocks.phaseConduit.range = 50;         // สะพานท่อน้ำเฟส (Serpulo)
    }

    Log.info("=== ม็อดอัปเดตระบบสะพานตรง ๆ สำเร็จเรียบร้อย! ===");

} catch (err) {
    Log.err("Mod Core Error: " + err);
}
