import { ParamValidator } from '@/frame-manager/Provider'
import { fileList } from './file-list'

export const pdfValidator: ParamValidator = (params) => {
  const path = params.join('/')
  if (!(path in fileList)) return []
  return params
}
