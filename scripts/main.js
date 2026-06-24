Events.on(ClientLoadEvent, () => {
    // === ข้อ 1 และ ข้อ 3: เพิ่มความเร็วตัวละครผู้เล่นตามระดับฐาน และปรับขีดจำกัดยูนิตเป็น 500 ===

    // [ระดับเล็ก] ฐาน Shard (Serpulo) และ ฐาน Bastion (Erekir) -> ความเร็วสร้าง 5.0
    if (Blocks.coreShard) {
        Blocks.coreShard.unitCapModifier = 500;
        if (Blocks.coreShard.unitType) Blocks.coreShard.unitType.buildSpeed = 5.0;
    }
    if (Blocks.coreBastion) {
        Blocks.coreBastion.unitCapModifier = 500;
        if (Blocks.coreBastion.unitType) Blocks.coreBastion.unitType.buildSpeed = 5.0;
    }

    // [ระดับกลาง] ฐาน Foundation (Serpulo) และ ฐาน Citadel (Erekir) -> ความเร็วสร้าง 7.5
    if (Blocks.coreFoundation) {
        Blocks.coreFoundation.unitCapModifier = 500;
        if (Blocks.coreFoundation.unitType) Blocks.coreFoundation.unitType.buildSpeed = 7.5;
    }
    if (Blocks.coreCitadel) {
        Blocks.coreCitadel.unitCapModifier = 500;
        if (Blocks.coreCitadel.unitType) Blocks.coreCitadel.unitType.buildSpeed = 7.5;
    }

    // [ระดับใหญ่] ฐาน Nucleus (Serpulo) และ ฐาน Acropolis (Erekir) -> ความเร็วสร้าง 10.0
    if (Blocks.coreNucleus) {
        Blocks.coreNucleus.unitCapModifier = 500;
        if (Blocks.coreNucleus.unitType) Blocks.coreNucleus.unitType.buildSpeed = 10.0;
    }
    if (Blocks.coreAcropolis) {
        Blocks.coreAcropolis.unitCapModifier = 500;
        if (Blocks.coreAcropolis.unitType) Blocks.coreAcropolis.unitType.buildSpeed = 10.0;
    }


    // === ข้อ 2: ทำให้สะพานยาวขึ้น 50 ช่อง (ครอบคลุมทั้งของแข็งและของเหลว ทั้งสองดาว) ===
    const bridges = [
        Blocks.bridgeConveyor,       // สะพานสายพานลำเลียงไอเทมปกติ
        Blocks.phaseBridgeConveyor,  // สะพานสายพานเฟส (Phase)
        Blocks.ductBridge,           // สะพานท่อลำเลียงไอเทมดาวเอระคีย์ (Duct)
        Blocks.bridgeConduit,        // สะพานท่อน้ำ/ของเหลวปกติ
        Blocks.phaseConduit          // สะพานท่อน้ำเฟส (Phase)
    ];

    bridges.forEach(b => {
        if (b != null) {
            b.range = 50; // ปรับระยะความยาวสะพานเป็น 50 ช่อง
        }
    });
});
