Events.on(ClientLoadEvent, () => {
    // สะพานไอเทม
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;
        itemBridge.itemCapacity = 100;
        itemBridge.allOutputs = true; // 🌟 ปลดล็อกให้ปลายทางปล่อยไอเทมออกได้รอบตัว (4 ทิศ)
    }

    // สะพานของเหลว
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;
        liquidBridge.liquidCapacity = 100;
    }
});
