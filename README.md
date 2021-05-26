# Dataproject JavaScript

Data project with the graphs generated on the browser using HighCharts.

## Download required csv file
Download the csv file from the <a href="https://datahub.io/core/population-growth-estimates-and-projections/r/population-estimates.csv">link</a>  and paste it in the directory `datasets/csv` with the name **population_estimates_csv.csv**
```bash
datasets/csv/population_estimates_csv.csv
```

## How to run ?
You can clone this repo and follow the steps :
#### To generate JSON files, run :
```bash
python3 generating_json.py
```
That will generate the JSON files.

NOTE: There should be `json` folder in `datasets` folder, like `datasets/json`, otherwise, it will throw a error that directory not exist.

Next run the command :
```bash
python3 -m http.server
```
It starts a localhost server. Head to that url and open `project.html` file to see the graphs.

Alternatively,
Click this <a href="https://jithendra-project-javascript.herokuapp.com/">Link</a> to see the hosted website on Heroku.


## Where are JSON files located ?
JSON files are located in `datasets/json` for each graph.

JSON files only contains data required for respective graph plots.

## How to plot graph on Browser ?
I have used <a href="https://www.highcharts.com/demo">HighCharts</a> JavaScript Lib for plotting graphs on Browser.



