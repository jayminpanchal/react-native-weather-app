import React from 'react';
import {Image} from 'react-native';
import {Container, Content, Button, Text, View, List, ListItem} from 'native-base';
import {connect} from 'react-redux';
import {SvgCssUri} from 'react-native-svg';

import Loading from '../../components/Loading';
import {fetchWeather} from '../../redux/actions';
import Styles from './style';

const CountryDetails = ({countries, fetchWeather, isLoading}) => {

    const onPress = (cityName, countryName) => {
        fetchWeather({cityName, countryName});
    };

    const renderWeatherBlock = (weather) => {
        return (
            <View style={Styles.weatherInfoWrapper}>
                <Text>Temperature: {weather.temperature}C</Text>
                <Text>Wind: {weather.wind_speed}</Text>
                <Text>Precip: {weather.precip}</Text>
                <View style={Styles.weatherIconWrapper}>
                    {weather.weather_icons.map((icon, index) =>
                        <Image source={{uri: icon}} key={`WICON_${index}`} style={Styles.weatherIcon}/>,
                    )}
                </View>
            </View>
        );
    };

    const renderCountry = (country, index) => {
        return (
            <ListItem key={`COUNTRY_${index}`} style={Styles.listItemWrapper}>
                <View style={Styles.countryInfoWrapper}>
                    <View style={Styles.flagImageWrapper}>
                        <SvgCssUri uri={country.flag} width='100%' height='100%'/>
                    </View>
                    <View style={Styles.infoWrapper}>
                        <Text>Capital: {country.capital}</Text>
                        <Text>Population: {country.population}</Text>
                        <Text>Location: {country.latlng.join(',')}</Text>
                    </View>
                </View>
                {country.weather && country.weather.current && renderWeatherBlock(country.weather.current)}
                <Button block onPress={() => onPress(country.capital, country.name)}>
                    <Text>
                        Capital Weather
                    </Text>
                </Button>
            </ListItem>
        );
    };

    return (
        <Container style={Styles.container}>
            <Content>
                <List>
                    {countries.map((country, index) => renderCountry(country, index))}
                </List>
            </Content>
            {isLoading && <Loading/>}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        countries: state.weather.countries,
        isLoading: state.weather.isLoading,
        weatherError: state.weather.weatherError,
    };
};

const mapDispatchToProps = {fetchWeather};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);
