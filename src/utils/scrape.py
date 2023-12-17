from flask import Flask, jsonify
from flask_cors import CORS  # Import the CORS module
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app) 

class GDP_Web_Scraper: 
    # Constructor
    def __init__(self):
        self.data = []
        self.country_list = { 
            "United States": "us", 
            "China": "china", 
            "Japan": "japan", 
            "Germany": "germany", 
            "India": "india", 
            "United Kingdom": "uk", 
            "France": "france", 
            "Russia": "russia", 
            "Canada": "canada",
            "Italy": "italy",
            'Brazil': 'brazil',
            'Australia': 'australia',
            'South Korea': 'south-korea',
            'Mexico': 'mexico',
            'Indonesia': 'indonesia',
            'Netherlands': 'netherlands',
            'Turkey': 'turkey',
            'Saudi Arabia': 'saudi-arabia',
            'Switzerland': 'switzerland',
            'Argentina': 'argentina',
            'Taiwan': 'taiwan',
            'Sweden': 'sweden',
            'Poland': 'poland',
            'Belgium': 'belgium',
            'Thailand': 'thailand',
            'Nigeria': 'nigeria',
            'Austria': 'austria',
            'Iran': 'iran',
            'Norway': 'norway',
            'Egypt': 'egypt',
            'Bangladesh': 'bangladesh',
            'Singapore': 'singapore',
            'Colombia': 'colombia',
            'Malaysia': 'malaysia',
            'Pakistan': 'pakistan',
            'Philippines': 'philippines',
            'Finland': 'finland',
            'Chile': 'chile',
            'South Africa': 'south-africa',
            'Denmark': 'denmark',
            'Vietnam': 'vietnam',
            'Czech Republic': 'czech-republic',
            'Romania': 'romania',
            'Peru': 'peru',
            'Greece': 'greece',
            'Portugal': 'portugal',
            'Iraq': 'iraq',
            'New Zealand': 'new-zealand',
            'Algeria': 'algeria',
            'Qatar': 'qatar',
            'Kazakhstan': 'kazakhstan',
            'Hungary': 'hungary',
            'Kuwait': 'kuwait',
            'Ukraine': 'ukraine',
            'Morocco': 'morocco',
            'Ecuador': 'ecuador',
            'United Arab Emirates': 'united-arab-emirates',
        }
    # Getters
    def get_data(self):
        return self.data
    def scrape_country(self, country_in, is_reversed):
        # URL for the specific country's GDP page
        url = f"https://www.worldometers.info/gdp/{self.country_list[country_in]}-gdp/"
        # Send a GET request to the URL
        response = requests.get(url)
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        # Find all table rows (excluding the header row)
        rows = soup.find_all('tr')[1:]
        # Scrape the year and GDP per capita values for each row
        years_array = []
        gdp_per_capita_array = []
        for row in rows:
            years_elements = row.find_all('td')
            if years_elements:
                # if years element contains a div, lets skip it
                if years_elements[0].find('div'): 
                    continue
                year = int(years_elements[0].text)
                years_array.append(year)
            gdp_per_capita_elements = row.find_all('td', style="font-weight: bold; text-align:right")
            if gdp_per_capita_elements:
                gdp_per_capita = int(gdp_per_capita_elements[3].text.strip('$').replace(',', ''))
                gdp_per_capita_array.append(gdp_per_capita)
        # One more for loop, to map the years to the GDP per capita values
        scraped_data = []
        for i in range(len(years_array)):
            scraped_data.append((years_array[i], gdp_per_capita_array[i]))
        if is_reversed:
            scraped_data = scraped_data[::-1]
        self.data = scraped_data
        return scraped_data

@app.route('/', methods=['GET'])
def index():
    return "Hello, World"

@app.route('/api/scrape', methods=['GET'])
def scrape_api():
    scraper = GDP_Web_Scraper()
    country = "United States"  # Replace with the desired country
    is_reversed = False  # Replace with True if you want the data in reverse order
    data = scraper.scrape_country(country, is_reversed)
    return jsonify(data)

@app.route('/api/scrape/<country>', methods=['GET'])
def scrape_api(country):
    scraper = GDP_Web_Scraper()
    is_reversed = False  # Replace with True if you want the data in reverse order
    data = scraper.scrape_country(country, is_reversed)
    return jsonify(data)

if __name__ == '__main__':
    app.run()