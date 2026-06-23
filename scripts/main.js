Events.on(ClientLoadEvent, () => {
    // 1. สะพานไอเทม (ยาว 100 / จุ 100 / ส่งไวปรี๊ด)
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;
        itemBridge.itemCapacity = 100;
        itemBridge.transportTime = 0.1; // ⚡ ยิ่งค่าน้อยยิ่งส่งไว! (0.1 คือเร็วขึ้นกว่าเดิมมหาศาล)
    }

    // 2. สะพานของเหลว (ยาว 100 / จุ 100)
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;
        liquidBridge.liquidCapacity = 100;
    }
});
