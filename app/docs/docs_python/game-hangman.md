---
sidebar_label: 'Game Hangman.'
sidebar_position: 4
---

### Coding Game Hangman

```python
import random

hanged_man = [
        r"""
  -----
  |   |
      |
      |
      |
      |
      |
      |
      |
      |
-------
""",
        r"""
  -----
  |   |
  O   |
      |
      |
      |
      |
      |
      |
      |
-------
""",
        r"""
  -----
  |   |
  O   |
 ---  |
  |   |
  |   |
      |
      |
      |
      |
-------
""",
        r"""
  -----
  |   |
  O   |
 ---  |
/ |   |
  |   |
      |
      |
      |
      |
-------
""",
        r"""
  -----
  |   |
  O   |
 ---  |
/ | \ |
  |   |
      |
      |
      |
      |
-------
""",
        r"""
  -----
  |   |
  O   |
 ---  |
/ | \ |
  |   |
 ---  |
/     |
|     |
      |
-------
""",
        r"""
  -----
  |   |
  O   |
 ---  |
/ | \ |
  |   |
 ---  |
/   \ |
|   | |
      |
-------
""",
    ]

data = ["hangman","production"]
data_select = data[random.randint(0,len(data)-1)]
data_select_list = list(data_select)
data_ans = ["-"]*len(data_select)
continue_gmae = len(hanged_man)-1
count = 0
while True:
    #print(f"HANGMAN = {data_select}")
    print(f"{hanged_man[count]}")
    print(f"Ans = {''.join(data_ans)}")
    print(f"Continue = {continue_gmae}")
    ans = input("Enter the letters:")
    if len(ans) > 1 or len(ans) == 0:
        print(f"Please choice letter or one letter only.")
        continue
    if type(ans) != str:
        print(f"String only. Please new choice.")
        continue
    if ans in data_ans:
        print(f"Your ready is choice letter = {ans}. Please new choice.")
        continue

    if data_select.find(ans) == -1:
        continue_gmae -= 1
        count += 1
        if continue_gmae == 0:
            print(f"{hanged_man[count]}")
            print("Your dead!!")
            break
        continue
    while True:
        if data_select.find(ans) == -1:
            break
        data_select_list[data_select.find(ans)] = "-"
        data_ans[data_select.find(ans)] = ans
        data_select = "".join(data_select_list)
    ### Check Win
    if ''.join(data_ans).find("-") == -1:
        print("#"*100)
        print(f"Ans : {''.join(data_ans)}")
        print("Your Win.")
        print("#"*100)
        break
```
