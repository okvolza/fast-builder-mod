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

    // 3. 🛡️ ขยายเพดานยูนิตทุกตัวในเกม (พื้นดิน อากาศ น้ำ)
    Vars.content.units().each(u => {
        // เปลี่ยนให้ยูนิตทุกตัวกินแต้มโควตาน้อยลงมหาศาล (เหลือตัวละ 0.01 แต้ม)
        // ทำให้คุณปั๊มหุ่นได้เยอะขึ้นกว่าเดิมถึง 100 เท่า ก่อนที่เพดานระบบจะเต็มครับ
        u.unitCapModifier = 0.01; 
    });
});
