#!/usr/bin/env python3
"""rbk-cv.html üretir: cv-template.html içindeki {{IMG:isim}} yer tutucularını
assets/ klasöründeki görsellerle (base64 data URI) doldurur.

Kullanım:  cd src && python3 build.py
Çıktı:     ../rbk-cv.html
"""
import base64, pathlib, re, sys

SRC = pathlib.Path(__file__).parent
OUT = SRC.parent / "rbk-cv.html"
MIME = {".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png"}


def find_asset(name: str) -> pathlib.Path:
    for ext in MIME:
        p = SRC / "assets" / f"{name}{ext}"
        if p.exists():
            return p
    sys.exit(f"HATA: assets/{name}.* bulunamadı")


def main() -> None:
    html = (SRC / "cv-template.html").read_text()

    def sub(m: re.Match) -> str:
        p = find_asset(m.group(1))
        return base64.b64encode(p.read_bytes()).decode()

    out = re.sub(r"\{\{IMG:([a-z0-9-]+)\}\}", sub, html)
    if "{{IMG" in out:
        sys.exit("HATA: doldurulamayan yer tutucu kaldı")
    OUT.write_text(out)
    print(f"yazıldı: {OUT} ({len(out)//1024} KB)")


if __name__ == "__main__":
    main()
