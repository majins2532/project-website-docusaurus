---
sidebar_label: 'Decimal as_tuple()'
sidebar_position: 1
---

# Syntax

Syntax: Decimal.as_tuple()

Parameter: Decimal values

Return: tuple with values
– sign
– digits
– exponent

## Code #1 : Example for as_tuple() method

```python
# Python Program explaining 
# as_tuple() method 

# loading decimal library 
from decimal import *


# Initializing a decimal value 
a = Decimal(-1) 

b = Decimal('0.142857') 

# printing Decimal values 
print ("Decimal value a : ", a) 
print ("Decimal value b : ", b) 


# Using Decimal.as_tuple() method 
print ("\n\nDecimal a with as_tuple() method : ", a.as_tuple()) 

print ("Decimal b with as_tuple() method : ", b.as_tuple()) 

```

Output :
:::note
Decimal value a :  -1
Decimal value b :  0.142857


Decimal a with as_tuple() method :  DecimalTuple(sign=1, digits=(1, ), exponent=0)
Decimal b with as_tuple() method :  DecimalTuple(sign=0, digits=(1, 4, 2, 8, 5, 7), exponent=-6)
:::

## Code #2 : Example for as_tuple() method

```python
# Python Program explaining 
# as_tuple() method 

# loading decimal library 
from decimal import *


# Initializing a decimal value 
a = Decimal('-3.14') 

b = Decimal('321e + 5') 

# printing Decimal values 
print ("Decimal value a : ", a) 
print ("Decimal value b : ", b) 


# Using Decimal.as_tuple() method 
print ("\n\nDecimal a with as_tuple() method : ", a.as_tuple()) 

print ("Decimal b with as_tuple() method : ", b.as_tuple()) 
```

Output :
:::note
Decimal value a :  -3.14
Decimal value b :  3.21E+7


Decimal a with as_tuple() method :  DecimalTuple(sign=1, digits=(3, 1, 4), exponent=-2)
Decimal b with as_tuple() method :  DecimalTuple(sign=0, digits=(3, 2, 1), exponent=5)
:::