"""
Generating JSON data files to plot graphs on Browser
"""
# importing the required libraries
import csv
from collections import defaultdict
import json


with open('datasets/csv/population_estimates_csv.csv', 'r') as csv_file:
    csv_list = list(csv.DictReader(csv_file, delimiter=','))
    csv_file.close()


def indian_population():
    """
    JSON data generation for Bar Plot of 'population of India' vs. years.
    """

    years = [
             "2005", "2006", "2007", "2008",
             "2009", "2010", "2011", "2012",
             "2013", "2014", "2015"
            ]
    india = defaultdict(int)

    # storing india data
    for row in csv_list:
        if row['Region'] == "India":
            if row['Year'] in years:
                india[row['Year']] = int(float(row['Population']))

    # formatting data accordingly
    data = [[year, india[year]] for year in india]

    # duming data in JSON file
    with open('datasets/json/indian-population.json', 'w') as json_file:
        json.dump(data, json_file)


def asean_population():
    """
    JSON data generation for population of ASEAN countries for the year 2014
    """

    # storing ASEAN countries list
    with open('datasets/csv/asean_countries.csv', 'r') as file:
        asean_list = [row['Asean countries'] for row in csv.DictReader(file)]
        file.close()

    population = []

    # storing respective population data
    for row in csv_list:
        if row['Year'] == "2014" and row['Region'] in asean_list:
            population.append(int(float(row['Population'])))

    # changing names to shorter one's
    for key, value in enumerate(asean_list):
        if value == "Brunei Darussalam":
            asean_list[key] = "Brunei"
        elif value == "Lao People's Democratic Republic":
            asean_list[key] = "Laos"

    # formatting data accordingly
    data = [[country, pop] for country, pop in zip(asean_list, population)]

    # duming data in JSON file
    with open('datasets/json/asean-population.json', 'w') as json_file:
        json.dump(data, json_file)


def total_saarc_population():
    """
    JSON data generation for Total SAARC population vs year
    """

    with open('datasets/csv/saarc_countries.csv', 'r') as file:
        saarc_list = [row['saarc countries'] for row in csv.DictReader(file)]
        file.close()

    years = [
             "2005", "2006", "2007", "2008",
             "2009", "2010", "2011", "2012",
             "2013", "2014", "2015"
            ]
    saarc = defaultdict(int)

    # storing saarc data
    for row in csv_list:
        if row['Region'] in saarc_list:
            if row['Year'] in years:
                saarc[row['Year']] += int(float(row['Population']))

    # formatting data accordingly
    data = [[year, saarc[year]] for year in saarc]

    # duming data in JSON file
    with open('datasets/json/total-saarc-population.json', 'w') as json_file:
        json.dump(data, json_file)


def total_asean_population():
    """
    JSON data generation for ASEAN countries for the years 2005 to 2014
    """

    with open('datasets/csv/asean_countries.csv', 'r') as file:
        asean_list = [row['Asean countries'] for row in csv.DictReader(file)]
        file.close()

    years = [
             "2005", "2006", "2007",
             "2008", "2009", "2010",
             "2011", "2012", "2013", "2014"
            ]
    population = defaultdict(list)

    # storing respective population data
    for row in csv_list:
        if row['Region'] in asean_list and row['Year'] in years:
            population[row['Region']].append(int(float(row['Population'])))

    # duming data in JSON file
    with open('datasets/json/total-asean-population.json', 'w') as json_file:
        json.dump(population, json_file)


if __name__ == '__main__':
    indian_population()
    asean_population()
    total_saarc_population()
    total_asean_population()
