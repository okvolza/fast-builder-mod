Events.on(ClientLoadEvent, () => {
    // ==========================================
    // 📦 ฝั่งไอเทม (Item Bridges)
    // ==========================================
    
    // 1. สะพานไอเทมธรรมดา
    const itemBridge = Vars.content.getByName(ContentType.block, "bridge-conveyor");
    if (itemBridge != null) {
        itemBridge.range = 100;
    }

    // 2. สะพานไอเทมระยะไกล (ตัวอัปเกรด Phase)
    const phaseBridge = Vars.content.getByName(ContentType.block, "phase-bridge-conveyor");
    if (phaseBridge != null) {
        phaseBridge.range = 100;
    }

    // ==========================================
    // 💧 ฝั่งของเหลว (Liquid Bridges)
    // ==========================================
    
    // 3. สะพานของเหลวธรรมดา
    const liquidBridge = Vars.content.getByName(ContentType.block, "bridge-conduit");
    if (liquidBridge != null) {
        liquidBridge.range = 100;
    }

    // 4. สะพานของเหลวระยะไกล (ตัวอัปเกรด Phase)
    const phaseConduit = Vars.content.getByName(ContentType.block, "phase-conduit");
    if (phaseConduit != null) {
        phaseConduit.range = 100;
    }
});
