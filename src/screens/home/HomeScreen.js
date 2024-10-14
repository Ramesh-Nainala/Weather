/* eslint-disable react-native/no-inline-styles */
import {hp, normalize, wp} from 'helpers/styles/responsive';
import React, {useState} from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList, Keyboard} from 'react-native';
import FontText from 'components/FontText';
import Button from 'components/Button';
import Input from 'components/Input';
import colors from 'assets/colors';
import moment from 'moment';
import Fonts from 'assets/fonts/fonts';
import SvgIcons from 'assets/svgs/svgIcons';

export default function WeatherApp() {
  const [city, setCity] = useState(''); // Store user input for city
  const [weatherData, setWeatherData] = useState(null); // Store fetched weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message state
  const [focusField, setFocusField] = useState('');
  const cityRef = React.useRef();

  const apiKey = '1635890035cbba097fd5c26c8ea672a1'; // OpenWeatherMap API key

  // Function to fetch weather data based on city
  const fetchWeather = async () => {
    dismissKeyboard();

    if (!city) {
      setError('Please enter a city name');
      return;
    }

    setError('');
    setWeatherData(null); // Clear previous data
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        setLoading(false);
        setError('City not found. Please try again.');
        return;
      }

      const data = await response.json();

      // Extract the first weather record of each day
      const dailyData = data.list.filter((reading) => reading.dt_txt.includes('12:00:00'));

      if (dailyData.length === 0) {
        setError('No forecast data available.');
        setLoading(false);
        return;
      }

      setWeatherData(dailyData); // Set the extracted weather data
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      setLoading(false);
    }
  };

  // Function to handle city input change
  const handleCityChange = (text) => {
    setCity(text);
    if (text === '') {
      setWeatherData(null); // Clear weather data if input is cleared
      setError(''); // Clear error message when input is cleared
    }
  };

  // Function to dismiss the keyboard and clear focus
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setFocusField('');
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <FontText
        size={normalize(32)}
        textAlign="center"
        pBottom={hp(2)}
        pTop={hp(4)}
        color={colors.gray_d26c22}
        lineHeightFactor={'1.5'}>
        {'Weather in your city'}
      </FontText>

      {/* Input box */}
      <View style={{marginHorizontal: wp(14), marginBottom: hp(2)}}>
        <Input
          ref={cityRef}
          height={wp(12)}
          onFocus={() => setFocusField('cityName')}
          onBlur={() => setFocusField('')}
          value={city}
          onChangeText={handleCityChange} // Use new function for input change
          autoCapitalize="none"
          returnKeyType="done"
          placeholder={'Enter City Name'}
          color={colors.black_303535}
          placeholderTextColor={colors.gray_d26c22}
          style={{
            borderColor: focusField === 'cityName' ? colors.gray_d26c22 : colors.lightGray2,
          }}
        />
      </View>

      {/* Button to fetch weather data */}
      <View style={styles.buttonBox}>
        <Button onPress={fetchWeather} bgColor={colors.gray_d26c22} style={styles.buttonStyle}>
          <SvgIcons.Help fill={colors.white} />
          <FontText
            pLeft={wp(1)}
            fontFamily={Fonts.semiBold}
            size={normalize(14)}
            color={colors.white}>
            {'Search'}
          </FontText>
        </Button>
      </View>

      {/* Loader while data is being fetched */}
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}

      {/* Error message display */}
      {error ? (
        <FontText
          size={normalize(18)}
          textAlign="center"
          pBottom={hp(2)}
          pTop={hp(4)}
          color={colors.gray_d26c22}
          lineHeightFactor={'1.5'}>
          {error}
        </FontText>
      ) : null}

      {/* Display weather data once fetched */}
      {weatherData && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={weatherData}
          keyExtractor={(item) => item.dt.toString()}
          renderItem={({item}) => (
            <View style={styles.weatherItem}>
              {/* Top Row: Date */}
              <View style={[styles.dateRow, {paddingVertical: 8}]}>
                <FontText
                  size={normalize(20)}
                  textAlign="center"
                  color={colors.black}
                  fontFamily={Fonts.semiBold}>
                  {'Date: '} {moment(item.dt_txt).format('DD/MM/YYYY')}
                </FontText>
              </View>

              {/* Second Row: Temperature */}
              <View style={[styles.row, {backgroundColor: '#eee'}]}>
                <FontText size={normalize(16)} color={colors.black} style={styles.rowItemCenter}>
                  {'Temperature'}
                </FontText>
              </View>

              {/* Min and Max Temperature */}
              <View style={[styles.row, {backgroundColor: '#eee'}]}>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {'Min'}
                </FontText>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {'Max'}
                </FontText>
              </View>
              <View style={[styles.row, {backgroundColor: '#eee'}]}>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {item.main?.temp_min ? `${item.main.temp_min}°C` : 'N/A'}
                </FontText>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {item.main?.temp_max ? `${item.main.temp_max}°C` : 'N/A'}
                </FontText>
              </View>

              {/* Pressure */}
              <View style={[styles.row, {backgroundColor: colors.white}]}>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {'Pressure'}
                </FontText>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {item.main?.pressure ? `${item.main.pressure} hPa` : 'N/A'}
                </FontText>
              </View>

              {/* Humidity */}
              <View style={[styles.row, {backgroundColor: colors.white}]}>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {'Humidity'}
                </FontText>
                <FontText size={normalize(14)} color={colors.black} style={styles.rowItemCenter}>
                  {item.main?.humidity ? `${item.main.humidity}%` : 'N/A'}
                </FontText>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
    backgroundColor: '#F5FCFF',
  },
  loader: {
    marginTop: 20,
  },
  buttonStyle: {
    borderRadius: 8,
    paddingHorizontal: wp(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherItem: {
    marginVertical: hp(3),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ccc', // Border color for each cell
    borderWidth: 1, // Border width for each cell
    paddingVertical: 10, // Vertical padding for cells
  },
  dateRow: {
    backgroundColor: '#ff6600', // Background color for date row
  },
  rowItemCenter: {
    flex: 1,
    textAlign: 'center',
  },
  buttonBox: {
    marginVertical: hp(2),
    alignItems: 'center',
  },
});
