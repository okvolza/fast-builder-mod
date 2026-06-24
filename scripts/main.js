try {
    Events.on(ClientLoadEvent, () => {
        try {
            // 1. เพิ่มความเร็วการสร้างของตัวละคร (ปรับตามระดับฐาน Core: 5.0, 7.5, 10.0)
            // 3. เพิ่มขีดจำกัดยูนิต (Unit Cap) ของฐานเป็นสูงสุด 500 ตัว
            const coreConfigs = [
                { names: ["core-shard", "core-bastion"], speed: 5.0 },       // ระดับเล็ก (5.0)
                { names: ["core-foundation", "core-citadel"], speed: 7.5 },  // ระดับกลาง (7.5)
                { names: ["core-nucleus", "core-acropolis"], speed: 10.0 }   // ระดับใหญ่ (10.0)
            ];

            coreConfigs.forEach(cfg => {
                cfg.names.forEach(name => {
                    let core = Vars.content.getByName(ContentType.block, name);
                    if (core != null) {
                        core.buildSpeed = cfg.speed;       // ความเร็วการสร้าง
                        core.unitCapModifier = 500;       // ขีดจำกัดยูนิตสูงสุด 500 ตัว
                    }
                });
            });

            // 2. ทำให้สะพานยาวขึ้น 50 ช่อง (รวมทั้งสายพานลำเลียงไอเทม และท่อน้ำของเหลว)
            const bridges = ["bridge-conveyor", "phase-bridge-conveyor", "bridge-conduit", "phase-conduit"];
            bridges.forEach(name => {
                let b = Vars.content.getByName(ContentType.block, name);
                if (b != null) {
                    b.range = 50;
                }
            });

        } catch (loadErr) {
            Log.err("Mod Load Error: " + loadErr);
        }
    });
} catch (globalErr) {
    Log.err("Global Mod Error: " + globalErr);
}
