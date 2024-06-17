import { ParamValidator } from '@/frame-manager/Provider'
import { directoryTree, findDirectory } from './directory'

export const filesValidator: ParamValidator = (params) => {
  if (findDirectory(directoryTree, params) === undefined) return ['']
  return params
}
