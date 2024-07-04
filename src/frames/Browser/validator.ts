import { ParamValidator } from '@/frame-manager/Provider'
import { fileList } from './file-list'

export const browserValidator: ParamValidator = (params) => {
  const path = params.join('/')
  if (
    !(path in fileList) &&
    path !== 'introduction' &&
    !/^https?:\/\//.test(path)
  )
    return ['introduction']
  return params
}
