"""
Organize scraped muzejohrid.mk content into project folder structure.
Copies TXT files -> content/  (for GitHub)
Copies images   -> public/images/  (local only, not for GitHub)
"""

import os
import re
import shutil
import urllib.parse
import sys

sys.stdout.reconfigure(encoding="utf-8")

SRC_TXT = r"C:\Users\user\Desktop\zavod i muzej\web\stranici"
SRC_IMG = r"C:\Users\user\Desktop\zavod i muzej\web\sliki"

PROJECT = r"C:\Users\user\Desktop\My Ai World\web-muzej-ohrid\muzejohrid-web"
DST_TXT = os.path.join(PROJECT, "content")
DST_IMG = os.path.join(PROJECT, "public", "images")

KEYWORDS = {
    "atrakcii": [
        # мк
        "театар", "тврдина", "плаошник", "остров", "самоилова", "цареви",
        "кули", "лихнидос", "наколна", "подводно", "безистен", "чинар",
        "климент", "наум", "горица", "антички", "римски", "средновековн",
        "реконструкција", "виртуелна", "наколно",
        # lat/en
        "teatar", "tvrdina", "plaoshnik", "ostrov", "samoilova", "anticki",
        "antique-theater", "ohrid-lake", "lokali", "nakol", "underwater",
        "reconstruction", "medieval", "ancient", "fortress", "basilica",
        "house-of-robev", "robev", "early-christian", "manchevci",
        "site-of", "archaeological-site",
    ],
    "zbirki": [
        # мк
        "збирки", "збирка", "колекции", "колекција", "артефакти", "антологија",
        "икони", "галериј", "нумизматик", "поставка", "музеј-на-вода",
        "конзерватор", "реставраци", "наод", "ченто", "крсте", "сокол",
        "марковски", "прличев", "виолина", "банери", "постојан", "иконостас",
        "фреска", "ракопис", "нумизмат", "монети", "оружје", "накит",
        # lat/en
        "zbirka", "kolekcija", "ikoni", "galerij", "numizmat", "postavka",
        "muzej-na-voda", "konzervator", "restavraci", "woodcarving",
        "aprons", "stockings", "tradition", "collection", "manuscripts",
        "icon-gallery", "icons", "liturgical", "ethnolog", "archaeological",
        "historical-collection", "contemporary-art", "byzantium",
        "golden-faces", "macedonian-kings", "celts", "numismatic",
        "prehistoric", "antique-collection",
    ],
    "nastani": [
        # мк
        "настани", "настан", "активности", "активност", "архива",
        "фестивал", "прослава", "промоција", "концерт", "работилница",
        "предавање", "конференција", "симпозиум", "трибина",
        "ги-запознаваме", "стихови", "промовирање", "отворање", "свечен",
        "одбележување", "годишнина", "меморијал", "ден-на-", "ден-",
        "меѓународен-ден", "меѓународен", "традиционал", "изложба",
        "освојување", "доделување", "награда", "саем", "изложувач",
        "септември", "октомври", "ноември", "декември", "јануари",
        "февруари", "март", "април", "мај", "јуни", "јули", "август",
        # lat / en
        "nastani", "aktivnosti", "festival", "izlozba", "traditional",
        "exhibition", "international", "museum-day", "occasion",
        "activities", "promote", "open", "event",
        # paginated blog pages (numbers like 32-2.txt)
    ],
    "za-nas": [
        # мк
        "за-нас", "мисија", "историја", "вработен", "директор",
        "управен", "совет", "годишен-план", "завршна-сметка", "буџет",
        "сметка", "финансии", "извештај", "набавки", "одлука",
        "донаторска", "сопствена", "анкета", "статут", "правилник",
        "организациска", "структура", "раководство", "вработување",
        # lat/en
        "za-nas", "misija", "istorija", "vraboten", "direktor",
        "godishen", "zavrsna", "budzet", "finansii", "izvestaj",
        "nabavki", "odluka", "administrative", "author_muzej",
        "history.txt", "about", "en.txt", "en_author",
    ],
    "poseti": [
        # мк
        "посета-на", "работно-време", "цени", "влезот", "бесплатен",
        "пристап", "посетители", "туристи", "летна-сезона", "во-посета",
        "зимско-работно", "летно-работно", "работно", "влез-ќе",
        # lat
        "poseta", "rabotno-vreme", "ceni", "pristap", "posetiteli",
        "letna-sezona", "zimsko",
    ],
    "ohrid-pas": [
        "охрид-пас", "ohrid-pas", "city-pass", "citypas",
    ],
    "kontakt": [
        "контакт", "адреса", "телефон", "kontakt", "contact",
    ],
}

# Paginated blog pages: match "32-2", "145-2", etc.
PAGINATED_RE = re.compile(r"^\d+-\d+\.txt$")


def categorize(decoded_name: str) -> str:
    # WordPress attachment pages — useless for content
    if decoded_name.startswith("en_images_galleries_") or decoded_name.startswith("images_galleries_"):
        return "galerii"

    # Paginated pages → nastani (archived news)
    if PAGINATED_RE.match(decoded_name):
        return "nastani"

    # author_muzej pages → za-nas
    if decoded_name.startswith("author_muzej"):
        return "za-nas"

    name = decoded_name.lower()
    for category, keywords in KEYWORDS.items():
        for kw in keywords:
            if kw.lower() in name:
                return category
    return "ostanato"


def safe_copy(src_path: str, dst_dir: str, decoded_name: str):
    os.makedirs(dst_dir, exist_ok=True)
    dst_path = os.path.join(dst_dir, decoded_name)
    if os.path.exists(dst_path):
        base, ext = os.path.splitext(decoded_name)
        dst_path = os.path.join(dst_dir, f"{base}_dup{ext}")
    shutil.copy2(src_path, dst_path)


def clean_dst(dst_root: str):
    if os.path.exists(dst_root):
        shutil.rmtree(dst_root)
    os.makedirs(dst_root)


def organize_txt():
    clean_dst(DST_TXT)
    files = [f for f in os.listdir(SRC_TXT) if f.endswith(".txt")]
    stats = {}
    for fname in files:
        decoded = urllib.parse.unquote(fname)
        category = categorize(decoded)
        dst_dir = os.path.join(DST_TXT, category)
        safe_copy(os.path.join(SRC_TXT, fname), dst_dir, decoded)
        stats[category] = stats.get(category, 0) + 1

    print("=== TXT fajlovi -> content/ ===")
    for cat, count in sorted(stats.items()):
        print(f"  {cat:15s}: {count}")
    print(f"  {'VKUPNO':15s}: {sum(stats.values())}")


def organize_images():
    clean_dst(DST_IMG)
    files = os.listdir(SRC_IMG)
    stats = {}
    for fname in files:
        decoded = urllib.parse.unquote(fname)
        if decoded.startswith("0-02-05-"):
            category = "nekateg"
        else:
            category = categorize(decoded)
        dst_dir = os.path.join(DST_IMG, category)
        safe_copy(os.path.join(SRC_IMG, fname), dst_dir, decoded)
        stats[category] = stats.get(category, 0) + 1

    print("\n=== Sliki -> public/images/ ===")
    for cat, count in sorted(stats.items()):
        print(f"  {cat:15s}: {count}")
    print(f"  {'VKUPNO':15s}: {sum(stats.values())}")


if __name__ == "__main__":
    print(f"Izvor TXT : {SRC_TXT}")
    print(f"Izvor IMG : {SRC_IMG}")
    print(f"Projekt   : {PROJECT}")
    print()
    organize_txt()
    organize_images()
    print("\nGotovo!")
    print("-> content/      = za GitHub (samo txt)")
    print("-> public/images = lokalno (ne commituvaj, dodadeno vo .gitignore)")
