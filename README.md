# Evolve With Anna
Full stack eCommerce web application built to help raise funds for a friend battling a rare bone cancer. It's a simple app built with React, Stripe, Mongoose, MongoDb Atlas, and Express.

This site was built for a two-week fundraiser, so if you happen upon this in the future, I apologize if some features are no longer working. I do plan to fork this repo and build upon it as a side project. In addition to the website design and management, I also designed the logo.

The site was open from 12/1/2020 to 12/18/2020, selling nearly 200 shirts and raising $8,000 for our dear friend. All of the proceeds were donated to help pay for her radiation treatment.

Please visit this site and read more about the cause here: https://www.evolvewithanna.com

## Table of Contents
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Credits](#credits)

## Demo
Below is a test purchase going through. It also shows animation, localStorage, and desktop view. The website works seamlessly on mobile too.

![Evolve with Anna Demo](https://media.giphy.com/media/07jMkxJvthrXNqf0Ch/giphy.gif)

There's also a modal for if a payment doesn't work but it's not as pretty and is hopefully never seen :)

## Prerequisites
Should you want to create your own eCommerce app that functions similar to this one, you'll need to have the following installed or ready to go:
- MongoDB & Mongoose with a MongoDB Atlast account
- Express.js
- React.js
- Node.js
- Heroku
- Stripe Account

## Installation
Feel free to clone this repo and credit me in your README. To clone the repo on your local machine, type the following into your terminal:
```
git clone https://github.com/alexastef/evolvewithanna.git
```
Before running the app, make sure you install all the dependencies by running npm install from the root directory:
```
npm install
```
To run the app, run npm start in both the root and the client:
```
npm start
```
If you're using concurrently, you would only need to run in the root.


## Usage
It's important to note that when you sign up for Stripe, you receive a two sets of keys - test and production. Make sure that, until your app is ready for production, you're using your test API keys. Even though these are test keys, it's important to keep your "secret" key secret in a .env file.

Stripe's documentation provides lots of awesome examples as well as test card numbers to use in development. You're able to see all these "test" payments in your Stripe dashboard. You'll have to put your own keys in if you clone my repo, and make sure to configure them properly in Heroku upon deployment.

Once you have the test environment working, change out your keys and and it's time to deploy. You should be able to add and remove items from your cart, select sizes where applicable, and checkout with your preferred payment method. You can then check all payment and customer data in Stripe and access specific order (non-sensitive) data in Atlas. I saved the items each person ordered as well as their shipping address, that way when we go to fulfill all the orders, all the info I need is in one place.

## Author
Just me! But I had the input of a few friends who wanted to help. See [below](#credits) for some credits that helped me get this finished.

## Credits
To get the shop functioning with size selection, I referred to [this Udemy course](https://www.udemy.com/share/101AUqAEEcdF5UQXgH/). I made my own changes and updates, but this was helpful.

I also relied heavily on Stripe documentation - it's amazing! If you need to set up payment on your website, I highly recommend checking their docs out: https://stripe.com/docs/development/quickstart

Please feel free to reach out if you have any questions for me!
