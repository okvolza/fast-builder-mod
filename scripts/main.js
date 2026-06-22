Events.on(ClientLoadEvent, () => {
    const bridgeConveyor = Vars.content.getByName(ContentType.block, "bridge-conveyor");

    if (bridgeConveyor != null) {
        bridgeConveyor.range = 40;
        bridgeConveyor.itemCapacity = 150;
        bridgeConveyor.transportTime = 0.2; // ความเร็วทำงานจริง 300 ไอเท็ม/วินาที
    }

    // --- โซนซ่อนและแก้ข้อความ UI ภาษาไทย ---
    // บังคับเปลี่ยนคำอธิบายของสะพานไอเทมเพื่อกลบ UI ที่ซ้อนกันมั่ว
    Core.bundle.properties.put(
        "block.bridge-conveyor.description", 
        "เคลื่อนย้ายไอเท็มข้ามสิ่งก่อสร้างหรือกำแพงทั่วไป\n[🟢 ม็อดอัปเกรดความเร็วเป็น 300 ชิ้น/วินาที เรียบร้อยแล้ว]"
    );
});
