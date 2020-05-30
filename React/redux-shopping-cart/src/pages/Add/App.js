import React from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'

// const App = () => {
//     return (
//         <div>
//             <AddTodo/>
//             <TodoList/>
//             <Footer/>
//         </div>
//     )
// }
class App extends React.Component {
    constructor() {
      super();
      this.state = { val: 0 };
    }
    
    componentDidMount() {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val,'1');    // 第 1 次 log  =》0
  
      this.setState({val: this.state.val + 1});
      console.log(this.state.val,'2');    // 第 2 次 log =》0

    //   this.setState({val:this.state.val+1},()=>{
    //     console.log(this.state.val,'3');
    //   })
    //   console.log(this.state.val,'4');
      setTimeout(() => {
        this.setState({val: this.state.val + 1});
        console.log(this.state.val,'3');  // 第 3 次 log 2
  
        this.setState({val: this.state.val + 1});
        console.log(this.state.val,'4');  // 第 4 次 log 3
      }, 0);

    // 请用React程序把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
    // ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
      let arr1=['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
      let arr2=['A', 'B', 'C', 'D']
      let arr3=[]
      for(let i=0;i<arr1.length;i++){
        arr3.push(arr1[i])
        if((i+1)%2===0){
            arr3.push(arr2[((i+1)-2)/2])
        }
      }
    //   console.log(arr3)

    // var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
    // // 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
    // console.log(Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b))



    }
  
    render() {
        console.log('render==')
      return null;
    }
  };
  
export default App
