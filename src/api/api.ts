import axios from 'axios'
import type { List } from '@interfaces/interface'
export default {
  async GetList (): Promise<List[]> {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments')
    return data
  }
}
