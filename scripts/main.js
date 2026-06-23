Events.on(ClientLoadEvent, () => {
    // ==========================================
    // 1. สะพานไอเทม (Item Bridge)
    // ==========================================
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;              // ระยะส่งยาว 100 ช่อง
        itemBridge.itemCapacity = 100;       // ความจุถังพัก 100 ไอเทม
        itemBridge.transportTime = 0.01;     // เวลาวาร์ปไอเทมข้ามฝั่ง (ยิ่งน้อยยิ่งไว)
        itemBridge.speed = 15.0;             // สปีดสายพาน เข้า-ออก (แก้คอขวด วิ่งไวเต็มสูบ)
    }

    // ==========================================
    // 2. สะพานของเหลว (Liquid Bridge)
    // ==========================================
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;            // ระยะส่งยาว 100 ช่อง
        liquidBridge.liquidCapacity = 100;   // ความจุถังพักของเหลว 100 หน่วย
    }
});
