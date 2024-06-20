import { ParamValidator } from '@/frame-manager/Provider'
import { playlist } from './list'

const getRandomVideo = () => {
  const keys = Object.keys(playlist)
  return keys[Math.floor(Math.random() * keys.length)]
}

export const playerValidator: ParamValidator = (params) => {
  if (!(params.join('/') in playlist)) return getRandomVideo().split('/')
  return params
}
