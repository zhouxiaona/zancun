import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  RefreshControl,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native'
import {Intheaters, search} from '../api/API'
export default class Movies extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      ds,
      inputValue:'',
      start:0,
      hasMore:false,
      freshing:true,
    }
    this.dataSource = []
  }

  static navigationOptions = {
    title: 'Movies'
  }

  componentDidMount() {
    this._onDataArrived(this.state.start)
  }

  // 跳往第三方详情
  gotoDetail = (alt, title) => {
    this.props.navigation.push('MyWebView',{alt,title})
  }

  // 跳往自定义详情
  gotoInfo = (id, title) => {
    this.props.navigation.push('MoviesDetail',{id,title})
  }

  // 检索数据
  _onDataArrived  = async (start) =>{
    const {ds} = this.state
    let {data:{total, subjects }} = await Intheaters({start: start})
    this.dataSource = this.dataSource.concat(subjects)
    this.setState({
      ds: ds.cloneWithRows(this.dataSource),
      hasMore: this.dataSource.length >= total ? false : true,
      freshing:false,
    })
  }

  // 搜索数据
  serverFunc = async() => {
    const {inputValue,ds} = this.state
    if(inputValue === ''){
      this._onDataArrived()
    }else{
      let {data:{count, start, subjects, title, total}} = await search({q:inputValue})
      this.dataSource = [].concat(subjects)
      this.setState({
        ds: ds.cloneWithRows(this.dataSource)
      })
    }
  }

  _renderRow(RowData){
    var url = RowData.images.large
    var actor="";
    var tag="";
    for(var i=0;i<RowData.casts.length;i++){
        actor += RowData.casts[i].name+",";
    }
    for(var j=0;j<RowData.genres.length;j++){
        tag += RowData.genres[j]+"、";
    }
    tag = tag.substr(0,tag.length-1);
    actor = actor.substr(0,actor.length-1);
    return (
      <View style={styles.box} >
        <TouchableOpacity style={styles.leftS} onPress={this.gotoDetail.bind(this,RowData.alt,RowData.title)}>
          <Image source={{uri:url}} style={styles.pic}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightS} onPress={this.gotoInfo.bind(this,RowData.id,RowData.title)}>
          <Text style={styles.mytext} numberOfLines={1}>名称：{RowData.title}</Text>
          <Text style={styles.mytext} numberOfLines={1}>演员：{actor}</Text>
          <Text style={styles.mytext}>评分：{RowData.rating.average}</Text>
          <Text style={styles.mytext}>时间：{RowData.year}</Text>
          <Text style={styles.mytext}>标签：{tag}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // 触底刷新
  onEndReached = () => {
    const {start,hasMore} = this.state
    if(hasMore){
      this.setState({
        freshing:true
      })
      let currentPage = start
      currentPage += this.dataSource.length
      this._onDataArrived(currentPage)
      this.setState({
        start: currentPage
      }) 
    }else{
      ToastAndroid.show('已经到底了~~',ToastAndroid.SHORT)
    }
  }

  render(){
    const {ds, inputValue,freshing} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <TextInput 
            style={styles.myInp} 
            placeholder={"搜索电影"}
            value={inputValue}
            onChangeText={(text) => this.setState({inputValue: text})}
          />
          <TouchableOpacity 
            style={styles.mybtn}
            onPress={this.serverFunc.bind(this)}
          >
            <Text style={styles.ser}>搜索</Text>
          </TouchableOpacity>
        </View>
        <ListView
          scrollView
          dataSource={ds}
          renderRow={this._renderRow.bind(this)}
          contentContainerStyle={styles.list}
          onEndReachedThreshold={50}
          onEndReached={this.onEndReached.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={freshing}
              title="正在刷新..."
              titleColor="#000"
              colors={['white', 'white', 'white']}
              progressBackgroundColor="lightblue"
            />
          }
        />
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:"center",
  },
  wrap:{
    flexDirection:"row",
    marginTop:20,
    paddingBottom:20,
  },
  myInp:{
    width:360,
    height:50,
    borderColor:"#fff",
    borderRadius:5,
    backgroundColor:"#eee",
  },
  mybtn:{
    width:60,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink",
    marginLeft: 10,
    borderRadius: 5,
  },
  ser:{
    color:"white",
    fontSize:16,
  },
  list:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingBottom:100,
  },
  box:{
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width/2,
    marginTop:30,
  },
  leftS:{
    flex:2,
  },
  pic:{
    width:160,
    height:199,
    marginBottom:15,
  },
  rightS:{
    flex:3,
    width:160,
    justifyContent:"center",
  },
  mytext:{
    lineHeight:16,
    fontSize:12
  },
});