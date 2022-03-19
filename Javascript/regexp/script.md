Hello 👋 and welcome back peeps, it's me shisui, your host and not toast :D
in todays video we are gonna learn about regexp
Regexp refers to regular expression, it is like for checking in a string matches some format
it is really useful in logic making and testing for string equality.

In my previous javascript videos, i feel like they are way to fast and not good for beginners, 
So i am thinking to make a series called JavaScript | Zero To Beginner, in which I will tell
you with more examples and more explanation, so you can understand stuff properly.

This video will be kind of an example of that series or at least I will try / test, on making such videos,
so please suggest me how to make better videos for beginners and if you are a beginner and you were unable 
to understand some point please tell me and please tell me, what is the most comfortable way for you
to learn :D

Now let's move on to the video

So I guys let's start with how to make regexp
well we can do it in two ways

1. let x = /a/;
2. let x = new RegExp(/a/);

The above regexp are for checking if a string contains a in small case

Now let me tell you what regexp functions are used for
I will be covering
- exec, it is for searching for a pattern then it returns a array of same results
- test, it is for testing if a string passes a regexp condition or not
don't worry you will understand more in the following sections of the video

I will tell you about different methods & tricks of using regexp but before let's
learn about modifiers, they are like filter methods for our regexp

let's look with an example
first of all we have "g" modifier it is for searching globally i.e. it returns all results
let me show you a example
- replace
- match

Second we have "i" modifer it is for doing case insensitive searches
and there we go with an example
- small example

Now we have third modifier "m", it is for multiline searches well, I don't really use it,
but I saw a use case on a tutorial site called w3schools.com,
so let'e me show you how it works
- that example

So guys now you know all about modifiers and probably a bit more things, now let's
move on to cool stuff :D

This video is going to be big xd

So first of all we can do grouping, unable to understand don't worry I have got you
like for example If we wanna check that whether a string contains x or y or z
in this case we can do
/[xyz]/.test("your cool string");

But typing all the characters will be a pain right?
so we can just do
/[A-I]/ // this will check if a string contain character from A to I, we can do
/[A-I]/i for making it case insensitive

we can even merge multiple checks like
/[A-D|e-z]/
<!-- exaplain it boi -->

We can also check for numbers in the same way
/[0-9]/ xd easy stuff but i don't think that we only check for characters or numbers,
we might need to check for wordsright,
here comes or operator I wonder if we call it that in this as well

so we can do like
word1|word2

Now we are done with grouping the things but we can do lot more so let's dig in ig xd

In regexp you don't really need to type that much stuff, we can use Meta Characters for all of thi
I will quickly tell you what some of the meta characters do, that will be really helful for you in
string testing & validation stuff

\w, \W
\d, \D
\s, \S
\b, \B

Now we know quite a lot of regexp, let's do some more training and learn some more hacks,
;D

Let's start with
- +,it is for cehcking if something appear one or more time
- *, is kind of like for testing or maybe like just ignoring something,
cause it will ay true in both case, like it doesnt matter if it exist or not
- ?, this is quite can cool one, it is for checking if something either don't exist or it appears jusst once

these are some things for checking occurence of characters, well we use them for digits as well

now comes
{}
it is for getting sequnce of anything but with limited characters
{3} for checking things having 3 character
{3,5} for checking things having 3 to 5 character
{3,} for checking things having at least 3 character

Just a small revision for
$ it checks if something ends with X
^ if starts with x

Now is like final moments of the video
now we have
?= it is for checking if something is followed by another thing
?! it is for checking if something is not followed by another thing

Thanks a lot for watching, I hope i was able to explain the things properly,
let me know if you want me to make video on some topic or if you want me to teach you something.
I will try my best to get a video on it as soon as possible :D

and sorry right now i removed my discord server because, sometime it leads to lot of ya know talks xd.