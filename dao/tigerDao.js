import { Tiger } from '../model'

export const getTigers = () => {
  return Tiger.findAll()
}
