# Usability Study Feedback

## Study Description and Data
- Did I look at and approve these tasks beforehand? I thought I had, but now that I look at this, either they were changed later on or the approval was missed. (I remember that these weren't ready on the day we went over them in class, but I don't recall anymore whether they were shown to me later on)
    - First of all, the tasks are not intended to be structured by metric; instead, _all three metrics_ are supposed to measure _all three tasks_. (well, satisfaction can be measured later, but it still effectively covers all three tasks because the users would have been asked about satisfaction after performing all of them)
    - In that light, tasks 1 and 2 are really one task—"play the game"—and you are measuring learnability and errors as they play. Task 3 is not a task at all, but purely the act of taking the last metric, satisfaction.
    - I can understand how task 1 and task 2 can be viewed as the tasks requested for the assignment, but task 3 is _way_ off because the user isn't even doing anything with the applications. Task 3 is what _you_ are doing. It looks like there was midstream confusion on whether the tasks are things for the user to do vs. things for you, as the people running the study, are supposed to do.
- The Google Form approach can work well for satisfaction, but from what I can tell…you asked the _users_ to state how long it took for them to feel comfortable? That isn't learnability. The learnability is _you_ timing the users until they told you that they were comfortable. There is a difference between asking the users how long they think they took vs. actually timing them and just having them signal when they feel a certain way. I really hope that you genuinely timed them, but there is no indication in this report that you did.
- Are the measurements available in any other form than these images? The images are fuzzy and it's hard to read the actual numbers.

## Prioritization of Metrics

The report does not have a specific section for prioritization of metrics, although the first paragraph of the heuristic evaluation section hints at it and the last few paragraphs finally tackle it directly. Still, the report template designated an explicit discussion of priorities; that heading really should not have been deleted.

## Heuristic Evaluation

- There seem to be some discrepancies in the discussion of Flow Free. True it has the best learnability metric; but it isn't clear in which of the other two metrics it performed best. It can't be errors because the data says that it averaged 1.778 but 2048 averaged 1.22. It doesn't seem to be satisfaction because 1010! had 6 people rating it a 4. But I concede that it _might_ be satisfaction because you might be looking at averages. And yet again, if you are looking at averages for the basis of comparison, _where is that calculation?_
- The connection to Fitts's law makes sense, and I'm not just saying that because it is a favorite principle 🙂 However, it would have been nice to see screenshots of this in context. There are generic screenshots of each game, but they are placed at the beginning of the section and do not target the actual points that are made later on.
- The references are also a nice touch. I just wish these were based on more solid data.
- The large number of guidelines and principles referenced is appreciated, but many of them feel forced. There is a difference between listing a guideline/principle and discussing it well, connected to both the measured data and specific features of a user interface, versus just stating it and giving a single phrase in an attempt to connect it to the interface (and without any supporting illustrations). A lot of the guidelines/principles mentioned fall into the latter category.
- OK, so you have now officially said that 1010! ranked highest in satisfaction. This definitely makes the earlier statement that Flow Free "performed the best out of the three games in two of the metrics" a specious one. Flow Free performed the best in learnability alone, because its average error count was higher than 2048's.
- The 1010! discussion pertains primarily to the users' mental model of the game, relating it to how familiarity with another game, Tetris, contributed to their satisfaction. Unfortunately, this seems to have not been recognized in the 1010! paragraph.
- The 2048 discussion does recognize the users' mental model, and the discrepancy between tile movement and initial user expectations makes sense. But you know what helped here? I _know_ the game 2048, and so based on my past knowledge, I understood what was meant here right away. The report should not be dependent on this, however; another reader who is not familiar with 2048 might not be clear on what is meant here. Illustrations are crucial for getting this point across.

### Usability Decision

The usability decision section is clearly the last paragraph of the heuristic evaluation section, but like the prioritization of metrics, the deletion of the heading is puzzling.
- Within the discussion, _consistency_ and _feedback_ appear to be conflated as “consistent feedback.” This really is just feedback; consistency has to do with how user interface elements a similar to other elements, both within an application and with _other_ applications.
- I’ll note again that the data section gives Flow Free an average error count of 1.778 with 2048 having 1.222. So Flow Free was not the best performer in the errors metric, although the last paragraph implies that it was the best performer ("errors were the most reduced").

## Polish
If I spotted any typos in your report, they will appear as commits made to the file.
