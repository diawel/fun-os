import { ParamValidator } from '@/frame-manager/Provider'
import { fileList } from './file-list'

export const drawerValidator: ParamValidator = (params) => {
  if (!(params.join('/') in fileList)) return []
  return params
}
