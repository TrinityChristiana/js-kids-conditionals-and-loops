# H4CK3R SP34K

Preview at: 

This challange is from the book *Javascript for Kids: A playful introduction to programming by Nick Morgan*

***
Turn text into h4ck3r sp34k! A lot of people on the internet like to replace certain letters with numbers that look like those letters. Some numbers that look like letters are 4 for A, 3 for E, 1 for I, and 0 for O. Even though the letters look more like capital letters, we'll be replacing the lowercase versions of these letters. To change normal text to h4ck3r sp34k, we'll need an input string and a new empty string:

```js
var input = "javscript is awesome";
var output = "";
```

You'll then need to use a `for` loop to go throuh all the letters of the input string. If the letter is "a", add a "4" to the output string. If it's "e", add a "3". If it's "i", add a "1", and if it's "o", add a "0". Otherwise, just add the original letter to the new string. As before, you can use += to add each new letter to the output string.

After the loop, log the output string to the console. If it works correctly, you should see it log "j4v4scr1pt 1s 4w3s0m3".