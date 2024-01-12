---
title: Computed and Onchange
sidebar_label: 'Understanding Computed Fields and Onchange ORM Decorator'
sidebar_position: 20
---

:::warning
    ควรหลีกเลี่ยงการเพิ่มตรรกะให้กับฟังก์ชันมากเกินไป เพียงแค่ทำให้มันสั้นและเรียบง่าย
:::

file property.py

```python
from odoo import ...., api

######################## Case Compute
@api.depends('living_area','garden_area')
def _compute_total_area(self):
		for rec in self:
				rec.total_area = rec.living_area + rec.garden_area

total_area = fields.Integer(string="Total Area", compute=_compute_total_area)

######################## Case onchange
@api.onchange('living_area','garden_area')
def _onchange_total_area(self):
    self.total_area = self.living_area + self.garden_area

total_area = fields.Integer(string="Total Area")
```

file property_offer.py

```python
from odoo import ...., api
from datetime import timedelta

######################## Case Compute
deadline= fields.Fate(string="Deadline", compute=_compute_deadline)
creation_date = fields.Fate(string="Create Date")

@api.depends('validity','creation_date')
def _compute_deadline(self):
    for rec in self:
        if rec.creation_date and rec.validity:
            rec.deadline = rec.creation_date + timedelta(days=rec.validity)
        else:
            rec.deadline = False

######################## Case onchange
deadline= fields.Fate(string="Deadline")
creation_date = fields.Fate(string="Create Date")

@api.onchange('validity','creation_date')
def _onchange_deadline(self):
    if self.creation_date and self.validity:
        self.deadline = self.creation_date + timedelta(days=self.validity)
    else:
        self.deadline = False
```

file property_view.xml
```xml
<group>
    ....
		<field name="total_area"/>
    ....
</group>
<group>
    ....
    <field name="creation_date"/>
    ....
</group>
```