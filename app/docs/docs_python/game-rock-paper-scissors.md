---
sidebar_label: 'Game Rock Paper Scissors Association.'
sidebar_position: 3
---

### Coding Game Rock Paper Scissors

```python
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

import random
data = [rock,paper,scissors]
data_string = ["rock","paper","scissors"]
#Rock wins against scissors. 0 win 2
#Scissors win against paper. 2 win 1
#Paper wins against rock. 1 win 0

count_your = 0
count_computer = 0
while True:
    ans_your = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors."))
    if ans_your > 2:
        print("please choose number 0 or 1 or 2 only.")
        continue
    ans_com = int(random.randint(0,2))
    print(f"Your choice {data_string[ans_your]} and computer choice {data_string[ans_com]}")
    if ans_your == 0 and ans_com == 2:
        count_your += 1
        print("Your wins.")
    elif ans_your == 2 and ans_com == 1:
        count_your += 1
        print("Your wins.")
    elif ans_your == 1 and ans_com == 0:
        count_your += 1
        print("Your wins.")
    elif ans_your == ans_com:
        print("It's a draw.")
    else:
        count_computer += 1
        print("Computer wins.")
    if count_your == 3:
        print("Your wins in game.")
        break
    if count_computer == 3:
        print("Computer wins in game.")
        break
```