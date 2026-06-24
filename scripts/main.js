try {
    // === ข้อ 1 และ ข้อ 3: เพิ่มความเร็วตัวละครผู้เล่นตามระดับฐาน และขีดจำกัดยูนิตสูงสุด 500 ตัว ===

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


    // === ข้อ 2: ทำให้สะพานยาวขึ้น 50 ช่อง (รวมทั้งสายพานไอเทม และ ท่อน้ำของเหลว ทุกดาว) ===
    const bridges = [
        Blocks.bridgeConveyor,       // สะพานสายพานปกติ
        Blocks.phaseBridgeConveyor,  // สะพานสายพานเฟส
        Blocks.ductBridge,           // สะพานท่อลำเลียงดาวเอระคีย์
        Blocks.bridgeConduit,        // สะพานท่อน้ำปกติ
        Blocks.phaseConduit          // สะพานท่อน้ำเฟส
    ];

    bridges.forEach(b => {
        if (b != null) {
            b.range = 50; // ปรับความยาวสะพานเป็น 50 ช่อง
        }
    });

    Log.info("=== ม็อด 3 ฟังก์ชันรันสำเร็จเรียบร้อย! ===");

} catch (err) {
    Log.err("Mod Core Error: " + err);
}
