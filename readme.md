1. In getElementById here id is unique, but getElementsByClassName can call multiple element. querySelector select one element like first element on the other hand querySelectorAll select all items inside any parentDiv.

2. For create element : const newEelment = document.createElemet('p') and insert new element: parentDiv.append(newEelment)
3. Event Bubbling menas call child element to parent element. In this process event going to bobbuling up and take place in the root.
4. Event Delegation means you add event in parentElement and this event will apply all the element. This is useful because you don't need to add event separatly all the item, for this it makes clean code, save time, energy & storage.
5. preventDefault is used for stop default acton and do work with current event action.
