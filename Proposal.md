
# Proposal for the SoccerU REST Api


## What?

SoccerU is an authenticated REST Api that servers real data for soccer leagues, teams, and players.

## How 

Right now SoccerU is serving data from my own knowldge. However, I am aproaching a stage to scrap teams, leagues, and players data from an online website since there is no public external api. I will start with 1 league, 1 team, and 1 player then grow from there.

## Why?

* I am creating SoccerU because...
* Many top sports companies like ESPN do not publicly expose their data for the developer communities.
* SoccerU can be used to for beginers ios developers who want to learn more about authentictsed networking.
* SoccerU can be consumed by developers who are building soccer-related websites.


## Models

* Users
* Leagues
* Teams
* Players
* Comments

## Model Relationships

* Leagues have many teams
* Teams have many players
* players have many comments


