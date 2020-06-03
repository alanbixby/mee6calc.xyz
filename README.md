# **[MEE6 Calculator](https://alanbixby.github.io/mee6calc/)**
### A fork of vladdeSV's archived 'mee6calc.xyz'.
![screenshot](http://i.imgur.com/nHu5NZF.png)
Calculate how many more messages you need to send (for every minute) in order to reach a specific level!

### Usage
1. Use the command `!rank` in a server where a MEE6 bot is present.
1. Take note of your `Current Level` and the  `Current XP` displayed. ![screenshot](https://i.gyazo.com/d30658033449d2b9547c5739a3995ea0.png)
1. Go to the **[MEE6 Calculator](https://alanbixby.github.io/mee6calc/)**.
  1. Enter the `Desired Level` you want to reach.
  1. Enter your `Current Level`.
  1. Enter your `Current XP` displayed for that level.
  1. Press **`Calculate`**.
1. Read the output under `Result`.

---
### **But how does it work...?**
MEE6's leveling system follows a pattern, which can be explained with a mathematical function, where `x` is the level desired, and `f(x)` is the XP required for specified level.

![function](https://i.imgur.com/QsV6E8N.png)
> The top and bottom functions are equivalent.

Using this, we can calculate your total XP by plugging your current level into this formula and adding your visible XP. Then, we subtract your total XP from the required XP, and what is left is how much more is needed until that level is reached. 

Then, since every message (per minute) gives [between 15 and 25 XP](https://github.com/cookkkie/mee6/blob/5da379573c06eddec8ffad455c5b10681da429c3/chat-bot/plugins/levels.py#L173), it is averaged to about 20 XP per message; and we can also calculate the best and worst case scenarios.

---
##### Disclaimer: This project is not associated with the development team of [MEE6.xyz](https://mee6.xyz) and is merely a personal-use utility.