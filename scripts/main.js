Events.on(ClientLoadEvent, () => {
    const bridgeConveyor = Vars.content.getByName(ContentType.block, "bridge-conveyor");

    if (bridgeConveyor != null) {
        bridgeConveyor.range = 40;
        bridgeConveyor.itemCapacity = 150;
        bridgeConveyor.transportTime = 0.2; 
        
        // --- 🛠️ ส่วนแก้ปัญหาซูมแล้วสะพานหาย ---
        // บังคับให้ระบบเรนเดอร์เส้นสะพานตลอดเวลา แม้จะซูมเข้าไปใกล้ๆ ก็ตาม
        bridgeConveyor.fadeIn = false; // ปิดการจางหายของเส้น
    }

    // ส่วนของข้อความอธิบายภาษาไทย
    Core.bundle.properties.put(
        "block.bridge-conveyor.description", 
        "เคลื่อนย้ายไอเท็มข้ามสิ่งก่อสร้างหรือกำแพงทั่วไป\n[🟢 ม็อดอัปเกรดความเร็วเป็น 300 ชิ้น/วินาที และเพิ่มระยะเรียบร้อยแล้ว]"
    );
});
