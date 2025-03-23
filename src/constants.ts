import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  SCOLLSEPOLIA = 534351
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x67660fe53DE66135d21f8131Aa06F3Febac21ba7'

export const INIT_CODE_HASH = '0x4176b398485d5d6d6a8080786ecd5a98002cb4ec8c288de065e4a7004a65c485'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _300 = JSBI.BigInt(300)
export const _500 = JSBI.BigInt(500)
export const _997 = JSBI.BigInt(997)
export const _995 = JSBI.BigInt(995)
export const _1000 = JSBI.BigInt(1000)
export const _3000 = JSBI.BigInt(3000)
export const _5000 = JSBI.BigInt(5000)
export const _1000000 = JSBI.BigInt(1000000)
export const feesLevel = [_5000, _3000, _1000, _500, _300, _100]

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
