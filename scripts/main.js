try {
    Events.on(ClientLoadEvent, () => {
        try {
            // 1. ขยายระยะสะพานทุกชนิด (ไอเทม/ของเหลว/Phase) เป็น 100 ช่อง
            const bridges = ["bridge-conveyor", "phase-bridge-conveyor", "bridge-conduit", "phase-conduit"];
            bridges.forEach(name => {
                let b = Vars.content.getByName(ContentType.block, name);
                if (b) b.range = 100;
            });

            // 2. ปรับความเร็วสร้างฐาน + ความจุไอเทม + ปลดล็อกยูนิต 2000 ตัว (สัมพันธ์ตามระดับ)
            const cores = [
                { name: "core-shard", speed: 5.0, capacity: 10000 },
                { name: "core-bastion", speed: 5.0, capacity: 10000 },
                { name: "core-foundation", speed: 7.5, capacity: 20000 },
                { name: "core-citadel", speed: 7.5, capacity: 20000 },
                { name: "core-nucleus", speed: 10.0, capacity: 30000 },
                { name: "core-acropolis", speed: 10.0, capacity: 40000 }
            ];

            cores.forEach(c => {
                let core = Vars.content.getByName(ContentType.block, c.name);
                if (core) {
                    core.unitCapModifier = 2000;
                    core.buildSpeed = c.speed;
                    core.itemCapacity = c.capacity;
                }
            });

            // 3. ปรับความจุของคลังเก็บข้อมูลไอเทม (Storage Blocks) ทั้ง 2 ดาว
            const storages = [
                { name: "container", capacity: 5000 },
                { name: "reinforced-container", capacity: 5000 },
                { name: "vault", capacity: 20000 },
                { name: "reinforced-vault", capacity: 30000 }
            ];

            storages.forEach(s => {
                let storage = Vars.content.getByName(ContentType.block, s.name);
                if (storage) storage.itemCapacity = s.capacity;
            });

        } catch (loadErr) {
            Log.err("Mod Load Error: " + loadErr);
        }
    });
} catch (globalErr) {
    Log.err("Global Mod Error: " + globalErr);
}
