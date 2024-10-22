# LAB | React Travel Bucket List

## Learning Goals

I AM MAKING A CHANGE

Upon completion of this exercise, you will be able to:

- Use the useState hook to create state variables and add state to React components.
- Use state variable setter functions to update state and trigger component re-render.
- Use array method map() to render array data as a list of elements.
- Use array methods filter(), splice(), push(), and array copying techniques to delete or add items to React lists.
- Create controlled components to manage the form inputs.
- Create event handler functions to handle user interactions and browser events.

## Introduction

You’ve realized that you want to keep track of all the destinations you plan to visit in the future. To do this, you'll create a travel bucket list app that helps you track destinations, categorize them by continent, and keep notes on your future adventures.

## Setup

- Fork this repo
- Clone the forked repo
- Open the LAB and start:

  ```bash
  cd lab-react-travel-bucket
  npm install
  npm start
  ```

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master

  ```

- Create a Pull Request so I can check your work.

## Instructions

### Iteration 0 | Setup

Import JSON Data
Create a destinations.json file with an array of destinations. Each destination should have the following properties: name, image, continent, visited (boolean), and notes.

```
[
    {
        "name": "Paris",
        "image": "https://linktoparisimage.com",
        "continent": "Europe",
        "visited": false,
        "notes": "Visit the Eiffel Tower."
    },
    {
        "name": "Tokyo",
        "image": "https://linktotokyoimage.com",
        "continent": "Asia",
        "visited": false,
        "notes": "Explore the temples."
    },
    // Add more destinations...
];
```

Import the array into App.js:

`import destinations from "./destinations.json";`

### Iteration 1 | Render a Simple List

Now that you’ve imported the destination data, save it in a state variable using useState. Map over the state variable and render a simple list that displays the destination names and images:

```
<div>
  <p>DESTINATION_NAME_HERE</p>
  <img src="DESTINATION_IMAGE_HERE" width={100} />
</div>
```

### Iteration 2 | Create the DestinationBox Component

Create a new component named DestinationBox. It should take a destination prop (an object) and render the following details: name, image, continent, notes, and a "Mark as Visited" button.

Once created, test it by rendering a single instance of the component in App.js:

```
<DestinationBox destination={{
  name: "Paris",
  image: "https://linktoparisimage.com",
  continent: "Europe",
  visited: false,
  notes: "Visit the Eiffel Tower."
}} />
```

### Iteration 3 | Render a List of DestinationBox Components

Use the DestinationBox component to render the list of all destinations from the destinations.json file. Remember to pass the destination object as a prop.

Your app should now display a list of destinations with their details.

### Iteration 4 | Mark Destinations as Visited

When users click "Mark as Visited" on a destination, update the state to reflect that the destination has been visited. Optionally, you can filter the list to show only unvisited destinations.

### Iteration 5 | Create a Delete Button

Add a delete button to the DestinationBox component. When clicked, the destination should be removed from the list. Pass a function through props from App.js to handle this.

### Iteration 6 | Add a New Destination

Create a controlled component named AddDestinationForm. This component should contain input fields for the name, image, continent, and notes of a new destination.

When the user submits the form, the new destination should be added to the list. To achieve this, pass a function from App.js to handle adding the new destination to the state.

### Iteration 7 | Implement Search Bar

Create a Search component to search through and filter the list of destinations by name. This will allow users to search for specific destinations in their bucket list.
