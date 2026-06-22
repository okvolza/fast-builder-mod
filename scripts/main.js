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

    // 3. 🛡️ ขยายเพดานยูนิต (ดิน น้ำ อากาศ) โดยเพิ่มโควตาที่ตัวโรงงานแทน
    Vars.content.blocks().each(b => {
        // เช็คว่าถ้าเป็นโรงงานสร้างยูนิต หรือแท่นอัปเกรดสายยูนิต
        if (b instanceof UnitFactory || b instanceof Reconstructor) {
            b.unitCapModifier = 500; // สร้างโรงงานนี้ปุ๊บ ได้โควตายูนิตเพิ่มทันที 500 ตัว!
        }
    });
});
