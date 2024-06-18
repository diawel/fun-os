import { ParamValidator } from '@/frame-manager/Provider'

export const websiteValidator: ParamValidator = (params) => {
  if (params.length !== 1 || !/^\d+$/.test(params[0])) return ['0']
  return params
}
