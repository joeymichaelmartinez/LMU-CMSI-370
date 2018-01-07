## Application Description
> The design idea for this application is a menu interaction style that will navigate the information provided through the Pokemon api. The design will be broken into two parts, a display area, and an interactive area, that are side by side. The interactive area will allow a user to bring up different images and information on the display area. The layout of the menu will resemble a "Pokedex" from the Pokemon video games and show. The design will attempt to make searching and finding information about Pokemon as simple and straightforward as possible, focusing on learnability, efficiency, and reducing errors so that anyone who wants to quickly find information about Pokemon can do so without wasting much time.


### Web Service Used
> The information required by the interface will be retrieved from the PokeApi. The PokeApi has information on Pokemon, the types and evolutions of Pokemon, berries in the Pokemon series, and Pokemon contests. This information will be retrieved whenever someone makes a search in the application. Get requests can be called to api/v2/ followed by the item defined by the search of the user. For instance, the get request to get a pokemon with its statistics and information would be called to api/v2/pokemon/ followed by the name of the pokemon. The user will be given a list of buttons that will be based on the type of search they wish to complete. When the user clicks on one of these buttons, they will be given a search bar to allow them to find the information they need. When they click on one of these buttons, the get request will be first filled by the type of search they are making. The get request will be completed when the person completes their search, passing their search text to the end of the url.

## Top-Level Design/Layout
>  Design Overview

![pokeapidesign](https://user-images.githubusercontent.com/16887042/33793588-9016e332-dc6e-11e7-9fd4-76b210933ae1.png)

>The interface has a simple menu based design. The interface will start at the menu screen that will prompt the user to use one of the buttons to the right to start a search. The search type buttons on the right of the screen will define a type of search that the user wishes to complete. When the user clicks on any of these buttons, the button will be highlighted in yellow, indicating to the user that they are searching under this type. A search bar will also drop down, allowing the user to type in their desired search. When the user is done, they can click the search complete button and be brought to their desired page, or they can click the exit out of search button to stop their search, and remove the search bar. The exit button is more useful when the user is already looking at a previous search, and wishes to stay on this page, rather than move to a new page.

>If a user enters a new page and wishes to go back to a previous page, they can click the back button to return to any previously visited page, including pages under different search types. If a user wishes to navigate to pages located before and after the current page, they can use the navigation buttons to navigate to those pages. 

>The types of searches that the user can complete are finding information about a pokemon, finding all pokemon of a certain type, finding the evolution chains of a pokemon, or finding various contests within the pokemon games.

## Usage Scenarios

### Finding a Pokemon
> Once the user decides which type of search they want to complete, they can click on one of the buttons that reflects the type of search they want to complete. Once that search type is clicked, a search bar will drop down on the main menu screen, allowing the user to complete their search. The back button and the up and down navigation buttons are greyed out and unclickable when on the homepage, as they cannot perform any tasks in this menu state. 

![1](https://user-images.githubusercontent.com/16887042/33793451-16b3f0ee-dc6d-11e7-9cf6-ac2a7f79ec91.png)

![2](https://user-images.githubusercontent.com/16887042/33793466-6edee468-dc6d-11e7-9dde-5a83f14b9727.png)

![3](https://user-images.githubusercontent.com/16887042/33793485-80d2c41e-dc6d-11e7-8ae0-3039def83f8b.png)

>The green buttons in the diagrams indicate a mouse click and is only used for demonstration purposes. It will not be in the final design. 

>Once the search is completed, the user can click on the search complete button to finish their search. 

![4](https://user-images.githubusercontent.com/16887042/33793527-cec06618-dc6d-11e7-8348-2eafea7a323a.png)

>When the search complete button is clicked, the search bar will disappear, allowing the user to easily view their search results. The type of search is highlighted in yellow, so the user does not lose track of which type of search they are performing. If the user wishes to stop their search, they can click the exit out of search button to stop the search. The user can now perform another search, or use the up and down navigation buttons to navigate to other pokemon listed before and after the current pokemon. Since the pokemon are listed in numerical order using an identification system, similar pokemon are listed before and after your current pokemon.

![5](https://user-images.githubusercontent.com/16887042/33793529-dca3bdca-dc6d-11e7-961d-68a2d36996b0.png)

![6](https://user-images.githubusercontent.com/16887042/33793539-eebf2aa8-dc6d-11e7-935d-51ddaa2b18f6.png)

>Searching under the pokemon name will give a picture of the pokemon along with its statistical information. Not shown in the diagram are the name, moves, type, forms, and description of the pokemon, which would also be included in the final design. 

### Searching by type and using the back button
>Clicking the pokemon type search button would search for all of the pokemon of a certain type, and display a portion of them in two columns of three pokemon. The behavior of the button itself behaves the same as the previous example, with the yellow highlight, and exit button.

![1](https://user-images.githubusercontent.com/16887042/33793562-272e9536-dc6e-11e7-9617-65d30550dfd7.png)

![2](https://user-images.githubusercontent.com/16887042/33793566-309f8620-dc6e-11e7-8525-b5680744ec1a.png)

>A user can now use the navigation buttons to scroll through the page, or they can scroll through as they would on a normal webpage, such as using the mouse wheel, or two fingers on a trackpad. If a user decides to scroll in the way a web page scrolls, a scroll bar will appear. 

![3](https://user-images.githubusercontent.com/16887042/33793573-4bf74e6c-dc6e-11e7-8262-ec38a18041d9.png)

![4](https://user-images.githubusercontent.com/16887042/33793574-4d01ef88-dc6e-11e7-9863-b6dcd50a4ef0.png)

>If a user finds a pokemon that they wish to find more information about, they can click on the pokemon itself, and it will bring the user to the pokemon’s description page. 

![5](https://user-images.githubusercontent.com/16887042/33793579-5d4b4c22-dc6e-11e7-8c52-edffa1b63c75.png)

![6](https://user-images.githubusercontent.com/16887042/33793580-6420f5e2-dc6e-11e7-93bd-b61f98abf5fc.png)

>If the user wishes to go back to the page they were previously on, which in this case would be the search page for the type of a pokemon, then the user can click the back button, and it will bring them to the page they were previously on. 

![7](https://user-images.githubusercontent.com/16887042/33793584-72a1d8ac-dc6e-11e7-9c04-113136ce291c.png)

![2](https://user-images.githubusercontent.com/16887042/33793585-7d3c3618-dc6e-11e7-8435-14013035be4e.png)

## Design Rationale
> The menu selection and form-fillin styles of interaction were chosen for this project specifically because a menu hits all of the metrics that I set out to cover within this design. The design of this project set out to prioritize learnability, efficiency, and reducing errors. However, the metrics of memorability and satisfaction, while not prioritized, are also addressed in this design. According to Designing the User Interface, “The primary goal for menu, form-fillin, and dialog-box designers is to create a sensible, comprehensible, memorable, and convenient organization relevant to the user's tasks” (Shneiderman 269). The pokeApi is mostly used to give information about a large list of different topics, and the design of this project was meant to navigate this information as easily as possible. Menus were the clear choice for navigating this type of behavior, as they can easily categorize the different types of behavior given by the api. Form-fillin are also a clear choice as they can handle the searching operation in a clear and familiar way. 

>Because menus are laid out with a name that describes what they do, and give feedback when clicked, their uses can be learned quickly. Menus are also easily learnable because they don’t require users to remember the syntax of a command from memory, and can simply click on the event that they want to happen (Shneiderman 268). And of course, a user can pick up what each button does fairly quickly, as a couple words are printed on them to describe their behavior. The only exception of this are the navigation buttons, as the user may not be able to pick up what the arrow means until they have used the buttons consistently. 

>The idea to write out the search type on each button comes from Apple’s Human Interface Guidelines. In these guidelines, they say that menu titles should be short, but without sacrificing their intuitiveness. I have carefully worded each search description to indicate exactly what will be searched when the button is clicked, without writing an entire description of how to use the button. This is an important detail, as it allows the user to quickly understand the interface, without having to read into its functionality too much. If the user has to read less, they will spend less time worrying about what the button does, and more time using it to see its performance, and in the best case scenario, the name will already be intuitive enough that the user can already infer its use. Shorter phrases are also easier to remember. This naming and symbol convention helps the user with memorability, as the user can remember what tasks the button can complete without even using it. Their shortness motivates this behavior as it allows the user to only remember short simple phrases, that get to the heart of what kinds of actions the button can perform. 

>Once a user has learned the design, they can become quite efficient with it as well. Once a user has familiarized themselves with the way the interface behaves, they can create a clear mental model, as the interface uses a yellow button to indicate to the user where they are at all times. Likewise, the back button can bring the user back to where they were previously, and the yellow button will continue to track where they are currently located in their search. The user can also move between searches by clicking on search results, such as clicking on a pokemon after searching for a type of pokemon. Combining this mental model with the ease of navigation allows the user to get to the information they need quickly and efficiently. 

>This goes well with Shneiderman’s 2nd Golden Rule, which is a principle that states that the design should enable frequent users to use shortcuts (Shneiderman 74). A frequent user would be used to the interface enough to the point where the shortcuts to the other search types will be quite easy, and so adhering to this principle will allow frequent users to be even more efficient. If a user is comfortable enough with the design, and their mental model is strong, then shortcuts will also start to become just as easy, making efficiency highly effective in the design.

>Shneiderman’s first Golden Rule, striving for consistency within the design, is also addressed in this design in the way that the different menus behave. Even though different information is given and displayed differently in the types of searches a user makes, you still make the search the same way, and each page is still navigable by the navigation buttons. The buttons also highlight yellow and have an exit button added while searching, and the exit button and search button behave the same way, no matter which type of search is being completed.  

>The design was also formatted in such a way as to stop any gulf of execution or evaluation from the user. For handling gulfs of execution, the button for exiting the search and completing the search are purposefully separated from each other, so as to make sure that the user does not accidentally click on the wrong button when making a search. The buttons were also designed to adhere to Fitts’s Law. Fitts’s law is a mathematical formula that predicts the time a user requires to move to a target area in a ratio between the distance to the width and height of the target. 
(Shneiderman 268). Each button was designed to be big enough to fill the screen so that moving the mouse to click on them would be easier. The more frequently used buttons were also located in spaces nearest the display screen. The more used search types such as the pokemon name and pokemon type are nearer the top of the screen, making them easier to hit than the buttons at the bottom of the screen. The navigation arrows are also close to the screen, and since are both as important as the other, they are both the same distance from the screen. On the other hand, the back button is a button that should be not too easily clickable, as accidentally clicking it would also result in a gulf of execution. Since this is the case, the design of the interface puts the back button in the top right corner in a slightly smaller box than the rest of the boxes, so that the user never accidentally clicks it. 

>For handling gulfs of evaluation, when a user clicks on a button, they are reminded of which button they clicked so as to make sure that the user does not mistake or forget which button they clicked. On the main menu, the navigation buttons and the back button are grayed out and not clickable, so the user does not mistakenly try to use them and believe they are broken. I also only included a back button so that the user does not mistake this button for a button similar to the navigation buttons. If there was a back and forward button, the user might confuse these buttons to mean navigation on a page, rather than navigation through visited pages. However, in most cases a user would only need to go back a few pages to remind themselves of what they were looking at, and normally will not need to go forward.  

>As for satisfaction, the interface was designed with following Apple’s guidelines, especially for deciding what colors to use. The colors used in the design follow Apple’s idea for which colors you should use for design, and also follows the colors of the pokedex from the pokemon anime and games. The fact that the design resembles the anime’s pokedex may make the user feel satisfied as they can recognize the similarities to something they are already familiar with. In this case, the principle known as “know thy user” applies, as someone who is familiar with pokemon would likely use it, and so this guided my design philosophy of what the layout should look like in terms of aesthetics so as to resemble an interface that typical user would already be familiar with. 

## Usability Metric Forecast
> If designed properly, I believe that my design will excel in learnability, memorability and efficiency, for reasons stated previously, and because its simple and straightforward design does not allow for users to misinterpret what it can and cannot do. Likewise, each button makes a clear declaration of what its abilities are, so a user does not have to spend time learning or remembering what each button does individually. Once they understand one button, the other buttons similar to that button behave much in the same way, so a user can cut down on how much time they need to learn the entire interface. Form-fillin also handles the searches perfectly, as it allows the user to precisely type in what they want to find, rather than trying to find it in some directory, which also increases efficiency. And overall, the menu selection and form-fillin interaction styles are quite familiar to most users, and resemble the interface that I am trying to imitate, so users both familiar and unfamiliar with the Pokemon show and games can both easily pick up how the interface works. 

>The metrics I believe that might have some issues however are error handling and satisfaction. While certain attempts were made to handle errors, I believe gathering information from users actually using the design will aid in error handling, and could better inform design decisions. As previously stated, the back button does not have a similar forward button, and this is to increase clarity as to what function the back button completes, and to differentiate it from the navigation buttons. However, from studying user feedback, and quantifying the amount of errors made when using the back button, I could make a more informed decision of whether to keep the design as it is, or add a forward button. On a similar note, I realize that the design shown previously in the diagrams still has the exit button, even when the search bar is gone. Since the exit bar only has a use when the search bar is active, it would make sense to either remove the button, or gray it out when the search bar is not active. If this were implemented, I believe this may also help error handling.

>Likewise, as the design stands, the menu selection style of interaction on its own does not usually rank high on satisfaction, and so I would need to work to make it as appealing as possible. To better capture satisfaction from the users, I would probably have to consult a graphics designer and combine their knowledge with more research into guidelines that aid with satisfaction to increase the look of the design so that users find it more appealing. Once I have multiple designs based off of this process, I would have to again run tests with a large group of users to see which design gives the most satisfaction based on a scaling system. 

## References
> Shneiderman, Ben, and Catherine Plaisant. Designing the User Interface: Strategies for Effective Human-Computer 
Interaction. Addison-Wesley, 2010.

>Inc., Apple. Menu Anatomy - Menus - Human Interface Guidelines for MacOS Apps, developer.apple.com/macos/
human-interface-guidelines/menus/menu-anatomy/.

>Inc., Apple. Themes - Overview - Human Interface Guidelines for MacOS Apps, developer.apple.com/macos/
human-interface-guidelines/overview/themes/.

>Inc., Apple. Color - Visual Design - IOS Human Interface Guidelines, developer.apple.com/ios/human-interface-guidelines
/visual-design/color/.

>“Mental Models and User Experience Design.” Nielsen Norman Group, nngroup.com/articles/mental-models/.

