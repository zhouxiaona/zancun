import {DATATYPE} from '../constants'

const list = (list=[], action) => {
      switch(action.type){
            case DATATYPE.ADD_LIST:
                  return [
                        ...list,
                        action.data,
                  ]
            case DATATYPE.DEL_LIST:
                  return list.filter((item, index)=>{ return item.id !== action.id })
            default:
                  return list
      }
}
export default list