Events.on(ClientLoadEvent, () => {
    // สะพานไอเทม
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;
        itemBridge.itemCapacity = 100;
    }

    // สะพานของเหลว
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;        // ยาว 100 ช่อง
        liquidBridge.liquidCapacity = 100; // จุของเหลว 100 หน่วย
    }
});
