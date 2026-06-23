Events.on(ClientLoadEvent, () => {
    // 1. สะพานไอเทม (ขยายความยาว / ขยายความจุ / และโกงความเร็วให้วิ่งสปีดนรก)
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;              // ระยะส่งยาว 100 ช่อง
        itemBridge.itemCapacity = 100;       // ความจุถังพัก 100 ไอเทม
        
        // ⚡ [เคล็ดลับปลดล็อกความเร็ว] 
        // ค่าดั้งเดิมของเกมคือ 4.0 (ยิ่งค่าน้อย ไอเทมยิ่งไหลถี่และส่งได้ไวขึ้นมหาศาล)
        // ปรับเป็น 0.05 เพื่อให้ไอเทมถมทะลักข้ามสะพานด้วยความเร็วสูงสุดจริงในเกม!
        itemBridge.arrowSpacing = 0.05; 
    }

    // 2. สะพานของเหลว (ยาว 100 / จุ 100)
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;
        liquidBridge.liquidCapacity = 100;
    }
});
