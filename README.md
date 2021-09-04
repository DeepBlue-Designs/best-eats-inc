
# Best Eats, Inc.

This application facilitates meal-planning, bridges the gap between local farmers and their customers, and is a one-stop shopping experience for curated recipes based on user-specified health and wellness goals.
## Authors

- [@nickleon7](https://github.com/nickleon07)
- [@xingvoong](https://github.com/xingvoong)
- [@nhu-mai-101](https://github.com/nhu-mai-101)
- [@ccdlt](https://github.com/ccdlt)
- [@begoodall](https://github.com/begoodall)
- [@ejiwen](https://github.com/Ejiwen)
- [@juliebarwick](https://github.com/juliebarwick)

## Features
- 🥬 **Landing Page:** allows users to `Get Started` by sending them to the `Sign Up` page. Introduces the services offered by Best Eats: providing locally sourced ingredients, choosing a `Meal Plan`, and offering `Lifestyle Guide` to track goals.
- 🥑 **Signup/Login:** `Signup` allows users to create a new account if they do not already have one. `Login` lets previously signed-up users log in to their `User Profile`.
- 🥦 **User Profile:** displays user information, such as email, username, address, and optional health metrics. Users can also manage their account, and update/view their wellness status.
- 🥕 **Lifestyle Guide:** displays a list of editable goals and action items with ability to mark as complete.
- 🥒 **Menu & Pricing:** displays healthy meals provided by the Spoonacular Recipe API. Allows users to choose meal plans, meals, and checkout.
- 🥗**Meet the Farmers & Nutritionists:** provides places to find local farmers and nutritionists.
## Demo

Insert gif or link to demo


## Run Locally
_Check required tech is installed (see below)._

Clone the project

```bash
  git clone https://github.com/DeepBlue-Designs/best-eats-inc.git
```

Go to the project directory

```bash
  cd best-eats-inc
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Start webpack

```bash
  npm run build
```

Start json-server

```bash
  json-server --watch db.json --port 4000
```
Now the app is ready at http://localhost:3000/

## Tech Stack

**Client:** React, Material-UI, styled-components, React-Bootstrap

**Server:** Node, Express, JSON server

**Database:** MongoDB

## Requirements

* Web browser
* npm
* Linux, macOS, or Windows
## Acknowledgements

 - [Spoonacular Food API](https://spoonacular.com/food-api/)