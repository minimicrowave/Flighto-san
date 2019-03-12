#Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

 ```https://github.com/danluu/post-mortems https://blog.codinghorror.com/the-project-postmortem/```

## What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.

## Approach and Process
- What in my process and approach to this project would I do differently next time?

Planning ahead of how I want to approach my functions. A lot of concepts I did not grasp before trying to attempt the project i.e. the use of Promises. 

- What in my process and approach to this project went well that I would repeat next time?

Using MVC model to help in the delegation of the workflow into its subprocesses. It allows a clearer streamline of what each of the function does, making debugging a little easier since there are less chunky codes. (although sometimes it may be a little difficult to assess codes)

--

## Code and Code Design
- What in my code and program design in the project would I do differently next time?

Using client/server model. Since the idea of my project is to constantly display a dashboard that holds all the informaion, it is rather difficult to make it in the controllers since I have to extract all the data from the database repeatedly for the different routes. That is why I resorted to putting my API in controller and JSX's JS. Also since I wanted a real-time rendering (using setTimeInterval) of coordinates, my fetch function and conditionals should have been written such that it allows DOM to happen first then it retrieves API data in it stipulated intervals.


- What in my code and program design in the project went well? Is there anything I would do the same next time?

I kinda followed through and mostly did what I planned for, although the methods that I thought to use were vastly different such as using axios npm to fetch data at client side (controller) instead of XHR. I will continue to explore more packages so as to help my code become more efficient. 

```NPM vs Vanilla???```

_For each, please include code examples._

- Code snippet up to 20 lines.

- Code design documents or architecture drawings / diagrams.


## Your Boss at the Game Development company you work for has told you that the requirements of your game has changed.


_There are generally 3 ways that business requirements force you to change your code._

- They are adding a new feature. How would you refactor your code to account for this new thing you must add?

Depending on the function, assuming they are continuing with the MVC model, it will most likely be additions of code to my current functions and libraries. Probably a function to search an area for its active flights. Probably need an API / library for the countries's surrounding coordinates.

- They are changing direction. Your code does X and it needs to be changed to do Y, which is different but still related.

What's the question?? LOL

- They are adding a white label feature- our clients can have their own X game, with custom players, branding, etc. How do you account for dynamically accomodating each new client?

Standardising the callbacks. Right now my callbacks are jumbled and only catered to its specific route(s). Making individualised components such as brand logos, API information easier to find within the code.

## WDI Unit 1 Post Mortem
- What habits did I use during this unit that helped me?

Forcing myself to use MVC model (which helped a lot!!).
Console.logging errors!!! Wow, saved my eyes.

- What habits did I have during this unit that I can improve on?

Learning how to search for bugs, googling with the right keywords (+ understanding the solutions) and thinking more dynamically. E.g. using fetch, axios etc

- How is the overall level of the course during this unit? (instruction, course materials, etc.)

Still okay, but MVC should be emphasised more heavily since a lot of self-figuring to do as to what goes where and what affects what (e.g. writing a route with no controllers will make your code stop running!! @#$%^&^%$#@@). Or is that what we are supposed to do? 