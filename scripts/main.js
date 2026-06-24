try {
    Events.on(ClientLoadEvent, () => {
        try {
            // 1. ขยายระยะสะพานทุกชนิด (ไอเทม/ของเหลว) เป็น 100 ช่อง
            const bridges = ["bridge-conveyor", "phase-bridge-conveyor", "bridge-conduit", "phase-conduit"];
            bridges.forEach(name => {
                let b = Vars.content.getByName(ContentType.block, name);
                if (b) b.range = 100;
            });

            // 2. ปรับความเร็วสร้างฐานทั้ง 2 ดาว + ปลดล็อกยูนิตเป็น 2000 ตัว
            const coreConfigs = [
                { names: ["core-shard", "core-bastion"], speed: 5.0 },       // ฐานเล็ก ทั้ง 2 ดาว
                { names: ["core-foundation", "core-citadel"], speed: 7.5 },  // ฐานกลาง ทั้ง 2 ดาว
                { names: ["core-nucleus", "core-acropolis"], speed: 10.0 }   // ฐานใหญ่ ทั้ง 2 ดาว
            ];

            coreConfigs.forEach(cfg => {
                cfg.names.forEach(name => {
                    let core = Vars.content.getByName(ContentType.block, name);
                    if (core) {
                        core.unitCapModifier = 2000; 
                        core.buildSpeed = cfg.speed; 
                    }
                });
            });

        } catch (loadErr) {
            Log.err("Mod Load Error: " + loadErr);
        }
    });
} catch (globalErr) {
    Log.err("Global Mod Error: " + globalErr);
}
