Events.on(ClientLoadEvent, () => {
    const bridgeConveyor = Vars.content.getByName(ContentType.block, "bridge-conveyor");

    if (bridgeConveyor != null) {
        bridgeConveyor.range = 40;
        bridgeConveyor.itemCapacity = 150;
        
        // ใช้คำสั่งเคลียร์ตัวจับเวลาการส่งไอเทมเดิม เพื่อไม่ให้ UI ดึงค่าเก่ามาคำนวณซ้อน
        bridgeConveyor.transportTime = 0.2; 
    }
});
