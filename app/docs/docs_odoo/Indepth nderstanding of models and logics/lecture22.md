---
title: Related Fields and Applying Domains
sidebar_label: 'Creating Related Fields and Applying Domains'
sidebar_position: 22
---

Creating Related

สร้าง field : phone ใน property.py โดยจะใส่ Argument ที่ชื่อว่า related โดยค่าคือ field ที่ต้องการและถ้า field เป็น Many2one สามารถ dot หาค่าได้ เช่น partner_id.name ดังตัวอย่าง

:::note
💡 ค่าที่ถูก related จะถูกดึงค่า auto และ field จะเป็น readonly
:::

```python
phone = fileds.Char(string="Phone", related="buyer_id.phone")
```

property_view.xml

```xml
<field name="phone"/>
```

Applying

จะขอยกตัวอยาก field : buyer_id ใน property.py อ่านเพิ่มเติมได้ที่ >>>> [Domains](https://www.odoo.com/documentation/17.0/developer/tutorials/backend.html?highlight=applying%20domains#domains) and [search domains](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#reference-orm-domains)

```python
buyer_id = fields.Many2one("res.partner", string="Buyer", domain=[('is_company', '=', True)])
```