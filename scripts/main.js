Events.on(EventType.ClientLoadEvent, () => {
    // === ข้อ 1 และ ข้อ 3: เพิ่มความเร็วตัวละครผู้เล่น และปรับขีดจำกัดยูนิตฐานเป็น 500 ===

    // [ระดับเล็ก] ฐาน Shard และ ฐาน Bastion -> ความเร็วสร้าง 5.0
    if (Blocks.coreShard && Blocks.coreShard.unitType) {
        Blocks.coreShard.unitCapModifier = 500;
        Blocks.coreShard.unitType.buildSpeed = 5.0;
    }
    if (Blocks.coreBastion && Blocks.coreBastion.unitType) {
        Blocks.coreBastion.unitCapModifier = 500;
        Blocks.coreBastion.unitType.buildSpeed = 5.0;
    }

    // [ระดับกลาง] ฐาน Foundation และ ฐาน Citadel -> ความเร็วสร้าง 7.5
    if (Blocks.coreFoundation && Blocks.coreFoundation.unitType) {
        Blocks.coreFoundation.unitCapModifier = 500;
        Blocks.coreFoundation.unitType.buildSpeed = 7.5;
    }
    if (Blocks.coreCitadel && Blocks.coreCitadel.unitType) {
        Blocks.coreCitadel.unitCapModifier = 500;
        Blocks.coreCitadel.unitType.buildSpeed = 7.5;
    }

    // [ระดับใหญ่] ฐาน Nucleus และ ฐาน Acropolis -> ความเร็วสร้าง 10.0
    if (Blocks.coreNucleus && Blocks.coreNucleus.unitType) {
        Blocks.coreNucleus.unitCapModifier = 500;
        Blocks.coreNucleus.unitType.buildSpeed = 10.0;
    }
    if (Blocks.coreAcropolis && Blocks.coreAcropolis.unitType) {
        Blocks.coreAcropolis.unitCapModifier = 500;
        Blocks.coreAcropolis.unitType.buildSpeed = 10.0;
    }


    // === ข้อ 2: ทำให้สะพานยาวขึ้น 50 ช่อง (ทั้งของแข็งและของเหลว ทุกดาว) ===
    const bridges = [
        Blocks.bridgeConveyor,       // สะพานสายพานปกติ
        Blocks.phaseBridgeConveyor,  // สะพานสายพานเฟส
        Blocks.ductBridge,           // สะพานท่อดาวเอระคีย์
        Blocks.bridgeConduit,        // สะพานท่อน้ำปกติ
        Blocks.phaseConduit          // สะพานท่อน้ำเฟส
    ];

    bridges.forEach(b => {
        if (b != null) {
            b.range = 50; // ปรับความยาวสะพานเป็น 50 ช่อง
        }
    });
});
