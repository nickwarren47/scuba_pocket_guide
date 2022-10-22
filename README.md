# Scuba Pocket Guide: React/Rails API

## Description

The app allows users (divers) the ability to view different Caribbean dive locations and to see the different wildlife at each dive site. Each dive site incliudes info on the average depth, diver skill needed to dive there, dive name, and country. Additionally, the wildlife at each location includes info on the name, species name, animal photo, size, and description. If the animal/coral is hazardous, a small warning will appear underneath the animal image. 

Other features include the user being able to view weather at a specific dive site, create dive logs, view previous dive logs, see their user profile, login, logout, see the conservation page, and the see the About page.

Backend validations to prevent malicious user data. These validations will prevent users from entering data that could break the backend and app. One of these validations will also require users to agree to the app's user agreement when they initially signup. 

This project has a React frontend and Rails backend. It also uses Taiwlind CSS for styling the frontend as well as Postgresql for the backend to allow for easy deployment on Heroku.

## Software Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql
- Tailwind CSS 
- Flowbite
- React 
- React Router Dom

## User Experience:
SPG - Not Logged In:
    - User can look up dive locations by country and name
    - User can see aquatic wildlife and corals present at dive location (if wildlife/coral species is dangerous, a  warning will appear above wildlife/corals photo warning diver)
    - User can see weather at location
    - User can view conservation page
    - User can see About page
SPG - User Logged In:
    - User can view their diver profile
    - User can view previously entered dive logs
    - User can log individual dives (info included: depth, starting air PSI, ending air PSI, air type used (normal air, NITROX), time in dive, location, dive master info, notes)
SPG - User Logged In (stretch goal):
    - User can leave comments on dive locations/wildlife identifier
    - User can save dive locations
    - User can post on wildlife identifier
SPG - PRO (paid for feature...these are stretch goals):
    - Recommended dive gear based on dangerous wildlife and weather conditions


## Project Need in Scuba Market: 
No app like this exists (combining all the features listed above), the apps that include some or only one of the features listed above are rudimentary and do not satisfy the needs of experienced SCUBA divers. Clearly, the market needs this app and it will be received well by many divers.

## Data Needed (each backend table with columns): 
Animals/Corals: 
    id
    Common Name 
    Species name
    Oceans/seas found in
    Size 
    Image
    Dangerous: Very Dangerous, Use Caution, Mild
    Description
Users (signup):
    id
    Name (validation: must be present)
    Country from
    Diver cert level
    Diver cert organization 
    Avatar
    Age (validation: must be 18 or older)
    Disclaimer (validation: must be selected before proceeding)
    Email (validation: must be present, must be unique)
    Password (validation: must be present and at or more than 8 characters)
Users (login) 
    Email 
    Password
Dive sites (join table)
    Name
    Country
    Image
    User_id 
    Animal_id
    Dive_log_id
Dive log
    Id  
    Dive number
    Dive site name
    Dive site country
    Date
    Time in
    Time out
    Depth
    Starting PSI
    Ending PSI
    Air temp
    Surface temp
    Bottom temp
    Fresh or salt water
    Shore or boat 
    Training dive?


## API Info: 
    - Main app data: The app uses an internal API for most of the data. 
    - Weather API: The app uses an external api to access current weather data and then displays it. 
        The weather API is called "OpenWeather," the URL is: "https://openweathermap.org/api"


## Overall Development Plan (Backend):
1. Start by designing the MRD for the various tables and columns that must be included on the project
2. Use Rails generators to (use the "Resource" generator) to build the tables for the migration files, models, controllers, and serializers. 
3. After setting up all the files using the generators, then set up the relations in the model files ("has_many", "belongs_to", "has_many through")
4. Run "rails db:migrate" to migrate all files
5. Set up the data in the seed.db file 
6. 


