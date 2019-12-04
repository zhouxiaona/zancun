import React from 'react'
// import 'react-count-animation/dist/count.min.css';
// import AnimationCount from 'react-count-animation';

// export default function Hook() {
//       // 声明一个新的叫做 “count” 的 state 变量
//       const [countObj, setCount] = useState({count: 0})
//       useEffect(()=>{
//         document.title=`clicked ${countObj.count} times`
//       })
      
//       const [isOnLine, setIsOnLine] = useState(null)
//       useEffect(() => {
//         // function handleStatusChange(status) {
//         //   setIsOnline(status.isOnline)
//         // }
//         // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//         // return function cleanup() {
//         //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//         // }
//       })
//       const settings = {
//         start: 99923,
//         count: 9999999,
//         duration: 3000,
//         decimals: 4,
//         useGroup: true,
//         animation: 'up',
//       };
//       const settings2 = {
//         start: 1,
//         count: 999999,
//         duration: 4000,
//         decimals: 2,
//         useGroup: true,
//         animation: 'roll',
//       };
//       const settings3 = {
//         start: 1,
//         count: 9999999,
//         duration: 3000,
//         decimals: 2,
//         useGroup: true,
//         animation: 'slide',
//       };

//       return (
//         <div>
//           <p>You clicked {countObj.count} times</p>
//           <button onClick={() => setCount({count: countObj.count + 1})}> Click me </button>
//           <div onClick={()=> setIsOnLine(!isOnLine)}>{isOnLine ? 'OnLine' : 'OffLine'}</div>
//           <div>
//             <h1 className="title">Count Animation</h1>
//             <div className="exam-div">
//               <AnimationCount {...settings}/>
//             </div>
//             <h1 className="title">Count Roll</h1>
//             <div className="exam-div">
//               <AnimationCount {...settings2}/>
//             </div>
//             <h1 className="title">Count Slide</h1>
//             <div className="exam-div">
//               <AnimationCount {...settings3} />
//             </div>
//           </div>
//         </div>
//       )
//     }

    export default class Hook extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

      componentWillMount(){
        console.log('componentWillMount==')
      }
    
      componentDidMount() {
        console.log('componentDidMount==')
        document.title = `You clicked ${this.state.count} times`;
        setTimeout(()=>{
          this.setState({
            count:7
          })
        },1000)
      }

      componentWillUnmount(){
        console.log('componentWillUnmount')
      }

      componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
      }

      componentWillUpdate(){
        console.log('componentWillUpdate')
      }
      
      componentDidCatch(){
        console.log('componentDidCatch')
      }
    
      componentDidUpdate() {
        console.log('componentDidUpdate==')
        document.title = `You clicked ${this.state.count} times`;
      }

      shouldComponentUpdate(nextState,nextProps){
        console.log('shouldComponentUpdate==',nextState,nextProps)
        return true
      }
    
      render() {
        console.log('render==')
        return (
          <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              Click me
            </button>
          </div>
        );
      }
    }