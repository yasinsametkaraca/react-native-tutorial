import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native'; //flatlist is used for scrollable lists
import news_data from './news_data.json';
import NewsCard from './src/components/NewsCard/NewsCard';
import news_banner_data from './news_banner_data.json';

interface NewsItem {
  u_id: number;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
}

const App = (): JSX.Element => {
  const renderNews = ({item}: {item: NewsItem}) => <NewsCard news={item} />;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>News App</Text>
      </View>
      <FlatList<NewsItem>
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(news => (
              <Image
                style={styles.banner_image}
                source={{uri: news.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, //flex: 1 means take all the space
    backgroundColor: 'white',
  },
  banner_image: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {fontWeight: 'bold', fontSize: 50, margin: 5},
});
