

## Joey Martinez

##### https://github.com/lmu-cmsi370-fall2017/reusable-component-joeymichaelmartinez.git

| | Feedback | Points | Notes |
| --- | --- | ---: | --- |
| **Direct manipulation implementation (_2b_, _3a_, _3b_, _4a_, _4b_, _4d_)** | Works pretty well; no glitches seen. | 20 |  |
| **Notification mechanism (callback/event) (_2b_, _3b_, _4a_, _4b_, _4d_)** | Notifier includes `$current` as `this`, then `percentage`. | 20 |  |
| **Plugin model implementation (_2b_, _3b_, _4a_, _4b_, _4d_)** | There is a little bit of a disconnect with the model, because the notification returns the percentage across the slider’s with but the apparent model code saves `newPosition` to the `data(‘slide-distance’)` property. Further `percentage` does not use `newPosition` at all in its calculations! It just doesn’t connect. This means that external code can’t “consult” the component on their own to find out what the current percentage is; the value is only ever known at notification time. Conversely, the value that is instead stored as a model is `slide-distance`, which is a completely different number. The approach does not have cohesion nor consistency. | 12 | Serious inconsistency between the value stored as a “model” (`slide-distance`) and the value sent out upon notifications (`percentage`) |
| **Web front end integration (_2b_, _3a_, _3b_, _4a_, _4b_, _4d_)** | Nice idea for the integration; I did have to poke around a little to figure out what the slider did, so the integration user interface could have been a little more helpful in that area.<br><br>One point of improvement is that the slider code isn’t part of any front end controller or wrapped into a controller of its own. These types of “do the right thing” decisions should become more and more second nature now that you are an upper-division student. | 17 | Full integration means that it’s part of a web front end controller or a controller in its own right |
| **Inappropriate third-party library use** | No third-party contraband found. |  |  |
| **Test Suite (_4a_, _4b_, _4d_)** | 6 out of 6<br><br>**Statements** 29/29 (100.00%)<br>**Branches** 15/16 (93.75%)<br>**Functions** 2/2 (100.00%)<br>**Lines** 29/29 (100.00%) | 20 | 
| **Code Style (_4c_)** | No errors. |  |  |
| **Version Control (_4e_)** | 28 commits |  |  |
| **Punctuality (_4f_)** | on time |  |  |
|  |  | **89** | **Total** |
