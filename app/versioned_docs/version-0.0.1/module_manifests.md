---
sidebar_label: 'Module Manifests'
sidebar_position: 2
---

# Module Manifests

ไฟล์ Manifest ทำหน้าที่ประกาศแพ็คเกจ Python เป็นโมดูล Odoo และเพื่อระบุข้อมูลเมตาของโมดูล

เป็นไฟล์ที่เรียก`__manifest__.py`และมีพจนานุกรม Python เดียว โดยที่แต่ละคีย์จะระบุข้อมูลเมตาของโมดูล

## __manifest__.py

```python
{
    "name": "Real Estate Ads",
    "version": "1.0.0",
    "author": "Majins",
    "description":" Real Estate module to show available properties",
    "depands": ["base"],
    "installable": True,
    "application": True,
    "license": "LGPL-3",
    "data": [
        "security/ir.model.access.csv",
        "views/property_tag_view.xml",
        "views/property_type_view.xml",
        "views/property_view.xml",
        "views/menu_items.xml"
    ],
    "category": "Sales",
}
```

## ฟิลด์รายการที่มีอยู่คือ

ฟิลด์รายการที่มีอยู่คือ:

- `**name` (`str`, `required`) : ชื่อโมดูลที่มนุษย์สามารถอ่านได้
- `**version` (`str`) :** เวอร์ชันของโมดูลนี้ควรเป็นไปตามกฎการ [กำหนดเวอร์ชันเชิงความหมาย](https://semver.org/)
- `**description`( `str`) :** คำอธิบายเพิ่มเติมสำหรับโมดูลใน reStructuredText
- **`author`( `str`) :** ชื่อของผู้เขียนโมดูล
- **`website`( `str`) :** URL เว็บไซต์สำหรับผู้เขียนโมดูล
- **`license`( `str`, Default : `LGPL-3`) :**
    - ใบอนุญาตการจัดจำหน่ายสำหรับโมดูล ค่าที่เป็นไปได้:
        - `GPL-2`
        - `GPL-2 or any later version`
        - `GPL-3`
        - `GPL-3 or any later version`
        - `AGPL-3`
        - `LGPL-3`
        - `Other OSI approved licence`
        - `OEEL-1`(สิทธิ์ใช้งาน Odoo Enterprise Edition v1.0)
        - `OPL-1`(สิทธิ์การใช้งานที่เป็นกรรมสิทธิ์ของ Odoo v1.0)
        - `Other proprietary`
- **`category`( `str`, Default : `Uncategorized`) :** หมวดหมู่การจัดหมวดหมู่ภายใน Odoo ซึ่งเป็นโดเมนธุรกิจคร่าวๆ สำหรับโมดูล
- **`depends`( `list(str)`) :** โมดูล Odoo ที่ต้องโหลดก่อนหน้านี้ เนื่องจากโมดูลนี้ใช้คุณลักษณะที่พวกเขาสร้างขึ้น หรือเนื่องจากมีการเปลี่ยนแปลงทรัพยากรที่พวกเขากำหนด เมื่อมีการติดตั้งโมดูล การขึ้นต่อกันทั้งหมดจะถูกติดตั้งก่อนหน้านั้น การอ้างอิงในทำนองเดียวกันจะถูกโหลดก่อนที่จะโหลดโมดูล
- **`data`( `list(str)`) :** รายการไฟล์ข้อมูลที่ต้องติดตั้งหรืออัพเดตด้วยโมดูลเสมอ รายการเส้นทางจากไดเร็กทอรีรากของโมดูล
- **`demo`( `list(str)`) :** รายการไฟล์ข้อมูลที่ติดตั้งหรืออัพเดตใน*โหมดสาธิต เท่านั้น*
- **`auto_install`( `bool`หรือ`list(str)`ค่าเริ่มต้น: `False`)**
- **`external_dependencies`( `dict(key=list(str))`)**
- **`application`( `bool`, ค่าเริ่มต้น: `False`) :**
- **`assets`( `dict`) :** คำจำกัดความของวิธีการโหลดไฟล์สแตติกทั้งหมดในกลุ่มสินทรัพย์ต่างๆ ดู หน้า [เนื้อหา](https://www.odoo.com/documentation/17.0/developer/reference/frontend/assets.html#reference-assets)เพื่อดูรายละเอียดเพิ่มเติมเกี่ยวกับวิธีการอธิบายชุดรวม
- **`installable`( `bool`ค่าเริ่มต้น: `True`) :** ผู้ใช้ควรจะสามารถติดตั้งโมดูลจาก Web UI ได้หรือไม่
- **`maintainer`( `str`) :** บุคคลหรือนิติบุคคลที่รับผิดชอบในการบำรุงรักษาโมดูลนี้ โดยค่าเริ่มต้นจะถือว่าผู้เขียนเป็นผู้ดูแล
- **`{pre_init, post_init, uninstall}_hook`( `str`)**
    - Hooks สำหรับการติดตั้ง/ถอนการติดตั้งโมดูล ค่าควรเป็นสตริงที่แสดงชื่อของฟังก์ชันที่กำหนดไว้ภายในไฟล์ `__init__.py`.
    - `pre_init_hook`ใช้เคอร์เซอร์เป็นอาร์กิวเมนต์เดียว ฟังก์ชันนี้จะถูกดำเนินการก่อนการติดตั้งโมดูล
    - `post_init_hook`ใช้เคอร์เซอร์และรีจิสทรีเป็นอาร์กิวเมนต์ ฟังก์ชันนี้จะดำเนินการทันทีหลังจากการติดตั้งโมดูล
    - `uninstall_hook`ใช้เคอร์เซอร์และรีจิสทรีเป็นอาร์กิวเมนต์ ฟังก์ชันนี้จะดำเนินการหลังจากการถอนการติดตั้งโมดูล
    - hooks เหล่านี้ควรใช้เมื่อการตั้งค่า/การล้างข้อมูลที่จำเป็นสำหรับโมดูลนี้เป็นเรื่องยากมากหรือเป็นไปไม่ได้ผ่าน API เท่านั้น