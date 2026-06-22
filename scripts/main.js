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

    // 3. 🛡️ ขยายเพดานยูนิตแบบอ้อม (ลดแต้มที่ใช้นับโควตาลง 100 เท่า)
    Vars.content.units().each(u => {
        // ปกติยูนิตระดับสูงจะกินโควตาเยอะ (เช่น บางตัวใช้ 2-4 แต้ม) 
        // เราบังคับให้ทุกตัวใช้แต้มแค่ 0.02 แต้ม ทำให้ปั๊มได้เยอะขึ้นมหาศาลก่อนจะเต็มลิมิต
        u.itemCapacity = 0.02; 
    });
});
