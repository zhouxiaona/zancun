import { DATATYPE } from '../constants'
const count = (count = 0, action) => {
    switch (action.type) {
        case DATATYPE.ADD:
            return count + 1
        case DATATYPE.DEC:
            return count - 1
        default:
            return count
    }
}
export default count