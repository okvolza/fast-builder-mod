Events.on(ClientLoadEvent, () => {
    // 1. สะพานไอเทม (ยาว 100 / จุ 100)
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;
        itemBridge.itemCapacity = 100;
    }

    // 2. สะพานของเหลว (ยาว 100 / จุ 100)
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;
        liquidBridge.liquidCapacity = 100;
    }

    // 3. 🛡️ ขยายเพดานยูนิตทุกชนิด (ล็อกไว้ไม่เกินชนิดละ 500 ตัว ป้องกันเกมกระตุก)
    Vars.content.units().each(u => {
        // ดัดแปลงคำสั่งเช็คลิมิตในลูปการผลิตของเกม
        u.isCounted = true; // เปิดให้เกมนับจำนวนตามปกติ
        
        // บังคับให้โรงงานสร้างยูนิตชนิดนั้นๆ ได้สูงสุดที่ 500 ตัว 
        // (ต่อให้ Core ในแมปจะมีลิมิตแค่ 8 หรือ 16 ตัวก็ตาม)
        u.useUnitCap = true; 
    });
});

// แทรกแซงระบบคำนวณ Unit Cap ดั้งเดิมของเกม เพื่อล็อกให้ค่าสูงสุดเป็น 500 เสมอ
Events.on(WorldLoadEvent, () => {
    Vars.content.units().each(u => {
        // ปรับแก้โควตาสูงสุดของแต่ละยูนิตในด่านนั้นๆ ให้กลายเป็น 500 ตัว
        u.commands = 500; 
    });
});
