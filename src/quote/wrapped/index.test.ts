import { LocalhostProvider, QuoteTokens } from 'tests/utils'
import { wei } from 'utils/numbers'
import { FlashMintWrappedQuoteRequest, WrappedQuoteProvider } from '.'

const { dai, mmi, usdc, weth } = QuoteTokens
const indexToken = mmi
const provider = LocalhostProvider

describe('WrappedQuoteProvider()', () => {
  beforeEach((): void => {
    jest.setTimeout(100000000)
  })

  test('returns a quote for minting MMI w/ DAI', async () => {
    const inputToken = dai
    const request: FlashMintWrappedQuoteRequest = {
      isMinting: true,
      inputToken,
      outputToken: indexToken,
      indexTokenAmount: wei(1),
      slippage: 0.5,
    }
    const quoteProvider = new WrappedQuoteProvider(provider)
    const quote = await quoteProvider.getQuote(request)
    if (!quote) fail()
    expect(quote.indexTokenAmount).toEqual(request.indexTokenAmount)
    expect(quote.inputOutputTokenAmount.gt(0)).toEqual(true)
    expect(quote.componentSwapData.length).toEqual(6)
    expect(quote.componentWrapData.length).toEqual(6)
  })

  test('returns a quote for minting MMI w/ USDC', async () => {
    const inputToken = usdc
    const request: FlashMintWrappedQuoteRequest = {
      isMinting: true,
      inputToken,
      outputToken: indexToken,
      indexTokenAmount: wei(1),
      slippage: 0.5,
    }
    const quoteProvider = new WrappedQuoteProvider(provider)
    const quote = await quoteProvider.getQuote(request)
    if (!quote) fail()
    expect(quote.indexTokenAmount).toEqual(request.indexTokenAmount)
    expect(quote.inputOutputTokenAmount.gt(0)).toEqual(true)
    expect(quote.componentSwapData.length).toEqual(6)
    expect(quote.componentWrapData.length).toEqual(6)
  })

  test('returns a quote for minting MMI w/ WETH', async () => {
    const inputToken = weth
    const request: FlashMintWrappedQuoteRequest = {
      isMinting: true,
      inputToken,
      outputToken: indexToken,
      indexTokenAmount: wei(1),
      slippage: 0.5,
    }
    const quoteProvider = new WrappedQuoteProvider(provider)
    const quote = await quoteProvider.getQuote(request)
    if (!quote) fail()
    expect(quote.indexTokenAmount).toEqual(request.indexTokenAmount)
    expect(quote.inputOutputTokenAmount.gt(0)).toEqual(true)
    expect(quote.componentSwapData.length).toEqual(6)
    expect(quote.componentWrapData.length).toEqual(6)
  })

  test('returns a quote for redeeming MMI for DAI', async () => {
    const outputToken = dai
    const request: FlashMintWrappedQuoteRequest = {
      isMinting: false,
      inputToken: indexToken,
      outputToken,
      indexTokenAmount: wei(1),
      slippage: 0.5,
    }
    const quoteProvider = new WrappedQuoteProvider(provider)
    const quote = await quoteProvider.getQuote(request)
    if (!quote) fail()
    expect(quote.indexTokenAmount).toEqual(request.indexTokenAmount)
    expect(quote.inputOutputTokenAmount.gt(0)).toEqual(true)
    expect(quote.componentSwapData.length).toEqual(6)
    expect(quote.componentWrapData.length).toEqual(6)
  })

  test('returns a quote for redeeming MMI for USDC', async () => {
    const outputToken = usdc
    const request: FlashMintWrappedQuoteRequest = {
      isMinting: false,
      inputToken: indexToken,
      outputToken,
      indexTokenAmount: wei(1),
      slippage: 0.5,
    }
    const quoteProvider = new WrappedQuoteProvider(provider)
    const quote = await quoteProvider.getQuote(request)
    if (!quote) fail()
    expect(quote.indexTokenAmount).toEqual(request.indexTokenAmount)
    expect(quote.inputOutputTokenAmount.gt(0)).toEqual(true)
    expect(quote.componentSwapData.length).toEqual(6)
    expect(quote.componentWrapData.length).toEqual(6)
  })

  test('returns a quote for redeeming MMI for WETH', async () => {
    const outputToken = weth
    const request: FlashMintWrappedQuoteRequest = {
      isMinting: false,
      inputToken: indexToken,
      outputToken,
      indexTokenAmount: wei(1),
      slippage: 0.5,
    }
    const quoteProvider = new WrappedQuoteProvider(provider)
    const quote = await quoteProvider.getQuote(request)
    if (!quote) fail()
    expect(quote.indexTokenAmount).toEqual(request.indexTokenAmount)
    expect(quote.inputOutputTokenAmount.gt(0)).toEqual(true)
    expect(quote.componentSwapData.length).toEqual(6)
    expect(quote.componentWrapData.length).toEqual(6)
  })
})
