import { ParamValidator } from '@/frame-manager/Provider'

export const counterValidator: ParamValidator = (params) => {
  if (params.length !== 1 || !/^\d+$/.test(params[0])) return ['0']
  return params
}
