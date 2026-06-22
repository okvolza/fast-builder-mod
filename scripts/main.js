Events.on(ClientLoadEvent, () => {
    const bridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (bridge != null) {
        bridge.range = 100;        // ยาว 100 ช่อง
        bridge.itemCapacity = 100; // จุ 100 ไอเทม
    }
});
