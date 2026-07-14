#!/usr/bin/env python3
"""Assign a unique, context-tagged photo to every site image slot."""
from __future__ import annotations

import hashlib
import json
import ssl
import time
import urllib.request
from pathlib import Path

ROOT = Path.cwd()
BASE = ROOT / "public" / "images"
CTX = ssl.create_default_context()
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
}

# Verified Unsplash industrial photos (will be used first, each at most once)
UNSPLASH = [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1494415859740-21e878dd929d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1474487548417-781ae23417da?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1434626881859-194d67b2b86b?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c9364?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1521791136064-7986c2928716?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1593642532400-2682810df925?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1497435339561-e0ddd8991f1e?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1542601906990-b4d1fb910548?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1573164574573-062779012e86?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1580894744800-4ec9e5f29d1b?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1581092160607-ee22621b1261?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1581094794161-082d5e58b0e2?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1605106702732-22fc7c326d07?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1423666635761-e6b68c25aa4c?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1498050102123-f76ee5e7d8a7?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1522202176988-662fde3428ee?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1593642532973-6bec5aa1d00a?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1485088028193-98b385f0e7d1?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1590674899484-d5640e854816?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1464226184884-fa787e487e80?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1520607166910-22f39d62990b?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format",
    "https://images.unsplash.com/photo-1530269729783-2e15c5b0e65a?w=1400&q=80&auto=format",
]


def flickr(tags: str, lock: int) -> str:
    # Contextual images with deterministic uniqueness via lock
    return f"https://loremflickr.com/1400/933/{tags}/all?lock={lock}"


def picsum(seed: str) -> str:
    return f"https://picsum.photos/seed/{seed}/1400/933"


def md5(b: bytes) -> str:
    return hashlib.md5(b).hexdigest()


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        data = r.read()
        ctype = r.headers.get("Content-Type", "")
        if "image" not in ctype and len(data) < 3000:
            raise RuntimeError(f"not image ctype={ctype} size={len(data)}")
        if len(data) < 2500:
            raise RuntimeError(f"too small {len(data)}")
        return data


# (relative path under public/images, tags for flickr fallback, preferred unsplash order index start)
SLOTS: list[tuple[str, str]] = []


def slot(rel: str, tags: str):
    SLOTS.append((rel, tags))


# Keep hero files only for hero — do not rewrite them; reserve their hashes.
for s, t in [
    ("industries/mining.jpg", "mining,quarry,excavator"),
    ("industries/cement.jpg", "cement,factory,silo"),
    ("industries/steel.jpg", "steel,foundry,metal"),
    ("industries/food.jpg", "food,factory,processing"),
    ("industries/packaging.jpg", "warehouse,packaging,boxes"),
    ("industries/glass.jpg", "glass,manufacturing,furnace"),
    ("industries/railway.jpg", "railway,train,tracks"),
    ("industries/agriculture.jpg", "agriculture,tractor,farm"),
    ("industries/construction.jpg", "construction,crane,site"),
    ("industries/marine.jpg", "ship,port,cargo"),
    ("industries/energy.jpg", "powerplant,turbine,energy"),
    ("industries/automotive.jpg", "automotive,assembly,car"),
    ("industries/chemical.jpg", "chemical,plant,pipes"),
    ("industries/paper.jpg", "paper,mill,rolls"),
    ("industries/textile.jpg", "textile,loom,factory"),
    ("industries/beverage.jpg", "beverage,bottling,brewery"),
    ("equipment/bearings.jpg", "bearing,mechanical,metal"),
    ("equipment/gearboxes.jpg", "gear,gearbox,industrial"),
    ("equipment/chains.jpg", "chain,industrial,mechanical"),
    ("equipment/compressors.jpg", "compressor,air,industrial"),
    ("equipment/hydraulics.jpg", "hydraulic,cylinder,machine"),
    ("equipment/vacuum.jpg", "vacuum,pump,laboratory"),
    ("equipment/open-gears.jpg", "gear,large,industrial"),
    ("equipment/conveyors.jpg", "conveyor,belt,factory"),
    ("equipment/motors.jpg", "electric,motor,industrial"),
    ("equipment/mixers.jpg", "mixer,tank,industrial"),
    ("equipment/food-machines.jpg", "food,machine,production"),
    ("equipment/packaging-machines.jpg", "packaging,machine,factory"),
    ("categories/oils.jpg", "oil,barrel,petroleum"),
    ("categories/greases.jpg", "grease,lubricant,mechanic"),
    ("categories/sprays.jpg", "spray,aerosol,workshop"),
    ("categories/cleaners.jpg", "cleaning,industrial,workshop"),
    ("blog/lubricants.jpg", "oil,laboratory,viscosity"),
    ("blog/maintenance.jpg", "maintenance,technician,repair"),
    ("blog/bearings.jpg", "bearing,engineering,closeup"),
    ("blog/hydraulic.jpg", "hydraulic,hose,machinery"),
    ("blog/food-grade.jpg", "cleanroom,food,equipment"),
    ("blog/factory.jpg", "factory,industrial,interior"),
    ("blog/energy.jpg", "energy,efficiency,plant"),
    ("blog/gears.jpg", "gears,precision,engineering"),
    ("cases/mining.jpg", "mining,truck,industry"),
    ("cases/food.jpg", "food,plant,production"),
    ("cases/steel.jpg", "steelworks,furnace,metal"),
    ("cases/packaging.jpg", "logistics,warehouse,cartons"),
    ("cases/cement.jpg", "cement,works,industry"),
    ("cases/railway.jpg", "railway,maintenance,wagon"),
    ("about/factory.jpg", "factory,engineering,industry"),
    ("shared/og-image.jpg", "industrial,factory,modern"),
    ("products/hydraulic-hlp-46.jpg", "hydraulic,oil,machinery"),
    ("products/gear-oil.jpg", "gearbox,oil,industrial"),
    ("products/food-grade.jpg", "food,lubricant,clean"),
    ("products/bearing-grease.jpg", "grease,bearing,mechanic"),
    ("products/compressor-oil.jpg", "compressor,oil,engine"),
]:
    slot(s, t)

for i in range(1, 171):
    # Rotate contextual tags for catalog uniqueness + descriptiveness
    tagsets = [
        "industrial,oil,machinery",
        "lubricant,factory,engineer",
        "hydraulic,system,pipes",
        "gear,mechanical,workshop",
        "bearing,metal,closeup",
        "compressor,plant,equipment",
        "food,factory,processing",
        "warehouse,drums,oil",
        "maintenance,tools,industry",
        "steel,factory,machinery",
    ]
    slot(f"products/catalog/{i:03d}.jpg", tagsets[(i - 1) % len(tagsets)])


def main():
    used: set[str] = set()
    # Reserve hero uniqueness
    for p in (BASE / "hero").glob("*"):
        if p.suffix.lower() in {".jpg", ".jpeg", ".png"} and "Gemini" not in p.name:
            used.add(md5(p.read_bytes()))
            print("reserve", p.name)
    hlp = BASE / "products" / "hydraulic-hlp-46.png"
    if hlp.exists():
        used.add(md5(hlp.read_bytes()))

    unsplash_i = 0
    lock = 9000
    manifest = {}
    failed = []

    for idx, (rel, tags) in enumerate(SLOTS):
        dest = BASE / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        candidates = []
        # Prefer Unsplash pool first for early slots (more descriptive stock)
        if unsplash_i < len(UNSPLASH):
            candidates.append(UNSPLASH[unsplash_i])
            unsplash_i += 1
        candidates.append(flickr(tags, lock + idx * 17 + 3))
        candidates.append(picsum(f"monvera-{rel.replace('/', '-')}-{idx}"))
        candidates.append(flickr(tags.replace(",", "+"), lock + idx * 31 + 99))

        placed = False
        last_err = None
        for url in candidates:
            try:
                data = fetch(url)
                h = md5(data)
                if h in used:
                    last_err = "hash-dup"
                    continue
                dest.write_bytes(data)
                used.add(h)
                manifest[rel] = {"tags": tags, "bytes": len(data), "md5": h, "src": url.split("?")[0][-48:]}
                print(f"OK [{idx+1}/{len(SLOTS)}] {rel} ({len(data)} bytes) {tags}")
                placed = True
                time.sleep(0.12)
                break
            except Exception as e:
                last_err = e
                time.sleep(0.2)
        if not placed:
            print("FAIL", rel, last_err)
            failed.append(rel)

    out = BASE / "manifest.json"
    out.write_text(json.dumps(manifest, indent=2))
    print("DONE", len(manifest), "failed", len(failed))
    if failed:
        print(failed)


if __name__ == "__main__":
    main()
