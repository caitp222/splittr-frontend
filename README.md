# SplittR

This is the React Native front-end for SplittR, a mobile app that allows users to create groups, scan receipts using the Google Vision API and track total group expenditure and how much each member of the group owes. Upon settling up a group, the total that each user has spend is displayed, along with how much they are owed/owe the rest of the group. 

Please see the repository for the back-end, built using Ruby on Rails, [here](https://github.com/caitp222/splittr-backend).

This repository was forked after the group project period ended on October 6 2017.

# Screenshots

- SplittR allows users to create groups and track expenses that are then to be divided evenly between members.

![alt-text](https://github.com/caitp222/splittr-frontend/blob/screenshots/screenshots/Screenshot3.png)
![alt-text](https://github.com/caitp222/splittr-frontend/blob/screenshots/screenshots/screenshot4.png)

- Users can scan receipts with their phone camera. SplittR uses the Google Vision API to read the text. An algorithm in the backend then parses the data to find the total price.

![alt text](https://github.com/caitp222/splittr-frontend/blob/screenshots/screenshots/Screenshot1.jpg)
![alt text](https://github.com/caitp222/splittr-frontend/blob/screenshots/screenshots/Screenshot11.png)


# Contributors
- Caitlin Prentke
- Rico De Santis
- Rebecca Trachtenberg

# To Run Locally in the Simulator
- Make sure you have Xcode installed and running.
- Make sure you have the relevant [backend](https://github.com/caitp222/splittr-backend) installed.
- `git clone https://github.com/caitp222/splittr-frontend.git`
- `cd splittr-frontend`
- `npm install`
- `react-native run-ios`
