import { Tiger } from '../model'

export const _getTigers = () => {
  return Tiger.findAll()
}
