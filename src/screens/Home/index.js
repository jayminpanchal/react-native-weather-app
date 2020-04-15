import React, {useState, useEffect} from 'react';
import {Container, Content, Form, Item, Input, Label, Button, Text, View} from 'native-base';
import {connect} from 'react-redux';

import Loading from '../../components/Loading';
import {fetchCountry} from '../../redux/actions';
import Styles from './style';
import Routes from '../../nav/routes';

const Home = ({navigation, fetchCountry, countries, countryError, isLoading}) => {

    const [country, setCountry] = useState('');

    useEffect(() => {
        setCountry('');
    }, []);

    useEffect(() => {
        if (countries.length === 0) {
            return;
        }
        setCountry('');
        navigation.navigate(Routes.COUNTRY_DETAILS);
    }, [countries.length]);

    useEffect(() => {
        if (!countryError) {
            return;
        }
    }, [countryError]);

    const onChange = (text) => {
        console.log('text', text);
        setCountry(text);
    };

    const onPress = () => {
        fetchCountry({countryName: country});
    };

    return (
        <Container style={Styles.container}>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Enter Country</Label>
                        <Input value={country} onChangeText={onChange}/>
                    </Item>
                    <View style={Styles.buttonWrapper}>
                        <Button onPress={onPress}>
                            <Text>Submit</Text>
                        </Button>
                    </View>
                    {countryError && <Text style={Styles.errorText}>
                        {countryError.message}
                    </Text>}
                </Form>
            </Content>
            {isLoading && <Loading/>}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        countries: state.weather.countries,
        isLoading: state.weather.isLoading,
        countryError: state.weather.countryError,
    };
};

const mapDispatchToProps = {fetchCountry};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
