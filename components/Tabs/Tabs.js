
class TabLink {
  constructor(banana) {
    // Assign this.element to the passed in DOM element
    this.banana = banana;

    // Get the custom data attribute on the Link
    this.data = this.banana.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.banana.addEventListener('click', () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    const dog = document.querySelectorAll('.tabs-link').forEach(item => item.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.banana.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(orange) {
    // Assign this.element to the passed in element
    this.orange = orange;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
    this.orange.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link').forEach((JIBJAB) => new TabLink(JIBJAB));