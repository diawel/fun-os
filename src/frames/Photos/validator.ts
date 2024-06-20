import { ParamValidator } from '@/frame-manager/Provider'
import { directoryTree, findDirectory } from './directory'

export const photosValidator: ParamValidator = (params) => {
  console.log("return: ", params)
  console.log("findDirectory: ", findDirectory(directoryTree, params))
  if (params.length === 0) return ['全ての写真']
  if (findDirectory(directoryTree, params) === undefined)
    return photosValidator(params.slice(0, -1))
  return params
}
